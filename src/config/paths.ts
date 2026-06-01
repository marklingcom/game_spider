import type { GameProvider } from './types.js';

/** 统一集中维护：各厂商相关配置文件名 */
const PROVIDER_FILES: Record<GameProvider, { awc: string; huidu: string }> = {
  jili: { awc: 'JILI-SLOT.json', huidu: 'jili.json' },
  gameart: { awc: 'GAMEART-SLOT.json', huidu: 'gameart.json' },
};

export function awcCatalogPath(provider: GameProvider): string {
  return `./config/awc/${PROVIDER_FILES[provider].awc}`;
}

export function huiduListPath(provider: GameProvider): string {
  return `./config/huidu/${PROVIDER_FILES[provider].huidu}`;
}

export function protoGamesDir(provider: GameProvider): string {
  return `${process.cwd()}/src/spider/${provider}/proto/games`;
}

export function protoGeneralDir(provider: GameProvider): string {
  return `${process.cwd()}/src/spider/${provider}/proto/general`;
}

/** 数据库表名：游戏元信息 */
export function infoTable(provider: GameProvider): string {
  return `${provider}_info`;
}

/** 数据库表名：proto 元信息 */
export function protoTable(provider: GameProvider): string {
  return `${provider}_proto`;
}

/** 构建 spin 动态表名，例如 jili_spin_mpt_buy_special */
export function buildSpinTable(provider: GameProvider, ...parts: string[]): string {
  return [provider, 'spin', ...parts].join('_');
}

/** 从 spin 表名解析游戏短名（mpt、tct 等） */
export function parseSpinTableGameName(tableName: string, provider: GameProvider): string {
  const prefix = `${provider}_spin_`;
  if (!tableName.startsWith(prefix)) {
    return tableName.split('_')[2] ?? '';
  }
  return tableName.slice(prefix.length).split('_')[0] ?? '';
}

export function spinTablePrefix(provider: GameProvider): string {
  return `${provider}_spin_`;
}
