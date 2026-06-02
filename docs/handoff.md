# Game Spider 会话交接文档

本文档用于让下个会话快速理解当前项目状态、核心架构和 GameArt/JILI 抓包规则。当前项目已经从单一 JILI 抓包服务演进为多厂商抓包服务，项目级名称为 `game-spider`。

## 项目定位

- 入口：`src/index.ts`
- 配置：`config/server.yaml`
- 厂商目录配置：
  - AWC 游戏目录：`config/awc/{PROVIDER}.json`
  - 灰度启动配置：`config/huidu/{provider}.json`
- 当前支持厂商：
  - `jili`
  - `gameart`

运行流程：

1. 读取 `config/server.yaml`。
2. 按 `provider` 加载对应厂商的游戏目录和启动配置。
3. 初始化数据库，并按 `provider` 创建 `game_info` / `game_proto` 表名。
4. 从 `huidu` 获取游戏启动 URL。
5. 通过 `spider_factory` 创建厂商自己的 spider。
6. 循环 spin，保存抓到的下注数据，达到目标数量后停止。

## 常用命令

```bash
npm run build
npm run dev
npm run start
npm run db-check
npm run db-redata
```

构建验证使用：

```bash
npm run build
```

## 配置结构

旧的 `gameConfig` 已移除。现在每个厂商使用自己的配置：

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

代码中通过 `config.currentGameConfig` 读取当前厂商配置；需要厂商特有字段时使用：

- `config.currentJiliConfig`
- `config.currentGameartConfig`

注意：`buyBouns` 是历史字段名，代码里仍沿用这个拼写。

## 多厂商架构

核心文件：

- `src/spider/spider_base.ts`：通用抓包 worker，负责请求游戏信息、循环 spin、保存结果、停止判断。
- `src/spider/spider_factory.ts`：按 `config.provider` 创建厂商 spider 和 DB 类。
- `src/spider/jili/jili_spider.ts`：JILI spider。
- `src/spider/gameart/gameart_spider.ts`：GameArt spider。
- `src/models/index.ts`：数据库管理、动态 spin 表创建、GameArt 旧表字段补齐。
- `src/models/SpinData.ts`：动态 spin 表字段定义。

新增厂商建议按当前模式扩展：

1. 在 `src/config/types.ts` 增加 provider 和厂商配置类型。
2. 增加 `config/awc/{PROVIDER}.json` 和 `config/huidu/{provider}.json`。
3. 增加 `src/gameFrom/{provider}.ts` 解析启动 URL 和会话。
4. 增加 `src/spider/{provider}/{provider}_api.ts`。
5. 增加 `src/spider/{provider}/{provider}_db.ts`。
6. 增加 `src/spider/{provider}/{provider}_spider.ts`。
7. 在 `spider_factory.ts` 注册新厂商。

## JILI 摘要

JILI 仍使用 WebSocket/protobuf 流程：

- spider：`src/spider/jili/jili_spider.ts`
- DB：`src/spider/jili/jili_db.ts`
- proto：`src/spider/jili/proto/general`

数量规则和旧逻辑保持：

- normal：300000
- special：3000
- buy bonus special：5000
- buyBouns 开启时 normal 目标数量为 0

JILI 旧表不补 `group_id` / `group_seq` 字段，也不补 group 索引。

## GameArt 启动和请求

GameArt 相关文件：

- `src/gameFrom/gameart.ts`
- `src/spider/gameart/gameart_api.ts`
- `src/spider/gameart/gameart_db.ts`
- `src/spider/gameart/gameart_spider.ts`
- `src/spider/gameart/gameart_utils.ts`

启动 URL 解析：

- 从灰度拿到 GameArt HTML URL。
- 优先读取 URL query 中的 `sid` / `kid`。
- 如果缺少 `sid` 或 key，则请求 HTML 并解析 session 配置。
- `/rgs/engine` 请求体是加密文本，解密/加密逻辑在 `gameart_utils.ts`。

GameArt 请求流程：

1. `config` 请求：`seq=0`
2. 新局请求：`bet + play`，`seq=0`
3. 新局请求包含两个 action，后续 `play` 或 `collect` 从 `seq=2` 开始。
4. bonus/free spin 中间过程继续发 `play`。
5. 只有检测到 win 后才发 `collect`。
6. 如果 collect 返回 “was expecting: play”，继续补 `play`，直到可 collect 或达到上限。

当前后续请求上限是 30 次，避免异常局无限循环。

## GameArt 金额口径

GameArt 内部金额需要除以 100，才是前端显示金额：

- 内部 `100` = 显示 `1`
- 内部 `260` = 显示 `2.6`

下注请求格式：

```json
[
  { "action": "bet", "context": [25, 4] },
  { "action": "play", "context": null }
]
```

含义：

- 固定 25 条线。
- `[25, 4]` 表示内部总下注 `25 * 4 = 100`，前端显示 `1`。
- `[25, 1]` 表示内部总下注 `25`，前端显示 `0.25`。
- `[25, 400]` 表示内部总下注 `10000`，前端显示 `100`。

`gameartConfig.bet = 0` 时，默认显示下注为 `1`。

buy bonus 的真实 bet：

```text
realBet = baseBet * buyOutcome.multiplier
```

例如 baseBet 为 1，BONUS multiplier 为 100，则保存 bet 为 100。这个 multiplier 是购买成本倍率，不是中奖倍率，所以买入 100 但只赢很小金额是合理结果。

## GameArt context 规则

请求 context 不硬编码成 `BONUS1` 或 `FEATURE1`。

代码会先从 `configResponse.events[0].context.buyOutcomes` 中按类型读取真实配置：

