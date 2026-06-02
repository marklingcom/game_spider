import type { BuyBounsConfig, Config, ExtraConfig, GameSession } from '../../config/index.js';
import { RetError } from '../../utils/errors.js';
import { getAxiosClient } from '../../utils/request.js';
import { decodeGameArtText, encodeGameArtText } from './gameart_utils.js';

export interface GameArtAction {
  action: string;
  context: unknown;
}

export interface GameArtRoundResult {
  betRequest: GameArtAction[];
  betResponse: unknown;
  playRequests?: GameArtAction[][];
  playResponses?: unknown[];
  collectRequest?: GameArtAction[];
  collectResponse?: unknown;
  context: string | null;
  buyIndex: number;
  extraIndex: number;
  multiplier: number;
}

const DEFAULT_BUY_CONTEXTS = ['BONUS'];
const DEFAULT_EXTRA_CONTEXTS = ['FEATURE1', 'FEATURE2', 'FEATURE3', 'FEATURE4'];
const DEFAULT_BUY_MULTIPLIERS = [100];
const DEFAULT_EXTRA_MULTIPLIERS = [50, 175, 450, 550];
const GAMEART_AMOUNT_SCALE = 100;
const GAMEART_PAYLINES = 25;
const DEFAULT_DISPLAY_BET = 1;

export class GameArtApi {
  private config: Config;
  private session: GameSession;
  private configResponse: any = null;

  constructor(options: { config: Config; session: GameSession }) {
    this.config = options.config;
    this.session = options.session;
  }

  async requestGameInfo(): Promise<{
    data: Buffer;
    gaiaResponseData: Buffer;
    gameInfoAck: any;
  }> {
    const request: GameArtAction[] = [{ action: 'config', context: null }];
    const response = await this.engine(request, 0);
    this.configResponse = response;
    const data = Buffer.from(JSON.stringify(response));
    return {
      data,
      gaiaResponseData: data,
      gameInfoAck: response,
    };
  }

  async spin(
    bet: number,
    buyBouns: BuyBounsConfig,
    extra: ExtraConfig
  ): Promise<GameArtRoundResult> {
    const playContext = this.resolvePlayContext(buyBouns, extra);
    const betRequest = this.buildBetRequest(bet, playContext.context);
    const betResponse = await this.engine(betRequest, 0);
    const result: GameArtRoundResult = {
      betRequest,
      betResponse,
      context: playContext.context,
      buyIndex: buyBouns.index,
      extraIndex: extra.index,
      multiplier: playContext.multiplier,
    };

    if (shouldContinueRound(betResponse)) {
      await this.settleRound(result, betResponse);
    }

    return result;
  }

  getDefaultBet(): number {
    const configuredBet = this.config.currentGameartConfig.bet;
    if (configuredBet > 0) {
      return configuredBet;
    }

    return DEFAULT_DISPLAY_BET;
  }

  private resolvePlayContext(
    buyBouns: BuyBounsConfig,
    extra: ExtraConfig
  ): { context: string | null; multiplier: number } {
    if (buyBouns.enable && extra.enable) {
      throw new Error('GameArt buyBouns 和 extra 不能同时启用');
    }

    if (buyBouns.enable) {
      return this.resolveBuyOutcomeContext('BONUS', buyBouns.index);
    }

    if (extra.enable) {
      return this.resolveBuyOutcomeContext('FEATURE', extra.index);
    }

    return { context: null, multiplier: 1 };
  }

  private resolveBuyOutcomeContext(
    type: 'BONUS' | 'FEATURE',
    index: number
  ): { context: string; multiplier: number } {
    const outcomes = this.getBuyOutcomes(type);
    const outcome = outcomes[index];
    if (!outcome) {
      throw new Error(
        `GameArt ${type} index 无效: ${index}, 可用项: ${outcomes
          .map((item) => item.name)
          .join(',')}`
      );
    }
    return { context: outcome.name, multiplier: outcome.multiplier };
  }

