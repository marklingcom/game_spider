import ora from 'ora';
import { QueryTypes, Sequelize } from 'sequelize';
import { config } from '../../src/utils/config.js';

interface RtpRouteConfig {
  id: number;
  rtp: string;
  game_brand: string;
  game_id: string;
  game_type: string | null;
  round_model: string;
  table_name_normal: string | null;
  table_name_special: string | null;
  config_name_normal: string | null;
  config_name_special: string | null;
  config_name_special_ext: string | null;
  rate: string;
  bet: string | null;
  round_ext_model: string;
}

interface ConfigNameItem {
  r: number;
  w: number;
}

interface SpecialExtItem {
  special: ConfigNameItem[];
  weight: number;
  tableName: string;
}

const QUERY_GAME_BRAND = 'jili';
// const QUERY_GAME_ID = '421';
const QUERY_GAME_ID = '460';

function createSequelize(dsn: string, database: string): Sequelize {
  const dsnMatch = dsn.match(/^([^:]+):([^@]+)@tcp\(([^:]+):(\d+)\)\//);
  if (!dsnMatch) {
    throw new Error(`无法解析 DSN: ${dsn}`);
  }
  const [, username, password, host, port] = dsnMatch;
  return new Sequelize(database, username ?? '', password ?? '', {
    host: host ?? 'localhost',
    port: parseInt(port ?? '3306', 10),
    dialect: 'mysql',
    logging: false,
    pool: {
      max: 5,
      min: 1,
      acquire: 60000,
      idle: 10000,
      evict: 5000,
    },
    dialectOptions: {
      connectTimeout: 60000,
      enableKeepAlive: true,
      keepAliveInitialDelay: 0,
    },
  });
}

async function queryWithRetry(
  db: Sequelize,
  sql: string,
  replacements: Record<string, unknown>,
  retries = 3
): Promise<Record<string, unknown>[]> {
  for (let attempt = 1; attempt <= retries; attempt++) {
    try {
      return (await db.query(sql, { replacements, type: QueryTypes.SELECT })) as Record<
        string,
        unknown
      >[];
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : String(err);
      const isConnLost =
        msg.includes('Connection lost') || msg.includes('ECONNRESET') || msg.includes('ETIMEDOUT');
      if (isConnLost && attempt < retries) {
        await new Promise((resolve) => setTimeout(resolve, 1000 * attempt));
        continue;
      }
      throw err;
    }
  }
  return [];
}

async function checkRateInTable(
  aigcDb: Sequelize,
  tableName: string,
  rValues: number[],
  label: string
): Promise<string[]> {
  if (rValues.length === 0) return [];

  try {
    const rows = await queryWithRetry(
      aigcDb,
      `SELECT DISTINCT rate FROM \`${tableName}\` WHERE rate IN (:rValues)`,
      { rValues }
    );
    const foundRates = new Set(rows.map((row) => row.rate as number));
    return rValues
      .filter((r) => !foundRates.has(r))
      .map((r) => `[${label}] 表 ${tableName} 中未找到 rate=${r} 的数据`);
  } catch (err: unknown) {
    const msg = err instanceof Error ? err.message : String(err);
    return [`[${label}] 查询表 ${tableName} 出错: ${msg}`];
  }
}

async function checkTable(
  aigcDb: Sequelize,
  tableName: string,
  configJson: string,
  label: string
): Promise<string[]> {
  let configItems: ConfigNameItem[] = [];
  try {
    configItems = JSON.parse(configJson);
  } catch {
    return [`[${label}] config 解析失败: ${configJson}`];
  }

  return checkRateInTable(
    aigcDb,
    tableName,
    configItems.map((item) => item.r),
    label
  );
}

async function checkSpecialExt(
  aigcDb: Sequelize,
  id: number,
  configJson: string
): Promise<string[]> {
  let extItems: SpecialExtItem[] = [];
  try {
    extItems = JSON.parse(configJson);
  } catch {
    return [`[special_ext] config 解析失败: ${configJson}`];
  }

  const issues: string[] = [];
  for (const item of extItems) {
    const rValues = item.special.map((s) => s.r);
    const subIssues = await checkRateInTable(
      aigcDb,
      item.tableName,
      rValues,
      `${id}:special_ext:${item.tableName}`
    );
    issues.push(...subIssues);
  }
  return issues;
}

async function checkRtpRouteConfig() {
  const dsn = config.serverConfig.db.dsn;
  const gameDb = createSequelize(dsn, 'game');
  const aigcDb = createSequelize(dsn, 'aigc');

  try {
    await gameDb.authenticate();
    console.log('✅ 成功连接到 game 数据库');
    await aigcDb.authenticate();
    console.log('✅ 成功连接到 aigc 数据库');

    const conditions: string[] = [
      // 'table_name_normal IS NOT NULL',
      // 'config_name_normal IS NOT NULL',
    ];
    const replacements: Record<string, string> = {};

    if (QUERY_GAME_BRAND) {
      conditions.push('game_brand = :game_brand');
      replacements.game_brand = QUERY_GAME_BRAND;
    }
    if (QUERY_GAME_ID) {
      conditions.push('game_id = :game_id');
      replacements.game_id = QUERY_GAME_ID;
    }

    const sql = `SELECT * FROM rtp_route_config WHERE ${conditions.join(' AND ')}`;
    const rows = await gameDb.query<RtpRouteConfig>(sql, {
      type: QueryTypes.SELECT,
      replacements,
    });

    console.log(`\n📋 共找到 ${rows.length} 条配置，开始检查...\n`);

    let problemCount = 0;
    const spinner = ora({ text: '', stream: process.stdout }).start();

    for (let i = 0; i < rows.length; i++) {
      const row = rows[i];
      const {
        id,
        rtp,
        game_brand,
        game_id,
        round_model,
        table_name_normal,
        table_name_special,
        config_name_normal,
        config_name_special,
        config_name_special_ext,
      } = row;

      spinner.text = `[${i + 1}/${rows.length}] 检查 ID:${id} | ${game_brand} | game_id:${game_id} | rtp:${rtp} | ${round_model}`;

      const rowIssues: string[] = [];

      if (table_name_normal && config_name_normal) {
        const normalIssues = await checkTable(
          aigcDb,
          table_name_normal,
          config_name_normal,
          'normal'
        );
        rowIssues.push(...normalIssues);
      }

      if (table_name_special && config_name_special) {
        const specialIssues = await checkTable(
          aigcDb,
          table_name_special,
          config_name_special,
          'special'
        );
        rowIssues.push(...specialIssues);
      }

      if (config_name_special_ext) {
        const extIssues = await checkSpecialExt(aigcDb, id, config_name_special_ext);
        rowIssues.push(...extIssues);
      }

      if (rowIssues.length > 0) {
        spinner.stop();
        console.log(`${'─'.repeat(80)}`);
        console.log(
          `❌ ID: ${id} | brand: ${game_brand} | game_id: ${game_id} | rtp: ${rtp} | round_model: ${round_model}`
        );
        // for (const issue of rowIssues) {
        //   console.log(`   ${issue}`);
        // }
        problemCount += rowIssues.length;
        spinner.start();
      }
    }

    spinner.stop();
    console.log(`\n${'='.repeat(80)}`);
    if (problemCount === 0) {
      console.log(`🎉 检查完成，所有配置均正常`);
    } else {
      console.log(`⚠️  检查完成，共发现 ${problemCount} 个问题`);
    }
  } finally {
    await gameDb.close();
    await aigcDb.close();
  }
}

async function main() {
  try {
    await checkRtpRouteConfig();
    process.exit(0);
  } catch (error: unknown) {
    const msg = error instanceof Error ? error.message : String(error);
    console.error('❌ 脚本执行失败:', msg);
    process.exit(1);
  }
}

main();
