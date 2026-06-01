import { DataTypes } from 'sequelize';

export interface SpinDataAttributes {
  id?: number;
  data?: Buffer;
  compress?: number;
  totalWin?: number;
  from?: string;
  bet?: number;
  rate?: number;
  groupSeq?: number | null;
  groupId?: string | null;
  createTime?: Date;
}

/** 动态 spin 表（{provider}_spin_*）的字段定义，不对应物理表 spin_data */
export const spinDataAttributes = {
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
  groupSeq: {
    type: DataTypes.BIGINT.UNSIGNED,
    field: 'group_seq',
    allowNull: true,
    comment: '组内序号',
  },
  groupId: {
    type: DataTypes.STRING(32),
    field: 'group_id',
    allowNull: true,
    comment: '分组 id',
  },
  createTime: {
    type: DataTypes.DATE,
    field: 'create_time',
    defaultValue: DataTypes.NOW,
    comment: '创建时间',
  },
};

export const spinDataIndexes = [
  {
    name: 'rate_idx',
    fields: ['rate'] as const,
  },
  {
    name: 'group_id_idx',
    fields: ['group_id'] as const,
  },
];
