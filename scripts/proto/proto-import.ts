import { existsSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from 'yaml';
import { dbManager } from '../../src/models/index.js';
import { config } from '../../src/utils/config.js';

interface ProtoConfig {
  name: string;
  gi: number;
  spin_pb_name: string;
  game_info_pb_name: string;
}

interface ImportList {
  protos: ProtoConfig[];
}

async function main() {
  try {
    console.log('📖 开始导入proto配置到数据库...');

    await dbManager.initDB(config.serverConfig.db);
    console.log('✅ 成功连接到数据库');

    console.log('🔄 运行数据库迁移...');
    try {
      await dbManager.sync(false);
      console.log('✅ 数据库迁移完成');
    } catch (error) {
      console.log(`⚠️  数据库迁移失败: ${(error as Error).message}`);
      console.log('继续执行导入操作...');
    }

    console.log('🔧 强制修复ID自增...');
    try {
      await dbManager.fixTableIdAutoIncrement('jili_proto');
      console.log('✅ ID自增修复完成');
    } catch (error) {
      console.log(`⚠️  ID自增修复失败: ${(error as Error).message}`);
    }

    const listFile = './config/proto-list.yaml';
    if (!existsSync(listFile)) {
      throw new Error(`配置文件不存在: ${listFile}`);
    }

    console.log(`📖 读取配置文件: ${listFile}`);
    const yamlContent = readFileSync(listFile, 'utf8');
    const importList: ImportList = parse(yamlContent);

    console.log(`📋 配置文件中包含 ${importList.protos.length} 个proto配置`);

    const protoDir = './src/proto';
    if (!existsSync(protoDir)) {
      throw new Error(`proto目录不存在: ${protoDir}`);
    }

    let successCount = 0;
    let errorCount = 0;

    for (const protoConfig of importList.protos) {
      console.log(`\n🔍 处理: ${protoConfig.name}`);

      const protoFilePath = join(protoDir, `${protoConfig.name}.proto`);
      if (!existsSync(protoFilePath)) {
        console.log(`  ❌ proto文件不存在: ${protoFilePath}`);
        errorCount++;
        continue;
      }

      let protoContent: string;
      try {
        protoContent = readFileSync(protoFilePath, 'utf8');
      } catch (error) {
        console.log(`  ❌ 读取proto文件失败: ${error}`);
        errorCount++;
        continue;
      }

      console.log(
        `gi: ${protoConfig.gi}, spin_pb_name: ${protoConfig.spin_pb_name}, game_info_pb_name: ${protoConfig.game_info_pb_name}`
      );

      const jiliProtoModel = dbManager.jiliProto;
      const existingProto = await jiliProtoModel.findOne({
        where: { name: protoConfig.name },
      });

      if (!existingProto) {
        console.log(`  ➕ 创建新记录: ${protoConfig.name}`);

        try {
          await jiliProtoModel.create({
            name: protoConfig.name,
            gi: protoConfig.gi,
            spinPbName: protoConfig.spin_pb_name,
            gameInfoPbName: protoConfig.game_info_pb_name,
            data: protoContent,
          });
          console.log(`  ✅ 成功创建记录`);
          successCount++;
        } catch (error) {
          console.log(`  ❌ 创建记录失败: ${error}`);
          errorCount++;
        }
      } else {
        console.log(`  🔄 更新现有记录: ${protoConfig.name}`);

        try {
          await jiliProtoModel.update(
            {
              gi: protoConfig.gi,
              spinPbName: protoConfig.spin_pb_name,
              gameInfoPbName: protoConfig.game_info_pb_name,
              data: protoContent,
            },
            {
              where: { name: protoConfig.name },
            }
          );
          console.log(`  ✅ 成功更新记录`);
          successCount++;
        } catch (error) {
          console.log(`  ❌ 更新记录失败: ${error}`);
          errorCount++;
        }
      }
    }

    console.log(`\n${'='.repeat(60)}`);
    console.log('📊 导入结果总结:');
    console.log('='.repeat(60));
    console.log(`✅ 成功处理: ${successCount} 个`);
    console.log(`❌ 处理失败: ${errorCount} 个`);
    console.log(`📋 总计配置: ${importList.protos.length} 个`);
    console.log('='.repeat(60));

    if (errorCount > 0) {
      console.log('\n⚠️  有部分记录处理失败，请检查错误日志');
      process.exit(1);
    } else {
      console.log('\n🎉 所有proto配置导入成功!');
      process.exit(0);
    }
  } catch (error) {
    console.error('导入失败:', error);
    process.exit(1);
  }
}

main();
