# 颜色短名单

**运行真源只有 `@vijimlabs/ui` 的 `COLORS` / `STUDIO_CSS_VARS`。**
色值与 GTM 现网对齐（便于全平台一致），但业务与 Agent **只认本包**，不另引 GTM 主题包、不另开 skill 色表。

## 根色（只这些）

| 角色 | Token | 值 | 用途 |
|---|---|---|---|
| 页面底 | `background` / `--background` | `#F1F3F6` | 壳、主区底 |
| 白面 | `surface` / `--surface` | `#FFFFFF` | 卡片、筛选壳、弹层 |
| 灰面 | `muted` / `--muted` / `--bg-2` | `#F6F7F9` | 录入底、Segment 外框 |
| 浅面 | `surface2` | `#FAFAFB` | 次级条 |
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

## 形 / 动 / 触（同一令牌表，不是第二源）

| 键 | 用途 |
|---|---|
| `RADIUS.term / element / panel / overlay` | 按尺寸圆角 |
| `MOTION.press / pressScale / easeOut / springish` | 按压与过渡 |
| `SHADOWS.xs…xl` | 材料厚度 |
| `FONT.tracking.*` | 标题字距 |

全在 `src/theme/tokens.ts`，经 `VijimProvider` 注入 CSS 变量。

## 禁止

- 页面手写 hex / 另起 `--xxx-blue`
- `primary` 当品牌蓝（shadcn 的 primary 是近黑，品牌只用 `brand`）
- 词条一套蓝、按钮另一套蓝
- 混灰/混白改色相生成「土红、灰蓝」
- 再挂外部 skill / 第二主题包当实现依赖