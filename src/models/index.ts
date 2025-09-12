import { type Model, type ModelStatic, Sequelize } from 'sequelize';
import type { DbConfig } from '../utils/config.js';
import JiliGameInfo from './JiliGameInfo.js';
import JiliProto from './JiliProto.js';
import SpinData from './SpinData.js';

export interface Models {
  SpinData: ModelStatic<Model>;
  JiliGameInfo: ModelStatic<Model>;
  JiliProto: ModelStatic<Model>;
}

export default class DatabaseManager {
  private sequelize: Sequelize | null = null;
  private models: Models = {} as Models;

  async initDB(db: DbConfig): Promise<Sequelize> {
    try {
      // 解析 DSN 字符串
      const dsnMatch = db.dsn.match(/^([^:]+):([^@]+)@tcp\(([^:]+):(\d+)\)\/([^?]+)/);
      if (!dsnMatch) {
        throw new Error('无法解析数据库连接字符串');
      }

      const [, username, password, host, port, database] = dsnMatch;

      this.sequelize = new Sequelize(database!, username!, password!, {
        host: host!,
        port: parseInt(port!, 10),
        dialect: (db.dialect || db.type) as any,
        logging: false,
        pool: {
          max: 5,
          min: 0,
          acquire: 30000,
          idle: 10000,
        },
      });

      await this.sequelize.authenticate();
      console.log('数据库连接成功');

      this.models.SpinData = SpinData(this.sequelize);
      this.models.JiliGameInfo = JiliGameInfo(this.sequelize);
      this.models.JiliProto = JiliProto(this.sequelize);

      return this.sequelize;
    } catch (error) {
      console.error('数据库连接失败:', error);
      throw error;
    }
  }

  async sync(force: boolean = false): Promise<void> {
    if (!this.sequelize) {
      throw new Error('数据库未初始化');
    }

    await this.sequelize.sync({ force });
    console.log('数据库同步完成');
  }

  getModel(name: keyof Models): ModelStatic<Model> {
    return this.models[name];
  }

  getDB(): Sequelize | null {
    return this.sequelize;
  }
}

export const dbManager = new DatabaseManager();
