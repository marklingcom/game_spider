import { cacertData } from './cacert_data.js';

export function getCacert(): Buffer {
  return Buffer.from(cacertData, 'utf8');
}
