import { parseURL } from './network.js';

export interface JiliGameUrlParams {
  ssoKey: string;
  lang: string;
  apiId: string;
  be: string;
  domainGs: string;
  domainPlatform: string;
  gameID: string;
  gs: string;
  legalLang: string;
  gameName: string;
  origin: string;
}

export function parseJiliGameUrl(gameUrl: string): JiliGameUrlParams {
  try {
    const url = new URL(gameUrl);
    const params = url.searchParams;

    const gameParams: JiliGameUrlParams = {
      ssoKey: params.get('ssoKey') || '',
      lang: params.get('lang') || '',
      apiId: params.get('apiId') || '',
      be: params.get('be') || '',
      domainGs: params.get('domain_gs') || '',
      domainPlatform: params.get('domain_platform') || '',
      gameID: params.get('gameID') || '',
      gs: params.get('gs') || '',
      legalLang: params.get('legalLang') || '',
      gameName: '',
      origin: parseURL(gameUrl).origin,
    };

    const pathParts = url.pathname.split('/').filter((part) => part.length > 0);
    if (pathParts.length > 0) {
      gameParams.gameName = pathParts[0] || '';
    }

    return gameParams;
  } catch (error) {
    console.error('解析URL失败:', error);
    throw error;
  }
}

export interface PPGameUrlParams {
  ssoKey: string;
  token: string;
  symbol: string;
  technology: string;
  platform: string;
  language: string;
  currency: string;
  lobbyUrl: string;
  lang: string;
  apiId: string;
  be: string;
  domainGs: string;
  domainPlatform: string;
  gameID: string;
  gs: string;
  legalLang: string;
  gameName: string;
  origin: string;
}

function parseKeyParam(keyStr: string): Record<string, string> {
  const result: Record<string, string> = {};
  const segments = keyStr.split('`|`');
  for (const seg of segments) {
    const eqIndex = seg.indexOf('=');
    if (eqIndex > 0) {
      const k = seg.slice(0, eqIndex).trim();
      const v = seg.slice(eqIndex + 1).trim();
      result[k] = v;
    }
  }
  return result;
}

// https://nttech.prerelease-env.biz/gs2c/playGame.do?key=token=9b01f43d-1605-11f1-b441-6932e737b82c-NjI5ZGVtb2lucjAxMDI2`|`symbol=vs10floatdrg`|`technology=H5`|`platform=WEB`|`language=en`|`currency=INR`|`lobbyUrl=https://tttplay.awcinfo.club/player/gamehall/?sess=9b01f43d-1605-11f1-b441-6932e737b82c-NjI5ZGVtb2lucjAxMDI2&origin=null&ppkv=2&stylename=nttech_awc&country=KR&promo=n&isGameUrlApiCalled=true&userId=629demoinr01026
export function parsePPGameUrl(gameUrl: string): PPGameUrlParams {
  try {
    const url = new URL(gameUrl);
    const params = url.searchParams;
    const keyRaw = params.get('key') || '';
    const keyParsed = parseKeyParam(keyRaw);

    const token = keyParsed.token || '';
    const symbol = keyParsed.symbol || '';
    const technology = keyParsed.technology || '';
    const platform = keyParsed.platform || '';
    const language = keyParsed.language || '';
    const currency = keyParsed.currency || '';
    const lobbyUrl = keyParsed.lobbyUrl || '';

    return {
      ssoKey: token,
      token,
      symbol,
      technology,
      platform,
      language,
      currency,
      lobbyUrl,
      lang: language,
      apiId: '',
      be: '',
      domainGs: '',
      domainPlatform: '',
      gameID: symbol,
      gs: '',
      legalLang: '',
      gameName: symbol,
      origin: parseURL(gameUrl).origin,
    };
  } catch (error) {
    console.error('解析URL失败:', error);
    throw error;
  }
}
