import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { AckType, InfoReq, Request, SpinReq } from '../src/protoGeneral/astarte2_196.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataDir = join(__dirname, 'data');

const base64String: string = '';
const hexString: string = '';
const escapeString: string =
  '\u0012"\u0009\u0000\u0000\u0000\u0000\u0000\u0000ð?º\u0001\r\u0008\u0000\u0010\u0000\u0019\u0000\u0000\u0000\u0000\u0000\u0080C@Ê\u0001\u0006\u0008\u0000\u0010\u0000 \u0000';

function getAckTypeName(ack: number): string {
  return AckType[ack] || `Unknown(${ack})`;
}

function parseEscapeString(str: string): Buffer {
  let cleaned = str.trim();
  if (cleaned.startsWith("$'") && cleaned.endsWith("'")) {
    cleaned = cleaned.slice(2, -1);
  } else if (cleaned.startsWith("'") && cleaned.endsWith("'")) {
    cleaned = cleaned.slice(1, -1);
  }

  const bytes: number[] = [];
  let i = 0;

  while (i < cleaned.length) {
    if (cleaned[i] === '\\') {
      if (i + 1 >= cleaned.length) {
        throw new Error('无效的转义序列：字符串末尾的反斜杠');
      }

      const next = cleaned[i + 1];

      if (next === 'u' || next === 'U') {
        const hexMatch = cleaned.slice(i + 2).match(/^([0-9a-fA-F]{4})/);
        if (hexMatch) {
          const code = parseInt(hexMatch[1], 16);
          bytes.push(code & 0xff);
          i += 6;
        } else {
          throw new Error(`无效的 Unicode 转义序列：${cleaned.slice(i, i + 6)}`);
        }
      } else if (next >= '0' && next <= '7') {
        const octalMatch = cleaned.slice(i + 1).match(/^([0-7]{1,3})/);
        if (octalMatch) {
          const code = parseInt(octalMatch[1], 8);
          bytes.push(code & 0xff);
          i += 1 + octalMatch[1].length;
        } else {
          bytes.push(next.charCodeAt(0));
          i += 2;
        }
      } else if (next === 'x') {
        const hexMatch = cleaned.slice(i + 2).match(/^([0-9a-fA-F]{2})/);
        if (hexMatch) {
          const code = parseInt(hexMatch[1], 16);
          bytes.push(code);
          i += 4;
        } else {
          throw new Error(`无效的十六进制转义序列：${cleaned.slice(i, i + 4)}`);
        }
      } else {
        const escapeMap: Record<string, number> = {
          '\\': 0x5c,
          "'": 0x27,
          '"': 0x22,
          n: 0x0a,
          t: 0x09,
          r: 0x0d,
          a: 0x07,
          b: 0x08,
          f: 0x0c,
          v: 0x0b,
          '0': 0x00,
        };
        if (escapeMap[next] !== undefined) {
          bytes.push(escapeMap[next]);
          i += 2;
        } else {
          bytes.push(next.charCodeAt(0));
          i += 2;
        }
      }
    } else {
      const charCode = cleaned.charCodeAt(i);
      if (charCode > 0xff) {
        throw new Error(`字符超出字节范围：${cleaned[i]} (U+${charCode.toString(16)})`);
      }
      bytes.push(charCode);
      i++;
    }
  }

  return Buffer.from(bytes);
}

function parseReqByAckType(ack: number, reqData: Uint8Array): SpinReq | InfoReq {
  switch (ack) {
    case AckType.spin:
      return SpinReq.fromBinary(reqData);
    case AckType.info:
      return InfoReq.fromBinary(reqData);
    default:
      throw new Error(`未知的 ack 类型: ${ack} (${getAckTypeName(ack)})`);
  }
}

function decodeRequest(buffer: Buffer | Uint8Array) {
  try {
    const request = Request.fromBinary(buffer);
    const ack = request.ack;
    const req = parseReqByAckType(ack, request.req);

    return {
      ack,
      req,
    };
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(`解析 Request 失败: ${errorMessage}`);
  }
}

function parseInputData(): Buffer {
  if (escapeString) {
    try {
      const data = parseEscapeString(escapeString);
      console.log(`📥 从转义字符串读取数据 (${data.length} bytes)`);
      return data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      throw new Error(`转义字符串解析失败: ${errorMessage}`);
    }
  }

  if (base64String) {
    try {
      let cleanBase64 = base64String.trim();
      if (cleanBase64.startsWith('data:')) {
        const commaIndex = cleanBase64.indexOf(',');
        if (commaIndex !== -1) {
          cleanBase64 = cleanBase64.slice(commaIndex + 1);
          console.log('📝 检测到 data URI 格式，已自动去除前缀');
        }
      }
      const data = Buffer.from(cleanBase64, 'base64');
      console.log(`📥 从 base64 字符串读取数据 (${data.length} bytes)`);
      return data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      throw new Error(`base64 解码失败: ${errorMessage}`);
    }
  }

  if (hexString) {
    try {
      const cleanHex = hexString.startsWith('0x') ? hexString.slice(2) : hexString;
      const data = Buffer.from(cleanHex, 'hex');
      console.log(`📥 从十六进制字符串读取数据 (${data.length} bytes)`);
      return data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      throw new Error(`十六进制解码失败: ${errorMessage}`);
    }
  }

  throw new Error('请在脚本中设置 base64String、hexString 或 escapeString 变量');
}

async function main() {
  try {
    const inputData = parseInputData();

    if (inputData.length === 0) {
      console.error('❌ 输入数据为空');
      process.exit(1);
    }

    const decoded = decodeRequest(inputData);

    const jsonData = JSON.stringify(decoded, null, 2);
    console.log('\n📊 解析结果:');
    console.log('='.repeat(80));
    console.log(jsonData);
    console.log('='.repeat(80));

    mkdirSync(dataDir, { recursive: true });
    const outputFile = join(dataDir, `request_${Date.now()}.json`);
    writeFileSync(outputFile, jsonData, 'utf8');
    console.log(`\n✅ 结果已保存到: ${outputFile}`);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error(`❌ ${errorMessage}`);
    process.exit(1);
  }
}

main();
