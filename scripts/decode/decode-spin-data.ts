import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { performance } from 'node:perf_hooks';
import { fileURLToPath } from 'node:url';
import dayjs from 'dayjs';
import { dbManager } from '../../src/models/index.js';
import { CompressType, compressData, decompressData } from '../../src/utils/data_compress.js';
import { SpinDataReader, type TableInfo } from '../../src/utils/spin-data-reader.js';
import { getTableGameName } from '../../src/utils/table.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataDir = join(__dirname, 'data');

function calculateCompressionStats(originalSize: number, compressedSize: number) {
  const sizeDiff = originalSize - compressedSize;
  const isCompressed = compressedSize < originalSize;
  const ratio = compressedSize > 0 ? originalSize / compressedSize : 0;
  const rate = originalSize > 0 ? (1 - compressedSize / originalSize) * 100 : 0;
  const ratioFormatted = compressedSize > 0 ? ratio.toFixed(2) : 'N/A';
  const rateFormatted = originalSize > 0 ? rate.toFixed(2) : 'N/A';

  return {
    sizeDiff,
    isCompressed,
    ratio,
    rate,
    ratioFormatted,
    rateFormatted,
  };
}

async function compareCompressionMethods(originalData: Buffer) {
  const originalSize = originalData.length;
  const results: Array<{
    type: CompressType;
    name: string;
    size: number;
    ratio: number;
    rate: number;
    compressTime: number;
    decompressTime: number;
  }> = [];

  const compressTypes = [
    { type: CompressType.Brotli, name: 'Brotli' },
    { type: CompressType.Gzip, name: 'Gzip' },
    { type: CompressType.Zstd, name: 'Zstd' },
  ];

  for (const { type, name } of compressTypes) {
    try {
      const compressStart = performance.now();
      const compressed = await compressData(type, originalData);
      const compressEnd = performance.now();
      const compressTime = compressEnd - compressStart;

      const compressedSize = compressed.length;
      const stats = calculateCompressionStats(originalSize, compressedSize);

      const decompressStart = performance.now();
      await decompressData(type, compressed);
      const decompressEnd = performance.now();
      const decompressTime = decompressEnd - decompressStart;

      results.push({
        type,
        name,
        size: compressedSize,
        ratio: stats.ratio,
        rate: stats.rate,
        compressTime,
        decompressTime,
      });
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : String(error);
      console.error(`  ❌ ${name} 压缩失败: ${errorMessage}`);
    }
  }

  results.sort((a, b) => a.size - b.size);

  console.log(`\n📊 压缩方式对比 (原始大小: ${originalSize.toLocaleString()} bytes):`);
  console.log(`${'-'.repeat(100)}`);
  for (const result of results) {
    const isBest = result.size === results[0].size;
    const marker = isBest ? '🏆' : '  ';
    const sizeDiff = originalSize - result.size;
    const compressTimeStr = result.compressTime.toFixed(2);
    const decompressTimeStr = result.decompressTime.toFixed(2);
    if (sizeDiff > 0) {
      console.log(
        `${marker} ${result.name.padEnd(8)}: ${result.size.toLocaleString().padStart(12)} bytes | 压缩比: ${result.ratio.toFixed(2)}x | 压缩率: ${result.rate.toFixed(2)}% | 节省: ${sizeDiff.toLocaleString()} bytes | 压缩: ${compressTimeStr.padStart(8)}ms | 解压: ${decompressTimeStr.padStart(8)}ms`
      );
    } else {
      console.log(
        `${marker} ${result.name.padEnd(8)}: ${result.size.toLocaleString().padStart(12)} bytes | ⚠️  压缩后增加 ${Math.abs(sizeDiff).toLocaleString()} bytes | 压缩: ${compressTimeStr.padStart(8)}ms | 解压: ${decompressTimeStr.padStart(8)}ms`
      );
    }
  }
  console.log(`${'-'.repeat(100)}`);
  console.log(`✅ 最佳压缩方式: ${results[0].name} (${results[0].size.toLocaleString()} bytes)\n`);

  return results[0];
}