- `BONUS...`
- `FEATURE...`

然后按 `buyBouns.index` 或 `extra.index` 取对应项。

如果服务端 config 没返回 `buyOutcomes`，或者对应 index 不存在，会直接报错，不再兜底发送 `BONUS` / `FEATURE1`。这是为了避免线上服务端未开放购买项时返回 `unexpected args for action "play"`。

表名用配置里的 index 区分，从 0 开始。

## GameArt 表名和数量

GameArt 表名用游戏 id，也就是 `gi=360`，不再用 name。

当前 Lunar Rabbit 表：

- `gameart_spin_360_normal`：300000
- `gameart_spin_360_special`：3000
- `gameart_spin_360_buy_special_0`：5000
- `gameart_spin_360_extra_normal_0`：300000
- `gameart_spin_360_extra_normal_1`：300000
- `gameart_spin_360_extra_normal_2`：300000
- `gameart_spin_360_extra_normal_3`：300000
- `gameart_spin_360_extra_special_0`：3000
- `gameart_spin_360_extra_special_1`：3000
- `gameart_spin_360_extra_special_2`：3000
- `gameart_spin_360_extra_special_3`：3000

规则：

- 普通 spin 未触发 bonus：`normal`
- 普通 spin 触发 bonus：`special`
- buy bonus：`buy_special_{index}`
- extra 未触发 bonus：`extra_normal_{index}`
- extra 触发 bonus：`extra_special_{index}`
- buyBouns 开启时，normal 目标数量为 0
- extra 的 normal 目标仍为 300000，special 目标为 3000

## GameArt 保存数据

GameArt 保存的是 JSON 响应数据，写入动态 spin 表的 `data` 字段。

压缩规则：

- 全局配置在 `server.yaml -> spiderConfig.compress`
- `CompressType.None` 时不打印压缩率日志。
- 自动压缩由 `compressDataWithThreshold` 决定。

保存字段：

- `data`：JSON buffer，可能被压缩。
- `compress`：压缩类型。
- `totalWin`：本条记录赢分，已换算为显示金额。
- `bet`：本局真实下注金额，已换算为显示金额。
- `rate`：`totalWin / bet`。
- `from`：数据来源，例如 `huidu`。
- `group_id`：组 id，只有多条组数据才有。
- `group_seq`：组内序号，只有多条组数据才有。

## GameArt group 规则

只有一组多条数据时才写 `group_id` 和 `group_seq`。

- 单条普通数据：`group_id = null`，`group_seq = null`
- 多条组数据：`group_id = nanoid(16)`
- `group_seq` 从 1 开始递增
- collect 也写入数据库，作为组内最后一条
- 如果一组有 10 条数据，最后一条 `group_seq = 10`

一组数据会先完整构造，并完成 collect win 校验，再用数据库事务 `bulkCreate` 一次写入。这样正常错误不会写半组数据；如果进程被强杀或数据库连接异常，事务由数据库处理。

统计抓包是否完成时不能直接 count 行。GameArt 使用逻辑计数：

```sql
group_id IS NULL 的行数 + distinct group_id 的数量
```

因此一组多行包含 collect，也只算 1 条有效局数。

## GameArt win 和 collect 校验

GameArt 不再用 `spinWin.pay` 兜底统计。

当前 win 规则：

- 普通单条优先读 `gameEnd.win` / `gameRoundOver.win`。
- bonus/free spin 中间包读 `bonusWin.pay`。
- 如果某包有 `gameEnd.win`，通常表示整组累计 win；当前包增量为 `gameEnd.win - previousGroupWin`。
- collect 的 `gameRoundOver.win` 是最终总赢。

校验规则：

1. 只有检测到 win 时才发 collect。
2. 对组数据，先把前面所有 play/bet 数据的 win 加总。
3. 和 collect 返回的 `gameRoundOver.win` 对比。
4. 不一致直接抛错，不写库。
5. collect 行入库时：
   - `totalWin` 等于前面所有数据总和。
   - `rate` 等于总 win / bet。
   - `group_seq` 是组内最大序号。

## 数据库结构和迁移

动态 spin 表字段定义在 `src/models/SpinData.ts`。

当前字段包括：

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

动态表创建逻辑在 `DatabaseManager.ensureTableExists`。

注意：

- 新表会按 `SpinData.ts` 创建完整字段和索引。
- 已存在表如果 provider 是 `gameart`，会补 `group_seq` / `group_id` 字段和 group 索引。
- JILI 旧表不补 group 字段和索引。
- 旧 `next_id` 数据不用迁移，当前统一使用 `group_seq`。

## 已清理的旧逻辑

- 项目级名称从 `jili-spider` 改为 `game-spider`。
- 旧入口 `src/spider/spider.ts` 已删除。
- JILI spider 移到 `src/spider/jili/jili_spider.ts`。
- DB 实例创建放入 `spider_factory.ts`。
- 旧 `gameConfig` 已从主配置和入口移除，使用 `jiliConfig` / `gameartConfig`。

## 注意事项

- `config/server.yaml` 里包含数据库和 Telegram 敏感配置，不要复制到公开上下文。
- `buyBouns` 拼写虽然不标准，但为了兼容已有配置和代码暂不改名。
- GameArt 的 `BONUS` 数量未来可能变多，请继续依赖 `buyOutcomes` 的真实 name，不要手写 `BONUS1`。
- GameArt 组数据统计、RTP 分析、最大中奖分析时，应按 `group_id` 聚合；如果只看最终结算，可以取每组最大 `group_seq` 的 collect 行。
- 如果后续新增厂商，优先复用 `SpiderBase` 和 `spider_factory`，不要把厂商逻辑写回通用 worker。
