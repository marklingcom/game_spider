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
  'data:application/x-protobuf;base64,KpAPczZZaXNXNTdiTkdJcTVlNV8vX4Wl38vmHTK4vITCTLNzP4pvZ3HutSUEVzNCg/HteogBFxQTVdaojed0SbLX+n+7akLuopNbNSNq9qA7yvZ1pLJ4S6jAsiQlKg0CHT6lPO6XVvZUhrfxjUyoBswKmigDEIkVqKdCNh8xgfTEE02TekFTwGcV9E9B/A/DOBhZQ2z6Ffj4tHqDC2svywoC0tzMZm+LnnShnqjfl0/N8yZZeOeB3Bx6yUx0y2/qQEoh+fnRBpWPWn9XacdgxHMMi1k4pKkdKOuTJcqWztfHBOn5kNPCnMwl4HAd/hiPsOyoCJazp91pLfr97DBWmtt2Gbtk4DAbllPFF2+6w0VpKM0U0nq5xjsqLdnKDf2zwdXyPoTqEfqsACYKl++ntzajb3gCsUcckGTq7qV5UBbO8Lw+6dklNyHlnAHAWyRTxWTe79I/u5PvzZspyCVCMIfPMSFXmeI62+NDY9PIHHAXqO83dy0qIT/h372zeq60+SaEFCWeQWy3Co1zHkQg4BefOUTc9ryiYcACuQNLrm5cPjtRk+vzsupQAo+T7TwaWea+YaEAd14gKchutHOt7yhrD3bh+K1jYL7gD0yHrM0Lo1N/M5YN2i4khFtyz9hAjbyzL+NRgEdV/AjZmID6QiCMsx5JdMdkvX+3soltklJTg+5RONM+l+nIxG1GnHNZLYKSYnc936NmVHmxEyBvO42s9V/8I/K3pL92mJBKIEipl60WShcQxO0VOhJZek6vKb4YsTz8LJMl7zGYzxfHWYl3ufQsYmv7/SWTCKWMW9D1L6xo5toV4ewsWYvJ+gbtZSiF13mSMSqRPD7+HvWkWUIoZ47cTE+3Eba4o1q/KkKXKLjf/Oh3qov1qmIlTWxrQHp4nPz1PIXGx9ND+dub+Y96G5bYptpUluXzPP2TGdBT6xf0NPpPTWb2YsWCw57eBoGxsRDbFdXwGTW7qOjPfN6b5/OO9F/4PWNdiLjxnIvhDlFYCNUCl7/AkTfO06biJ1PzgQyHe9cExjnQQcm31A0hhh/9/eKkxQNV6Y2Mg0ARU9FoDmWNza7g7G0YBqf+Yjfx6ueutkgeF33sF/SINoGoo8mWa/pO+BFXGrNLQIncSm6KHSNyin7Re43Nc0OK4t6TlrlLJqwHPWyiSq84H6ByS8Aiz4iRcHqKkjHh/I8EAPW96Asllv/6y78XQlDUVZIwvODi9HjeXIWEyIWcg4I0SuiTwPj1FMPYCTETww6lciw715E30dW7FAW7oiu9eLdKC2sxCT4cJAH6aaI9lwniz/UIUVamMmkCaZWaoA1U+2IwYgcSFXnVkhVE45V8i4Yrlc+mVCgXJxdlcg80DAEFg71ML9Ue1bxXo4UTqjfczLDjqvbEFDbSFkN7v9dWiTl8LTd92IoLth6GE3ic+A7f3oj52DbU/Hbe3OBHCIBTPONRHjez5aJDKATcTdIQH23eoNEx/Bb1sStML+YNndZs40UFw0XRmBZkZhmeyKY8WfZDIi7Mmeq/5Yr4eFX9NsUx8hBwVN6Y1OhbbM++bxiCjT2n6vu1oyKMDBkfA93dN457zx3BaI5x7vwRU8pabdRKvwF6E51hYb3QrMKiOZAFok6Y47lZ9Ahdz2iJJBJBsp8f8YGnhaAzqFxVipPbHXj3owbre7xZP2QI3sPfTpIUrKefmyacCDt54gLiJPk/RSq8EIBZ+vL34YXrwVE6igyMYl7CTE9Yp/gpzkf6Jkj4ttqYRFrPpL55iEBGPXfXQe7UByujwnQ66OeKTRZerPziIlB8QuZICnS717kgvZ3TkAVkFnABtpyiPGsEJXn36KmpjkzS01jEpMCHW4ho63Kkz2h3k7fOhdfHEf8dBT2OJRo8MSg6ZEbj21TjgQgKfLtuu3lFdlkIyjl8qDrcP8lQ12Y+NMJnyoNQK1QIR/v2u0WeBn36Dx5tzJz3yGhCO49l+MUuRFvlrpxvl1AU8Z2DDpMTRoCHNM4UtdQQbiuTUmIYDv0UfgQvWKk/t8OFbREjzvM7gYfdm2JkK4UsV3PUHoPbYEwkKMztkdve/0dygMM2OI8Pg+pR6CjTeSMJZpxmCsVDDBDr9UNLeLURHlai8fXkoPI2cRqRJcB23YQspT2RmTFrZ4GCvDsH1ZdWqKGp/9+a4QLaRiAzgSGvLs04YFAdmK7M0WOki9i2Sf5kok+a8pS35UnCmWVySVQseyiAX8eL32AL2wixjb8ClgmoFLlGGnAaHBT0UIb/pbxjzeVmAw+I/SUPm8/qke8H60stDEOBduWjIYVpDCH72xezVQOyr5cS1/q0Dlu89cmMjd9BQpX8HzlB4etPioFPmVN6s8pHLeXLDF2KPxgToeITVKCYPP70bIdivXvyT7XEf7IXeaanDXlpZpSST5fbIcYDlt+RnIbf6lWfMx4XJtRJ4r5Rz8RggiQbAMTlar8y54JCOgzXUtMnkqJ3PoZ0WKdySsgYfOEl0XGGErHGe4tUbyaScjn8UXHHx4L1is4Wvw9VFTNAnZtVxhwWtnsn72/IPXf+kzqR9fv8iRhS4CGt2k+7sGiN0QUNB3+dx3V1yw==';
const hexString: string = '';
const escapeString: string = '';

const token: string =
  'eyJQIjo1MTU5OTAsIkUiOjE3NzQ0NDc2NzQsIlMiOjEwMjIsIkQiOiJqaWxpXzI2X3N3ZWV0aGVhcnQzIn0.kIEFTLjVNnjNlIsxFLlj9JKb_bo5Kd1kWEaNcrQR6Js';
const gameName: string = 'sweetheart3';
const gameInfo: boolean = false;
const type: number = 1;

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
