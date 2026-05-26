import type { GameProvider } from './types.js';

const AWC_CATALOG_FILE: Record<GameProvider, string> = {
  jili: 'JILI-SLOT.json',
};

const HUIDU_LIST_FILE: Record<GameProvider, string> = {
  jili: 'jili.json',
};

export function getAwcCatalogPath(provider: GameProvider): string {
  return `./config/awc/${AWC_CATALOG_FILE[provider]}`;
}

export function getHuiduListPath(provider: GameProvider): string {
  return `./config/huidu/${HUIDU_LIST_FILE[provider]}`;
}
