import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import dayjs from 'dayjs';
import { config } from '../../src/config/index.js';
import { dbManager } from '../../src/models/index.js';
import { JiliDb } from '../../src/spider/jili/jili_db.js';
import { decryptResponseBuffer } from '../../src/spider/jili/jili_utils.js';
import {
  AckType,
  GameInfoAck,
  SpinResponse,
} from '../../src/spider/jili/proto/general/astarte2_196.js';
import { dataToBuffer } from '../../src/utils/dataToBuffer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataDir = join(__dirname, 'data');

const base64String: string = '';
const hexString: string = '';
const escapeString: string = '';
const hexDumpString: string = `2A E0 02 5F 00 E8 DA 40 22 4D 1F C5 4B 8F A3 35
AE 49 3B E7 5E EA AB B1 A3 2A 74 68 EE E0 92 03
A7 83 A2 55 5A A2 5A 37 BA D5 C5 01 30 C7 F6 FE
3E 54 DF 59 A4 96 22 83 BD 01 A4 E8 EC 18 23 DB
69 82 3D 84 2A 4A 6B 50 6D C5 B5 F6 3D 9E B4 5D
6E 88 CC B8 B8 83 D2 D3 3A F8 F4 4B 3B 96 64 6B
5C A2 EB 1C 34 1D 0A CA 1F 8C 2E E4 3F 0E 6E 1E
7A 68 C3 A8 8E D7 6D 15 48 14 47 BB AF 5C CA 49
AC F5 FF 45 D3 34 51 5C 48 13 52 7C F8 D3 B6 A8
AB 53 57 6F ED 5E 72 84 18 B0 71 CB 23 E9 1D 27
FF 25 C1 C4 10 48 89 5D D4 8B 62 00 75 FA C0 23
A7 A1 3B E1 F1 9A 2D 22 E8 AF 52 F9 AD F6 9D B3
8F 04 99 93 85 70 DD 11 A7 E4 4B 59 8D BC 85 13
9E A1 F6 78 3F 93 D3 EB C1 C4 10 1D 44 5C 47 83
6B 9F 6A 04 6B 78 EF EA 04 E2 9B A4 B2 96 6A 5B
7D C3 9D A0 1B 74 B0 2E E8 8D 22 48 44 FC 5E B5
55 7E 45 08 B6 BB 24 03 EB 0A 9D C0 12 04 20 EB
DA 0A 51 08 D4 9D AF C3 61 F7 AE E7 48 9D 55 76
38 76 41 B1 0A 64 14 68 3E 38 F7 05 57 C1 DA 07
94 0B 9D 53 36 18 9F 08 4E 79 42 4E 8B 77 11 33
3D 27 F1 F5 1A D8 80 30 95 BD 7D C1 0A 63 F0 3A
0C D6 2B 12 D3 B1 F7 73 F4 82 B1 13 04 0A 6D 97
D7 8F 44 32 0C 08 8A 97 E0 D0 06 10 E5 EC A9 93
01`;

const token: string = 'd0ea8156b202d497b73b7aaa6595fe5a06054695';
const gameName: string = 'cc';
const gameInfo: boolean = false;
const type: number = 0;

function getAckTypeName(ack: number): string {
  return AckType[ack] || `Unknown(${ack})`;
}

async function decodeResponse(buffer: Buffer, token: string, gameName: string, jiliDb: JiliDb) {
  try {
    const { gaiaResponseData } = await decryptResponseBuffer(buffer, token, type);
    if (gameInfo) {
      const gameInfoAck = GameInfoAck.fromBinary(gaiaResponseData);
      console.log(`🔓 解密成功，gameInfoAck: \n${JSON.stringify(gameInfoAck, null, 2)}`);
      return {
        ackPbName: 'GameInfoAck',
        ackType: AckType.info,
        data: gameInfoAck,
      };
    }
    const spinResponse = SpinResponse.fromBinary(gaiaResponseData);
    const { data: spinResponseData, spinReq } = spinResponse;

    console.log(`🔓 解密成功，gaiaResponseData，spinReq: \n${JSON.stringify(spinReq, null, 2)}`);

    const gameProto = await jiliDb.getProto(gameName);

    let ackPbName: string;
    const ackType = spinResponse.spinType;
    switch (ackType) {
      case AckType.spin: {
        // ackPbName = 'JPInfo';
        ackPbName = await jiliDb.getSpinPbName(gameName);
        break;
      }
      case AckType.info:
        ackPbName = await jiliDb.getGameInfoPbName(gameName);
        break;
      default:
        throw new Error(`不支持的 ackType: ${ackType} (${getAckTypeName(ackType)})`);
    }

    console.log(`📦 使用 proto 消息类型: ${ackPbName}`);

    const ackMessage = gameProto.lookupType(ackPbName);
    const spinAckData = ackMessage.decode(spinResponseData);

    return {
      ackPbName,
      ackType,
      data: spinAckData.toJSON(),
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(`解析 Response 失败: ${errorMessage}`);
  }
}

async function main() {
  try {
    if (!token) {
      console.error('❌ 请设置 token 变量');
      process.exit(1);
    }

    if (!gameName) {
      console.error('❌ 请设置 gameName 变量');
      process.exit(1);
    }

    const dataBuffer = dataToBuffer({ escapeString, base64String, hexString, hexDumpString });

    if (dataBuffer.length === 0) {
      console.error('❌ 输入数据为空');
      process.exit(1);
    }

    await dbManager.initDB(config.serverConfig.db, config.provider);
    console.log('✅ 成功连接到数据库');

    const jiliDb = new JiliDb({ db: dbManager, config });

    const decoded = await decodeResponse(dataBuffer, token, gameName, jiliDb);

    const jsonData = JSON.stringify(decoded, null, 2);
    console.log('\n📊 解析结果:');
    console.log('='.repeat(80));
    console.log(jsonData);
    console.log('='.repeat(80));

    mkdirSync(dataDir, { recursive: true });
    const outputFile = join(dataDir, `response_${gameName}_${dayjs().format('HH:mm:ss')}.json`);
    writeFileSync(outputFile, jsonData, 'utf8');
    console.log(`\n✅ 结果已保存到: ${outputFile}`);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`❌ ${errorMessage}`);
    process.exit(1);
  } finally {
    const db = dbManager.getDB();
    if (db) {
      await db.close();
    }
  }
}

main();
