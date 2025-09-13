import { DataTypes, Model, type Sequelize } from 'sequelize';

export interface SpinDataAttributes {
  id?: number;
  data?: Buffer;
  compress?: number;
  totalWin?: number;
  from?: string;
  bet?: number;
  rate?: number;
  createTime?: Date;
}

export class SpinDataModel extends Model<SpinDataAttributes> implements SpinDataAttributes {
  declare id: number;
  declare data?: Buffer;
  declare compress?: number;
  declare totalWin?: number;
  declare from?: string;
  declare bet?: number;
  declare rate?: number;
  declare createTime?: Date;
}

export const SpinData = (sequelize: Sequelize): typeof SpinDataModel => {
  SpinDataModel.init(
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      data: {
        type: DataTypes.BLOB('long'),
        comment: 'spin数据',
      },
      compress: {
        type: DataTypes.TINYINT.UNSIGNED,
        defaultValue: 0,
        comment: '压缩方式，0=不压缩',
      },
      totalWin: {
        type: DataTypes.DOUBLE,
        comment: '赢的钱',
      },
      from: {
        type: DataTypes.STRING,
        comment: '数据来源',
      },
      bet: {
        type: DataTypes.DOUBLE,
        comment: '下注的金额',
      },
      rate: {
        type: DataTypes.DOUBLE,
        comment: '单局的回报率',
      },
      createTime: {
        type: DataTypes.DATE,
        field: 'create_time',
        defaultValue: DataTypes.NOW,
        comment: '创建时间',
      },
    },
    {
      sequelize,
      tableName: 'spin_data',
      timestamps: false,
    }
  );

  return SpinDataModel;
};
