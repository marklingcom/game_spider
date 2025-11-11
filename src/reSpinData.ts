import crypto from 'crypto';
import type { SpiderData } from './gameFrom/info.js';
import { dbManager } from './models/index.js';
import { GaiaResponse, SpinResponse } from './protoGeneral/astarte2_196.js';
import { JiliDb } from './spider/jili/jili_db.js';
import { config } from './utils/config.js';

function getAllPossibleTableNames(gameName: string): string[] {
  const { bet, buyBouns, extra } = config.serverConfig.betConfig;
  const baseName = `jili_spin_${gameName}`;
  const betSuffix = bet !== 0 ? `_${bet.toString().replace('.', 'p')}` : '';
  const tables = [`${baseName}${betSuffix}_normal`, `${baseName}${betSuffix}_special`];

  if (buyBouns) {
    tables.push(`${baseName}${betSuffix}_buy_special`);
  }
  if (extra) {
    tables.push(`${baseName}${betSuffix}_extra_normal`, `${baseName}${betSuffix}_extra_special`);
  }

  return tables;
}

function pkcs5Padding(data: Buffer): Buffer {
  const blockSize = 16;
  const padding = blockSize - (data.length % blockSize);
  const paddingBuffer = Buffer.alloc(padding, padding);
  return Buffer.concat([data, paddingBuffer]);
}

function encrypted(token: string, data: Buffer): Buffer {
  const key = Buffer.concat([Buffer.from(token.slice(0, 16)), Buffer.from(token.slice(-16))]);
  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
  cipher.setAutoPadding(false);

  const paddedData = pkcs5Padding(data);
  let encrypted = cipher.update(paddedData);
  encrypted = Buffer.concat([encrypted, cipher.final()]);

  return Buffer.concat([iv, encrypted]);
}

function reconstructSpinBuffer(
  dataBuffer: Buffer,
  totalWin: number,
  bet: number,
  token: string
): Buffer {
  const spinResponse = {
    data: dataBuffer,
    totalWin: totalWin,
    realBet: bet,
    spinReq: {
      bet: bet,
    },
  } as unknown as SpinResponse;

  const gaiaResponseData = SpinResponse.toBinary(spinResponse);
  const gaiaResponse = {
    ret: 0,
    data: encrypted(token, Buffer.from(gaiaResponseData)),
  } as unknown as GaiaResponse;

  return Buffer.from(GaiaResponse.toBinary(gaiaResponse));
}

async function reSpinData(limit?: number, dryRun: boolean = false) {
  try {
    console.log('🔍 开始重新保存数据');
    if (dryRun) {
      console.log('⚠️  干运行模式（不会实际修改数据）');
    }

    await dbManager.initDB(config.serverConfig.db);
    console.log('✅ 成功连接到数据库');

    const { gameName } = config.serverConfig.betConfig;
    if (!gameName) {
      throw new Error('配置中未找到 gameName');
    }

    const name = config.currentJiliGame.jiliConfig.name;
    console.log(`📋 游戏名称: ${gameName} (${name})`);

    const jiliInfo = await dbManager.jiliInfo.findOne({ where: { name } });
    if (!jiliInfo) {
      throw new Error(`未找到 jili_info 记录: ${name}`);
    }

    const infoData = jiliInfo.toJSON() as { from?: string; token?: string };
    if (!infoData.token) {
      throw new Error(`jili_info 中未找到 token: ${name}`);
    }

    const jiliDb = new JiliDb({ db: dbManager, config });
    await jiliDb.init(name);

    const allTableNames = getAllPossibleTableNames(name);
    console.log(`📊 将处理以下表: ${allTableNames.join(', ')}\n`);

    let totalMoved = 0;
    let totalError = 0;

    for (const sourceTableName of allTableNames) {
      console.log(`\n${'='.repeat(80)}`);
      console.log(`处理表: ${sourceTableName}`);
      console.log(`${'='.repeat(80)}`);

      let spinDataList: unknown[];
      try {
        const tableModel = await dbManager.ensureTableExists(sourceTableName);
        const queryOptions: {
          attributes: string[];
          order: [string, string][];
          limit?: number;
        } = {
          attributes: ['id', 'data', 'totalWin', 'bet', 'rate', 'from', 'createTime'],
          order: [['id', 'ASC']],
        };

        if (limit) {
          queryOptions.limit = limit;
        }

        spinDataList = (await tableModel.findAll(queryOptions)) as unknown[];
      } catch {
        console.log(`⚠️  表 ${sourceTableName} 不存在或无法访问，跳过`);
        continue;
      }

      if (!spinDataList?.length) {
        console.log(`⚠️  表 ${sourceTableName} 中没有数据`);
        continue;
      }

      console.log(`📦 找到 ${spinDataList.length} 条记录`);

      let movedCount = 0;
      let errorCount = 0;

      for (let i = 0; i < spinDataList.length; i++) {
        const record = spinDataList[i] as { toJSON: () => unknown };
        const recordData = record.toJSON() as {
          id: number;
          data: Buffer | unknown;
          totalWin?: number;
          bet?: number;
          rate?: number;
          from?: string;
          createTime?: Date;
        };

        const oldId = recordData.id;

        if (!recordData.data) {
          errorCount++;
          continue;
        }

        const dataBuffer: Buffer = Buffer.isBuffer(recordData.data)
          ? recordData.data
          : Buffer.from(recordData.data as ArrayLike<number>);

        if (dataBuffer.length === 0) {
          errorCount++;
          continue;
        }

        try {
          const totalWin = recordData.totalWin || 0;
          const bet = recordData.bet || 0;
          const from = recordData.from || infoData.from || '';

          const spiderData: SpiderData = {
            name,
            token: infoData.token,
            spin: '',
            from,
            webSocketData: Buffer.alloc(0),
            gi: 0,
          };

          const spinBuffer = reconstructSpinBuffer(dataBuffer, totalWin, bet, infoData.token);

          if (!dryRun) {
            await jiliDb.saveSpinData(spinBuffer, spiderData);

            const tableModel = await dbManager.ensureTableExists(sourceTableName);
            const oldRecord = await tableModel.findByPk(oldId);
            if (oldRecord) {
              await oldRecord.destroy();
            }
          }

          movedCount++;
          console.log(`  记录 ${oldId}: ${sourceTableName} -> 已重新保存`);

          if ((i + 1) % 100 === 0) {
            console.log(
              `  处理进度: ${i + 1}/${spinDataList.length} (移动: ${movedCount}, 错误: ${errorCount})`
            );
          }
        } catch (error) {
          const errorMessage = error instanceof Error ? error.message : String(error);
          console.error(`  ❌ 处理记录 ${oldId} 失败:`, errorMessage);
          errorCount++;
        }
      }

      console.log(`\n表 ${sourceTableName} 处理结果:`);
      console.log(`  移动到新表: ${movedCount}`);
      console.log(`  错误: ${errorCount}`);

      totalMoved += movedCount;
      totalError += errorCount;
    }

    console.log(`\n${'='.repeat(80)}`);
    console.log('📊 总体处理结果:');
    console.log(`  总移动: ${totalMoved}`);
    console.log(`  总错误: ${totalError}`);
    console.log(`${'='.repeat(80)}`);

    if (dryRun) {
      console.log('\n⚠️  这是干运行模式，数据未被实际修改');
    }

    await dbManager.getDB()?.close();
    console.log('✅ 处理完成');
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('❌ 脚本执行失败:', errorMessage);
    throw error;
  }
}

export { reSpinData };
