import type { SpiderData } from '../src/gameFrom/info.js';
import { dbManager } from '../src/models/index.js';
import { MallType, type SpinResponse } from '../src/protoGeneral/astarte2_196.js';
import { JiliDb } from '../src/spider/jili/jili_db.js';
import { config } from '../src/utils/config.js';
import { CompressType, decompressData } from '../src/utils/data_compress.js';
import { SpinDataReader, type TableInfo } from '../src/utils/spin-data-reader.js';
import { getTableGameName } from '../src/utils/table.js';

async function reSpinData(tableInfo: TableInfo) {
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

    const reader = new SpinDataReader(tableInfo);
    await reader.init();
    console.log(`✅ Proto 加载成功`);

    const protoData = reader.getProtoData();
    const gi = protoData.gi;

    const jiliDb = new JiliDb({ db: dbManager, config });
    await jiliDb.init(name);

    console.log(`📊 处理表: ${tableInfo.tableName}\n`);

    const tableModel = await reader.getTableModel();
    const pageSize = 500;
    let errorCount = 0;
    let totalProcessed = 0;

    const result = await reader.readTableDataPaginated(pageSize, async (records, offset) => {
      if (offset === 0) {
        console.log(`📦 开始处理数据（每批 ${pageSize} 条）\n`);
      }

      for (const recordData of records) {
        const oldId = recordData.id;

        if (!recordData.data) {
          errorCount++;
          continue;
        }
        const dataBuffer = await decompressData(
          recordData.compress || CompressType.None,
          Buffer.from(recordData.data)
        );

        try {
          const totalWin = recordData.totalWin || 0;
          const bet = recordData.bet || 0;
          const from = recordData.from || '';

          const spiderData: SpiderData = {
            name,
            token: '',
            spin: '',
            from,
            webSocketData: Buffer.alloc(0),
            gi: gi || 0,
          };

          const spinResponse = {
            data: dataBuffer,
            totalWin: totalWin,
            realBet: bet,
            spinReq: {
              bet: bet,
            },
          } as unknown as SpinResponse;

          if (config.serverConfig.betConfig.buyBouns && spinResponse.spinReq) {
            spinResponse.spinReq.mall = {
              type: MallType.NORMAL_MALL,
              index: 0,
              bet: bet,
            };
          }
          if (config.serverConfig.betConfig.extra && spinResponse.spinReq) {
            spinResponse.spinReq.extraSpin = {
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
    });

    totalProcessed = result.totalProcessed;
    errorCount += result.errorCount;

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
  const tableName = 'jili_spin_bbc_normal_backup';
  const gameName = getTableGameName(tableName);
  await reSpinData({
    gameName,
    tableName,
  });
  process.exit(0);
}

main();
