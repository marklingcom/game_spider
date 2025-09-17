import { debounce } from 'lodash-es';
import { getGameInfo } from './gameFrom/index.js';
import { dbManager } from './models/index.js';
import { JiliDb } from './spider/jili/jili_db.js';
import { SpiderWork, SpiderWorkEvent } from './spider/spider.js';
import { config } from './utils/config.js';
import { telegramService } from './utils/telegram.js';
import { sleep } from './utils/utils.js';

async function main(): Promise<void> {
  console.log('配置文件加载成功');

  await dbManager.initDB(config.serverConfig.db);

  if (config.serverConfig.spiderConfig.autoMigrate) {
    console.log('🔄 运行数据库迁移...');
    try {
      await dbManager.sync(false);
      console.log('✅ 数据库迁移完成');
    } catch (error) {
      console.log(`⚠️ 数据库迁移失败: ${(error as Error).message}`);
      console.log('继续执行导入操作...');
    }
  }

  const { gameName, bet, buyBouns, extra } = config.serverConfig.betConfig;

  telegramService.sendSuccess(
    `开始执行抓取任务: ${gameName}
form: ${config.serverConfig.spiderConfig.form}
bet: ${bet}
buyBouns: ${buyBouns}
extra: ${extra}
total: 总共${config.huiduUidList.length}个账号
`
  );

  let spinCount = 0;

  const onSpinCountNotify = debounce(() => {
    telegramService.sendInfo(`当前抓取账号数量: ${spinCount}`);
  }, 3000);

  const jiliDb = new JiliDb({ db: dbManager, config });

  const run = async (i: number, time: number = 1000 * i) => {
    let isSpinSave = false;
    try {
      await sleep(time);
      const uid = config.huiduUidList[i];
      console.log(`开始执行第 ${i} 个账号: ${uid}`);
      const gameInfo = await getGameInfo(config, uid);
      const spiderWork = new SpiderWork({
        config,
        spiderData: gameInfo,
        jiliDb,
      });

      spiderWork.once(SpiderWorkEvent.SPIN_SAVE, () => {
        isSpinSave = true;
        spinCount++;
        onSpinCountNotify();
      });

      await spiderWork.start();
    } catch (error) {
      const errorMessage = `重试：第 ${i} 个账号执行失败: ${(error as Error).message}`;
      const stackTrace = (error as Error).stack || '无堆栈信息';

      if (isSpinSave) {
        spinCount--;
        // onSpinCountNotify();
        telegramService.sendError(errorMessage, `堆栈信息:\n${stackTrace}`);
      }
      console.log(errorMessage);
      console.log('堆栈信息:', stackTrace);
      // 固定2000ms重试
      await run(i, 2000);
    }
  };

  await Promise.all(
    config.huiduUidList.map(async (_uid, i) => {
      await run(i);
    })
  );

  console.log('程序执行结束');
  process.exit(0);
}

main().catch((error) => {
  console.error('未捕获的错误:', error);
  process.exit(1);
});
