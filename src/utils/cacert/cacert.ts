import { cacertData } from './data';

export function getCacert(): Buffer {
  return Buffer.from(cacertData, 'utf8');
}
