import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { isNil } from 'lodash-es';
import protobuf from 'protobufjs';
import type { SpiderData } from '../../gameFrom/info.js';
import type DatabaseManager from '../../models/index.js';
import type { JiliInfoAttributes } from '../../models/JiliInfo.js';
import type { JiliProtoAttributes } from '../../models/JiliProto.js';
import type { SpinDataAttributes } from '../../models/SpinData.js';
import { SpinResponse } from '../../protoGeneral/astarte2_196.js';
import type Config from '../../utils/config.js';
import {
  CompressType,
  CompressTypeMap,
  compressDataWithThreshold,
} from '../../utils/data_compress.js';
import { __protoDir } from '../../utils/env.js';
import { TelegramEventName, telegramService } from '../../utils/telegram.js';
import { createDirectoryIfNotExists, formatNumber } from '../../utils/utils.js';
import { decryptResponseBuffer } from './jili_utils.js';

export enum SpinDataType {
  normal = 0,
  special = 1,
}

class SpinDataState {
  current: number = 0;
  tabName: string = '';
  isInit: boolean = false;
  lastProgress = 0;

  private config: Config;
  private type: SpinDataType;

  constructor(config: Config, type: SpinDataType) {
    this.config = config;
    this.type = type;
  }

  get isSpecial(): boolean {
    return this.type === SpinDataType.special;
  }

  get isNormal(): boolean {
    return this.type === SpinDataType.normal;
  }

  get total(): number {
    const isBuyBouns = this.config?.serverConfig?.betConfig?.buyBouns;
    if (this.isSpecial) {
      if (isBuyBouns) {
        return 5000;
      }
      return 3000;
    } else {
      if (isBuyBouns) {
        return 0;
      }
      return 300000;
    }
  }
}

export class JiliDb {
  private db: DatabaseManager;
  private config: Config;

  private specialState: SpinDataState;
  private normalState: SpinDataState;

  constructor(options: {
    db: DatabaseManager;
    config: Config;
  }) {
    this.db = options.db;
    this.config = options.config;
    this.specialState = new SpinDataState(this.config, SpinDataType.special);
    this.normalState = new SpinDataState(this.config, SpinDataType.normal);

    this.onStart();
  }

  async init(name: string) {
    // 检查jiliProto
    const JiliProto = this.db.jiliProto;
    const jiliProto = await JiliProto.findOne({
      where: { name },
    });

    if (!jiliProto) {
      throw new Error(`未找到jiliProto数据: ${name}`);
    }
  }

  async saveGameInfo(
    data: Buffer,
    gaiaResponseData: Buffer,
    spiderData: SpiderData
  ): Promise<JiliInfoAttributes> {
    if (!gaiaResponseData || gaiaResponseData.length === 0) {
      throw new Error('gaiaResponseData is empty');
    }

    const value =
      (await this.db.jiliInfo.findOne({
        where: { name: spiderData.name },
      })) || null;

    const info = {
      name: spiderData.name,
      fullName: this.config.currentJiliGame.jiliConfig.fullName,
      from: spiderData.from,
      data: gaiaResponseData,
      fullData: data,
      gi: spiderData.gi,
    };

    if (!value) {
      const gameInfo = await this.db.jiliInfo.create(info);
      return gameInfo.toJSON();
    } else {
      await this.db.jiliInfo.update(info, {
        where: { name: spiderData.name },
      });
      return info;
    }
  }

  async saveGaiaResponseData(spinBuffer: Buffer, spiderData: SpiderData): Promise<void> {
    const { gaiaResponseData } = await decryptResponseBuffer(spinBuffer, spiderData.token);
    if (!gaiaResponseData || gaiaResponseData.length === 0) {
      throw new Error('gaiaResponseData is empty');
    }
    const spinResponse = SpinResponse.fromBinary(gaiaResponseData);

    return this.saveSpinData(spinResponse, spiderData);
  }

