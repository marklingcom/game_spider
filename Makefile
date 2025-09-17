docker-down: ## 停止 Docker 容器
	docker compose down

docker-rebuild: ## 重新构建并启动 Docker 容器
	docker compose down
	docker compose up --build -d

proto-check:
	@echo "🔍 运行 proto-check 脚本..."
	npm run proto-check

proto-import:
	@echo "📥 运行 proto-import 脚本..."
	npm run proto-import

proto-sync:
	@echo "🔄 运行 proto-sync 脚本..."
	npm run proto-sync
