import fs from 'node:fs';
import { merge } from 'lodash-es';
import yaml from 'yaml';

interface ServerConfig {
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
    hasSpecial: boolean;
    gameName: string;
  };
  huiduConfig: {
    coin: number;
    uidList: number[];
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
  private configPath = './config/server.yaml';
  private jiliSlotConfigPath = './config/JILI-SLOT.json';
  private huiduConfigPath = './config/jili-huidu.json';

  serverConfig: ServerConfig;

  jiliSlotConfig: JiliSlotConfig[];

  huiduConfig: HuiduConfig[];

  constructor() {
    this.serverConfig = {
      proxy: {
        enable: false,
        server: '',
      },
      db: {
        type: '',
        dsn: '',
        dialect: '',
      },
      spiderConfig: {
        autoMigrate: false,
        form: '',
      },
      betConfig: {
        bet: 0,
        buyBouns: false,
        extra: false,
        hasSpecial: true,
        gameName: '',
      },
      huiduConfig: {
        coin: 0,
        uidList: [],
      },
    };

    this.loadConfig();
  }

  get currentGameConfig() {
    const gameName = this.serverConfig.betConfig.gameName;
    const jiliSlotConfig = this.jiliSlotConfig.find((item) => item.fullName === gameName);
    if (!jiliSlotConfig) {
      throw new Error(`游戏 ${gameName} 的 jiliSlotConfig 不存在`);
    }

    const huiduConfig = this.huiduConfig.find((item) => item.fullName === gameName);
    if (!huiduConfig) {
      throw new Error(`游戏 ${gameName} 的 huiduConfig 不存在`);
    }

    return {
      jiliSlotConfig,
      huiduConfig,
    };
  }

  private loadConfig(): Config {
    try {
      const defaultConfig: ServerConfig = {
        proxy: {
          enable: false,
          server: '',
        },
        db: {
          type: 'mysql',
          dsn: '',
        },
        spiderConfig: {
          autoMigrate: false,
          form: '',
        },
        betConfig: {
          bet: 0,
          buyBouns: false,
          extra: false,
          hasSpecial: false,
          gameName: '',
        },
        huiduConfig: {
          coin: 0,
          uidList: [],
        },
      };

      const serverStr = fs.readFileSync(this.configPath, 'utf8');
      const serverConfigData = yaml.parse(serverStr) as Partial<ServerConfig>;
      this.serverConfig = merge(defaultConfig, serverConfigData);

      const jiliSlotData = fs.readFileSync(this.jiliSlotConfigPath, 'utf8');
      const jiliSlotConfigData = JSON.parse(jiliSlotData) as JiliSlotConfig[];
      this.jiliSlotConfig = jiliSlotConfigData;

      const huiduData = fs.readFileSync(this.huiduConfigPath, 'utf8');
      const huiduConfigData = JSON.parse(huiduData) as HuiduConfig[];
      this.huiduConfig = huiduConfigData;

      return this;
    } catch (error) {
      throw new Error(`配置文件加载失败: ${(error as Error).message}`);
    }
  }
}

export const config = new Config();
