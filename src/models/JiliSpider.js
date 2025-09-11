const { DataTypes } = require("sequelize");

const JiliSpider = (sequelize) => {
  return sequelize.define(
    "JiliSpider",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        comment: "id",
      },
      name: {
        type: DataTypes.STRING,
        comment: "name",
      },
      sip: {
        type: DataTypes.STRING,
        comment: "sip",
      },
      token: {
        type: DataTypes.STRING,
        comment: "token",
      },
      webSocketData: {
        type: DataTypes.BLOB,
        comment: "WebSocketData",
      },
      from: {
        type: DataTypes.STRING,
        defaultValue: "awc",
        comment: "数据来源",
      },
      createTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        comment: "创建时间",
      },
      updateTime: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        comment: "更新时间",
      },
    },
    {
      tableName: "jili_spider",
      timestamps: false,
    }
  );
};

module.exports = JiliSpider;
