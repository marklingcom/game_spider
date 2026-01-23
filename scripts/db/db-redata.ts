import type { SpiderData } from '../../src/gameFrom/info.js';
import { dbManager } from '../../src/models/index.js';
import { MallType, type SpinResponse } from '../../src/protoGeneral/astarte2_196.js';
import { JiliDb } from '../../src/spider/jili/jili_db.js';
import { config, type ServerConfig } from '../../src/utils/config.js';
import { CompressType, decompressData } from '../../src/utils/data_compress.js';
import { SpinDataReader } from '../../src/utils/spin-data-reader.js';
import { getFullGameName, getTableGameName } from '../../src/utils/table.js';

async function reSpinData(
  tableName: string,
  betConfig: ServerConfig['betConfig'],
  options: { pageSize: number }
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
    const { pageSize } = options;
    let errorCount = 0;
    let successCount = 0;

    const handleCount = await reader.readTableDataPaginated(pageSize, async (records, offset) => {
      console.log(`📦 处理数据，第 ${offset} 批，共 ${records.length} 条\n`);

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

          if (spinResponse.spinReq) {
            if (config.serverConfig.betConfig.buyBouns.enable) {
              spinResponse.spinReq.mall = {
                type: MallType.NORMAL_MALL,
                index: config.serverConfig.betConfig.buyBouns.index,
                bet: bet,
              };
            }
            if (config.serverConfig.betConfig.extra.enable) {
              spinResponse.spinReq.extraSpin = {
                index: config.serverConfig.betConfig.extra.index,
              };
            }
          }

          await jiliDb.saveSpinData({ spinResponse, spiderData, isLog: false });

          const oldRecord = await tableModel.findByPk(oldId);
          if (oldRecord) {
            await oldRecord.destroy();
          }

          return { success: true, id: oldId };
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : String(error);
          console.error(` ❌ 处理记录 ${oldId} 失败:`, error);
          return { success: false, id: oldId };
        }
      };

      const workers = records.map(async (item, _index) => {
        const result = await processRecord(item);
        if (result.success) {
          successCount++;
        } else {
          errorCount++;
        }
        // console.log(
        //   `dataIndex: ${index}, 处理结果: ${result.success ? '成功' : '失败'}, id: ${result.id}`
        // );
      });

      await Promise.all(workers);
      console.log(`✅ 处理完成: ${successCount} 条, 错误: ${errorCount} 条`);
    });

    console.log(`\n${'='.repeat(80)}`);
    console.log(`📊 处理结果:`);
    console.log(`总数据量: ${handleCount}, 成功: ${successCount}, 失败: ${errorCount}`);
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
  const tableName = 'jili_spin_mpt_normal_backup';
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
      buyBouns: {
        enable: false,
        index: 0,
        hasDefaultIndex: false,
      },
      extra: {
        enable: false,
        index: 0,
        hasDefaultIndex: false,
      },
      special: false,
    },
    {
      pageSize: 1000,
    }
  );
  process.exit(0);
}

main();
