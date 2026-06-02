import { GaiaResponse } from './proto/general/astarte2_196.js';
import { RetError } from '../../utils/errors.js';
import { decrypted } from '../../utils/crypto/index.js';

export async function decryptResponseBuffer(
  buff: Buffer,
  token: string,
  type?: number
): Promise<{ data: Buffer; gaiaResponseData: Buffer }> {
  const gaiaResponse = GaiaResponse.fromBinary(buff);

  var ret = gaiaResponse.ret as number;
  if (ret !== 0) {
    // pb.Error_success
    throw new RetError(ret);
  }

  const originData = gaiaResponse.data;

  try {
    const data = decrypted(token, Buffer.from(originData), type);
    gaiaResponse.data = data;
  } catch (error) {
    console.error('buff可能无加密');
    // error.message = 'buff可能无加密, 解密失败';
    // throw error;
  }

  const out = GaiaResponse.toBinary(gaiaResponse);

  return {
    data: Buffer.from(out),
    gaiaResponseData: Buffer.from(gaiaResponse.data),
  };
}
