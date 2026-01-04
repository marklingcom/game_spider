import { readdirSync } from 'node:fs';
import { extname } from 'node:path';
import { createInterface } from 'node:readline';
import { dbManager } from '../../src/models/index.js';
import { config } from '../../src/utils/config.js';
import { createDirectoryIfNotExists } from '../../src/utils/utils.js';

const protoDir = './src/proto';

async function main() {
  try {
    console.log('🔍 开始检查本地proto文件和数据库记录的差异...');

    await dbManager.initDB(config.serverConfig.db);
    console.log('✅ 成功连接到数据库');

    await createDirectoryIfNotExists(protoDir);

    const jiliProtoModel = dbManager.jiliProto;
    const dbProtos = await jiliProtoModel.findAll({
      attributes: ['id', 'name', 'gi', 'data', 'createTime', 'updateTime'],
    });

    console.log('\n🔍 检查数据库中的重复记录...');
    const nameCount = new Map<string, number>();
    const duplicateNames: string[] = [];

    for (const proto of dbProtos) {
      const protoName = (proto as any).name as string;
      const count = nameCount.get(protoName) || 0;
      nameCount.set(protoName, count + 1);

      if (count === 1) {
        duplicateNames.push(protoName);
      }
    }

    if (duplicateNames.length > 0) {
      console.log(`⚠️  发现 ${duplicateNames.length} 个重复的name字段:`);
      for (let i = 0; i < duplicateNames.length; i++) {
        const name = duplicateNames[i];
        const count = nameCount.get(name) || 0;
        console.log(`  ${i + 1}. ${name} (出现 ${count} 次)`);
      }

      const rl = createInterface({
        input: process.stdin,
        output: process.stdout,
      });

      const response = await new Promise<string>((resolve) => {
        rl.question('\n❓ 是否要删除重复记录？(y/N): ', (answer) => {
          resolve(answer.trim().toLowerCase());
        });
      });

      rl.close();

      if (response === 'y' || response === 'yes') {
        console.log('🗑️  开始删除重复记录...');
        let deletedCount = 0;

        for (const name of duplicateNames) {
          const duplicates = await jiliProtoModel.findAll({
            where: { name },
          });

          if (duplicates.length > 1) {
            for (let i = 1; i < duplicates.length; i++) {
              try {
                await duplicates[i].destroy();
                console.log(`  ✅ 已删除重复记录: ${name} (ID: ${(duplicates[i] as any).id})`);
                deletedCount++;
              } catch (error) {
                console.log(
                  `  ❌ 删除重复记录失败 ${name} (ID: ${(duplicates[i] as any).id}): ${error}`
                );
              }
            }
          }
        }

        console.log(`\n🎉 重复记录清理完成，共删除 ${deletedCount} 条记录`);

        const updatedProtos = await jiliProtoModel.findAll({
          attributes: ['id', 'name', 'gi', 'data', 'createTime', 'updateTime'],
        });
        dbProtos.length = 0;
        dbProtos.push(...updatedProtos);
      } else {
        console.log('⏭️  跳过删除重复记录');
      }
    } else {
      console.log('✅ 数据库中没有重复的name字段');
    }

    const dbProtoMap = new Map<string, boolean>();
    for (const proto of dbProtos) {
      const protoName = (proto as any).name as string;
      dbProtoMap.set(protoName, true);
    }

    console.log(`\n📊 数据库中共有 ${dbProtos.length} 条proto记录`);

    const localProtoFiles: string[] = [];
    try {
      const files = readdirSync(protoDir);
      for (const file of files) {
        if (extname(file) === '.proto') {
          const protoName = file.replace('.proto', '');
          localProtoFiles.push(protoName);
        }
      }
    } catch (error) {
      console.error('遍历proto目录失败:', error);
      process.exit(1);
    }

    console.log(`📁 本地proto目录中共有 ${localProtoFiles.length} 个.proto文件`);

    const missingInDB: string[] = [];
    const missingInLocal: string[] = [];

    for (const protoName of localProtoFiles) {
      if (!dbProtoMap.has(protoName)) {
        missingInDB.push(protoName);
      }
    }

    for (const proto of dbProtos) {
      const protoName = (proto as any).name as string;
      const found = localProtoFiles.includes(protoName);
      if (!found) {
        missingInLocal.push(protoName);
      }
    }

    console.log(`\n${'='.repeat(60)}`);
    console.log('📋 检查结果:');
    console.log('='.repeat(60));

    if (missingInDB.length > 0) {
      console.log(`\n❌ 本地有但数据库中不存在的proto文件 (${missingInDB.length}个):`);
      for (let i = 0; i < missingInDB.length; i++) {
        console.log(`  ${i + 1}. ${missingInDB[i]}.proto`);
      }
    } else {
      console.log('\n✅ 所有本地proto文件都在数据库中存在');
    }

    if (missingInLocal.length > 0) {
      console.log(`\n❌ 数据库中有但本地不存在的proto文件 (${missingInLocal.length}个):`);
      for (let i = 0; i < missingInLocal.length; i++) {
        console.log(`  ${i + 1}. ${missingInLocal[i]}.proto`);
      }
    } else {
      console.log('\n✅ 所有数据库记录都有对应的本地proto文件');
    }

    console.log(`\n${'='.repeat(60)}`);
    console.log('📊 总结:');
    console.log(`  - 本地proto文件总数: ${localProtoFiles.length}`);
    console.log(`  - 数据库记录总数: ${dbProtos.length}`);
    console.log(`  - 本地有但数据库中没有: ${missingInDB.length}`);
    console.log(`  - 数据库有但本地没有: ${missingInLocal.length}`);
    console.log(`  - 数据库重复name: ${duplicateNames.length}`);
    console.log('='.repeat(60));

    if (missingInDB.length > 0 || missingInLocal.length > 0 || duplicateNames.length > 0) {
      console.log('\n💡 建议:');
      if (duplicateNames.length > 0) {
        console.log('  - ⚠️  优先处理数据库中的重复记录');
      }
      if (missingInDB.length > 0) {
        console.log('  - 考虑将本地多余的proto文件同步到数据库');
      }
      if (missingInLocal.length > 0) {
        console.log('  - 考虑运行 proto-sync 脚本同步缺失的proto文件');
      }
    } else {
      console.log('\n🎉 本地proto文件和数据库记录完全同步!');
    }

    process.exit(0);
  } catch (error) {
    console.error('检查失败:', error);
    process.exit(1);
  }
}

main();
