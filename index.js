const Config = require("./src/utils/config");
const DatabaseManager = require("./src/models");
const Processor = require("./src/processor/processor");
const { getGameInfo } = require("./src/game/game");
const SpiderWork = require("./src/spider/spider");
const { getGameInfo } = require("./src/game/game");

async function main() {
  try {
    const cfg = Config.loadConfig("./config/server.yaml");
    console.log("配置文件加载成功");

    const dbManager = new DatabaseManager();
    const db = await dbManager.initDB(cfg.db.default.type, cfg.db.default.dsn);

    if (cfg.config.autoMigrate) {
      console.log("🔄 运行数据库迁移...");
      try {
        await dbManager.sync(false);
        console.log("✅ 数据库迁移完成");
      } catch (error) {
        console.log(`⚠️ 数据库迁移失败: ${error.message}`);
        console.log("继续执行导入操作...");
      }
    }

    const processor = new Processor(dbManager);

    const gameInfo = getGameInfo(cfg);
    const spiderWork = new SpiderWork(dbManager, cfg, processor);

    processor.start();

    await spiderWork.processJili(gameInfo);
  } catch (error) {
    console.error("程序启动失败:", error);
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch((error) => {
    console.error("未捕获的错误:", error);
    process.exit(1);
  });
}
