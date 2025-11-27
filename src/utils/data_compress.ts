import { promisify } from 'node:util';
import { brotliCompress, brotliDecompress, constants, gunzip, gzip } from 'node:zlib';
import zstd from '@mongodb-js/zstd';

const brotliCompressAsync = promisify(brotliCompress);
const brotliDecompressAsync = promisify(brotliDecompress);
const gzipAsync = promisify(gzip);
const gunzipAsync = promisify(gunzip);

export enum CompressType {
  None = 0,
  Brotli = 1,
  Gzip = 2,
  Zstd = 3,
}

export async function compressData(compressType: CompressType, data: Buffer): Promise<Buffer> {
  switch (compressType) {
    case CompressType.None:
      return data;
    case CompressType.Brotli:
      return compressDataBrotli(data);
    case CompressType.Gzip:
      return compressDataGzip(data);
    case CompressType.Zstd:
      return compressDataZstd(data);
    default:
      return data;
  }
}

export async function decompressData(compressType: CompressType, data: Buffer): Promise<Buffer> {
  switch (compressType) {
    case CompressType.None:
      return data;
    case CompressType.Brotli:
      return decompressDataBrotli(data);
    case CompressType.Gzip:
      return decompressDataGzip(data);
    case CompressType.Zstd:
      return decompressDataZstd(data);
    default:
      return data;
  }
}

export async function changeCompressType(
  fromCompressType: CompressType,
  toCompressType: CompressType,
  data: Buffer
): Promise<Buffer> {
  if (fromCompressType === toCompressType) {
    return data;
  }
  const decompressedData = await decompressData(fromCompressType, data);
  return compressData(toCompressType, decompressedData);
}

function getMinCompressionRate(dataSize: number): number {
  if (dataSize < 5 * 1024) {
    return 25;
  } else if (dataSize < 50 * 1024) {
    return 15;
  } else {
    return 10;
  }
}

export async function compressDataWithThreshold(
  compressType: CompressType,
  data: Buffer,
  minCompressionRate?: number
): Promise<{
  data: Buffer;
  compressType: CompressType;
  compressionRate: number;
  threshold: number;
}> {
  if (compressType === CompressType.None) {
    return { data, compressType: CompressType.None, compressionRate: 0, threshold: 0 };
  }

  const originalSize = data.length;
  const compressed = await compressData(compressType, data);
  const compressedSize = compressed.length;
  const compressionRate = (1 - compressedSize / originalSize) * 100;

  if (compressedSize >= originalSize) {
    return { data, compressType: CompressType.None, compressionRate, threshold: 0 };
  }

  const threshold = minCompressionRate ?? getMinCompressionRate(originalSize);

  if (compressionRate < threshold) {
    return { data, compressType: CompressType.None, compressionRate, threshold };
  }

  return { data: compressed, compressType, compressionRate, threshold };
}

async function decompressDataBrotli(data: Buffer): Promise<Buffer> {
  return brotliDecompressAsync(data);
}

async function compressDataBrotli(data: Buffer): Promise<Buffer> {
  return brotliCompressAsync(data, {
    params: {
      [constants.BROTLI_PARAM_QUALITY]: 11,
    },
  });
}

async function decompressDataGzip(data: Buffer): Promise<Buffer> {
  return gunzipAsync(data);
}

async function compressDataGzip(data: Buffer): Promise<Buffer> {
  return gzipAsync(data, { level: 9 });
}

async function decompressDataZstd(data: Buffer): Promise<Buffer> {
  try {
    return zstd.decompress(data);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(`Zstd decompression failed: ${errorMessage}`);
  }
}

async function compressDataZstd(data: Buffer): Promise<Buffer> {
  try {
    return zstd.compress(data, 22);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    throw new Error(`Zstd compression failed: ${errorMessage}`);
  }
}
