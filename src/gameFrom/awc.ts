import * as fs from 'node:fs';
import * as path from 'node:path';
import * as cheerio from 'cheerio';
import { decryptAESECB, encryptAESECB } from '../utils/crypto/index.js';
import { getUrlHtmlContent, parseRedirectResponse } from '../utils/network.js';
import { getAxiosClient } from '../utils/request.js';
import { parseJiliGameUrl, parsePPGameUrl } from '../utils/url.js';

interface GameIcon {
  uuid: string;
  isGameIcon: boolean;
  enable: boolean;
  isNew: boolean;
  isHot: boolean;
  isExclusive: boolean;
  favorite: boolean;
  img: string;
  suffix: string;
  gameName: string;
  gameNameEn: string;
  platform: string;
  platformName: string;
  tabType: string;
  ratio: string;
  lang: string[];
}

interface PartialGameHallResponse {
  status: string;
  imgVer: string;
  iconList: GameIcon[];
}

interface UserInfoResponse {
  at: string;
  balance: number;
  btsePath: string;
  currencySymbol: string;
  enableFeedback: boolean;
  enableNeuA: boolean;
  enableOutstandingReport: boolean;
  enableReport: boolean;
  freeCredit: number;
  homePath: string | null;
  isEnableFreeCredit: boolean;
  isPromotion: boolean;
  lang: string;
  logo: string;
  referrer: string;
  rt: string;
  theme: string;
  userId: string;
}

interface GamePathResponse {
  isHTML: boolean;
  status: string;
  gamePath: string;
}

interface LoginResponse {
  extension: unknown[];
  status: string;
  url: string;
}

interface RefInfo {
  sc: string;
  domain: string;
  tabType: string;
  origin: string;
  platform: string;
}

type BrandType = 'JILI' | 'PP';

type GameType = 'SLOT';

export class AWC {
  private brand: BrandType;
  private gameType: GameType;

  constructor(brand: BrandType, gameType: GameType) {
    this.brand = brand;
    this.gameType = gameType;
  }

  private authorization: string = '';

  private iconList: GameIcon[] = [];

  private async checkAuthorization(): Promise<string> {
    if (!this.authorization) {
      this.authorization = await this.onLogin();
    }
    return this.authorization;
  }

  private async parseLoginHtml(htmlContent: string): Promise<string> {
    try {
      const $ = cheerio.load(htmlContent);
      const formData = new URLSearchParams();

      $('form#form1 input').each((_i, element) => {
        const name = $(element).attr('name');
        const value = $(element).attr('value');

        if (name) {
          formData.set(name, value || '');
        }
      });

      return formData.toString();
    } catch (error) {
      throw new Error(`解析HTML失败: ${error}`);
    }
  }

  async getLoginFormUrl(): Promise<string> {
    const apiURL = 'https://demoap.awcinfo.club/demo/wallet/login';
    const formData = new URLSearchParams({
      currency: 'INR',
      gameType: this.gameType,
      language: 'EN',
      platform: this.brand,
    });
    const response = await getAxiosClient().post(apiURL, formData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    });

