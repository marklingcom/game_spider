import fs from 'node:fs';
import crypto from 'crypto';

export function pkcs5UnPadding(origData: Buffer): Buffer {
  const length = origData.length;
  const unpadding = origData[length - 1];
  if (unpadding === undefined || unpadding === 0) {
    return origData;
  }
  return origData.slice(0, length - unpadding);
}

export function decrypted(token: string, gaiaResponse: Buffer, type = 0): Buffer {
  try {
    let key = Buffer.concat([Buffer.from(token.slice(0, 16)), Buffer.from(token.slice(-16))]);
    if (type === 1) {
      key = Buffer.from(token.slice(0, 32));
    }

    const iv = gaiaResponse.slice(0, 16);
    const encryptedData = gaiaResponse.slice(16);

    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    decipher.setAutoPadding(false);

    let decrypted = decipher.update(encryptedData);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return pkcs5UnPadding(decrypted);
  } catch (error) {
    console.log('解密失败');
    throw error;
  }
}

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
