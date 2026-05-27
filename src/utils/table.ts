import fs from 'node:fs';
import {
  awcCatalogPath,
  config,
  parseSpinTableGameName,
  type GameCatalogEntry,
  type GameProvider,
} from '../config/index.js';

function getCatalogList(provider: GameProvider): GameCatalogEntry[] {
  if (provider === config.provider) {
    return config.catalogList;
  }
  const catalogStr = fs.readFileSync(awcCatalogPath(provider), 'utf8');
  return JSON.parse(catalogStr) as GameCatalogEntry[];
}

export const getTableGameName = (tableName: string, provider: GameProvider = config.provider) => {
  return parseSpinTableGameName(tableName, provider);
};

export const getFullGameName = (name: string, provider: GameProvider = config.provider) => {
  const entry = getCatalogList(provider).find((item) => item.name === name);
  return entry?.fullName || '';
};
