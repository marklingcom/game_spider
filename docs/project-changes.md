# 项目改动说明

本文档记录本轮从 JILI 单厂商抓包服务改造成多厂商 `game-spider` 的主要改动，方便后续维护和新增厂商时快速理解项目结构。

## 改动目标

本轮改造的核心目标：

- 项目级命名从 `jili-spider` 调整为 `game-spider`。
- 把 JILI 专属 spider 从通用目录中拆出去。
- 增加 GameArt 抓包能力。
- 移除旧的 `gameConfig`，改成每个厂商自己的配置。
- 把可复用流程沉到通用基类和工厂中。
- 让 GameArt 的组数据、collect 校验、逻辑计数和表结构规则明确可维护。

## 目录结构变化

核心目录：

```text
src/
  config/
  gameFrom/
  models/
  spider/
    spider_base.ts
    spider_factory.ts
    jili/
      jili_spider.ts
      jili_db.ts
    gameart/
      gameart_api.ts
      gameart_db.ts
      gameart_spider.ts
      gameart_utils.ts
```

关键变化：

- 原 `src/spider/spider.ts` 已移除。
- JILI spider 移到 `src/spider/jili/jili_spider.ts`。
- 新增 `src/spider/spider_base.ts`，承载通用抓包循环。
- 新增 `src/spider/spider_factory.ts`，按 `provider` 创建厂商 worker 和 DB 类。
- 新增 GameArt 相关实现目录 `src/spider/gameart`。

## 通用抓包流程

通用流程在 `src/spider/spider_base.ts`：

1. `init()`
2. `requestGameInfo()`
3. `saveGameInfo()`
4. `prepare()`
5. `getBet()`
6. 循环执行 `spinOnce()`
7. `saveSpinResult()`
8. `isStop()` 判断是否达到目标数量

厂商只需要实现这些抽象方法，不应把厂商协议细节写回 `SpiderBase`。

工厂在 `src/spider/spider_factory.ts`：

- `provider = jili` 时创建 `JiliDb` + `SpiderWork`。
- `provider = gameart` 时创建 `GameArtDb` + `GameArtSpiderWork`。

## 配置变化

旧配置：

```yaml
gameConfig:
  ...
```

已移除。

新配置按厂商拆分：

```yaml
provider: gameart

jiliConfig:
  bet: 0
  isOld: false
  buyBouns:
    enable: false
    index: 0
    hasDefaultIndex: true
  extra:
    enable: false
    index: 0
    hasDefaultIndex: true
  special: false
  gameName: 3 Coin Treasures 2

gameartConfig:
  bet: 0
  buyBouns:
    enable: false
    index: 0
  extra:
    enable: false
    index: 0
  special: false
  gameName: Lunar Rabbit
```

读取规则：

- 通用逻辑使用 `config.currentGameConfig`。
- JILI 专属逻辑使用 `config.currentJiliConfig`。
- GameArt 专属逻辑使用 `config.currentGameartConfig`。

注意：`buyBouns` 是历史拼写，当前代码和配置继续沿用。

## GameArt 接入

GameArt 新增文件：

- `src/gameFrom/gameart.ts`：从启动 URL 解析 `sid`、`kid`、key 和 `/rgs/engine` 地址。
- `src/spider/gameart/gameart_api.ts`：负责 config、bet/play、后续 play、collect 请求。
- `src/spider/gameart/gameart_db.ts`：负责分类、表名、数量、金额、win 校验和写库。
- `src/spider/gameart/gameart_spider.ts`：连接 `SpiderBase` 和 GameArt API/DB。
- `src/spider/gameart/gameart_utils.ts`：GameArt 加解密、kid/session 解析工具。

GameArt 请求体是加密文本，入库保存的是解密后的 JSON 响应数据。

## GameArt seq 规则

GameArt `/rgs/engine` 使用 seq：

- config 请求：`seq=0`
- 新局请求：`bet + play`，`seq=0`
- 新局请求包含两个 action，所以后续请求从 `seq=2` 开始。
- bonus/free spin 过程中继续发 `play`，每次 action 数量加到 seq 上。
- 检测到 win 后发 `collect`。
- 如果 collect 返回服务端还期待 `play`，则继续补 `play` 后再 collect。

后续 play/collect 当前最大次数限制为 30，避免异常循环。

## GameArt 金额和 bet 口径

GameArt 内部金额需要除以 100：

```text
内部金额 / 100 = 前端显示金额
```

示例：

- 内部 `100` 表示显示 `1`
- 内部 `260` 表示显示 `2.6`

下注请求示例：

```json
[
  { "action": "bet", "context": [25, 4] },
  { "action": "play", "context": null }
]
```

含义：

- 固定 25 条线。
- `[25, 4]` 的内部总下注是 `25 * 4 = 100`，显示下注是 `1`。
- `[25, 400]` 的内部总下注是 `10000`，显示下注是 `100`。

`gameartConfig.bet = 0` 时，默认显示下注为 `1`。

buy bonus 的真实下注：

```text
realBet = baseBet * buyOutcome.multiplier
```

这里的 multiplier 是购买成本倍率，不是中奖倍率。

## GameArt context 规则

GameArt buy bonus / feature 请求 context 不硬编码。

当前逻辑会优先从 config 响应中读取：

```text
configResponse.events[0].context.buyOutcomes
```

按 name 前缀区分：

