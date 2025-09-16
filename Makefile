docker-down: ## 停止 Docker 容器
	docker compose down

docker-rebuild: ## 重新构建并启动 Docker 容器
	docker compose down
	docker compose up --build -d
