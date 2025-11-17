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

  const { gameName, bet, buyBouns, extra, special } = config.serverConfig.betConfig;
  const currentUidList = [...config.huiduUidList];
  const noMoneyAccounts = [...config.serverConfig.huiduConfig.noMoneyAccounts];
  var maxCount = config.serverConfig.huiduConfig.maxCount || 0;
  const totalCount = currentUidList.length;
  if (maxCount <= 0) {
    maxCount = totalCount;
  }

  telegramService.sendSuccess(
    `开始执行抓取任务: ${gameName}
form: ${config.serverConfig.spiderConfig.form}
bet: ${bet}
buyBouns: ${buyBouns}
extra: ${extra}
special: ${special}
total: 总共${totalCount}个账号
`
  );

  let spinCount = 0;
  let currentIndex = 0;

  const onSpinCountNotify = debounce(() => {
    const msg = `当前抓取账号数量: ${totalCount}`;
    console.log(msg);
    telegramService.sendInfo(msg);
  }, 3000);

  const onNoMoneyAccountsNotify = debounce(() => {
    const msg = `💰 没钱需要充值的账号 (${noMoneyAccounts.length}个): ${noMoneyAccounts.join(', ')}`;
    console.log(msg);
    telegramService.sendWarning(msg);
  }, 3000);

  const jiliDb = new JiliDb({ db: dbManager, config });

  const getNextAvailableUid = (): number | null => {
    while (currentIndex < currentUidList.length) {
      const uid = currentUidList[currentIndex];
      if (!noMoneyAccounts.includes(uid)) {
        currentIndex++;
        return uid;
      }
      currentIndex++;
    }
    return null;
  };

  const run = async (uid: number, time: number = 1000) => {
    let isSpinSave = false;
    try {
      await sleep(time);
      console.log(`开始执行账号: ${uid}`);
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
      let errorMessage = `账号 ${uid} 执行失败: ${(error as Error).message}`;
      const stackTrace = (error as Error).stack || '无堆栈信息';

      if (error instanceof RetError) {
        if (error.retCode === 254) {
          errorMessage = `账号 ${uid} 遇到 ret 254 错误：接口请求太频繁`;
        } else if (error.retCode === 305) {
          if (!noMoneyAccounts.includes(uid)) {
            noMoneyAccounts.push(uid);
            config.updateNoMoneyAccounts(noMoneyAccounts);
          }
          errorMessage = `账号 ${uid} 遇到 ret 305 错误，已跳过：账号没钱了，请充值!!! (当前没钱账号: ${noMoneyAccounts.length}个)`;
          console.log(errorMessage);
          telegramService.sendError(errorMessage);
          onNoMoneyAccountsNotify();

          const nextUid = getNextAvailableUid();
          if (nextUid) {
            const msg = `替换账号: ${uid} -> ${nextUid}`;
            console.log(msg);
            telegramService.sendInfo(msg);
            await run(nextUid, 1000);
          }
          return;
        } else {
          errorMessage = `账号 ${uid} 遇到 ret ${error.retCode} 错误`;
        }
      }

      if (isSpinSave) {
        spinCount--;
      }
      console.log(errorMessage);
      console.log('堆栈信息:', stackTrace);
      telegramService.sendError(`开始重试: ${errorMessage}`, `堆栈信息:\n${stackTrace}`);
      await run(uid, 2000);
    }
  };

  const startProcessing = async () => {
    const uidsToProcess: number[] = [];

    for (let i = 0; i < maxCount; i++) {
      const uid = getNextAvailableUid();
      if (uid) {
        uidsToProcess.push(uid);
      } else {
        break;
      }
    }

    if (uidsToProcess.length === 0) {
      console.log('没有可用账号，程序结束');
      return;
    }

    await Promise.all(
      uidsToProcess.map(async (uid, i) => {
        await run(uid, 1000 * i);
      })
    );
  };

  await startProcessing();

  const msg = `程序执行结束`;
  console.log(msg);
  telegramService.sendSuccess(msg);

  // await sleepForever();
  process.exit(0);
}

main().catch((error) => {
  console.error('未捕获的错误:', error);
  process.exit(1);
});
