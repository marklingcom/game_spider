const axios = require("axios");

class Huidu {
  constructor(config = {}) {
    this.config = {
      uid: config.uid || 0,
      coin: config.coin || 0,
      gameUid: config.gameUid || "",
      companyId: config.companyId || 0,
      uidList: config.uidList || [],
    };
    this.baseUrl = "https://huidu.com";
  }

  getGameUrl() {
    return `${this.baseUrl}/game?uid=${this.config.uid}&coin=${this.config.coin}&game_uid=${this.config.gameUid}&company_id=${this.config.companyId}`;
  }

  async getJiliFromUrl(url) {
    try {
      const response = await axios.get(url, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
        },
      });

      const html = response.data;

      const tokenMatch = html.match(/token['":\s]*['"]([^'"]+)['"]/);
      const sipMatch = html.match(/sip['":\s]*['"]([^'"]+)['"]/);
      const nameMatch = html.match(/gameName['":\s]*['"]([^'"]+)['"]/);

      const token = tokenMatch ? tokenMatch[1] : "";
      const sip = sipMatch ? sipMatch[1] : "";
      const name = nameMatch ? nameMatch[1] : "";

      if (!token || !sip || !name) {
        throw new Error("无法从页面获取必要的Jili信息");
      }

      return {
        token,
        sip,
        name,
        from: "huidu",
      };
    } catch (error) {
      console.error("从Huidu获取Jili数据失败:", error);
      throw error;
    }
  }
}

module.exports = Huidu;
