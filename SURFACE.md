# `@vijimlabs/ui` 封闭面（唯一业务 UI 系统）

## 一句话

业务只认 **`@vijimlabs/ui`**。
**Mantine 是包内实现细节，不是业务依赖。**
**旧 `@vijimlabs/design-system` 在 Studio 已下线**（不再是运行时真源）。
不是重画全站：点状换控件，页面 IA / 路由 / 业务 API 沿用现网 Studio。

---

## 0. Mantine 边界（硬）

| 层 | 允许 | 禁止 |
|---|---|---|
| `packages/ui` 内部 | `@mantine/*`、theme、适配 | 把 Mantine 名字/API 原样推给业务 |
| Studio / GTM / 业务 app | 只 `import { … } from '@vijimlabs/ui'` | `@mantine/*`、`createTheme`、`MantineProvider`、直连 hooks/form/charts |
| 迁移适配 `components/ds/*` | 可 re-export 本包，保持旧 API | 再包一层 antd / radix / 手搓皮 |

**原则（Purpose / Simplicity）**

1. 同类能力 **一个名字**（表→DataTable，日→DatePicker，搜→SearchInput，筛壳→FilterBar）。
2. 业务 **不写** hex / 圆角 / 控件高度 / duration；只读 `COLORS` · `RADIUS` · `MOTION` · `SHADOWS` · `CONTROL_HEIGHT`。
3. 新能力先拼 ≤3 个现成组件；不能拼再进本包加 **一个** 名字。
4. **禁止** 业务为「更像 Mantine 文档」再开第二套 props 方言。
5. 组件分类遵循 **MECE**：职责互斥、场景完整；同一职责的视觉差异加语义 variant，不新增同义组件。

---

## 1. 触感与简洁（本包内建，非外部手册）

落地在 `tokens` + `vijimTheme` + `styles.css`，验收看组件而不是再引文档。

| 规则 | 做法 |
|---|---|
| 按下即反馈 | 可点控件 `scale(0.97)` + 100ms ease-out |
| 默认不弹 | 浮层 `springish`，无 overshoot |
| 圆角按尺寸 | term 6 · 控件 8 · 面板 12 · 弹层 16 |
| 阴影按厚度 | 小滑块 xs · 卡片 sm · 浮层 md · 模态 lg |
| 选中语义 | 中性选中 / 品牌词条选中两套，不另开色 |
| 减动效 | `prefers-reduced-motion` 全局收短 |
| 克制 | 无双层毛玻璃、无 confetti、无页面魔数动画 |

---

## 2. 导出白名单（刻意短）

### 主题
`VijimProvider` · `vijimTheme` · `COLORS` · `RADIUS` · `MOTION` · `SHADOWS` · `FONT` · `CONTROL_HEIGHT` · `CONTROL_PADDING_X`

### 图标
`Icon`（语义名白名单，业务禁止直连 Tabler）

### 录入
`Button` · `TextInput` · `Textarea` · `SearchInput`
`SearchInput filter` = 32px 下划线筛选；`lookup` = 40px 浅灰查找框。业务不得用全局 input CSS 覆盖。
`Select` · `SearchableSelect`
`DatePickerInput` / `DateInput`（`YYYY-MM-DD | null`）
`ImageGalleryUpload`（通用图片选择 / 粘贴 / 拖拽上传）
`Checkbox` · `Switch`

### 筛选（唯一壳）
`FilterBar` · `FilterBatchBar` · `FilterRow` · `FilterField`
`FilterSegment`（二态外框）· `FilterTerm`（无边框分面）· `FilterFacet` · `FilterActive`
~~`FilterToolbar`~~ 仅兼容，新代码不要用

### 浮层 / 导航
`Modal` · `Drawer` · `Menu` · `Popover` · `Tooltip`
`Tabs` · `SegmentedControl`（仅表单口径；列表互斥用 FilterSegment）· `Pagination`

### 数据
`DataTable`（列表唯一）
`Table`（极少数手写表头 / 对照页；**新列表禁止**）
`AreaChart` · `BarChart`（常规语义图仅这两种）
`ChartPrimitives`（仅既有复杂分析图；一个受控命名空间，不向业务散落 Recharts 零件）

### 反馈
`Empty` · `Skeleton` · `Spinner` · `notify` · `Alert` · `SpotlightSearch`

