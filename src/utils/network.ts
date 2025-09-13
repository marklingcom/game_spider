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

export async function getRedirectURL(reqConfig: RedirectRequest): Promise<string> {
  const method = reqConfig.method || 'POST';
  const timeout = reqConfig.timeout || 30000; // 30 seconds

  const headers: AxiosRequestConfig['headers'] = {
    ...reqConfig.headers,
  };
  const { host } = parseURL(reqConfig.url);
  // headers.Origin = origin;
  // headers.Referer = origin;
  headers.Host = host;

  const config: AxiosRequestConfig = {
    method: method.toLowerCase() as any,
    url: reqConfig.url,
    timeout: timeout,
    maxRedirects: 0, // 禁用自动重定向
    validateStatus: (status) => status >= 200 && status < 400,
    headers,
  };
  const response = await axios(config);

  // 检查是否是重定向状态码
  if (response.status === 302 || response.status === 301) {
    const location = response.headers.location;
    const data = response.data;
    if (location) {
      return location;
    } else if (data) {
      const html = data;
      const locationMatch = html.match(/location\.replace\('([^']+)'\)/);

      if (locationMatch?.[1]) {
        return locationMatch[1];
      }
    }
  }
}
