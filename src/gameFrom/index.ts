import type { Config } from '../utils/config.js';
import type { GameSession } from '../core/types.js';
import { getGameUrl } from './huidu.js';
import { resolveGameSession } from './session.js';

export type { GameSession };

export async function getGameSession(config: Config, uid: number): Promise<GameSession> {
  let url = '';
  const form = config.serverConfig.spiderConfig.form;
  const { catalog, launch } = config.currentGame;

  switch (form) {
    case 'huidu':
      console.log('抓取来源 huidu');
      if (!launch) {
        throw new Error(`游戏 ${catalog.fullName} 缺少 huidu 启动配置`);
      }
      url = await getGameUrl({
        uid,
        coin: config.serverConfig.huiduConfig.coin,
        gameUid: launch.gameUid,
        companyId: launch.companyId,
        partnerId: launch.partnerId,
      });
      break;
    case 'awc':
      console.log('抓取来源 awc');
      throw new Error('awc 启动流程尚未接入通用抓取链路');
    default:
      throw new Error(`未知的数据源: ${form}`);
  }

  if (!url) {
    throw new Error('获取游戏URL失败: URL为空');
  }

  console.log('成功获取游戏 URL:', url);
  const session = await resolveGameSession(config, url);
  if (!session.token) {
    throw new Error('获取token失败, token为空');
  }
  session.from = form;

  return session;
}

/** @deprecated 使用 getGameSession */
export const getGameInfo = getGameSession;