  private getBuyOutcomes(type: 'BONUS' | 'FEATURE'): Array<{ name: string; multiplier: number }> {
    const buyOutcomes = this.configResponse?.events?.[0]?.context?.buyOutcomes;
    if (!Array.isArray(buyOutcomes)) {
      return getDefaultBuyOutcomes(type);
    }

    const outcomes = buyOutcomes
      .map((item) => ({
        name: (item as { name?: unknown })?.name,
        multiplier: (item as { multiplier?: unknown })?.multiplier,
      }))
      .filter(
        (item): item is { name: string; multiplier: number } =>
          typeof item.name === 'string' &&
          item.name.startsWith(type) &&
          typeof item.multiplier === 'number'
      );

    if (outcomes.length === 0) {
      return getDefaultBuyOutcomes(type);
    }

    return outcomes;
  }

  private buildBetRequest(displayBet: number, context: string | null): GameArtAction[] {
    const internalTotalBet = displayBet * GAMEART_AMOUNT_SCALE;
    const betPerLine = internalTotalBet / GAMEART_PAYLINES;

    return [
      {
        action: 'bet',
        context: [GAMEART_PAYLINES, betPerLine],
      },
      {
        action: 'play',
        context,
      },
    ];
  }

  private async engine(request: GameArtAction[], seq: number): Promise<unknown> {
    const key = this.session.key || this.session.token;
    if (!this.session.sid || !key) {
      throw new Error('GameArt sid/key 为空，无法请求 /rgs/engine');
    }

    const plain = JSON.stringify(request);
    const cipher = encodeGameArtText(plain, key);
    const url = `${this.session.spin}?sid=${encodeURIComponent(this.session.sid)}&seq=${seq}`;

    const response = await getAxiosClient().post(url, cipher, {
      headers: {
        Accept: '*/*',
        'Content-Type': 'text/plain; charset=UTF-8',
        Origin: this.session.origin,
        Referer: this.session.referer || this.session.origin,
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36',
      },
      responseType: 'text',
    });

    const responseText = String(response.data);
    const decoded = decodeGameArtText(responseText, key);
    const payload = JSON.parse(decoded);
    assertGameArtResponseOk(payload, request, seq);
    return payload;
  }

  private async settleRound(result: GameArtRoundResult, initialResponse: unknown): Promise<void> {
    let seq = result.betRequest.length;
    let lastResponse = initialResponse;
    const maxFollowupRequests = 30;

    for (let i = 0; i < maxFollowupRequests; i++) {
      if (isExpectingPlayResponse(lastResponse)) {
        const playRequest: GameArtAction[] = [{ action: 'play', context: null }];
        const playResponse = await this.engine(playRequest, seq);
        result.playRequests = [...(result.playRequests ?? []), playRequest];
        result.playResponses = [...(result.playResponses ?? []), playResponse];
        lastResponse = playResponse;
        seq += playRequest.length;
        continue;
      }

      if (!hasRoundWin(result)) {
        return;
      }

      const collectRequest: GameArtAction[] = [{ action: 'collect', context: null }];
      try {
        result.collectRequest = collectRequest;
        result.collectResponse = await this.engine(collectRequest, seq);
        return;
      } catch (error) {
        if (!(error instanceof GameArtResponseError) || !error.isExpectingPlay()) {
          throw error;
        }
      }

      const playRequest: GameArtAction[] = [{ action: 'play', context: null }];
      const playResponse = await this.engine(playRequest, seq);
      result.playRequests = [...(result.playRequests ?? []), playRequest];
      result.playResponses = [...(result.playResponses ?? []), playResponse];
      lastResponse = playResponse;
      seq += playRequest.length;
    }

    throw new Error(`GameArt 后续 play/collect 超过限制: ${maxFollowupRequests}`);
  }
}

