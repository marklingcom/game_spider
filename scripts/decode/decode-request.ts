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
} from '../../src/providers/jili/proto/general/astarte2_196.js';
import { dataToBuffer } from '../../src/utils/dataToBuffer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataDir = join(__dirname, 'data');

const base64String: string = '';
const hexString: string = '';
/** 空格/换行分隔的 hex dump（抓包、DevTools 等复制的格式），优先级高于 hexString */
const hexDumpString: string = `08 01 12 3C 0A 04 4F 53 20 58 12 05 65 6E 2D 55
53 1A 20 0A 06 63 68 72 6F 6D 65 12 09 31 34 38
2E 30 2E 30 2E 30 1A 05 65 6E 2D 55 53 20 BE 0B
28 BC 07 22 00 2A 09 4D 61 63 69 6E 74 6F 73 68
1A 14 69 C2 FB 6E 0A 9E E7 DB AE 9E 9B 8E 01 8B
D9 6A 7B E6 6C 8D 22 20 E5 98 56 F3 B8 39 53 1E
05 40 A0 DD 14 4C 0D 8E 19 EB 57 C5 C4 9B C8 73
0B A4 83 76 5B DC 62 56`;
const escapeString: string = '';

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
    const dataBuffer = dataToBuffer({ escapeString, base64String, hexString, hexDumpString });

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
