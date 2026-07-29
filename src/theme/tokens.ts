/**
 * @vijimlabs/ui 唯一设计令牌（业务唯一真源）
 *
 * - 色：短名单见 COLOR.md（与 GTM 同值便于全平台一致）
 * - 形/动/触：本包内建（按压、ease-out、软阴影、按尺寸圆角）
 * - Mantine 默认 token 一律被 vijimTheme 覆盖，业务不要读 Mantine CSS 变量
 */

/** 录入高度：compact 32 / default 40 / large 44（同 GTM control-height） */
export const CONTROL_HEIGHT = {
  xs: 28,
  sm: 32,
  md: 40,
  lg: 44,
} as const;

export const CONTROL_PADDING_X = {
  xs: 8,
  sm: 10,
  md: 12,
  lg: 14,
} as const;

export const SECTION_OFFSET = {
  left: 36,
  right: 36,
  iconGap: 8,
} as const;

/**
 * 圆角按尺寸：小词条偏方、大面更软
 * 词条 6 · 控件/按钮 8 · 面板/卡 12 · 弹层 16
 */
export const RADIUS = {
  default: "md" as const,
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "12px",
  xl: "16px",
  /** 按钮 / 录入 —— 触感软一点 */
  element: "8px",
  panel: "12px",
  card: "12px",
  /** 弹层 / sheet —— 更厚的面 */
  overlay: "16px",
  page: "10px",
  /** 分面词条：小尺寸偏方，非胶囊 */
  term: "6px",
  /** FilterSegment 外框 */
  segment: "8px",
} as const;

/**
 * 动效（本系统内建）
 * - 按压：100ms ease-out + scale(0.97)，按下即反馈
 * - 默认：干净 ease-out，浮层 springish、不弹
 * - 禁止 ease-in 开头（发闷）
 */
export const MOTION = {
  easeOut: "cubic-bezier(0.23, 1, 0.32, 1)",
  easeInOut: "cubic-bezier(0.77, 0, 0.175, 1)",
  /** 浮层/抽屉：收得顺、不 overshoot */
  springish: "cubic-bezier(0.32, 0.72, 0, 1)",
  press: "100ms",
  fast: "160ms",
  normal: "280ms",
  pressScale: "0.97",
} as const;

/**
 * 阴影：大面更深、小面更轻。禁止重黑框投影。
 */
export const SHADOWS = {
  none: "none",
  /** 芯片 / 选中滑块 */
  xs: "0 1px 2px rgba(18, 19, 23, 0.05), 0 0 0 1px rgba(18, 19, 23, 0.03)",
  /** 筛选壳 / 卡片 */
  sm: "0 1px 2px rgba(18, 19, 23, 0.04), 0 4px 16px rgba(18, 19, 23, 0.05)",
  /** 下拉 / popover */
  md: "0 2px 8px rgba(18, 19, 23, 0.05), 0 12px 32px rgba(18, 19, 23, 0.07)",
  /** 模态 */
  lg: "0 4px 16px rgba(18, 19, 23, 0.06), 0 24px 48px rgba(18, 19, 23, 0.1)",
  xl: "0 8px 28px rgba(18, 19, 23, 0.08), 0 32px 64px rgba(18, 19, 23, 0.12)",
} as const;

export const FONT = {
  family:
    '"SF Pro Text","SF Pro Display",-apple-system,BlinkMacSystemFont,"Helvetica Neue","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif',
  mono: '"SF Mono","Cascadia Code","Roboto Mono",ui-monospace,monospace',
  headingWeight: "600",
  bodyWeight: "400",
  sizes: {
    xs: "12px",
    sm: "13px",
    md: "14px",
    lg: "16px",
    xl: "18px",
    h1: "28px",
    h2: "22px",
    h3: "18px",
    h4: "16px",
  },
  /** 字距按尺寸：大标题收紧，正文 ~0 */
  tracking: {
    display: "-0.022em",
    title: "-0.015em",
    body: "0",
    caption: "0.01em",
  },
  leading: {
    display: 1.15,
    title: 1.25,
    body: 1.5,
    dense: 1.35,
  },
} as const;

