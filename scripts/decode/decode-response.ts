import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import dayjs from 'dayjs';
import { dbManager } from '../../src/models/index.js';
import { AckType } from '../../src/protoGeneral/astarte2_196.js';
import { JiliDb } from '../../src/spider/jili/jili_db.js';
import { config } from '../../src/utils/config.js';
import { dataToBuffer } from '../../src/utils/dataToBuffer.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataDir = join(__dirname, 'data');

const base64String: string =
  'data:application/octet-stream;base64,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';
const hexString: string = '';
const escapeString: string = '';

const token: string = '7750984806115f2fb96c28b3e0d6f25fe0df01cd';
const gameName: string = 'ge';

function getAckTypeName(ack: number): string {
  return AckType[ack] || `Unknown(${ack})`;
}

async function decodeResponse(buffer: Buffer, token: string, gameName: string, jiliDb: JiliDb) {
  try {
    const spinResponse = await jiliDb.getGaiaResponseData(buffer, token);
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
