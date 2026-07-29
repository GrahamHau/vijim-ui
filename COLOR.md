# 颜色短名单

**运行真源只有 `@vijimlabs/ui` 的 `COLORS` / `STUDIO_CSS_VARS`。**
色值与 GTM 现网对齐（便于全平台一致），但业务与 Agent **只认本包**，不另引 GTM 主题包、不另开 skill 色表。

## 根色（只这些）

| 角色 | Token | 值 | 用途 |
|---|---|---|---|
| 页面底 | `background` / `--background` | `#F7F8FA` | 壳、主区底；取样自统一视觉参考 |
| 白面 | `surface` / `--surface` | `#FFFFFF` | 卡片、筛选壳、弹层 |
| 灰面 | `muted` / `--muted` / `--bg-2` | `#F6F7F9` | 录入底、Segment 外框 |
| 浅面 | `surface2` | `#FAFAFB` | 次级条 |
| 流程节点边线 | `--workflow-node-card-border` | `#EEEEEE` | 节点卡 1px 边线；取样自节点卡参考 |
| 流程节点灰阶 | `--workflow-node-card-tint` | `#F9F9F9` | 节点卡极轻底部灰阶；取样自节点卡参考 |
| 主字 | `ink` / `--ink` | `#121317` | 标题、正文、选中滑块字 |
| 次字 | `ink2` / `--ink-2` | `#3D4047` | 说明、未选中 nav |
| 弱字 | `mutedForeground` / `--dx-muted` | `#6B7078` | 元信息、未选词条 |
| 占位 | `faint` | `#A6AAB2` | placeholder、禁用装饰 |
| 线 | `border` / `--line` | ink @ 8.5% | 面板描边 |
| 强调线 | `line2` / `--line-2` | ink @ 14% | 底线搜索、强调分隔 |
| **主行动** | `brand` / `--brand` / `--action-primary` | **`#3370FF`** | 主按钮、链接、词条选中字 |
| 主行动悬停 | `brandHover` | `#245BDB` | 主按钮 hover |
| 信息 | `info` | `#1969CD` | 提示 |
| 成功 | `success` | `#18974C` | 达成 |
| 警告 | `warning` | `#EEA800` | 关注 |
| 危险 | `danger` | `#E03742` | 删除/异常 |

## 派生（只调透明度）

| 角色 | Token | 公式 |
|---|---|---|
| 品牌浅底 | `brandMuted` / `--term-selected-bg` | brand @ 8% |
| 品牌软底 | `brandSoft` / `--color-accent-muted` | brand @ 10% |
| 中性选中底 | `selectedBg` | ink @ 7% |
| 叠层 hover | `overlayHover` | ink @ 6% |

词条选中：**底 = brandMuted，字 = brand**，无边框。
不要再用 `#1456F0` 或其它「看起来像飞书」的平行蓝。

## 流程节点状态

Material Hub 的纵向流程轴沿用 William 运行版源码的三态语义，由
`WORKFLOW_STEP_COLORS` 注入 `--workflow-step-*`，业务只能消费变量：

| 状态 | 变量 | 值 |
|---|---|---|
| 当前节点 | `--workflow-step-active` | `#3370FF` |
| 当前节点外圈 | `--workflow-step-active-muted` | brand @ 13% |
| 已完成 | `--workflow-step-completed` | `#00B42A` |
| 未开始边框 | `--workflow-step-pending-border` | `#E5E6EB` |
| 未开始文字 | `--workflow-step-pending-text` | `#83898F` |
| 连接线 | `--workflow-step-connector` | `#F0F1F3` |

这组颜色只用于有明确顺序的流程节点，不替代平台品牌色、按钮色或通用状态色。
审批记录不再使用前置状态圆点；结果区的小勾使用 `--workflow-step-completed`，旁侧“已通过”文字使用可读性更高的 `--color-success`。同一审批结果不再额外叠加绿色 Badge。

## 分类词条

产品定位等互斥分类统一消费 `TAG_COLORS` / `--color-tag-*`。这是一个封闭的
六色短表，不表达流程状态，也不能替代品牌色：

| 分类色 | 变量 | 值 | 当前语义示例 |
|---|---|---|---|
| 蓝 | `--color-tag-blue` | `#356FB6` | 引流款 |
| 青 | `--color-tag-cyan` | `#2A7F88` | 扩展分类 |
| 绿 | `--color-tag-green` | `#3E8461` | 扩展分类 |
| 琥珀 | `--color-tag-amber` | `#9A711C` | 利润款、未分类提醒 |
| 玫红 | `--color-tag-rose` | `#C65370` | 爆款 |
| 紫 | `--color-tag-violet` | `#7163A8` | 活动款 |

每个根色同时注入对应的 `--color-tag-*-muted` 浅底。业务只选择语义变量，
不得在页面内重新写 hex 或复制一套标签调色板。

## 形 / 动 / 触（同一令牌表，不是第二源）

| 键 | 用途 |
|---|---|
| `RADIUS.term / element / panel / overlay` | 按尺寸圆角 |
| `MOTION.press / pressScale / easeOut / springish` | 按压与过渡 |
| `SHADOWS.none/xs/sm` | 页面内一律平面；用边线、灰面和留白建立层级 |
| `SHADOWS.md` | 仅下拉、菜单、Popover 等浮层 |
| `SHADOWS.lg/xl` | 仅 Modal、Drawer 等模态层 |
| `FONT.tracking.*` | 标题字距 |

全在 `src/theme/tokens.ts`，经 `VijimProvider` 注入 CSS 变量。

## 禁止

- 页面手写 hex / 另起 `--xxx-blue`
- `primary` 当品牌蓝（shadcn 的 primary 是近黑，品牌只用 `brand`）
- 词条一套蓝、按钮另一套蓝
- 混灰/混白改色相生成「土红、灰蓝」
- 再挂外部 skill / 第二主题包当实现依赖
