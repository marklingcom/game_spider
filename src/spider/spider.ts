import type { SpiderData } from '../gameFrom/info.js';
import type DatabaseManager from '../models/index.js';
import type { GameInfoAck } from '../proto/astarte2_196.js';
import type Config from '../utils/config.js';
import { findValidDenominator } from '../utils/utils.js';
import JiliApi from './jili_api.js';

export default class SpiderWork {
  private db: DatabaseManager;
  private config: Config;

  private spiderData: SpiderData;

  private jiliApi: JiliApi;

  constructor(options: {
    db: DatabaseManager;
    config: Config;
    spiderData: SpiderData;
  }) {
    this.db = options.db;
    this.config = options.config;
    this.spiderData = options.spiderData;

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

    const { body: _gameInfoBytes, gameInfoAck } = await this.jiliApi.requestGameInfo();

    // this.processor.postTask('jili', {
    //   t: 'GameInfoType',
    //   token: this.spiderData.token,
    //   rsp: gameInfoBytes,
    //   gameName: this.spiderData.name,
    //   from: this.spiderData.from,
    //   config: this.config,
    // });

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

    return this.startSpinning(gameInfoAck);
  }

  private async spinWorker(bet: number, isBuyBouns: boolean, isExtra: boolean): Promise<void> {
    // if (this.processor.isStop()) {
    //   console.log(`IsStop ${this.spiderData.name}`);
    //   process.exit(0);
    //   break;
    // }

    if (!this.jiliApi.isConnected) {
      throw new Error('WebSocket已关闭');
    }

    try {
      console.log('开始spin', bet, isBuyBouns, isExtra);
      const _spinBytes = await this.jiliApi.spin(bet, isBuyBouns, isExtra);
      // thi_spinBytesor.postTask('jili', {
      //   t: 'SpinType',
      //   token: this.spiderData.token,
      //   rsp: spinBytes,
      //   gameName: this.spiderData.name,
      //   from: this.spiderData.from,
      //   config: this.config,
      // });
    } catch (error: any) {
      // if (error.message === 'NeedRetryError') {
      //   return;
      // }
      console.error('Spin失败:', error);
      throw error;
    }
  }
}
