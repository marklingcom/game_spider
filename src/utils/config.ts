import fs from 'node:fs';
import yaml from 'yaml';

export interface ProxyConfig {
  enable: boolean;
  server: string;
}

export interface DbConfig {
  type: string;
  dsn: string;
  dialect?: string;
}

export interface spiderConfig {
  autoMigrate: boolean;
  form: string;
  hasSpecial: boolean;
}

export interface BetConfig {
  bet: number;
  buyBouns: boolean;
  extra: boolean;
  gameName: string;
}

export interface AwcConfig {
  gameName: string;
}

export interface HuiduConfig {
  coin: number;
  gameUid: string;
  companyId: number;
  uidList: number[];
}

export default class Config {
  public proxy: ProxyConfig;
  public db: DbConfig;
  public spiderConfig: spiderConfig;
  public betConfig: BetConfig;
  public awcConfig: AwcConfig;
  public huiduConfig: HuiduConfig;

  private configPath: string;

  constructor(configPath: string) {
    this.configPath = configPath;

    this.proxy = {
      enable: false,
      server: '',
    };
    this.db = {
      type: '',
      dsn: '',
      dialect: '',
    };
    this.spiderConfig = {
      autoMigrate: false,
      form: '',
      hasSpecial: false,
    };
    this.betConfig = {
      bet: 0,
      buyBouns: false,
      extra: false,
      gameName: '',
    };
    this.awcConfig = {
      gameName: '',
    };
    this.huiduConfig = {
      coin: 0,
      gameUid: '',
      companyId: 0,
      uidList: [],
    };

    this.loadConfig(this.configPath);
  }

  private loadConfig(path: string): Config {
    try {
      const data = fs.readFileSync(path, 'utf8');
      const configData = yaml.parse(data) as any;

      if (configData.proxy) {
        this.proxy = { ...this.proxy, ...configData.proxy };
      }
      if (configData.db) {
        this.db = {
          ...this.db,
          ...configData.db,
          dialect: configData.db.type || configData.db.dialect || 'mysql',
        };
      }
      if (configData.spiderConfig) {
        this.spiderConfig = { ...this.spiderConfig, ...configData.spiderConfig };
      }
      if (configData.betConfig) {
        this.betConfig = { ...this.betConfig, ...configData.betConfig };
      }
      if (configData.awcConfig) {
        this.awcConfig = { ...this.awcConfig, ...configData.awcConfig };
      }
      if (configData.huiduConfig) {
        this.huiduConfig = {
          ...this.huiduConfig,
          ...configData.huiduConfig,
        };
      }
      return this;
    } catch (error) {
      throw new Error(`配置文件加载失败: ${(error as Error).message}`);
    }
  }
}
