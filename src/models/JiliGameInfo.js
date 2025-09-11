const { DataTypes } = require("sequelize");

const JiliGameInfo = (sequelize) => {
  return sequelize.define(
    "JiliGameInfo",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        comment: "id",
      },
      gi: {
        type: DataTypes.INTEGER.UNSIGNED,
        unique: true,
        comment: "游戏id",
      },
      fullName: {
        type: DataTypes.STRING,
        comment: "游戏的名称",
      },
      icon: {
        type: DataTypes.STRING,
        comment: "游戏的icon地址",
      },
      name: {
        type: DataTypes.STRING(255),
        unique: true,
        comment: "游戏名字",
      },
      data: {
        type: DataTypes.BLOB,
        comment: "info数据",
      },
      fullData: {
        type: DataTypes.BLOB,
        comment: "完整gameInfo数据",
      },
      from: {
        type: DataTypes.STRING,
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
      tableName: "jili_info",
      timestamps: false,
    }
  );
};

module.exports = JiliGameInfo;
