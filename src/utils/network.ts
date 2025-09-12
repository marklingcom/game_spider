import axios, { type AxiosRequestConfig } from 'axios';

export interface RedirectRequest {
  url: string;
  method: string;
  body?: string;
  headers?: { [key: string]: string };
  timeout?: number;
  userAgent?: string;
  origin?: string;
  referer?: string;
  cookie?: string;
}

export function getOriginFromURL(targetURL: string): string {
  if (!targetURL) {
    return '';
  }

  try {
    const parsedURL = new URL(targetURL);

    if (!parsedURL.protocol || !parsedURL.host) {
      return '';
    }

    return `${parsedURL.protocol}//${parsedURL.host}`;
  } catch (_error) {
    return '';
  }
}

export async function getRedirectURL(reqConfig: RedirectRequest): Promise<string> {
  const method = reqConfig.method || 'POST';
  const timeout = reqConfig.timeout || 30000; // 30 seconds
  const userAgent =
    reqConfig.userAgent ||
    'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36';

  const config: AxiosRequestConfig = {
    method: method.toLowerCase() as any,
    url: reqConfig.url,
    timeout: timeout,
    maxRedirects: 0, // 禁用自动重定向
    validateStatus: (status) => status >= 200 && status < 400,
    headers: {
      'User-Agent': userAgent,
    },
  };

  // 设置请求体
  if (reqConfig.body) {
    config.data = reqConfig.body;
    config.headers!['Content-Type'] = 'application/x-www-form-urlencoded';
  }

  // 设置 Origin
  let origin = reqConfig.origin;
  if (!origin) {
    origin = getOriginFromURL(reqConfig.url);
  }
  if (origin) {
    config.headers!.Origin = origin;
  }

  // 设置 Referer
  const referer = reqConfig.referer || reqConfig.url;
  config.headers!.Referer = referer;

  // 设置 Cookie
  if (reqConfig.cookie) {
    config.headers!.Cookie = reqConfig.cookie;
  }

  // 设置自定义头部
  if (reqConfig.headers) {
    Object.assign(config.headers!, reqConfig.headers);
  }

  try {
    const response = await axios(config);

    // 检查是否是重定向状态码
    if (response.status === 302 || response.status === 301) {
      const location = response.headers.location;
      if (location) {
        return location;
      }
    }

    // 如果没有重定向，返回原始 URL
    return reqConfig.url;
  } catch (error: any) {
    // 如果是重定向错误，尝试从错误响应中获取 Location
    if (error.response && (error.response.status === 302 || error.response.status === 301)) {
      const location = error.response.headers.location;
      if (location) {
        return location;
      }
    }

    // 如果是其他错误，尝试从响应体中查找 JavaScript 重定向
    if (error.response?.data) {
      const html =
        typeof error.response.data === 'string'
          ? error.response.data
          : JSON.stringify(error.response.data);
      const locationMatch = html.match(/location\.replace\('([^']+)'\)/);

      if (locationMatch?.[1]) {
        return locationMatch[1];
      }
    }

    throw new Error(`获取重定向地址失败: ${error.message}`);
  }
}

export function getHuiduHeaders(): { [key: string]: string } {
  return {
    Accept:
      'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
    'Accept-Language': 'zh,en;q=0.9,zh-CN;q=0.8',
    Connection: 'keep-alive',
    'Sec-Fetch-Dest': 'document',
    'Sec-Fetch-Mode': 'navigate',
    'Sec-Fetch-Site': 'none',
    'Sec-Fetch-User': '?1',
    'Upgrade-Insecure-Requests': '1',
    'sec-ch-ua': `"Not;A=Brand";v="99", "Google Chrome";v="139", "Chromium";v="139"`,
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': `"macOS"`,
  };
}
