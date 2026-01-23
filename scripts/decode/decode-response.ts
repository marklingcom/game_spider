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
  'data:application/octet-stream;base64,KrAD8WAKbCEP5OXDFRjCiBuRdSCSnJkhg/y2qsVE04VSHqfuYdDKb/+4KfDj1M8Gs1Pw0omwuF9PIcztit0MDeu8tDzLkF1tqaG9bh3nEYSjeRg1panfm2wBy+JKEQUkqnXzPiq/18VlTjn1+lGmCGmCecpbXBc7iMxq9/5Jn0wlxTOuoAsm++76BFGGjJ0JtJQVk+EpDTPxPkxMqXfOHb0uGQe+tj0j0VdGK5sIyeveExs/Qaw8oaLXIr60CjnTLxwhL8fyip1kUpVgDFdtfYiJ8MaoHW2p0Vr75m4BFeCUFEA+52Ih/x+eExBuxxyo7PO4Qy+xdsqPC+5Mf8KV2o3PyaBYifgujBiKQmgh53y3i1V3OkT7RFVGc9FwQKUERn8kb0/5P9UMi7DjVC/F6YZxSnetI5RA0zgc1OkFPtNda0I3MdUSUDg7ubPJW3ckObk7CzjyyeIdg1EEiKccgLi/exCQukpjKRogdJiDDBU63jKeK/vQG9GJZXtH5fFcUYrD1zUmFenI/0jU+vYPZzwhZOWEqo/5ZRlLKIamJesGSbigTJ8TipnXKEbX55k2GZy1MgwIuOLMywYQotbdpAI=';
const hexString: string = '';
const escapeString: string = '';

const token: string = 'b86eafd0aac8eb08ba341868774f068169520353';
const gameName: string = 'mpt2';

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
      case AckType.spin:
        ackPbName = await jiliDb.getSpinPbName(gameName);
        break;
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
