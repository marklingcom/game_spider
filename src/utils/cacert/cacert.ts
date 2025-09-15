import { cacertData } from './data.js';

export function getCacert(): Buffer {
  return Buffer.from(cacertData, 'utf8');
}
