import { getGameInfo } from './gameFrom/index.js';
import { dbManager } from './models/index.js';
import SpiderWork from './spider/spider.js';
import { configData } from './utils/config.js';

async function main(): Promise<void> {
  configData.loadConfig('./config/server.yaml');
  console.log('配置文件加载成功');

  await dbManager.initDB(configData.db);

  if (configData.config.autoMigrate) {
    console.log('🔄 运行数据库迁移...');
    try {
      await dbManager.sync(false);
      console.log('✅ 数据库迁移完成');
    } catch (error) {
      console.log(`⚠️ 数据库迁移失败: ${(error as Error).message}`);
      console.log('继续执行导入操作...');
    }
  }

  const gameInfo = await getGameInfo();
  // console.log('游戏信息获取完成', gameInfo);

  const spiderWork = new SpiderWork({ db: dbManager, config: configData, spiderData: gameInfo });

  await spiderWork.start();
  console.log('程序执行完成');
}

if (import.meta.url === `file://${process.argv[1]}`) {
  main().catch((error) => {
    console.error('未捕获的错误:', error);
    process.exit(1);
  });
}
