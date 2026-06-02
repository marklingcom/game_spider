import fs from 'node:fs';

export function createDirectoryIfNotExists(dir: string): void {
  try {
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
      console.log(`目录 ${dir} 创建成功`);
    }
  } catch (error) {
    throw new Error(`创建目录失败: ${(error as Error).message}`);
  }
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function sleepForever(): Promise<never> {
  return new Promise(() => {});
}

export function formatNumber(value: number, maxDecimals: number): number {
  const multiplier = 10 ** maxDecimals;
  return Math.round(value * multiplier) / multiplier;
}
