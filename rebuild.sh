#!/bin/bash
echo "停止并删除容器..."
docker compose down

echo "删除镜像..."
docker rmi jili-spider:latest 2>/dev/null || true

echo "重新构建并启动..."
docker compose up --build