  async saveSpinData(
    spinResponse: SpinResponse,
    spiderData: SpiderData,
    compress?: CompressType
  ): Promise<void> {
    const gameName = spiderData.name;

    const gameProto = await this.getProto(gameName, gameName);
    const spinPbName = await this.getSpinPbName(gameName);

    if (!spinPbName) {
      throw new Error(`spinPbName is empty:${gameName}`);
    }

    if (spinResponse.data.length === 0) {
      throw new Error(`spin_data error!`);
    }

    const spinAck = gameProto.lookupType(spinPbName);

    const spinAckData = spinAck.decode(spinResponse.data);

    const jsonData = JSON.stringify(spinAckData);

    let spinDataType = SpinDataType.normal;
    if (spinPbName === 'AllPlate') {
      const spinData = JSON.parse(jsonData);
      const plates = spinData.plate || [];

      if (plates.length > 1) {
        for (let i = 0; i < plates.length; i++) {
          const plate = plates[i];
          const onesCount = this.countOnesInPlate(plate);
          if (onesCount >= 3) {
            spinDataType = SpinDataType.special;
            break;
          }
        }
      }
    } else {
      const freeTotalWinRegex =
        /"(FreeTotalWin|Free1TotalWin|Free2TotalWin)"\s*:\s*"?([0-9]+(?:\.[0-9]+)?)"?/g;
      const matches = jsonData.match(freeTotalWinRegex);

      if (matches && matches.length > 0) {
        spinDataType = SpinDataType.special;
      } else {
        if (['cbt', 'cbt2', 'rc'].includes(spiderData.name)) {
          const bonusTotalWinRegex = /"(BonusTotalWin)"\s*:\s*"?([0-9]+(?:\.[0-9]+)?)"?/g;
          const matches = jsonData.match(bonusTotalWinRegex);
          if (matches && matches.length > 0) {
            spinDataType = SpinDataType.special;
          }
        }
        if (['bbc'].includes(spiderData.name)) {
          const bonusTotalWinRegex = /"(FGWin)"\s*:\s*"?([0-9]+(?:\.[0-9]+)?)"?/g;
          const matches = jsonData.match(bonusTotalWinRegex);
          if (matches && matches.length > 0) {
            spinDataType = SpinDataType.special;
          }
        }
        if (['sweetheart'].includes(spiderData.name)) {
          const bonusTotalWinRegex = /"(bonusWin)"\s*:\s*"?([0-9]+(?:\.[0-9]+)?)"?/g;
          const matches = jsonData.match(bonusTotalWinRegex);
          if (matches && matches.length > 0) {
            spinDataType = SpinDataType.special;
          }
        }
      }
    }

    const realBet = spinResponse.realBet || spinResponse.spinReq.bet || 0;
    let tabName = `jili_spin_${gameName}`;

    if (this.config.serverConfig.betConfig.bet !== 0) {
      const betName = this.config.serverConfig.betConfig.bet.toString().replace('.', 'p');
      tabName += `_${betName}`;
    }

    var isBuy = false;
    var isExtra = false;
    if (spinResponse.spinReq?.mall) {
      tabName += '_buy';
      isBuy = true;
    } else if (spinResponse.spinReq?.extraSpin) {
      tabName += '_extra';
      isExtra = true;
    }

    const isSpecial = spinDataType === SpinDataType.special || isBuy;
    if (isSpecial) {
      tabName += '_special';
    } else {
      tabName += '_normal';
    }

    const model = await this.db.ensureTableExists(tabName);

    await this.initCount(tabName, isSpecial);

    // 如果配置抓取特殊模式，并且当前不是特殊模式，则不抓取数据
    if (this.config.serverConfig.betConfig.special && !isSpecial) {
      return;
    }

    if (this.isComplete(tabName, isSpecial)) {
      if (this.isStop) {
        console.log(`${tabName} 完成所有数据抓取`);
        await telegramService.sendSuccess(`${tabName} 完成所有数据抓取`);
        this.onStop();
        // setTimeout(() => {
        //   process.exit(0);
        // }, 0);
      }
      return;
    }

    const compressConfig = this.config.serverConfig.spiderConfig.compress;
    let data = Buffer.from(spinResponse.data);
    let compressType = compress || CompressType.None;
    // 如果压缩方式为None，则进行压缩
    if (isNil(compress)) {
      const result = await compressDataWithThreshold(
        compressConfig,
        Buffer.from(spinResponse.data)
      );
      compressType = result.compressType;
      data = result.data as any;
      const { compressionRate, threshold } = result;
      const compressFlag = compressType !== CompressType.None;
      const message = `${compressFlag ? '✅ 压缩成功' : '⚠️ 跳过压缩'}，压缩率: ${compressionRate.toFixed(2)}%，阈值: ${threshold.toFixed(2)}%，压缩方式: ${CompressTypeMap[compressType]}`;
      // telegramService.sendInfo(message);
      console.log(message);
    }

    const saveBet = isExtra ? realBet * 1.5 : realBet;
    const spinData: SpinDataAttributes = {
      data,
      totalWin: spinResponse.totalWin || 0,
      from: spiderData.from,
      bet: saveBet,
      rate: formatNumber((spinResponse.totalWin || 0) / saveBet, 6),
      compress: compressType,
    };

    await model.create({ ...spinData });

    if (isSpecial) {
      this.specialState.current++;
    } else {
      this.normalState.current++;
    }
  }

