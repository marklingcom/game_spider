import type { GameInfoAck } from './proto/general/astarte2_196.js';
import type { BuyBounsConfig, Config, ExtraConfig, GameSession } from '../../config/index.js';
import { JiliApi } from './jili_api.js';
import type { JiliDb } from './jili_db.js';

import { SpiderBase } from '../spider_base.js';
export { SpiderWorkEvent } from '../spider_base.js';

export class JiliSpiderWork extends SpiderBase<
  GameInfoAck,
  { spinReqData: any; spinResBuffer: Buffer }
> {
  private jiliApi: JiliApi;
  private jiliDb: JiliDb;

  constructor(options: { config: Config; session: GameSession; jiliDb: JiliDb }) {
    super(options);
    this.jiliDb = options.jiliDb;
    this.jiliApi = new JiliApi({ config: this.config, spiderData: this.session });
  }

  protected async init(): Promise<void> {
    await this.jiliDb.init(this.session.name);
  }

  protected async requestGameInfo(): Promise<{
    data: Buffer;
    gaiaResponseData: Buffer;
    gameInfoAck: GameInfoAck;
  }> {
    return this.jiliApi.requestGameInfo();
  }

  protected async saveGameInfo(
    data: Buffer,
    gaiaResponseData: Buffer,
    spiderData: GameSession
  ): Promise<void> {
    await this.jiliDb.saveGameInfo(data, gaiaResponseData, spiderData);
  }

  protected async prepare(_gameInfoAck: GameInfoAck): Promise<void> {
    await this.jiliApi.doWebSocket();
  }

  protected getBet(gameInfoAck: GameInfoAck): number {
    return this.resolveBet(gameInfoAck);
  }

  protected async spinOnce(
    bet: number,
    buyBouns: BuyBounsConfig,
    extra: ExtraConfig
  ): Promise<{ spinReqData: any; spinResBuffer: Buffer }> {
    return this.jiliApi.spin(bet, buyBouns, extra);
  }

  protected async saveSpinResult(spinResult: {
    spinReqData: any;
    spinResBuffer: Buffer;
  }): Promise<void> {
    await this.jiliDb.saveGaiaResponseData({
      spinResBuffer: spinResult.spinResBuffer,
      spinReqData: spinResult.spinReqData,
      spiderData: this.session,
    });
  }

  protected isConnected(): boolean {
    return this.jiliApi.isConnected;
  }

  protected isStop(): boolean {
    return this.jiliDb.isStop;
  }

  protected getGameInfoReadyMessage(): string {
    return '获取 gameInfoAck 成功';
  }

  protected getSpinStartMessage(
    bet: number,
    buyBouns: BuyBounsConfig,
    extra: ExtraConfig
  ): string {
    return `开始 spin - bet: ${bet} buyBouns: ${JSON.stringify(buyBouns)} extra: ${JSON.stringify(extra)}`;
  }

  protected getStopMessage(): string {
    return '数据库已停止，停止spin';
  }

  private resolveBet(gameInfoAck: GameInfoAck): number {
    const { bet: betConfig } = this.config.currentJiliConfig;
    if (betConfig === 0) {
      const [denominator, ok] = this.findValidDenominator(gameInfoAck.walletInfo[0]?.bet ?? []);
      return ok ? denominator : (gameInfoAck.walletInfo[0]?.bet[0] ?? 0);
    }
    return betConfig;
  }

  private findValidDenominator(betArray: number[]): [number, boolean] {
    for (const bet of betArray) {
      if (bet > 0) {
        return [bet, true];
      }
    }
    return [0, false];
  }
}
