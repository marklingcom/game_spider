import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import dayjs from 'dayjs';
import {
  AckType,
  DailyMissionInfo,
  FullJp,
  InfoReq,
  Request,
  SpinReq,
} from '../../src/protoGeneral/astarte2_196.js';
import { dataToBuffer } from '../../src/utils/dataToBuffer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataDir = join(__dirname, 'data');

const base64String: string = '';
const hexString: string = '';
const escapeString: string =
  '\u0012\u0017\u0009\u0000\u0000\u0000\u0000\u0000\u0000ð?Ê\u0001\u0006\u0008\u0000\u0010\u0000 \u0000Ò\u0001\u0002\u0008\u0000';

function getAckTypeName(ack: number): string {
  return AckType[ack] || `Unknown(${ack})`;
}

function parseReqByAckType(ack: number, reqData: Uint8Array): any {
  switch (ack) {
    case AckType.spin:
      return SpinReq.fromBinary(reqData);
    case AckType.info:
      return InfoReq.fromBinary(reqData);
    case AckType.fullJpInfo:
      return FullJp.fromBinary(reqData);
    case AckType.getNowMission:
      return DailyMissionInfo.fromBinary(reqData);
    case AckType.getMission2:
      return DailyMissionInfo.fromBinary(reqData);
    default:
      throw new Error(`未知的 ack 类型: ${ack} (${getAckTypeName(ack)})`);
  }
}

function decodeRequest(buffer: Buffer | Uint8Array) {
  try {
    const request = Request.fromBinary(buffer);
    const ack = request.ack;
    const req = parseReqByAckType(ack, request.req);

    return {
      ack,
      req,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(`解析 Request 失败: ${errorMessage}`);
  }
}

async function main() {
  try {
    const dataBuffer = dataToBuffer({ escapeString, base64String, hexString });

    if (dataBuffer.length === 0) {
      console.error('❌ 输入数据为空');
      process.exit(1);
    }

    const decoded = decodeRequest(dataBuffer);

    const jsonData = JSON.stringify(decoded, null, 2);
    console.log('\n📊 解析结果:');
    console.log('='.repeat(80));
    console.log(jsonData);
    console.log('='.repeat(80));

    mkdirSync(dataDir, { recursive: true });
    const outputFile = join(dataDir, `request_${dayjs().format('YY-MM-DD_HH:mm:ss')}.json`);
    writeFileSync(outputFile, jsonData, 'utf8');
    console.log(`\n✅ 结果已保存到: ${outputFile}`);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`❌ ${errorMessage}`);
    process.exit(1);
  }
}

main();
