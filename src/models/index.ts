import { type Model, type ModelStatic, Sequelize } from 'sequelize';
import type { GameProvider } from '../config/index.js';
import { infoTable, protoTable } from '../config/index.js';
import type { ServerConfig } from '../config/index.js';
import { telegramService } from '../utils/telegram.js';
import { createGameInfoModel } from './provider/GameInfo.js';
import { createGameProtoModel } from './provider/GameProto.js';
import { spinDataAttributes, spinDataIndexes } from './SpinData.js';

export type { GameInfoAttributes, JiliInfoAttributes } from './provider/GameInfo.js';
export type { GameProtoAttributes, JiliProtoAttributes } from './provider/GameProto.js';

export default class DatabaseManager {
  private sequelize: Sequelize | null = null;
  private models = new Map<string, ModelStatic<Model>>();
  private pendingTableCreations = new Map<string, Promise<ModelStatic<Model>>>();
  private provider: GameProvider = 'jili';

  get currentProvider(): GameProvider {
    return this.provider;
  }

  async initDB(db: ServerConfig['db'], provider: GameProvider = 'jili'): Promise<Sequelize> {
    try {
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

      this.provider = provider;
      const infoTableName = infoTable(provider);
      const protoTableName = protoTable(provider);

      this.models.set('GameInfo', createGameInfoModel(this.sequelize, infoTableName));
      this.models.set('GameProto', createGameProtoModel(this.sequelize, protoTableName));

      return this.sequelize;
    } catch (error) {
      console.error('数据库连接失败:', error);
      throw error;
    }
  }

  get gameInfo() {
    return this.getModel('GameInfo')!;
  }

  get gameProto() {
    return this.getModel('GameProto')!;
  }

  /** @deprecated 使用 gameInfo */
  get jiliInfo() {
    return this.gameInfo;
  }

  /** @deprecated 使用 gameProto */
  get jiliProto() {
    return this.gameProto;
  }

  async sync(force: boolean = false): Promise<void> {
    if (!this.sequelize) {
      throw new Error('数据库未初始化');
    }

    await this.gameInfo.sync({ force });
    await this.gameProto.sync({ force });
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
        const queryInterface = this.sequelize.getQueryInterface();
        if (!tables.includes(tabName)) {
          await queryInterface.createTable(tabName, spinDataAttributes);
          for (const idx of spinDataIndexes) {
            if (idx.fields && idx.fields.length > 0) {
              const indexName = idx.name ? `${tabName}_${idx.name}` : undefined;
              await queryInterface.addIndex(tabName, [...idx.fields], {
                name: indexName,
              });
            }
          }
          console.log(`Created table: ${tabName}`);
          telegramService.sendInfo(`创建表: ${tabName}`);
        } else {
          await this.fixTableIdAutoIncrement(tabName);
        }

        const tableModel = this.sequelize.define(tabName, spinDataAttributes, {
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
