import type { SpiderData } from '../gameFrom/info.js';
import type DatabaseManager from '../models/index.js';
import type { GameInfoAck } from '../protoGeneral/astarte2_196.js';
import type Config from '../utils/config.js';
import { findValidDenominator } from '../utils/utils.js';
import JiliApi from './jili_api.js';
import JiliData from './jili_data.js';

export default class SpiderWork {
  private db: DatabaseManager;
  private config: Config;

  private spiderData: SpiderData;

  private jiliApi: JiliApi;

  private jiliData: JiliData;

  constructor(options: {
    db: DatabaseManager;
    config: Config;
    spiderData: SpiderData;
  }) {
    this.db = options.db;
    this.config = options.config;
    this.spiderData = options.spiderData;

    this.jiliData = new JiliData({ db: this.db, config: this.config, spiderData: this.spiderData });
    this.jiliApi = new JiliApi({ config: this.config, spiderData: this.spiderData });
  }

  async start() {
    const JiliProto = this.db.getModel('JiliProto');
    const jiliProto = await JiliProto.findOne({
      where: { name: this.spiderData.name },
    });

    if (!jiliProto) {
      throw new Error(`未找到jiliProto数据: ${this.spiderData.name}`);
    }

    const { data, gaiaResponseData, gameInfoAck } = await this.jiliApi.requestGameInfo();
    console.log('获取 gameInfoAck 成功');

    await this.jiliData.saveGameInfo(data, gaiaResponseData);

    await this.jiliApi.doWebSocket();

    await this.startSpinning(gameInfoAck);

    // this.jiliApi.closeWebSocket();
    console.log('执行完成');
  }

  private async startSpinning(gameInfoAck: GameInfoAck): Promise<void> {
    let bet = 0;
    if (this.config.betConfig.bet === 0) {
      const [denominator, ok] = findValidDenominator(gameInfoAck.walletInfo[0]?.bet ?? []);
      if (ok) {
        bet = denominator;
      } else {
        bet = gameInfoAck.walletInfo[0]?.bet[0] ?? 0;
      }
    } else {
      bet = this.config.betConfig.bet;
    }

    const isBuyBouns = this.config.betConfig.buyBouns;
    const isExtra = this.config.betConfig.extra;
    await this.spinWorker(bet, isBuyBouns, isExtra);
  }

  private async spinWorker(bet: number, isBuyBouns: boolean, isExtra: boolean): Promise<void> {
    while (true) {
      if (!this.jiliApi.isConnected) {
        throw new Error('WebSocket已关闭');
      }

      console.log(`开始 spin - bet: ${bet} isBuyBouns: ${isBuyBouns} isExtra: ${isExtra}`);
      const spinBuffer = await this.jiliApi.spin(bet, isBuyBouns, isExtra);
      await this.jiliData.saveSpinData(spinBuffer);
      console.log('saveSpinData 完成');
    }
  }
}
