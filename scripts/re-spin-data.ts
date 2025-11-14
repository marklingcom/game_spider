import { writeFileSync } from 'node:fs';
import path from 'node:path';
import protobuf from 'protobufjs';
import type { SpiderData } from '../src/gameFrom/info.js';
import { dbManager } from '../src/models/index.js';
import { MallType, type SpinResponse } from '../src/protoGeneral/astarte2_196.js';
import { JiliDb } from '../src/spider/jili/jili_db.js';
import { config } from '../src/utils/config.js';
import { __protoDir } from '../src/utils/env.js';
import { createDirectoryIfNotExists } from '../src/utils/utils.js';

async function reSpinData(tableName: string) {
  try {
    console.log('🔍 开始重新保存数据');

    await dbManager.initDB(config.serverConfig.db);
    console.log('✅ 成功连接到数据库');

    const { gameName } = config.serverConfig.betConfig;
    if (!gameName) {
      throw new Error('配置中未找到 gameName');
    }

    const name = config.currentJiliGame.jiliConfig.name;
    console.log(`📋 游戏名称: ${gameName} (${name})`);

    const jiliProtoModel = dbManager.jiliProto;
    const jiliProto = await jiliProtoModel.findOne({
      where: { name },
    });

    if (!jiliProto) {
      throw new Error(`未找到 jili_proto 记录: ${name}`);
    }

    const protoData = jiliProto.toJSON();
    const gi = protoData.gi;
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

    const jiliDb = new JiliDb({ db: dbManager, config });
    await jiliDb.init(name);

    console.log(`📊 处理表: ${tableName}\n`);

    const tableModel = await dbManager.ensureTableExists(tableName);
    const pageSize = 500;
    const offset = 0;
    let errorCount = 0;
    let totalProcessed = 0;

    while (true) {
      let spinDataList: unknown[];
      try {
        const queryOptions: {
          attributes: string[];
          order: [string, string][];
          limit: number;
          offset: number;
        } = {
          attributes: ['id', 'data', 'totalWin', 'bet', 'rate', 'from', 'createTime'],
          order: [['id', 'ASC']],
          limit: pageSize,
          offset: offset,
        };

        spinDataList = (await tableModel.findAll(queryOptions)) as unknown[];
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        throw new Error(`无法访问表 ${tableName}: ${errorMessage}`);
      }

      if (!spinDataList?.length) {
        break;
      }

      if (offset === 0) {
        console.log(`📦 开始处理数据（每批 ${pageSize} 条）\n`);
      }

      for (let i = 0; i < spinDataList.length; i++) {
        const record = spinDataList[i] as { toJSON: () => unknown };
        const recordData = record.toJSON() as {
          id: number;
          data: Buffer | unknown;
          totalWin?: number;
          bet?: number;
          rate?: number;
          from?: string;
          createTime?: Date;
        };

        const oldId = recordData.id;

        if (!recordData.data) {
          errorCount++;
          continue;
        }

        const dataBuffer: Buffer = Buffer.isBuffer(recordData.data)
          ? recordData.data
          : Buffer.from(recordData.data as ArrayLike<number>);

        if (dataBuffer.length === 0) {
          errorCount++;
          continue;
        }

        try {
          // const decodedData = (spinAckType as { decode: (buffer: Buffer) => unknown }).decode(
          //   dataBuffer
          // );

          const totalWin = recordData.totalWin || 0;
          const bet = recordData.bet || 0;
          const from = recordData.from || '';

          const spiderData: SpiderData = {
            name,
            token: '',
            spin: '',
            from,
            webSocketData: Buffer.alloc(0),
            gi,
          };

          const spinResponse: SpinResponse = {
            data: dataBuffer,
            totalWin: totalWin,
            realBet: bet,
            spinReq: {
              bet: bet,
            },
          } as any;

          if (config.serverConfig.betConfig.buyBouns) {
            spinResponse.spinReq!.mall = {
              type: MallType.NORMAL_MALL,
              index: 0,
              bet: bet,
            };
          }
          if (config.serverConfig.betConfig.extra) {
            spinResponse.spinReq!.extraSpin = {
              index: 0,
            };
          }

          await jiliDb.saveSpinData(spinResponse, spiderData);

          const oldRecord = await tableModel.findByPk(oldId);
          if (oldRecord) {
            await oldRecord.destroy();
          }

          totalProcessed++;
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : String(error);
          console.error(` ❌ 处理记录 ${oldId} 失败:`, errorMessage);
          errorCount++;
        }
        console.log(`✅ 处理完成: ${totalProcessed} 条, 错误: ${errorCount} 条`);
      }
    }

    console.log(`\n${'='.repeat(80)}`);
    console.log(`📊 处理结果:`);
    console.log(`处理完成: ${totalProcessed}, 错误: ${errorCount}`);
    console.log(`${'='.repeat(80)}`);

    await dbManager.getDB()?.close();
    console.log('✅ 处理完成');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('❌ 脚本执行失败:', errorMessage);
    throw error;
  }
}

async function main() {
  // await reSpinData('jili_spin_ge_normal-backup');
  // await reSpinData('jili_spin_ge_extra_normal-backup');
  await reSpinData('jili_spin_cbt_normal-backup');
  process.exit(0);
}

main();
