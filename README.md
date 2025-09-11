# Game Spider Server (JavaScript 版本)

这是从 Go 语言转换而来的 JavaScript 版本的游戏爬虫服务器。

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
npm install
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

## 项目结构

```
├── config/          # 配置文件
├── models/          # 数据模型
├── source/          # 核心业务逻辑
│   ├── game/        # 游戏相关
│   ├── processor/   # 数据处理器
│   └── spider/      # 爬虫逻辑
├── utils/           # 工具函数
├── index.js         # 主入口文件
└── package.json     # 项目配置
```

## 配置说明

主要配置项在 `config/server.yaml` 中：

- `proxy`: 代理配置
- `db`: 数据库配置
- `config`: 系统配置
- `betConfig`: 下注配置
- `huiduConfig`: Huidu 数据源配置
- `awcConfig`: AWC 数据源配置

## 依赖说明

- `sequelize`: ORM 数据库操作
- `axios`: HTTP 请求
- `ws`: WebSocket 客户端
- `yaml`: YAML 配置文件解析
- `protobufjs`: Protocol Buffers 支持