async function decodeSpinData(tableInfo: TableInfo, id?: number) {
  try {
    console.log(`🔍 开始处理: ${tableInfo.gameName} - ${tableInfo.tableName}`);

    mkdirSync(dataDir, { recursive: true });

    const reader = new SpinDataReader(tableInfo);
    await reader.init();

    if (id) {
      console.log(`📊 从表 ${tableInfo.tableName} 查询 ID 为 ${id} 的记录...`);
    } else {
      console.log(`📊 从表 ${tableInfo.tableName} 读取数据...`);
    }

    const spinDataList = await reader.readTableData({ where: { id } });

    if (!spinDataList || spinDataList.length === 0) {
      console.log(`⚠️  表 ${tableInfo.tableName} 中没有数据`);
      return;
    }

    console.log(`📦 找到 ${spinDataList.length} 条记录\n`);

    for (const recordData of spinDataList) {
      if (!recordData.data) {
        console.log(`⚠️  记录 ${recordData.id} 的 data 字段为空，跳过`);
        continue;
      }

      const compressedData = Buffer.from(recordData.data);
      const compressedSize = compressedData.length;
      const originalData = await decompressData(
        recordData.compress || CompressType.None,
        compressedData
      );

      if (originalData.length === 0) {
        console.log(`⚠️  记录 ${recordData.id} 的 data 字段长度为 0，跳过`);
        continue;
      }

      const originalSize = originalData.length;
      const compressionStats = calculateCompressionStats(originalSize, compressedSize);

      await compareCompressionMethods(originalData);

      try {
        const decodedData = reader.decodeData(originalData);
        const jsonData = JSON.stringify(decodedData, null, 2);

        const fileName = `${tableInfo.tableName}_${recordData.id}.json`;
        const filePath = join(dataDir, fileName);
        writeFileSync(filePath, jsonData, 'utf8');

        console.log(`${'='.repeat(80)}`);
        console.log(`记录 ID: ${recordData.id}`);
        console.log(`总赢: ${recordData.totalWin}`);
        console.log(`下注: ${recordData.bet}`);
        console.log(`回报率: ${recordData.rate}`);
        console.log(`来源: ${recordData.from}`);
        console.log(`压缩方式: ${recordData.compress}`);
        console.log(`创建时间: ${dayjs(recordData.createTime).format('YYYY-MM-DD HH:mm:ss')}`);
        console.log(`原始大小: ${originalSize.toLocaleString()} bytes`);
        console.log(`压缩后大小: ${compressedSize.toLocaleString()} bytes`);
        if (compressionStats.isCompressed) {
          console.log(`压缩比: ${compressionStats.ratioFormatted}x`);
          console.log(`压缩率: ${compressionStats.rateFormatted}%`);
          console.log(`节省空间: ${compressionStats.sizeDiff.toLocaleString()} bytes`);
        } else {
          console.log(
            `⚠️  压缩后反而增加了 ${Math.abs(compressionStats.sizeDiff).toLocaleString()} bytes (${Math.abs(compressionStats.rate).toFixed(2)}%)`
          );
          console.log(`   原因: 数据太小，压缩算法元数据开销大于压缩收益`);
        }
        console.log(`已保存到: ${filePath}`);
        console.log(`${'='.repeat(80)}`);
        // console.log('解码后的 JSON 数据:');
        // console.log(jsonData);
        // console.log('\n');
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error(`❌ 解码记录 ${recordData.id} 失败:`, errorMessage);
        console.log(`   数据长度: ${originalData.length} bytes\n`);
      }
    }

    await dbManager.getDB()?.close();
    console.log('✅ 处理完成');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('❌ 脚本执行失败:', errorMessage);
    process.exit(1);
  }
}

async function main() {
  // const name = 'bbc';
  const tableName = 'jili_spin_mpt_special';
  // const tableName = 'jili_spin_cny_special';
  const id = 1;
  const gameName = getTableGameName(tableName);
  await decodeSpinData({ gameName, tableName: tableName }, id);
  process.exit(0);
}

main();
