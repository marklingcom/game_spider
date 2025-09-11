const { EventEmitter } = require("events");
const protobuf = require("protobufjs");

class JiliProcessor extends EventEmitter {
  constructor(db) {
    super();
    this.db = db;
    this.isRunning = false;
    this.shouldStop = false;
    this.taskQueue = [];
    this.processing = false;
  }

  process(task) {
    this.taskQueue.push(task);
    if (!this.processing) {
      this.processQueue();
    }
  }

  async processQueue() {
    if (this.processing || this.taskQueue.length === 0) {
      return;
    }

    this.processing = true;

    while (this.taskQueue.length > 0 && !this.shouldStop) {
      const task = this.taskQueue.shift();
      await this.handleTask(task);
    }

    this.processing = false;
  }

  async handleTask(task) {
    try {
      if (task.t === "GameInfoType") {
        await this.handleGameInfo(task);
      } else if (task.t === "SpinType") {
        await this.handleSpin(task);
      }
    } catch (error) {
      console.error("处理任务失败:", error);
    }
  }

  async handleGameInfo(task) {
    try {
      const { decrypted } = require("../utils/utils");
      const [, spinAckByte] = await this.decryptedRespondBuff(
        task.rsp,
        task.token
      );

      const JiliGameInfo = this.db.getModel("JiliGameInfo");

      const existingGame = await JiliGameInfo.findOne({
        where: { name: task.gameName },
      });

      if (existingGame) {
        await existingGame.update({
          data: task.rsp,
          fullData: task.rsp,
          from: task.from,
          updateTime: new Date(),
        });
      } else {
        await JiliGameInfo.create({
          name: task.gameName,
          data: task.rsp,
          fullData: task.rsp,
          from: task.from,
        });
      }

      console.log(`游戏信息处理完成: ${task.gameName}`);
    } catch (error) {
      console.error("处理游戏信息失败:", error);
    }
  }

  async handleSpin(task) {
    try {
      const { decrypted } = require("../utils/utils");
      const [, spinAckByte] = await this.decryptedRespondBuff(
        task.rsp,
        task.token
      );

      const SpinData = this.db.getModel("SpinData");

      await SpinData.create({
        data: task.rsp,
        from: task.from,
        createTime: new Date(),
      });

      console.log(`Spin数据处理完成: ${task.gameName}`);
    } catch (error) {
      console.error("处理Spin数据失败:", error);
    }
  }

  async decryptedRespondBuff(response, token) {
    try {
      const { decrypted } = require("../utils/utils");
      const decryptedData = decrypted(token, response);
      return [null, decryptedData];
    } catch (error) {
      throw error;
    }
  }

  start() {
    this.isRunning = true;
    this.shouldStop = false;
    console.log("Jili处理器已启动");
  }

  stop() {
    this.shouldStop = true;
    this.isRunning = false;
    console.log("Jili处理器已停止");
  }

  isStop() {
    return this.shouldStop;
  }
}

module.exports = JiliProcessor;
