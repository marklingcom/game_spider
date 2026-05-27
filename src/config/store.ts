import fs from 'node:fs';
import { merge } from 'lodash-es';
import yaml from 'yaml';
import { awcCatalogPath, huiduListPath } from './paths.js';
import type {
  GameCatalogEntry,
  GameConfig,
  GameProvider,
  LaunchGameEntry,
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

  get huiduUidList() {
    const key = this.serverConfig.huiduConfig.key;
    return this.serverConfig.huiduConfig[key as keyof ServerConfig['huiduConfig']] as number[];
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

  /** @deprecated 使用 currentGame（JILI 兼容字段名） */
  get currentJiliGame() {
    const { catalog, launch } = this.currentGame;
    return {
      jiliConfig: catalog,
      huiduConfig: launch,
    };
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

      const catalogPath = awcCatalogPath(this.serverConfig.provider);
      const catalogStr = fs.readFileSync(catalogPath, 'utf8');
      this.catalogList = JSON.parse(catalogStr) as GameCatalogEntry[];

      const launchPath = huiduListPath(this.serverConfig.provider);
      const launchStr = fs.readFileSync(launchPath, 'utf8');
      this.launchList = JSON.parse(launchStr) as LaunchGameEntry[];

      return this;
    } catch (error) {
      throw new Error(`配置文件加载失败: ${(error as Error).message}`);
    }
  }
}

export const config = new Config();

