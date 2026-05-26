import { EventEmitter } from 'node:events';
import type { GameInfoAck } from '../providers/jili/proto/general/astarte2_196.js';
import type { GameConfig, BuyBounsConfig, ExtraConfig } from '../core/config-types.js';
import type { GameSession, IGameApi, ISpinRepository } from '../core/types.js';
import type { Config } from '../utils/config.js';
import { telegramService } from '../utils/telegram.js';

export enum SpiderWorkEvent {
  SPIN_SAVE = 'spinSave',
}

export class SpiderWork extends EventEmitter {
  private config: Config;
  private session: GameSession;
  private gameApi: IGameApi;
  private spinRepository: ISpinRepository;

  constructor(options: {
    config: Config;
    session: GameSession;
    gameApi: IGameApi;
    spinRepository: ISpinRepository;
  }) {
    super();
    this.config = options.config;
    this.session = options.session;
    this.gameApi = options.gameApi;
    this.spinRepository = options.spinRepository;
  }

  async start() {
    await this.spinRepository.init(this.session.name);

    const { data, gaiaResponseData, gameInfoAck } = await this.gameApi.requestGameInfo();
    console.log('获取 gameInfoAck 成功');

    await this.spinRepository.saveGameInfo(data, gaiaResponseData, this.session);

    await this.gameApi.connectRealtime();

    await this.startSpinning(gameInfoAck as GameInfoAck);
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

  private get gameConfig(): GameConfig {
    return this.config.serverConfig.gameConfig;
  }

  private async startSpinning(gameInfoAck: GameInfoAck): Promise<void> {
    let bet = 0;
    if (this.gameConfig.bet === 0) {
      const [denominator, ok] = this.findValidDenominator(gameInfoAck.walletInfo[0]?.bet ?? []);
      if (ok) {
        bet = denominator;
      } else {
        bet = gameInfoAck.walletInfo[0]?.bet[0] ?? 0;
      }
    } else {
      bet = this.gameConfig.bet;
    }

    await this.spinWorker(bet, this.gameConfig.buyBouns, this.gameConfig.extra);
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
      if (!this.gameApi.isConnected) {
        throw new Error('WebSocket已关闭');
      }

      const spinResult = await this.gameApi.spin(bet, buyBouns, extra);
      await this.spinRepository.saveSpin({
        spinResBuffer: spinResult.spinResBuffer,
        spinReqData: spinResult.spinReqData,
        session: this.session,
      });

      this.emit(SpiderWorkEvent.SPIN_SAVE, spinResult);

      if (this.spinRepository.isStop) {
        const msg = '数据库已停止，停止spin';
        console.log(msg);
        telegramService.sendInfo(msg);
        break;
      }
    }
  }
}
