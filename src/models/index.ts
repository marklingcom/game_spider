import { type Model, type ModelStatic, Sequelize } from 'sequelize';
import type { DbConfig } from '../utils/config.js';
import { JiliInfo } from './JiliGameInfo.js';
import { JiliProto } from './JiliProto.js';
import { SpinData } from './SpinData.js';

export default class DatabaseManager {
  private sequelize: Sequelize | null = null;
  private models = new Map<string, ModelStatic<Model>>();

  async initDB(db: DbConfig): Promise<Sequelize> {
    try {
      // 解析 DSN 字符串
      const dsnMatch = db.dsn.match(/^([^:]+):([^@]+)@tcp\(([^:]+):(\d+)\)\/([^?]+)/);
      if (!dsnMatch) {
        throw new Error('无法解析数据库连接字符串');
      }

      const [, username, password, host, port, database] = dsnMatch;

      console.log('连接数据库...');
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

      this.models.set('SpinData', SpinData(this.sequelize));
      this.models.set('JiliInfo', JiliInfo(this.sequelize));
      this.models.set('JiliProto', JiliProto(this.sequelize));

      return this.sequelize;
    } catch (error) {
      console.error('数据库连接失败:', error);
      throw error;
    }
  }

  get jiliInfo() {
    return this.getModel('JiliInfo')!;
  }

  get jiliProto() {
    return this.getModel('JiliProto')!;
  }

  async sync(force: boolean = false): Promise<void> {
    if (!this.sequelize) {
      throw new Error('数据库未初始化');
    }

    await this.sequelize.sync({ force });
    console.log('数据库同步完成');
  }

  getModel(name: string): ModelStatic<Model> {
    var model = this.models.get(name);
    if (!model) {
      throw new Error(`模型不存在: ${name}`);
    }
    return model;
  }

  getDB(): Sequelize | null {
    return this.sequelize;
  }

  async ensureTableExists(tabName: string): Promise<ModelStatic<Model>> {
    try {
      if (this.models.has(tabName)) {
        return this.models.get(tabName);
      }

      if (!this.sequelize) {
        throw new Error('数据库未初始化');
      }

      const tables = await this.sequelize.getQueryInterface().showAllTables();
      const SpinDataModel = this.getModel('SpinData');
      if (!tables.includes(tabName)) {
        const attributes = SpinDataModel.getAttributes();
        await this.sequelize.getQueryInterface().createTable(tabName, attributes);
        console.log(`Created table: ${tabName}`);
      }

      const tableModel = this.sequelize.define(tabName, SpinDataModel.getAttributes(), {
        tableName: tabName,
        timestamps: false,
      });

      this.models.set(tabName, tableModel);
      return tableModel;
    } catch (error) {
      console.error(`Failed to ensure table exists: ${tabName}`, error);
      throw error;
    }
  }
}

export const dbManager = new DatabaseManager();
