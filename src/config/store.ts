import fs from 'node:fs';
import { merge } from 'lodash-es';
import yaml from 'yaml';
import { awcCatalogPath, huiduListPath } from './paths.js';
import type {
  GameArtConfig,
  GameCatalogEntry,
  GameConfig,
  GameProvider,
  LaunchGameEntry,
  JiliConfig,
  ServerConfig,
} from './types.js';
import { CompressType } from '../utils/data_compress.js';

export type { GameProvider, GameSession } from './types.js';
export type { ServerConfig } from './types.js';

export class Config {
  private serverConfigPath = './config/server.yaml';

  serverConfig: ServerConfig = {
    provider: 'jili',
    proxy: {
      enable: false,
      server: '',
    },
    db: {
      type: '',
      dsn: '',
      dialect: '',
    },
    telegram: {
      enable: false,
      botToken: '',
      chatId: '',
      machine: 'local',
    },
    spiderConfig: {
      autoMigrate: false,
      form: '',
      compress: CompressType.None,
    },
    jiliConfig: {
      bet: 0,
      isOld: false,
      buyBouns: {
        enable: false,
        index: 0,
        hasDefaultIndex: false,
      },
      extra: {
        enable: false,
        index: 0,
        hasDefaultIndex: false,
      },
      special: false,
      gameName: '',
    } as JiliConfig,
    gameartConfig: {
      bet: 0,
      buyBouns: {
        enable: false,
        index: 0,
      },
      extra: {
        enable: false,
        index: 0,
      },
      special: false,
      gameName: '',
    } as GameArtConfig,
    huiduConfig: {
      coin: 0,
      key: 'uidList1',
      maxCount: 0,
      uidList0: [],
      uidListTest: [],
      noMoneyAccounts: [],
      uidList1: [],
      uidList2: [],
    },
  };

  catalogList: GameCatalogEntry[] = [];
  launchList: LaunchGameEntry[] = [];

  constructor() {
    this.loadConfig();
  }

  get provider(): GameProvider {
    return this.serverConfig.provider;
  }

  get huiduUidList() {
    const key = this.serverConfig.huiduConfig.key;
    return this.serverConfig.huiduConfig[key as keyof ServerConfig['huiduConfig']] as number[];
  }

  get currentGameConfig(): GameConfig {
    const key = `${this.provider}Config` as 'jiliConfig' | 'gameartConfig';
    return this.serverConfig[key];
  }

  get currentJiliConfig(): JiliConfig {
    return this.serverConfig.jiliConfig;
  }

  get currentGameartConfig(): GameArtConfig {
    return this.serverConfig.gameartConfig;
  }

  /** 当前运行游戏的目录项 + 启动参数 */
  get currentGame(): {
    catalog: GameCatalogEntry;
    launch?: LaunchGameEntry;
  } {
    const gameName = this.currentGameConfig.gameName;
    const catalog = this.catalogList.find((item) => item.fullName === gameName);
    if (!catalog) {
      throw new Error(`游戏 ${gameName} 在厂商 ${this.provider} 目录中不存在`);
    }

    const launch = this.launchList.find((item) => item.fullName === gameName);
    return { catalog, launch };
  }

  updateServerConfig(updates: Partial<ServerConfig>): void {
    this.serverConfig = merge(this.serverConfig, updates);
    const yamlStr = yaml.stringify(this.serverConfig);
    fs.writeFileSync(this.serverConfigPath, yamlStr, 'utf8');
  }

  updateNoMoneyAccounts(list: number[]): void {
    const noMoneyAccounts = [
      ...new Set([...this.serverConfig.huiduConfig.noMoneyAccounts, ...list]),
    ];
    this.updateServerConfig({
      huiduConfig: {
        ...this.serverConfig.huiduConfig,
        noMoneyAccounts,
      },
    });
  }

  updateGameConfig(updates: Partial<GameConfig>): void {
    const key = `${this.provider}Config` as 'jiliConfig' | 'gameartConfig';
    this.updateServerConfig({
      [key]: {
        ...this.serverConfig[key],
        ...updates,
      },
    });
  }

  private loadConfig(): Config {
    try {
      const serverConfigStr = fs.readFileSync(this.serverConfigPath, 'utf8');
      const serverConfigData = yaml.parse(serverConfigStr) as Partial<ServerConfig>;

      this.serverConfig = merge(this.serverConfig, serverConfigData);

      if (!this.serverConfig.provider) {
        this.serverConfig.provider = 'jili';
      }

      const catalogPath = awcCatalogPath(this.serverConfig.provider);
      const catalogStr = fs.readFileSync(catalogPath, 'utf8');
      this.catalogList = JSON.parse(catalogStr) as GameCatalogEntry[];

      const launchPath = huiduListPath(this.serverConfig.provider);
      const launchStr = fs.readFileSync(launchPath, 'utf8');
      const launchConfig = JSON.parse(launchStr) as LaunchGameEntry[] | LaunchGameEntry;
      this.launchList = Array.isArray(launchConfig) ? launchConfig : [launchConfig];

      return this;
    } catch (error) {
      throw new Error(`配置文件加载失败: ${(error as Error).message}`);
    }
  }
}

export const config = new Config();
