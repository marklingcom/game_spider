import type { AxiosRequestConfig, AxiosResponse } from 'axios';
import { getAxiosClient } from './request.js';

export function parseURL(targetURL: string): {
  protocol: string;
  host: string;
  origin: string;
} {
  const parsedURL = new URL(targetURL);

  return {
    protocol: parsedURL.protocol,
    host: parsedURL.host,
    origin: `${parsedURL.protocol}//${parsedURL.host}`,
  };
}

export function parseRedirectResponse(response: AxiosResponse): string {
  let redirectURL = '';
  // 检查是否是重定向状态码
  if (response.status === 302 || response.status === 301) {
    redirectURL = response.headers.location;
  }
  if (!redirectURL && response.status === 200) {
    const data = response.data;
    if (data) {
      const html = data;
      const locationMatch = html.match(/location\.replace\('([^']+)'\)/);

      if (locationMatch?.[1]) {
        redirectURL = locationMatch[1];
      }
    }
  }
  return redirectURL;
}

export async function getRedirectURL(reqConfig: AxiosRequestConfig, retry = 3): Promise<string> {
  const method = reqConfig.method || 'POST';

  // const { host } = parseURL(reqConfig.url);
  // headers.Origin = origin;
  // headers.Referer = origin;
  // headers.Host = host;

  const config: AxiosRequestConfig = {
    timeout: 30000,
    ...reqConfig,
    method: method.toLowerCase() as any,
    maxRedirects: 0, // 禁用自动重定向
    validateStatus: (status) => status >= 200 && status < 400,
  };
  const response = await getAxiosClient().request(config);

  const redirectURL = parseRedirectResponse(response);

  if ((!redirectURL || redirectURL === reqConfig.url) && retry > 0) {
    const nextRetry = retry - 1;
    // console.log(`获取重定向地址失败, 重试次数: ${nextRetry}`);
    return getRedirectURL(reqConfig, nextRetry);
  }

  return redirectURL;
}

export async function getUrlHtmlContent(url: string): Promise<string> {
  try {
    const response = await getAxiosClient().get(url);
    return response.data;
  } catch (error) {
    console.error('获取HTML内容失败:', error);
    throw error;
  }
}
