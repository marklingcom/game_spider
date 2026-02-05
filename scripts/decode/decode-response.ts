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

const token: string = 'a4c07a37e170771c89fd0bf7653606c2d2fdc11f';
const gameName: string = 'tct';

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
