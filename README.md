# Game Spider Server

JavaScript 版本的游戏爬虫服务

## 功能特性

- 支持多种游戏数据源（AWC、Huidu）
- 数据库自动迁移
- WebSocket 连接管理
- 多线程数据处理
- Docker 容器化部署

## 安装和运行

### 本地开发

1. 安装依赖：

```bash
pnpm install
```

2. 配置数据库连接（修改 `config/server.yaml`）

3. 运行服务：

```bash
npm start
```

### Docker 部署

1. 构建并启动服务：

```bash
docker-compose up -d
```