/**
 * ── 颜色真源（= GTM design-system theme.css :root）──
 *
 * 只用这些根；组件里禁止再写别的 hex。
 *
 * | 角色 | 键 | 值 |
 * | 页面底 | background | #F1F3F6 |
 * | 主文字 | ink | #121317 |
 * | 次文字 | ink2 | #3D4047 |
 * | 弱文字 | mutedForeground | #6B7078 |
 * | 占位/禁用 | faint | #A6AAB2 |
 * | 白面 | surface | #FFFFFF |
 * | 灰面 | muted | #F6F7F9 |
 * | 浅面 | surface2 | #FAFAFB |
 * | 线 | border | ink @ 8.5% |
 * | 强调线 | line2 | ink @ 14% |
 * | 品牌/主行动 | brand | #3370FF |
 * | 品牌悬浮 | brandHover | #245BDB |
 * | 信息/成功/警告/危险 | info/success/warning/danger | 固定四色 |
 */
const ROOT = {
  background: "#F1F3F6",
  ink: "#121317",
  ink2: "#3D4047",
  mutedForeground: "#6B7078",
  faint: "#A6AAB2",
  surface: "#FFFFFF",
  muted: "#F6F7F9",
  surface2: "#FAFAFB",
  /** GTM: rgb(18 19 23 / 8.5%) */
  border: "rgba(18, 19, 23, 0.085)",
  /** GTM: rgb(18 19 23 / 14%) */
  line2: "rgba(18, 19, 23, 0.14)",
  /** 全平台主行动 = GTM --brand / --action-primary */
  brand: "#3370FF",
  brandHover: "#245BDB",
  brandActive: "#1E4FB8",
  brandForeground: "#FFFFFF",
  info: "#1969CD",
  success: "#18974C",
  warning: "#EEA800",
  danger: "#E03742",
  favorite: "#E5484D",
  ai: "#9065B0",
} as const;

/**
 * William Material Hub 运行版流程轴状态色。
 *
 * 这组颜色只服务“完成 / 当前 / 未开始”的顺序节点表达，不替代平台品牌色或
 * 通用 success/info 色。数值来自 legacy/public/styles.css 的真实运行样式。
 */
export const WORKFLOW_STEP_COLORS = {
  active: "#3370FF",
  activeMuted: "rgba(51, 112, 255, 0.13)",
  completed: "#00B42A",
  pendingBorder: "#E5E6EB",
  pendingText: "#83898F",
  connector: "#F0F1F3",
  foreground: "#FFFFFF",
} as const;

/**
 * 业务分类词条色。
 *
 * 仅用于“爆款 / 利润款 / 引流款 / 活动款”等彼此并列的分类标签；不替代
 * brand、success、warning、danger 等状态根色。保留完整六色短表，避免各业务
 * 页面再造同义的 tag palette。
 */
export const TAG_COLORS = {
  blue: "#356FB6",
  cyan: "#2A7F88",
  green: "#3E8461",
  amber: "#9A711C",
  rose: "#C65370",
  violet: "#7163A8",
} as const;

/**
 * 派生：只动透明度 / 叠在 surface 上，不换色相。
 * 词条选中 = brand 字 + brand@8% 底（不再另开一套蓝）
 */
const DERIVED = {
  /** 主行动浅底（链接 hover 底、词条选中底）≈ brand 8% */
  brandMuted: "rgba(51, 112, 255, 0.08)",
  /** 强调浅底 ≈ brand 10%（GTM --color-accent-muted） */
  brandSoft: "rgba(51, 112, 255, 0.10)",
  /** 侧栏/列表选中底 ≈ ink 7% on surface */
  selectedBg: "rgba(18, 19, 23, 0.07)",
  selectedInk: ROOT.ink,
  /** 通用 hover / pressed 叠层 */
  overlayHover: "rgba(18, 19, 23, 0.06)",
  overlayPressed: "rgba(18, 19, 23, 0.10)",
  /** 录入 hover/focus：ink 叠在 surface 上（对齐 GTM field-*） */
  fieldHover: "rgba(18, 19, 23, 0.035)",
  fieldFocus: "rgba(18, 19, 23, 0.05)",
  errorFieldBg: "rgba(224, 55, 66, 0.06)",
} as const;

