import chalk from 'chalk';
import { AWC } from '../src/gameFrom/awc.js';
import { getGameUrl } from '../src/gameFrom/huidu.js';
import { config } from '../src/utils/config.js';

interface Options {
  gameName: string;
  type: 'huidu' | 'awc';
}

const langs = ['en-US', 'zh-CN', 'vi-VN'];

async function main(options: Options) {
  try {
    let gameUrl = '';
    if (options.type === 'huidu') {
      const huiduConfig = config.getHuiduConfig(options.gameName);
      console.log(chalk.yellow('\n不同语言的游戏URL:'));
      for (const lang of langs) {
        const gameUrl = await getGameUrl({
          uid: config.huiduUidList[0],
          coin: config.serverConfig.huiduConfig.coin,
          ...huiduConfig,
        });
        const url = new URL(gameUrl);
        url.searchParams.set('lang', lang);
        console.log(chalk.blue(`[${lang}]`), chalk.cyan(url.toString()));
      }
      return;
    } else if (options.type === 'awc') {
      const awc = new AWC('JILI', 'SLOT');
      // const loginFormUrl = await awc.getLoginFormUrl();
      gameUrl = await awc.getGameUrlForGameName(options.gameName);
    }

    console.log(chalk.yellow('\n不同语言的游戏URL:'));
    langs.forEach((lang) => {
      const url = new URL(gameUrl);
      url.searchParams.set('lang', lang);
      console.log(chalk.blue(`[${lang}]`), chalk.cyan(url.toString()));
    });
  } catch (error) {
    console.error('测试失败:', error);
  }
}

const options: Options = {
  gameName: 'Lucky Jaguar',
  // type: 'huidu',
  type: 'awc',
};

main(options).catch((error) => {
  console.error('未捕获的错误:', error);
  process.exit(1);
});
