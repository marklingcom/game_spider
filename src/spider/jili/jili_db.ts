import { writeFileSync } from 'node:fs';
import path from 'node:path';
import { isNil } from 'lodash-es';
import protobuf from 'protobufjs';
import type { SpiderData } from '../../gameFrom/info.js';
import type DatabaseManager from '../../models/index.js';
import type { JiliInfoAttributes } from '../../models/JiliInfo.js';
import type { JiliProtoAttributes } from '../../models/JiliProto.js';
import type { SpinDataAttributes } from '../../models/SpinData.js';
import { type SpinReq, SpinResponse } from '../../protoGeneral/astarte2_196.js';
import type { Config } from '../../utils/config.js';
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

  constructor(options: {
    config: Config;
    type: SpinDataType;
    tabName: string;
    total?: number;
  }) {
    const { config, type, tabName, total } = options;
    this.config = config;
    this.type = type;
    this.tabName = tabName;
    this._total = total;
  }

  _total: number = 0;

  get isSpecial(): boolean {
    return this.type === SpinDataType.special;
  }

  get isNormal(): boolean {
    return this.type === SpinDataType.normal;
  }

  get total(): number {
    if (this._total && this._total > 0) {
      return this._total;
    }
    const isBuyBouns = this.config?.serverConfig?.betConfig?.buyBouns?.enable;
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

  private stateMap: Map<string, SpinDataState> = new Map();

  constructor(options: {
    db: DatabaseManager;
    config: Config;
  }) {
    this.db = options.db;
    this.config = options.config;

    this.onStart();
    this.initStateMap();
  }

  initStateMap() {
    if (this.is6Special) {
      const name = this.config.currentJiliGame.jiliConfig.name;
      for (let index = 0; index < 7; index++) {
        const tabName = `jili_spin_${name}_special_${index}`;
        const state = new SpinDataState({
          config: this.config,
          type: SpinDataType.special,
          tabName,
          total: 3000,
        });
        this.stateMap.set(tabName, state);
      }
    }
  }

  get is6Special(): boolean {
    return ['tct', 'tlp', 'tcb', 'dts'].includes(this.config.currentJiliGame.jiliConfig.name);
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

  async getGaiaResponseData(spinBuffer: Buffer, token: string): Promise<SpinResponse> {
    const { gaiaResponseData } = await decryptResponseBuffer(spinBuffer, token);
    if (!gaiaResponseData || gaiaResponseData.length === 0) {
      throw new Error('gaiaResponseData is empty');
    }
    const spinResponse = SpinResponse.fromBinary(gaiaResponseData);
    return spinResponse;
  }

  async saveGaiaResponseData(_options: {
    spinResBuffer: Buffer;
    spinReqData: SpinReq;
    spiderData: SpiderData;
  }): Promise<void> {
    const { spinResBuffer, spinReqData, spiderData } = _options;
    const spinResponse = await this.getGaiaResponseData(spinResBuffer, spiderData.token);

    return this.saveSpinData({ spinResponse, spinReqData, spiderData });
  }

  async saveSpinData(options: {
    spinResponse: SpinResponse;
    spiderData: SpiderData;
    spinReqData?: SpinReq;
    compress?: CompressType;
    isLog?: boolean;
  }): Promise<void> {
    const { spinResponse, spinReqData, spiderData, compress, isLog = true } = options;
    const gameName = spiderData.name;

    const gameProto = await this.getProto(gameName);
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
      if (['wondershow'].includes(spiderData.name)) {
        if (plates.length > 1) {
          spinDataType = SpinDataType.special;
        }
      }
    } else {
      const freeGameWinRegex =
        /"(FreeTotalWin|Free1TotalWin|Free2TotalWin|FreeGameWin|FGWin|BonusTotalWin|bonusWin)"\s*:\s*"?([0-9]+(?:\.[0-9]+)?)"?/g;
      const freeGamePlateInfoRegex = /"FreeGamePlateInfo"\s*:\s*\[/g;
      const matches = jsonData.match(freeGameWinRegex) || jsonData.match(freeGamePlateInfoRegex);

      if (matches && matches.length > 0) {
        spinDataType = SpinDataType.special;
      } else {
        // if (['cbt', 'cbt2', 'rc'].includes(spiderData.name)) {
        //   const bonusTotalWinRegex = /"(BonusTotalWin)"\s*:\s*"?([0-9]+(?:\.[0-9]+)?)"?/g;
        //   const matches = jsonData.match(bonusTotalWinRegex);
        //   if (matches && matches.length > 0) {
        //     spinDataType = SpinDataType.special;
        //   }
        // }
        // if (['bbc', 'csh'].includes(spiderData.name)) {
        //   const bonusTotalWinRegex = /"(FGWin)"\s*:\s*"?([0-9]+(?:\.[0-9]+)?)"?/g;
        //   const matches = jsonData.match(bonusTotalWinRegex);
        //   if (matches && matches.length > 0) {
        //     spinDataType = SpinDataType.special;
        //   }
        // }
        // if (['sweetheart', 'fs'].includes(spiderData.name)) {
        //   const bonusTotalWinRegex = /"(bonusWin)"\s*:\s*"?([0-9]+(?:\.[0-9]+)?)"?/g;
        //   const matches = jsonData.match(bonusTotalWinRegex);
        //   if (matches && matches.length > 0) {
        //     spinDataType = SpinDataType.special;
        //   }
        // }
        if (['mpt'].includes(spiderData.name)) {
          const RoundInfo = (spinAckData as any)?.RoundInfo;
          for (const item of RoundInfo) {
            if (item.GetReSpin) {
              spinDataType = SpinDataType.special;
              break;
            }
          }
        }
        if (['mpt2'].includes(spiderData.name)) {
          const RoundQueue = (spinAckData as any)?.RoundQueue;
          for (const item of RoundQueue) {
            if (item.GetReSpin) {
              spinDataType = SpinDataType.special;
              break;
            }
          }
        }
        if (['luckytree'].includes(spiderData.name)) {
          const TotalWin = (spinAckData as any)?.BonusGameData?.TotalWin || 0;
          if (TotalWin > 0) {
            spinDataType = SpinDataType.special;
          }
        }
        if (['lj', 'pw'].includes(spiderData.name)) {
          const GetBonus = (spinAckData as any)?.GetBonus;
          if (GetBonus) {
            spinDataType = SpinDataType.special;
          }
        }
      }
    }
    const spinReq = spinResponse.spinReq || spinReqData;

    const realBet = spinResponse.realBet || spinReq?.bet || spinReq?.bet || 0;
    const tabNames = [`jili_spin_${gameName}`];

    if (this.config.serverConfig.betConfig.bet !== 0) {
      const betName = this.config.serverConfig.betConfig.bet.toString().replace('.', 'p');
      tabNames.push(betName);
    }

    var isBuyBouns = false;
    var isExtra = false;
    if (spinReq?.mall) {
      tabNames.push('buy');
      isBuyBouns = true;
    } else if (spinReq?.extraSpin) {
      tabNames.push('extra');
      isExtra = true;
    }

    const isSpecial = spinDataType === SpinDataType.special || isBuyBouns;
    if (isSpecial) {
      tabNames.push('special');
    } else {
      tabNames.push('normal');
    }

    // Gold Rush 特殊处理
    if (['ge'].includes(spiderData.name) && isSpecial) {
      const isFree1 = /"(Free1TotalWin)"\s*:\s*"?([0-9]+(?:\.[0-9]+)?)"?/g;
      if (isFree1.test(jsonData)) {
        tabNames.push('0');
      } else {
        tabNames.push('1');
      }
    } else if (this.is6Special && isSpecial) {
      const index = tabNames.indexOf('buy');
      if (index !== -1) {
        tabNames.splice(index, 1);
      }
      const RoundQueue = (spinAckData as any)?.RoundQueue;
      if (spiderData.name === 'tcb') {
        const GameType = (spinAckData as any)?.GameType;
        if (GameType) {
          const index = GameType - 1;
          tabNames.push(index.toString());
        }
      } else if (spiderData.name === 'dts') {
        const firstData = RoundQueue[0];
        const PlateSymbol = firstData.PlateSymbol;
        let hasRed = false;
        let hasGreen = false;
        let hasBlue = false;
        for (const item of PlateSymbol) {
          const Col = item.Col;
          if (Col.includes(12)) {
            hasRed = true;
          } else if (Col.includes(13)) {
            hasBlue = true;
          } else if (Col.includes(14)) {
            hasGreen = true;
          }
        }
        if (hasRed && hasGreen && hasBlue) {
          tabNames.push('6');
        } else if (hasRed && hasGreen) {
          tabNames.push('5');
        } else if (hasGreen && hasBlue) {
          tabNames.push('4');
        } else if (hasRed && hasBlue) {
          tabNames.push('3');
        } else if (hasGreen) {
          tabNames.push('2');
        } else if (hasRed) {
          tabNames.push('1');
        } else if (hasBlue) {
          tabNames.push('0');
        }
      } else {
        const firstData = RoundQueue[0];
        // BlueData
        // RedData
        // GreenData
        const keys = Object.keys(firstData);
        const hasData = (key: string) => {
          return keys.includes(key) && firstData[key]?.length > 0;
        };
        if (hasData('BlueData') && hasData('RedData') && hasData('GreenData')) {
          tabNames.push('6');
        } else if (hasData('RedData') && hasData('GreenData')) {
          tabNames.push('5');
        } else if (hasData('BlueData') && hasData('GreenData')) {
          tabNames.push('4');
        } else if (hasData('BlueData') && hasData('RedData')) {
          tabNames.push('3');
        } else if (hasData('GreenData')) {
          tabNames.push('2');
        } else if (hasData('RedData')) {
          tabNames.push('1');
        } else if (hasData('BlueData')) {
          tabNames.push('0');
        }
      }
    } else {
      if (isBuyBouns) {
        const hasDefaultIndex = this.config.serverConfig.betConfig.buyBouns.hasDefaultIndex;
        const index = spinReq.mall.index;
        if (!hasDefaultIndex && index === 0) {
          // 默认索引，不添加到表名
        } else {
          tabNames.push(index.toString());
        }
      } else if (isExtra) {
        const hasDefaultIndex = this.config.serverConfig.betConfig.extra.hasDefaultIndex;
        const index = spinReq.extraSpin.index;
        if (!hasDefaultIndex && index === 0) {
          // 默认索引，不添加到表名
        } else {
          tabNames.push(index.toString());
        }
      }
    }
    const tabName = tabNames.join('_');

    const model = await this.db.ensureTableExists(tabName);

    const currentState = await this.initState(tabName, isSpecial);

    // 如果配置抓取特殊模式，并且当前不是特殊模式，则不抓取数据
    if (this.config.serverConfig.betConfig.special && !isSpecial) {
      return;
    }

    if (this.isComplete(currentState, isLog)) {
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
      if (isLog) {
        console.log(message);
      }
    }

    const saveBet = isExtra ? realBet * 1.5 : realBet;
    // const saveBet = isExtra ? realBet : realBet;
    const spinData: SpinDataAttributes = {
      data,
      totalWin: spinResponse.totalWin || 0,
      from: spiderData.from,
      bet: saveBet,
      rate: formatNumber((spinResponse.totalWin || 0) / saveBet, 6),
      compress: compressType,
    };

    await model.create({ ...spinData });
    currentState.current++;
  }

  onNotify(tabName: string, current: number, total: number, _isSpecial: boolean, threshold = 3) {
    const progress = (current / total) * 100;
    const currentState = this.stateMap.get(tabName);
    if (!currentState) {
      throw new Error(`currentState is empty:${tabName}`);
    }
    const lastProgress = currentState.lastProgress || 0;

    if (lastProgress === 0 || progress >= lastProgress + threshold) {
      currentState.lastProgress = progress;
      telegramService.sendSuccess(
        `表 ${tabName} 抓取进度: ${Math.floor(progress)}% (${current}/${total})`
      );
    }
  }

  isComplete(currentState: SpinDataState, isLog = true) {
    const current = currentState.current;
    const total = currentState.total;

    if (isLog) {
      console.log(`表 ${currentState.tabName} 抓取进度: ${current}/${total}`);

      this.onNotify(currentState.tabName, current, total, currentState.isSpecial);
    }

    if (current >= total) {
      return true;
    }
    return false;
  }

  get isStop() {
    let hasSpecial = false;
    const isSpecial = this.config.serverConfig.betConfig.special;
    for (const state of this.stateMap.values()) {
      if (isSpecial && !state.isSpecial) {
        continue;
      }
      if (state.isSpecial) {
        hasSpecial = true;
      }
      if (state.current < state.total) {
        return false;
      }
    }
    if (!hasSpecial && isSpecial) {
      return false;
    }
    return true;
  }

  async initState(tabName: string, isSpecial: boolean) {
    let currentState = this.stateMap.get(tabName);
    if (!currentState) {
      currentState = new SpinDataState({
        config: this.config,
        type: isSpecial ? SpinDataType.special : SpinDataType.normal,
        tabName,
      });
      this.stateMap.set(tabName, currentState);
    }

    if (!currentState.isInit) {
      currentState.isInit = true;
      const count = await this.db.getTableCount(tabName);
      currentState.current = count;
      currentState.tabName = tabName;
      this.onNotify(tabName, currentState.current, currentState.total, isSpecial);
    }
    return currentState;
  }

  private pbMap: Map<string, protobuf.Namespace> = new Map();
  private jiliProtoMap: Map<string, JiliProtoAttributes> = new Map();
  private protoRootPromiseCache: Map<string, Promise<protobuf.Root>> = new Map();

  private async syncJiliProto(name: string): Promise<protobuf.Root> {
    if (this.protoRootPromiseCache.has(name)) {
      return this.protoRootPromiseCache.get(name);
    }

    const loadPromise = (async () => {
      const jiliProto = await this.db.jiliProto.findOne({
        where: { name },
      });

      if (!jiliProto) {
        throw new Error(`not found proto:${name}`);
      }

      const result = jiliProto.toJSON();
      this.jiliProtoMap.set(name, result);

      createDirectoryIfNotExists(__protoDir);

      const protoFilePath = path.join(__protoDir, `${name}.proto`);
      writeFileSync(protoFilePath, result.data, 'utf8');

      const root = await protobuf.load(protoFilePath);
      return root;
    })();

    this.protoRootPromiseCache.set(name, loadPromise);
    return loadPromise;
  }

  async getProto(gameName: string): Promise<protobuf.Namespace> {
    const root = await this.syncJiliProto(gameName);

    if (this.pbMap.has(gameName)) {
      return this.pbMap.get(gameName);
    }
    const result = this.jiliProtoMap.get(gameName);

    // 获取所有 message
    const messages = Object.values(root.nested).filter((v) => v instanceof protobuf.Namespace);
    const value = messages[0];

    // 缓存结果
    this.pbMap.set(result.name, value);
    return value;
  }

  async getSpinPb(name: string): Promise<JiliProtoAttributes> {
    await this.syncJiliProto(name);
    return this.jiliProtoMap.get(name);
  }

  async getSpinPbName(name: string): Promise<string> {
    const jiliProto = await this.getSpinPb(name);
    return jiliProto.spinPbName;
  }

  async getGameInfoPbName(name: string): Promise<string> {
    const jiliProto = await this.getSpinPb(name);
    return jiliProto.gameInfoPbName;
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
${Array.from(this.stateMap.values())
  .map((state) => `${state.tabName} 抓取进度: ${state.current}/${state.total}`)
  .join('\n')}
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
