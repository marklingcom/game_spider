import { dbManager } from '../dist/models/index.js';
import { loadConfig } from '../dist/utils/config.js';

async function main() {
  try {
    console.log('开始修复数据库表的 id 字段自增属性...');

    const config = loadConfig();
    await dbManager.initDB(config.serverConfig.db);

    await dbManager.fixAllTablesIdAutoIncrement();

    console.log('所有表的 id 字段自增属性修复完成');
    process.exit(0);
  } catch (error) {
    console.error('修复失败:', error);
    process.exit(1);
  }
}

main();
