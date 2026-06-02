import { EventEmitter } from 'node:events';
import type { BuyBounsConfig, Config, ExtraConfig, GameSession } from '../config/index.js';
import { telegramService } from '../utils/telegram/index.js';

export enum SpiderWorkEvent {
  SPIN_SAVE = 'spinSave',
}

const notifiedStopMessages = new Set<string>();

export abstract class SpiderBase<TGameInfo, TSpinResult> extends EventEmitter {
  protected config: Config;
  protected session: GameSession;

  constructor(options: { config: Config; session: GameSession }) {
    super();
    this.config = options.config;
    this.session = options.session;
  }

  async start(): Promise<void> {
    await this.init();

    const { data, gaiaResponseData, gameInfoAck } = await this.requestGameInfo();
    console.log(this.getGameInfoReadyMessage());

    await this.saveGameInfo(data, gaiaResponseData, this.session);
    await this.prepare(gameInfoAck);

    const bet = await this.getBet(gameInfoAck);
    await this.spinWorker(bet);
    console.log('执行完成');
  }

  protected async spinWorker(bet: number): Promise<void> {
    const { buyBouns, extra } = this.config.currentGameConfig;
    console.log(this.getSpinStartMessage(bet, buyBouns, extra));

    while (true) {
      if (!this.isConnected()) {
        throw new Error('连接已关闭');
      }

      const spinResult = await this.spinOnce(bet, buyBouns, extra);
      await this.saveSpinResult(spinResult);

      this.emit(SpiderWorkEvent.SPIN_SAVE, spinResult);

      if (this.isStop()) {
        const msg = this.getStopMessage();
        this.notifyStopOnce(msg);
        break;
      }
    }
  }

  private notifyStopOnce(message: string): void {
    if (notifiedStopMessages.has(message)) {
      return;
    }

    notifiedStopMessages.add(message);
    console.log(message);
    telegramService.sendInfo(message);
  }

  protected abstract init(): Promise<void>;

  protected abstract requestGameInfo(): Promise<{
    data: Buffer;
    gaiaResponseData: Buffer;
    gameInfoAck: TGameInfo;
  }>;

  protected abstract saveGameInfo(
    data: Buffer,
    gaiaResponseData: Buffer,
    spiderData: GameSession
  ): Promise<void>;

  protected abstract prepare(gameInfoAck: TGameInfo): Promise<void>;

  protected abstract getBet(gameInfoAck: TGameInfo): Promise<number> | number;

  protected abstract spinOnce(
    bet: number,
    buyBouns: BuyBounsConfig,
    extra: ExtraConfig
  ): Promise<TSpinResult>;

  protected abstract saveSpinResult(spinResult: TSpinResult): Promise<void>;

  protected abstract isConnected(): boolean;

  protected abstract isStop(): boolean;

  protected abstract getGameInfoReadyMessage(): string;

  protected abstract getSpinStartMessage(
    bet: number,
    buyBouns: BuyBounsConfig,
    extra: ExtraConfig
  ): string;

  protected abstract getStopMessage(): string;
}
