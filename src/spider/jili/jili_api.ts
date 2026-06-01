import { EventEmitter } from 'node:events';
import WebSocket from 'ws';
import type { SpiderData } from '../../gameFrom/info.js';
import {
  type Browser,
  GameInfoAck,
  InfoReq,
  MallType,
  Request,
  SpinReq,
} from './proto/general/astarte2_196.js';
// import { type Browser, InfoReq } from './proto/general/astarte2_196.js';
import { getCacert } from '../../utils/cacert/cacert.js';
import type { BuyBounsConfig, Config, ExtraConfig } from '../../config/index.js';
import { getAxiosClient } from '../../utils/request.js';
import { decryptResponseBuffer } from './jili_utils.js';

export interface WebSocketMessage {
  cmdType: number;
  content: {
    currentDatetime: string;
  };
}

export class JiliApi extends EventEmitter {
  private jiliSpider: SpiderData;
  private config: Config;
  private ws: WebSocket | null = null;

  gameInfoAck: GameInfoAck | null = null;

  constructor(options: {
    config: Config;
    spiderData: SpiderData;
  }) {
    super();
    this.config = options.config;
    this.jiliSpider = options.spiderData;
  }

  async spin(
    bet: number,
    buyBouns: BuyBounsConfig,
    extra: ExtraConfig
  ): Promise<{
    spinReqData: SpinReq;
    spinResBuffer: Buffer;
  }> {
    if (buyBouns.enable && extra.enable) {
      throw new Error('不能同时为true');
    }

    let url = `${this.jiliSpider.spin}/${this.jiliSpider.name}/req`;
    if (this.config.currentJiliConfig.isOld) {
      url += '?D=0';
    }

    try {
      const spinReqData: SpinReq = {
        bet: bet,
        special: {
          turbo: false,
          cheat: 0,
          robot: false,
          tournament: false,
        },
      };

      if (buyBouns.enable) {
        let priceOdd: number | undefined;
        let type = MallType.NORMAL_MALL;
        const index = buyBouns.index;
        if (this.gameInfoAck?.mall) {
          priceOdd = this.gameInfoAck.mall.priceOdd;
        }
        if (this.gameInfoAck?.gameMall?.priceOdd) {
          type = MallType.GAME_MALL;
          priceOdd = this.gameInfoAck.gameMall.priceOdd[index];
        }
        if (priceOdd) {
          spinReqData.mall = {
            type,
            index,
            bet: priceOdd * bet,
          };
        }
      }

      if (extra.enable) {
        spinReqData.extraSpin = {
          index: extra.index,
        };
      }

      const requestData = {
        ack: 0,
        req: SpinReq.toBinary(spinReqData),
      };

      const postData = Request.toBinary(requestData);

      const response = await getAxiosClient().post(url, postData, {
        headers: {
          'Content-Type': 'application/x-protobuf',
          token: this.jiliSpider.token,
        },
        responseType: 'arraybuffer',
      });

      const body = response.data;
      const { gaiaResponseData: spinAckByte } = await decryptResponseBuffer(
        response.data,
        this.jiliSpider.token
      );

      if (spinAckByte.length === 0) {
        throw new Error('spinAckByte is empty');
      }

      return {
        spinReqData,
        spinResBuffer: body,
      };
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        const retryError = new Error('NeedRetryError');
        retryError.name = 'NeedRetryError';
        throw retryError;
      }
      throw error;
    }
  }

  async requestGameInfo(): Promise<{
    data: Buffer;
    gaiaResponseData: Buffer;
    gameInfoAck: GameInfoAck;
  }> {
    let url = `${this.jiliSpider.spin}/${this.jiliSpider.name}/req`;
    if (this.config.currentJiliConfig.isOld) {
      url += '?D=1';
    }

    try {
      const browser: Browser = {
        type: 'chrome',
        version: '148.0.0.0',
        language: 'en-US',
        width: 1470,
        height: 956,
        ratio: 0,
      };

      const infoReq: InfoReq = {
        os: 'OS X',
        language: 'en-US',
        browser: browser,
        version: '',
        // model: 'Nexus 5',
        model: 'Macintosh',
      };

      const request = {
        ack: 1,
        req: InfoReq.toBinary(infoReq),
      };

      const postData = Request.toBinary(request);

      //       const postData = parseHexInput(`08 01 12 3C 0A 04 4F 53 20 58 12 05 65 6E 2D 55
      // 53 1A 20 0A 06 63 68 72 6F 6D 65 12 09 31 34 38
      // 2E 30 2E 30 2E 30 1A 05 65 6E 2D 55 53 20 BE 0B
      // 28 BC 07 22 00 2A 09 4D 61 63 69 6E 74 6F 73 68
      // 1A 14 69 C2 FB 6E 0A 9E E7 DB AE 9E 9B 8E 01 8B
      // D9 6A 7B E6 6C 8D 22 20 E5 98 56 F3 B8 39 53 1E
      // 05 40 A0 DD 14 4C 0D 8E 19 EB 57 C5 C4 9B C8 73
      // 0B A4 83 76 5B DC 62 56`);

      const response = await getAxiosClient().post(url, postData, {
        headers: {
          'Content-Type': 'application/x-protobuf',
          token: this.jiliSpider.token,
        },
        responseType: 'arraybuffer',
      });

      const body = Buffer.from(response.data);
      const { data, gaiaResponseData } = await decryptResponseBuffer(body, this.jiliSpider.token);

      const gameInfoAck = GameInfoAck.fromBinary(gaiaResponseData);
      this.gameInfoAck = gameInfoAck;

      return {
        data,
        gaiaResponseData,
        gameInfoAck,
      };
    } catch (error: any) {
      if (error.response && error.response.status === 429) {
        const retryError = new Error('NeedRetryError');
        retryError.name = 'NeedRetryError';
        throw retryError;
      }
      throw error;
    }
  }

  private async connectWebSocket(serverURL: string, maxRetries: number): Promise<WebSocket> {
    for (let i = 1; i <= maxRetries; i++) {
      try {
        console.log('开始连接WebSocket:', serverURL);
        const ws = new WebSocket(serverURL, {
          rejectUnauthorized: true,
          ca: getCacert(),
        });

        await new Promise((resolve, reject) => {
          ws.on('open', function open() {
            console.log(`✅ 第 ${i} 次连接成功`);
            resolve(ws);
          });

          // 连接出错
          ws.on('error', function error(err) {
            console.error('连接错误:', err);
            reject(err);
          });
        });
        return ws;
      } catch (error) {
        console.log(`⚠️ 第 ${i} 次连接失败: ${error}，1秒后重试...`);
        if (i < maxRetries) {
          await new Promise((resolve) => setTimeout(resolve, 1000));
        }
      }
    }
    throw new Error(`重试 ${maxRetries} 次仍然无法连接`);
  }

  async doWebSocket(): Promise<void> {
    const maxRetries = 3;
    const wsUrl = `${this.jiliSpider.spin.replace('https://', 'wss://')}/lifeservice/ws2`;

    try {
      const ws = await this.connectWebSocket(wsUrl, maxRetries);

      // 连接成功后发送第一个数据包
      const postData = this.jiliSpider.webSocketData;
      ws.send(postData);

      // 读取服务器回包
      const message = await new Promise<Buffer>((resolve, reject) => {
        ws.once('message', (data) => {
          resolve(data as Buffer);
        });
        ws.once('error', reject);
        setTimeout(() => reject(new Error('WebSocket 响应超时')), 5000);
      });

      try {
        const response = JSON.parse(message.toString());
        if (response.error !== 0) {
          console.log(`发生错误收到服务器回包: ${message.toString()}`);
          return;
        }
      } catch (_error) {
        console.log(`发生错误收到服务器回包: ${message.toString()}`);
        return;
      }

      // 启动定时器每 7 秒发送一次时间戳
      const ticker = setInterval(() => {
        if (!this.ws) {
          clearInterval(ticker);
          return;
        }

        const now = new Date();
        const formatted = now.toISOString().replace('T', ' ').replace('Z', '');

        const msg: WebSocketMessage = {
          cmdType: -1,
          content: {
            currentDatetime: formatted,
          },
        };

        try {
          const jsonBytes = JSON.stringify(msg);
          // console.log('发送消息:', jsonBytes);
          this.ws.send(jsonBytes);
        } catch (error) {
          console.log('发送失败:', error);
          clearInterval(ticker);
        }
      }, 7000);

      // 监听消息
      ws.on('message', (data) => {
        try {
          const response = JSON.parse(data.toString());
          if (response.error !== 0) {
            console.log(`发生错误收到服务器回包: ${data.toString()}`);
          }
          // 这里可以添加对接收消息的处理逻辑
          this.emit('message', response);
        } catch (_error) {
          console.log(`发生错误收到服务器回包: ${data.toString()}`);
        }
      });

      ws.on('close', () => {
        console.log('WebSocket连接关闭');
        this.closeWebSocket();
        clearInterval(ticker);
        this.emit('close');
      });

      ws.on('error', (error) => {
        console.log('WebSocket连接错误:', error);
        this.closeWebSocket();
        clearInterval(ticker);
        this.emit('error', error);
      });

      this.ws = ws;
    } catch (error) {
      console.log('WebSocket连接失败:', error);
      this.closeWebSocket();
    }
  }

  closeWebSocket(): void {
    if (this.ws) {
      this.ws.close();
    }
    this.ws = null;
  }

  get isConnected() {
    return this.ws !== null;
  }
}
