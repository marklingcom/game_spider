import type { Config, GameSession } from '../config/index.js';
import { dbManager } from '../models/index.js';
import { GameArtDb } from './gameart/gameart_db.js';
import { GameArtSpiderWork } from './gameart/gameart_spider.js';
import { JiliDb } from './jili/jili_db.js';
import { SpiderWork } from './jili/jili_spider.js';

export interface SpiderWorkerLike {
  once(event: string | symbol, listener: (...args: any[]) => void): this;
  start(): Promise<void>;
}

export function createSpiderWork(options: {
  config: Config;
  session: GameSession;
}): SpiderWorkerLike {
  const { config, session } = options;
  switch (config.provider) {
    case 'gameart': {
      const gameArtDb = new GameArtDb({ db: dbManager, config });
      return new GameArtSpiderWork({
        config,
        session,
        gameArtDb,
      });
    }
    case 'jili': {
      const jiliDb = new JiliDb({ db: dbManager, config });
      return new SpiderWork({
        config,
        session,
        jiliDb,
      });
    }
    default:
      throw new Error(`未知的厂商: ${config.provider}`);
  }
}
