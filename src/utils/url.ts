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
