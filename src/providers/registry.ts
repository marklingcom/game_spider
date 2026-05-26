import type DatabaseManager from '../models/index.js';
import type { Config } from '../utils/config.js';
import type { GameProvider, IGameApi, ISpinRepository } from '../core/types.js';
import { createJiliApi, createJiliRepository } from './jili/create.js';

export interface ProviderRuntime {
  provider: GameProvider;
  createApi(session: Parameters<typeof createJiliApi>[1]): IGameApi;
  createRepository(db: DatabaseManager): ISpinRepository;
}

export function createProviderRuntime(config: Config): ProviderRuntime {
  const provider = config.serverConfig.provider;

  switch (provider) {
    case 'jili':
      return {
        provider,
        createApi: (session) => createJiliApi(config, session),
        createRepository: (db) => createJiliRepository(db, config),
      };
    default:
      throw new Error(`不支持的厂商: ${provider}`);
  }
}
