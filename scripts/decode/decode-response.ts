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
  'data:application/x-protobuf;base64,GiBjZTI2ZWMzZDRhN2NmNWRiY2MwMjFiODMxMGM4MWY0ZSqgAwEx9/sduutfTnXZ1OxPQkSUg+r+AMo9TYA2qtn0PrR7LOeQCZMskt8uM2qwm0+T1vHVQPD2IXz1kgLZvf23TNLC6/oeQ4mJuJJ/viKnQVY6dbSGOS6SuPLoINHKUoVfVJyNZJXLZMvaYNrgUxcFedajqXu++PBqlmJzmX0mvv9bJeYEUoXpo9P1cj0YoKflZYMdbLYkjKJyWPGT50g/bz4yezghDwV+FxiP/1L1ZX7ec65XHemwj9YrmRh9HIfI2WNzDnJBZS4VHubonbQE3U/aHDa8m67PWp/p5O9LKJySSXlVS+CIVh+br/lXCSBZcF7VCKQ8uv1iN2SldIk3wGhbPpjSuA8dB/KYlefpAUB8PVGsPAMLdPpE91e+fuSDVtMqUAduvtDf0LXAtn9rAL/Za7gNRdwpTubsbQchI3Cs0tBWR/rSIGp3NSh8R1RTtuG8n6MUql9qtyGjJPqjIS7Yna2c5hI2HcbJuihOJ439vATBCsazjgywkK1JipyKvadiZKUvy/wtmKWiykzwfzYKjuyu6zCXoDWFL3iZaoU+';
const hexString: string = '';
const escapeString: string = '';

const token: string = 'ce26ec3d4a7cf5dbcc021b8310c81f4e';
const gameName: string = 'mpt2';

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