class GameArtResponseError extends Error {
  constructor(
    readonly payload: unknown,
    readonly request: GameArtAction[],
    readonly seq: number
  ) {
    const actions = request.map((item) => item.action).join(',');
    super(`GameArt 响应错误: seq=${seq}, actions=${actions}, payload=${JSON.stringify(payload)}`);
  }

  isExpectingPlay(): boolean {
    const error = (this.payload as { error?: unknown })?.error;
    return typeof error === 'string' && error.includes('was expecting: play');
  }
}

function assertGameArtResponseOk(payload: unknown, request: GameArtAction[], seq: number): void {
  const response = payload as { error?: unknown; errorCode?: unknown };
  if (response?.error || response?.errorCode) {
    if (isNotEnoughCredits(response)) {
      throw new RetError(305);
    }
    throw new GameArtResponseError(payload, request, seq);
  }
}

function isNotEnoughCredits(response: { error?: unknown; errorCode?: unknown }): boolean {
  if (response.errorCode === 105) {
    return true;
  }

  const error = response.error;
  return typeof error === 'string' && error.includes('not enough credits');
}

function getGameEndWin(response: unknown): number {
  const events = (response as { events?: unknown[] })?.events;
  if (!Array.isArray(events)) {
    return 0;
  }

  const gameEnd = events.find((event) => (event as { event?: string })?.event === 'gameEnd');
  const win = (gameEnd as { context?: { win?: unknown } })?.context?.win;
  if (typeof win === 'number' && win > 0) {
    return win;
  }
  return 0;
}

function shouldContinueRound(response: unknown): boolean {
  return isExpectingPlayResponse(response) || getGameEndWin(response) > 0;
}

function hasRoundWin(result: GameArtRoundResult): boolean {
  return [result.betResponse, ...(result.playResponses ?? [])].some(hasResponseWin);
}

function hasResponseWin(response: unknown): boolean {
  return getGameEndWin(response) > 0 || sumEventPay(response, 'bonusWin') > 0;
}

function sumEventPay(response: unknown, eventName: string): number {
  const events = (response as { events?: unknown[] })?.events;
  if (!Array.isArray(events)) {
    return 0;
  }

  return events.reduce<number>((total, event) => {
    if ((event as { event?: string })?.event !== eventName) {
      return total;
    }
    const pay = (event as { context?: { pay?: unknown } })?.context?.pay;
    return typeof pay === 'number' ? total + pay : total;
  }, 0);
}

function isExpectingPlayResponse(response: unknown): boolean {
  const events = (response as { events?: unknown[] })?.events;
  if (!Array.isArray(events)) {
    return false;
  }

  if (hasEvent(events, 'enterBonus')) {
    return true;
  }

  if (hasEvent(events, 'gameEnd')) {
    return false;
  }

  if (hasEvent(events, 'playedBonusSpin')) {
    return true;
  }

  const playedBonusSpins = events.find(
    (event) => (event as { event?: string })?.event === 'playedBonusSpins'
  );
  const left = (playedBonusSpins as { context?: { left?: unknown } } | undefined)?.context?.left;
  if (typeof left === 'number') {
    return left > 0;
  }

  const outcome = (response as { platform?: { gameRound?: { outcome?: unknown } } })?.platform
    ?.gameRound?.outcome;
  return outcome === 'BONUS';
}

function hasEvent(events: unknown[], eventName: string): boolean {
  return events.some((event) => (event as { event?: string })?.event === eventName);
}

function getDefaultBuyOutcomes(type: 'BONUS' | 'FEATURE'): Array<{
  name: string;
  multiplier: number;
}> {
  const names = type === 'BONUS' ? DEFAULT_BUY_CONTEXTS : DEFAULT_EXTRA_CONTEXTS;
  const multipliers = type === 'BONUS' ? DEFAULT_BUY_MULTIPLIERS : DEFAULT_EXTRA_MULTIPLIERS;
  return names.map((name, index) => ({
    name,
    multiplier: multipliers[index] ?? 1,
  }));
}
