import { writeFileSync } from 'node:fs';
import path from 'node:path';
import protobuf from 'protobufjs';
import type { SpiderData } from '../gameFrom/info.js';
import type DatabaseManager from '../models/index.js';
import type { JiliGameInfoAttributes } from '../models/JiliGameInfo.js';
import type { JiliProtoAttributes } from '../models/JiliProto.js';
import type { SpinDataAttributes } from '../models/SpinData.js';
import { SpinResponse } from '../protoGeneral/astarte2_196.js';
import type Config from '../utils/config.js';
import { decryptResponseBuffer } from '../utils/decrypt.js';
import { __protoDir } from '../utils/env.js';
import { createDirectoryIfNotExists, formatNumber } from '../utils/utils.js';

export default class JiliData {
  private db: DatabaseManager;
  private config: Config;

  private spiderData: SpiderData;

  special = 20000;
  normal = 300000;

  currentSpecial = 0;
  currentNormal = 0;

  constructor(options: {
    db: DatabaseManager;
    config: Config;
    spiderData: SpiderData;
  }) {
    this.db = options.db;
    this.config = options.config;
    this.spiderData = options.spiderData;
  }

  async saveGameInfo(data: Buffer, gaiaResponseData: Buffer): Promise<JiliGameInfoAttributes> {
    if (!gaiaResponseData || gaiaResponseData.length === 0) {
      throw new Error('gaiaResponseData is empty');
    }

    const value =
      (await this.db.getModel('JiliGameInfo').findOne({
        where: { name: this.spiderData.name },
      })) || null;

    const info = {
      name: this.spiderData.name,
      from: this.spiderData.from,
      data: gaiaResponseData,
      fullData: data,
      gi: this.spiderData.gi,
    };

    if (!value) {
      const gameInfo = await this.db.getModel('JiliGameInfo').create(info);
      return gameInfo.toJSON();
    } else {
      await this.db.getModel('JiliGameInfo').update(info, {
        where: { name: this.spiderData.name },
      });
      return info;
    }
  }

  async saveSpinData(spinBuffer: Buffer): Promise<void> {
    const { gaiaResponseData } = await decryptResponseBuffer(spinBuffer, this.spiderData.token);
    if (!gaiaResponseData || gaiaResponseData.length === 0) {
      throw new Error('gaiaResponseData is empty');
    }

    const gameName = this.spiderData.name;

    const spinResponse = SpinResponse.fromBinary(gaiaResponseData);

    const gameProto = await this.checkProto(gameName);
    const spinPbName = await this.getSpinPbName(gameName);

    if (!spinPbName) {
      throw new Error(`spinPbName is empty:${gameName}`);
    }

    if (spinResponse.data.length === 0) {
      throw new Error(`spin_data error!`);
    }

    const spinAck = gameProto.lookupType(spinPbName);

    const spinAckData = spinAck.decode(spinResponse.data);

    const jsonData = JSON.stringify(spinAckData);
    console.log('spinResponse:', jsonData);

    let gameType = 0;

    if (spinPbName === 'AllPlate') {
      const spinData = JSON.parse(jsonData);
      const plates = spinData.plate || [];

      if (plates.length > 1) {
        for (let i = 0; i < plates.length; i++) {
          const plate = plates[i];
          const onesCount = this.countOnesInPlate(plate);
          if (onesCount >= 3) {
            gameType = 1;
            break;
          }
        }
      }
    } else {
      const freeTotalWinRegex = /"FreeTotalWin"\s*:\s*"?([0-9]+(?:\.[0-9]+)?)"?/g;
      const matches = jsonData.match(freeTotalWinRegex);

      if (matches && matches.length > 0) {
        gameType = 1;
      }
    }

    const realBet = spinResponse.realBet || 0;
    let tabName = `jili_spin_${gameName}`;

    if (this.config.betConfig.bet !== 0) {
      tabName += `_${Math.floor(this.config.betConfig.bet)}`;
    }

    if (spinResponse.spinReq?.mall) {
      tabName += '_buy';
    } else if (spinResponse.spinReq?.extraSpin) {
      tabName += '_extra';
    }

    const isSpecial = gameType === 1;
    if (isSpecial) {
      tabName += '_special';
    } else {
      tabName += '_normal';
    }

    const spinData: SpinDataAttributes = {
      data: Buffer.from(spinResponse.data),
      totalWin: spinResponse.totalWin || 0,
      from: this.spiderData.from,
      bet: realBet,
      rate: formatNumber((spinResponse.totalWin || 0) / realBet, 6),
    };

    const model = await this.db.ensureTableExists(tabName);
    await model.create({
      data: spinData.data,
      totalWin: spinData.totalWin,
      from: spinData.from,
      bet: spinData.bet,
      rate: spinData.rate,
    });
  }

