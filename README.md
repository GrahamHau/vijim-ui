# `@vijimlabs/ui`

VIJIM Labs **唯一业务 UI 出口**。

- **对外**：业务 / Agent 只 `import { … } from '@vijimlabs/ui'`
- **对内**：Mantine 9 + `vijimTheme`（**实现细节**，禁止业务直连 `@mantine/*`）
- **迁移**：不是重画全站；点状换控件，IA / 业务流沿用现网 Studio

细则与白名单：**[`SURFACE.md`](./SURFACE.md)** · 色表 **[`COLOR.md`](./COLOR.md)**

## 硬规则

| 允许 | 禁止 |
|---|---|
| `import { Button, DataTable, FilterBar } from '@vijimlabs/ui'` | app 直连 `@mantine/*` / antd / radix / recharts |
| 用本包 token（`COLORS` / `RADIUS` / `MOTION`…） | 页面写 hex、圆角、height、duration 魔数 |
| 新 variant 只改本包联合类型 + theme | 复制 shadcn / 再开第二套组件库 |
| 存量页只换控件、保留结构 | 重画整站 IA / 改业务 API |
| `VijimProvider` 包一层 | 业务自己挂 `MantineProvider` |
| 壳层只用 `AppShell` / `TopBar` / `PageShell` | 业务自写 sidebar/topbar 布局 CSS |

没有 `VijimProvider` 的区域 = 主题与触感不生效。Provider 会把平台固定的浅色方案
挂到文档根节点；业务不再单独安装 `ColorSchemeScript` 或维护
`data-mantine-color-scheme`。

## 导出清单（短）

见 [`SURFACE.md` §2](./SURFACE.md)。常用：

- 主题：`VijimProvider` · `COLORS` · `RADIUS` · `MOTION` · `SHADOWS`
- 录入：`Button` · `TextInput` · `SearchInput` · `Select` · `SearchableSelect` · 日期 · `ImageGalleryUpload`
- 筛选：`FilterBar` · `FilterSegment` · `FilterTerm`
- 表：`DataTable`
- 浮层：`Modal` · `Drawer` · `Menu` · `Popover`

## 本地开发

```bash
cd packages/ui && npm run build
# 子系统用 vendor tgz 时（示例）：
cd studio/app && npm pack ../../packages/ui --pack-destination ./vendor \
  && npm install ./vendor/vijimlabs-ui-0.2.4.tgz
cd ../../admin && npm install ./vendor/vijimlabs-ui-0.2.4.tgz --force
```

预览：总仓 `node scripts/dev-preview.mjs up studio`。
