import { isNil } from 'lodash-es';
import { nanoid } from 'nanoid';
import type { Config, GameSession } from '../../config/index.js';
import { buildSpinTable } from '../../config/index.js';
import type DatabaseManager from '../../models/index.js';
import type { SpinDataAttributes } from '../../models/SpinData.js';
import {
  CompressType,
  CompressTypeMap,
  compressDataWithThreshold,
} from '../../utils/data_compress.js';
import { formatNumber } from '../../utils/utils.js';
import type { GameArtAction, GameArtRoundResult } from './gameart_api.js';

const GAMEART_AMOUNT_SCALE = 100;

interface GameArtRoundClassify {
  tableParts: string[];
  multiplier: number;
  isSpecial: boolean;
  isGroupRound: boolean;
  total: number;
}

class GameArtSpinState {
  current = 0;
  isInit = false;
  lastProgress = 0;

  constructor(
    readonly tabName: string,
    readonly total: number
  ) {}
}

export class GameArtDb {
  private db: DatabaseManager;
  private config: Config;
  private stateMap = new Map<string, GameArtSpinState>();

  constructor(options: { db: DatabaseManager; config: Config }) {
    this.db = options.db;
    this.config = options.config;
  }

  async init(_name: string): Promise<void> {
    await this.db.gameInfo.sync();
  }

  async saveGameInfo(
    data: Buffer,
    gaiaResponseData: Buffer,
    spiderData: GameSession
  ): Promise<void> {
    const value =
      (await this.db.gameInfo.findOne({
        where: { name: spiderData.name },
      })) || null;

    const info = {
      name: spiderData.name,
      fullName: this.config.currentGame.catalog.fullName,
      from: spiderData.from,
      data: gaiaResponseData,
      fullData: data,
      gi: spiderData.gi,
    };

    if (!value) {
      await this.db.gameInfo.create(info);
    } else {
      await this.db.gameInfo.update(info, {
        where: { name: spiderData.name },
      });
    }
  }

  async saveRoundData(options: {
    result: GameArtRoundResult;
    spiderData: GameSession;
    compress?: CompressType;
  }): Promise<void> {
    const { result, spiderData, compress } = options;
    const roundClassify = this.getRoundClassify(result);

    if (this.config.currentGameartConfig.special && !roundClassify.isSpecial) {
      return;
    }

    const tabName = buildSpinTable(
      this.config.provider,
      String(spiderData.gi),
      ...roundClassify.tableParts
    );
    const model = await this.db.ensureTableExists(tabName);
    const state = await this.initState(tabName, roundClassify.total);

    if (this.isComplete(state)) {
      return;
    }

    const bet = getRealBet(result, roundClassify.multiplier);
    const responses = roundClassify.isGroupRound
      ? [result.betResponse, ...(result.playResponses ?? [])]
      : [result.betResponse];
    const groupId = responses.length > 1 ? buildGroupId() : null;
    const spinDataList: SpinDataAttributes[] = [];
    let groupWinTotal = 0;

    for (const [index, response] of responses.entries()) {
      const totalWin = groupId ? getGroupResponseWin(response, groupWinTotal) : getResponseWin(response);
      groupWinTotal = formatNumber(groupWinTotal + totalWin, 6);
      const spinData = await this.buildSpinData({
        response,
        spiderData,
        bet,
        groupId,
        groupSeq: groupId ? index + 1 : null,
        totalWin,
        compress,
      });
      spinDataList.push(spinData);
    }

    validateCollectWin(result, spinDataList);
    if (groupId && result.collectResponse) {
      const collectIndex = spinDataList.length;
      const collectData = await this.buildSpinData({
        response: result.collectResponse,
        spiderData,
        bet,
        groupId,
        groupSeq: collectIndex + 1,
        totalWin: groupWinTotal,
        compress,
      });
      spinDataList.push(collectData);
    }

    if (groupId) {
      const sequelize = this.db.getDB();
      if (!sequelize) {
        throw new Error('数据库未初始化');
      }
      await sequelize.transaction(async (transaction) => {
        await model.bulkCreate(spinDataList as any[], { transaction });
      });
    } else {
      await model.create({ ...spinDataList[0] });
    }

    state.current++;
  }

  get isStop(): boolean {
    for (const state of this.stateMap.values()) {
      if (state.current < state.total) {
        return false;
      }
    }
    return this.stateMap.size > 0;
  }

