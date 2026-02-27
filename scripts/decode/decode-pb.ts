import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import dayjs from 'dayjs';
import protobuf from 'protobufjs';
import { decryptResponseBuffer } from '../../src/spider/jili/jili_utils.js';
import { dataToBuffer } from '../../src/utils/dataToBuffer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataDir = join(__dirname, 'data');

const pbFilePath: string = '/Users/taumulu/Master/Project/qd2ss/jili_spider/src/proto/sss.proto';
const messageName: string = 'JPInfo';
const base64String: string =
  'data:application/octet-stream;base64,CGUqMKl7shENA6RCCnwbmB8Bl/tBqaqwhFkPYs3n0YK4SXo8C1WostC93R3lUqVgBVPQNw==';
const hexString: string = '';
const escapeString: string = '';
const token: string = 'd04d907e409b6c08be11cab812f0992187e38450';

async function decodeWithProto(buffer: Buffer) {
  const root = await protobuf.load(pbFilePath);
  const messageType = root.lookupType(messageName);
  const { gaiaResponseData } = await decryptResponseBuffer(buffer, token);
  const decoded = messageType.decode(gaiaResponseData);
  const object = messageType.toObject(decoded);
  return object;
}

async function main() {
  try {
    const dataBuffer = dataToBuffer({ escapeString, base64String, hexString });
    if (dataBuffer.length === 0) {
      console.error('❌ 输入数据为空');
      process.exit(1);
    }

    const decoded = await decodeWithProto(dataBuffer);
    const jsonData = JSON.stringify(decoded, null, 2);

    console.log('\n📊 解析结果:');
    console.log('='.repeat(80));
    console.log(jsonData);
    console.log('='.repeat(80));

    mkdirSync(dataDir, { recursive: true });
    const outputFile = join(dataDir, `pb_${dayjs().format('YY-MM-DD_HH:mm:ss')}.json`);
    writeFileSync(outputFile, jsonData, 'utf8');
    console.log(`\n✅ 结果已保存到: ${outputFile}`);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`❌ ${errorMessage}`);
    process.exit(1);
  }
}

main();