- `BONUS...`
- `FEATURE...`

然后按配置 index 取对应项。

如果服务端没有返回 `buyOutcomes`，才使用兜底值：

- BONUS：`BONUS`
- FEATURE：`FEATURE1`、`FEATURE2`、`FEATURE3`、`FEATURE4`

表名按配置 index 区分，从 0 开始。

## GameArt 表名和目标数量

GameArt spin 表名使用游戏 id，也就是 `gi`，不使用游戏 name。

以 Lunar Rabbit，`gi=360` 为例：

| 模式 | 表名 | 目标数量 |
| --- | --- | --- |
| 普通未触发 bonus | `gameart_spin_360_normal` | 300000 |
| 普通触发 bonus | `gameart_spin_360_special` | 3000 |
| buy bonus | `gameart_spin_360_buy_special_0` | 5000 |
| extra 未触发 bonus | `gameart_spin_360_extra_normal_0..3` | 300000 |
| extra 触发 bonus | `gameart_spin_360_extra_special_0..3` | 3000 |

补充规则：

- 开启 `buyBouns` 时 normal 目标数量为 0。
- extra normal 仍为 300000。
- extra special 为 3000。
- 当前只有一个 BONUS，所以默认是 `buy_special_0`，后续如果多个 BONUS，通过配置 index 区分。

## GameArt group 数据

只有多条组成的一局才写 group 字段。

字段：

- `group_id`
- `group_seq`

规则：

- 单条数据：`group_id = null`，`group_seq = null`
- 多条组数据：`group_id = nanoid(16)`
- `group_seq` 从 1 开始递增
- collect 也入库，作为组内最后一条
- 最后一条 `group_seq` 仍然有值，不是 null

组数据写库策略：

1. 先完整构造组内所有数据。
2. collect win 校验通过。
3. 使用数据库事务一次 `bulkCreate`。

这样代码层面的错误不会导致半组数据写入。

## GameArt win 和 collect 校验

GameArt win 统计不再使用 `spinWin.pay` 兜底。

当前规则：

- 单条普通局优先读 `gameEnd.win` 或 `gameRoundOver.win`。
- bonus/free spin 中间包统计 `bonusWin.pay`。
- 如果某包出现 `gameEnd.win`，通常表示整组累计值，当前包增量为：

```text
gameEnd.win - previousGroupWin
```

collect 校验：

- 只有检测到 win 才发 collect。
- 组数据会把前面所有数据的 win 加总。
- 加总结果必须等于 collect 返回的 `gameRoundOver.win`。
- 不一致直接抛错，不写库。
- collect 入库时：
  - `totalWin` 是整组总 win。
  - `rate` 是整组总 win / bet。
  - `group_seq` 是组内最后序号。

## 逻辑计数

GameArt 不能直接按表行数判断是否抓满，因为一局可能有多行，还包含 collect 行。

当前逻辑计数：

```sql
group_id IS NULL 的行数 + distinct group_id 的数量
```

实现位置：

- `DatabaseManager.getSpinLogicalCount`

因此一组多行只算 1 条。

## 数据库字段和索引

动态 spin 表字段定义在 `src/models/SpinData.ts`。

主要字段：

- `id`
- `data`
- `compress`
- `totalWin`
- `from`
- `bet`
- `rate`
- `group_seq`
- `group_id`
- `create_time`

索引：

- `rate_idx`
- `group_id_idx`

迁移规则：

- 新表直接创建完整字段和索引。
- 已存在 GameArt 表会补 `group_seq`、`group_id` 和索引。
- JILI 旧表不补 group 字段和索引。
- 旧 `next_id` 不迁移，当前统一使用 `group_seq`。

## 压缩规则

压缩配置在：

```yaml
spiderConfig:
  compress: 0
```

保存数据时：

- `CompressType.None` 不打印压缩率日志。
- 其他压缩方式会打印压缩结果。
- 解压读取由 `decompressData` 处理。

## JILI 保持逻辑

JILI 仍保留原有 WebSocket/protobuf 逻辑：

- `src/spider/jili/jili_spider.ts`
- `src/spider/jili/jili_db.ts`
- `src/spider/jili/proto/general`

JILI 数量规则：

- normal：300000
- special：3000
- buy bonus special：5000
- 开启 buyBouns 时 normal 目标数量为 0

JILI 旧业务表不新增 `group_id` / `group_seq`。

## 后续新增厂商建议

新增厂商时建议沿用当前模式：

1. 在 `src/config/types.ts` 增加 provider 和厂商 config 类型。
2. 在 `Config.serverConfig` 中增加默认配置。
3. 增加 `config/awc/{PROVIDER}.json`。
4. 增加 `config/huidu/{provider}.json`。
5. 在 `src/gameFrom` 增加厂商 session 解析。
6. 在 `src/spider/{provider}` 增加 api/db/spider。
7. 在 `spider_factory.ts` 注册厂商。
8. 如需特殊计数或表字段，在 `DatabaseManager` 中按 provider 做最小范围扩展。

原则：

- 通用流程放 `SpiderBase`。
- 厂商协议放厂商目录。
- DB 表名、数量、win 口径等厂商差异放厂商 DB 类。
- 不要把某个厂商的业务分支写进另一个厂商目录。

## 验证

本轮改造后使用以下命令验证：

```bash
npm run build
```

构建通过。
