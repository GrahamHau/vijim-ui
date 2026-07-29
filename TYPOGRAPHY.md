# `@vijimlabs/ui` 字体与表单节奏

## 唯一字体栈

全平台由 `VijimProvider` 注入 `FONT.family`：

```css
-apple-system, BlinkMacSystemFont, "SF Pro Text", "SF Pro Display",
"Helvetica Neue", "PingFang SC", "Hiragino Sans GB", "Segoe UI",
"Microsoft YaHei", Arial, sans-serif
```

macOS / iOS 优先使用系统 San Francisco，中文使用苹方；Windows 保留 Segoe UI 与微软雅黑回退。
业务不得指定另一套 `font-family`，字距固定为 `0`，编号和代码才使用 `FONT.mono`。

## 语义字阶

| 角色 | 字号 / 行高 / 字重 | 用途 |
|---|---|---|
| `pageTitle` | 24 / 1.30 / 600 | 正文唯一 `h1` |
| `dialogTitle` | 16 / 1.35 / 600 | Modal / Drawer 标题 |
| `sectionTitle` | 16 / 1.35 / 600 | 卡片、区段、表单分区标题 |
| `body` | 14 / 1.50 / 400 | 正文、说明正文 |
| `label` | 13 / 1.40 / 500 | 字段标签、控件文字、次级命令 |
| `supporting` | 12 / 1.45 / 400 | 字段提示、区段解释、元信息 |

代码读取 `TYPOGRAPHY`；CSS 读取 `--type-*-size` / `--type-*-line`。禁止在业务页写 11.5、12.5、13.5、650、680 等近似值制造第二套字阶。

## 表单节奏

| 关系 | 默认值 |
|---|---:|
| 字段标签 → 控件 → 辅助文字 | 5px |
| 同行字段列距 | 16px |
| 字段行距 | 14px |
| 表单区段间距 | 14px |
| 区段标题与内联空态内容起线 | 16px |

`MaterialFormGrid columns={1|2|3}` 决定桌面列数，620px 以下自动单列；`gap="sm|md|lg"` 只选择既定密度。辅助文字固定放在控件后，校验状态替换普通提示，不并列堆叠两套说明。
