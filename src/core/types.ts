import type { BuyBounsConfig, ExtraConfig } from './config-types.js';

/** 已接入的游戏厂商 */
export type GameProvider = 'jili';

export interface GameSession {
  token: string;
  spin: string;
  name: string;
  from: string;
  webSocketData: Buffer;
  gi: number;
}

/** AWC 等平台游戏目录项 */
export interface GameCatalogEntry {
  fullName: string;
  gi: number;
  name: string;
  uuid: string;
}

/** Huidu 启动参数 */
export interface LaunchGameEntry {
  fullName: string;
  companyId: number;
  gameUid: string;
  partnerId?: number;
}

export interface SpinOptions {
  bet: number;
  buyBouns: BuyBounsConfig;
  extra: ExtraConfig;
}

export interface SpinResult {
  spinReqData: unknown;
  spinResBuffer: Buffer;
}

export interface GameInfoResult {
  data: Buffer;
  gaiaResponseData: Buffer;
  gameInfoAck: unknown;
}

export interface SaveSpinPayload {
  spinResBuffer: Buffer;
  spinReqData: unknown;
  session: GameSession;
}

/** 厂商游戏 API：拉取 gameInfo、WebSocket、spin */
export interface IGameApi {
  readonly isConnected: boolean;
  requestGameInfo(): Promise<GameInfoResult>;
  connectRealtime(): Promise<void>;
  spin(bet: number, buyBouns: BuyBounsConfig, extra: ExtraConfig): Promise<SpinResult>;
}

/** 厂商数据落库 */
export interface ISpinRepository {
  readonly isStop: boolean;
  init(gameShortName: string): Promise<void>;
  saveGameInfo(data: Buffer, gaiaResponseData: Buffer, session: GameSession): Promise<void>;
  saveSpin(payload: SaveSpinPayload): Promise<void>;
}

export interface ProviderComponents {
  createApi(config: unknown, session: GameSession): IGameApi;
  createRepository(db: unknown, config: unknown): ISpinRepository;
}
