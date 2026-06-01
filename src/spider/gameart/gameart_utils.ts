export interface GameArtSessionConf {
  sid: string;
  kid: string;
  key: string;
}

export function encodeGameArtText(text: string, key: string): string {
  return vigenere(text, key, true);
}

export function decodeGameArtText(text: string, key: string): string {
  return vigenere(text, key, false);
}

function vigenere(text: string, key: string, encode: boolean): string {
  if (!key) {
    throw new Error('GameArt key 为空');
  }

  const keyValues = [...Buffer.from(key)].map((value) => value - 32);
  const textValues = [...Buffer.from(text)].map((value) => value - 32);

  let keyStart = 0;
  const out = textValues.map((value, index) => {
    if (index % keyValues.length === 0) {
      keyStart = index;
    }

    const keyValue = keyValues[index - keyStart];
    if (keyValue === undefined) {
      throw new Error('GameArt key 索引异常');
    }

    let next = encode ? value + keyValue : value - keyValue;
    if (next >= 95) {
      next -= 95;
    }
    if (next < 0) {
      next += 95;
    }
    return next + 32;
  });

  return Buffer.from(out).toString();
}

export function decodeKid(kid: string): string {
  if (!kid) {
    throw new Error('GameArt kid 为空');
  }

  const all: number[][] = [];
  for (let i = 0; i < kid.length; ) {
    const chunkLen = Number(kid[i]);
    if (!Number.isInteger(chunkLen) || chunkLen <= 0 || chunkLen > 9) {
      throw new Error(`GameArt kid 格式错误: ${kid}`);
    }
    i++;

    const chunk = kid.slice(i, i + chunkLen);
    if (chunk.length !== chunkLen) {
      throw new Error(`GameArt kid 长度错误: ${kid}`);
    }
    i += chunkLen;

    const n = Number(chunk);
    if (!Number.isFinite(n)) {
      throw new Error(`GameArt kid 数字片段错误: ${chunk}`);
    }

    const bits = reverseBits(n);
    while (bits.length < 8) {
      bits.push(0);
    }
    bits.reverse();
    all.push(bits);
  }

  const tmp = all.flat();
  const nums: number[] = [];
  while (tmp.length >= 3) {
    const nn = tmp.splice(0, 3);
    nn.reverse();
    nums.push(bitsToNumber(nn));
  }

  let readingCount = true;
  let count = 0;
  let charValue = 0;
  const out: number[] = [];
  for (const n of nums) {
    if (readingCount) {
      readingCount = false;
      count = n;
      if (charValue !== 0) {
        out.push(charValue);
      }
      charValue = 0;
      if (count === 0) {
        break;
      }
      continue;
    }

    count--;
    charValue += 1 << n;
    if (count === 0) {
      readingCount = true;
    }
  }

  if (charValue !== 0) {
    out.push(charValue);
  }

  const key = Buffer.from(out).toString();
  if (!key) {
    throw new Error('GameArt kid 未能还原 key');
  }
  return key;
}

function reverseBits(n: number): number[] {
  const bits: number[] = [];
  let value = n;
  while (value !== 0) {
    bits.push(value % 2);
    value = Math.floor(value / 2);
  }
  return bits;
}

function bitsToNumber(bits: number[]): number {
  const values = [...bits].reverse();
  return values.reduce((sum, bit, index) => (bit === 1 ? sum + (1 << index) : sum), 0);
}

export function parseGameArtSessionConf(html: string): GameArtSessionConf {
  const sid = extractSessionField(html, 'sid');
  const kid = extractSessionField(html, 'kid');

  if (!sid || !kid) {
    throw new Error('GameArt HTML 中未找到 sessionConf.sid/kid');
  }

  return {
    sid,
    kid,
    key: decodeKid(kid),
  };
}

function extractSessionField(html: string, field: 'sid' | 'kid'): string {
  const sessionIndex = html.search(/sessionConf/i);
  const source = sessionIndex >= 0 ? html.slice(sessionIndex) : html;
  const pattern = new RegExp(`["']${field}["']\\s*:\\s*["']([^"']+)["']`, 'i');
  return source.match(pattern)?.[1] ?? '';
}
