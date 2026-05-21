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

export function dataToBuffer(
  options: {
    escapeString?: string;
    base64String?: string;
    hexString?: string;
    /** 空格/换行分隔的 hex dump，与 hexString 二选一 */
    hexDumpString?: string;
  } = {}
): Buffer {
  const { escapeString, base64String, hexString, hexDumpString } = options;
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

  const hexInput = hexDumpString || hexString;
  if (hexInput) {
    try {
      const data = parseHexInput(hexInput);
      const source = hexDumpString ? 'hex dump' : '十六进制';
      console.log(`📥 从${source}字符串读取数据 (${data.length} bytes)`);
      return data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      throw new Error(`十六进制解码失败: ${errorMessage}`);
    }
  }

  throw new Error('请在脚本中设置 base64String、hexString、hexDumpString 或 escapeString 变量');
}

/** 支持连续 hex、0x 前缀，以及空格/换行分隔的 hex dump（如抓包复制格式） */
export function parseHexInput(hex: string): Buffer {
  let cleanHex = hex.trim();
  if (cleanHex.startsWith('0x') || cleanHex.startsWith('0X')) {
    cleanHex = cleanHex.slice(2);
  }
  cleanHex = cleanHex.replace(/[^0-9a-fA-F]/g, '');
  if (cleanHex.length === 0) {
    throw new Error('十六进制字符串为空');
  }
  if (cleanHex.length % 2 !== 0) {
    throw new Error(`十六进制长度必须为偶数，当前为 ${cleanHex.length} 个字符`);
  }
  return Buffer.from(cleanHex, 'hex');
}