/**
 * 组件用色表。
 * 规范键优先；下列别名仅兼容存量调用，新代码请用规范键。
 */
export const COLORS = {
  ...ROOT,
  ...DERIVED,

  // ── 规范别名（GTM CSS 变量同名语义）──
  foreground: ROOT.ink,
  actionPrimary: ROOT.brand,
  actionPrimaryHover: ROOT.brandHover,

  // ── 词条选中：复用 brand，不另开色号 ──
  termSelectedBg: DERIVED.brandMuted,
  termSelectedInk: ROOT.brand,

  // ── 存量兼容键（禁止新代码用这些名字起第二套语义）──
  /** @deprecated 用 background */
  body: ROOT.background,
  /** @deprecated 用 ink2 */
  inkSecondary: ROOT.ink2,
  /** @deprecated 用 mutedForeground */
  mutedFg: ROOT.mutedForeground,
  /** @deprecated 用 muted */
  surfaceMuted: ROOT.muted,
  /** @deprecated 用 line2 */
  borderStrong: ROOT.line2,
} as const;

export type MantineTuple = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
];

export const NEUTRAL_PRIMARY: MantineTuple = [
  "#F6F7F9",
  "#ECEEF1",
  "#D8DBE0",
  "#B8BDC6",
  "#8B919C",
  "#6B7078",
  "#3D4047",
  "#2A2C32",
  "#1A1B20",
  "#121317",
];

/** brand shade 5 = #3370FF（与 GTM / Studio design-system 一致） */
export const BRAND_BLUE: MantineTuple = [
  "#EBF1FF",
  "#D6E4FF",
  "#ADC8FF",
  "#84A9FF",
  "#5B8AFF",
  "#3370FF",
  "#245BDB",
  "#1E4FB8",
  "#184094",
  "#123270",
];

export const GRAY_SCALE: MantineTuple = [
  "#FAFAFB",
  "#F1F3F6",
  "#F6F7F9",
  "#E8EAED",
  "#A6AAB2",
  "#6B7078",
  "#3D4047",
  "#2A2C32",
  "#1A1B20",
  "#121317",
];

export const SUCCESS_SCALE: MantineTuple = [
  "#E8F7EE",
  "#C6ECD4",
  "#8FD9A8",
  "#58C07C",
  "#2BA85A",
  "#18974C",
  "#147A3E",
  "#105F31",
  "#0C4725",
  "#08311A",
];

export const WARNING_SCALE: MantineTuple = [
  "#FFF8E6",
  "#FFEFC2",
  "#FFDF85",
  "#FFCF47",
  "#F5BC1A",
  "#EEA800",
  "#C48A00",
  "#9A6D00",
  "#705000",
  "#473400",
];

export const DANGER_SCALE: MantineTuple = [
  "#FDECEE",
  "#F9C9CD",
  "#F29AA1",
  "#EA6B75",
  "#E54A56",
  "#E03742",
  "#B82C36",
  "#90222A",
  "#68181F",
  "#401013",
];

/**
 * 注入 :root —— Studio 全站唯一色/形真源（替代旧 design-system/theme.css）。
 * 业务 CSS 仍可用 var(--ink) 等；禁止再挂第二套主题包。
 */
