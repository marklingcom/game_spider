import type { ColumnsDescription, QueryInterface } from 'sequelize';
import { dbManager } from '../src/models/index.js';
import { config } from '../src/utils/config.js';

async function getDatabaseConnection() {
  const sequelize = await dbManager.initDB(config.serverConfig.db);
  console.log('✅ 成功连接到数据库');
  return sequelize;
}

async function checkRateIndex(queryInterface: QueryInterface, tableName: string) {
  console.log(`🔍 检查表 ${tableName} 的索引...`);

  const indexes = (await queryInterface.showIndex(tableName)) as Array<{
    fields?: Array<{ attribute: string }>;
  }>;
  const hasRateIndex = indexes.some((index) =>
    index.fields?.some((field) => field.attribute === 'rate')
  );

  if (!hasRateIndex) {
    console.log(`⏳ 为表 ${tableName} 添加 rate 字段索引...`);
    await queryInterface.addIndex(tableName, ['rate'], {
      name: `${tableName}_rate_idx`,
    });
    console.log(`✅ 表 ${tableName} 的 rate 索引添加成功`);
  } else {
    console.log(`⏭️ 表 ${tableName} 已有 rate 索引`);
  }
}

async function updateRatePrecision(queryInterface: QueryInterface, tableName: string) {
  console.log(`🔧 更新表 ${tableName} 的 rate 字段精度...`);
  try {
    await queryInterface.sequelize.query(
      `UPDATE ${tableName} SET rate = ROUND(rate, 6) WHERE rate IS NOT NULL`
    );
    console.log(`✅ 表 ${tableName} 的 rate 字段精度更新完成`);
  } catch (error: any) {
    console.log(`❌ 更新表 ${tableName} 的 rate 字段精度失败:`, error.message);
  }
}

async function checkIdPrimaryKey(
  queryInterface: QueryInterface,
  tableName: string,
  tableDescription: ColumnsDescription
) {
  if (!tableDescription.id) {
    console.log(`⚠️ 表 ${tableName} 不包含 id 字段`);
    return;
  }
  const idField = tableDescription.id;
  console.log(`🔍 检查表 ${tableName} 的 id 字段...`);

  let isPrimaryKey = false;
  let isAutoIncrement = false;
  if (idField.primaryKey) {
    isPrimaryKey = true;
  }
  if (idField.autoIncrement) {
    isAutoIncrement = true;
  }
  if (isPrimaryKey && isAutoIncrement) {
    console.log(`✅ 表 ${tableName} 的 id 字段已正确设置为主键且自增`);
  } else {
    console.log(`🔧 修复表 ${tableName} 的 id 字段为主键且自增...`);
    try {
      console.log(`🔍 表 ${tableName} 的 id 字段类型:`, idField.type);
      await queryInterface.changeColumn(tableName, 'id', {
        type: 'BIGINT',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      });
      console.log(`✅ 表 ${tableName} 的 id 字段已设置为主键且自增`);
    } catch (error: any) {
      console.log(`❌ 修复表 ${tableName} 的 id 字段失败:`, error.message);
    }
  }
}

async function checkDataTables() {
  try {
    console.log('🔍 开始检查所有表...');
    const sequelize = await getDatabaseConnection();

    const queryInterface = sequelize.getQueryInterface();
    const tables = await queryInterface.showAllTables();

    console.log(`找到 ${tables.length} 个表`);

    for (const tableName of tables) {
      try {
        const tableDescription = await queryInterface.describeTable(tableName);

        if (tableDescription.rate) {
          await checkRateIndex(queryInterface, tableName);
          // await updateRatePrecision(queryInterface, tableName);
          await checkIdPrimaryKey(queryInterface, tableName, tableDescription);
        } else {
          console.log(`⚠️ 表 ${tableName} 不包含 rate 字段，跳过`);
        }
      } catch (error) {
        console.error(`处理表 ${tableName} 时出错:`, error);
      }
    }

    console.log('🎉 所有表的检查完成');
    await sequelize.close();
  } catch (error) {
    console.error('❌ 脚本执行失败:', error);
    process.exit(1);
  }
}

async function main() {
  try {
    await checkDataTables();
    console.log('🎉 脚本执行完成');
    process.exit(0);
  } catch (error) {
    console.error('❌ 脚本执行失败:', error);
    process.exit(1);
  }
}

main();
