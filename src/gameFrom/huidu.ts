import axios from 'axios';
import type { HuiduConfig } from '../utils/config.js';
import { getRedirectURL } from '../utils/network.js';

const GAME_API_URL = 'https://bw.yobao.xyz/api/bwGame/getLaunchUrl';
const TIMEOUT = 30000; // 30 seconds in milliseconds

interface HuiduResponse {
  code: number;
  msg: string;
  data: {
    game_launch_url: string;
    portrait?: string;
  };
}

export async function getGameUrl(huiDuConfig: HuiduConfig, index: number): Promise<string> {
  const requestData = {
    uid: huiDuConfig.uidList[index],
    coin: huiDuConfig.coin,
    game_uid: huiDuConfig.gameUid,
    company_id: huiDuConfig.companyId,
    partner_id: 1,
    home_url: '',
  };

  const response = await axios.post(GAME_API_URL, requestData, {
    headers: {
      'Content-Type': 'application/json',
    },
    timeout: TIMEOUT,
  });

  if (response.status !== 200) {
    throw new Error(`HTTP 状态码错误: ${response.status}`);
  }

  const gameResp: HuiduResponse = response.data;

  const redirectURL = gameResp.data.game_launch_url;
  if (!redirectURL) {
    throw new Error('游戏启动 URL 为空');
  }

  console.log('重定向 url:', redirectURL);
  const gameUrl = await getRedirectURL({
    url: redirectURL,
    method: 'GET',
  });

  return gameUrl;
}
