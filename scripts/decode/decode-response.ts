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

const token: string = 'ea6bfafe420ad619b04cccb817bbaa118f953000';
const gameName: string = 'tlp';

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
