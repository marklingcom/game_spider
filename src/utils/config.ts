import fs from 'node:fs';
import { merge } from 'lodash-es';
import yaml from 'yaml';

export interface ServerConfig {
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
  };
  betConfig: {
    bet: number;
    buyBouns: boolean;
    extra: boolean;
    special: boolean;
    gameName: string;
  };
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

interface JiliSlotConfig {
  fullName: string;
  gi: number;
  name: string;
  uuid: string;
}

interface HuiduConfig {
  fullName: string;
  companyId: number;
  gameUid: string;
}

export default class Config {
  private serverConfigPath = './config/server.yaml';
  private jiliSlotListPath = './config/awc-JILI-SLOT.json';
  private huiduConfigListPath = './config/huidu-jili.json';

  serverConfig: ServerConfig = {
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
    },
    betConfig: {
      bet: 0,
      buyBouns: false,
      extra: false,
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

  jiliSlotList: JiliSlotConfig[];

  huiduConfigList: HuiduConfig[];

  constructor() {
    this.loadConfig();
  }

  get currentJiliGame() {
    const gameName = this.serverConfig.betConfig.gameName;
    const jiliConfig = this.jiliSlotList.find((item) => item.fullName === gameName);
    if (!jiliConfig) {
      throw new Error(`游戏 ${gameName} 的 jiliSlotConfig 不存在`);
    }

    const huiduConfig = this.huiduConfigList.find((item) => item.fullName === gameName);
    if (!huiduConfig) {
      throw new Error(`游戏 ${gameName} 的 huiduConfig 不存在`);
    }

    return {
      jiliConfig,
      huiduConfig,
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
      const serverConfigData = yaml.parse(serverConfigStr) as Partial<ServerConfig>;
      this.serverConfig = merge(this.serverConfig, serverConfigData);

      const jiliSlotStr = fs.readFileSync(this.jiliSlotListPath, 'utf8');
      const jiliSlotData = JSON.parse(jiliSlotStr) as JiliSlotConfig[];
      this.jiliSlotList = jiliSlotData;

      const huiduConfigStr = fs.readFileSync(this.huiduConfigListPath, 'utf8');
      const huiduConfigData = JSON.parse(huiduConfigStr) as HuiduConfig[];
      this.huiduConfigList = huiduConfigData;

      return this;
    } catch (error) {
      throw new Error(`配置文件加载失败: ${(error as Error).message}`);
    }
  }
}

export const config = new Config();
