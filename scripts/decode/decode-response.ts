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
  'data:application/octet-stream;base64,KpAKCR8CNbPLO0dzrThYAXRy8LuByixni9JC8YcEpDvzpU83ofimejgqjgwgcgVhQpYl5IqaRLMfnPPwSQQIQKIvl4qUpXtPQI/9Dl+2+e5m2eS9imxfcHEm0+cKKZNjUrUWdhbN/ETVkD7c4lG5KBfgQ5rWSilp5d49LKNDJDRUf/wAHuOWdKTl0+de8zGfYKJGg7CByiRZwmZIjmnmA3Tvyp6Kb0rFBSgaK8DUEnskRQDllNHPS8jz5tTlBwy0YnzOqo8MGrz4QUMMFZQcK1jVV2x82qAGQ+7DYAdQIIv4nsSTLIVhHRsnvo2xMcYz61O/K5YA2VfkJZm5CUxJP6aKeelGo4aJ9Zq7LO55jE4bJDTJoryD4ztmkIXjxU07SjRQ5VFdFnimJwRl/3DUH4qfXzt+VXMGgDu7ilp3utep8ZAB0gso04E9RLCpLebn67+K3EgXuFeqzS7uVJ8TVMBn/AocMCvLIHh9rMnKKr0/iia8D44xnOW+zIaweB0MXDgLhjfPal9NZc2mO/um/72V2ZK0eQCXXIT+z5dRE33TmZLo+/noyOs27ZCppYMg+MPtZyVPdGd5FVRbTjqXHGzSexgmrGZg2a/XSQ85lForIzz6FExxrgDS+lkzSlhujM75zJoqfWIjZ6czblPYepDGxW7G4Sbj948uXOsitJMI1YFGN16/dd6QxIiCx9nMPY76JZGRgxZcywmc88rEpZguKis8Ph+icxWX7TJcojs0wH6rMnKpjp6P5GXdfnaJEGLZla6QUYhvcKQstaEjoEUocAyGNWIhK0zQLZ8bah66YsSGEa5BTh2ayrTMEtosRue8uNlSpqlTz2/r1TmjokD3ztQcolH6Ip8O+4MTDwGUhqOQAUBxfSoLZ7hKPn3jHvtapNPQlCCvsQyoXzqf9n3sorK+dniPVL7uICXqb2zat/z2O8mgnYDgMGr7cmVfIthReiiXGymtoyF9n9CTfc7pwS8w+QBcXTIEmSSjqBizot0jMO85JFB+nh47Z6oHetWGOODu2Ngy6OGjC+exRZ9GWTN59sGBlpmGVK2tjf769mMPDSw8yaHtvtGDeNasI7ueOn5eavUnvFfxiBFvIVs3u8HGTIAPcNcMHQ1oqkK6JKsIRBMyLUDFUgBSfNuCRO+4Qfe4TMYBsh8rG63JUe29QcAN2hiceR8FqyWpg9CUZkoVGiO1/JOGiL8Ui12BHIZx6+42SG1z3iG6pSDbovA02p3/p7O8CazobYlaIMhVsS5MunGoYYHLiJDU0Dh98utjFzqWa+96StBe/T7qlO5/O40n75dDrgsJwj458yNUuUgMP1DiWHx59cGWILc4zmtAwKS07mslG2fNi+iTRDTgMZF5qEsipwpPisTBYKXR38NSiLViJdCHNlZlFCh1Tecsoh5yv+ahwK8EXKmEJ20u1rMcTAzjZ3uepp2xyYqHjc0K1KjpRjj7uxBt7DrWYUbQL4IJfm5T6Bg4ae+jLnzEBKb+JyPADEgVQZKyogc7Qgdb3L1zv/Ql09ALB+3z2VC+DPQi1f5CtpzDu5bVI0ZYLWnM16RpU1lCuqGTQcxesq9IbdndbVp+f3d133zpKtR28Wh/6YQgZWgOugqgwQMuBJAM2uy+zW4Duuw0oLsDRfKotN76tTirnaENLZtFygbHXJJy3tDNGpaApQH/FEIt7hrWoLDm3G3SYORwjlLqtABODwsgeFG8W3rTpMqMXMejMgsIp4uZzgYQ/Lr5PQ==';
const hexString: string = '';
const escapeString: string = '';

const token: string = '60883fed36377d4a805de0306b7e80b131c89769';
const gameName: string = 'dts';
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
