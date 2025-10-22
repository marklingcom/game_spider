#!/bin/bash

# Jili Spider 服务器部署脚本

set -e

echo "开始部署 Jili Spider 服务器..."

# 检查Docker是否安装
if ! command -v docker &> /dev/null; then
    echo "错误: Docker 未安装"
    exit 1
fi

if ! command -v docker-compose &> /dev/null; then
    echo "错误: Docker Compose 未安装"
    exit 1
fi

# 停止现有容器
echo "停止现有容器..."
docker-compose -f docker-compose.server.yml down || true

# 清理旧镜像
echo "清理旧镜像..."
docker rmi jili-server:latest || true

# 构建新镜像
echo "构建新镜像..."
docker-compose -f docker-compose.server.yml build --no-cache

# 启动服务
echo "启动服务..."
docker-compose -f docker-compose.server.yml up -d

# 等待服务启动
echo "等待服务启动..."
sleep 10

# 检查服务状态
echo "检查服务状态..."
if docker-compose -f docker-compose.server.yml ps | grep -q "Up"; then
    echo "✅ 服务启动成功!"
    echo "🌐 服务器地址: http://localhost:3100"
    echo "🔗 AWC路由: http://localhost:3100/awc"

    # 测试服务
    echo "测试服务..."
    if curl -f -s http://localhost:3100/health > /dev/null; then
        echo "✅ 服务测试通过!"
    else
        echo "⚠️  服务测试失败，请检查日志"
        docker-compose -f docker-compose.server.yml logs
    fi
else
    echo "❌ 服务启动失败"
    docker-compose -f docker-compose.server.yml logs
    exit 1
fi

echo "部署完成!"
