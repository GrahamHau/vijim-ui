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
| 阴影只表海拔 | 页面内容 xs/sm 均平面 · 浮层 md · 模态 lg；状态用灰面/边线 |
| 字体统一 | Apple 平台优先原生系统字体；字号、字重、行高只读 [`TYPOGRAPHY.md`](./TYPOGRAPHY.md) 的语义角色 |
| 字距归零 | 中英文标题、正文和紧凑控件统一 `letter-spacing: 0`，不靠负字距挤压容器 |
| 选中语义 | 列表切换与分面词统一中性灰选中；品牌色留给主按钮与链接 |
| 减动效 | `prefers-reduced-motion` 全局收短 |
| 克制 | 无双层毛玻璃、无 confetti、无页面魔数动画 |

---

## 2. 导出白名单（刻意短）

### 主题
`VijimProvider` · `vijimTheme` · `COLORS` · `TAG_COLORS` · `WORKFLOW_STEP_COLORS` · `RADIUS` · `MOTION` · `SHADOWS` · `FONT` · `TYPOGRAPHY` · `FORM_LAYOUT` · `CONTROL_HEIGHT` · `CONTROL_PADDING_X`

### 图标
`Icon`（语义名白名单，业务禁止直连 Tabler）

### 录入
`Button` · `UnstyledButton`（仅 Tree 行 / 整行选择器）· `TextInput`（xs/sm/md/lg 对应 28/32/40/44）· `Textarea` · `SearchInput` · `FileInput`
`SearchInput filter` = 32px 下划线筛选；`lookup` = 40px 浅灰查找框。业务不得用全局 input CSS 覆盖。
`Select` · `SearchableSelect`
`Select` / `SearchableSelect` 默认不显示清空叉；只有搜索、筛选重置等明确需要清空入口的场景才显式传 `clearable`。
`DatePickerInput` / `DateInput`（`YYYY-MM-DD | null`）
`ImageGalleryUpload`（通用图片选择 / 粘贴 / 拖拽上传）
`Checkbox` · `Switch`

### 筛选（唯一壳）
`FilterBar` · `FilterBatchBar` · `FilterRow` · `FilterField`
`FilterSegment`（二态/少态切换，无外框灰选中）· `FilterTerm`（无边框分面，灰选中）· `FilterFacet` · `FilterActive`
~~`FilterToolbar`~~ 仅兼容，新代码不要用

### 浮层 / 导航
`Modal` · `Drawer` · `Menu` · `Popover` · `Tooltip`
`Tabs` · `SegmentedControl`（表单口径；列表互斥优先 FilterSegment，选中均为无边框灰块）· `Pagination`

### 数据
`DataTable`（列表唯一；宽表普通滚轮与 Shift + 滚轮均横向移动；可排序列点击表头按正序、倒序、默认三态循环）
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
表单只用 `FormSection` · `MaterialFormGrid` · `MaterialFormField`：组件负责列数、响应式、横纵间距与辅助文字基线；业务不得再写 `.material-form-grid` / `.material-field` 布局覆盖。

### 工作画布 / 详情页（唯一层级）

| 层 | 规则 |
|---|---|
| 壳层 | `AppShell` 独占侧栏、TopBar、移动抽屉和外层 `20/22` 内容边距；业务页根节点不得再补一轮 padding |
| 工作画布 | 默认使用 `#F7F8FA` 的 `contentSurface="background"`；详情可放入一个 `#FFFFFF` 主容器，提供明确任务边界 |
| 主容器 | 全页最多一个，建议 `max-width: 1120px`、8px 圆角、1px 边线与单层轻阴影；容器内部不得再套同级卡片 |
| 标题 | TopBar 负责返回与路线定位；正文记录标题是页面唯一 `h1`，24px / 600 / 字距 0 |
| 区段 | 详情页一级业务块统一使用 `SectionHeader contained`：默认同时提供标题与一行职责解释，浅灰标题带、`1px` 外框、8px 圆角、白色内容面、常驻阴影 0；并列的同级内容共用一个外框与中间分隔线，标题必须共享父级 Grid 的同一行（可用 `subgrid`），由内容最高项自然撑开，禁止分别计算或写死像素高度。二级数据行继续只用横线和留白，禁止把每一行再做成卡片 |
| 数据行 | 基准 56px，长内容自然增高；列对齐优先于小卡片，平板重排、手机单列，禁止用横向滚动掩盖字段 |
| 流程节点 | 复杂业务节点按顺序纵向排列，可收起或展开；节点卡直接对齐正文基线，不额外叠加左侧流程轴、圆点、连接线或为它们预留空档。每个节点使用一个共享 `Card` 承载标题、说明、交付物、审批与责任数据：卡面 `#FFFFFF`、细边线 `#EEEEEE`，卡头按完成绿、当前蓝、未开始灰、异常红做轻色阶，卡体保持白色。卡内只保留卡头/卡体和不同业务行之间的必要分隔，禁止再套状态色容器或同级卡片 |
| 审批记录 | 行内信息链固定为 `28px Avatar → 姓名/角色 → 图标+纯文本结论`，不另设前置状态圆点；审批意见换到下一行并从姓名列对齐，使用一层浅灰内嵌区，不使用绿色意见卡或重复状态徽标。完成结果的小勾使用 `--workflow-step-completed`；真实审批人缺失时必须明确写“审批人未记录”，禁止拿审批路线、主体 ID 或模拟头像冒充已审批人 |
| 状态 | 状态、元信息、数量、命令互斥表达；复杂节点的流程状态只由卡头色阶与精确状态文案承担，数量是普通文字，命令必须有 Hover / Focus / Open |
| 空态 | `Empty scope="page|section|inline"`；整页才允许大面积居中，日志等从属区段使用 72–88px 内联空态 |

详情工作区禁止卡片套卡片、默认态残留 Hover 灰面、同一完成状态同时使用绿勾与绿色徽标，
也禁止业务新增 `FlatPanel` / `FeishuCard` 等同义门面。主容器内的流程与数据工作区应使用可用宽度；
只有真正独立、重复的业务对象才使用并列卡片。

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
其中 `MaterialPageToolbar` 自带左右槽位、换行和最小宽度约束，业务页只提供内容，
不得再为同一个工具条手写 flex 对齐。
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
| 全部可见/与我相关、公共/个人、画廊/列表 | `FilterSegment` | FilterTerm 铺一排、SegmentedControl |
| 品牌/产品等级/平台/品类等多选项 | `FilterTerm` | 套大外框、白底选中 |
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
