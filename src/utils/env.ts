import { dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

export const __filename = fileURLToPath(import.meta.url);
export const __dirname = dirname(__filename);

export const __cwd = process.cwd();

export const __protoDir = `${__cwd}/src/proto`;

export const __protoGeneralDir = `${__cwd}/src/protoGeneral`;
