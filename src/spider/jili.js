const axios = require("axios");
const WebSocket = require("ws");
const { decrypted } = require("../utils/utils");

class JiliApi {
  constructor(enableProxy, proxyServer, spiderInfo) {
    this.enableProxy = enableProxy;
    this.proxyServer = proxyServer;
    this.spiderInfo = spiderInfo;
    this.gameInfo = null;
    this.ws = null;
    this.isWebSocketClosed = false;
  }

  async requestGameInfo() {
    try {
      const config = {
        method: "POST",
        url: `${this.spiderInfo.sip}/api/game/info`,
        headers: {
          Authorization: `Bearer ${this.spiderInfo.token}`,
          "Content-Type": "application/json",
        },
        data: {
          gameId: this.spiderInfo.name,
        },
      };

      if (this.enableProxy) {
        config.proxy = this.proxyServer;
      }

      const response = await axios(config);
      return Buffer.from(response.data);
    } catch (error) {
      console.error("请求游戏信息失败:", error);
      throw error;
    }
  }

  doWebSocket() {
    try {
      const wsUrl = this.spiderInfo.sip.replace("http", "ws") + "/ws";
      this.ws = new WebSocket(wsUrl, {
        headers: {
          Authorization: `Bearer ${this.spiderInfo.token}`,
        },
      });

      this.ws.on("open", () => {
        console.log("WebSocket连接已建立");
        this.isWebSocketClosed = false;
      });

      this.ws.on("message", (data) => {
        this.handleWebSocketMessage(data);
      });

      this.ws.on("close", () => {
        console.log("WebSocket连接已关闭");
        this.isWebSocketClosed = true;
      });

      this.ws.on("error", (error) => {
        console.error("WebSocket错误:", error);
        this.isWebSocketClosed = true;
      });
    } catch (error) {
      console.error("WebSocket连接失败:", error);
      this.isWebSocketClosed = true;
    }
  }

  handleWebSocketMessage(data) {
    try {
      const message = JSON.parse(data.toString());
      console.log("收到WebSocket消息:", message);
    } catch (error) {
      console.error("处理WebSocket消息失败:", error);
    }
  }

  async spin(bet, isBuyBouns, isExtra) {
    try {
      const config = {
        method: "POST",
        url: `${this.spiderInfo.sip}/api/game/spin`,
        headers: {
          Authorization: `Bearer ${this.spiderInfo.token}`,
          "Content-Type": "application/json",
        },
        data: {
          bet,
          buyBouns: isBuyBouns,
          extra: isExtra,
        },
      };

      if (this.enableProxy) {
        config.proxy = this.proxyServer;
      }

      const response = await axios(config);
      return Buffer.from(response.data);
    } catch (error) {
      if (error.response && error.response.status === 429) {
        const retryError = new Error("NeedRetryError");
        retryError.name = "NeedRetryError";
        throw retryError;
      }
      console.error("Spin请求失败:", error);
      throw error;
    }
  }

  async decryptedRespondBuff(response, token) {
    try {
      const decryptedData = decrypted(token, response);
      return [null, decryptedData];
    } catch (error) {
      return [error, null];
    }
  }

  setGameInfo(gameInfo) {
    this.gameInfo = gameInfo;
  }

  isCloseWebSocket() {
    return this.isWebSocketClosed;
  }

  closeWebSocket() {
    if (this.ws) {
      this.ws.close();
      this.isWebSocketClosed = true;
    }
  }
}

module.exports = JiliApi;
