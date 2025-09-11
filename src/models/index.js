const { Sequelize } = require("sequelize");
const SpinData = require("./SpinData");
const JiliGameInfo = require("./JiliGameInfo");
const JiliProto = require("./JiliProto");

class DatabaseManager {
  constructor() {
    this.sequelize = null;
    this.models = {};
  }

  async initDB(type, dsn) {
    try {
      this.sequelize = new Sequelize(dsn, {
        dialect: type,
        logging: false,
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
        },
      });

      await this.sequelize.authenticate();
      console.log("数据库连接成功");

      this.models.SpinData = SpinData(this.sequelize);
      this.models.JiliGameInfo = JiliGameInfo(this.sequelize);
      this.models.JiliProto = JiliProto(this.sequelize);

      return this.sequelize;
    } catch (error) {
      console.error("数据库连接失败:", error);
      throw error;
    }
  }

  async sync(force = false) {
    if (!this.sequelize) {
      throw new Error("数据库未初始化");
    }

    await this.sequelize.sync({ force });
    console.log("数据库同步完成");
  }

  getModel(name) {
    return this.models[name];
  }

  getDB() {
    return this.sequelize;
  }
}

module.exports = DatabaseManager;
