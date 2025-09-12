import axios from 'axios';
import * as cheerio from 'cheerio';

export default class AWC {
  private brand: string;
  private gameType: string;
  private baseUrl: string = 'https://awc.com';

  constructor(brand: string, gameType: string) {
    this.brand = brand;
    this.gameType = gameType;
  }

  async getGameUrlForGameName(gameName: string): Promise<[string | null, Error | null]> {
    try {
      const response = await axios.get(`${this.baseUrl}/games`, {
        params: {
          brand: this.brand,
          type: this.gameType,
          name: gameName,
        },
      });

      const $ = cheerio.load(response.data);
      const gameLink = $('.game-item').first().find('a').attr('href');

      if (!gameLink) {
        throw new Error('未找到游戏链接');
      }

      return [this.baseUrl + gameLink, null];
    } catch (error) {
      return [null, error as Error];
    }
  }

  async getJiliFromUrl(
    url: string
  ): Promise<{ token: string; sip: string; name: string; from: string }> {
    try {
      const response = await axios.get(url);
      const $ = cheerio.load(response.data);

      const token = $('meta[name="jili-token"]').attr('content');
      const sip = $('meta[name="jili-sip"]').attr('content');
      const name = $('meta[name="jili-name"]').attr('content');

      if (!token || !sip || !name) {
        throw new Error('无法从页面获取必要的Jili信息');
      }

      return {
        token,
        sip,
        name,
        from: 'awc',
      };
    } catch (error) {
      console.error('从AWC获取Jili数据失败:', error);
      throw error;
    }
  }
}
