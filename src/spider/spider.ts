import { EventEmitter } from 'node:events';
import type { GameInfoAck } from './jili/proto/general/astarte2_196.js';
import type { BuyBounsConfig, Config, ExtraConfig, GameSession } from '../config/index.js';
import { telegramService } from '../utils/telegram.js';
import { JiliApi } from './jili/jili_api.js';
import type { JiliDb } from './jili/jili_db.js';

export enum SpiderWorkEvent {
  SPIN_SAVE = 'spinSave',
}

export class SpiderWork extends EventEmitter {
  private config: Config;
  private session: GameSession;
  private jiliApi: JiliApi;
  private jiliDb: JiliDb;

  constructor(options: { config: Config; session: GameSession; jiliDb: JiliDb }) {
    super();
    this.config = options.config;
    this.session = options.session;
    this.jiliDb = options.jiliDb;
    this.jiliApi = new JiliApi({ config: this.config, spiderData: this.session });
  }

  async start() {
    await this.jiliDb.init(this.session.name);

    const { data, gaiaResponseData, gameInfoAck } = await this.jiliApi.requestGameInfo();
    console.log('获取 gameInfoAck 成功');

    await this.jiliDb.saveGameInfo(data, gaiaResponseData, this.session);
    await this.jiliApi.doWebSocket();
    await this.startSpinning(gameInfoAck);
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
    const { bet: betConfig, buyBouns, extra } = this.config.serverConfig.gameConfig;
    let bet = 0;
    if (betConfig === 0) {
      const [denominator, ok] = this.findValidDenominator(gameInfoAck.walletInfo[0]?.bet ?? []);
      bet = ok ? denominator : (gameInfoAck.walletInfo[0]?.bet[0] ?? 0);
    } else {
      bet = betConfig;
    }

    await this.spinWorker(bet, buyBouns, extra);
  }

  private async spinWorker(
    bet: number,
    buyBouns: BuyBounsConfig,
    extra: ExtraConfig
  ): Promise<void> {
    console.log(
      `开始 spin - bet: ${bet} buyBouns: ${JSON.stringify(buyBouns)} extra: ${JSON.stringify(extra)}`
    );

    while (true) {
      if (!this.jiliApi.isConnected) {
        throw new Error('WebSocket已关闭');
      }

      const spinResult = await this.jiliApi.spin(bet, buyBouns, extra);
      await this.jiliDb.saveGaiaResponseData({
        spinResBuffer: spinResult.spinResBuffer,
        spinReqData: spinResult.spinReqData,
        spiderData: this.session,
      });

      this.emit(SpiderWorkEvent.SPIN_SAVE, spinResult);

      if (this.jiliDb.isStop) {
        const msg = '数据库已停止，停止spin';
        console.log(msg);
        telegramService.sendInfo(msg);
        break;
      }
    }
  }
}
