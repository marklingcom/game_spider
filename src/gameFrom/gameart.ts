import type { GameSession } from '../config/index.js';
import { decodeKid, parseGameArtSessionConf } from '../spider/gameart/gameart_utils.js';
import { getAxiosClient } from '../utils/request.js';

export async function getGameArtSessionFromUrl(
  gameUrl: string,
  gameName: string,
  gi: number
): Promise<GameSession> {
  const url = new URL(gameUrl);
  const origin = url.origin;
  const htmlUrl = buildDemoHtmlUrl(url);

  let sid = url.searchParams.get('sid') ?? '';
  let kid = url.searchParams.get('kid') ?? '';
  let key = kid ? decodeKid(kid) : '';

  if (!sid || !key) {
    const response = await getAxiosClient().get(htmlUrl, {
      headers: {
        Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        Referer: `${origin}/`,
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
      },
      responseType: 'text',
    });
    const sessionConf = parseGameArtSessionConf(String(response.data));
    sid = sessionConf.sid;
    kid = sessionConf.kid;
    key = sessionConf.key;
  }

  return {
    name: gameName,
    token: key,
    webSocketData: Buffer.alloc(0),
    spin: `${origin}/rgs/engine`,
    from: '',
    gi,
    origin,
    referer: htmlUrl,
    sid,
    kid,
    key,
  };
}

function buildDemoHtmlUrl(url: URL): string {
  if (url.pathname.endsWith('.html')) {
    return url.toString();
  }
  throw new Error(`GameArt 启动 URL 不支持: ${url.toString()}`);
}
