import { mkdirSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { dbManager } from '../src/models/index.js';
import { SpinDataReader, type TableInfo } from '../src/utils/spin-data-reader.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const dataDir = join(__dirname, 'data');

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

      const dataBuffer = reader.convertToBuffer(recordData.data);

      if (dataBuffer.length === 0) {
        console.log(`⚠️  记录 ${recordData.id} 的 data 字段长度为 0，跳过`);
        continue;
      }

      try {
        const decodedData = reader.decodeData(dataBuffer);
        const jsonData = JSON.stringify(decodedData, null, 2);

        const fileName = `${tableInfo.tableName}_${recordData.id}.json`;
        const filePath = join(dataDir, fileName);
        writeFileSync(filePath, jsonData, 'utf8');

        console.log(`${'='.repeat(80)}`);
        console.log(`记录 ID: ${recordData.id}`);
        console.log(`总赢: ${recordData.totalWin || 0}`);
        console.log(`下注: ${recordData.bet || 0}`);
        console.log(`回报率: ${recordData.rate || 0}`);
        console.log(`来源: ${recordData.from || 'N/A'}`);
        console.log(`创建时间: ${recordData.createTime || 'N/A'}`);
        console.log(`已保存到: ${filePath}`);
        console.log(`${'='.repeat(80)}`);
        console.log('解码后的 JSON 数据:');
        console.log(jsonData);
        console.log('\n');
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.error(`❌ 解码记录 ${recordData.id} 失败:`, errorMessage);
        console.log(`   数据长度: ${dataBuffer.length} bytes\n`);
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
  const name = 'ge';
  const tableName = 'jili_spin_ge_normal';
  const id = 1;

  await decodeSpinData({ gameName: name, tableName: tableName }, id);
  process.exit(0);
}

main();
