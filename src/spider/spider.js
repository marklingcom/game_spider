const JiliApi = require("./jili");

class SpiderWork {
  constructor(db, cfg, processor) {
    this.db = db;
    this.cfg = cfg;
    this.processor = processor;
  }

  async processJili(spiderInfo) {
    try {
      const JiliProto = this.db.getModel("JiliProto");
      const jiliProto = await JiliProto.findOne({
        where: { name: spiderInfo.name },
      });

      if (!jiliProto) {
        console.error(`未找到jiliProto数据: ${spiderInfo.name}`);
        return;
      }

      const jiliApi = new JiliApi(
        this.cfg.proxy.enable,
        this.cfg.proxy.server,
        spiderInfo
      );

      const gameInfoBytes = await jiliApi.requestGameInfo();
      if (!gameInfoBytes) {
        console.error("RequestGameInfo失败");
        return;
      }

      this.processor.postTask("jili", {
        t: "GameInfoType",
        token: spiderInfo.token,
        rsp: gameInfoBytes,
        gameName: spiderInfo.name,
        from: spiderInfo.from,
        config: this.cfg,
      });

      jiliApi.doWebSocket();

      const [, spinAckByte] = await jiliApi.decryptedRespondBuff(gameInfoBytes);
      if (!spinAckByte) {
        console.error("解密响应失败");
        return;
      }

      const gameInfoAck = this.parseGameInfoAck(spinAckByte);
      jiliApi.setGameInfo(gameInfoAck);

      await this.startSpinning(jiliApi, spiderInfo, gameInfoAck);

      jiliApi.closeWebSocket();
    } catch (error) {
      console.error("处理Jili失败:", error);
    }
  }

  parseGameInfoAck(spinAckByte) {
    try {
      const protobuf = require("protobufjs");
      const root = protobuf.loadSync("./proto/game.proto");
      const GameInfoAck = root.lookupType("GameInfoAck");
      return GameInfoAck.decode(spinAckByte);
    } catch (error) {
      console.error("解析GameInfoAck失败:", error);
      return null;
    }
  }

  async startSpinning(jiliApi, spiderInfo, gameInfoAck) {
    const { findValidDenominator } = require("../utils/utils");

    while (true) {
      let bet = 0;
      if (this.cfg.betConfig.bet === 0) {
        const [denominator, ok] = findValidDenominator(
          gameInfoAck.walletInfo[0].bet
        );
        if (ok) {
          bet = denominator;
        } else {
          bet = gameInfoAck.walletInfo[0].bet[0];
        }
      } else {
        bet = this.cfg.betConfig.bet;
      }

      const thread = this.cfg.config.thread;
      const isBuyBouns = this.cfg.betConfig.buyBouns;
      const isExtra = this.cfg.betConfig.extra;
      let errNum = 0;

      if (isBuyBouns) {
        thread = 1;
      }

      const promises = [];
      for (let i = 0; i < thread; i++) {
        promises.push(
          this.spinWorker(jiliApi, spiderInfo, bet, isBuyBouns, isExtra)
        );
      }

      const results = await Promise.allSettled(promises);
      errNum = results.filter((result) => result.status === "rejected").length;

      if (errNum === thread) {
        break;
      }

      await this.sleep(this.cfg.config.sleep);
    }
  }

  async spinWorker(jiliApi, spiderInfo, bet, isBuyBouns, isExtra) {
    while (true) {
      if (this.processor.isStop("jili")) {
        console.log(`IsStop ${spiderInfo.name}`);
        process.exit(0);
        break;
      }

      if (jiliApi.isCloseWebSocket()) {
        console.log(`IsCloseWebSocket ${spiderInfo.name}`);
        continue;
      }

      try {
        const spinBytes = await jiliApi.spin(bet, isBuyBouns, isExtra);
        this.processor.postTask("jili", {
          t: "SpinType",
          token: spiderInfo.token,
          rsp: spinBytes,
          gameName: spiderInfo.name,
          from: spiderInfo.from,
          config: this.cfg,
        });
      } catch (error) {
        if (error.message === "NeedRetryError") {
          continue;
        }
        console.error("Spin失败:", error);
        throw error;
      }
    }
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

module.exports = SpiderWork;