    const result: LoginResponse = response.data;
    if (!result.url) {
      throw new Error(`登录获取 URL 失败: ${JSON.stringify(response.data)}`);
    }
    console.log('登录获取 URL:', result.url);
    return result.url;
  }

  async onLogin(): Promise<string> {
    const loginFormUrl = await this.getLoginFormUrl();
    const htmlContent = await getUrlHtmlContent(loginFormUrl);
    const loginFormData = await this.parseLoginHtml(htmlContent);

    const postURL = 'https://tttplay.awcinfo.club/player/login/apiLogin';
    const redirectResponse = await getAxiosClient().post(postURL, loginFormData, {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
      },
    });

    const redirectUrl = await parseRedirectResponse(redirectResponse);
    const refInfo = this.parseURLInRef(redirectUrl);
    const accountInfo = await this.getAccountInfo(refInfo);

    this.authorization = accountInfo.at;
    console.log(`获取到 token: ${this.authorization}`);
    return this.authorization;
  }

  private parseURLInRef(rawURL: string): RefInfo {
    const url = new URL(rawURL);
    const ref = url.searchParams.get('ref');

    if (!ref) {
      throw new Error('ref 参数为空');
    }

    const plainBytes = decryptAESECB(ref);
    const plainText = plainBytes.toString();
    const params = new URLSearchParams(plainText);

    return {
      sc: params.get('sc') || '',
      domain: params.get('domain') || '',
      tabType: params.get('tabType') || '',
      origin: params.get('origin') || '',
      platform: params.get('platform') || '',
    };
  }

  private async getAccountInfo(refInfo: RefInfo): Promise<UserInfoResponse> {
    const apiURL = 'https://tttplay.awcinfo.club/player/gamehall/userInfo';
    const requestData = { sc: refInfo.sc };

    try {
      const result = await this.postRequest<UserInfoResponse>(apiURL, requestData);
      return result;
    } catch (error) {
      console.error('获取用户信息失败:', error);
      throw error;
    }
  }

  private async postRequest<T = unknown>(
    apiURL: string,
    data: Record<string, unknown>
  ): Promise<T> {
    const jsonBytes = JSON.stringify(data);
    const reqData = encryptAESECB(Buffer.from(jsonBytes));

    try {
      const response = await getAxiosClient().post(apiURL, reqData, {
        headers: {
          accept: 'application/json, text/plain, */*',
          'accept-language': 'zh-CN,zh-TW;q=0.9,zh;q=0.8,en;q=0.7,ja;q=0.6',
          'cache-control': 'no-cache',
          'content-type': 'application/x-www-form-urlencoded;charset=UTF-8',
          origin: 'https://tttuat.apihub55.com',
          pragma: 'no-cache',
          priority: 'u=1, i',
          referer: 'https://tttuat.apihub55.com/',
          'sec-ch-ua': '"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"',
          'sec-ch-ua-mobile': '?0',
          'sec-ch-ua-platform': '"macOS"',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'cross-site',
          'sec-fetch-storage-access': 'active',
          'user-agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
          authorization: this.authorization,
        },
      });

      const decryptedData = decryptAESECB(response.data);
      return JSON.parse(decryptedData.toString()) as T;
    } catch (error) {
      console.error('请求失败:', error);
      throw error;
    }
  }

  private async getGameList(lang = 'en'): Promise<GameIcon[]> {
    await this.checkAuthorization();

    try {
      const apiURL = 'https://tttplay.awcinfo.club/player/gamehall/getAllGame';
      const requestData = { lang };
      const result = await this.postRequest<PartialGameHallResponse>(apiURL, requestData);

      for (const icon of result.iconList) {
        if (icon.platform === this.brand && icon.tabType === this.gameType) {
          this.iconList.push({
            gameName: icon.gameName,
            uuid: icon.uuid,
          } as GameIcon);
        }
      }
      return this.iconList;
    } catch (error) {
      console.error('获取游戏列表失败:', error);
      throw error;
    }
  }

  async getGameUrl(uuid: string): Promise<string> {
    const apiURL = 'https://tttplay.awcinfo.club/player/gamehall/gamePath';

    try {
      const requestData = {
        lang: 'en',
        // origin: '/platform/JILI_tabType=SLOT',
        platform: this.brand,
        uuid: uuid,
      };
      const result = await this.postRequest<GamePathResponse>(apiURL, requestData);
      return result.gamePath;
    } catch (error) {
      console.error('获取游戏URL失败:', error);
      throw error;
    }
  }

  async genGameInfo() {
    const gameList = await this.getGameList();
    const gameInfoList: any[] = [];

    for (const game of gameList) {
      try {
        const gameUrl = await this.getGameUrl(game.uuid);
        console.log(`获取到游戏URL: ${gameUrl}`);
        if (this.brand === 'JILI') {
          const params = parseJiliGameUrl(gameUrl);
          console.log(`获取到游戏参数: ${JSON.stringify(params)}`);
          gameInfoList.push({
            fullName: game.gameName,
            gi: parseInt(params.gameID, 10),
            name: params.gameName,
            uuid: game.uuid,
          });
        } else if (this.brand === 'PP') {
          const params = parsePPGameUrl(gameUrl);
          console.log(`获取到游戏参数: ${JSON.stringify(params)}`);
          gameInfoList.push({
            id: params.gameID,
            name: game.gameName,
          });
        }
      } catch (error) {
        console.error(`获取游戏 ${game.gameName} 信息失败:`, error);
      }
    }

    const fileName = `${this.brand}-${this.gameType}.json`;
    console.log(`游戏信息: ${this.brand}-${this.gameType} 写入文件: ${fileName}`);
    const outputPath = path.join(process.cwd(), 'config', 'awc', fileName);
    const outputDir = path.dirname(outputPath);

    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    fs.writeFileSync(outputPath, JSON.stringify(gameInfoList, null, 2), 'utf8');
    console.log(`游戏信息已写入文件: ${outputPath}`);
    console.log(`共处理 ${gameInfoList.length} 个游戏`);
  }

  async getGameUrlForGameName(gameName: string, lang = 'en'): Promise<string> {
    const gameList = await this.getGameList(lang);

    let gameId = '';
    for (const game of gameList) {
      if (game.gameName === gameName) {
        console.log(`游戏名称: ${game.gameName}, URL: ${game.uuid}`);
        gameId = game.uuid;
        break;
      }
    }

    if (!gameId) {
      throw new Error('获取游戏ID失败');
    }

    const url = await this.getGameUrl(gameId);
    console.log(`获取到游戏URL: ${url}`);
    return url;
  }
}
