import type { CompressType } from '../utils/data_compress.js';

/** 已接入的游戏厂商 */
export type GameProvider = 'jili';

export interface BuyBounsConfig {
  enable: boolean;
  index: number;
  hasDefaultIndex: boolean;
}

export interface ExtraConfig {
  enable: boolean;
  index: number;
  hasDefaultIndex: boolean;
}

export interface GameConfig {
  bet: number;
  isOld?: boolean;
  buyBouns: BuyBounsConfig;
  extra: ExtraConfig;
  special: boolean;
  gameName: string;
}

export interface GameSession {
  token: string;
  spin: string;
  name: string;
  from: string;
  webSocketData: Buffer;
  gi: number;
}

export interface GameCatalogEntry {
  fullName: string;
  gi: number;
  name: string;
  uuid: string;
}

export interface LaunchGameEntry {
  fullName: string;
  companyId: number;
  gameUid: string;
  partnerId?: number;
}

export type { GameSession as SpiderData };

export interface ServerConfig {
  provider: GameProvider;
  proxy: {
    enable: boolean;
    server: string;
  };
  db: {
    type: string;
    dsn: string;
    dialect?: string;
  };
  spiderConfig: {
    autoMigrate: boolean;
    form: string;
    compress: CompressType;
  };
  gameConfig: GameConfig;
  huiduConfig: {
    coin: number;
    key: string;
    maxCount: number;
    noMoneyAccounts: number[];
    uidList0: number[];
    uidListTest: number[];
    uidList1: number[];
    uidList2: number[];
  };
  telegram: {
    enable: boolean;
    botToken: string;
    chatId: string;
    machine: string;
  };
}

/** @deprecated 使用 gameConfig */
export type JiliConfig = GameConfig;

