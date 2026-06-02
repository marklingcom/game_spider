import type { Config, GameSession } from '../config/index.js';
import { dbManager } from '../models/index.js';
import { GameArtDb } from './gameart/gameart_db.js';
import { GameArtSpiderWork } from './gameart/gameart_spider.js';
import { JiliDb } from './jili/jili_db.js';
import { JiliSpiderWork } from './jili/jili_spider.js';

export interface SpiderWork {
  once(event: string | symbol, listener: (...args: any[]) => void): this;
  start(): Promise<void>;
}

let gameArtDb: GameArtDb | null = null;
let jiliDb: JiliDb | null = null;

function getGameArtDb(config: Config): GameArtDb {
  if (!gameArtDb) {
    gameArtDb = new GameArtDb({ db: dbManager, config });
  }
  return gameArtDb;
}

function getJiliDb(config: Config): JiliDb {
  if (!jiliDb) {
    jiliDb = new JiliDb({ db: dbManager, config });
  }
  return jiliDb;
}

export function createSpiderWork(options: {
  config: Config;
  session: GameSession;
}): SpiderWork {
  const { config, session } = options;
  switch (config.provider) {
    case 'gameart': {
      return new GameArtSpiderWork({
        config,
        session,
        gameArtDb: getGameArtDb(config),
      });
    }
    case 'jili': {
      return new JiliSpiderWork({
        config,
        session,
        jiliDb: getJiliDb(config),
      });
    }
    default:
      throw new Error(`未知的厂商: ${config.provider}`);
  }
}