  private async initState(tabName: string, total: number): Promise<GameArtSpinState> {
    let state = this.stateMap.get(tabName);
    if (!state) {
      state = new GameArtSpinState(tabName, total);
      this.stateMap.set(tabName, state);
    }

    if (!state.isInit) {
      state.isInit = true;
      state.current = await this.db.getSpinLogicalCount(tabName);
      this.notifyProgress(state);
    }
    return state;
  }

  private isComplete(state: GameArtSpinState): boolean {
    console.log(`表 ${state.tabName} 抓取进度: ${state.current}/${state.total}`);
    this.notifyProgress(state);
    return state.current >= state.total;
  }

  private notifyProgress(state: GameArtSpinState): void {
    const progress = (state.current / state.total) * 100;
    if (state.lastProgress === 0 || progress >= state.lastProgress + 3) {
      state.lastProgress = progress;
      console.log(`表 ${state.tabName} 抓取进度: ${Math.floor(progress)}%`);
    }
  }

  private async buildSpinData(options: {
    response: unknown;
    spiderData: GameSession;
    bet: number;
    groupId: string | null;
    groupSeq: number | null;
    totalWin: number;
    compress?: CompressType;
  }): Promise<SpinDataAttributes> {
    const { response, spiderData, bet, groupId, groupSeq, totalWin, compress } = options;
    const rawData = Buffer.from(JSON.stringify(response));
    const compressConfig = this.config.serverConfig.spiderConfig.compress;
    let data: Buffer = rawData;
    let compressType = compress || CompressType.None;
    if (isNil(compress)) {
      const compressed = await compressDataWithThreshold(compressConfig, rawData);
      data = Buffer.from(compressed.data);
      compressType = compressed.compressType;
      if (compressType !== CompressType.None) {
        console.log(
          `${CompressTypeMap[compressType]} 压缩结果: ${compressed.compressionRate.toFixed(2)}%`
        );
      }
    }

    return {
      data,
      totalWin,
      from: spiderData.from,
      bet,
      rate: bet > 0 ? formatNumber(totalWin / bet, 6) : 0,
      compress: compressType,
      groupId,
      groupSeq,
    };
  }

  private getRoundClassify(result: GameArtRoundResult): GameArtRoundClassify {
    const hasBonus = hasRoundBonus(result);

    if (!result.context) {
      return hasBonus
        ? {
            tableParts: ['special'],
            multiplier: 1,
            isSpecial: true,
            isGroupRound: true,
            total: 3000,
          }
        : {
            tableParts: ['normal'],
            multiplier: 1,
            isSpecial: false,
            isGroupRound: false,
            total: this.config.currentGameartConfig.buyBouns.enable ? 0 : 300000,
          };
    }

    if (result.context.startsWith('BONUS')) {
      return {
        tableParts: ['buy', 'special', String(result.buyIndex)],
        multiplier: result.multiplier,
        isSpecial: true,
        isGroupRound: true,
        total: 5000,
      };
    }

    if (result.context.startsWith('FEATURE')) {
      return {
        tableParts: ['extra', hasBonus ? 'special' : 'normal', String(result.extraIndex)],
        multiplier: result.multiplier,
        isSpecial: hasBonus,
        isGroupRound: hasBonus,
        total: hasBonus ? 3000 : 300000,
      };
    }

    return {
      tableParts: ['normal'],
      multiplier: 1,
      isSpecial: false,
      isGroupRound: false,
      total: this.config.currentGameartConfig.buyBouns.enable ? 0 : 300000,
    };
  }
}

function getRequestTotalBet(request: GameArtAction[]): number {
  const betAction = request.find((item) => item.action === 'bet');
  const context = betAction?.context;
  if (!Array.isArray(context)) {
    return 0;
  }

  const lines = Number(context[0] ?? 0);
  const betPerLine = Number(context[1] ?? 0);
  return toDisplayAmount(lines * betPerLine);
}

function getRealBet(result: GameArtRoundResult, multiplier: number): number {
  const baseBet = getResponseTotalBet(result.betResponse) || getRequestTotalBet(result.betRequest);
  return baseBet * multiplier;
}

function getResponseTotalBet(response: unknown): number {
  return (
    toDisplayAmount(findEventNumber(response, 'bet', 'total')) ??
    toDisplayAmount(findEventNumber(response, 'gameStart', 'totalBet')) ??
    0
  );
}