  onNotify(tabName: string, current: number, total: number, isSpecial: boolean, threshold = 3) {
    const progress = (current / total) * 100;
    const state = this.getState(isSpecial);
    const lastProgress = state.lastProgress || 0;

    if (lastProgress === 0 || progress >= lastProgress + threshold) {
      state.lastProgress = progress;
      telegramService.sendSuccess(
        `表 ${tabName} 抓取进度: ${Math.floor(progress)}% (${current}/${total})`
      );
    }
  }

  isComplete(tabName: string, isSpecial: boolean, isLog = true) {
    const state = this.getState(isSpecial);
    const current = state.current;
    const total = state.total;

    if (isLog) {
      console.log(`表 ${tabName} 抓取进度: ${current}/${total}`);

      this.onNotify(tabName, current, total, isSpecial);
    }

    if (current >= total) {
      return true;
    }
    return false;
  }

  get isStop() {
    return (
      this.specialState.current >= this.specialState.total &&
      this.normalState.current >= this.normalState.total
    );
  }

  getState(isSpecial: boolean): SpinDataState {
    return isSpecial ? this.specialState : this.normalState;
  }

  async initCount(tabName: string, isSpecial: boolean) {
    const state = this.getState(isSpecial);

    if (!state.isInit) {
      state.isInit = true;
      const count = await this.db.getTableCount(tabName);
      state.current = count;
      state.tabName = tabName;
      this.onNotify(tabName, state.current, state.total, isSpecial);
    }
  }

  private pbMap: Map<string, unknown> = new Map();
  private jiliProtoMap: Map<string, JiliProtoAttributes> = new Map();

  private async syncJiliProto(name: string): Promise<JiliProtoAttributes> {
    const jiliProto = await this.db.jiliProto.findOne({
      where: { name },
    });

    if (!jiliProto) {
      throw new Error(`not found proto:${name}`);
    }

    const result = jiliProto.toJSON();
    this.jiliProtoMap.set(name, result);
    return result;
  }

  private async getProto(name: string, gameName: string): Promise<protobuf.Namespace> {
    if (!this.pbMap.has(name)) {
      await this.syncJiliProto(name);
    }
    const result = this.jiliProtoMap.get(name);

    createDirectoryIfNotExists(__protoDir);

    // 将 proto 内容写入文件
    const protoFilePath = path.join(__protoDir, `${gameName}.proto`);
    writeFileSync(protoFilePath, result.data, 'utf8');

    // 使用 protobufjs 编译
    const root = await protobuf.load(protoFilePath);

    // 获取所有 message
    const messages = Object.values(root.nested).filter((v) => v instanceof protobuf.Namespace);

    // 缓存结果
    this.pbMap.set(result.name, messages[0]);
    return messages[0];
  }

  private async getSpinPbName(name: string): Promise<string> {
    if (!this.jiliProtoMap.has(name)) {
      await this.syncJiliProto(name);
    }
    return this.jiliProtoMap.get(name).spinPbName;
  }

  private countOnesInPlate(plate: unknown): number {
    let count = 0;

    const plateObj = plate as { column?: unknown[] };
    const columns = plateObj.column || [];

    for (let i = 0; i < columns.length; i++) {
      const column = columns[i] as { row?: unknown[] };
      const rows = column.row || [];

      for (let j = 0; j < rows.length; j++) {
        const value = rows[j];

        if (value === null || value === undefined) {
          // 值为null
        } else if (typeof value === 'number') {
          if (value === 1) {
            count++;
          }
        } else if (typeof value === 'string') {
          if (value === 'Bonus') {
            count++;
          }
        } else if (
          typeof value === 'object' &&
          value !== null &&
          (value as { symbol?: string }).symbol === 'Bonus'
        ) {
          count++;
        }
      }
    }

    return count;
  }

  private startTime = Date.now();

  onStart() {
    this.startTime = Date.now();

    const onProcessMessage = () => {
      const message = `当前进度：
normal表 ${this.normalState.tabName} 抓取进度: ${this.normalState.tabName ? this.normalState.current : 0}/${this.normalState.total}
special表 ${this.specialState.tabName} 抓取进度: ${this.specialState.tabName ? this.specialState.current : 0}/${this.specialState.total}
`;
      return message;
    };

    telegramService.sendSuccess(onProcessMessage());
    telegramService.on(TelegramEventName.PROCESS, (reply) => {
      reply(onProcessMessage());
    });
  }

  onStop() {
    const endTime = Date.now();
    const duration = endTime - this.startTime;
    const minutes = Math.floor(duration / 60000);
    const seconds = Math.floor((duration % 60000) / 1000);
    const milliseconds = duration % 1000;

    console.log(`程序结束时间: ${new Date(endTime).toLocaleString()}`);
    console.log(`总执行时间: ${minutes}分${seconds}秒${milliseconds}毫秒`);
  }
}
