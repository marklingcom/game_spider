import { debounce } from 'lodash-es';
import { getGameInfo } from './gameFrom/index.js';
import { dbManager } from './models/index.js';
import { JiliDb } from './spider/jili/jili_db.js';
import { SpiderWork, SpiderWorkEvent } from './spider/spider.js';
import { config } from './utils/config.js';
import { RetError } from './utils/errors.js';
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
    const uid = config.huiduUidList[i];
    try {
      await sleep(time);
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
      let errorMessage = `❌ 第 ${i} 个账号 ${uid} 执行失败: ${(error as Error).message}`;
      const stackTrace = (error as Error).stack || '无堆栈信息';

      if (error instanceof RetError) {
        if (error.retCode === 254) {
          errorMessage = `❌ 第 ${i} 个账号 ${uid} 遇到 ret 254 错误：接口请求太频繁`;
        } else if (error.retCode === 305) {
          errorMessage = `❌ 第 ${i} 个账号 ${uid} 遇到 ret 305 错误，已跳过：账号没钱了，请充值!!!`;
          telegramService.sendError(errorMessage);
          return;
        } else {
          errorMessage = `❌ 第 ${i} 个账号 ${uid} 遇到 ret ${error.retCode} 错误`;
        }
      }

      if (isSpinSave) {
        spinCount--;
      }
      console.log(errorMessage);
      console.log('堆栈信息:', stackTrace);
      telegramService.sendError(`开始重试: ${errorMessage}`, `堆栈信息:\n${stackTrace}`);
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
