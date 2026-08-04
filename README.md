# `@vijimlabs/ui`

VIJIM Labs 的唯一业务 UI 出口。

本仓库由 `GrahamHau/vijimlabs` 的 `packages/ui` 保留历史抽取而来。抽取基线为总仓提交 `a5681e45d7fb784c776de189a8d19e5a1c9e50ec`；从此后的 UI 组件开发与版本发布以本仓库为准。总仓及现有六个系统的 vendor 依赖暂不改动，待后续按系统逐个切换。

- **对外**：业务只 `import { … } from '@vijimlabs/ui'`
- **对内**：Mantine 9 + `vijimTheme`，Mantine 是实现细节
- **范围**：共享组件、token、主题和交互语义，不包含业务页面与流程

细则与白名单：[`SURFACE.md`](./SURFACE.md) · [`TYPOGRAPHY.md`](./TYPOGRAPHY.md) · [`COLOR.md`](./COLOR.md)

## 硬规则

| 允许 | 禁止 |
|---|---|
| `import { Button, DataTable, FilterBar } from '@vijimlabs/ui'` | 业务直连 `@mantine/*` / antd / radix / recharts |
| 使用本包 token | 页面写 hex、圆角、height、duration 魔数 |
| 新 variant 只改本包联合类型与主题 | 复制 shadcn 或另建第二套组件库 |
| `VijimProvider` 包一层 | 业务自己挂 `MantineProvider` |
| 壳层使用 `AppShell` / `TopBar` / `PageShell` | 业务自写 sidebar / topbar 壳层 |

## 本地开发

```bash
npm ci
npm run check
```

`npm run check` 会依次执行 TypeScript 检查和生产构建。生成可供业务仓库安装的私有包：

```bash
npm pack
```

安装本地包示例：

```bash
npm install /absolute/path/vijimlabs-ui-0.2.28.tgz
```

## 发布

1. 更新 `package.json` 与 `package-lock.json` 中的版本。
2. 运行 `npm run check` 和 `npm pack --dry-run`。
3. 合入 `main` 后创建并推送同版本标签，例如 `v0.2.29`。
4. GitHub Actions 自动创建私有 Release，并附上 `vijimlabs-ui-0.2.29.tgz`。

本包保持 `private: true`，不发布到公开 npm registry。业务系统切换到独立仓库前，继续使用各自已经锁定的 vendor `.tgz`。

## 常用导出

- 主题：`VijimProvider`、`COLORS`、`RADIUS`、`MOTION`、`SHADOWS`、`TYPOGRAPHY`
- 录入：`Button`、`TextInput`、`SearchInput`、`Select`、`SearchableSelect`、日期、文件与图片上传
- 筛选：`FilterBar`、`FilterSegment`、`FilterTerm`
- 数据：`DataTable`、`DataTableColumnHeader`、`AreaChart`、`BarChart`
- 浮层：`Modal`、`Drawer`、`Menu`、`Popover`
- 壳层：`AppShell`、`TopBar`、`PageShell`、`ShellTabs`、`FormSection`

完整公开面以 [`SURFACE.md`](./SURFACE.md) 为准。
