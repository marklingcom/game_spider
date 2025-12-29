import type { SpiderData } from '../src/gameFrom/info.js';
import { dbManager } from '../src/models/index.js';
import { MallType, type SpinResponse } from '../src/protoGeneral/astarte2_196.js';
import { JiliDb } from '../src/spider/jili/jili_db.js';
import { config, type ServerConfig } from '../src/utils/config.js';
import { CompressType, decompressData } from '../src/utils/data_compress.js';
import { SpinDataReader } from '../src/utils/spin-data-reader.js';
import { getFullGameName, getTableGameName } from '../src/utils/table.js';

async function reSpinData(
  tableName: string,
  betConfig: ServerConfig['betConfig'],
  options: { pageSize: number; concurrency: number }
) {
  try {
    console.log('🔍 开始重新保存数据');
    config.updateBetConfig(betConfig);

    await dbManager.initDB(config.serverConfig.db);
    console.log('✅ 成功连接到数据库');

    const { gameName } = config.serverConfig.betConfig;
    if (!gameName) {
      throw new Error('配置中未找到 gameName');
    }
    const name = config.currentJiliGame.jiliConfig.name;

    console.log(`📋 游戏名: ${gameName} (${name}) 表名: ${tableName}`);

    const reader = new SpinDataReader({
      gameName: name,
      tableName,
    });
    await reader.init();
    console.log(`✅ Proto 加载成功`);

    const protoData = reader.getProtoData();
    const gi = protoData.gi;

    const jiliDb = new JiliDb({ db: dbManager, config });
    await jiliDb.init(name);

    console.log(`📊 处理表: ${tableName}\n`);

    const tableModel = await reader.getTableModel();
    const { pageSize, concurrency } = options;
    let errorCount = 0;
    let totalProcessed = 0;

    const result = await reader.readTableDataPaginated(pageSize, async (records, offset) => {
      if (offset === 0) {
        console.log(`📦 开始处理数据（每批 ${pageSize} 条，并发数: ${concurrency}）\n`);
      }

      const processRecord = async (recordData: (typeof records)[0]) => {
        const oldId = recordData.id;

        if (!recordData.data) {
          return { success: false, id: oldId };
        }

        try {
          const dataBuffer = await decompressData(
            recordData.compress || CompressType.None,
            Buffer.from(recordData.data)
          );

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

          return { success: true, id: oldId };
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : String(error);
          console.error(` ❌ 处理记录 ${oldId} 失败:`, errorMessage);
          return { success: false, id: oldId };
        }
      };

      for (let i = 0; i < records.length; i += concurrency) {
        const batch = records.slice(i, i + concurrency);
        const results = await Promise.allSettled(batch.map(processRecord));

        for (const result of results) {
          if (result.status === 'fulfilled') {
            if (result.value.success) {
              totalProcessed++;
            } else {
              errorCount++;
            }
          } else {
            errorCount++;
          }
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
  const tableName = 'jili_spin_tks_normal_backup';
  const name = getTableGameName(tableName);
  const fullName = getFullGameName(name);
  if (!fullName) {
    console.error(`❌ 游戏 ${name} 不存在`);
    process.exit(1);
  }
  await reSpinData(
    tableName,
    {
      gameName: fullName,
      bet: 0,
      buyBouns: false,
      extra: false,
      special: false,
    },
    {
      pageSize: 1000,
      concurrency: 100,
    }
  );
  process.exit(0);
}

main();
