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
    } else if (type === 2) {
      key = Buffer.from(token.slice(0));
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
