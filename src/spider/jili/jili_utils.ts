import { GaiaResponse } from '../../protoGeneral/astarte2_196.js';
import { Ret254Error, Ret305Error } from '../../utils/errors.js';
import { decrypted } from '../../utils/utils.js';

export async function decryptResponseBuffer(
  buff: Buffer,
  token: string
): Promise<{ data: Buffer; gaiaResponseData: Buffer }> {
  const gaiaResponse = GaiaResponse.fromBinary(buff);

  var ret = gaiaResponse.ret as number;
  if (ret === 254) {
    throw new Ret254Error();
  }

  if (ret === 305) {
    throw new Ret305Error();
  }

  if (ret !== 0) {
    // pb.Error_success
    throw new Error('ret not pb.Error_success');
  }

  const originData = gaiaResponse.data;

  try {
    const data = decrypted(token, Buffer.from(originData));
    gaiaResponse.data = data;
  } catch (_error) {
    console.error('buff可能无加密');
  }

  const out = GaiaResponse.toBinary(gaiaResponse);

  return {
    data: Buffer.from(out),
    gaiaResponseData: Buffer.from(gaiaResponse.data),
  };
}
