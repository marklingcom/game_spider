const { DataTypes } = require("sequelize");

const SpinData = (sequelize) => {
  return sequelize.define(
    "SpinData",
    {
      id: {
        type: DataTypes.BIGINT.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
      },
      data: {
        type: DataTypes.BLOB("long"),
        comment: "spin数据",
      },
      compress: {
        type: DataTypes.TINYINT.UNSIGNED,
        defaultValue: 0,
        comment: "压缩方式，0=不压缩",
      },
      totalWin: {
        type: DataTypes.DOUBLE,
        comment: "赢的钱",
      },
      from: {
        type: DataTypes.STRING,
        comment: "数据来源",
      },
      bet: {
        type: DataTypes.DOUBLE,
        comment: "下注的金额",
      },
      rate: {
        type: DataTypes.DOUBLE,
        comment: "单局的回报率",
      },
      createTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        comment: "创建时间",
      },
    },
    {
      tableName: "spin_data",
      timestamps: false,
    }
  );
};

module.exports = SpinData;
