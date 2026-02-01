import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import dayjs from 'dayjs';
import { dbManager } from '../../src/models/index.js';
import { AckType, SpinResponse } from '../../src/protoGeneral/astarte2_196.js';
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

const token: string = '914d4f79121eca13be8067851c261517f07546dd';
const gameName: string = 'tct2';

function getAckTypeName(ack: number): string {
  return AckType[ack] || `Unknown(${ack})`;
}

async function decodeResponse(buffer: Buffer, token: string, gameName: string, jiliDb: JiliDb) {
  try {
    const { gaiaResponseData } = await decryptResponseBuffer(buffer, token);
    // const gameInfoAck = GameInfoAck.fromBinary(gaiaResponseData);
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
