import axios, { type AxiosRequestConfig } from 'axios';

export interface RedirectRequest {
  url: string;
  method: string;
  body?: string;
  headers?: AxiosRequestConfig['headers'];
  timeout?: number;
}

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

export async function getRedirectURL(reqConfig: RedirectRequest, retry = 3): Promise<string> {
  const method = reqConfig.method || 'POST';
  const timeout = reqConfig.timeout || 30000; // 30 seconds

  const headers: AxiosRequestConfig['headers'] = {
    ...reqConfig.headers,
  };
  // const { host } = parseURL(reqConfig.url);
  // headers.Origin = origin;
  // headers.Referer = origin;
  // headers.Host = host;

  const config: AxiosRequestConfig = {
    method: method.toLowerCase() as any,
    url: reqConfig.url,
    timeout: timeout,
    maxRedirects: 0, // 禁用自动重定向
    validateStatus: (status) => status >= 200 && status < 400,
    headers,
  };
  const response = await axios(config);

  let redirectURL = '';
  // 检查是否是重定向状态码
  if (response.status === 302 || response.status === 301) {
    const location = response.headers.location;
    const data = response.data;
    if (location) {
      redirectURL = location;
    } else if (data) {
      const html = data;
      const locationMatch = html.match(/location\.replace\('([^']+)'\)/);

      if (locationMatch?.[1]) {
        redirectURL = locationMatch[1];
      }
    }
  }

  if ((!redirectURL || redirectURL === reqConfig.url) && retry > 0) {
    const nextRetry = retry - 1;
    console.log(`获取重定向地址失败, 重试次数: ${nextRetry}`);
    return getRedirectURL(reqConfig, nextRetry);
  }

  return redirectURL;
}
