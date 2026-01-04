docker-down: ## 停止 Docker 容器
	docker compose down

docker-rebuild: ## 重新构建并启动 Docker 容器
	docker compose down
	docker compose up --build -d

docker-server-up: ## 启动 server 服务
	docker compose -f docker-compose.server.yml up -d

docker-server-down: ## 停止 server 服务
	docker compose -f docker-compose.server.yml down

docker-server-rebuild: ## 重新构建并启动 server 服务
	docker compose -f docker-compose.server.yml down
	docker compose -f docker-compose.server.yml up --build -d
