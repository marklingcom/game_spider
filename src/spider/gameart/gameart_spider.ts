import type { BuyBounsConfig, Config, ExtraConfig, GameSession } from '../../config/index.js';
import { GameArtApi } from './gameart_api.js';
import type { GameArtDb } from './gameart_db.js';
import type { GameArtRoundResult } from './gameart_api.js';

import { SpiderBase } from '../spider_base.js';

export class GameArtSpiderWork extends SpiderBase<any, GameArtRoundResult> {
  private api: GameArtApi;
  private gameArtDb: GameArtDb;

  constructor(options: { config: Config; session: GameSession; gameArtDb: GameArtDb }) {
    super(options);
    this.gameArtDb = options.gameArtDb;
    this.api = new GameArtApi({ config: this.config, session: this.session });
  }

  protected async init(): Promise<void> {
    await this.gameArtDb.init(this.session.name);
  }

  protected async requestGameInfo(): Promise<{
    data: Buffer;
    gaiaResponseData: Buffer;
    gameInfoAck: any;
  }> {
    return this.api.requestGameInfo();
  }

  protected async saveGameInfo(
    data: Buffer,
    gaiaResponseData: Buffer,
    spiderData: GameSession
  ): Promise<void> {
    await this.gameArtDb.saveGameInfo(data, gaiaResponseData, spiderData);
  }

  protected async prepare(_gameInfoAck: any): Promise<void> {}

  protected getBet(_gameInfoAck: any): number {
    return this.api.getDefaultBet();
  }

  protected async spinOnce(bet: number, buyBouns: BuyBounsConfig, extra: ExtraConfig) {
    return this.api.spin(bet, buyBouns, extra);
  }

  protected async saveSpinResult(spinResult: GameArtRoundResult): Promise<void> {
    await this.gameArtDb.saveRoundData({
      result: spinResult,
      spiderData: this.session,
    });
  }

  protected isConnected(): boolean {
    return true;
  }

  protected isStop(): boolean {
    return this.gameArtDb.isStop;
  }

  protected getGameInfoReadyMessage(): string {
    return '获取 GameArt config 成功';
  }

  protected getSpinStartMessage(
    bet: number,
    buyBouns: BuyBounsConfig,
    _extra: ExtraConfig
  ): string {
    return `开始 GameArt spin - bet: ${bet} buyBouns: ${JSON.stringify(buyBouns)}`;
  }

  protected getStopMessage(): string {
    return '数据库已停止，停止 GameArt spin';
  }
}