export const STUDIO_CSS_VARS: Record<string, string> = {
  // 品牌与主行动
  "--brand": COLORS.brand,
  "--dx-accent": COLORS.brand,
  "--dx-accent-ink": COLORS.brandForeground,
  "--action-primary": COLORS.brand,
  "--action-primary-hover": COLORS.brandHover,
  "--action-primary-foreground": COLORS.brandForeground,
  "--color-accent-muted": COLORS.brandSoft,
  "--color-on-accent": COLORS.brandForeground,
  "--color-text-accent": COLORS.brand,

  // 面
  "--background": COLORS.background,
  "--bg": COLORS.background,
  "--bg-2": COLORS.muted,
  "--muted": COLORS.muted,
  "--secondary": COLORS.muted,
  "--secondary-foreground": COLORS.ink,
  "--accent": COLORS.surface2,
  "--accent-foreground": COLORS.ink,
  "--card": COLORS.surface,
  "--card-foreground": COLORS.ink,
  "--popover": COLORS.surface,
  "--popover-foreground": COLORS.ink,
  "--primary": COLORS.ink,
  "--primary-foreground": COLORS.brandForeground,
  "--surface": COLORS.surface,
  "--surface-2": COLORS.surface2,
  "--field-bg": COLORS.muted,
  "--field-hover-bg": COLORS.fieldHover,
  "--field-focus-bg": COLORS.fieldFocus,
  "--color-background-body": COLORS.background,
  "--color-background-surface": COLORS.surface,
  "--color-background-card": COLORS.surface,
  "--color-background-popover": COLORS.surface,
  "--color-background-muted": COLORS.muted,

  // 字
  "--foreground": COLORS.ink,
  "--ink": COLORS.ink,
  "--ink-2": COLORS.ink2,
  "--muted-foreground": COLORS.mutedForeground,
  "--dx-muted": COLORS.mutedForeground,
  "--faint": COLORS.faint,
  "--color-text-primary": COLORS.ink,
  "--color-text-secondary": COLORS.ink2,
  "--color-text-disabled": COLORS.faint,
  "--color-icon-primary": COLORS.ink,
  "--color-icon-secondary": COLORS.ink2,
  "--color-icon-disabled": COLORS.faint,

  // 线
  "--border": COLORS.border,
  "--input": COLORS.border,
  "--line": COLORS.border,
  "--line-2": COLORS.line2,
  "--color-border": COLORS.border,
  "--color-border-emphasized": COLORS.line2,
  "--border-width": "1px",
  "--ring": "transparent",
  "--focus-border": "transparent",
  "--focus-ring": "transparent",

  // 状态根 + muted
  "--info": COLORS.info,
  "--success": COLORS.success,
  "--warning": COLORS.warning,
  "--destructive": COLORS.danger,
  "--danger": COLORS.danger,
  "--favorite": COLORS.favorite,
  "--ai-tint": COLORS.ai,
  "--color-info": COLORS.info,
  "--color-info-muted": "rgba(25, 105, 205, 0.12)",
  "--color-on-info": "#FFFFFF",
  "--color-success": COLORS.success,
  "--color-success-muted": "rgba(24, 151, 76, 0.12)",
  "--color-on-success": "#FFFFFF",
  "--color-warning": COLORS.warning,
  "--color-warning-ink": "#9A6700",
  "--color-warning-muted": "rgba(238, 168, 0, 0.12)",
  "--color-on-warning": COLORS.ink,
  "--color-error": COLORS.danger,
  "--color-error-muted": "rgba(224, 55, 66, 0.12)",
  "--color-on-error": "#FFFFFF",
  "--color-on-status": "#FFFFFF",
  "--workflow-step-active": WORKFLOW_STEP_COLORS.active,
  "--workflow-step-active-muted": WORKFLOW_STEP_COLORS.activeMuted,
  "--workflow-step-completed": WORKFLOW_STEP_COLORS.completed,
  "--workflow-step-pending-border": WORKFLOW_STEP_COLORS.pendingBorder,
  "--workflow-step-pending-text": WORKFLOW_STEP_COLORS.pendingText,
  "--workflow-step-connector": WORKFLOW_STEP_COLORS.connector,
  "--workflow-step-foreground": WORKFLOW_STEP_COLORS.foreground,
  "--color-tag-blue": TAG_COLORS.blue,
  "--color-tag-blue-muted": "color-mix(in oklab, var(--color-tag-blue) 12%, transparent)",
  "--color-tag-cyan": TAG_COLORS.cyan,
  "--color-tag-cyan-muted": "color-mix(in oklab, var(--color-tag-cyan) 12%, transparent)",
  "--color-tag-green": TAG_COLORS.green,
  "--color-tag-green-muted": "color-mix(in oklab, var(--color-tag-green) 12%, transparent)",
  "--color-tag-amber": TAG_COLORS.amber,
  "--color-tag-amber-muted": "color-mix(in oklab, var(--color-tag-amber) 13%, transparent)",
  "--color-tag-rose": TAG_COLORS.rose,
  "--color-tag-rose-muted": "color-mix(in oklab, var(--color-tag-rose) 12%, transparent)",
  "--color-tag-violet": TAG_COLORS.violet,
  "--color-tag-violet-muted": "color-mix(in oklab, var(--color-tag-violet) 12%, transparent)",
  "--color-favorite": COLORS.favorite,
  "--color-favorite-muted": "rgba(229, 72, 77, 0.10)",
  "--color-input-error-bg": COLORS.errorFieldBg,
  "--color-overlay-hover": COLORS.overlayHover,
  "--color-overlay-pressed": COLORS.overlayPressed,
  "--color-overlay-backdrop": "rgba(18, 19, 23, 0.10)",

  // 图表（飞书样例八色）
  "--chart-1": "#3471EB",
  "--chart-2": "#21CEBF",
  "--chart-3": "#FFC611",
  "--chart-4": "#ED6E0E",
  "--chart-5": "#DCA1E4",
  "--chart-6": "#6DCDEA",
  "--chart-7": "#2AB2E5",
  "--chart-8": "#2B8FCB",
  "--chart-palette-1": "#3471EB",
  "--chart-palette-2": "#21CEBF",
  "--chart-palette-3": "#FFC611",
  "--chart-palette-4": "#ED6E0E",
  "--chart-palette-5": "#DCA1E4",
  "--chart-palette-6": "#6DCDEA",
  "--chart-palette-7": "#2AB2E5",
  "--chart-palette-8": "#2B8FCB",
  "--color-data-main": "#3471EB",
  "--color-data-series-1": "#3471EB",
  "--color-data-series-2": "#21CEBF",
  "--color-data-series-3": "#FFC611",
  "--color-data-series-4": "#ED6E0E",
  "--color-data-series-5": "#DCA1E4",
  "--color-data-series-6": "#6DCDEA",
  "--color-data-series-7": "#2AB2E5",
  "--color-data-series-8": "#2B8FCB",
  "--color-data-attention": "rgba(238, 168, 0, 0.82)",
  "--color-data-risk": "rgba(224, 55, 66, 0.82)",
  "--color-data-heat": "rgba(224, 55, 66, 0.82)",
  "--color-data-reference": "#2B8FCB",
  "--color-data-positive": COLORS.success,
  "--color-data-single": COLORS.success,
  "--color-progress": COLORS.success,
  "--color-chart-label": "#747A85",

  // 平台身份（仅 token；Logo 仍用资产）
  "--color-platform-xiaohongshu": "#FF2442",
  "--color-platform-bilibili": "#FB7299",
  "--color-platform-youtube": "#FF0000",
  "--color-platform-feishu": COLORS.brand,
  "--color-platform-wechat": "#07C160",
  "--color-platform-instagram": "#C13584",
  "--color-platform-douyin": "#161823",
  "--color-platform-tiktok": "#161823",
  "--color-platform-weibo": "#E6162D",
  "--color-platform-reddit": "#FF4500",
  "--color-platform-kuaishou": "#FF4906",
  "--color-platform-other": "#8A909C",

  // 侧栏
  "--sidebar": COLORS.surface,
  "--sidebar-foreground": COLORS.ink,
  "--sidebar-primary": COLORS.ink,
  "--sidebar-primary-foreground": COLORS.brandForeground,
  "--sidebar-accent": COLORS.muted,
  "--sidebar-accent-foreground": COLORS.ink,
  "--sidebar-border": COLORS.border,
  "--sidebar-ring": "transparent",

  // 选中
  "--state-selected-bg": COLORS.selectedBg,
  "--state-selected-ink": COLORS.selectedInk,
  "--term-selected-bg": COLORS.brandMuted,
  "--term-selected-ink": COLORS.brand,

  // 形状 / 动效 / 控件
  "--radius-inner": RADIUS.xs,
  "--radius-element": RADIUS.element,
  "--radius-card": RADIUS.card,
  "--radius-panel": RADIUS.panel,
  "--radius-overlay": RADIUS.overlay,
  "--radius-term": RADIUS.term,
  "--radius-segment": RADIUS.segment,
  "--radius-full": "9999px",
  "--r-sm": RADIUS.sm,
  "--r-lg": RADIUS.lg,
  "--r-pill": "9999px",
  "--ease": MOTION.easeOut,
  "--ease-out": MOTION.easeOut,
  "--ease-spring": MOTION.springish,
  "--ease-standard": MOTION.easeOut,
  "--duration-press": MOTION.press,
  "--duration-fast": MOTION.fast,
  "--duration-fast-min": MOTION.press,
  "--duration-normal": MOTION.normal,
  "--press-scale": MOTION.pressScale,
  "--shadow-xs": SHADOWS.xs,
  "--shadow-sm": SHADOWS.sm,
  "--shadow-md": SHADOWS.md,
  "--shadow-lg": SHADOWS.lg,
  "--shadow": SHADOWS.sm,
  /** Studio 业务页常用别名 */
  "--shadow-low": SHADOWS.sm,
  "--shadow-mid": SHADOWS.md,
  "--control-height-default": `${CONTROL_HEIGHT.md}px`,
  "--control-height-compact": `${CONTROL_HEIGHT.sm}px`,
  "--control-height-large": `${CONTROL_HEIGHT.lg}px`,
  "--control-padding-inline-default": `${CONTROL_PADDING_X.sm}px`,
  "--control-padding-inline-compact": `${CONTROL_PADDING_X.xs}px`,
  "--control-icon-gap": "8px",
  "--font-sans": FONT.family,
  "--font-family-sans": FONT.family,
  "--font-mono": FONT.mono,
  "--font-family-mono": FONT.mono,
  "--tracking-title": FONT.tracking.title,
  "--tracking-display": FONT.tracking.display,

  // MATERIAL 迁移兼容：旧页面布局变量只回指本包的统一间距与语义令牌。
  "--spacing-0": "0px",
  "--spacing-0-5": "2px",
  "--spacing-1": "4px",
  "--spacing-1-5": "6px",
  "--spacing-2": "8px",
  "--spacing-3": "12px",
  "--spacing-4": "16px",
  "--spacing-5": "20px",
  "--spacing-6": "24px",
  "--spacing-7": "28px",
  "--spacing-8": "32px",
  "--spacing-9": "36px",
  "--spacing-10": "40px",
  "--spacing-11": "44px",
  "--spacing-12": "48px",
  "--radius-page": RADIUS.sm,
  "--maxw": "1480px",
  "--ink-1": COLORS.ink,
  "--line-soft": "rgba(18, 19, 23, 0.055)",
  "--accent-soft": COLORS.brandSoft,
  "--color-primary": COLORS.brand,
  "--state-filter-selected-bg": COLORS.surface,
  "--state-filter-selected-ink": COLORS.ink,
  "--state-filter-selected-shadow": "0 1px 4px rgba(18, 19, 23, 0.06)",

  // ADMIN 迁移兼容：旧 @vijimlabs/ui@0.1 的 .vj-* 组件令牌。
  "--vijim-background-canvas": COLORS.background,
  "--vijim-surface-default": COLORS.surface,
  "--vijim-surface-subtle": COLORS.muted,
  "--vijim-surface-muted": COLORS.surface2,
  "--vijim-surface-popover": COLORS.surface,
  "--vijim-text-primary": COLORS.ink,
  "--vijim-text-secondary": COLORS.ink2,
  "--vijim-text-muted": COLORS.mutedForeground,
  "--vijim-text-disabled": COLORS.faint,
  "--vijim-icon-primary": COLORS.ink2,
  "--vijim-icon-secondary": COLORS.mutedForeground,
  "--vijim-icon-disabled": COLORS.faint,
  "--vijim-border-default": COLORS.border,
  "--vijim-border-emphasized": COLORS.line2,
  "--vijim-accent-default": COLORS.brand,
  "--vijim-accent-hover": COLORS.brandHover,
  "--vijim-accent-subtle": COLORS.brandMuted,
  "--vijim-on-accent": COLORS.brandForeground,
  "--vijim-success-default": COLORS.success,
  "--vijim-success-subtle": "rgba(24, 151, 76, 0.12)",
  "--vijim-warning-default": COLORS.warning,
  "--vijim-warning-subtle": "rgba(238, 168, 0, 0.12)",
  "--vijim-error-default": COLORS.danger,
  "--vijim-error-subtle": "rgba(224, 55, 66, 0.12)",
  "--vijim-overlay": "rgba(18, 19, 23, 0.42)",
  "--vijim-selection": COLORS.brandMuted,
  "--vijim-focus": COLORS.brand,
  "--vijim-input-error": COLORS.errorFieldBg,
  "--vijim-data-main": "#3471EB",
  "--vijim-data-attention": "rgba(238, 168, 0, 0.82)",
  "--vijim-data-risk": "rgba(224, 55, 66, 0.82)",
  "--vijim-data-reference": "#2B8FCB",
  "--vijim-data-positive": COLORS.success,
  "--vijim-0": "0px",
  "--vijim-1": "4px",
  "--vijim-2": "8px",
  "--vijim-3": "12px",
  "--vijim-4": "16px",
  "--vijim-5": "20px",
  "--vijim-6": "24px",
  "--vijim-8": "32px",
  "--vijim-10": "40px",
  "--vijim-12": "48px",
  "--vijim-radius-none": "0px",
  "--vijim-radius-inner": RADIUS.xs,
  "--vijim-radius-element": RADIUS.element,
  "--vijim-radius-container": RADIUS.overlay,
  "--vijim-radius-page": RADIUS.overlay,
  "--vijim-radius-full": "999px",
  "--vijim-shadow-none": SHADOWS.none,
  "--vijim-shadow-low": SHADOWS.xs,
  "--vijim-shadow-medium": SHADOWS.md,
  "--vijim-shadow-high": SHADOWS.lg,
  "--vijim-shadow-overlay": SHADOWS.xl,
  "--vijim-fast": "120ms",
  "--vijim-medium": "180ms",
  "--vijim-slow": "280ms",
  "--vijim-easing": MOTION.easeOut,
  "--vijim-element-sm": `${CONTROL_HEIGHT.sm}px`,
  "--vijim-element-md": `${CONTROL_HEIGHT.md}px`,
  "--vijim-element-lg": "48px",
  "--vijim-icon-sm": "14px",
  "--vijim-icon-md": "18px",
  "--vijim-icon-lg": "22px",
  "--vijim-sidebar-expanded": "244px",
  "--vijim-sidebar-collapsed": "64px",
  "--vijim-content-min": "320px",
  "--vijim-font-body": FONT.family,
  "--vijim-font-code": FONT.mono,
  "--vijim-body-size": FONT.sizes.md,
  "--vijim-body-line": "1.55",
  "--vijim-body-weight": FONT.bodyWeight,
  "--vijim-label-size": FONT.sizes.sm,
  "--vijim-label-line": "1.4",
  "--vijim-label-weight": "500",
  "--vijim-supporting-size": FONT.sizes.xs,
  "--vijim-supporting-line": "1.45",
  "--vijim-supporting-weight": "400",
  "--vijim-heading-size": FONT.sizes.h4,
  "--vijim-heading-line": "1.35",
  "--vijim-heading-weight": FONT.headingWeight,
  "--vijim-display-size": FONT.sizes.h1,
  "--vijim-display-line": "1.2",
  "--vijim-display-weight": "650",
  "--vijim-tracking": "-0.01em",
};
