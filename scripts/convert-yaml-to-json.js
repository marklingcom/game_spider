import fs from 'node:fs';
import path from 'node:path';
import { parse } from 'yaml';

function convertYamlToJson(inputFile, outputFile) {
  try {
    console.log(`开始转换文件: ${inputFile}`);

    const inputPath = path.resolve(inputFile);
    if (!fs.existsSync(inputPath)) {
      throw new Error(`输入文件不存在: ${inputPath}`);
    }

    const yamlContent = fs.readFileSync(inputPath, 'utf8');
    const yamlData = parse(yamlContent);

    console.log(`读取到 YAML 数据:`, Object.keys(yamlData));

    if (yamlData.games && Array.isArray(yamlData.games)) {
      console.log(`游戏数量: ${yamlData.games.length}`);
    }

    const outputPath = outputFile ? path.resolve(outputFile) :
      path.join(path.dirname(inputPath), path.basename(inputPath, '.yaml') + '.json');

    fs.writeFileSync(outputPath, JSON.stringify(yamlData, null, 2), 'utf8');

    console.log(`转换完成!`);
    console.log(`输入文件: ${inputPath}`);
    console.log(`输出文件: ${outputPath}`);

    if (yamlData.games && Array.isArray(yamlData.games)) {
      console.log(`成功转换 ${yamlData.games.length} 条游戏记录`);

      const sampleData = yamlData.games.slice(0, 3);
      console.log('\n示例数据:');
      console.log(JSON.stringify(sampleData, null, 2));
    }

  } catch (error) {
    console.error('转换过程中发生错误:', error);
    process.exit(1);
  }
}

function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    const inputFile = path.join(process.cwd(), 'config', 'jili-huidu.yaml');
    const outputFile = path.join(process.cwd(), 'config', 'jili-huidu.json');
    convertYamlToJson(inputFile, outputFile);
  } else {
    const inputFile = args[0];
    const outputFile = args[1];
    convertYamlToJson(inputFile, outputFile);
  }
}

main();
