// import { AWC } from './gameFrom/awc.js';

// const awc = new AWC('JILI', 'SLOT');

// // awc.getGameUrlForGameName('Money Coming 2');

// awc.genGameInfo();

import { telegramService } from './utils/telegram.js';

// telegramService.sendMessage('Hello, world!');
// telegramService.sendInfo('Hello, world!');
// telegramService.sendSuccess('Hello, world!');
// telegramService.sendWarning('Hello, world!');
// telegramService.sendError('Hello, world!');

(async () => {
  console.log(telegramService.isTelegramEnabled());
  await new Promise(() => {}); // 永远不 resolve
})();
