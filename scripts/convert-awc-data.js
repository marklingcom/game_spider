import fs from 'node:fs';
import path from 'node:path';

function convertAWCData(inputFile, outputFile) {
  try {
    console.log(`开始转换文件: ${inputFile}`);

    const inputPath = path.resolve(inputFile);
    if (!fs.existsSync(inputPath)) {
      throw new Error(`输入文件不存在: ${inputPath}`);
    }

    const rawData = fs.readFileSync(inputPath, 'utf8');
    const awcData = JSON.parse(rawData);

    console.log(`读取到 ${awcData.length} 条游戏数据`);

    const convertedData = awcData.map((game, index) => {
      try {
        const gi = parseInt(game.params.gameID, 10);
        if (isNaN(gi)) {
          console.warn(`警告: 游戏 ${game.gameName} 的 gameID 不是有效数字: ${game.params.gameID}`);
        }

        return {
          fullName: game.gameName,
          gi: gi,
          name: game.params.gameName,
          uuid: game.uuid
        };
      } catch (error) {
        console.error(`转换游戏 ${game.gameName} 时出错:`, error);
        throw error;
      }
    });

    const outputPath = outputFile ? path.resolve(outputFile) :
      path.join(path.dirname(inputPath), 'converted-' + path.basename(inputFile));

    fs.writeFileSync(outputPath, JSON.stringify(convertedData, null, 2), 'utf8');

    console.log(`转换完成!`);
    console.log(`输入文件: ${inputPath}`);
    console.log(`输出文件: ${outputPath}`);
    console.log(`成功转换 ${convertedData.length} 条记录`);

    const sampleData = convertedData.slice(0, 3);
    console.log('\n示例数据:');
    console.log(JSON.stringify(sampleData, null, 2));

  } catch (error) {
    console.error('转换过程中发生错误:', error);
    process.exit(1);
  }
}

const inputFile = path.join(process.cwd(), 'config', 'awc-JILI-SLOT.json');
const outputFile = path.join(process.cwd(), 'config', 'awc-games-converted.json');

convertAWCData(inputFile, outputFile);
