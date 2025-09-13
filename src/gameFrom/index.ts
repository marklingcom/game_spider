import { configData } from '../utils/config.js';
import { getGameUrl } from './huidu.js';
import { getGameInfoFromApi, type SpiderData } from './info.js';

export async function getGameInfo(): Promise<SpiderData> {
  let url = '';

  switch (configData.spiderConfig.form) {
    case 'huidu':
      console.log('抓取来源 huidu');
      url = await getGameUrl(configData.huiduConfig);
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

  const ret = await getGameInfoFromApi(url);
  if (!ret) {
    throw new Error('返回结果为空');
  }
  if (!ret.token) {
    throw new Error('获取token失败, token为空');
  }
  ret.from = configData.spiderConfig.form;

  return ret;
}
