const { DataTypes } = require("sequelize");

const JiliProto = (sequelize) => {
  return sequelize.define(
    "JiliProto",
    {
      id: {
        type: DataTypes.INTEGER.UNSIGNED,
        primaryKey: true,
        autoIncrement: true,
        comment: "id",
      },
      name: {
        type: DataTypes.STRING(255),
        unique: true,
        comment: "游戏名字",
      },
      gi: {
        type: DataTypes.INTEGER,
        comment: "gi",
      },
      spinPbName: {
        type: DataTypes.STRING,
        comment: "spin_pb_name",
      },
      gameInfoPbName: {
        type: DataTypes.STRING,
        comment: "game_info_pb_name",
      },
      data: {
        type: DataTypes.TEXT,
        comment: "proto数据",
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
      tableName: "jili_proto",
      timestamps: false,
    }
  );
};

module.exports = JiliProto;
