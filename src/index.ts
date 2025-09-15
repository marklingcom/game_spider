import { getGameInfo } from './gameFrom/index.js';
import { dbManager } from './models/index.js';
import { JiliDb } from './spider/jili_db.js';
import { SpiderWork } from './spider/spider.js';
import Config from './utils/config.js';
import { sleep } from './utils/utils.js';

async function main(): Promise<void> {
  const configData = new Config('./config/server.yaml');
  console.log('配置文件加载成功');

  await dbManager.initDB(configData.db);

  if (configData.spiderConfig.autoMigrate) {
    console.log('🔄 运行数据库迁移...');
    try {
      await dbManager.sync(false);
      console.log('✅ 数据库迁移完成');
    } catch (error) {
      console.log(`⚠️ 数据库迁移失败: ${(error as Error).message}`);
      console.log('继续执行导入操作...');
    }
  }

  const jiliDb = new JiliDb({ db: dbManager, config: configData });

  const run = async (i: number, time: number = 1000 * i) => {
    try {
      await sleep(time);
      const uid = configData.huiduConfig.uidList[i];
      console.log(`开始执行第 ${i} 个账号: ${uid}`);
      const gameInfo = await getGameInfo(configData, i);
      const spiderWork = new SpiderWork({
        config: configData,
        spiderData: gameInfo,
        jiliDb,
      });

      await spiderWork.start();
    } catch (error) {
      console.log(`重试：第 ${i} 个账号执行失败: ${(error as Error).message}`);
      // 固定2000ms重试
      await run(i, 2000);
    }
  };

  await Promise.all(
    configData.huiduConfig.uidList.map(async (_uid, i) => {
      await run(i);
    })
  );

  console.log('程序执行结束');
  process.exit(0);
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error('未捕获的错误:', error);
    process.exit(1);
  });
}
