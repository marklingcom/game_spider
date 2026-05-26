import type { GameProvider } from './types.js';

export function providerInfoTable(provider: GameProvider): string {
  return `${provider}_info`;
}

export function providerProtoTable(provider: GameProvider): string {
  return `${provider}_proto`;
}

/** 构建 spin 动态表名，例如 jili_spin_mpt_buy_special */
export function buildSpinTableName(provider: GameProvider, ...parts: string[]): string {
  return [provider, 'spin', ...parts].join('_');
}

/** 从 spin 表名解析游戏短名（mpt、tct 等） */
export function parseSpinTableGameName(tableName: string, provider: GameProvider): string {
  const prefix = `${provider}_spin_`;
  if (!tableName.startsWith(prefix)) {
    const segments = tableName.split('_');
    return segments[2] ?? '';
  }
  const rest = tableName.slice(prefix.length);
  return rest.split('_')[0] ?? '';
}

export function spinTablePrefix(provider: GameProvider): string {
  return `${provider}_spin_`;
}
