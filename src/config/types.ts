import type { CompressType } from '../utils/data_compress.js';

/** 已接入的游戏厂商 */
export type GameProvider = 'jili' | 'gameart';

export interface BuyBounsConfig {
  enable: boolean;
  index: number;
}

export interface ExtraConfig {
  enable: boolean;
  index: number;
}

export interface GameConfig {
  bet: number;
  buyBouns: BuyBounsConfig;
  extra: ExtraConfig;
  special: boolean;
  gameName: string;
}

export interface JiliConfig extends GameConfig {
  isOld?: boolean;
  buyBouns: BuyBounsConfig & {
    hasDefaultIndex: boolean;
  };
  extra: ExtraConfig & {
    hasDefaultIndex: boolean;
  };
}

export interface GameArtConfig extends GameConfig {}

export interface GameSession {
  token: string;
  spin: string;
  name: string;
  from: string;
  webSocketData: Buffer;
  gi: number;
  origin?: string;
  referer?: string;
  sid?: string;
  kid?: string;
  key?: string;
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
  jiliConfig: JiliConfig;
  gameartConfig: GameArtConfig;
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
