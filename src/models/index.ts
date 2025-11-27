import { type Model, type ModelStatic, Sequelize } from 'sequelize';
import type { ServerConfig } from '../utils/config.js';
import { telegramService } from '../utils/telegram.js';
import { JiliInfo } from './JiliInfo.js';
import { JiliProto } from './JiliProto.js';
import { SpinData } from './SpinData.js';

export default class DatabaseManager {
  private sequelize: Sequelize | null = null;
  private models = new Map<string, ModelStatic<Model>>();
  private pendingTableCreations = new Map<string, Promise<ModelStatic<Model>>>();

  async initDB(db: ServerConfig['db']): Promise<Sequelize> {
    try {
      // 解析 DSN 字符串
      const dsnMatch = db.dsn.match(/^([^:]+):([^@]+)@tcp\(([^:]+):(\d+)\)\/([^?]+)/);
      if (!dsnMatch) {
        throw new Error('无法解析数据库连接字符串');
      }

      const [, username, password, host, port, database] = dsnMatch;

      console.log('连接数据库中...');
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
    if (this.models.has(tabName)) {
      return this.models.get(tabName);
    }

    if (this.pendingTableCreations.has(tabName)) {
      return this.pendingTableCreations.get(tabName);
    }

    const promise = (async () => {
      try {
        if (!this.sequelize) {
          throw new Error('数据库未初始化');
        }

        const tables = await this.sequelize.getQueryInterface().showAllTables();
        const SpinDataModel = this.getModel('SpinData');
        const queryInterface = this.sequelize.getQueryInterface();
        if (!tables.includes(tabName)) {
          const attributes = SpinDataModel.getAttributes();
          await queryInterface.createTable(tabName, attributes);
          const indexes = (SpinDataModel as any).options?.indexes || [];
          for (const idx of indexes) {
            if (idx.fields && idx.fields.length > 0) {
              const indexName = idx.name ? `${tabName}_${idx.name}` : undefined;
              await queryInterface.addIndex(tabName, idx.fields, {
                name: indexName,
                unique: idx.unique,
              });
            }
          }
          console.log(`Created table: ${tabName}`);
          telegramService.sendInfo(`创建表: ${tabName}`);
        } else {
          await this.fixTableIdAutoIncrement(tabName);
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
      } finally {
        this.pendingTableCreations.delete(tabName);
      }
    })();

    this.pendingTableCreations.set(tabName, promise);
    return promise;
  }

  async getTableCount(tabName: string): Promise<number> {
    const model = this.getModel(tabName);
    if (!model) {
      return 0;
    }
    const count = await model.count();
    return count;
  }

  async fixTableIdAutoIncrement(tabName: string) {
    if (!this.sequelize) {
      throw new Error('数据库未初始化');
    }

    try {
      const queryInterface = this.sequelize.getQueryInterface();
      const tableDescription = await queryInterface.describeTable(tabName);

      if (tableDescription.id && !tableDescription.id.autoIncrement) {
        console.log(`修复表 ${tabName} 的 id 字段自增属性...`);

        const { DataTypes } = await import('sequelize');
        await queryInterface.changeColumn(tabName, 'id', {
          type: DataTypes.BIGINT.UNSIGNED,
          primaryKey: true,
          autoIncrement: true,
        });

        console.log(`表 ${tabName} 的 id 字段自增属性修复完成`);
        telegramService.sendInfo(`修复表 ${tabName} 的 id 字段自增属性`);
      } else {
        console.log(`表 ${tabName} 的 id 字段已经是自增的`);
      }
    } catch (error) {
      console.error(`修复表 ${tabName} 失败:`, error);
      throw error;
    }
  }
}

export const dbManager = new DatabaseManager();
