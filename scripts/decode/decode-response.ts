import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import dayjs from 'dayjs';
import { dbManager } from '../../src/models/index.js';
import { AckType, GameInfoAck, SpinResponse } from '../../src/protoGeneral/astarte2_196.js';
import { JiliDb } from '../../src/spider/jili/jili_db.js';
import { decryptResponseBuffer } from '../../src/spider/jili/jili_utils.js';
import { config } from '../../src/utils/config.js';
import { dataToBuffer } from '../../src/utils/dataToBuffer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataDir = join(__dirname, 'data');

const base64String: string =
  'data:application/octet-stream;base64,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';
const hexString: string = '';
const escapeString: string = '';

const token: string = 'f421c508d1f3c103bcf9b3c0dba56264c3f693d0';
const gameName: string = 'tcb';
const gameInfo: boolean = false;

function getAckTypeName(ack: number): string {
  return AckType[ack] || `Unknown(${ack})`;
}

async function decodeResponse(buffer: Buffer, token: string, gameName: string, jiliDb: JiliDb) {
  try {
    const { gaiaResponseData } = await decryptResponseBuffer(buffer, token);
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

    const dataBuffer = dataToBuffer({ escapeString, base64String, hexString });

    if (dataBuffer.length === 0) {
      console.error('❌ 输入数据为空');
      process.exit(1);
    }

    await dbManager.initDB(config.serverConfig.db);
    console.log('✅ 成功连接到数据库');

    const jiliDb = new JiliDb({ db: dbManager, config });

    const decoded = await decodeResponse(dataBuffer, token, gameName, jiliDb);

    const jsonData = JSON.stringify(decoded, null, 2);
    console.log('\n📊 解析结果:');
    console.log('='.repeat(80));
    console.log(jsonData);
    console.log('='.repeat(80));

    mkdirSync(dataDir, { recursive: true });
    const outputFile = join(dataDir, `response_${dayjs().format('YY-MM-DD_HH:mm:ss')}.json`);
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
