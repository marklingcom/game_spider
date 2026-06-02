import { createCipheriv, createDecipheriv } from 'crypto';

const defaultKey = 'V12LYRp98tsGcyxv';

function pkcs7Pad(data: Buffer, blockSize: number): Buffer {
  const padding = blockSize - (data.length % blockSize);
  const padSize = padding === 0 ? blockSize : padding;
  const padText = Buffer.alloc(padSize, padSize);
  return Buffer.concat([data, padText]);
}

function pkcs7Unpad(data: Buffer): Buffer {
  if (data.length === 0) {
    throw new Error('pkcs7Unpad: data is empty');
  }

  const padSize = data[data.length - 1];
  if (padSize > data.length || padSize > 16) {
    throw new Error('pkcs7Unpad: invalid padding');
  }

  for (let i = data.length - padSize; i < data.length; i++) {
    if (data[i] !== padSize) {
      throw new Error('pkcs7Unpad: invalid padding');
    }
  }

  return data.slice(0, data.length - padSize);
}

export function encryptAESECB(plaintext: Buffer): string {
  const key = Buffer.from(defaultKey, 'utf8');
  const blockSize = 16;

  const paddedPlaintext = pkcs7Pad(plaintext, blockSize);
  const ciphertext = Buffer.alloc(paddedPlaintext.length);

  for (let start = 0; start < paddedPlaintext.length; start += blockSize) {
    const end = start + blockSize;
    const cipher = createCipheriv('aes-128-ecb', key, null);
    cipher.setAutoPadding(false);
    const chunk = cipher.update(paddedPlaintext.slice(start, end));
    chunk.copy(ciphertext, start);
  }

  return ciphertext.toString('base64');
}

export function decryptAESECB(ciphertextBase64: string): Buffer {
  const ciphertext = Buffer.from(ciphertextBase64, 'base64');
  const key = Buffer.from(defaultKey, 'utf8');
  const blockSize = 16;

  if (ciphertext.length % blockSize !== 0) {
    throw new Error('ciphertext is not a multiple of the block size');
  }

  const plaintext = Buffer.alloc(ciphertext.length);

  for (let start = 0; start < ciphertext.length; start += blockSize) {
    const end = start + blockSize;
    const decipher = createDecipheriv('aes-128-ecb', key, null);
    decipher.setAutoPadding(false);
    const chunk = decipher.update(ciphertext.slice(start, end));
    chunk.copy(plaintext, start);
  }

  return pkcs7Unpad(plaintext);
}
