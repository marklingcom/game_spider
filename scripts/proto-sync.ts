import { writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { dbManager } from '../src/models/index.js';
import { config } from '../src/utils/config.js';
import { createDirectoryIfNotExists } from '../src/utils/utils.js';

const protoDir = './src/proto';

async function main() {
  try {
    console.log('开始同步 proto 文件...');

    await dbManager.initDB(config.serverConfig.db);

    console.log('✅ 成功连接到数据库');

    await createDirectoryIfNotExists(protoDir);

    const jiliProtoModel = dbManager.jiliProto;
    const protoList = await jiliProtoModel.findAll({
      attributes: ['id', 'name', 'gi', 'data'],
    });

    let count = 0;

    for (const proto of protoList) {
      const protoData = (proto as any).data as string;
      const protoName = (proto as any).name as string;

      if (!protoData || protoData.trim() === '') {
        console.log(`跳过 ${protoName}: data字段为空`);
        continue;
      }

      const protoFilePath = join(protoDir, `${protoName}.proto`);

      try {
        writeFileSync(protoFilePath, protoData, 'utf8');
        console.log(`✅ 已保存: ${protoName}.proto`);
        count++;
      } catch (error) {
        console.error(`保存proto文件失败 ${protoName}:`, error);
      }
    }

    console.log(`🎉 完成! 共保存了 ${count} 个proto文件到 ${protoDir} 目录`);
    process.exit(0);
  } catch (error) {
    console.error('同步失败:', error);
    process.exit(1);
  }
}

main();
