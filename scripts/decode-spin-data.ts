import { writeFileSync } from 'node:fs';
import path from 'node:path';
import protobuf from 'protobufjs';
import { dbManager } from '../src/models/index.js';
import { config } from '../src/utils/config.js';
import { __protoDir } from '../src/utils/env.js';
import { createDirectoryIfNotExists } from '../src/utils/utils.js';

async function decodeSpinData(name: string, tableName?: string, id?: number) {
  try {
    console.log(`🔍 开始处理游戏: ${name}`);

    await dbManager.initDB(config.serverConfig.db);
    console.log('✅ 成功连接到数据库');

    const jiliProtoModel = dbManager.jiliProto;
    const jiliProto = await jiliProtoModel.findOne({
      where: { name },
    });

    if (!jiliProto) {
      throw new Error(`未找到 jili_proto 记录: ${name}`);
    }

    const protoData = jiliProto.toJSON();
    const spinPbName = protoData.spinPbName;

    if (!spinPbName) {
      throw new Error(`jili_proto 中未找到 spinPbName: ${name}`);
    }

    if (!protoData.data) {
      throw new Error(`jili_proto 中未找到 data: ${name}`);
    }

    console.log(`📋 找到 proto 定义，spinPbName: ${spinPbName}`);

    createDirectoryIfNotExists(__protoDir);

    const protoFilePath = path.join(__protoDir, `${name}.proto`);
    writeFileSync(protoFilePath, protoData.data, 'utf8');

    const root = await protobuf.load(protoFilePath);
    const messages = Object.values(root.nested || {}).filter(
      (v) => v instanceof protobuf.Namespace
    );
    const gameProto = messages[0] as protobuf.Namespace;

    if (!gameProto) {
      throw new Error(`无法加载 proto: ${name}`);
    }

    const spinAckType = gameProto.lookupType(spinPbName);
    if (!spinAckType) {
      throw new Error(`无法找到类型: ${spinPbName}`);
    }

    console.log(`✅ Proto 加载成功`);

    const targetTableName = tableName || 'spin_data';
    if (id) {
      console.log(`📊 从表 ${targetTableName} 查询 ID 为 ${id} 的记录...`);
    } else {
      console.log(`📊 从表 ${targetTableName} 读取数据...`);
    }

    const SpinDataModel = dbManager.getModel('SpinData');
    if (!SpinDataModel) {
      throw new Error('无法获取 SpinDataModel');
    }

    const queryOptions: {
      attributes: string[];
      order?: [string, string][];
      where?: { id: number };
    } = {
      attributes: ['id', 'data', 'totalWin', 'bet', 'rate', 'from', 'createTime'],
    };

    if (id) {
      queryOptions.where = { id };
    } else {
      queryOptions.order = [['id', 'DESC']];
    }

    let spinDataList: unknown[];
    if (targetTableName === 'spin_data') {
      spinDataList = (await SpinDataModel.findAll(queryOptions)) as unknown[];
    } else {
      const tableModel = await dbManager.ensureTableExists(targetTableName);
      spinDataList = (await tableModel.findAll(queryOptions)) as unknown[];
    }

    if (!spinDataList || spinDataList.length === 0) {
      console.log(`⚠️  表 ${targetTableName} 中没有数据`);
      return;
    }

    console.log(`📦 找到 ${spinDataList.length} 条记录\n`);

    for (let i = 0; i < spinDataList.length; i++) {
      const record = spinDataList[i] as { toJSON: () => unknown };
      const recordData = record.toJSON() as {
        id: number;
        data?: Buffer | unknown;
        totalWin?: number;
        bet?: number;
        rate?: number;
        from?: string;
        createTime?: Date;
      };
      if (!recordData.data) {
        console.log(`⚠️  记录 ${recordData.id} 的 data 字段为空，跳过`);
        continue;
      }

      const dataBuffer: Buffer = Buffer.isBuffer(recordData.data)
        ? recordData.data
        : Buffer.from(recordData.data as ArrayLike<number>);

      if (dataBuffer.length === 0) {
        console.log(`⚠️  记录 ${recordData.id} 的 data 字段长度为 0，跳过`);
        continue;
      }

      try {
        const decodedData = (spinAckType as { decode: (buffer: Buffer) => unknown }).decode(
          dataBuffer
        );
        const jsonData = JSON.stringify(decodedData, null, 2);

        console.log(`${'='.repeat(80)}`);
        console.log(`记录 ID: ${recordData.id}`);
        console.log(`总赢: ${recordData.totalWin || 0}`);
        console.log(`下注: ${recordData.bet || 0}`);
        console.log(`回报率: ${recordData.rate || 0}`);
        console.log(`来源: ${recordData.from || 'N/A'}`);
        console.log(`创建时间: ${recordData.createTime || 'N/A'}`);
        console.log(`${'='.repeat(80)}`);
        console.log('解码后的 JSON 数据:');
        console.log(jsonData);
        console.log('\n');
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error(`❌ 解码记录 ${recordData.id} 失败:`, errorMessage);
        console.log(`   数据长度: ${dataBuffer.length} bytes\n`);
      }
    }

    await dbManager.getDB()?.close();
    console.log('✅ 处理完成');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('❌ 脚本执行失败:', errorMessage);
    process.exit(1);
  }
}

async function main() {
  // const args = process.argv.slice(2);

  // if (args.length === 0) {
  //   console.log('用法: tsx scripts/decode-spin-data.ts <name> [tableName] [id]');
  //   console.log('  name: 游戏名称（必需）');
  //   console.log('  tableName: 表名（可选，默认为 spin_data）');
  //   console.log('  id: 记录 ID（可选，指定则只查询该 ID 的记录）');
  //   process.exit(1);
  // }

  // const name = args[0];
  // const tableName = args[1];
  // const id = args[2] ? parseInt(args[2], 10) : undefined;

  // if (Number.isNaN(id as number) && id !== undefined) {
  //   console.error('❌ id 必须是数字');
  //   process.exit(1);
  // }
  const name = 'ge';
  const tableName = 'jili_spin_ge_normal';
  const id = 58984;

  await decodeSpinData(name, tableName, id);
  process.exit(0);
}

main();