function getResponseWin(response: unknown): number {
  return (
    toDisplayAmount(findWin(response, 'gameEnd')) ??
    toDisplayAmount(findWin(response, 'gameRoundOver')) ??
    toDisplayAmount(sumEventPay(response, 'bonusWin')) ??
    toDisplayAmount(findAnyWin(response)) ??
    0
  );
}

function getGroupResponseWin(response: unknown, previousGroupWin: number): number {
  const gameEndWin = toDisplayAmount(findWin(response, 'gameEnd'));
  if (gameEndWin !== null) {
    return formatNumber(Math.max(gameEndWin - previousGroupWin, 0), 6);
  }

  return toDisplayAmount(sumEventPay(response, 'bonusWin')) ?? 0;
}

function validateCollectWin(
  result: GameArtRoundResult,
  spinDataList: SpinDataAttributes[]
): void {
  const collectWin = toDisplayAmount(findWin(result.collectResponse, 'gameRoundOver'));
  const dataWin = formatNumber(
    spinDataList.reduce((total, item) => total + (item.totalWin ?? 0), 0),
    6
  );

  if (collectWin === null) {
    if (dataWin > 0) {
      throw new Error(
        `GameArt win 校验失败: 缺少 collectResponse, context=${result.context}, dataWin=${dataWin}, wins=${JSON.stringify(
          spinDataList.map((item) => item.totalWin ?? 0)
        )}`
      );
    }
    return;
  }

  const normalizedCollectWin = formatNumber(collectWin, 6);
  if (Math.abs(dataWin - normalizedCollectWin) > 0.000001) {
    throw new Error(
      `GameArt win 校验失败: context=${result.context}, dataWin=${dataWin}, collectWin=${normalizedCollectWin}, wins=${JSON.stringify(
        spinDataList.map((item) => item.totalWin ?? 0)
      )}, collect=${JSON.stringify(result.collectResponse)}`
    );
  }
}

function toDisplayAmount(value: number | null): number | null {
  if (value === null) {
    return null;
  }
  return value / GAMEART_AMOUNT_SCALE;
}

function findEventNumber(response: unknown, eventName: string, field: string): number | null {
  const events = (response as { events?: unknown[] })?.events;
  if (!Array.isArray(events)) {
    return null;
  }
  const event = events.find((item) => (item as { event?: string })?.event === eventName);
  const value = (event as { context?: Record<string, unknown> })?.context?.[field];
  return typeof value === 'number' ? value : null;
}

function findWin(response: unknown, eventName: string): number | null {
  const events = (response as { events?: unknown[] })?.events;
  if (!Array.isArray(events)) {
    return null;
  }
  const event = events.find((item) => (item as { event?: string })?.event === eventName);
  const win = (event as { context?: { win?: unknown } })?.context?.win;
  return typeof win === 'number' ? win : null;
}

function findAnyWin(response: unknown): number | null {
  const events = (response as { events?: unknown[] })?.events;
  if (!Array.isArray(events)) {
    return null;
  }

  for (const event of events) {
    const win = (event as { context?: { win?: unknown } })?.context?.win;
    if (typeof win === 'number') {
      return win;
    }
  }
  return null;
}

function sumEventPay(response: unknown, eventName: string): number | null {
  const events = (response as { events?: unknown[] })?.events;
  if (!Array.isArray(events)) {
    return null;
  }

  let total = 0;
  let hasPay = false;
  for (const event of events) {
    if ((event as { event?: string })?.event !== eventName) {
      continue;
    }
    const pay = (event as { context?: { pay?: unknown } })?.context?.pay;
    if (typeof pay === 'number') {
      total += pay;
      hasPay = true;
    }
  }
  return hasPay ? total : null;
}

function hasRoundBonus(result: GameArtRoundResult): boolean {
  return [result.betResponse, ...(result.playResponses ?? [])].some(hasBonusSignal);
}

function hasBonusSignal(response: unknown): boolean {
  const outcome = (response as { platform?: { gameRound?: { outcome?: unknown } } })?.platform
    ?.gameRound?.outcome;
  if (outcome === 'BONUS') {
    return true;
  }

  const events = (response as { events?: unknown[] })?.events;
  if (!Array.isArray(events)) {
    return false;
  }

  return events.some((event) =>
    ['enterBonus', 'playedBonusSpin', 'playedBonusSpins'].includes(
      (event as { event?: string })?.event ?? ''
    )
  );
}

function buildGroupId(): string {
  return nanoid(16);
}
