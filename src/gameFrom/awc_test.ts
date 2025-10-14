import { AWC } from './awc.js';

async function main() {
  try {
    console.log('开始测试 AWC 类...');

    const awc = new AWC('JILI', 'SLOT');
    console.log('AWC 实例创建成功');

    // console.log('开始生成游戏信息...');
    // await awc.genGameInfo();

    console.log('开始获取游戏URL...');
    const gameUrl = await awc.getGameUrlForGameName('Money Coming 2');
    console.log('获取到的游戏URL:', gameUrl);

    console.log('测试完成！');
  } catch (error) {
    console.error('测试失败:', error);
  }
}

main().catch((error) => {
  console.error('未捕获的错误:', error);
  process.exit(1);
});
