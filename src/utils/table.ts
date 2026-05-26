import jiliSlotConfig from '../../config/awc/JILI-SLOT.json' with { type: 'json' };
import { parseSpinTableGameName } from '../core/table-names.js';
import type { GameProvider } from '../core/types.js';
import { config } from './config.js';

export const getTableGameName = (tableName: string, provider: GameProvider = config.provider) => {
  return parseSpinTableGameName(tableName, provider);
};

export const getFullGameName = (name: string) => {
  const gameConfig = jiliSlotConfig.find((item) => item.name === name);
  return gameConfig?.fullName || '';
};
