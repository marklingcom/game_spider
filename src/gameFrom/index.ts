import type Config from '../utils/config.js';
import { getGameUrl } from './huidu.js';
import { getGameInfoFromApi, type SpiderData } from './info.js';

export async function getGameInfo(config: Config, uid: number): Promise<SpiderData> {
  let url = '';
  const form = config.serverConfig.spiderConfig.form;

  switch (form) {
    case 'huidu':
      console.log('抓取来源 huidu');
      url = await getGameUrl({
        uid,
        coin: config.serverConfig.huiduConfig.coin,
        gameUid: config.currentJiliGame.huiduConfig.gameUid,
        companyId: config.currentJiliGame.huiduConfig.companyId,
      });
      break;
    case 'awc':
      console.log('抓取来源 awc');
      break;
    default:
      throw new Error('未知的数据源');
  }

  if (!url) {
    throw new Error('获取游戏URL失败: URL为空');
  }

  console.log('成功获取游戏 URL:', url);
  const ret = await getGameInfoFromApi(url);
  if (!ret) {
    throw new Error('返回结果为空');
  }
  if (!ret.token) {
    throw new Error('获取token失败, token为空');
  }
  ret.from = form;

  return ret;
}
