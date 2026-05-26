import type { Config } from '../utils/config.js';
import type { GameSession } from '../core/types.js';
import { getGameInfoFromApi } from './info.js';

export async function resolveGameSession(config: Config, launchUrl: string): Promise<GameSession> {
  switch (config.provider) {
    case 'jili':
      return getGameInfoFromApi(launchUrl);
    default:
      throw new Error(`厂商 ${config.provider} 不支持会话解析`);
  }
}
