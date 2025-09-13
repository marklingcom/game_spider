import { writeFileSync } from 'node:fs';
import path from 'node:path';
import protobuf from 'protobufjs';
import type { SpiderData } from '../gameFrom/info.js';
import type DatabaseManager from '../models/index.js';
import type { JiliInfoAttributes } from '../models/JiliGameInfo.js';
import type { JiliProtoAttributes } from '../models/JiliProto.js';
import type { SpinDataAttributes } from '../models/SpinData.js';
import { SpinResponse } from '../protoGeneral/astarte2_196.js';
import type Config from '../utils/config.js';
import { decryptResponseBuffer } from '../utils/decrypt.js';
import { __protoDir } from '../utils/env.js';
import { createDirectoryIfNotExists, formatNumber } from '../utils/utils.js';

export class JiliDb {
  private db: DatabaseManager;
  private config: Config;

  special = 0;
  normal = 300000;

  currentSpecial = 0;
  currentNormal = 0;

  constructor(options: {
    db: DatabaseManager;
    config: Config;
  }) {
    this.db = options.db;
    this.config = options.config;

    if (this.config.spiderConfig.hasSpecial) {
      this.special = 2000;
    }
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
    this.onStart();
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

  async saveSpinData(spinBuffer: Buffer, spiderData: SpiderData): Promise<void> {
    const { gaiaResponseData } = await decryptResponseBuffer(spinBuffer, spiderData.token);
    if (!gaiaResponseData || gaiaResponseData.length === 0) {
      throw new Error('gaiaResponseData is empty');
    }

    const gameName = spiderData.name;

    const spinResponse = SpinResponse.fromBinary(gaiaResponseData);

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
    // console.log('spinResponse:', jsonData);

    let gameType = 0;

    if (spinPbName === 'AllPlate') {
      const spinData = JSON.parse(jsonData);
      const plates = spinData.plate || [];

      if (plates.length > 1) {
        for (let i = 0; i < plates.length; i++) {
          const plate = plates[i];
          const onesCount = this.countOnesInPlate(plate);
          if (onesCount >= 3) {
            gameType = 1;
            break;
          }
        }
      }
    } else {
      const freeTotalWinRegex = /"FreeTotalWin"\s*:\s*"?([0-9]+(?:\.[0-9]+)?)"?/g;
      const matches = jsonData.match(freeTotalWinRegex);

      if (matches && matches.length > 0) {
        gameType = 1;
      }
    }

    const realBet = spinResponse.realBet || 0;
    let tabName = `jili_spin_${gameName}`;

    if (this.config.betConfig.bet !== 0) {
      tabName += `_${Math.floor(this.config.betConfig.bet)}`;
    }

    if (spinResponse.spinReq?.mall) {
      tabName += '_buy';
    } else if (spinResponse.spinReq?.extraSpin) {
      tabName += '_extra';
    }

    const isSpecial = gameType === 1;
    if (isSpecial) {
      tabName += '_special';
    } else {
      tabName += '_normal';
    }

    const model = await this.db.ensureTableExists(tabName);

    await this.initCount(tabName, isSpecial);

    if (this.isComplete(isSpecial)) {
      if (this.isAllComplete()) {
        console.log(`${tabName} 完成所有数据抓取`);
        this.onStop();
        process.exit(0);
      }
      return;
    }

    const spinData: SpinDataAttributes = {
      data: Buffer.from(spinResponse.data),
      totalWin: spinResponse.totalWin || 0,
      from: spiderData.from,
      bet: realBet,
      rate: formatNumber((spinResponse.totalWin || 0) / realBet, 6),
    };

    await model.create({
      data: spinData.data,
      totalWin: spinData.totalWin,
      from: spinData.from,
      bet: spinData.bet,
      rate: spinData.rate,
    });

    if (isSpecial) {
      this.currentSpecial++;
    } else {
      this.currentNormal++;
    }
  }

  isComplete(isSpecial: boolean, isLog = true) {
    if (isSpecial) {
      if (isLog) {
        console.log(`特殊数据抓取进度: ${this.currentSpecial}/${this.special}`);
      }
      if (this.currentSpecial >= this.special) {
        return true;
      }
    } else {
      if (isLog) {
        console.log(`普通数据抓取进度: ${this.currentNormal}/${this.normal}`);
      }
      if (this.currentNormal >= this.normal) {
        return true;
      }
    }
    return false;
  }

  isAllComplete() {
    return this.isComplete(false, false) && this.isComplete(true, false);
  }

  async initCount(tabName: string, isSpecial: boolean) {
    if (isSpecial) {
      if (this.currentSpecial === 0) {
        const count = await this.db.getTableCount(tabName);
        this.currentSpecial = count;
      }
    } else {
      if (this.currentNormal === 0) {
        const count = await this.db.getTableCount(tabName);
        this.currentNormal = count;
      }
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
