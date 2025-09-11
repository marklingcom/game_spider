const fs = require("fs");
const yaml = require("yaml");

class Config {
  constructor() {
    this.proxy = {
      enable: false,
      server: "",
    };
    this.db = {
      default: {
        type: "",
        dsn: "",
      },
    };
    this.config = {
      thread: 1,
      sleep: 0,
      autoMigrate: false,
      form: "",
    };
    this.betConfig = {
      bet: 0,
      buyBouns: false,
      extra: false,
      gameName: "",
    };
    this.awcConfig = {
      gameName: "",
    };
    this.huiduConfig = {
      uid: 0,
      coin: 0,
      gameUid: "",
      companyId: 0,
      uidList: [],
    };
  }

  static loadConfig(path) {
    try {
      const data = fs.readFileSync(path, "utf8");
      const configData = yaml.parse(data);

      const config = new Config();

      if (configData.proxy) {
        config.proxy = { ...config.proxy, ...configData.proxy };
      }
      if (configData.db) {
        config.db = { ...config.db, ...configData.db };
      }
      if (configData.config) {
        config.config = { ...config.config, ...configData.config };
      }
      if (configData.betConfig) {
        config.betConfig = { ...config.betConfig, ...configData.betConfig };
      }
      if (configData.awcConfig) {
        config.awcConfig = { ...config.awcConfig, ...configData.awcConfig };
      }
      if (configData.huiduConfig) {
        config.huiduConfig = {
          ...config.huiduConfig,
          ...configData.huiduConfig,
        };
      }

      return config;
    } catch (error) {
      throw new Error(`配置文件加载失败: ${error.message}`);
    }
  }
}

module.exports = Config;
