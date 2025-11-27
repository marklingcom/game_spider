import { writeFileSync } from 'node:fs';
import path from 'node:path';
import protobuf from 'protobufjs';
import type { Model, ModelStatic } from 'sequelize';
import type DatabaseManager from '../models/index.js';
import { dbManager } from '../models/index.js';
import type { JiliProtoAttributes } from '../models/JiliProto.js';
import { config } from './config.js';
import { __protoDir } from './env.js';
import { createDirectoryIfNotExists } from './utils.js';

export interface SpinDataRecord {
  id: number;
  data: Buffer;
  totalWin: number;
  bet: number;
  rate: number;
  from: string;
  createTime: Date;
  compress?: number;
}

export interface QueryOptions {
  attributes?: string[];
  order?: [string, string][];
  where?: { id?: number };
  limit?: number;
  offset?: number;
}

export interface TableInfo {
  gameName: string;
  tableName: string;
}

export class SpinDataReader {
  private db: DatabaseManager;
  private protoData: JiliProtoAttributes | null = null;
  private spinAckType: protobuf.Type | null = null;
  private gameProto: protobuf.Namespace | null = null;
  private tableInfo: TableInfo;
  constructor(tableInfo: TableInfo) {
    this.db = dbManager;
    this.tableInfo = tableInfo;
  }

  async init(): Promise<void> {
    await this.db.initDB(config.serverConfig.db);
    console.log('✅ 成功连接到数据库');
    await this.loadProto();
    console.log(`✅ Proto 加载成功`);
  }

  private async loadProto(): Promise<void> {
    const jiliProtoModel = this.db.jiliProto;
    const jiliProto = await jiliProtoModel.findOne({
      where: { name: this.tableInfo.gameName },
    });

    if (!jiliProto) {
      throw new Error(`未找到 jili_proto 记录: ${this.tableInfo.gameName}`);
    }

    this.protoData = jiliProto.toJSON() as JiliProtoAttributes;
    const spinPbName = this.protoData.spinPbName;

    if (!spinPbName) {
      throw new Error(`jili_proto 中未找到 spinPbName: ${this.tableInfo.gameName}`);
    }

    if (!this.protoData.data) {
      throw new Error(`jili_proto 中未找到 data: ${this.tableInfo.gameName}`);
    }

    createDirectoryIfNotExists(__protoDir);

    const protoFilePath = path.join(__protoDir, `${this.tableInfo.gameName}.proto`);
    writeFileSync(protoFilePath, this.protoData.data, 'utf8');

    const root = await protobuf.load(protoFilePath);
    const messages = Object.values(root.nested || {}).filter(
      (v) => v instanceof protobuf.Namespace
    );
    this.gameProto = messages[0] as protobuf.Namespace;

    if (!this.gameProto) {
      throw new Error(`无法加载 proto: ${this.tableInfo.gameName}`);
    }

    this.spinAckType = this.gameProto.lookupType(spinPbName);
    if (!this.spinAckType) {
      throw new Error(`无法找到类型: ${spinPbName}`);
    }
  }

  getProtoData(): JiliProtoAttributes {
    if (!this.protoData) {
      throw new Error('Proto 数据未初始化，请先调用 init()');
    }
    return this.protoData;
  }

  async getTableModel(): Promise<ModelStatic<Model>> {
    return await this.db.ensureTableExists(this.tableInfo.tableName);
  }

  getSpinAckType(): protobuf.Type {
    if (!this.spinAckType) {
      throw new Error('Proto 类型未初始化，请先调用 init()');
    }
    return this.spinAckType;
  }

  decodeData(dataBuffer: Buffer): unknown {
    if (!this.spinAckType) {
      throw new Error('Proto 类型未初始化，请先调用 init()');
    }
    return (this.spinAckType as { decode: (buffer: Buffer) => unknown }).decode(dataBuffer);
  }

  async readTableData(options: QueryOptions = {}): Promise<SpinDataRecord[]> {
    const queryOptions: QueryOptions = {
      // attributes: ['id', 'data', 'totalWin', 'bet', 'rate', 'from', 'createTime'],
      order: [['id', 'ASC']],
      limit: 10,
      offset: 0,
      ...options,
    };

    const tableModel = await this.getTableModel();

    const spinDataList = (await tableModel.findAll(queryOptions)) as unknown[];

    return spinDataList.map(
      (record) => (record as { toJSON: () => unknown }).toJSON() as SpinDataRecord
    );
  }

  async readTableDataPaginated(
    pageSize: number = 500,
    onPage?: (records: SpinDataRecord[], offset: number) => Promise<void>
  ): Promise<{ totalProcessed: number; errorCount: number }> {
    let offset = 0;
    let totalProcessed = 0;
    let errorCount = 0;

    while (true) {
      const records = await this.readTableData({
        order: [['id', 'ASC']],
        limit: pageSize,
        offset: offset,
      });

      if (!records || records.length === 0) {
        break;
      }

      if (onPage) {
        try {
          await onPage(records, offset);
          totalProcessed += records.length;
        } catch (error) {
          errorCount += records.length;
          const errorMessage = error instanceof Error ? error.message : String(error);
          console.error(`处理批次失败 (offset: ${offset}):`, errorMessage);
        }
      } else {
        totalProcessed += records.length;
      }

      offset += pageSize;
    }

    return { totalProcessed, errorCount };
  }

  convertToBuffer(data: Buffer | unknown): Buffer {
    if (Buffer.isBuffer(data)) {
      return data;
    }
    return Buffer.from(data as ArrayLike<number>);
  }
}
