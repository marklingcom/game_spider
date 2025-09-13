import fs from 'node:fs';
import crypto from 'crypto';
// @ts-expect-error
import TelegramBot from 'node-telegram-bot-api';

export function fromJson(jsonStr: string): Buffer {
  try {
    const decodedMap = JSON.parse(jsonStr);
    const decodedBytes: number[] = [];

    for (let i = 0; i < Object.keys(decodedMap).length; i++) {
      decodedBytes.push(decodedMap[i.toString()]);
    }

    return Buffer.from(decodedBytes);
  } catch (error) {
    console.error('JSON解析失败:', error);
    process.exit(-1);
  }
}

export function pkcs5UnPadding(origData: Buffer): Buffer {
  const length = origData.length;
  const unpadding = origData[length - 1];
  if (unpadding === undefined || unpadding === 0) {
    return origData;
  }
  return origData.slice(0, length - unpadding);
}

export function decrypted(token: string, gaiaResponse: Buffer): Buffer {
  try {
    const key = Buffer.concat([Buffer.from(token.slice(0, 16)), Buffer.from(token.slice(-16))]);

    const iv = gaiaResponse.slice(0, 16);
    const encryptedData = gaiaResponse.slice(16);

    const decipher = crypto.createDecipheriv('aes-256-cbc', key, iv);
    decipher.setAutoPadding(false);

    let decrypted = decipher.update(encryptedData);
    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return pkcs5UnPadding(decrypted);
  } catch (error) {
    console.error('解密失败:', error);
    throw error;
  }
}

export function reverseString(s: string): string {
  return s.split('').reverse().join('');
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

export function bytesToJSON(data: Buffer): string {
  const result: { [key: string]: number } = {};

  for (let i = 0; i < data.length; i++) {
    const byte = data[i];
    if (byte !== undefined) {
      result[i.toString()] = byte;
    }
  }

  return JSON.stringify(result);
}

export function fileExists(filename: string): boolean {
  try {
    fs.accessSync(filename);
    return true;
  } catch (_error) {
    return false;
  }
}

export async function sendMessageToTelegram(message: string): Promise<void> {
  try {
    const botToken = '7534595370:AAEyHi8oAUJPhjI7ejIWRr7C2NtjPKQ4u3M';
    const bot = new TelegramBot(botToken, { polling: false });

    const chatId = 5682897061;

    await bot.sendMessage(chatId, message);
    console.log('Telegram消息发送成功');
  } catch (error) {
    console.error('Telegram消息发送失败:', error);
    throw error;
  }
}

export function findValidDenominator(betArray: number[]): [number, boolean] {
  for (const bet of betArray) {
    if (bet > 0) {
      return [bet, true];
    }
  }
  return [0, false];
}

export function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function formatNumber(value: number, maxDecimals: number): number {
  const multiplier = 10 ** maxDecimals;
  return Math.round(value * multiplier) / multiplier;
}
