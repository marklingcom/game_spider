import { EventEmitter } from 'node:events';
import type { SpiderData } from '../gameFrom/info.js';
import type { GameInfoAck } from '../protoGeneral/astarte2_196.js';
import type Config from '../utils/config.js';
import { JiliApi } from './jili/jili_api.js';
import type { JiliDb } from './jili/jili_db.js';

export enum SpiderWorkEvent {
  SPIN_SAVE = 'spinSave',
}

export class SpiderWork extends EventEmitter {
  private config: Config;

  private spiderData: SpiderData;

  private jiliApi: JiliApi;

  private jiliDb: JiliDb;

  constructor(options: {
    config: Config;
    spiderData: SpiderData;
    jiliDb: JiliDb;
  }) {
    super();

    this.config = options.config;
    this.spiderData = options.spiderData;
    this.jiliDb = options.jiliDb;

    this.jiliApi = new JiliApi({ config: this.config, spiderData: this.spiderData });
  }

  async start() {
    await this.jiliDb.init(this.spiderData.name);

    const { data, gaiaResponseData, gameInfoAck } = await this.jiliApi.requestGameInfo();
    console.log('获取 gameInfoAck 成功');

    // 保存gameInfo
    await this.jiliDb.saveGameInfo(data, gaiaResponseData, this.spiderData);

    await this.jiliApi.doWebSocket();

    await this.startSpinning(gameInfoAck);

    // this.jiliApi.closeWebSocket();
    console.log('执行完成');
  }

  private findValidDenominator(betArray: number[]): [number, boolean] {
    for (const bet of betArray) {
      if (bet > 0) {
        return [bet, true];
      }
    }
    return [0, false];
  }

  private async startSpinning(gameInfoAck: GameInfoAck): Promise<void> {
    let bet = 0;
    if (this.config.serverConfig.betConfig.bet === 0) {
      const [denominator, ok] = this.findValidDenominator(gameInfoAck.walletInfo[0]?.bet ?? []);
      if (ok) {
        bet = denominator;
      } else {
        bet = gameInfoAck.walletInfo[0]?.bet[0] ?? 0;
      }
    } else {
      bet = this.config.serverConfig.betConfig.bet;
    }

    const isBuyBouns = this.config.serverConfig.betConfig.buyBouns;
    const isExtra = this.config.serverConfig.betConfig.extra;
    await this.spinWorker(bet, isBuyBouns, isExtra);
  }

  private async spinWorker(bet: number, isBuyBouns: boolean, isExtra: boolean): Promise<void> {
    console.log(`开始 spin - bet: ${bet} isBuyBouns: ${isBuyBouns} isExtra: ${isExtra}`);

    while (true) {
      if (!this.jiliApi.isConnected) {
        throw new Error('WebSocket已关闭');
      }

      const spinBuffer = await this.jiliApi.spin(bet, isBuyBouns, isExtra);
      // 保存spinData
      await this.jiliDb.saveSpinData(spinBuffer, this.spiderData);

      this.emit(SpiderWorkEvent.SPIN_SAVE, spinBuffer);
    }
  }
}
