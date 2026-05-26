import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import type { GameProvider } from '../core/types.js';

export const __filename = fileURLToPath(import.meta.url);

export const __dirname = dirname(__filename);

export const __cwd = process.cwd();

export function getProviderProtoGamesDir(provider: GameProvider): string {
  return `${__cwd}/src/providers/${provider}/proto/games`;
}

export function getProviderProtoGeneralDir(provider: GameProvider): string {
  return `${__cwd}/src/providers/${provider}/proto/general`;
}

/** @deprecated 使用 getProviderProtoGamesDir('jili') */
export const __protoDir = getProviderProtoGamesDir('jili');

/** @deprecated 使用 getProviderProtoGeneralDir('jili') */
export const __protoGeneralDir = getProviderProtoGeneralDir('jili');

export const isProd = process.env.NODE_ENV === 'production';
