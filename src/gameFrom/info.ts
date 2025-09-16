import { join } from 'node:path';
import axios from 'axios';
import protobuf from 'protobufjs';
import { __protoGeneralDir } from '../utils/env.js';
import { parseJiliGameUrl } from '../utils/url.js';

export interface SpiderData {
  token: string;
  spin: string;
  name: string;
  from: string;
  webSocketData: Buffer;
  gi: number;
}

interface JiliSSOLoginResponse {
  homeUrl: string;
  linecode: number;
  profile: JiliProfile;
  token: string;
  response: JiliResponse;
  platformVersion: string;
  lobbyMode: number;
  disableFullScreen: number;
  country: string;
  certId: number;
  certArea: number;
  clientApiParam: { [key: string]: any };
  itaAuthId: string;
  thousandthMode: string;
}

interface JiliProfile {
  id: string;
  aid: number;
  apiId: number;
  transactionMode: number;
  subAgentCode: number;
  isLobbyOpen: boolean;
  meta: JiliMeta;
  platform: string;
  lobbyMode: number;
  switchOffs: number[];
  wallets: any;
  nickname: string;
  newNickname: string;
  siteId: number;
  account: string;
  coin: number;
  isJPEnabled: number;
  linecode: number;
  prefix: string;
  clientMode: JiliClientMode[];
  betLevel: number;
  license: number;
  isGiftCodeOpen: boolean;
  freeSpinBetValue: number;
  apiType: number;
  walletType: number;
  liveId: string;
}

interface JiliMeta {
  agentAccount: string;
}

interface JiliClientMode {
  eventId: number;
  value: number[];
}

interface JiliResponse {
  error: number;
  message: string;
  time: number;
}

export async function generateWebSocketData(
  gameId: string,
  apiId: string,
  token: string,
  accountId: string
): Promise<Buffer> {
  try {
    const protoPath = join(__protoGeneralDir, 'lifeServiceProto.proto');
    const root = await protobuf.load(protoPath);
    const LifeServiceInitInfo = root.lookupType('lifeServiceProto.LifeServiceInitInfo');

    const lifeServiceData: any = {};

    if (gameId) {
      const gameIdNum = parseInt(gameId, 10);
      if (!Number.isNaN(gameIdNum)) {
        lifeServiceData.gameID = gameIdNum;
        console.log('已设置 lifeservice.GameID:', lifeServiceData.gameID);
      } else {
        console.log('gameId 转换失败:', gameId);
      }
    }

    if (apiId) {
      const apiIdNum = parseInt(apiId, 10);
      if (!Number.isNaN(apiIdNum)) {
        lifeServiceData.apiID = apiIdNum;
      } else {
        console.log('apiId 转换失败:', apiId);
      }
    }

    if (token) {
      lifeServiceData.token = token;
    }

    if (accountId) {
      const accountIdNum = parseInt(accountId, 10);
      if (!Number.isNaN(accountIdNum)) {
        lifeServiceData.accountID = accountIdNum;
      } else {
        console.log('accountId 转换失败:', accountId);
      }
    }

    const message = LifeServiceInitInfo.create(lifeServiceData);
    const webSocketData = LifeServiceInitInfo.encode(message).finish();

    return Buffer.from(webSocketData);
  } catch (error) {
    throw new Error(`序列化WebSocket数据失败: ${error}`);
  }
}

export async function getGameInfoFromApi(gameUrl: string): Promise<SpiderData> {
  try {
    const ret: SpiderData = {
      name: '',
      token: '',
      webSocketData: Buffer.alloc(0),
      spin: '',
      from: '',
      gi: 0,
    };

    const params = parseJiliGameUrl(gameUrl);

    ret.name = params.gameName;
    ret.gi = parseInt(params.gameID, 10);

    if (!params.ssoKey) {
      throw new Error('ssoKey为空');
    }

    let ssoLoginUrl: string;
    if (params.origin.includes('wbgame')) {
      ssoLoginUrl = `${params.origin.replace('wbgame', 'wbwebapi')}/sso-login.api`;
    } else {
      ssoLoginUrl = `${params.origin}/sso-login.api`;
    }

    const formData = new FormData();
    formData.append('key', params.ssoKey);
    formData.append('lang', params.lang);

    console.log('ssoLoginUrl:', ssoLoginUrl);

    const response = await axios.post(ssoLoginUrl, formData, {
      headers: {
        Accept: '*/*',
        'Accept-Language': 'zh,en;q=0.9,zh-CN;q=0.8',
        Origin: params.origin,
        Priority: 'u=1, i',
        Referer: `${params.origin}/`,
        'Sec-Ch-Ua': `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
        'Sec-Ch-Ua-Mobile': '?0',
        'Sec-Ch-Ua-Platform': `"macOS"`,
        'Sec-Fetch-Dest': 'empty',
        'Sec-Fetch-Mode': 'cors',
        'Sec-Fetch-Site': 'same-site',
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
      },
    });

    const responseData: JiliSSOLoginResponse = response.data;

    ret.token = responseData.token;
    console.log('提取到的token:', responseData.token);
    if (!ret.token) {
      console.error('获取token失败:', responseData);
      throw new Error('获取token失败');
    }

    let accountId = '';
    if (responseData.profile.aid !== 0) {
      accountId = responseData.profile.aid.toString();
    }

    const webSocketData = await generateWebSocketData(
      params.gameID,
      params.apiId,
      responseData.token,
      accountId
    );
    ret.webSocketData = webSocketData;

    if (params.origin.includes('wbgame')) {
      ret.spin = params.origin.replace('wbgame', 'wbslot-fd');
    }

    return ret;
  } catch (error) {
    console.error('从API获取Jili数据失败:', error);
    throw error;
  }
}