  private pbMap: Map<string, unknown> = new Map();
  private jiliProtoMap: Map<string, JiliProtoAttributes> = new Map();

  private async syncJiliProto(name: string): Promise<JiliProtoAttributes> {
    const jiliProto = await this.db.getModel('JiliProto').findOne({
      where: { name },
    });

    if (!jiliProto) {
      throw new Error(`not found proto:${name}`);
    }

    const result = jiliProto.toJSON();
    this.jiliProtoMap.set(name, result);
    return result;
  }

  private async checkProto(name: string): Promise<protobuf.Namespace> {
    if (!this.pbMap.has(name)) {
      await this.syncJiliProto(name);
    }
    const result = this.jiliProtoMap.get(name);

    createDirectoryIfNotExists(__protoDir);

    // 将 proto 内容写入文件
    const protoFilePath = path.join(__protoDir, `${this.spiderData.name}.proto`);
    writeFileSync(protoFilePath, result.data, 'utf8');

    // 使用 protobufjs 编译
    const root = await protobuf.load(protoFilePath);

    // 获取所有 message
    const messages = Object.values(root.nested).filter((v) => v instanceof protobuf.Namespace);

    // 缓存结果
    this.pbMap.set(result.name, messages[0]);
    return messages[0];
  }

  private async getSpinPbName(name: string): Promise<string> {
    if (!this.jiliProtoMap.has(name)) {
      await this.syncJiliProto(name);
    }
    return this.jiliProtoMap.get(name).spinPbName;
  }

  private countOnesInPlate(plate: unknown): number {
    let count = 0;

    const plateObj = plate as { column?: unknown[] };
    const columns = plateObj.column || [];

    for (let i = 0; i < columns.length; i++) {
      const column = columns[i] as { row?: unknown[] };
      const rows = column.row || [];

      for (let j = 0; j < rows.length; j++) {
        const value = rows[j];

        if (value === null || value === undefined) {
          // 值为null
        } else if (typeof value === 'number') {
          if (value === 1) {
            count++;
          }
        } else if (typeof value === 'string') {
          if (value === 'Bonus') {
            count++;
          }
        } else if (
          typeof value === 'object' &&
          value !== null &&
          (value as { symbol?: string }).symbol === 'Bonus'
        ) {
          count++;
        }
      }
    }

    return count;
  }

  private checkCount() {
    // const maxRecords = isSpecial ? this.special : this.normal;
    // let count = 0;
    // try {
    //   const tableExists = await this.db.getDB().getQueryInterface().showAllTables();
    //   if (tableExists.includes(tabName)) {
    //     count = await this.db
    //       .getDB()
    //       .query(`SELECT COUNT(*) as count FROM ${tabName}`, {
    //         type: QueryTypes.SELECT,
    //       })
    //       .then((result: unknown[]) => (result[0] as { count: number })?.count || 0);
    //   }
    // } catch (error) {
    //   console.log(`统计表 ${tabName} 记录数失败:`, error);
    //   return;
    // }
    // if (isSpecial) {
    //   this.currentSpecial = count;
    // } else {
    //   this.currentNormal = count;
    // }
    // if (this.currentSpecial % 10 === 0) {
    //   console.log(`INFO: 表 ${tabName} 当前记录数: ${this.currentSpecial}, 最大记录数: ${this.special}`);
    // }
    // if (this.currentSpecial >= this.special) {
    //   console.log(`ERROR: 表 ${tabName} 记录数 ${this.currentSpecial} 超过最大限制 ${this.special}，程序停止`);
    // } else {
  }
}