### 布局 / 字
`Stack` · `Group` · `Box` · `SimpleGrid` · `Divider` · `Paper` · `Card`
`Text` · `Title` · `Anchor` · `Badge` · `ActionIcon`

### 壳（全平台唯一）
`AppShell` · `TopBar` · `PageShell` · `ShellTabs` · `FormSection`
几何：侧栏 246 · 品牌区 76 · 顶栏 60 · 内容区 20/22。
业务只填导航 / 品牌 / 用户 / 顶栏标题、中部、动作槽位，**禁止**再写本地 shell CSS。
面板内标题用 `SectionHeader contained`，内边距与下分隔线由本包负责，业务不补选择器。

### ADMIN 迁移兼容
Admin 旧控制台模式仍从 **同一个 `@vijimlabs/ui` root 出口**取用，不再依赖
`@vijimlabs/design-system`。这些名字用于保持 Admin 页面 IA / 业务流不动：
`DashboardPage` · `ListPage` · `SettingsPage` · `DataSection` · `KpiGrid` · `StatCard`
`StatusDot` · `FormField` · `TextArea` · `Dialog` · `AlertDialog`
`List` · `ListItem` · `HStack` · `Grid`。
新业务优先使用上方短清单；迁移完成后再逐步收敛这些兼容名。

### MATERIAL 迁移兼容

Material 旧页面在不改 IA / 业务 API 的前提下，仍从**同一个 `@vijimlabs/ui` 根出口**
取用 `Material*` 前缀的迁移别名，不再保留业务侧 `components/ds`：
`MaterialButton` · `MaterialBadge` · `MaterialIcon` · `MaterialEmptyState`
`MaterialPageHeader` · `MaterialPageToolbar` · `MaterialSectionHeader`
`MaterialDatePicker` · `MaterialInput` · `MaterialTextarea` · `MaterialLabel`
`MaterialFormField` · `MaterialFormGrid` · `MaterialFormSection` · `MaterialFormActions`
`MaterialSelect*` · `MaterialSearchableSelect` · `MaterialSearchField*`
`MaterialSegmentedControl` · `MaterialSwitch` · `MaterialTable*`
`MaterialDialog*` · `MaterialManagedDialog`。
这些名字只承担迁移期 props 兼容；视觉实现、主题和 Mantine 边界仍归本包。
旧 Material 页面仍使用的 `--spacing-*`、`--radius-page` 等布局变量也由
`VijimProvider` 映射到本包令牌，业务侧不得自行补第二套数值。

### 钩子
`useForm` · `isNotEmpty` · `isEmail` · `hasLength`
`useDisclosure` · `useMediaQuery` · `useDebouncedValue`

### 高级（少用）
`Combobox` + `useCombobox` — 自由输入+候选；常规选值用 Select
`DefaultThemeProvider` / `IconSearch` — **仅** theme-compare

### 明确不做（防再漂）
KpiRow / AssetCard / ClickableCard / FilterChip / FilterPill /
业务直连 Mantine·recharts·tabler / 在业务 app 里新增第二套视觉组件

---

## 3. 语义对照（别混）

| 场景 | 用 | 别用 |
|---|---|---|
| 公共/个人、画廊/列表 | `FilterSegment` | FilterTerm 铺一排、SegmentedControl |
| 平台/品类等多选项 | `FilterTerm` | 套大外框 |
| 筛选可搜下拉 | `SearchableSelect` density=compact | 页面 styles 写 height |
| 表单单选 | `Select` density=default | 原生 select、手搓 Menu |
| 列表数据 | `DataTable` | 拼 Table、手写 grid 表 |
| 主按钮 | `Button` variant filled color brand | 页面涂 `#3370FF` |

---

## 4. 颜色（短）

真源：`COLORS` / 注入的 CSS 变量。与 GTM 同值便于全平台一致。
详见 [`COLOR.md`](./COLOR.md)。品牌 **`#3370FF` 唯一**。

---

## 5. 闸门

1. ESLint：业务禁 `@mantine/*`、禁原生表单标签、禁并行 UI 库。
2. 新 PR：新增组件名必须改本包 + 更新本节白名单。
3. 合入 main 后，Studio `design-system/` 文档可后续同步；**运行时以本包为准**。
4. 默认不上线；交付 = 构建通过 + 预览 URL +（分支上）commit/push。
