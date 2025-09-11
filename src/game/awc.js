const axios = require("axios");
const cheerio = require("cheerio");

class AWC {
  constructor(brand, gameType) {
    this.brand = brand;
    this.gameType = gameType;
    this.baseUrl = "https://awc.com";
  }

  async getGameUrlForGameName(gameName) {
    try {
      const response = await axios.get(`${this.baseUrl}/games`, {
        params: {
          brand: this.brand,
          type: this.gameType,
          name: gameName,
        },
      });

      const $ = cheerio.load(response.data);
      const gameLink = $(".game-item").first().find("a").attr("href");

      if (!gameLink) {
        throw new Error("未找到游戏链接");
      }

      return [this.baseUrl + gameLink, null];
    } catch (error) {
      return [null, error];
    }
  }

  async getJiliFromUrl(url) {
    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);

      const token = $('meta[name="jili-token"]').attr("content");
      const sip = $('meta[name="jili-sip"]').attr("content");
      const name = $('meta[name="jili-name"]').attr("content");

      if (!token || !sip || !name) {
        throw new Error("无法从页面获取必要的Jili信息");
      }

      return {
        token,
        sip,
        name,
        from: "awc",
      };
    } catch (error) {
      console.error("从AWC获取Jili数据失败:", error);
      throw error;
    }
  }
}

module.exports = AWC;
