import fs from 'node:fs';
import { merge } from 'lodash-es';
import yaml from 'yaml';
import type { GameConfig, BuyBounsConfig, ExtraConfig } from '../core/config-types.js';
import type { GameCatalogEntry, GameProvider, LaunchGameEntry } from '../core/types.js';
import { getAwcCatalogPath, getHuiduListPath } from '../core/paths.js';
import { CompressType } from './data_compress.js';

export type { BuyBounsConfig, ExtraConfig, GameConfig };

export interface ServerConfig {
  provider: GameProvider;
  proxy: {
    enable: boolean;
    server: string;
  };
  db: {
    type: string;
    dsn: string;
    dialect?: string;
  };
  spiderConfig: {
    autoMigrate: boolean;
    form: string;
    compress: CompressType;
  };
  gameConfig: GameConfig;
  huiduConfig: {
    coin: number;
    key: string;
    maxCount: number;
    noMoneyAccounts: number[];
    uidList0: number[];
    uidListTest: number[];
    uidList1: number[];
    uidList2: number[];
  };
  telegram: {
    enable: boolean;
    botToken: string;
    chatId: string;
    machine: string;
  };
}

/** @deprecated 使用 gameConfig */
export type JiliConfig = GameConfig;

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
    gameConfig: {
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
    },
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

  /** 当前运行游戏的目录项 + 启动参数 */
  get currentGame(): {
    catalog: GameCatalogEntry;
    launch?: LaunchGameEntry;
  } {
    const gameName = this.serverConfig.gameConfig.gameName;
    const catalog = this.catalogList.find((item) => item.fullName === gameName);
    if (!catalog) {
      throw new Error(`游戏 ${gameName} 在厂商 ${this.provider} 目录中不存在`);
    }

    const launch = this.launchList.find((item) => item.fullName === gameName);

    return { catalog, launch };
  }

  /** @deprecated 使用 currentGame */
  get currentJiliGame() {
    const { catalog, launch } = this.currentGame;
    return {
      jiliConfig: catalog,
      huiduConfig: launch,
    };
  }

  get huiduUidList() {
    const key = this.serverConfig.huiduConfig.key;
    return this.serverConfig.huiduConfig[key as keyof ServerConfig['huiduConfig']] as number[];
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

  private loadConfig(): Config {
    try {
      const serverConfigStr = fs.readFileSync(this.serverConfigPath, 'utf8');
      const serverConfigData = yaml.parse(serverConfigStr) as Partial<ServerConfig> & {
        jiliConfig?: GameConfig;
      };

      // 兼容旧配置键名
      if (serverConfigData.jiliConfig && !serverConfigData.gameConfig) {
        serverConfigData.gameConfig = serverConfigData.jiliConfig;
        delete serverConfigData.jiliConfig;
      }

      this.serverConfig = merge(this.serverConfig, serverConfigData);

      if (!this.serverConfig.provider) {
        this.serverConfig.provider = 'jili';
      }

      const catalogPath = getAwcCatalogPath(this.serverConfig.provider);
      const catalogStr = fs.readFileSync(catalogPath, 'utf8');
      this.catalogList = JSON.parse(catalogStr) as GameCatalogEntry[];

      const launchPath = getHuiduListPath(this.serverConfig.provider);
      const launchStr = fs.readFileSync(launchPath, 'utf8');
      this.launchList = JSON.parse(launchStr) as LaunchGameEntry[];

      return this;
    } catch (error) {
      throw new Error(`配置文件加载失败: ${(error as Error).message}`);
    }
  }

  updateGameConfig(updates: Partial<GameConfig>): void {
    this.updateServerConfig({
      gameConfig: {
        ...this.serverConfig.gameConfig,
        ...updates,
      },
    });
  }

  /** @deprecated 使用 updateGameConfig */
  updateJiliConfig(updates: Partial<GameConfig>): void {
    this.updateGameConfig(updates);
  }

  getLaunchConfig(gameName: string): LaunchGameEntry | undefined {
    return this.launchList.find((item) => item.fullName === gameName);
  }

  /** @deprecated 使用 getLaunchConfig */
  getHuiduConfig(gameName: string): LaunchGameEntry | undefined {
    return this.getLaunchConfig(gameName);
  }
}

export const config = new Config();
