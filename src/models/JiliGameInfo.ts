import { DataTypes, Model, type Sequelize } from 'sequelize';

export interface JiliGameInfoAttributes {
  id?: number;
  gi?: number;
  fullName?: string;
  icon?: string;
  name?: string;
  data?: Buffer;
  fullData?: Buffer;
  from?: string;
  createTime?: Date;
  updateTime?: Date;
}

class JiliGameInfoModel extends Model<JiliGameInfoAttributes> implements JiliGameInfoAttributes {
  declare id: number;
  declare gi?: number;
  declare fullName?: string;
  declare icon?: string;
  declare name?: string;
  declare data?: Buffer;
  declare fullData?: Buffer;
  declare from?: string;
  declare createTime?: Date;
  declare updateTime?: Date;
}

const JiliGameInfo = (sequelize: Sequelize): typeof JiliGameInfoModel => {
  JiliGameInfoModel.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      gi: {
        type: DataTypes.BIGINT.UNSIGNED,
        unique: true,
        comment: '游戏id',
      },
      fullName: {
        type: DataTypes.TEXT,
        field: 'full_name',
        comment: '游戏的名称',
      },
      icon: {
        type: DataTypes.TEXT,
        comment: '游戏的icon地址',
      },
      name: {
        type: DataTypes.STRING(255),
        unique: true,
        comment: '游戏名字',
      },
      data: {
        type: DataTypes.BLOB('long'),
        comment: 'info数据',
      },
      fullData: {
        type: DataTypes.BLOB('long'),
        field: 'full_data',
        comment: '完整gameInfo数据',
      },
      from: {
        type: DataTypes.TEXT,
        comment: '数据来源',
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
      tableName: 'jili_info',
      timestamps: false,
    }
  );

  return JiliGameInfoModel;
};

export default JiliGameInfo;
