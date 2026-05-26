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
