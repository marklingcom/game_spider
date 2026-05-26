import { DataTypes, Model, type Sequelize } from 'sequelize';

export interface GameProtoAttributes {
  id?: number;
  name?: string;
  gi?: number;
  spinPbName?: string;
  gameInfoPbName?: string;
  data?: string;
  createTime?: Date;
  updateTime?: Date;
}

/** @deprecated 使用 GameProtoAttributes */
export type JiliProtoAttributes = GameProtoAttributes;

class GameProtoModel extends Model<GameProtoAttributes> implements GameProtoAttributes {
  declare id: number;
  declare name?: string;
  declare gi?: number;
  declare spinPbName?: string;
  declare gameInfoPbName?: string;
  declare data?: string;
  declare createTime?: Date;
  declare updateTime?: Date;
}

export const createGameProtoModel = (
  sequelize: Sequelize,
  tableName: string
): typeof GameProtoModel => {
  GameProtoModel.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(255),
        unique: true,
        comment: '游戏名字',
      },
      gi: {
        type: DataTypes.BIGINT,
        comment: 'gi',
      },
      spinPbName: {
        type: DataTypes.TEXT,
        field: 'spin_pb_name',
        comment: 'spin_pb_name',
      },
      gameInfoPbName: {
        type: DataTypes.TEXT,
        field: 'game_info_pb_name',
        comment: 'game_info_pb_name',
      },
      data: {
        type: DataTypes.TEXT,
        comment: 'proto数据',
      },
      createTime: {
        type: DataTypes.DATE,
        field: 'create_time',
        defaultValue: DataTypes.NOW,
        comment: '创建时间',
      },
      updateTime: {
        type: DataTypes.DATE,
        field: 'update_time',
        defaultValue: DataTypes.NOW,
        comment: '更新时间',
      },
    },
    {
      sequelize,
      tableName,
      timestamps: false,
    }
  );

  return GameProtoModel;
};
