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

const token: string = 'e26977b6ef867d399fd7a63ca78509e7e1a429d6';
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
