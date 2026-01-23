import { mkdirSync, writeFileSync } from 'node:fs';
import path, { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import dayjs from 'dayjs';
import protobuf from 'protobufjs';
import { dbManager } from '../../src/models/index.js';
import type { JiliProtoAttributes } from '../../src/models/JiliProto.js';
import { AckType } from '../../src/protoGeneral/astarte2_196.js';
import { decryptResponseBuffer } from '../../src/spider/jili/jili_utils.js';
import { dataToBuffer } from '../../src/utils/dataToBuffer.js';
import { createDirectoryIfNotExists } from '../../src/utils/utils.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataDir = join(__dirname, 'data');
const __protoDir = path.join(__dirname, '../../__proto');

const base64String: string =
  'data:application/octet-stream;base64,KqAB3yavxR8+1oYLoAEmjqPUF2GgPXU1hrmTiT5j72BdLdFle2IrhLxN1aADf+QvNxjHaaKCEXv3bcD6/fh7gPtrSYvHbjqgjkxwnmiN9w/Lg2mBCqmliS3TsTOLkdHBtUp53vRY7/bXCFTcCwwpbCwOjWlGYa+AhruBGt1O4k+VHAJlEyjFO1TmL8njjV9r2QTYhq0QhSJ8FRRqJQlvumH+5g==';
const hexString: string = '';
const escapeString: string = '';

const token: string =
  '0a0431303031120652786c3168571a046a696c6922033136349806cffccdcb06a2060c633733316432653836666432';
const gameName: string = 'pirate';
const ackType: AckType = AckType.spin;

function getAckTypeName(ack: number): string {
  return AckType[ack] || `Unknown(${ack})`;
}

async function getProto(name: string): Promise<protobuf.Namespace> {
  const jiliProtoModel = dbManager.jiliProto;
  const jiliProto = await jiliProtoModel.findOne({
    where: { name },
  });

  if (!jiliProto) {
    throw new Error(`未找到 jili_proto 记录: ${name}`);
  }

  const protoData = jiliProto.toJSON() as JiliProtoAttributes;

  if (!protoData.data) {
    throw new Error(`jili_proto 中未找到 data: ${name}`);
  }

  createDirectoryIfNotExists(__protoDir);

  const protoFilePath = path.join(__protoDir, `${name}.proto`);
  writeFileSync(protoFilePath, protoData.data, 'utf8');

  const root = await protobuf.load(protoFilePath);

  if (!root.nested) {
    throw new Error(`proto 文件中没有定义任何消息: ${name}`);
  }

  const messages = Object.values(root.nested).filter((v) => v instanceof protobuf.Namespace);

  if (messages.length === 0) {
    throw new Error(`无法加载 proto: ${name}`);
  }

  return messages[0];
}

async function getAckPbName(name: string, ack: AckType): Promise<string> {
  const jiliProtoModel = dbManager.jiliProto;
  const jiliProto = await jiliProtoModel.findOne({
    where: { name },
  });

  if (!jiliProto) {
    throw new Error(`未找到 jili_proto 记录: ${name}`);
  }

  const protoData = jiliProto.toJSON() as JiliProtoAttributes;

  switch (ack) {
    case AckType.spin:
      if (!protoData.spinPbName) {
        throw new Error(`jili_proto 中未找到 spinPbName: ${name}`);
      }
      return protoData.spinPbName;
    case AckType.info:
      if (!protoData.gameInfoPbName) {
        throw new Error(`jili_proto 中未找到 gameInfoPbName: ${name}`);
      }
      return protoData.gameInfoPbName;
    default:
      throw new Error(`不支持的 ackType: ${ack} (${getAckTypeName(ack)})`);
  }
}

async function decodeResponse(buffer: Buffer, token: string, gameName: string, ackType: AckType) {
  try {
    const { gaiaResponseData } = await decryptResponseBuffer(buffer, token);

    console.log(`🔓 解密成功，gaiaResponseData 长度: ${gaiaResponseData.length} bytes`);

    const gameProto = await getProto(gameName);
    const ackPbName = await getAckPbName(gameName, ackType);

    console.log(`📦 使用 proto 消息类型: ${ackPbName}`);

    const ackMessage = gameProto.lookupType(ackPbName);
    const ackData = ackMessage.decode(gaiaResponseData);

    return {
      ackType: getAckTypeName(ackType),
      ackPbName,
      data: ackData.toJSON(),
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

    const decoded = await decodeResponse(dataBuffer, token, gameName, ackType);

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
