docker-down: ## 停止 Docker 容器
	docker compose down

docker-rebuild: ## 重新构建并启动 Docker 容器
	docker compose down
	docker compose up --build -d

convert-awc: ## 转换 AWC 游戏数据
	cd scripts && node convert-awc-data.js ../config/awc-JILI-SLOT.json ../config/awc-games-converted.json

convert-awc-custom: ## 转换自定义 AWC 数据 (用法: make convert-awc-custom INPUT=file.json OUTPUT=output.json)
	cd scripts && node convert-awc-data.js $(INPUT) $(OUTPUT)

convert-yaml: ## 转换 YAML 文件为 JSON
	cd scripts && node convert-yaml-to-json.js

convert-yaml-custom: ## 转换自定义 YAML 文件 (用法: make convert-yaml-custom INPUT=file.yaml OUTPUT=output.json)
	cd scripts && node convert-yaml-to-json.js $(INPUT) $(OUTPUT)

test-telegram: ## 测试 Telegram 机器人
	tsx src/examples/telegram-example.ts
