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
  'data:application/octet-stream;base64,KoANR8YxN4s0oH/pU+sak0FlYEuE2bXxdImD+U3qLh1wvugXdV1At+2eeDc+a2Fp6HKWfIk5Ly4WpgWox8GArGrdmn7PMtzDyg6oTfu7o5/cD9y7OQvrPJJqkSWoaZCYNudMKwyiXDoqAbHjrVH3tL+ayy8p9IDamlYzs7ov0x3uxk4+SiIuFPAksZE7KI+nTND49klO9P4YjUfEQ8Y2qUW69BEUYPC/8z+10N+/rcZfFKPa3WVD9T6wVfpOVQnis2sfbwRkjFJIy9Z2rXeXrCdfbYpdKqatCSSpPUOCqIyfafYxrLp7iP87CUzFEq9bkrduZxYXLqnDNnm3Sa7iFju3WguByK5tZ28fFGsvQ+JpjYD/d1Ng3RuPKaR28wk0cWiGiY9fi/p0t+sqKerioYRJhwiahVsl9jQG5VLkGG3wQ/GnewTOJ7NsuEp87FCU28eOfYgElBzmwuQyo8GYtv7O0/EMpvtmNnFzR4i9U49c8LxGaHgGvF2hKnmrPVDFZnz6cBRw2lw7OPdoFroE7eTFw5UUVKJQgWbku1+2b8AazXCgOwmVZ1sJ7qVH2o5ds5s79mV85NSPIsGdxOY5183eEBfcW26cbcQSeX6bvRDLhWFPYJRHJF+gndNYie39jqkg9a0pJNy1w7wBgYMb/MZhNKw2Ru8/al4YMXocZhCv04rLoX4YyNZy8Ru0tXwsnVjlWX35FduLRzh2NySYBgibPy94nhuUZWEyC+Bit1dy17o5vFfCeJvc7Fj4btpiJ0rYCPXvV2lwcZ3hqajX2alqsbGX5Iv7enBHxst3jqUrcUaD5EvXuGSsI/mXyZebRw9jef5oSEGD6cyna5PgYzUVoVns1sRiRy8p8rIKfkWnC/pXKBhsV3ctmziyjnc7rimrtROFbxbqPbKTOaP2NRfyO5icgOO8ZzsCkVHnyvkMk8+o0RvtKZemGQcnPnr117C3SPh72nCj52W+wsEmDXDJzsFKCCyUgsuHREnHeX3fmTfx7QuxMgOHGpYTPWcefmBLzMCv9lVqMC8Vc9lysQ2BBnfmV9IeKM/7+wxYGVLKXb0fy8q7R8REwCVVrztCyTtblF2ooN7dPkkvGbxTL8zzUW3zpvuz6znfem61fk1FH1fqL1JaMFIyV9355WHcidvjTIwToPms+JntZY1T24sJ9gMoZpwE+hco3mzIQYTJG/Oe7fEdmMm9re+/zz8PELYHpYbjw21DjWs9RCLaqnzqWECz4sXazD1h/xeJlL9DBwGuiQQuIisM3qofj/w1v3c2SKrXlvPezDMwJ0hu7bygjjuMQL+XQm1fCHTcu7OwBUxLBnoMnWA96LvLKjhrb9c4/yLssQAa5kTxvsNbV837mxf6se9UuZKYo7opeO2V7JrXxffHLFdpQM29L76M4NAlngThvWOp4DPLvg4wyz9BBnJhPvZD3Q4d1eGUwloEqVIskpm/t2HciyFhL/6QKGLqP+xn7U7iF8gk/WMqqsCcftfv5ENkP8H6H2VaTUA4xbiPfErnMXqgsiN2khVTh6691xIGesciYNF58Y1nsAoOrSJbynNgtB6KeaSx1VLzx456wUtGyDu/Zda0Q8eKrI2r6Kae0bMJ62bfIClGCgMIdxsx05CsaudjYgq71JVljNgB00UcDDouw3QhfGfJwdjIdvJlhi/gzyrrfNUnwOr9vbzzh6dSiiMFvzv6wlGpbOdXGetQcQZxp37lWzt9TEa8k1I5xQ+4MNVJhc3+YioSKNlh0cdIMJlK3vFrtjgR320D9UV7djpg3caQnug0zzGRwbBCRDy+HBlpl2nhuc2IHQ6ZSAe8W56sVt+kZhng4SHJvs2yGPky5+EogDGSmw8fpKxdfWpUwrIM8VCB7GsuIKmec3NecrwpbyDdpxTXnDltDnkffeJWLqVLn3d7iRLiGvOHiPjHnkI6oxk7YdgDHaFTnYuEhbX6ptb4r5BoheZ+Cg1vfNTYsrK//oAY7OORXrdr0Jg+vNSNV7jmBdJnFRVlEfeZKOHznrA8F+xO+54vPKoIXzT+AHQHwxC7kdnIdKFoUUm1X4zvgbjrwfFiKTbqLfCWw135YtjiSSzH15cbtMGre6tyUgRSlrq8/UCbHL43zczrpd0IfzZyYYYImgD33vNis6sF9IMPKRVv8JCFdeUm4hPL5ZqS1/tit0Hsq4Ya97z0nX56J0Yr6mMO/lO79TB9UnlIqcXpAqGjWKcyDAjJ+5nOBhC3geu5AQ==';
const hexString: string = '';
const escapeString: string = '';

const token: string = 'a86c95eed0ed70a88f84b2b04ecd67e337af8f48';
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
