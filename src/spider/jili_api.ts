import { EventEmitter } from 'node:events';
import axios, { type AxiosProxyConfig, type AxiosRequestConfig } from 'axios';
import WebSocket from 'ws';
import type { SpiderData } from '../gameFrom/info.js';
import {
  type Browser,
  GameInfoAck,
  InfoReq,
  MallType,
  Request,
  SpinReq,
} from '../protoGeneral/astarte2_196.js';
import { getCacert } from '../utils/cacert.js';
import type Config from '../utils/config.js';
import { decryptResponseBuffer } from '../utils/decrypt.js';

export interface WebSocketMessage {
  cmdType: number;
  content: {
    currentDatetime: string;
  };
}

export default class JiliApi extends EventEmitter {
  private client: any;
  private jiliSpider: SpiderData;
  private ws: WebSocket | null = null;
  gameInfoAck: GameInfoAck | null = null;

  constructor(options: {
    config: Config;
    spiderData: SpiderData;
  }) {
    super();
    this.jiliSpider = options.spiderData;

    const config: AxiosRequestConfig = {
      timeout: 30000,
    };

    if (options.config.proxy.enable) {
      const [host, portStr] = options.config.proxy.server.split(':');
      config.proxy = {
        host: host || 'localhost',
        port: parseInt(portStr || '8080', 10),
        protocol: 'http',
      } as AxiosProxyConfig;
    }

    this.client = axios.create(config);
  }

  async spin(bet: number, isBuyBonus: boolean, isExtra: boolean): Promise<Buffer> {
    if (isBuyBonus && isExtra) {
      throw new Error('不能同时为true');
    }

    const url = `${this.jiliSpider.spin}/${this.jiliSpider.name}/req`;

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

      if (isBuyBonus && this.gameInfoAck?.mall) {
        spinReqData.mall = {
          type: MallType.NORMAL_MALL,
          index: 0,
          bet: this.gameInfoAck.mall.priceOdd * bet,
        };
      }

      if (isExtra) {
        spinReqData.extraSpin = {
          index: 0,
        };
      }

      const requestData = {
        ack: 0,
        req: SpinReq.toBinary(spinReqData),
      };

      const postData = Request.toBinary(requestData);

      const response = await this.client.post(url, postData, {
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

      return body;
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
    const url = `${this.jiliSpider.spin}/${this.jiliSpider.name}/req`;

    try {
      const browser: Browser = {
        type: 'chrome',
        version: '137.0.0.0',
        language: 'en-US',
        width: 1034,
        height: 1877,
        ratio: 1.0,
      };

      const infoReq: InfoReq = {
        os: 'Android',
        language: 'en-US',
        browser: browser,
        version: '6.0',
        model: 'Nexus 5',
      };

      const request = {
        ack: 1,
        req: InfoReq.toBinary(infoReq),
      };

      const postData = Request.toBinary(request);

      const response = await this.client.post(url, postData, {
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
      console.log('连接WebSocket成功');

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
          console.log('发送消息:', jsonBytes);
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
