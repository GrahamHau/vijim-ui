"use client";

// src/theme/vijim-theme.ts
import { createTheme } from "@mantine/core";

// src/theme/tokens.ts
var CONTROL_HEIGHT = {
  xs: 28,
  sm: 32,
  md: 40,
  lg: 44
};
var CONTROL_PADDING_X = {
  xs: 8,
  sm: 10,
  md: 12,
  lg: 14
};
var SECTION_OFFSET = {
  left: 36,
  right: 36,
  iconGap: 8
};
var RADIUS = {
  default: "md",
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
  segment: "8px"
};
var MOTION = {
  easeOut: "cubic-bezier(0.23, 1, 0.32, 1)",
  easeInOut: "cubic-bezier(0.77, 0, 0.175, 1)",
  /** 浮层/抽屉：收得顺、不 overshoot */
  springish: "cubic-bezier(0.32, 0.72, 0, 1)",
  press: "100ms",
  fast: "160ms",
  normal: "280ms",
  pressScale: "0.97"
};
var SHADOWS = {
  none: "none",
  /** 兼容旧选中滑块：改用灰面 / 边线表达，不抬高。 */
  xs: "none",
  /** 页面内筛选壳 / 卡片：平面。 */
  sm: "none",
  /** 下拉 / popover */
  md: "0 6px 18px rgba(18, 19, 23, 0.1), 0 0 0 1px rgba(18, 19, 23, 0.06)",
  /** 模态 */
  lg: "0 16px 40px rgba(18, 19, 23, 0.14), 0 0 0 1px rgba(18, 19, 23, 0.06)",
  xl: "0 16px 40px rgba(18, 19, 23, 0.14), 0 0 0 1px rgba(18, 19, 23, 0.06)"
};
var FONT = {
  family: '-apple-system,BlinkMacSystemFont,"SF Pro Text","SF Pro Display","Helvetica Neue","PingFang SC","Hiragino Sans GB","Segoe UI","Microsoft YaHei",Arial,sans-serif',
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
    h4: "16px"
  },
  /** 全平台字距保持 0，避免中英文混排在窄容器中失真。 */
  tracking: {
    display: "0",
    title: "0",
    body: "0",
    caption: "0"
  },
  leading: {
    display: 1.15,
    title: 1.25,
    body: 1.5,
    dense: 1.35
  }
};
var TYPOGRAPHY = {
  pageTitle: { fontSize: "24px", lineHeight: 1.3, fontWeight: 600 },
  dialogTitle: { fontSize: "16px", lineHeight: 1.35, fontWeight: 600 },
  sectionTitle: { fontSize: "16px", lineHeight: 1.35, fontWeight: 600 },
  body: { fontSize: "14px", lineHeight: 1.5, fontWeight: 400 },
  label: { fontSize: "13px", lineHeight: 1.4, fontWeight: 500 },
  supporting: { fontSize: "12px", lineHeight: 1.45, fontWeight: 400 }
};
var FORM_LAYOUT = {
  sectionGap: 14,
  sectionInline: 16,
  sectionBlock: 14,
  fieldGap: 5,
  gridGap: {
    sm: { column: 12, row: 10 },
    md: { column: 16, row: 14 },
    lg: { column: 20, row: 18 }
  }
};
var ROOT = {
  background: "#F7F8FA",
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
  ai: "#9065B0"
};
var WORKFLOW_STEP_COLORS = {
  active: "#3370FF",
  activeMuted: "rgba(51, 112, 255, 0.13)",
  completed: "#00B42A",
  pendingBorder: "#E5E6EB",
  pendingText: "#83898F",
  connector: "#F0F1F3",
  foreground: "#FFFFFF",
  nodeCardBorder: "#EEEEEE",
  nodeCardTint: "#F9F9F9"
};
var TAG_COLORS = {
  blue: "#356FB6",
  cyan: "#2A7F88",
  green: "#3E8461",
  amber: "#9A711C",
  rose: "#C65370",
  violet: "#7163A8"
};
var DERIVED = {
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
  errorFieldBg: "rgba(224, 55, 66, 0.06)"
};
var COLORS = {
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
  borderStrong: ROOT.line2
};
var NEUTRAL_PRIMARY = [
  "#F6F7F9",
  "#ECEEF1",
  "#D8DBE0",
  "#B8BDC6",
  "#8B919C",
  "#6B7078",
  "#3D4047",
  "#2A2C32",
  "#1A1B20",
  "#121317"
];
var BRAND_BLUE = [
  "#EBF1FF",
  "#D6E4FF",
  "#ADC8FF",
  "#84A9FF",
  "#5B8AFF",
  "#3370FF",
  "#245BDB",
  "#1E4FB8",
  "#184094",
  "#123270"
];
var GRAY_SCALE = [
  "#FAFAFB",
  "#F7F8FA",
  "#F6F7F9",
  "#E8EAED",
  "#A6AAB2",
  "#6B7078",
  "#3D4047",
  "#2A2C32",
  "#1A1B20",
  "#121317"
];
var SUCCESS_SCALE = [
  "#E8F7EE",
  "#C6ECD4",
  "#8FD9A8",
  "#58C07C",
  "#2BA85A",
  "#18974C",
  "#147A3E",
  "#105F31",
  "#0C4725",
  "#08311A"
];
var WARNING_SCALE = [
  "#FFF8E6",
  "#FFEFC2",
  "#FFDF85",
  "#FFCF47",
  "#F5BC1A",
  "#EEA800",
  "#C48A00",
  "#9A6D00",
  "#705000",
  "#473400"
];
var DANGER_SCALE = [
  "#FDECEE",
  "#F9C9CD",
  "#F29AA1",
  "#EA6B75",
  "#E54A56",
  "#E03742",
  "#B82C36",
  "#90222A",
  "#68181F",
  "#401013"
];
var STUDIO_CSS_VARS = {
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
  "--workflow-node-card-border": WORKFLOW_STEP_COLORS.nodeCardBorder,
  "--workflow-node-card-tint": WORKFLOW_STEP_COLORS.nodeCardTint,
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
  "--type-page-title-size": TYPOGRAPHY.pageTitle.fontSize,
  "--type-page-title-line": String(TYPOGRAPHY.pageTitle.lineHeight),
  "--type-dialog-title-size": TYPOGRAPHY.dialogTitle.fontSize,
  "--type-dialog-title-line": String(TYPOGRAPHY.dialogTitle.lineHeight),
  "--type-section-title-size": TYPOGRAPHY.sectionTitle.fontSize,
  "--type-section-title-line": String(TYPOGRAPHY.sectionTitle.lineHeight),
  "--type-body-size": TYPOGRAPHY.body.fontSize,
  "--type-body-line": String(TYPOGRAPHY.body.lineHeight),
  "--type-label-size": TYPOGRAPHY.label.fontSize,
  "--type-label-line": String(TYPOGRAPHY.label.lineHeight),
  "--type-supporting-size": TYPOGRAPHY.supporting.fontSize,
  "--type-supporting-line": String(TYPOGRAPHY.supporting.lineHeight),
  "--form-section-gap": `${FORM_LAYOUT.sectionGap}px`,
  "--form-section-inline": `${FORM_LAYOUT.sectionInline}px`,
  "--form-field-gap": `${FORM_LAYOUT.fieldGap}px`,
  "--form-column-gap": `${FORM_LAYOUT.gridGap.md.column}px`,
  "--form-row-gap": `${FORM_LAYOUT.gridGap.md.row}px`,
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
  "--vijim-tracking": "0"
};

// src/theme/vijim-theme.ts
var fieldInput = {
  height: CONTROL_HEIGHT.md,
  minHeight: CONTROL_HEIGHT.md,
  fontSize: TYPOGRAPHY.label.fontSize,
  fontWeight: TYPOGRAPHY.body.fontWeight,
  lineHeight: String(TYPOGRAPHY.label.lineHeight),
  paddingInline: CONTROL_PADDING_X.md,
  backgroundColor: COLORS.surfaceMuted,
  borderColor: "transparent",
  borderRadius: RADIUS.element,
  color: COLORS.ink,
  fontFamily: FONT.family,
  transition: `background-color ${MOTION.fast} ${MOTION.easeOut}`
};
var vijimTheme = createTheme({
  fontFamily: FONT.family,
  fontFamilyMonospace: FONT.mono,
  primaryColor: "brand",
  primaryShade: { light: 5, dark: 4 },
  defaultRadius: "md",
  cursorType: "pointer",
  focusRing: "never",
  autoContrast: true,
  luminanceThreshold: 0.45,
  colors: {
    brand: BRAND_BLUE,
    neutral: NEUTRAL_PRIMARY,
    gray: GRAY_SCALE,
    dark: NEUTRAL_PRIMARY,
    green: SUCCESS_SCALE,
    yellow: WARNING_SCALE,
    red: DANGER_SCALE
  },
  white: COLORS.surface,
  black: COLORS.ink,
  fontSizes: {
    xs: FONT.sizes.xs,
    sm: FONT.sizes.sm,
    md: FONT.sizes.md,
    lg: FONT.sizes.lg,
    xl: FONT.sizes.xl
  },
  headings: {
    fontFamily: FONT.family,
    fontWeight: FONT.headingWeight,
    sizes: {
      // tracking 走 Title styles + styles.css（Mantine HeadingStyle 无 letterSpacing 字段）
      h1: {
        fontSize: FONT.sizes.h1,
        fontWeight: FONT.headingWeight,
        lineHeight: String(FONT.leading.display)
      },
      h2: {
        fontSize: FONT.sizes.h2,
        fontWeight: FONT.headingWeight,
        lineHeight: String(FONT.leading.title)
      },
      h3: {
        fontSize: FONT.sizes.h3,
        fontWeight: FONT.headingWeight,
        lineHeight: String(FONT.leading.title)
      },
      h4: {
        fontSize: FONT.sizes.h4,
        fontWeight: FONT.headingWeight,
        lineHeight: "1.4"
      },
      h5: { fontSize: FONT.sizes.md, fontWeight: FONT.headingWeight, lineHeight: "1.4" },
      h6: { fontSize: FONT.sizes.sm, fontWeight: FONT.headingWeight, lineHeight: "1.4" }
    }
  },
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px"
  },
  radius: {
    xs: RADIUS.xs,
    sm: RADIUS.sm,
    md: RADIUS.element,
    lg: RADIUS.card,
    xl: RADIUS.overlay
  },
  shadows: {
    xs: SHADOWS.xs,
    sm: SHADOWS.sm,
    md: SHADOWS.md,
    lg: SHADOWS.lg,
    xl: SHADOWS.xl
  },
  other: {
    controlHeight: CONTROL_HEIGHT,
    colors: COLORS,
    radiusSemantic: {
      element: RADIUS.element,
      card: RADIUS.card,
      overlay: RADIUS.overlay
    }
  },
  components: {
    Button: {
      defaultProps: {
        size: "sm",
        radius: "md",
        color: "brand"
      },
      styles: (_theme, props) => {
        const size = props.size ?? "sm";
        const h = size === "xs" ? 26 : size === "md" ? 36 : size === "lg" ? 40 : CONTROL_HEIGHT.sm;
        return {
          root: {
            fontWeight: 500,
            fontSize: size === "xs" ? 12 : 13.5,
            height: h,
            minHeight: h,
            paddingInline: size === "xs" ? 10 : 14,
            borderRadius: RADIUS.element,
            // 按压即时反馈
            transition: [
              `background-color ${MOTION.fast} ${MOTION.easeOut}`,
              `color ${MOTION.fast} ${MOTION.easeOut}`,
              `border-color ${MOTION.fast} ${MOTION.easeOut}`,
              `box-shadow ${MOTION.fast} ${MOTION.easeOut}`,
              `transform ${MOTION.press} ${MOTION.easeOut}`
            ].join(", ")
          },
          section: { marginInline: 4 }
        };
      }
    },
    TextInput: {
      defaultProps: { size: "md", radius: "sm" },
      styles: {
        input: {
          ...fieldInput
          // hover/focus/error/placeholder → styles.css
        },
        section: { width: SECTION_OFFSET.left, color: COLORS.faint },
        label: {
          fontWeight: 500,
          fontSize: FONT.sizes.sm,
          color: COLORS.inkSecondary,
          marginBottom: 6
        },
        error: { fontSize: FONT.sizes.xs, color: COLORS.danger },
        description: { fontSize: FONT.sizes.xs, color: COLORS.mutedFg }
      }
    },
    Textarea: {
      defaultProps: { size: "md", radius: "sm", minRows: 3 },
      styles: {
        input: {
          backgroundColor: COLORS.surfaceMuted,
          borderColor: "transparent",
          borderRadius: RADIUS.element,
          color: COLORS.ink,
          paddingInline: CONTROL_PADDING_X.sm,
          paddingBlock: 8,
          fontSize: FONT.sizes.sm
          // hover/focus/error/placeholder → styles.css
        },
        label: {
          fontWeight: 500,
          fontSize: FONT.sizes.sm,
          color: COLORS.inkSecondary,
          marginBottom: 6
        }
      }
    },
    /** 下拉唯一皮：触发器 = 录入面；浮层 = overlay 圆角 + shadow-md；选中项 brand 浅底+蓝字 */
    Select: {
      defaultProps: {
        size: "md",
        radius: "md",
        checkIconPosition: "right",
        withCheckIcon: true,
        comboboxProps: { withinPortal: true }
      },
      styles: {
        input: {
          ...fieldInput,
          borderRadius: RADIUS.element
          // hover/expanded → styles.css
        },
        section: { width: SECTION_OFFSET.left, color: COLORS.faint },
        dropdown: {
          border: `1px solid ${COLORS.border}`,
          borderRadius: RADIUS.overlay,
          boxShadow: SHADOWS.md,
          padding: 4,
          backgroundColor: COLORS.surface
        },
        option: {
          fontSize: FONT.sizes.sm,
          borderRadius: RADIUS.sm,
          padding: "8px 10px",
          transition: `background-color ${MOTION.fast} ${MOTION.easeOut}`
        }
      }
    },
    MultiSelect: {
      defaultProps: {
        size: "md",
        radius: "md",
        comboboxProps: { withinPortal: true }
      },
      styles: {
        input: {
          ...fieldInput,
          height: "auto",
          minHeight: CONTROL_HEIGHT.md
        },
        dropdown: {
          border: `1px solid ${COLORS.border}`,
          borderRadius: RADIUS.overlay,
          boxShadow: SHADOWS.md,
          padding: 4
        },
        option: {
          borderRadius: RADIUS.sm
        },
        pill: {
          backgroundColor: COLORS.muted,
          color: COLORS.ink2,
          borderRadius: RADIUS.sm
        }
      }
    },
    Combobox: {
      defaultProps: {
        withinPortal: true
      },
      styles: {
        dropdown: {
          border: `1px solid ${COLORS.border}`,
          borderRadius: RADIUS.overlay,
          boxShadow: SHADOWS.md,
          padding: 4,
          backgroundColor: COLORS.surface
        },
        option: {
          borderRadius: RADIUS.sm,
          fontSize: FONT.sizes.sm
        }
      }
    },
    Input: {
      defaultProps: { size: "md", radius: "sm" },
      styles: {
        input: { ...fieldInput },
        section: { width: SECTION_OFFSET.left }
      }
    },
    InputBase: {
      defaultProps: { size: "md", radius: "sm" }
    },
    PasswordInput: {
      defaultProps: { size: "md", radius: "sm" },
      styles: {
        input: { ...fieldInput },
        section: { width: SECTION_OFFSET.left }
      }
    },
    NumberInput: {
      defaultProps: { size: "md", radius: "sm" },
      styles: {
        input: { ...fieldInput },
        section: { width: SECTION_OFFSET.left }
      }
    },
    DatePickerInput: {
      defaultProps: {
        size: "md",
        radius: "sm",
        valueFormat: "YYYY-MM-DD"
      },
      styles: {
        input: { ...fieldInput },
        section: { width: SECTION_OFFSET.left, color: COLORS.faint }
      }
    },
    DateInput: {
      defaultProps: {
        size: "md",
        radius: "sm",
        valueFormat: "YYYY-MM-DD"
      },
      styles: {
        input: { ...fieldInput }
      }
    },
    Modal: {
      defaultProps: {
        radius: "xl",
        centered: true,
        shadow: "lg",
        // 轻 scrim + 轻微 blur：材料感，不做重玻璃
        overlayProps: { backgroundOpacity: 0.12, blur: 4 },
        transitionProps: {
          transition: "pop",
          duration: 220,
          timingFunction: MOTION.springish
        }
      },
      styles: {
        content: {
          border: `1px solid ${COLORS.border}`,
          borderRadius: RADIUS.overlay,
          boxShadow: SHADOWS.lg
        },
        header: {
          height: 56,
          minHeight: 56,
          padding: `0 ${FORM_LAYOUT.sectionInline}px`,
          alignItems: "center"
        },
        body: {
          padding: `0 ${FORM_LAYOUT.sectionInline}px ${FORM_LAYOUT.sectionInline}px`
        },
        title: {
          display: "flex",
          alignItems: "center",
          minHeight: 28,
          fontWeight: TYPOGRAPHY.dialogTitle.fontWeight,
          fontSize: TYPOGRAPHY.dialogTitle.fontSize,
          lineHeight: String(TYPOGRAPHY.dialogTitle.lineHeight),
          color: COLORS.ink,
          letterSpacing: FONT.tracking.title
        },
        close: {
          alignSelf: "center",
          marginInlineStart: "auto",
          marginInlineEnd: 0
        }
      }
    },
    Drawer: {
      defaultProps: {
        radius: 0,
        shadow: "lg",
        overlayProps: { backgroundOpacity: 0.12, blur: 4 },
        transitionProps: {
          duration: 280,
          timingFunction: MOTION.springish
        }
      },
      styles: {
        content: {
          borderLeft: `1px solid ${COLORS.border}`,
          boxShadow: SHADOWS.lg
        },
        title: {
          fontWeight: TYPOGRAPHY.dialogTitle.fontWeight,
          fontSize: TYPOGRAPHY.dialogTitle.fontSize,
          lineHeight: String(TYPOGRAPHY.dialogTitle.lineHeight),
          letterSpacing: FONT.tracking.title
        }
      }
    },
    Tabs: {
      styles: {
        tab: {
          fontWeight: 500,
          fontSize: FONT.sizes.sm,
          color: COLORS.mutedFg
        },
        list: { borderColor: COLORS.border }
      }
    },
    /** 与 FilterSegment 同气质：无外框，选中灰色块 + 短 ease-out */
    SegmentedControl: {
      defaultProps: { size: "sm", radius: "md", withItemsBorders: false },
      styles: {
        root: {
          backgroundColor: "transparent",
          border: "none",
          padding: 0,
          borderRadius: RADIUS.segment
        },
        label: {
          fontWeight: 500,
          fontSize: FONT.sizes.sm,
          color: COLORS.mutedFg,
          transition: `color ${MOTION.fast} ${MOTION.easeOut}`
        },
        indicator: {
          backgroundColor: COLORS.selectedBg,
          border: "none",
          borderRadius: RADIUS.sm,
          boxShadow: "none",
          transition: `transform ${MOTION.normal} ${MOTION.springish}`
        },
        control: {
          border: "none"
        }
      }
    },
    Pagination: {
      defaultProps: { size: "sm", radius: "sm" },
      styles: {
        control: {
          borderColor: COLORS.border,
          fontSize: FONT.sizes.sm
        }
      }
    },
    Menu: {
      defaultProps: { shadow: "md", radius: "md" },
      styles: {
        dropdown: {
          border: `1px solid ${COLORS.border}`,
          borderRadius: RADIUS.overlay,
          padding: 4
        },
        item: { fontSize: FONT.sizes.sm, borderRadius: RADIUS.element }
      }
    },
    Popover: {
      defaultProps: { shadow: "md", radius: "md" },
      styles: {
        dropdown: {
          border: `1px solid ${COLORS.border}`,
          borderRadius: RADIUS.overlay
        }
      }
    },
    Tooltip: {
      defaultProps: { withArrow: true, radius: "sm" },
      styles: {
        tooltip: {
          fontSize: FONT.sizes.xs,
          fontWeight: 500,
          backgroundColor: COLORS.ink,
          color: COLORS.surface
        }
      }
    },
    Table: {
      defaultProps: {
        horizontalSpacing: "md",
        verticalSpacing: "sm",
        highlightOnHover: true
      },
      styles: {
        table: { fontSize: FONT.sizes.sm },
        th: {
          fontWeight: 650,
          color: COLORS.mutedFg,
          backgroundColor: COLORS.surfaceMuted,
          borderColor: COLORS.border,
          fontSize: 12
        },
        td: { borderColor: COLORS.border, color: COLORS.ink }
      }
    },
    Paper: {
      defaultProps: {
        radius: "lg",
        shadow: "none",
        withBorder: true
      },
      styles: {
        root: {
          borderColor: COLORS.border,
          backgroundColor: COLORS.surface,
          borderRadius: RADIUS.card
        }
      }
    },
    Card: {
      defaultProps: {
        radius: "lg",
        shadow: "none",
        padding: "lg",
        withBorder: true
      },
      styles: {
        root: {
          borderColor: COLORS.border,
          backgroundColor: COLORS.surface,
          borderRadius: RADIUS.card
        }
      }
    },
    Badge: {
      defaultProps: {
        size: "sm",
        radius: "sm",
        variant: "light"
      },
      styles: {
        root: {
          fontWeight: 500,
          textTransform: "none",
          borderRadius: RADIUS.element
        }
      }
    },
    Checkbox: { defaultProps: { size: "sm", radius: "sm" } },
    Switch: { defaultProps: { size: "sm" } },
    Radio: { defaultProps: { size: "sm" } },
    Skeleton: { defaultProps: { radius: "sm" } },
    Loader: {
      defaultProps: { size: "sm", type: "dots", color: "brand" }
    },
    /** 大标题收紧字距 */
    Title: {
      styles: {
        root: {
          letterSpacing: FONT.tracking.title
          // title tracking → styles.css
        }
      }
    },
    Alert: {
      defaultProps: { radius: "md" },
      styles: {
        root: { border: `1px solid ${COLORS.border}` },
        title: { fontWeight: 600 }
      }
    },
    AppShell: {
      styles: {
        root: { backgroundColor: COLORS.body },
        header: {
          backgroundColor: COLORS.surface,
          borderBottom: `1px solid ${COLORS.border}`,
          boxShadow: "none"
        },
        navbar: {
          backgroundColor: COLORS.surface,
          borderRight: `1px solid ${COLORS.border}`
        },
        main: { backgroundColor: COLORS.body }
      }
    },
    Notification: {
      defaultProps: { radius: "md" },
      styles: {
        root: {
          border: `1px solid ${COLORS.border}`,
          boxShadow: "0 1px 2px rgba(18,19,23,0.06), 0 12px 36px rgba(18,19,23,0.08)"
        },
        title: { fontWeight: 600 }
      }
    },
    ActionIcon: {
      defaultProps: {
        size: "sm",
        radius: "sm",
        variant: "subtle"
      },
      styles: {
        root: {
          "--ai-size": `${CONTROL_HEIGHT.sm}px`,
          borderRadius: RADIUS.element
        }
      }
    }
  }
});

// src/provider.tsx
import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/spotlight/styles.css";

// src/runtime-css.ts
var VIJIM_RUNTIME_CSS = '/* @vijimlabs/ui \u2014 \u89E6\u611F\u4E0E\u4EA4\u4E92\u6001\uFF08\u4E0D @import Mantine\uFF0C\u7531 provider \u52A0\u8F7D\uFF09 */\n\n:root {\n  --vijim-ease-out: cubic-bezier(0.23, 1, 0.32, 1);\n  --vijim-ease-spring: cubic-bezier(0.32, 0.72, 0, 1);\n  --vijim-press-ms: 100ms;\n  --vijim-press-scale: 0.97;\n}\n\n/* \u2500\u2500 \u6309\u94AE\u6309\u538B \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.mantine-Button-root {\n  transition:\n    background-color var(--duration-fast, 160ms) var(--ease-out, var(--vijim-ease-out)),\n    color var(--duration-fast, 160ms) var(--ease-out, var(--vijim-ease-out)),\n    transform var(--duration-press, 100ms) var(--ease-out, var(--vijim-ease-out));\n}\n.mantine-Button-root:active:not(:disabled):not([data-disabled]) {\n  transform: scale(var(--press-scale, var(--vijim-press-scale, 0.97)));\n}\n\n/* \u2500\u2500 \u5F55\u5165 / \u4E0B\u62C9\u89E6\u53D1\u5668 hover\xB7focus \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.mantine-Input-input,\n.mantine-TextInput-input,\n.mantine-Textarea-input,\n.mantine-Select-input,\n.mantine-PasswordInput-input,\n.mantine-NumberInput-input,\n.mantine-DatePickerInput-input,\n.mantine-DateInput-input {\n  transition: background-color var(--duration-fast, 160ms) var(--ease-out, var(--vijim-ease-out));\n}\n.mantine-Input-input:hover,\n.mantine-TextInput-input:hover,\n.mantine-Textarea-input:hover,\n.mantine-Select-input:hover,\n.mantine-PasswordInput-input:hover,\n.mantine-NumberInput-input:hover {\n  background-color: var(--field-hover-bg, rgba(18, 19, 23, 0.035));\n}\n.mantine-Input-input:focus,\n.mantine-TextInput-input:focus,\n.mantine-Textarea-input:focus,\n.mantine-Select-input:focus,\n.mantine-Select-input[data-expanded],\n.mantine-PasswordInput-input:focus,\n.mantine-NumberInput-input:focus {\n  background-color: var(--field-focus-bg, rgba(18, 19, 23, 0.05));\n  border-color: transparent;\n}\n.mantine-Input-input[data-error],\n.mantine-TextInput-input[data-error],\n.mantine-Textarea-input[data-error] {\n  background-color: var(--color-input-error-bg, rgba(224, 55, 66, 0.06));\n}\n.mantine-Input-input::placeholder,\n.mantine-TextInput-input::placeholder,\n.mantine-Textarea-input::placeholder,\n.mantine-Select-input::placeholder {\n  color: var(--faint, #a6aab2);\n}\n\n/* \u2500\u2500 \u4E0B\u62C9\u9009\u9879\u9009\u4E2D\uFF08\u54C1\u724C\u6D45\u84DD + \u84DD\u5B57\uFF09 \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.mantine-Combobox-option[data-combobox-selected],\n.mantine-Select-option[data-combobox-selected] {\n  background-color: var(--term-selected-bg, rgba(51, 112, 255, 0.08)) !important;\n  color: var(--term-selected-ink, var(--brand, #3370ff)) !important;\n  font-weight: 600;\n}\n.mantine-Combobox-option[data-combobox-active]:not([data-combobox-selected]) {\n  background-color: var(--muted, #f6f7f9);\n}\n\n/* \u2500\u2500 Segmented / Tabs \u6FC0\u6D3B \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\n.mantine-SegmentedControl-root {\n  /* \u4EA7\u54C1\u89C4\u5212\u9636\u6BB5\u591A\uFF0C\u5141\u8BB8\u6362\u884C\uFF0C\u907F\u514D overflow \u88C1\u6CA1 */\n  flex-wrap: wrap;\n  height: auto !important;\n  min-height: 32px;\n}\n.mantine-SegmentedControl-label {\n  white-space: nowrap;\n}\n.mantine-SegmentedControl-label[data-active] {\n  font-weight: 600;\n  color: var(--ink, #121317);\n}\n.mantine-Tabs-tab[data-active] {\n  color: var(--ink, #121317);\n  border-color: var(--brand, #3370ff);\n}\n\n/* \u7B5B\u9009\u58F3\u53EF\u89C1\u6027\u515C\u5E95 */\n.vijim-filter-bar {\n  background: var(--surface, #fff);\n  border: 1px solid var(--line, rgba(18, 19, 23, 0.085));\n  border-radius: var(--radius-panel, 12px);\n  box-shadow: var(--shadow-sm, var(--shadow-low, none));\n}\n\n/* \u2500\u2500 \u6807\u9898\u5B57\u8DDD \u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500\u2500 */\nh1, .mantine-Title-root[data-order="1"] {\n  letter-spacing: var(--tracking-display, -0.022em);\n}\nh2, h3,\n.mantine-Title-root[data-order="2"],\n.mantine-Title-root[data-order="3"] {\n  letter-spacing: var(--tracking-title, -0.015em);\n}\n\n[data-vijim-press]:active:not(:disabled):not([data-disabled]) {\n  transform: scale(var(--vijim-press-scale, 0.97));\n}\n\n@media (prefers-reduced-motion: reduce) {\n  :root {\n    --vijim-press-ms: 1ms;\n    --duration-fast: 1ms;\n    --duration-normal: 1ms;\n  }\n  *,\n  *::before,\n  *::after {\n    animation-duration: 0.01ms !important;\n    animation-iteration-count: 1 !important;\n    transition-duration: 0.01ms !important;\n    scroll-behavior: auto !important;\n  }\n  .mantine-Button-root:active:not(:disabled):not([data-disabled]),\n  [data-vijim-press]:active:not(:disabled):not([data-disabled]) {\n    transform: none;\n  }\n}\n\n@media (prefers-reduced-transparency: reduce) {\n  .vijim-material {\n    backdrop-filter: none !important;\n    background-color: var(--surface, #fff) !important;\n  }\n}\n\n/* ADMIN \u8FC1\u79FB\u517C\u5BB9\uFF1A\u65E7 @vijimlabs/ui@0.1 .vj-* \u7EC4\u4EF6\u6837\u5F0F */\n*, *::before, *::after { box-sizing: border-box; }\n.vijim-root { color: var(--vijim-text-primary); font-family: var(--vijim-font-body); font-size: var(--vijim-body-size); line-height: var(--vijim-body-line); }\n.vijim-root button, .vijim-root input, .vijim-root textarea, .vijim-root select { font: inherit; }\n.vijim-root ::selection { background: var(--vijim-selection); }\n.vijim-root :focus-visible { outline: 2px solid var(--vijim-focus); outline-offset: 2px; }\n\n.vj-button { appearance:none; border:0; border-radius:var(--vijim-radius-element); min-height:var(--vijim-element-md); padding:0 var(--vijim-4); display:inline-flex; align-items:center; justify-content:center; gap:var(--vijim-2); cursor:pointer; font-weight:600; transition:background var(--vijim-fast) var(--vijim-easing), color var(--vijim-fast) var(--vijim-easing), opacity var(--vijim-fast) var(--vijim-easing); }\n.vj-button[data-size="sm"]{min-height:var(--vijim-element-sm);padding:0 var(--vijim-3);font-size:var(--vijim-label-size)}\n.vj-button[data-size="lg"]{min-height:var(--vijim-element-lg);padding:0 var(--vijim-5)}\n.vj-button[data-full="true"]{width:100%}.vj-button:disabled{cursor:not-allowed;opacity:.48}\n.vj-button[data-variant="primary"]{background:var(--vijim-accent-default);color:var(--vijim-on-accent)}\n.vj-button[data-variant="primary"]:hover:not(:disabled){background:var(--vijim-accent-hover)}\n.vj-button[data-variant="secondary"]{background:var(--vijim-surface-subtle);color:var(--vijim-text-primary)}\n.vj-button[data-variant="secondary"]:hover:not(:disabled),.vj-button[data-variant="ghost"]:hover:not(:disabled){background:var(--vijim-surface-muted)}\n.vj-button[data-variant="ghost"],.vj-button[data-variant="link"]{background:transparent;color:var(--vijim-text-secondary)}\n.vj-button[data-variant="link"]{color:var(--vijim-accent-default);padding-inline:var(--vijim-1)}\n.vj-button[data-variant="danger"]{background:var(--vijim-error-default);color:var(--vijim-on-accent)}\n.vj-button-spinner{width:16px;height:16px;border:2px solid currentColor;border-right-color:transparent;border-radius:var(--vijim-radius-full);animation:vj-spin .7s linear infinite}@keyframes vj-spin{to{transform:rotate(360deg)}}\n\n.vj-card{background:var(--vijim-surface-default);border:1px solid var(--vijim-border-default);border-radius:var(--vijim-radius-container);box-shadow:var(--vijim-shadow-low);overflow:hidden;min-width:0}\n.vj-card__header,.vj-card__footer{padding:var(--vj-card-pad);}.vj-card__header{border-bottom:1px solid var(--vijim-border-default)}.vj-card__footer{border-top:1px solid var(--vijim-border-default);background:var(--vijim-surface-muted)}\n.vj-card__title{font-size:var(--vijim-heading-size);font-weight:var(--vijim-heading-weight);line-height:var(--vijim-heading-line)}.vj-card__body{padding:var(--vj-card-body-pad)}\n.vj-card[data-padding="sm"]{--vj-card-pad:var(--vijim-3)}.vj-card[data-padding="md"]{--vj-card-pad:var(--vijim-4)}.vj-card[data-padding="lg"]{--vj-card-pad:var(--vijim-6)}\n.vj-card[data-body-padding="none"]{--vj-card-body-pad:0}.vj-card[data-body-padding="sm"]{--vj-card-body-pad:var(--vijim-3)}.vj-card[data-body-padding="md"]{--vj-card-body-pad:var(--vijim-4)}.vj-card[data-body-padding="lg"]{--vj-card-body-pad:var(--vijim-6)}\n\n.vj-badge{display:inline-flex;align-items:center;gap:var(--vijim-1);border-radius:var(--vijim-radius-full);padding:2px var(--vijim-2);font-size:var(--vijim-supporting-size);font-weight:600;line-height:1.45;background:var(--vj-badge-bg);color:var(--vj-badge-fg)}\n.vj-badge[data-tone="neutral"]{--vj-badge-bg:var(--vijim-surface-subtle);--vj-badge-fg:var(--vijim-text-secondary)}.vj-badge[data-tone="info"]{--vj-badge-bg:var(--vijim-accent-subtle);--vj-badge-fg:var(--vijim-accent-default)}.vj-badge[data-tone="success"]{--vj-badge-bg:var(--vijim-success-subtle);--vj-badge-fg:var(--vijim-success-default)}.vj-badge[data-tone="warning"]{--vj-badge-bg:var(--vijim-warning-subtle);--vj-badge-fg:var(--vijim-warning-default)}.vj-badge[data-tone="error"]{--vj-badge-bg:var(--vijim-error-subtle);--vj-badge-fg:var(--vijim-error-default)}\n.vj-status-dot{display:inline-flex;align-items:center;gap:var(--vijim-2);color:var(--vijim-text-secondary)}.vj-status-dot::before{content:"";width:7px;height:7px;border-radius:var(--vijim-radius-full);background:var(--vj-status-color)}.vj-status-dot[data-tone="neutral"]{--vj-status-color:var(--vijim-data-reference)}.vj-status-dot[data-tone="info"]{--vj-status-color:var(--vijim-accent-default)}.vj-status-dot[data-tone="success"]{--vj-status-color:var(--vijim-success-default)}.vj-status-dot[data-tone="warning"]{--vj-status-color:var(--vijim-warning-default)}.vj-status-dot[data-tone="error"]{--vj-status-color:var(--vijim-error-default)}\n\n.vj-field{display:grid;gap:var(--vijim-2)}.vj-field__label{font-size:var(--vijim-label-size);font-weight:var(--vijim-label-weight)}.vj-field__required{color:var(--vijim-error-default)}.vj-field__message{margin:0;font-size:var(--vijim-supporting-size);color:var(--vijim-text-muted)}.vj-field__message[data-error="true"]{color:var(--vijim-error-default)}\n.vj-input{width:100%;height:var(--vijim-element-md);border:0;border-radius:var(--vijim-radius-element);background:var(--vijim-surface-subtle);color:var(--vijim-text-primary);padding:0 var(--vijim-3);outline:0}.vj-input[data-size="sm"]{height:var(--vijim-element-sm);font-size:var(--vijim-label-size)}.vj-input::placeholder{color:var(--vijim-text-disabled)}.vj-input:focus{background:var(--vijim-selection)}.vj-input[aria-invalid="true"]{background:var(--vijim-input-error)}.vj-input:disabled{color:var(--vijim-text-disabled);cursor:not-allowed}\n\n.vj-tabs{display:flex;align-items:center;gap:var(--vijim-1);border-bottom:1px solid var(--vijim-border-default)}.vj-tab{appearance:none;border:0;border-bottom:2px solid transparent;background:transparent;padding:var(--vijim-3) var(--vijim-2);color:var(--vijim-text-muted);cursor:pointer}.vj-tab[aria-selected="true"]{border-bottom-color:var(--vijim-text-primary);color:var(--vijim-text-primary);font-weight:600}\n.vj-segmented{display:inline-flex;align-items:center;padding:0;border-radius:var(--vijim-radius-element);background:transparent;gap:2px}.vj-segmented__item{appearance:none;border:0;background:transparent;border-radius:var(--vijim-radius-element);height:30px;padding:0 var(--vijim-3);color:var(--vijim-text-muted);cursor:pointer}.vj-segmented__item[aria-checked="true"]{background:var(--state-selected-bg);color:var(--state-selected-ink);box-shadow:none;font-weight:600}\n\n.vj-list{display:flex;flex-direction:column}.vj-list[data-dividers="true"]>.vj-list-item+.vj-list-item{border-top:1px solid var(--vijim-border-default)}.vj-list-item{display:flex;align-items:center;gap:var(--vijim-3);width:100%;border:0;background:transparent;color:var(--vijim-text-primary);text-align:left;padding:var(--vijim-3);min-width:0}.vj-list[data-density="compact"] .vj-list-item{padding:var(--vijim-2) var(--vijim-3)}button.vj-list-item{cursor:pointer}button.vj-list-item:hover{background:var(--vijim-surface-muted)}.vj-list-item__body{display:grid;gap:2px;min-width:0;flex:1}.vj-list-item__label{font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vj-list-item__desc{font-size:var(--vijim-supporting-size);color:var(--vijim-text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vj-list-item__side{flex:none;color:var(--vijim-text-secondary)}\n.vj-table-wrap{width:100%;overflow:auto}.vj-table{width:100%;border-collapse:collapse;font-variant-numeric:tabular-nums}.vj-table caption{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0,0,0,0)}.vj-table th,.vj-table td{text-align:left;border-bottom:1px solid var(--vijim-border-default);padding:var(--vijim-3) var(--vijim-4)}.vj-table[data-density="compact"] th,.vj-table[data-density="compact"] td{padding:var(--vijim-2) var(--vijim-3);font-size:var(--vijim-label-size)}.vj-table th{color:var(--vijim-text-muted);font-size:var(--vijim-supporting-size);font-weight:600;background:var(--vijim-surface-muted)}.vj-table tr:last-child td{border-bottom:0}.vj-table__empty{text-align:center!important;color:var(--vijim-text-muted);padding:var(--vijim-8)!important}\n\n.vj-dialog{border:0;padding:0;border-radius:var(--vijim-radius-container);background:var(--vijim-surface-default);color:var(--vijim-text-primary);box-shadow:var(--vijim-shadow-overlay);width:min(520px,calc(100vw - 32px))}.vj-dialog::backdrop{background:var(--vijim-overlay)}.vj-dialog__header,.vj-dialog__body,.vj-dialog__footer{padding:var(--vijim-4)}.vj-dialog__header{border-bottom:1px solid var(--vijim-border-default)}.vj-dialog__title{margin:0;font-size:var(--vijim-heading-size)}.vj-dialog__description{margin:var(--vijim-1) 0 0;color:var(--vijim-text-muted);font-size:var(--vijim-label-size)}.vj-dialog__footer{display:flex;justify-content:flex-end;gap:var(--vijim-2);border-top:1px solid var(--vijim-border-default);background:var(--vijim-surface-muted)}\n.vj-visually-hidden{position:absolute!important;width:1px!important;height:1px!important;padding:0!important;margin:-1px!important;overflow:hidden!important;clip:rect(0,0,0,0)!important;white-space:nowrap!important;border:0!important}.vj-icon-button{width:var(--vijim-element-md);padding:0;border-radius:var(--vijim-radius-full)}.vj-icon-button[data-size="sm"]{width:var(--vijim-element-sm)}.vj-icon-button[data-size="lg"]{width:var(--vijim-element-lg)}\n.vj-stack{display:flex;flex-direction:column;gap:var(--vj-gap)}.vj-hstack{display:flex;align-items:center;gap:var(--vj-gap)}.vj-stack[data-gap="1"],.vj-hstack[data-gap="1"]{--vj-gap:var(--vijim-1)}.vj-stack[data-gap="2"],.vj-hstack[data-gap="2"]{--vj-gap:var(--vijim-2)}.vj-stack[data-gap="3"],.vj-hstack[data-gap="3"]{--vj-gap:var(--vijim-3)}.vj-stack[data-gap="4"],.vj-hstack[data-gap="4"]{--vj-gap:var(--vijim-4)}.vj-stack[data-gap="6"],.vj-hstack[data-gap="6"]{--vj-gap:var(--vijim-6)}.vj-hstack[data-justify="between"]{justify-content:space-between}.vj-hstack[data-align="start"]{align-items:flex-start}.vj-hstack[data-align="end"]{align-items:flex-end}.vj-hstack[data-wrap="true"]{flex-wrap:wrap}\n.vj-grid{display:grid;gap:var(--vj-grid-gap)}.vj-grid[data-columns="1"]{grid-template-columns:1fr}.vj-grid[data-columns="2"]{grid-template-columns:repeat(2,minmax(0,1fr))}.vj-grid[data-columns="3"]{grid-template-columns:repeat(3,minmax(0,1fr))}.vj-grid[data-columns="4"]{grid-template-columns:repeat(4,minmax(0,1fr))}.vj-grid[data-gap="2"]{--vj-grid-gap:var(--vijim-2)}.vj-grid[data-gap="3"]{--vj-grid-gap:var(--vijim-3)}.vj-grid[data-gap="4"]{--vj-grid-gap:var(--vijim-4)}.vj-grid[data-gap="6"]{--vj-grid-gap:var(--vijim-6)}\n.vj-page-canvas{min-height:100%;min-width:var(--vijim-content-min);padding:var(--vijim-5);background:var(--vijim-background-canvas);display:flex;flex-direction:column;gap:var(--vijim-4)}.vj-page-header{min-height:59px;padding:0 var(--vijim-5);background:var(--vijim-surface-default);border-bottom:1px solid var(--vijim-border-default);display:flex;align-items:center;justify-content:space-between;gap:var(--vijim-4)}.vj-page-header__main{display:flex;align-items:center;gap:var(--vijim-2);min-width:0}.vj-page-header__title{margin:0;font-size:15px;line-height:1.35;font-weight:600}.vj-page-header__context{color:var(--vijim-text-muted);font-size:var(--vijim-label-size);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.vj-section-header{display:flex;align-items:flex-end;justify-content:space-between;gap:var(--vijim-4)}.vj-section-header h2{margin:0;font-size:var(--vijim-heading-size)}.vj-section-header p{margin:2px 0 0;color:var(--vijim-text-muted);font-size:var(--vijim-label-size)}\n.vj-app-shell{min-height:100vh;display:grid;grid-template-columns:var(--vijim-sidebar-expanded) minmax(0,1fr);background:var(--vijim-background-canvas)}.vj-sidebar{position:sticky;top:0;height:100vh;background:var(--vijim-surface-default);border-right:1px solid var(--vijim-border-default);padding:var(--vijim-4) var(--vijim-3);display:flex;flex-direction:column;gap:var(--vijim-5);overflow:auto}.vj-sidebar__brand{min-height:60px;display:flex;align-items:flex-start}.vj-sidebar__brand img{max-width:176px;height:auto}.vj-sidebar__section{display:grid;gap:var(--vijim-1)}.vj-sidebar__section-label{padding:0 var(--vijim-2);margin-bottom:var(--vijim-1);font-size:var(--vijim-supporting-size);color:var(--vijim-text-disabled)}.vj-sidebar__item{appearance:none;border:0;background:transparent;width:100%;min-height:38px;padding:0 var(--vijim-3);border-radius:var(--vijim-radius-element);display:flex;align-items:center;gap:var(--vijim-2);text-align:left;color:var(--vijim-text-secondary);cursor:pointer}.vj-sidebar__item:hover,.vj-sidebar__item:focus-visible{background:var(--vijim-surface-subtle);outline:0}.vj-sidebar__item[aria-current="page"]{background:var(--vijim-surface-subtle);color:var(--vijim-text-primary);font-weight:600}.vj-app-shell__main{min-width:0;display:grid;grid-template-rows:auto 1fr}.vj-mobile-nav{display:none}\n.vj-kpi-grid{display:grid;gap:var(--vijim-3)}.vj-kpi-grid[data-columns="2"]{grid-template-columns:repeat(2,minmax(0,1fr))}.vj-kpi-grid[data-columns="3"]{grid-template-columns:repeat(3,minmax(0,1fr))}.vj-kpi-grid[data-columns="4"]{grid-template-columns:repeat(4,minmax(0,1fr))}.vj-stat{padding:var(--vijim-4);display:grid;gap:var(--vijim-1);background:var(--vijim-surface-default);border:1px solid var(--vijim-border-default);border-radius:var(--vijim-radius-container)}.vj-stat__value{display:flex;align-items:center;gap:var(--vijim-2);font-size:26px;line-height:1.2;font-weight:650;letter-spacing:var(--vijim-tracking);font-variant-numeric:tabular-nums}.vj-stat[data-tone="info"] .vj-stat__value{color:var(--vijim-accent-default)}.vj-stat[data-tone="error"] .vj-stat__value{color:var(--vijim-error-default)}.vj-stat__label{color:var(--vijim-text-secondary)}.vj-stat__hint{color:var(--vijim-text-disabled);font-size:var(--vijim-supporting-size)}\n.vj-dashboard-grid{display:grid;grid-template-columns:repeat(12,minmax(0,1fr));gap:var(--vijim-3)}.vj-dashboard-grid__item[data-span="4"]{grid-column:span 4}.vj-dashboard-grid__item[data-span="6"]{grid-column:span 6}.vj-dashboard-grid__item[data-span="8"]{grid-column:span 8}.vj-dashboard-grid__item[data-span="12"]{grid-column:span 12}.vj-chart{width:100%;height:260px;overflow:visible}.vj-chart text{font-family:var(--vijim-font-body);font-size:11px;fill:var(--vijim-text-muted)}.vj-chart__grid{stroke:var(--vijim-border-default);stroke-dasharray:2 3}.vj-chart__value{fill:var(--vijim-text-secondary)!important;font-variant-numeric:tabular-nums}.vj-chart-figure{margin:0}.vj-chart__bar--main{fill:var(--vijim-data-main)}.vj-chart__bar--attention{fill:var(--vijim-data-attention)}.vj-chart__bar--risk{fill:var(--vijim-data-risk)}.vj-chart__bar--reference{fill:var(--vijim-data-reference)}.vj-chart__bar--positive{fill:var(--vijim-data-positive)}\n.vj-pattern{display:flex;flex-direction:column;min-height:100%}.vj-empty-state{min-height:220px;display:grid;place-items:center;text-align:center;color:var(--vijim-text-muted)}.vj-empty-state h2{color:var(--vijim-text-primary);margin:0 0 var(--vijim-2);font-size:var(--vijim-heading-size)}.vj-empty-state p{margin:0 0 var(--vijim-4)}\n@media (max-width:880px){.vj-app-shell{grid-template-columns:1fr}.vj-sidebar{display:none}.vj-mobile-nav{display:flex;position:sticky;top:0;z-index:3;min-height:52px;padding:0 var(--vijim-4);align-items:center;justify-content:space-between;background:var(--vijim-surface-default);border-bottom:1px solid var(--vijim-border-default)}.vj-page-canvas{padding:var(--vijim-3)}.vj-kpi-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.vj-dashboard-grid__item[data-span]{grid-column:span 12}.vj-grid{grid-template-columns:1fr!important}}\n@media (max-width:520px){.vj-page-header{padding:var(--vijim-3);align-items:flex-start;min-height:auto;flex-direction:column}.vj-kpi-grid{grid-template-columns:1fr}.vj-stat__value{font-size:23px}}\n\n.vj-hstack{min-width:0}.vj-hstack>.vj-input{flex:1 1 220px;min-width:0}\n.vj-textarea,.vj-select{width:100%;border:0;border-radius:var(--vijim-radius-element);background:var(--vijim-surface-subtle);color:var(--vijim-text-primary);padding:var(--vijim-3);outline:0}.vj-textarea{resize:vertical;line-height:var(--vijim-body-line)}.vj-textarea[data-rows="3"]{min-height:82px}.vj-textarea[data-rows="5"]{min-height:126px}.vj-textarea[data-rows="8"]{min-height:192px}.vj-textarea:focus,.vj-select:focus{background:var(--vijim-selection)}.vj-textarea[aria-invalid="true"],.vj-select[aria-invalid="true"]{background:var(--vijim-input-error)}.vj-select{height:var(--vijim-element-md);padding-block:0;cursor:pointer}\n.vj-check,.vj-radio{position:relative;display:flex;align-items:flex-start;gap:var(--vijim-3);cursor:pointer}.vj-check__native{position:absolute;opacity:0;pointer-events:none}.vj-check__box,.vj-radio__dot{width:18px;height:18px;flex:none;border:1px solid var(--vijim-border-emphasized);background:var(--vijim-surface-default);display:grid;place-items:center;color:var(--vijim-on-accent);font-size:12px}.vj-check__box{border-radius:var(--vijim-radius-inner)}.vj-check__native:checked+.vj-check__box,.vj-check__native[aria-checked="mixed"]+.vj-check__box{background:var(--vijim-accent-default);border-color:var(--vijim-accent-default)}.vj-check__native:focus-visible+.vj-check__box,.vj-radio input:focus-visible+.vj-radio__dot{outline:2px solid var(--vijim-focus);outline-offset:2px}.vj-check__copy{display:grid;gap:2px;min-width:0}.vj-check__label{color:var(--vijim-text-primary);font-weight:500}.vj-check__description{color:var(--vijim-text-muted);font-size:var(--vijim-supporting-size)}.vj-radio-list{display:grid;gap:var(--vijim-3)}.vj-radio-list[data-density="compact"]{gap:var(--vijim-2)}.vj-radio input{position:absolute;opacity:0}.vj-radio__dot{border-radius:var(--vijim-radius-full)}.vj-radio input:checked+.vj-radio__dot{border:5px solid var(--vijim-accent-default)}\n.vj-switch-row{display:flex;align-items:center;justify-content:space-between;gap:var(--vijim-4)}.vj-switch{width:38px;height:22px;flex:none;border:0;border-radius:var(--vijim-radius-full);padding:2px;background:var(--vijim-border-emphasized);cursor:pointer;transition:background var(--vijim-fast) var(--vijim-easing)}.vj-switch[aria-checked="true"]{background:var(--vijim-accent-default)}.vj-switch__thumb{display:block;width:18px;height:18px;border-radius:var(--vijim-radius-full);background:var(--vijim-surface-default);box-shadow:var(--vijim-shadow-low);transform:translateX(0);transition:transform var(--vijim-fast) var(--vijim-easing)}.vj-switch[aria-checked="true"] .vj-switch__thumb{transform:translateX(16px)}.vj-switch:disabled,.vj-check:has(input:disabled),.vj-radio:has(input:disabled){opacity:.48;cursor:not-allowed}\n.vj-popover{position:relative;display:inline-flex}.vj-popover__trigger{appearance:none;border:0;background:transparent;color:var(--vijim-text-secondary);min-height:var(--vijim-element-sm);padding:0 var(--vijim-2);border-radius:var(--vijim-radius-element);display:inline-flex;align-items:center;justify-content:center;cursor:pointer}.vj-popover__trigger:hover,.vj-popover__trigger[aria-expanded="true"]{background:var(--vijim-surface-subtle);color:var(--vijim-text-primary)}.vj-popover__content{position:absolute;z-index:20;top:calc(100% + var(--vijim-2));left:0;min-width:220px;padding:var(--vijim-2);background:var(--vijim-surface-popover);border:1px solid var(--vijim-border-default);border-radius:var(--vijim-radius-element);box-shadow:var(--vijim-shadow-medium)}.vj-popover__content[data-placement="end"]{left:auto;right:0}.vj-menu{display:grid;gap:2px}.vj-menu__item{appearance:none;border:0;background:transparent;color:var(--vijim-text-primary);width:100%;padding:var(--vijim-2) var(--vijim-3);border-radius:var(--vijim-radius-inner);display:flex;align-items:center;gap:var(--vijim-2);text-align:left;cursor:pointer}.vj-menu__item:hover,.vj-menu__item:focus-visible{background:var(--vijim-surface-subtle);outline:0}.vj-menu__item[data-tone="danger"]{color:var(--vijim-error-default)}.vj-menu__item:disabled{opacity:.45;cursor:not-allowed}.vj-menu__copy{display:grid;gap:1px}.vj-menu__description{font-size:var(--vijim-supporting-size);color:var(--vijim-text-muted)}\n.vj-spinner{display:inline-flex;align-items:center;justify-content:center}.vj-spinner__ring{display:block;width:18px;height:18px;border:2px solid var(--vijim-border-emphasized);border-right-color:var(--vijim-accent-default);border-radius:var(--vijim-radius-full);animation:vj-spin .7s linear infinite}.vj-spinner[data-size="sm"] .vj-spinner__ring{width:14px;height:14px}.vj-spinner[data-size="lg"] .vj-spinner__ring{width:24px;height:24px}.vj-skeleton{display:grid;gap:var(--vijim-2)}.vj-skeleton span{display:block;min-height:14px;border-radius:var(--vijim-radius-inner);background:var(--vijim-surface-subtle);animation:vj-pulse 1.4s var(--vijim-easing) infinite}.vj-skeleton span:last-child{width:72%}.vj-skeleton[data-variant="block"] span{min-height:120px;width:100%}.vj-skeleton[data-variant="avatar"] span{width:40px;height:40px;border-radius:var(--vijim-radius-full)}@keyframes vj-pulse{50%{opacity:.52}}\n.vj-progress{display:grid;gap:var(--vijim-2)}.vj-progress__meta{display:flex;justify-content:space-between;color:var(--vijim-text-secondary);font-size:var(--vijim-label-size)}.vj-progress__native{appearance:none;width:100%;height:6px;border:0;border-radius:var(--vijim-radius-full);overflow:hidden;background:var(--vijim-surface-subtle)}.vj-progress__native::-webkit-progress-bar{background:var(--vijim-surface-subtle)}.vj-progress__native::-webkit-progress-value{background:var(--vj-progress-color)}.vj-progress__native::-moz-progress-bar{background:var(--vj-progress-color)}.vj-progress__native[data-tone="info"]{--vj-progress-color:var(--vijim-accent-default)}.vj-progress__native[data-tone="success"]{--vj-progress-color:var(--vijim-success-default)}.vj-progress__native[data-tone="warning"]{--vj-progress-color:var(--vijim-warning-default)}.vj-progress__native[data-tone="error"]{--vj-progress-color:var(--vijim-error-default)}\n.vj-toast-region{position:fixed;z-index:50;right:var(--vijim-4);bottom:var(--vijim-4);width:min(360px,calc(100vw - 32px));display:grid;gap:var(--vijim-2)}.vj-toast{display:flex;align-items:flex-start;gap:var(--vijim-3);padding:var(--vijim-3);background:var(--vijim-surface-popover);border:1px solid var(--vijim-border-default);border-radius:var(--vijim-radius-element);box-shadow:var(--vijim-shadow-high)}.vj-toast__marker{width:7px;height:7px;margin-top:6px;border-radius:var(--vijim-radius-full);background:var(--vj-toast-color)}.vj-toast[data-tone="neutral"]{--vj-toast-color:var(--vijim-data-reference)}.vj-toast[data-tone="info"]{--vj-toast-color:var(--vijim-accent-default)}.vj-toast[data-tone="success"]{--vj-toast-color:var(--vijim-success-default)}.vj-toast[data-tone="warning"]{--vj-toast-color:var(--vijim-warning-default)}.vj-toast[data-tone="error"]{--vj-toast-color:var(--vijim-error-default)}.vj-toast__copy{display:grid;gap:2px;flex:1}.vj-toast__copy span{color:var(--vijim-text-muted);font-size:var(--vijim-supporting-size)}.vj-toast__close{appearance:none;border:0;background:transparent;color:var(--vijim-text-muted);cursor:pointer;font-size:18px;line-height:1}\n.vj-chart__line{fill:none;stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round}.vj-chart__point{stroke:var(--vijim-surface-default);stroke-width:2}.vj-chart__area{opacity:.14}.vj-chart__stroke--main{stroke:var(--vijim-data-main)}.vj-chart__stroke--attention{stroke:var(--vijim-data-attention)}.vj-chart__stroke--risk{stroke:var(--vijim-data-risk)}.vj-chart__stroke--reference{stroke:var(--vijim-data-reference)}.vj-chart__stroke--positive{stroke:var(--vijim-data-positive)}.vj-chart__fill--main{fill:var(--vijim-data-main)}.vj-chart__fill--attention{fill:var(--vijim-data-attention)}.vj-chart__fill--risk{fill:var(--vijim-data-risk)}.vj-chart__fill--reference{fill:var(--vijim-data-reference)}.vj-chart__fill--positive{fill:var(--vijim-data-positive)}.vj-pie{margin:0;display:grid;grid-template-columns:minmax(160px,220px) 1fr;align-items:center;gap:var(--vijim-5)}.vj-pie svg{width:100%}.vj-pie__hole{fill:var(--vijim-surface-default)}.vj-pie__legend{display:grid;gap:var(--vijim-3)}.vj-pie__legend>div{display:grid;grid-template-columns:auto 1fr auto;align-items:center;gap:var(--vijim-2)}.vj-pie__marker{width:8px;height:8px;border-radius:var(--vijim-radius-full)}.vj-pie__legend strong{font-variant-numeric:tabular-nums}.vj-sparkline{width:120px;height:36px;overflow:visible}\n.vj-filter-workspace{display:grid;grid-template-columns:260px minmax(0,1fr);gap:var(--vijim-4);align-items:start}.vj-filter-workspace>aside{position:sticky;top:var(--vijim-4)}.vj-pattern-section__header{display:flex;align-items:flex-end;justify-content:space-between;gap:var(--vijim-4)}.vj-pattern-section__header h2{margin:0;font-size:var(--vijim-heading-size)}.vj-pattern-section__header p{margin:2px 0 0;color:var(--vijim-text-muted);font-size:var(--vijim-label-size)}\n@media (max-width:880px){.vj-filter-workspace{grid-template-columns:1fr}.vj-filter-workspace>aside{position:static}.vj-pie{grid-template-columns:1fr}}\n\n@media (max-width:880px){.vj-kpi-grid[data-columns]{grid-template-columns:repeat(2,minmax(0,1fr))}}\n@media (max-width:520px){.vj-kpi-grid[data-columns]{grid-template-columns:1fr}}\n.vj-avatar{display:inline-grid;place-items:center;overflow:hidden;border-radius:var(--vijim-radius-full);background:var(--vijim-surface-subtle);color:var(--vijim-text-secondary);font-weight:600}.vj-avatar[data-size="sm"]{width:28px;height:28px;font-size:11px}.vj-avatar[data-size="md"]{width:36px;height:36px;font-size:12px}.vj-avatar[data-size="lg"]{width:48px;height:48px}.vj-avatar img,.vj-thumbnail img{width:100%;height:100%;object-fit:cover}.vj-thumbnail{display:inline-grid;place-items:center;overflow:hidden;border-radius:var(--vijim-radius-element);background:var(--vijim-surface-subtle);color:var(--vijim-text-disabled);font-size:var(--vijim-supporting-size);text-align:center}.vj-thumbnail[data-size="sm"]{width:48px;height:48px}.vj-thumbnail[data-size="md"]{width:72px;height:72px}.vj-thumbnail[data-size="lg"]{width:112px;height:84px}.vj-metadata{margin:0;display:grid;gap:var(--vijim-3) var(--vijim-6)}.vj-metadata[data-columns="2"]{grid-template-columns:repeat(2,minmax(0,1fr))}.vj-metadata>div{display:grid;grid-template-columns:minmax(90px,auto) 1fr;gap:var(--vijim-3)}.vj-metadata dt{color:var(--vijim-text-muted)}.vj-metadata dd{margin:0;color:var(--vijim-text-primary)}.vj-pagination{display:flex;align-items:center;justify-content:flex-end;gap:var(--vijim-1)}.vj-pagination button{appearance:none;min-width:32px;height:32px;border:0;border-radius:var(--vijim-radius-element);padding:0 var(--vijim-2);background:transparent;color:var(--vijim-text-secondary);cursor:pointer}.vj-pagination button:hover{background:var(--vijim-surface-subtle)}.vj-pagination button[aria-current="page"]{background:var(--vijim-text-primary);color:var(--vijim-surface-default)}.vj-pagination button:disabled{opacity:.4;cursor:not-allowed}\n.vj-tooltip{position:relative;display:inline-flex}.vj-tooltip>button{appearance:none;border:0;background:transparent;color:inherit;padding:0;display:inline-flex;cursor:help}.vj-tooltip__content{position:absolute;z-index:30;left:50%;bottom:calc(100% + var(--vijim-2));transform:translateX(-50%);width:max-content;max-width:240px;padding:var(--vijim-2) var(--vijim-3);border-radius:var(--vijim-radius-element);background:var(--vijim-text-primary);color:var(--vijim-surface-default);font-size:var(--vijim-supporting-size);box-shadow:var(--vijim-shadow-medium);opacity:0;visibility:hidden;transition:opacity var(--vijim-fast) var(--vijim-easing)}.vj-tooltip__content[data-placement="bottom"]{bottom:auto;top:calc(100% + var(--vijim-2))}.vj-tooltip:hover .vj-tooltip__content,.vj-tooltip:focus-within .vj-tooltip__content{opacity:1;visibility:visible}\n.vj-input-group{display:flex;align-items:center;gap:var(--vijim-2);height:var(--vijim-element-md);padding:0 var(--vijim-3);border-radius:var(--vijim-radius-element);background:var(--vijim-surface-subtle);color:var(--vijim-text-muted)}.vj-input-group:focus-within{background:var(--vijim-selection)}.vj-input-group[data-invalid="true"]{background:var(--vijim-input-error)}.vj-input-group input{min-width:0;flex:1;border:0;outline:0;background:transparent;color:var(--vijim-text-primary)}.vj-slider{display:grid;gap:var(--vijim-2)}.vj-slider__meta{display:flex;justify-content:space-between;color:var(--vijim-text-secondary)}.vj-slider input{width:100%;accent-color:var(--vijim-accent-default)}.vj-date{color-scheme:inherit}.vj-search-select{position:relative}.vj-search-select__list{position:absolute;z-index:18;top:calc(100% + var(--vijim-1));left:0;right:0;max-height:220px;overflow:auto;padding:var(--vijim-1);background:var(--vijim-surface-popover);border:1px solid var(--vijim-border-default);border-radius:var(--vijim-radius-element);box-shadow:var(--vijim-shadow-medium)}.vj-search-select__list button{appearance:none;width:100%;border:0;background:transparent;color:var(--vijim-text-primary);padding:var(--vijim-2) var(--vijim-3);border-radius:var(--vijim-radius-inner);text-align:left;cursor:pointer}.vj-search-select__list button:hover,.vj-search-select__list button[aria-selected="true"]{background:var(--vijim-surface-subtle)}.vj-search-select__list>span{display:block;padding:var(--vijim-3);color:var(--vijim-text-muted)}.vj-multi-selector{display:flex;flex-wrap:wrap;gap:var(--vijim-2)}.vj-multi-selector button,.vj-tag{min-height:28px;border:0;border-radius:var(--vijim-radius-full);padding:0 var(--vijim-3);display:inline-flex;align-items:center;gap:var(--vijim-1);background:var(--vijim-surface-subtle);color:var(--vijim-text-secondary)}.vj-multi-selector button{cursor:pointer}.vj-multi-selector button[aria-pressed="true"],.vj-tag[data-tone="info"]{background:var(--vijim-accent-subtle);color:var(--vijim-accent-default)}.vj-tag button{appearance:none;border:0;background:transparent;color:inherit;padding:0;cursor:pointer;font-size:16px;line-height:1}\n\n.vj-mobile-nav select{min-width:0;max-width:150px;height:32px;border:0;border-radius:var(--vijim-radius-element);padding:0 var(--vijim-2);background:var(--vijim-surface-subtle);color:var(--vijim-text-primary)}\n\n\n/* \u5168\u5E73\u53F0\u552F\u4E00\u58F3\u5C42\u51E0\u4F55 \u2014\u2014 \u4E0E Studio \u5BF9\u9F50 */\n.vj-platform-shell {\n  min-height: 100vh;\n  display: flex;\n  flex-direction: row;\n  background: var(--bg, #F7F8FA);\n  color: var(--ink, #121317);\n  font-family: var(--font-sans, inherit);\n}\n.vj-platform-shell__sidebar {\n  width: 246px;\n  flex: none;\n  align-self: flex-start;\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  background: var(--surface, #fff);\n  border-right: 1px solid var(--line, rgba(18,19,23,0.085));\n}\n.vj-platform-shell__brand {\n  height: 76px;\n  min-height: 76px;\n  display: flex;\n  align-items: center;\n  padding: 0 12px 0 26px;\n  flex: none;\n}\n.vj-platform-shell__brand a,\n.vj-platform-shell__brand > * {\n  min-width: 0;\n  text-decoration: none;\n  color: inherit;\n}\n.vj-platform-shell__nav {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 12px 12px 18px;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  scrollbar-width: thin;\n}\n.vj-platform-shell__section + .vj-platform-shell__section {\n  margin-top: 10px;\n}\n.vj-platform-shell__section-label {\n  display: flex;\n  align-items: center;\n  min-height: 28px;\n  margin: 0 6px 5px;\n  padding: 7px 0 6px;\n  border-bottom: 1px solid var(--line, rgba(18,19,23,0.085));\n  color: var(--faint, #A6AAB2);\n  font-size: 11.5px;\n  font-weight: 650;\n  letter-spacing: 0.2px;\n  line-height: 1.25;\n}\n.vj-platform-shell__item {\n  appearance: none;\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-height: 36px;\n  margin: 0 0 3px;\n  padding: 8px 13px;\n  border: 1px solid transparent;\n  border-radius: 8px;\n  width: 100%;\n  text-align: left;\n  text-decoration: none;\n  cursor: pointer;\n  background: transparent;\n  color: var(--ink-2, #3D4047);\n  font: inherit;\n  font-size: 13.5px;\n  font-weight: 500;\n  line-height: 1.35;\n  transition: background-color 0.15s ease, color 0.15s ease;\n}\n.vj-platform-shell__item:hover,\n.vj-platform-shell__item:focus-visible {\n  background: var(--surface-2, #FAFAFB);\n  color: var(--ink, #121317);\n  outline: 0;\n}\n.vj-platform-shell__item[data-active="true"],\n.vj-platform-shell__item[aria-current="page"] {\n  background: var(--state-selected-bg, rgba(18,19,23,0.07));\n  color: var(--state-selected-ink, #121317);\n  font-weight: 600;\n}\n.vj-platform-shell__item-icon {\n  width: 18px;\n  height: 18px;\n  flex: none;\n  display: inline-grid;\n  place-items: center;\n  color: currentColor;\n}\n.vj-platform-shell__item-label {\n  min-width: 0;\n  flex: 1;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.vj-platform-shell__item-meta {\n  margin-left: auto;\n  flex: none;\n}\n.vj-platform-shell__footer {\n  margin-top: auto;\n  padding: 12px;\n  border-top: 1px solid var(--line, rgba(18,19,23,0.085));\n  flex: none;\n}\n.vj-platform-shell__main {\n  min-width: 0;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  background: var(--bg, #F7F8FA);\n}\n.vj-platform-shell__topbar {\n  flex: none;\n  height: 60px;\n  min-height: 60px;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 0 24px;\n  border-bottom: 1px solid var(--line, rgba(18,19,23,0.085));\n  background: var(--surface, #fff);\n}\n.vj-platform-shell__topbar-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  min-width: 0;\n  flex: 1;\n}\n.vj-platform-shell__topbar-title > strong {\n  margin: 0;\n  color: var(--ink-2, #3D4047);\n  font-size: 14px;\n  font-weight: 580;\n  line-height: 1.2;\n  white-space: nowrap;\n}\n.vj-platform-shell__topbar-context {\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  color: var(--faint, #A6AAB2);\n  font-size: 12px;\n}\n.vj-platform-shell__topbar-actions {\n  margin-left: auto;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: none;\n}\n.vj-platform-shell__content {\n  flex: 1;\n  min-width: 0;\n  width: 100%;\n  box-sizing: border-box;\n  padding: 20px 22px 40px;\n  background: var(--bg, #F7F8FA);\n}\n.vj-platform-shell__menu-button {\n  display: none;\n  appearance: none;\n  border: 0;\n  background: transparent;\n  color: var(--ink-2, #3D4047);\n  width: 34px;\n  height: 34px;\n  border-radius: 8px;\n  place-items: center;\n  cursor: pointer;\n}\n.vj-platform-shell__menu-button:hover,\n.vj-platform-shell__menu-button:focus-visible {\n  background: var(--surface-2, #FAFAFB);\n  outline: 0;\n}\n.vj-platform-shell__drawer {\n  display: none;\n}\n@media (max-width: 900px) {\n  .vj-platform-shell__sidebar {\n    display: none;\n  }\n  .vj-platform-shell__menu-button {\n    display: grid;\n  }\n  .vj-platform-shell__topbar {\n    padding: 0 14px;\n  }\n  .vj-platform-shell__content {\n    padding: 18px 14px 40px;\n  }\n  .vj-platform-shell__drawer {\n    position: fixed;\n    inset: 0;\n    z-index: 80;\n    display: block;\n    visibility: hidden;\n    pointer-events: none;\n  }\n  .vj-platform-shell__drawer[data-open="true"] {\n    visibility: visible;\n    pointer-events: auto;\n  }\n  .vj-platform-shell__drawer-backdrop {\n    position: absolute;\n    inset: 0;\n    border: 0;\n    background: rgba(18, 19, 23, 0.28);\n    opacity: 0;\n    transition: opacity 160ms ease;\n  }\n  .vj-platform-shell__drawer[data-open="true"] .vj-platform-shell__drawer-backdrop {\n    opacity: 1;\n  }\n  .vj-platform-shell__drawer-panel {\n    position: absolute;\n    inset: 0 auto 0 0;\n    display: flex;\n    width: min(286px, 86vw);\n    flex-direction: column;\n    background: var(--surface, #fff);\n    border-right: 1px solid var(--line, rgba(18,19,23,0.085));\n    transform: translateX(-100%);\n    transition: transform 220ms ease;\n  }\n  .vj-platform-shell__drawer[data-open="true"] .vj-platform-shell__drawer-panel {\n    transform: translateX(0);\n  }\n  .vj-platform-shell__drawer-panel .vj-platform-shell__brand {\n    justify-content: space-between;\n    padding-right: 12px;\n  }\n  .vj-platform-shell__drawer-panel .vj-platform-shell__nav {\n    flex: 1;\n  }\n}\n@media (prefers-reduced-motion: reduce) {\n  .vj-platform-shell__item,\n  .vj-platform-shell__drawer-backdrop,\n  .vj-platform-shell__drawer-panel {\n    transition: none;\n  }\n}\n\n/* \u517C\u5BB9\u65E7 ADMIN \u7C7B\u540D\uFF1A\u51E0\u4F55\u7EDF\u4E00\u5230\u5E73\u53F0\u58F3 */\n.vj-app-shell {\n  min-height: 100vh;\n  display: grid;\n  grid-template-columns: 246px minmax(0, 1fr);\n  background: var(--vijim-background-canvas, var(--bg, #F7F8FA));\n}\n.vj-sidebar {\n  position: sticky;\n  top: 0;\n  height: 100vh;\n  background: var(--vijim-surface-default, var(--surface, #fff));\n  border-right: 1px solid var(--vijim-border-default, var(--line, rgba(18,19,23,0.085)));\n  padding: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0;\n  overflow: auto;\n}\n.vj-sidebar__brand {\n  min-height: 76px;\n  height: 76px;\n  display: flex;\n  align-items: center;\n  padding: 0 12px 0 26px;\n}\n.vj-sidebar__brand img {\n  max-width: 148px;\n  height: auto;\n}\n.vj-sidebar__section {\n  display: grid;\n  gap: 3px;\n  padding: 0 12px;\n}\n.vj-sidebar__section + .vj-sidebar__section {\n  margin-top: 10px;\n}\n.vj-sidebar__section-label {\n  margin: 0 6px 5px;\n  padding: 7px 0 6px;\n  border-bottom: 1px solid var(--vijim-border-default, var(--line, rgba(18,19,23,0.085)));\n  font-size: 11.5px;\n  font-weight: 650;\n  color: var(--vijim-text-disabled, var(--faint, #A6AAB2));\n}\n.vj-sidebar__item {\n  appearance: none;\n  border: 0;\n  background: transparent;\n  width: 100%;\n  min-height: 36px;\n  padding: 8px 13px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  text-align: left;\n  color: var(--vijim-text-secondary, var(--ink-2, #3D4047));\n  cursor: pointer;\n  font-size: 13.5px;\n  font-weight: 500;\n}\n.vj-sidebar__item:hover,\n.vj-sidebar__item:focus-visible {\n  background: var(--vijim-surface-muted, var(--surface-2, #FAFAFB));\n  outline: 0;\n}\n.vj-sidebar__item[aria-current="page"] {\n  background: var(--state-selected-bg, rgba(18,19,23,0.07));\n  color: var(--state-selected-ink, #121317);\n  font-weight: 600;\n}\n.vj-app-shell__main {\n  min-width: 0;\n  display: grid;\n  grid-template-rows: auto 1fr;\n  background: var(--vijim-background-canvas, var(--bg, #F7F8FA));\n}\n.vj-mobile-nav {\n  display: none;\n}\n.vj-page-header {\n  min-height: 60px;\n  height: 60px;\n  padding: 0 24px;\n  background: var(--vijim-surface-default, var(--surface, #fff));\n  border-bottom: 1px solid var(--vijim-border-default, var(--line, rgba(18,19,23,0.085)));\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n}\n.vj-page-canvas {\n  min-height: 100%;\n  padding: 20px 22px 40px;\n  background: var(--vijim-background-canvas, var(--bg, #F7F8FA));\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n@media (max-width: 900px) {\n  .vj-app-shell {\n    grid-template-columns: 1fr;\n  }\n  .vj-sidebar {\n    display: none;\n  }\n  .vj-mobile-nav {\n    display: flex;\n    position: sticky;\n    top: 0;\n    z-index: 3;\n    min-height: 52px;\n    padding: 0 14px;\n    align-items: center;\n    justify-content: space-between;\n    background: var(--vijim-surface-default, var(--surface, #fff));\n    border-bottom: 1px solid var(--vijim-border-default, var(--line, rgba(18,19,23,0.085)));\n  }\n  .vj-page-header {\n    padding: 0 14px;\n  }\n  .vj-page-canvas {\n    padding: 18px 14px 40px;\n  }\n}\n';

// src/shell-responsive-css.ts
var VIJIM_SHELL_RESPONSIVE_CSS = `
.vj-platform-shell__topbar-center {
  min-width: 180px;
  flex: 0 1 420px;
}

.vj-platform-shell[data-viewport="fixed"] {
  position: fixed;
  inset: 0;
  z-index: 50;
  overflow: hidden;
}

.vj-platform-shell[data-viewport="fixed"] .vj-platform-shell__main {
  height: 100%;
  min-height: 0;
}

.vj-platform-shell[data-viewport="fixed"] .vj-platform-shell__content {
  min-height: 0;
  overflow: auto;
}

@media (max-width: 560px) {
  .vj-platform-shell__topbar-title {
    gap: 6px;
  }

  .vj-platform-shell__topbar-context,
  .vj-platform-shell__topbar-context-separator {
    display: none;
  }

  .vj-platform-shell__topbar-center {
    display: none;
  }
}
`;

// src/material-compat-css.ts
var VIJIM_MATERIAL_COMPAT_CSS = `
.material-form-grid {
  display: grid;
  column-gap: var(--material-form-column-gap, var(--form-column-gap, 16px));
  row-gap: var(--material-form-row-gap, var(--form-row-gap, 14px));
  align-items: start;
  min-width: 0;
}
.material-form-grid[data-columns] {
  grid-template-columns: repeat(var(--material-form-columns, 2), minmax(0, 1fr));
}
.material-form-grid:not([data-columns]) {
  grid-template-columns: repeat(12, minmax(0, 1fr));
}
.material-form-grid[data-columns] > .material-field {
  grid-column: auto;
  align-self: start;
  min-width: 0;
}
.material-form-grid[data-columns] > .material-field--wide {
  grid-column: 1 / -1;
}
.material-form-grid:not([data-columns]) > .material-field {
  grid-column: span 6;
  align-self: start;
}
.material-form-grid:not([data-columns]) > .material-field--third {
  grid-column: span 4;
}
.material-form-grid:not([data-columns]) > .material-field--wide {
  grid-column: 1 / -1;
}
.material-field {
  display: grid;
  min-width: 0;
  gap: var(--form-field-gap, 5px);
}
.material-field > [data-slot="label"] {
  color: var(--ink-2, #3D4047);
  font-family: var(--font-sans, inherit);
  font-size: var(--type-label-size, 13px);
  font-weight: 500;
  line-height: var(--type-label-line, 1.4);
  letter-spacing: 0;
}
.material-field-hint {
  margin: 0;
  color: var(--faint, #A6AAB2);
  font-family: var(--font-sans, inherit);
  font-size: var(--type-supporting-size, 12px);
  font-weight: 400;
  line-height: var(--type-supporting-line, 1.45);
  letter-spacing: 0;
}
.material-field[data-status="error"] .material-field-hint {
  color: var(--color-error, #E03742);
}
.material-field[data-status="warning"] .material-field-hint {
  color: var(--color-warning, #D88A00);
}
.material-field[data-status="success"] .material-field-hint {
  color: var(--color-success, #18974C);
}
.material-dialog-description {
  margin: 0 0 var(--form-section-gap, 14px);
  color: var(--muted-foreground, #6B7078);
  font-size: var(--type-label-size, 13px);
  line-height: var(--type-label-line, 1.4);
  letter-spacing: 0;
}
[data-slot="dialog-footer"] {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
}
@media (max-width: 620px) {
  .material-form-grid {
    grid-template-columns: minmax(0, 1fr);
  }
  .material-form-grid[data-columns] > .material-field,
  .material-form-grid[data-columns] > .material-field--wide,
  .material-form-grid:not([data-columns]) > .material-field,
  .material-form-grid:not([data-columns]) > .material-field--third,
  .material-form-grid:not([data-columns]) > .material-field--wide {
    grid-column: auto;
  }
}
`;

// src/provider.tsx
import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { useEffect, useMemo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
dayjs.locale("zh-cn");
function buildRootCss() {
  const decls = Object.entries(STUDIO_CSS_VARS).map(([k, v]) => `${k}:${v}`).join(";");
  return `:root{color-scheme:light;font-family:${FONT.family};${decls}}html{font-family:${FONT.family};-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}body{background:${COLORS.background};color:${COLORS.ink};font-family:${FONT.family};font-size:${TYPOGRAPHY.body.fontSize};font-weight:${TYPOGRAPHY.body.fontWeight};line-height:${TYPOGRAPHY.body.lineHeight};letter-spacing:0}button,input,textarea,select{font-family:inherit;letter-spacing:0}`;
}
function VijimProvider({
  children,
  theme = vijimTheme,
  withNotifications = true,
  withModals = true
}) {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.getAttribute("data-mantine-color-scheme");
    root.setAttribute("data-mantine-color-scheme", "light");
    return () => {
      if (previous) root.setAttribute("data-mantine-color-scheme", previous);
      else root.removeAttribute("data-mantine-color-scheme");
    };
  }, []);
  const rootCss = useMemo(
    () => theme === vijimTheme ? buildRootCss() : "",
    [theme]
  );
  const tree = /* @__PURE__ */ jsxs(
    DatesProvider,
    {
      settings: { locale: "zh-cn", firstDayOfWeek: 1, consistentWeeks: true },
      children: [
        withNotifications ? /* @__PURE__ */ jsx(Notifications, { position: "top-right", zIndex: 4e3 }) : null,
        children
      ]
    }
  );
  return /* @__PURE__ */ jsxs(MantineProvider, { theme, defaultColorScheme: "light", children: [
    rootCss ? /* @__PURE__ */ jsx(
      "style",
      {
        dangerouslySetInnerHTML: { __html: rootCss }
      }
    ) : null,
    /* @__PURE__ */ jsx(
      "style",
      {
        dangerouslySetInnerHTML: {
          __html: `${VIJIM_RUNTIME_CSS}
${VIJIM_SHELL_RESPONSIVE_CSS}
${VIJIM_MATERIAL_COMPAT_CSS}`
        }
      }
    ),
    withModals ? /* @__PURE__ */ jsx(ModalsProvider, { children: tree }) : tree
  ] });
}

// src/components/Icon.tsx
import {
  IconAlertTriangle,
  IconArchive,
  IconArrowLeft,
  IconArrowRight,
  IconArrowsExchange,
  IconBox,
  IconBoxOff,
  IconBuildingWarehouse,
  IconCalendar,
  IconCategory,
  IconChartBar,
  IconChartBarPopular,
  IconChartLine,
  IconChartPie,
  IconCheck,
  IconChecklist,
  IconChevronDown,
  IconCircle,
  IconClock,
  IconClockHour4,
  IconClipboardText,
  IconDatabase,
  IconExternalLink,
  IconFileText,
  IconFlame,
  IconHome,
  IconInfoCircle,
  IconLayoutGrid,
  IconLayoutKanban,
  IconLayoutSidebar,
  IconLayersSubtract,
  IconListCheck,
  IconListDetails,
  IconMessageCheck,
  IconMoneybag,
  IconNote,
  IconPackage,
  IconPercentage,
  IconPlus,
  IconRefresh,
  IconRocket,
  IconSearch,
  IconSettings,
  IconShieldCheck,
  IconShoppingCartCheck,
  IconSparkles,
  IconStar,
  IconTag,
  IconTargetArrow,
  IconTrash,
  IconUpload,
  IconUsersGroup,
  IconUserStar,
  IconVideo,
  IconWorld,
  IconX
} from "@tabler/icons-react";
import { jsx as jsx2 } from "react/jsx-runtime";
var ICONS = {
  archive: IconArchive,
  arrow: IconArrowRight,
  back: IconArrowLeft,
  board: IconLayoutKanban,
  calendar: IconCalendar,
  cart: IconShoppingCartCheck,
  category: IconCategory,
  chart: IconChartBar,
  "chart-line": IconChartLine,
  "chart-pie": IconChartPie,
  "chart-trend": IconChartBarPopular,
  check: IconCheck,
  checklist: IconChecklist,
  chevron: IconChevronDown,
  clock: IconClock,
  close: IconX,
  clipboard: IconClipboardText,
  cube: IconBox,
  database: IconDatabase,
  doc: IconFileText,
  "external-link": IconExternalLink,
  fail: IconBoxOff,
  feed: IconListDetails,
  flame: IconFlame,
  grid: IconLayoutGrid,
  home: IconHome,
  info: IconInfoCircle,
  layers: IconLayersSubtract,
  "list-check": IconListCheck,
  "message-check": IconMessageCheck,
  money: IconMoneybag,
  note: IconNote,
  panel: IconLayoutSidebar,
  percent: IconPercentage,
  pkg: IconPackage,
  plus: IconPlus,
  refresh: IconRefresh,
  rocket: IconRocket,
  search: IconSearch,
  settings: IconSettings,
  shield: IconShieldCheck,
  star: IconStar,
  sparkle: IconSparkles,
  sync: IconArrowsExchange,
  tag: IconTag,
  target: IconTargetArrow,
  trash: IconTrash,
  upload: IconUpload,
  "user-star": IconUserStar,
  users: IconUsersGroup,
  video: IconVideo,
  waiting: IconClockHour4,
  warehouse: IconBuildingWarehouse,
  world: IconWorld,
  warn: IconAlertTriangle
};
function Icon({
  name,
  size = 18,
  strokeWidth = 1.8,
  className,
  style,
  color
}) {
  const IconComponent = ICONS[name] ?? IconCircle;
  return /* @__PURE__ */ jsx2(
    IconComponent,
    {
      "aria-hidden": "true",
      className,
      color,
      size,
      stroke: strokeWidth,
      style
    }
  );
}

// src/components/ChartPrimitives.ts
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";
var ChartPrimitives = {
  Bar,
  CartesianGrid,
  ComposedChart,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
};

// src/components/Button.tsx
import {
  Button as MantineButton
} from "@mantine/core";
import {
  forwardRef,
  isValidElement
} from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
function mapVariant(v) {
  if (v === "destructive") return "filled";
  if (v === "ghost") return "subtle";
  if (v === "primary") return "filled";
  if (v === "secondary") return "light";
  if (v === "danger") return "filled";
  if (v === "link") return "subtle";
  return v;
}
function mapColor(variant, color) {
  if (variant === "destructive" || variant === "danger") return "red";
  return color;
}
function isDestructiveButton(variant, color) {
  return color === "red" && (variant === "filled" || variant === "light" || variant === "destructive" || variant === "danger");
}
function splitAsChild(children) {
  if (!isValidElement(children)) return null;
  const child = children;
  const { children: childChildren, ...childProps } = child.props;
  return {
    component: child.type,
    childProps,
    childChildren
  };
}
var Button = forwardRef(
  function Button2({
    variant = "filled",
    size = "sm",
    color = "brand",
    asChild = false,
    label,
    icon,
    iconPosition = "start",
    fullWidth,
    children,
    ...props
  }, ref) {
    const child = asChild ? splitAsChild(children) : null;
    const mappedColor = mapColor(variant, color);
    const buttonChildren = label ?? (child ? child.childChildren : children);
    const commonProps = {
      ...props,
      ref,
      variant: mapVariant(variant),
      size,
      color: isDestructiveButton(variant, mappedColor) ? "red" : mappedColor,
      leftSection: icon && iconPosition === "start" ? icon : props.leftSection,
      rightSection: icon && iconPosition === "end" ? icon : props.rightSection,
      fullWidth,
      style: {
        minWidth: fullWidth ? void 0 : "max-content",
        whiteSpace: "nowrap",
        ...props.style
      }
    };
    if (child) {
      const AnyMantineButton = MantineButton;
      return /* @__PURE__ */ jsx3(
        AnyMantineButton,
        {
          component: child.component,
          ...child.childProps,
          ...commonProps,
          "data-slot": "button",
          children: buttonChildren
        }
      );
    }
    return /* @__PURE__ */ jsx3(MantineButton, { ...commonProps, "data-slot": "button", children: buttonChildren });
  }
);
var UnstyledButton = forwardRef(function UnstyledButton2({ type = "button", ...props }, ref) {
  return /* @__PURE__ */ jsx3(
    "button",
    {
      ...props,
      ref,
      type,
      "data-slot": "unstyled-button"
    }
  );
});

// src/components/TextInput.tsx
import {
  TextInput as MantineTextInput
} from "@mantine/core";
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var TextInput = forwardRef2(
  function TextInput2({
    size = "md",
    leftSection,
    rightSection,
    styles,
    ariaLabel,
    onChange,
    onInputChange,
    ...props
  }, ref) {
    const hasLeft = Boolean(leftSection);
    const hasRight = Boolean(rightSection);
    const height = CONTROL_HEIGHT[size];
    const fontSize = size === "xs" || size === "sm" ? FONT.sizes.xs : FONT.sizes.sm;
    return /* @__PURE__ */ jsx4(
      MantineTextInput,
      {
        ref,
        size,
        leftSection,
        rightSection,
        leftSectionPointerEvents: hasLeft ? "none" : void 0,
        styles: (theme, styleProps, ctx) => {
          const base = typeof styles === "function" ? styles(theme, styleProps, ctx) : styles ?? {};
          return {
            ...base,
            input: {
              height,
              minHeight: height,
              fontSize,
              ...typeof base === "object" && base && "input" in base ? base.input : {},
              ...hasLeft ? { paddingInlineStart: SECTION_OFFSET.left } : {},
              ...hasRight ? { paddingInlineEnd: SECTION_OFFSET.right } : {}
            },
            section: {
              ...typeof base === "object" && base && "section" in base ? base.section : {},
              width: SECTION_OFFSET.left
            }
          };
        },
        onChange: (event) => {
          onChange?.(event.currentTarget.value);
          onInputChange?.(event);
        },
        ...props,
        "data-slot": "text-input",
        "aria-label": props["aria-label"] ?? ariaLabel
      }
    );
  }
);

// src/components/Textarea.tsx
import {
  Textarea as MantineTextarea
} from "@mantine/core";
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx5 } from "react/jsx-runtime";
var Textarea = forwardRef3(
  function Textarea2({ size = "sm", ...props }, ref) {
    return /* @__PURE__ */ jsx5(MantineTextarea, { ref, size, ...props, "data-slot": "textarea" });
  }
);

// src/components/SearchInput.tsx
import { IconSearch as IconSearch2, IconX as IconX2 } from "@tabler/icons-react";
import { ActionIcon, Box } from "@mantine/core";
import {
  forwardRef as forwardRef4,
  useState
} from "react";
import { jsx as jsx6, jsxs as jsxs2 } from "react/jsx-runtime";
function eventFromValue(value) {
  const target = { value };
  return {
    currentTarget: target,
    target
  };
}
var SearchInput = forwardRef4(
  function SearchInput2({
    placeholder = "\u641C\u7D22\u2026",
    clearable = true,
    onClear,
    value,
    defaultValue,
    onChange,
    rightSection,
    variant = "filter",
    styles,
    onFocus,
    onKeyDown,
    spellCheck,
    className,
    style,
    ...props
  }, ref) {
    const controlled = value !== void 0;
    const [internalValue, setInternalValue] = useState(defaultValue ?? "");
    const currentValue = controlled ? String(value ?? "") : internalValue;
    const hasValue = currentValue.length > 0;
    const emitChange = (event) => {
      if (!controlled) setInternalValue(event.currentTarget.value);
      onChange?.(event);
    };
    const clear = () => {
      if (!controlled) setInternalValue("");
      onClear?.();
      onChange?.(eventFromValue(""));
    };
    const clearBtn = clearable && hasValue ? /* @__PURE__ */ jsx6(
      ActionIcon,
      {
        variant: "subtle",
        color: "gray",
        size: "sm",
        "aria-label": "\u6E05\u7A7A",
        onClick: clear,
        children: /* @__PURE__ */ jsx6(IconX2, { size: 14, stroke: 1.5 })
      }
    ) : rightSection;
    if (variant === "filter") {
      const {
        disabled,
        name,
        id,
        "aria-label": ariaLabel,
        autoFocus,
        ...inputProps
      } = props;
      return /* @__PURE__ */ jsxs2(
        Box,
        {
          "data-slot": "search-field",
          "data-search-variant": "filter",
          className,
          style: {
            display: "flex",
            alignItems: "center",
            gap: 6,
            height: CONTROL_HEIGHT.sm,
            width: "100%",
            minWidth: 0,
            paddingInline: 8,
            borderBottom: `1px solid ${COLORS.borderStrong}`,
            background: "transparent",
            color: COLORS.faint,
            transition: "border-color 0.15s ease, color 0.15s ease",
            ...style
          },
          onFocusCapture: (e) => {
            e.currentTarget.style.borderBottomColor = COLORS.ink;
            e.currentTarget.style.color = COLORS.ink;
          },
          onBlurCapture: (e) => {
            e.currentTarget.style.borderBottomColor = COLORS.borderStrong;
            e.currentTarget.style.color = COLORS.faint;
          },
          children: [
            /* @__PURE__ */ jsx6(IconSearch2, { size: 15, stroke: 1.5, style: { flex: "none" } }),
            /* @__PURE__ */ jsx6(
              "input",
              {
                ref,
                "data-slot": "search-input",
                "data-search-variant": "filter",
                type: "search",
                placeholder,
                value: currentValue,
                onChange: emitChange,
                onFocus,
                onKeyDown,
                spellCheck,
                disabled,
                name,
                id,
                "aria-label": ariaLabel,
                autoFocus,
                ...inputProps,
                style: {
                  flex: 1,
                  minWidth: 0,
                  height: "100%",
                  border: "none",
                  outline: "none",
                  background: "transparent",
                  fontSize: 13,
                  color: COLORS.ink,
                  fontFamily: "inherit",
                  padding: 0
                }
              }
            ),
            clearBtn
          ]
        }
      );
    }
    return /* @__PURE__ */ jsx6(
      Box,
      {
        "data-slot": "search-field",
        "data-search-variant": "lookup",
        className,
        style: { width: "100%", minWidth: 0, ...style },
        children: /* @__PURE__ */ jsx6(
          TextInput,
          {
            ref,
            "data-slot": "search-input",
            "data-search-variant": "lookup",
            type: "search",
            size: "md",
            placeholder,
            leftSection: /* @__PURE__ */ jsx6(IconSearch2, { size: 16, stroke: 1.5 }),
            rightSection: clearBtn,
            value: currentValue,
            onChange: (next) => emitChange(eventFromValue(next)),
            onFocus,
            onKeyDown,
            spellCheck,
            styles: (theme, styleProps, ctx) => {
              const base = typeof styles === "function" ? styles(theme, styleProps, ctx) : styles ?? {};
              return {
                ...base,
                input: {
                  ...typeof base === "object" && base && "input" in base ? base.input : {},
                  height: CONTROL_HEIGHT.md,
                  minHeight: CONTROL_HEIGHT.md,
                  borderRadius: RADIUS.element,
                  paddingInlineStart: SECTION_OFFSET.left,
                  backgroundColor: COLORS.surfaceMuted,
                  borderColor: "transparent"
                },
                section: { width: SECTION_OFFSET.left, color: COLORS.faint }
              };
            },
            ...props
          }
        )
      }
    );
  }
);

// src/components/FileInput.tsx
import {
  forwardRef as forwardRef5
} from "react";
import { jsx as jsx7 } from "react/jsx-runtime";
var FileInput = forwardRef5(
  function FileInput2(props, ref) {
    return /* @__PURE__ */ jsx7("input", { ...props, ref, type: "file", "data-slot": "file-input" });
  }
);

// src/components/ImageGalleryUpload.tsx
import {
  useRef,
  useState as useState2
} from "react";
import { jsx as jsx8, jsxs as jsxs3 } from "react/jsx-runtime";
var DEFAULT_MAX_SIZE = 6 * 1024 * 1024;
function readFileAsDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result ?? ""));
    reader.onerror = () => reject(new Error("\u56FE\u7247\u8BFB\u53D6\u5931\u8D25"));
    reader.readAsDataURL(file);
  });
}
async function defaultUpload(file) {
  try {
    return { ok: true, url: await readFileAsDataUrl(file) };
  } catch (error) {
    return {
      ok: false,
      message: error instanceof Error ? error.message : "\u4E0A\u4F20\u5931\u8D25"
    };
  }
}
function validateImageFile(file, maxSize) {
  if (!file.type.startsWith("image/")) return `${file.name} \u4E0D\u662F\u56FE\u7247\u6587\u4EF6`;
  if (file.size > maxSize) return `${file.name} \u8D85\u8FC7 ${Math.round(maxSize / 1024 / 1024)}MB`;
  return null;
}
function isFileDrag(event) {
  return Array.from(event.dataTransfer.types).includes("Files");
}
function ImageGalleryUpload({
  values,
  onAdd,
  onRemove,
  onReorder,
  upload = defaultUpload,
  accept = "image/*",
  maxSize = DEFAULT_MAX_SIZE,
  maxItems = Number.POSITIVE_INFINITY,
  multiple = false,
  replaceable = false,
  reorderable = false,
  coverBadge = false,
  removable = true,
  addLabel = "+ \u4E0A\u4F20\u56FE\u7247",
  hint,
  paste = true,
  drop = true,
  aspectRatio = "1 / 1",
  frameless = false,
  disabled = false,
  readOnly = false
}) {
  const fileRef = useRef(null);
  const dragDepthRef = useRef(0);
  const [busy, setBusy] = useState2(false);
  const [error, setError] = useState2(null);
  const [hoverIndex, setHoverIndex] = useState2(null);
  const [draggingIndex, setDraggingIndex] = useState2(null);
  const [dragOverIndex, setDragOverIndex] = useState2(null);
  const [droppingFiles, setDroppingFiles] = useState2(false);
  const canReplace = replaceable && maxItems === 1 && values.length === 1;
  const canAdd = !readOnly && !disabled && !busy && (values.length < maxItems || canReplace);
  const canReorder = reorderable && typeof onReorder === "function" && !readOnly && !disabled;
  const busyOrDisabled = busy || disabled;
  async function uploadFiles(files) {
    if (!canAdd) return;
    const remaining = canReplace ? 1 : Math.max(0, maxItems - values.length);
    const list = (multiple ? files : files.slice(0, 1)).slice(0, remaining);
    if (!list.length) return;
    setError(files.length > remaining ? `\u6700\u591A\u4E0A\u4F20 ${maxItems} \u5F20\u56FE\u7247` : null);
    setBusy(true);
    try {
      for (const file of list) {
        const invalid = validateImageFile(file, maxSize);
        if (invalid) {
          setError(invalid);
          continue;
        }
        const result = await upload(file);
        if (result.ok) onAdd(result.url, file);
        else setError(result.message);
      }
    } catch (uploadError) {
      setError(uploadError instanceof Error ? uploadError.message : "\u4E0A\u4F20\u5931\u8D25");
    } finally {
      setBusy(false);
    }
  }
  function pick(event) {
    const files = Array.from(event.target.files ?? []);
    event.target.value = "";
    if (files.length) void uploadFiles(files);
  }
  function pasteImages(event) {
    if (!paste || !canAdd) return;
    const files = Array.from(event.clipboardData.files).filter((file) => file.type.startsWith("image/"));
    if (!files.length) return;
    event.preventDefault();
    void uploadFiles(files);
  }
  function enterDropZone(event) {
    if (!drop || !canAdd || !isFileDrag(event)) return;
    event.preventDefault();
    dragDepthRef.current += 1;
    setDroppingFiles(true);
  }
  function leaveDropZone(event) {
    if (!drop || !isFileDrag(event)) return;
    event.preventDefault();
    dragDepthRef.current = Math.max(0, dragDepthRef.current - 1);
    if (dragDepthRef.current === 0) setDroppingFiles(false);
  }
  function dropImages(event) {
    if (!drop || !canAdd || !isFileDrag(event)) return;
    event.preventDefault();
    event.stopPropagation();
    dragDepthRef.current = 0;
    setDroppingFiles(false);
    const files = Array.from(event.dataTransfer.files);
    if (files.length) void uploadFiles(files);
  }
  function reorder(fromIndex, toIndex) {
    setDraggingIndex(null);
    setDragOverIndex(null);
    if (!canReorder || busy || fromIndex === null || fromIndex === toIndex) return;
    const next = [...values];
    const [moved] = next.splice(fromIndex, 1);
    if (!moved) return;
    next.splice(toIndex, 0, moved);
    onReorder?.(next);
  }
  const gridStyle = {
    display: "grid",
    gridTemplateColumns: maxItems === 1 ? "minmax(0, 1fr)" : "repeat(auto-fill, minmax(108px, 1fr))",
    gap: 10
  };
  const imageStyle = {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    display: "block"
  };
  if (readOnly) {
    if (!values.length) {
      return /* @__PURE__ */ jsx8("span", { "data-slot": "image-gallery-upload", style: { fontSize: 11.5, color: COLORS.faint }, children: "\u65E0\u56FE" });
    }
    return /* @__PURE__ */ jsx8("div", { "data-slot": "image-gallery-upload", style: gridStyle, children: values.map((url, index) => /* @__PURE__ */ jsx8(
      "a",
      {
        href: url,
        target: "_blank",
        rel: "noreferrer",
        style: {
          position: "relative",
          aspectRatio,
          borderRadius: frameless ? 0 : RADIUS.element,
          overflow: "hidden",
          border: frameless ? "none" : `1px solid ${COLORS.border}`,
          background: COLORS.surfaceMuted
        },
        children: /* @__PURE__ */ jsx8("img", { src: url, alt: `\u56FE\u7247 ${index + 1}`, referrerPolicy: "no-referrer", loading: "lazy", style: imageStyle })
      },
      `${url}-${index}`
    )) });
  }
  return /* @__PURE__ */ jsxs3(
    "div",
    {
      "data-slot": "image-gallery-upload",
      onPaste: pasteImages,
      onDragEnter: enterDropZone,
      onDragOver: (event) => {
        if (!drop || !canAdd || !isFileDrag(event)) return;
        event.preventDefault();
        event.dataTransfer.dropEffect = "copy";
      },
      onDragLeave: leaveDropZone,
      onDrop: dropImages,
      style: {
        position: "relative",
        borderRadius: frameless ? 0 : RADIUS.element,
        outline: droppingFiles ? `2px solid ${COLORS.brand}` : "2px solid transparent",
        outlineOffset: droppingFiles ? 4 : 0,
        background: droppingFiles ? COLORS.brandMuted : "transparent",
        transition: `outline-color ${MOTION.fast}, background-color ${MOTION.fast}`
      },
      children: [
        droppingFiles ? /* @__PURE__ */ jsx8(
          "div",
          {
            "aria-hidden": "true",
            style: {
              position: "absolute",
              inset: 0,
              zIndex: 4,
              display: "grid",
              placeItems: "center",
              borderRadius: RADIUS.element,
              background: "color-mix(in oklab, var(--surface) 88%, transparent)",
              color: COLORS.brand,
              fontSize: 13,
              fontWeight: 650,
              pointerEvents: "none",
              backdropFilter: "blur(3px)"
            },
            children: "\u677E\u5F00\u5373\u53EF\u4E0A\u4F20\u56FE\u7247"
          }
        ) : null,
        error ? /* @__PURE__ */ jsx8("p", { style: { margin: "0 0 10px", fontSize: 11.5, color: COLORS.danger }, children: error }) : hint ? /* @__PURE__ */ jsx8("p", { style: { margin: "0 0 10px", fontSize: 11.5, color: COLORS.faint }, children: hint }) : null,
        /* @__PURE__ */ jsxs3("div", { style: gridStyle, children: [
          values.map((url, index) => /* @__PURE__ */ jsxs3(
            "div",
            {
              draggable: canReorder && !busy,
              onPointerEnter: () => setHoverIndex(index),
              onPointerLeave: () => setHoverIndex((current) => current === index ? null : current),
              onDragStart: (event) => {
                if (!canReorder || busy) return;
                setDraggingIndex(index);
                event.dataTransfer.effectAllowed = "move";
                event.dataTransfer.setData("text/plain", String(index));
              },
              onDragOver: (event) => {
                if (!canReorder || busy || draggingIndex === index) return;
                event.preventDefault();
                event.dataTransfer.dropEffect = "move";
                setDragOverIndex(index);
              },
              onDragLeave: () => setDragOverIndex((current) => current === index ? null : current),
              onDrop: (event) => {
                event.preventDefault();
                const from = draggingIndex != null ? draggingIndex : Number(event.dataTransfer.getData("text/plain"));
                reorder(Number.isFinite(from) ? from : null, index);
              },
              onDragEnd: () => {
                setDraggingIndex(null);
                setDragOverIndex(null);
              },
              style: {
                position: "relative",
                aspectRatio,
                borderRadius: frameless ? 0 : RADIUS.element,
                overflow: "hidden",
                border: frameless ? "none" : `1px solid ${COLORS.border}`,
                background: COLORS.surfaceMuted,
                cursor: canReorder && !busy ? "grab" : canReplace && !busy ? "pointer" : "default",
                outline: dragOverIndex === index ? `2px solid ${COLORS.brand}` : "none",
                outlineOffset: dragOverIndex === index ? -2 : void 0,
                opacity: draggingIndex === index ? 0.55 : 1
              },
              children: [
                /* @__PURE__ */ jsx8("img", { src: url, alt: "", referrerPolicy: "no-referrer", loading: "lazy", style: imageStyle }),
                canReplace ? /* @__PURE__ */ jsx8(
                  "button",
                  {
                    type: "button",
                    onClick: () => canAdd && fileRef.current?.click(),
                    disabled: !canAdd,
                    "aria-label": "\u66F4\u6362\u56FE\u7247",
                    style: {
                      position: "absolute",
                      inset: 0,
                      zIndex: 1,
                      padding: 0,
                      border: "none",
                      background: "transparent",
                      color: "white",
                      cursor: canAdd ? "pointer" : "default",
                      display: "flex",
                      alignItems: "end",
                      justifyContent: "center",
                      font: "inherit"
                    },
                    children: /* @__PURE__ */ jsx8(
                      "span",
                      {
                        style: {
                          marginBottom: 8,
                          padding: "3px 9px",
                          borderRadius: 999,
                          background: "rgba(18, 19, 23, 0.58)",
                          fontSize: 11,
                          fontWeight: 600,
                          opacity: hoverIndex === index ? 1 : 0,
                          transition: `opacity ${MOTION.fast}`,
                          backdropFilter: "blur(3px)"
                        },
                        children: "\u66F4\u6362\u56FE\u7247"
                      }
                    )
                  }
                ) : null,
                coverBadge && index === 0 ? /* @__PURE__ */ jsx8(
                  "span",
                  {
                    style: {
                      position: "absolute",
                      left: 8,
                      top: 8,
                      padding: "1px 8px",
                      borderRadius: 999,
                      fontSize: 10.5,
                      fontWeight: 700,
                      background: "color-mix(in oklab, var(--surface) 86%, transparent)",
                      border: `1px solid ${COLORS.border}`,
                      color: COLORS.brand,
                      backdropFilter: "blur(4px)"
                    },
                    children: "\u5C01\u9762"
                  }
                ) : null,
                (typeof removable === "function" ? removable(url, index) : removable) ? /* @__PURE__ */ jsx8(
                  "button",
                  {
                    type: "button",
                    onClick: () => !busyOrDisabled && onRemove(url),
                    disabled: busyOrDisabled,
                    "aria-label": "\u79FB\u9664",
                    style: {
                      position: "absolute",
                      zIndex: 2,
                      top: 1,
                      right: 1,
                      width: 28,
                      height: 28,
                      padding: 0,
                      border: "none",
                      background: "transparent",
                      color: "white",
                      display: "grid",
                      placeItems: "center",
                      cursor: busyOrDisabled ? "default" : "pointer",
                      opacity: hoverIndex === index ? busyOrDisabled ? 0.4 : 1 : busyOrDisabled ? 0.35 : 0.8,
                      transition: `opacity ${MOTION.fast}`,
                      fontSize: 22,
                      fontWeight: 400,
                      lineHeight: 1,
                      textShadow: "0 1px 8px rgba(0, 0, 0, 0.45)"
                    },
                    children: "\xD7"
                  }
                ) : null
              ]
            },
            `${url}-${index}`
          )),
          values.length < maxItems ? /* @__PURE__ */ jsx8(
            "button",
            {
              type: "button",
              onClick: () => canAdd && fileRef.current?.click(),
              disabled: !canAdd,
              style: {
                aspectRatio,
                border: frameless ? "none" : `1px dashed ${COLORS.borderStrong}`,
                borderRadius: frameless ? 0 : RADIUS.element,
                outline: "none",
                background: COLORS.surfaceMuted,
                color: COLORS.ink2,
                fontSize: 12.5,
                fontWeight: 550,
                padding: "0 6px",
                display: "grid",
                placeItems: "center",
                textAlign: "center",
                cursor: canAdd ? "pointer" : "default",
                opacity: canAdd ? 1 : 0.6,
                transition: `border-color ${MOTION.fast}, color ${MOTION.fast}, box-shadow ${MOTION.fast}`
              },
              children: busy ? "\u4E0A\u4F20\u4E2D\u2026" : addLabel
            }
          ) : null
        ] }),
        /* @__PURE__ */ jsx8("input", { ref: fileRef, type: "file", accept, multiple, hidden: true, onChange: pick, disabled: !canAdd })
      ]
    }
  );
}

// src/components/Select.tsx
import {
  Select as MantineSelect
} from "@mantine/core";
import {
  forwardRef as forwardRef6,
  useMemo as useMemo2
} from "react";
import { jsx as jsx9 } from "react/jsx-runtime";
function heightFor(size, density) {
  if (density === "compact" || size === "sm" || size === "xs") {
    return size === "xs" ? CONTROL_HEIGHT.xs : CONTROL_HEIGHT.sm;
  }
  if (size === "lg") return CONTROL_HEIGHT.lg;
  return CONTROL_HEIGHT.md;
}
function fontFor(size, density) {
  if (density === "compact" || size === "xs" || size === "sm") {
    return FONT.sizes.xs;
  }
  return FONT.sizes.sm;
}
var selectDropdownStyles = {
  dropdown: {
    border: `1px solid ${COLORS.border}`,
    borderRadius: RADIUS.overlay,
    boxShadow: SHADOWS.md,
    padding: 4,
    backgroundColor: COLORS.surface
  },
  option: {
    fontSize: FONT.sizes.sm,
    borderRadius: RADIUS.sm,
    padding: "8px 10px",
    color: COLORS.ink,
    transition: `background-color ${MOTION.fast} ${MOTION.easeOut}, color ${MOTION.fast} ${MOTION.easeOut}`
  }
};
var Select = forwardRef6(
  function Select2({
    size = "md",
    density = "default",
    leftSection,
    rightSection,
    styles,
    comboboxProps,
    clearable = true,
    nothingFoundMessage = "\u65E0\u5339\u914D",
    data,
    options,
    ariaLabel,
    ...props
  }, ref) {
    const hasLeft = Boolean(leftSection);
    const hasRight = Boolean(rightSection);
    const h = heightFor(size, density);
    const fs = fontFor(size, density);
    const padX = density === "compact" || size === "sm" || size === "xs" ? CONTROL_PADDING_X.sm : CONTROL_PADDING_X.md;
    const mergedCombobox = useMemo2(
      () => ({
        withinPortal: true,
        ...comboboxProps
      }),
      [comboboxProps]
    );
    return /* @__PURE__ */ jsx9(
      MantineSelect,
      {
        ref,
        size: size === "lg" ? "md" : size === "xs" ? "xs" : size === "sm" ? "sm" : "md",
        leftSection,
        rightSection,
        clearable,
        nothingFoundMessage,
        comboboxProps: mergedCombobox,
        styles: (theme, styleProps, ctx) => {
          const base = typeof styles === "function" ? styles(theme, styleProps, ctx) : styles ?? {};
          const baseObj = typeof base === "object" && base ? base : {};
          return {
            ...baseObj,
            input: {
              height: h,
              minHeight: h,
              fontSize: fs,
              paddingInline: padX,
              backgroundColor: COLORS.muted,
              borderColor: "transparent",
              borderRadius: RADIUS.element,
              color: COLORS.ink,
              fontFamily: FONT.family,
              transition: `background-color ${MOTION.fast} ${MOTION.easeOut}`,
              ...hasLeft ? { paddingInlineStart: SECTION_OFFSET.left } : {},
              ...hasRight ? { paddingInlineEnd: SECTION_OFFSET.right } : {},
              // hover/focus/expanded → packages/ui styles.css（避免 React 19 把 &: 当 style）
              ...typeof baseObj === "object" && baseObj && "input" in baseObj ? baseObj.input : {}
            },
            section: {
              width: SECTION_OFFSET.left,
              color: COLORS.faint,
              ...typeof baseObj === "object" && baseObj && "section" in baseObj ? baseObj.section : {}
            },
            dropdown: {
              ...selectDropdownStyles.dropdown,
              ...typeof baseObj === "object" && baseObj && "dropdown" in baseObj ? baseObj.dropdown : {}
            },
            option: {
              ...selectDropdownStyles.option,
              fontSize: fs,
              ...typeof baseObj === "object" && baseObj && "option" in baseObj ? baseObj.option : {}
            }
          };
        },
        ...props,
        "data-slot": "select",
        data: data ?? options?.map((option) => ({ ...option })),
        "aria-label": props["aria-label"] ?? ariaLabel
      }
    );
  }
);
function normalizeOptions(options) {
  return options.map(
    (o) => typeof o === "string" ? { value: o, label: o } : o
  );
}
function SearchableSelect({
  name,
  id,
  label,
  value,
  defaultValue,
  options,
  placeholder = "\u5168\u90E8",
  emptyLabel,
  onPick,
  onChange,
  disabled = false,
  clearable = true,
  density = "compact",
  size = "sm",
  searchable = true,
  nothingFoundMessage = "\u65E0\u5339\u914D",
  style,
  className,
  minWidth = 128
}) {
  const data = normalizeOptions(options);
  const controlled = value !== void 0;
  return /* @__PURE__ */ jsx9(
    Select,
    {
      name,
      id,
      "aria-label": label,
      data,
      value: controlled ? value || null : void 0,
      defaultValue: !controlled ? defaultValue != null && defaultValue !== "" ? defaultValue : null : void 0,
      onChange: (v) => {
        onChange?.(v ?? "");
        onPick?.(v ?? "");
      },
      placeholder: emptyLabel || placeholder,
      searchable,
      clearable,
      disabled,
      density,
      size,
      nothingFoundMessage,
      className,
      style: {
        minWidth,
        flex: "0 0 auto",
        ...style
      }
    }
  );
}

// src/components/DatePicker.tsx
import {
  DatePickerInput as MantineDatePickerInput,
  DateInput as MantineDateInput
} from "@mantine/dates";
import { IconCalendar as IconCalendar2 } from "@tabler/icons-react";
import { forwardRef as forwardRef7, useMemo as useMemo3 } from "react";

// src/utils/date.ts
import dayjs2 from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs2.extend(customParseFormat);
var DATE_RE = /^\d{4}-\d{2}-\d{2}$/;
function isDateString(value) {
  return typeof value === "string" && DATE_RE.test(value) && dayjs2(value, "YYYY-MM-DD", true).isValid();
}
function toDateString(value) {
  if (value == null || value === "") return null;
  if (typeof value === "string") {
    if (isDateString(value)) return value;
    const parsed = dayjs2(value);
    return parsed.isValid() ? parsed.format("YYYY-MM-DD") : null;
  }
  if (value instanceof Date) {
    const parsed = dayjs2(value);
    return parsed.isValid() ? parsed.format("YYYY-MM-DD") : null;
  }
  if (dayjs2.isDayjs(value)) {
    return value.isValid() ? value.format("YYYY-MM-DD") : null;
  }
  return null;
}
function fromDateString(value) {
  if (!value || !isDateString(value)) return null;
  return dayjs2(value, "YYYY-MM-DD", true).toDate();
}

// src/components/DatePicker.tsx
import { jsx as jsx10 } from "react/jsx-runtime";
var DatePickerInput = forwardRef7(
  function DatePickerInput2({
    size = "md",
    value,
    defaultValue,
    onChange,
    leftSection,
    styles,
    ...props
  }, ref) {
    const height = CONTROL_HEIGHT[size];
    const fontSize = size === "xs" || size === "sm" ? FONT.sizes.xs : FONT.sizes.sm;
    const dateValue = useMemo3(
      () => value === void 0 ? void 0 : fromDateString(value ?? null),
      [value]
    );
    const defaultDate = useMemo3(
      () => defaultValue === void 0 ? void 0 : fromDateString(defaultValue ?? null),
      [defaultValue]
    );
    return /* @__PURE__ */ jsx10(
      MantineDatePickerInput,
      {
        ref,
        size,
        valueFormat: "YYYY-MM-DD",
        value: dateValue,
        defaultValue: defaultDate,
        leftSection: leftSection ?? /* @__PURE__ */ jsx10(IconCalendar2, { size: 16, stroke: 1.5 }),
        leftSectionPointerEvents: "none",
        onChange: (next) => {
          onChange?.(toDateString(next));
        },
        styles: (theme, styleProps, ctx) => {
          const base = typeof styles === "function" ? styles(theme, styleProps, ctx) : styles ?? {};
          return {
            ...base,
            input: {
              height,
              minHeight: height,
              fontSize,
              ...typeof base === "object" && base && "input" in base ? base.input : {},
              paddingInlineStart: SECTION_OFFSET.left
            },
            section: { width: SECTION_OFFSET.left }
          };
        },
        ...props,
        "data-slot": "date-picker-input"
      }
    );
  }
);
var DateInput = forwardRef7(
  function DateInput2({
    size = "sm",
    value,
    defaultValue,
    onChange,
    leftSection,
    styles,
    ...props
  }, ref) {
    const height = CONTROL_HEIGHT[size];
    const fontSize = size === "xs" || size === "sm" ? FONT.sizes.xs : FONT.sizes.sm;
    const dateValue = useMemo3(
      () => value === void 0 ? void 0 : fromDateString(value ?? null),
      [value]
    );
    const defaultDate = useMemo3(
      () => defaultValue === void 0 ? void 0 : fromDateString(defaultValue ?? null),
      [defaultValue]
    );
    return /* @__PURE__ */ jsx10(
      MantineDateInput,
      {
        ref,
        size,
        valueFormat: "YYYY-MM-DD",
        value: dateValue,
        defaultValue: defaultDate,
        leftSection: leftSection ?? /* @__PURE__ */ jsx10(IconCalendar2, { size: 16, stroke: 1.5 }),
        leftSectionPointerEvents: "none",
        onChange: (next) => {
          onChange?.(toDateString(next));
        },
        styles: (theme, styleProps, ctx) => {
          const base = typeof styles === "function" ? styles(theme, styleProps, ctx) : styles ?? {};
          return {
            ...base,
            input: {
              height,
              minHeight: height,
              fontSize,
              ...typeof base === "object" && base && "input" in base ? base.input : {},
              paddingInlineStart: SECTION_OFFSET.left
            },
            section: { width: SECTION_OFFSET.left }
          };
        },
        ...props,
        "data-slot": "date-input"
      }
    );
  }
);

// src/components/Overlay.tsx
import {
  Modal as MantineModal,
  Drawer as MantineDrawer
} from "@mantine/core";
import { jsx as jsx11 } from "react/jsx-runtime";
function Modal(props) {
  return /* @__PURE__ */ jsx11(MantineModal, { ...props });
}
function Drawer(props) {
  return /* @__PURE__ */ jsx11(MantineDrawer, { ...props });
}

// src/components/Navigation.tsx
import {
  Tabs as MantineTabs,
  SegmentedControl as MantineSegmentedControl,
  Pagination as MantinePagination,
  Menu as MantineMenu,
  Popover as MantinePopover,
  Tooltip as MantineTooltip
} from "@mantine/core";
import {
  useEffect as useEffect2,
  useId,
  useRef as useRef2,
  useState as useState3
} from "react";
import { jsx as jsx12, jsxs as jsxs4 } from "react/jsx-runtime";
function Tabs(props) {
  if ("options" in props) {
    let onKeyDown2 = function(event, index) {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const delta = event.key === "ArrowRight" ? 1 : -1;
      let next = index;
      do {
        next = (next + delta + legacyProps.options.length) % legacyProps.options.length;
      } while (legacyProps.options[next]?.disabled && next !== index);
      refs.current[next]?.focus();
      const option = legacyProps.options[next];
      if (option) legacyProps.onChange(option.value);
    };
    var onKeyDown = onKeyDown2;
    const legacyProps = props;
    const refs = useRef2([]);
    return /* @__PURE__ */ jsx12("div", { className: "vj-tabs", role: "tablist", "aria-label": legacyProps.ariaLabel, children: legacyProps.options.map((option, index) => /* @__PURE__ */ jsx12(
      "button",
      {
        ref: (node) => {
          refs.current[index] = node;
        },
        className: "vj-tab",
        role: "tab",
        "aria-selected": legacyProps.value === option.value,
        tabIndex: legacyProps.value === option.value ? 0 : -1,
        disabled: option.disabled,
        onClick: () => legacyProps.onChange(option.value),
        onKeyDown: (event) => onKeyDown2(event, index),
        children: option.label
      },
      option.value
    )) });
  }
  return /* @__PURE__ */ jsx12(MantineTabs, { ...props });
}
Tabs.List = MantineTabs.List;
Tabs.Tab = MantineTabs.Tab;
Tabs.Panel = MantineTabs.Panel;
function SegmentedControl(props) {
  if ("options" in props) {
    return /* @__PURE__ */ jsx12("div", { className: "vj-segmented", role: "radiogroup", "aria-label": props.ariaLabel, children: props.options.map((option) => /* @__PURE__ */ jsx12(
      "button",
      {
        className: "vj-segmented__item",
        role: "radio",
        "aria-checked": props.value === option.value,
        disabled: option.disabled,
        onClick: () => props.onChange(option.value),
        children: option.label
      },
      option.value
    )) });
  }
  return /* @__PURE__ */ jsx12(MantineSegmentedControl, { size: props.size ?? "sm", ...props });
}
function Pagination(props) {
  if ("page" in props) {
    const total = Math.max(1, props.pageCount);
    const current = Math.min(total, Math.max(1, props.page));
    const start = Math.max(1, Math.min(current - 2, total - 4));
    const pages = Array.from({ length: Math.min(5, total) }, (_, index) => start + index);
    return /* @__PURE__ */ jsxs4("nav", { className: "vj-pagination", "aria-label": props.ariaLabel ?? "\u5206\u9875", children: [
      /* @__PURE__ */ jsx12(
        "button",
        {
          type: "button",
          disabled: current <= 1,
          onClick: () => props.onChange(current - 1),
          children: "\u4E0A\u4E00\u9875"
        }
      ),
      pages.map((item) => /* @__PURE__ */ jsx12(
        "button",
        {
          type: "button",
          "aria-current": item === current ? "page" : void 0,
          onClick: () => props.onChange(item),
          children: item
        },
        item
      )),
      /* @__PURE__ */ jsx12(
        "button",
        {
          type: "button",
          disabled: current >= total,
          onClick: () => props.onChange(current + 1),
          children: "\u4E0B\u4E00\u9875"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsx12(MantinePagination, { size: props.size ?? "sm", ...props });
}
function Menu(props) {
  return /* @__PURE__ */ jsx12(MantineMenu, { ...props });
}
Menu.Target = MantineMenu.Target;
Menu.Dropdown = MantineMenu.Dropdown;
Menu.Item = MantineMenu.Item;
Menu.Label = MantineMenu.Label;
Menu.Divider = MantineMenu.Divider;
function Popover(props) {
  if ("trigger" in props) {
    const [internalOpen, setInternalOpen] = useState3(false);
    const controlled = props.open !== void 0;
    const visible = controlled ? props.open : internalOpen;
    const rootRef = useRef2(null);
    const contentId = useId();
    const setVisible = (next) => {
      if (!controlled) setInternalOpen(next);
      props.onOpenChange?.(next);
    };
    useEffect2(() => {
      if (!visible) return;
      const onPointerDown = (event) => {
        if (!rootRef.current?.contains(event.target)) setVisible(false);
      };
      const onKeyDown = (event) => {
        if (event.key === "Escape") setVisible(false);
      };
      document.addEventListener("mousedown", onPointerDown);
      document.addEventListener("keydown", onKeyDown);
      return () => {
        document.removeEventListener("mousedown", onPointerDown);
        document.removeEventListener("keydown", onKeyDown);
      };
    }, [visible]);
    return /* @__PURE__ */ jsxs4("div", { className: "vj-popover", ref: rootRef, children: [
      /* @__PURE__ */ jsx12(
        "button",
        {
          className: "vj-popover__trigger",
          type: "button",
          "aria-label": props.triggerLabel,
          "aria-expanded": visible,
          "aria-controls": contentId,
          onClick: () => setVisible(!visible),
          children: props.trigger
        }
      ),
      visible ? /* @__PURE__ */ jsx12(
        "div",
        {
          className: "vj-popover__content",
          "data-placement": props.placement,
          id: contentId,
          "data-vj-popover-content": true,
          tabIndex: -1,
          children: props.children
        }
      ) : null
    ] });
  }
  return /* @__PURE__ */ jsx12(MantinePopover, { ...props });
}
Popover.Target = MantinePopover.Target;
Popover.Dropdown = MantinePopover.Dropdown;
function Tooltip2(props) {
  if ("trigger" in props) {
    const id = useId();
    return /* @__PURE__ */ jsxs4("span", { className: "vj-tooltip", children: [
      /* @__PURE__ */ jsx12("button", { type: "button", "aria-label": props.triggerLabel, "aria-describedby": id, children: props.trigger }),
      /* @__PURE__ */ jsx12(
        "span",
        {
          className: "vj-tooltip__content",
          "data-placement": props.placement,
          role: "tooltip",
          id,
          children: props.content
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsx12(MantineTooltip, { ...props });
}

// src/components/DataTable.tsx
import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable
} from "@tanstack/react-table";
import { Checkbox, Group as Group3, Text as Text4 } from "@mantine/core";
import { useMemo as useMemo5, useState as useState6 } from "react";

// src/components/Table.tsx
import {
  Table as MantineTable
} from "@mantine/core";
import { jsx as jsx13 } from "react/jsx-runtime";
function Table(props) {
  return /* @__PURE__ */ jsx13(MantineTable, { ...props });
}
Table.Thead = MantineTable.Thead;
Table.Tbody = MantineTable.Tbody;
Table.Tfoot = MantineTable.Tfoot;
Table.Tr = MantineTable.Tr;
Table.Th = MantineTable.Th;
Table.Td = MantineTable.Td;
Table.Caption = MantineTable.Caption;
Table.ScrollContainer = MantineTable.ScrollContainer;

// src/components/Feedback.tsx
import {
  Center,
  Loader,
  Skeleton as MantineSkeleton,
  Stack,
  Text
} from "@mantine/core";
import { jsx as jsx14, jsxs as jsxs5 } from "react/jsx-runtime";
function Empty({
  title = "\u6682\u65E0\u5185\u5BB9",
  description,
  action,
  icon,
  scope = "section"
}) {
  const inline = scope === "inline";
  return /* @__PURE__ */ jsx14(
    Center,
    {
      "data-scope": scope,
      mih: scope === "page" ? 420 : inline ? 72 : 120,
      py: scope === "page" ? 64 : inline ? 12 : 32,
      px: inline ? FORM_LAYOUT.sectionInline : "md",
      style: inline ? { justifyContent: "flex-start" } : void 0,
      children: /* @__PURE__ */ jsxs5(Stack, { align: inline ? "flex-start" : "center", gap: inline ? 2 : "sm", maw: 360, children: [
        icon,
        /* @__PURE__ */ jsx14(Text, { fw: 600, size: "sm", c: COLORS.ink, children: title }),
        description ? /* @__PURE__ */ jsx14(Text, { size: inline ? "xs" : "sm", c: "dimmed", ta: inline ? "left" : "center", children: description }) : null,
        action
      ] })
    }
  );
}
function Skeleton({ variant, lines, ...props }) {
  if (variant) {
    return /* @__PURE__ */ jsx14("div", { className: "vj-skeleton", "data-variant": variant, "aria-hidden": "true", children: Array.from(
      { length: variant === "text" ? lines ?? 1 : 1 },
      (_, index) => /* @__PURE__ */ jsx14("span", {}, index)
    ) });
  }
  return /* @__PURE__ */ jsx14(MantineSkeleton, { ...props });
}
function Spinner({ label, size = "sm" }) {
  return /* @__PURE__ */ jsx14(Center, { py: "xl", children: /* @__PURE__ */ jsxs5(Stack, { align: "center", gap: "sm", children: [
    /* @__PURE__ */ jsx14(Loader, { size, color: "brand", type: "dots" }),
    label ? /* @__PURE__ */ jsx14(Text, { size: "sm", c: "dimmed", children: label }) : null
  ] }) });
}

// src/components/Shell.tsx
import {
  Box as Box2,
  Group,
  Stack as Stack2,
  Text as Text2,
  UnstyledButton as UnstyledButton3
} from "@mantine/core";
import { useEffect as useEffect3, useId as useId2, useRef as useRef3, useState as useState4 } from "react";
import { Fragment, jsx as jsx15, jsxs as jsxs6 } from "react/jsx-runtime";
var SHELL_GEOMETRY = {
  headerH: 60,
  brandH: 76,
  navbarW: 246,
  contentPadX: 22,
  contentPadY: 20,
  sideItemRadius: 8,
  sideItemMinH: 36
};
function TopBar({
  title,
  titleComponent = "h1",
  context,
  badge,
  center,
  actions,
  backHref,
  backLabel = "\u8FD4\u56DE",
  sticky = true,
  onBack,
  leading
}) {
  return /* @__PURE__ */ jsxs6(
    Box2,
    {
      component: "header",
      className: "vj-platform-shell__topbar",
      style: {
        boxSizing: "border-box",
        position: sticky ? "sticky" : "relative",
        top: sticky ? 0 : void 0,
        zIndex: sticky ? 30 : void 0
      },
      children: [
        leading,
        backHref != null || onBack ? /* @__PURE__ */ jsxs6(Fragment, { children: [
          /* @__PURE__ */ jsxs6(
            UnstyledButton3,
            {
              component: backHref ? "a" : "button",
              href: backHref,
              onClick: onBack,
              style: {
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                height: 32,
                paddingInline: 10,
                borderRadius: RADIUS.element,
                color: COLORS.mutedFg,
                fontSize: 13,
                fontWeight: 500,
                fontFamily: FONT.family,
                textDecoration: "none"
              },
              children: [
                /* @__PURE__ */ jsx15(Icon, { name: "back", size: 14, "aria-hidden": true }),
                backLabel
              ]
            }
          ),
          /* @__PURE__ */ jsx15(
            Box2,
            {
              "aria-hidden": true,
              style: {
                width: 1,
                height: 24,
                background: COLORS.border,
                flex: "none"
              }
            }
          )
        ] }) : null,
        /* @__PURE__ */ jsxs6(Group, { gap: 8, align: "center", className: "vj-platform-shell__topbar-title", wrap: "nowrap", children: [
          /* @__PURE__ */ jsx15(
            Text2,
            {
              component: titleComponent,
              style: {
                margin: 0,
                flex: "none",
                color: COLORS.inkSecondary,
                fontSize: 14,
                fontWeight: 580,
                lineHeight: 1.2,
                fontFamily: FONT.family
              },
              children: title
            }
          ),
          badge,
          context != null ? /* @__PURE__ */ jsxs6(Fragment, { children: [
            /* @__PURE__ */ jsx15(
              Text2,
              {
                c: "dimmed",
                size: "xs",
                className: "vj-platform-shell__topbar-context-separator",
                style: { flex: "none" },
                children: "\xB7"
              }
            ),
            /* @__PURE__ */ jsx15(
              Text2,
              {
                size: "xs",
                c: "dimmed",
                className: "vj-platform-shell__topbar-context",
                children: context
              }
            )
          ] }) : null
        ] }),
        center != null ? /* @__PURE__ */ jsx15("div", { className: "vj-platform-shell__topbar-center", children: center }) : null,
        actions != null ? /* @__PURE__ */ jsx15(Group, { gap: 8, align: "center", className: "vj-platform-shell__topbar-actions", children: actions }) : null
      ]
    }
  );
}
function normalizeSections(navigation, navItems) {
  if (navigation && navigation.length > 0) return [...navigation];
  if (!navItems || navItems.length === 0) return [];
  const sections = [];
  let current = { items: [] };
  for (const item of navItems) {
    if (item.section) {
      if (current.items.length > 0 || current.label) sections.push(current);
      current = { label: item.section, items: [] };
      continue;
    }
    current = {
      ...current,
      items: [...current.items, item]
    };
  }
  if (current.items.length > 0 || current.label) sections.push(current);
  return sections;
}
function NavTree({
  sections,
  onNavigate
}) {
  return /* @__PURE__ */ jsx15("div", { className: "vj-platform-shell__nav", children: sections.map((section, index) => /* @__PURE__ */ jsxs6("div", { className: "vj-platform-shell__section", children: [
    section.label ? /* @__PURE__ */ jsx15("div", { className: "vj-platform-shell__section-label", children: section.label }) : null,
    section.items.map((item) => {
      const key = item.key ?? item.id ?? item.label;
      const active = Boolean(item.active);
      const disabled = Boolean(item.disabled);
      const handle = (event) => {
        if (disabled) {
          event.preventDefault();
          return;
        }
        item.onClick?.();
        item.onSelect?.();
        onNavigate?.();
      };
      const content = /* @__PURE__ */ jsxs6(Fragment, { children: [
        item.icon ? /* @__PURE__ */ jsx15("span", { className: "vj-platform-shell__item-icon", children: item.icon }) : null,
        /* @__PURE__ */ jsx15("span", { className: "vj-platform-shell__item-label", children: item.label }),
        item.meta ? /* @__PURE__ */ jsx15("span", { className: "vj-platform-shell__item-meta", children: item.meta }) : null
      ] });
      if (item.href && !disabled) {
        return /* @__PURE__ */ jsx15(
          "a",
          {
            href: item.href,
            className: "vj-platform-shell__item",
            "data-active": active ? "true" : "false",
            "aria-current": active ? "page" : void 0,
            onClick: handle,
            children: content
          },
          key
        );
      }
      return /* @__PURE__ */ jsx15(
        "button",
        {
          type: "button",
          className: "vj-platform-shell__item",
          "data-active": active ? "true" : "false",
          "aria-current": active ? "page" : void 0,
          disabled,
          onClick: handle,
          children: content
        },
        key
      );
    })
  ] }, section.label ?? `section-${index}`)) });
}
function AppShell({
  product,
  brand = product ? `VIJIM ${product}` : "VIJIM",
  brandHint,
  navigation,
  navItems = [],
  user,
  footer,
  header,
  headerTitle,
  headerTitleComponent,
  headerContext,
  headerBadge,
  headerBackHref,
  headerBackLabel,
  headerRight,
  headerCenter,
  headerActions,
  children,
  contentPadding = true,
  withHeader = true,
  className,
  contentClassName,
  contentSurface = "background",
  viewport = "page"
}) {
  const sections = normalizeSections(navigation, navItems);
  const [mobileOpen, setMobileOpen] = useState4(false);
  const closeRef = useRef3(null);
  const panelRef = useRef3(null);
  const drawerTitleId = useId2();
  const foot = footer ?? user;
  useEffect3(() => {
    const desktopQuery = window.matchMedia("(min-width: 901px)");
    const closeAtDesktop = (event) => {
      if (event.matches) setMobileOpen(false);
    };
    closeAtDesktop(desktopQuery);
    desktopQuery.addEventListener("change", closeAtDesktop);
    return () => desktopQuery.removeEventListener("change", closeAtDesktop);
  }, []);
  useEffect3(() => {
    if (!mobileOpen) return;
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const frame = window.requestAnimationFrame(() => closeRef.current?.focus());
    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMobileOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(
        panelRef.current.querySelectorAll(
          'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.getClientRects().length > 0);
      const first = focusable[0];
      const last = focusable.at(-1);
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKeyDown);
      previous?.focus();
    };
  }, [mobileOpen]);
  const brandNode = typeof brand === "string" ? /* @__PURE__ */ jsxs6(Stack2, { gap: 2, children: [
    /* @__PURE__ */ jsx15(Text2, { fw: 650, size: "sm", c: COLORS.ink, style: { letterSpacing: 0 }, children: brand }),
    brandHint ? /* @__PURE__ */ jsx15(Text2, { size: "xs", c: "dimmed", lineClamp: 1, children: brandHint }) : null
  ] }) : brand;
  const topbar = header ?? (withHeader && (headerTitle || headerCenter || headerRight || headerActions) ? /* @__PURE__ */ jsx15(
    TopBar,
    {
      title: headerTitle ?? (typeof brand === "string" ? brand : product ?? "VIJIM"),
      titleComponent: headerTitleComponent,
      context: headerContext,
      center: headerCenter,
      badge: headerBadge,
      actions: headerActions ?? headerRight,
      backHref: headerBackHref,
      backLabel: headerBackLabel,
      leading: /* @__PURE__ */ jsx15(
        "button",
        {
          type: "button",
          className: "vj-platform-shell__menu-button",
          "aria-label": "\u6253\u5F00\u5BFC\u822A",
          "aria-expanded": mobileOpen,
          onClick: () => setMobileOpen(true),
          children: /* @__PURE__ */ jsx15(Icon, { name: "panel", size: 18 })
        }
      )
    }
  ) : withHeader ? /* @__PURE__ */ jsxs6("div", { className: "vj-platform-shell__topbar", children: [
    /* @__PURE__ */ jsx15(
      "button",
      {
        type: "button",
        className: "vj-platform-shell__menu-button",
        "aria-label": "\u6253\u5F00\u5BFC\u822A",
        "aria-expanded": mobileOpen,
        onClick: () => setMobileOpen(true),
        children: /* @__PURE__ */ jsx15(Icon, { name: "panel", size: 18 })
      }
    ),
    /* @__PURE__ */ jsx15("div", { className: "vj-platform-shell__topbar-title", children: /* @__PURE__ */ jsx15("strong", { children: typeof brand === "string" ? brand : product ?? "VIJIM" }) }),
    headerActions ?? headerRight
  ] }) : null);
  return /* @__PURE__ */ jsxs6(
    "div",
    {
      className: ["vj-platform-shell", className].filter(Boolean).join(" "),
      "data-product": product,
      "data-viewport": viewport,
      children: [
        /* @__PURE__ */ jsxs6("aside", { className: "vj-platform-shell__sidebar", "aria-label": `${product ?? "VIJIM"} \u4E3B\u5BFC\u822A`, children: [
          /* @__PURE__ */ jsx15("div", { className: "vj-platform-shell__brand", children: brandNode }),
          /* @__PURE__ */ jsx15(NavTree, { sections }),
          foot ? /* @__PURE__ */ jsx15("div", { className: "vj-platform-shell__footer", children: foot }) : null
        ] }),
        /* @__PURE__ */ jsxs6("div", { className: "vj-platform-shell__drawer", "data-open": mobileOpen ? "true" : "false", children: [
          /* @__PURE__ */ jsx15(
            "button",
            {
              type: "button",
              className: "vj-platform-shell__drawer-backdrop",
              "aria-label": "\u5173\u95ED\u5BFC\u822A",
              tabIndex: -1,
              onClick: () => setMobileOpen(false)
            }
          ),
          /* @__PURE__ */ jsxs6(
            "aside",
            {
              ref: panelRef,
              className: "vj-platform-shell__drawer-panel",
              "aria-label": "\u79FB\u52A8\u7AEF\u4E3B\u5BFC\u822A",
              "aria-modal": "true",
              role: "dialog",
              "aria-labelledby": drawerTitleId,
              children: [
                /* @__PURE__ */ jsxs6("div", { className: "vj-platform-shell__brand", id: drawerTitleId, children: [
                  brandNode,
                  /* @__PURE__ */ jsx15(
                    "button",
                    {
                      ref: closeRef,
                      type: "button",
                      className: "vj-platform-shell__menu-button",
                      "aria-label": "\u5173\u95ED\u5BFC\u822A",
                      onClick: () => setMobileOpen(false),
                      style: { display: "grid" },
                      children: /* @__PURE__ */ jsx15(Icon, { name: "close", size: 18 })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsx15(NavTree, { sections, onNavigate: () => setMobileOpen(false) }),
                foot ? /* @__PURE__ */ jsx15("div", { className: "vj-platform-shell__footer", children: foot }) : null
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxs6(
          "div",
          {
            className: "vj-platform-shell__main",
            "aria-hidden": mobileOpen ? true : void 0,
            ...mobileOpen ? { inert: true } : {},
            children: [
              topbar,
              contentPadding ? /* @__PURE__ */ jsx15(
                "div",
                {
                  className: ["vj-platform-shell__content", contentClassName].filter(Boolean).join(" "),
                  "data-surface": contentSurface,
                  style: { background: contentSurface === "surface" ? COLORS.surface : COLORS.background },
                  children
                }
              ) : children
            ]
          }
        )
      ]
    }
  );
}
function PageShell({
  title,
  description,
  context,
  badge,
  actions,
  backHref,
  backLabel,
  children,
  maxWidth
}) {
  return /* @__PURE__ */ jsxs6(Box2, { style: { minHeight: "100%", display: "flex", flexDirection: "column" }, children: [
    /* @__PURE__ */ jsx15(
      TopBar,
      {
        title,
        context: context ?? description,
        badge,
        actions,
        backHref,
        backLabel
      }
    ),
    /* @__PURE__ */ jsx15(
      Box2,
      {
        className: "vj-platform-shell__content",
        style: {
          maxWidth: maxWidth ?? void 0
        },
        children: /* @__PURE__ */ jsx15(Stack2, { gap: "md", children })
      }
    )
  ] });
}
function ShellTabs({ items }) {
  return /* @__PURE__ */ jsx15(Group, { gap: 2, align: "stretch", h: SHELL_GEOMETRY.headerH, wrap: "nowrap", children: items.map((item) => /* @__PURE__ */ jsx15(
    Box2,
    {
      component: item.href ? "a" : "button",
      href: item.href,
      onClick: item.onClick,
      style: {
        display: "inline-flex",
        alignItems: "center",
        height: "100%",
        paddingInline: 14,
        border: "none",
        background: "transparent",
        cursor: "pointer",
        fontFamily: FONT.family,
        fontSize: 13,
        fontWeight: item.active ? 600 : 500,
        color: item.active ? COLORS.ink : COLORS.mutedFg,
        textDecoration: "none",
        boxShadow: item.active ? `inset 0 -2px 0 ${COLORS.brand}` : "inset 0 -2px 0 transparent",
        transition: "color 0.12s ease, box-shadow 0.12s ease"
      },
      children: item.label
    },
    item.key
  )) });
}

// src/components/AdminCompat.tsx
import {
  Card as MantineCard,
  Group as Group2,
  SimpleGrid,
  Stack as MantineStack
} from "@mantine/core";
import {
  cloneElement,
  forwardRef as forwardRef8,
  isValidElement as isValidElement2,
  useEffect as useEffect4,
  useId as useId3,
  useRef as useRef4,
  useState as useState5
} from "react";
import { Fragment as Fragment2, jsx as jsx16, jsxs as jsxs7 } from "react/jsx-runtime";
function normalizeTone(tone = "neutral") {
  if (tone === "accent") return "info";
  if (tone === "danger") return "error";
  return tone;
}
var PAD = { sm: 12, md: 16, lg: 24 };
function Card({
  children,
  padding = "md",
  bodyPadding,
  header,
  footer,
  scrollBody = false,
  surface = "default",
  style,
  withBorder,
  ...props
}) {
  const workflowNodeStyle = surface === "workflow-node" ? {
    overflow: "hidden",
    border: "1px solid var(--workflow-node-card-border)",
    borderRadius: "var(--radius-element)",
    background: "linear-gradient(180deg, var(--surface) 0%, var(--surface) 58%, var(--workflow-node-card-tint) 100%)",
    boxShadow: "none"
  } : void 0;
  if (header == null && footer == null && bodyPadding == null && !scrollBody) {
    return /* @__PURE__ */ jsx16(
      MantineCard,
      {
        padding,
        withBorder: surface === "workflow-node" ? true : withBorder,
        "data-surface": surface === "default" ? void 0 : surface,
        ...props,
        style: { ...workflowNodeStyle, ...style },
        children
      }
    );
  }
  const outerPad = typeof padding === "string" && padding in PAD ? PAD[padding] : typeof padding === "number" ? padding : PAD.md;
  const innerPad = bodyPadding === "none" ? 0 : bodyPadding && bodyPadding in PAD ? PAD[bodyPadding] : outerPad;
  return /* @__PURE__ */ jsxs7(
    MantineCard,
    {
      padding: 0,
      radius: "md",
      withBorder: surface === "workflow-node" ? true : withBorder ?? true,
      "data-surface": surface === "default" ? void 0 : surface,
      ...props,
      style: {
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: scrollBody ? "100%" : void 0,
        ...workflowNodeStyle,
        ...style
      },
      children: [
        header != null ? /* @__PURE__ */ jsx16("div", { className: "vj-card__header", style: { padding: outerPad }, children: typeof header === "string" ? /* @__PURE__ */ jsx16("div", { className: "vj-card__title", children: header }) : header }) : null,
        /* @__PURE__ */ jsx16(
          "div",
          {
            className: "vj-card__body",
            style: {
              padding: innerPad,
              flex: scrollBody ? 1 : void 0,
              minHeight: 0,
              overflow: scrollBody ? "auto" : void 0
            },
            children
          }
        ),
        footer != null ? /* @__PURE__ */ jsx16("div", { className: "vj-card__footer", style: { padding: outerPad }, children: footer }) : null
      ]
    }
  );
}
function Badge({ label, children, tone = "neutral", className, ...props }) {
  return /* @__PURE__ */ jsx16(
    "span",
    {
      className: ["vj-badge", className].filter(Boolean).join(" "),
      "data-tone": normalizeTone(tone),
      ...props,
      children: label ?? children
    }
  );
}
function StatusDot({ label, tone = "neutral" }) {
  return /* @__PURE__ */ jsx16("span", { className: "vj-status-dot", "data-tone": normalizeTone(tone), children: label });
}
function TrendBadge({
  direction,
  value,
  positiveDirection = "up"
}) {
  const tone = direction === "flat" ? "neutral" : direction === positiveDirection ? "success" : "error";
  const marker = direction === "up" ? "\u2191" : direction === "down" ? "\u2193" : "\u2014";
  return /* @__PURE__ */ jsxs7(Badge, { tone, children: [
    /* @__PURE__ */ jsx16("span", { "aria-hidden": true, children: marker }),
    value,
    /* @__PURE__ */ jsxs7("span", { className: "vj-visually-hidden", children: [
      "\uFF0C\u8D8B\u52BF",
      direction === "up" ? "\u4E0A\u5347" : direction === "down" ? "\u4E0B\u964D" : "\u6301\u5E73"
    ] })
  ] });
}
function FormField({
  label,
  children,
  description,
  error,
  required = false
}) {
  const generated = useId3();
  const inputId = children.props.id ?? `${generated}-control`;
  const messageId = `${generated}-message`;
  const controlProps = {
    id: inputId,
    required,
    "aria-invalid": Boolean(error)
  };
  if (description || error) controlProps["aria-describedby"] = messageId;
  const control = isValidElement2(children) ? cloneElement(children, controlProps) : children;
  return /* @__PURE__ */ jsxs7("div", { className: "vj-field", children: [
    /* @__PURE__ */ jsxs7("label", { className: "vj-field__label", htmlFor: inputId, children: [
      label,
      required ? /* @__PURE__ */ jsxs7("span", { className: "vj-field__required", "aria-hidden": true, children: [
        " ",
        "*"
      ] }) : null
    ] }),
    control,
    error || description ? /* @__PURE__ */ jsx16(
      "p",
      {
        className: "vj-field__message",
        "data-error": Boolean(error) || void 0,
        id: messageId,
        children: error ?? description
      }
    ) : null
  ] });
}
function TextArea({
  value,
  defaultValue,
  onChange,
  placeholder,
  rows = 5,
  disabled,
  name,
  id,
  ariaLabel,
  required,
  "aria-describedby": describedBy,
  "aria-invalid": invalid
}) {
  return /* @__PURE__ */ jsx16(
    "textarea",
    {
      className: "vj-textarea",
      "data-rows": rows,
      value,
      defaultValue,
      onChange: (event) => onChange?.(event.currentTarget.value),
      placeholder,
      disabled,
      name,
      id,
      "aria-label": ariaLabel,
      required,
      "aria-describedby": describedBy,
      "aria-invalid": invalid,
      rows: typeof rows === "number" ? rows : void 0
    }
  );
}
function NumberInput({
  value,
  onChange,
  min,
  max,
  step,
  placeholder,
  disabled,
  name,
  id,
  ariaLabel,
  required,
  "aria-describedby": describedBy,
  "aria-invalid": invalid
}) {
  return /* @__PURE__ */ jsx16(
    "input",
    {
      className: "vj-input",
      type: "number",
      value: value ?? "",
      onChange: (event) => onChange?.(
        event.currentTarget.value === "" ? null : event.currentTarget.valueAsNumber
      ),
      min,
      max,
      step,
      placeholder,
      disabled,
      name,
      id,
      "aria-label": ariaLabel,
      required,
      "aria-describedby": describedBy,
      "aria-invalid": invalid
    }
  );
}
function List({
  children,
  density = "comfortable",
  dividers = false,
  ariaLabel
}) {
  return /* @__PURE__ */ jsx16(
    "div",
    {
      className: "vj-list",
      "data-density": density,
      "data-dividers": dividers || void 0,
      role: "list",
      "aria-label": ariaLabel,
      children
    }
  );
}
function ListItem({
  label,
  description,
  startContent,
  endContent,
  onClick,
  disabled
}) {
  const content = /* @__PURE__ */ jsxs7(Fragment2, { children: [
    startContent ? /* @__PURE__ */ jsx16("span", { className: "vj-list-item__side", children: startContent }) : null,
    /* @__PURE__ */ jsxs7("span", { className: "vj-list-item__body", children: [
      /* @__PURE__ */ jsx16("span", { className: "vj-list-item__label", children: label }),
      description ? /* @__PURE__ */ jsx16("span", { className: "vj-list-item__desc", children: description }) : null
    ] }),
    endContent ? /* @__PURE__ */ jsx16("span", { className: "vj-list-item__side", children: endContent }) : null
  ] });
  return onClick ? /* @__PURE__ */ jsx16(
    "button",
    {
      className: "vj-list-item",
      role: "listitem",
      type: "button",
      disabled,
      onClick,
      children: content
    }
  ) : /* @__PURE__ */ jsx16("div", { className: "vj-list-item", role: "listitem", children: content });
}
function LegacyDataTable({
  columns,
  data,
  rowKey,
  ariaLabel,
  density = "default",
  emptyLabel = "\u6682\u65E0\u6570\u636E"
}) {
  return /* @__PURE__ */ jsx16("div", { className: "vj-table-wrap", children: /* @__PURE__ */ jsxs7("table", { className: "vj-table", "data-density": density, children: [
    /* @__PURE__ */ jsx16("caption", { children: ariaLabel }),
    /* @__PURE__ */ jsx16("thead", { children: /* @__PURE__ */ jsx16("tr", { children: columns.map((column) => /* @__PURE__ */ jsx16("th", { scope: "col", "data-align": column.align, children: column.header }, column.key)) }) }),
    /* @__PURE__ */ jsx16("tbody", { children: data.length === 0 ? /* @__PURE__ */ jsx16("tr", { children: /* @__PURE__ */ jsx16("td", { className: "vj-table__empty", colSpan: columns.length, children: emptyLabel }) }) : data.map((row) => /* @__PURE__ */ jsx16("tr", { children: columns.map((column) => /* @__PURE__ */ jsx16("td", { "data-align": column.align, children: column.render ? column.render(row) : String(row[column.key] ?? "\u2014") }, column.key)) }, String(row[rowKey]))) })
  ] }) });
}
function Dialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer
}) {
  const ref = useRef4(null);
  useEffect4(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);
  return /* @__PURE__ */ jsxs7(
    "dialog",
    {
      ref,
      className: "vj-dialog",
      onCancel: (event) => {
        event.preventDefault();
        onOpenChange(false);
      },
      onClose: () => onOpenChange(false),
      "aria-labelledby": "vj-dialog-title",
      "aria-describedby": description ? "vj-dialog-description" : void 0,
      children: [
        /* @__PURE__ */ jsxs7("header", { className: "vj-dialog__header", children: [
          /* @__PURE__ */ jsx16("h2", { className: "vj-dialog__title", id: "vj-dialog-title", children: title }),
          description ? /* @__PURE__ */ jsx16("p", { className: "vj-dialog__description", id: "vj-dialog-description", children: description }) : null
        ] }),
        /* @__PURE__ */ jsx16("div", { className: "vj-dialog__body", children }),
        /* @__PURE__ */ jsx16("footer", { className: "vj-dialog__footer", children: footer ?? /* @__PURE__ */ jsx16(Button, { variant: "secondary", label: "\u5173\u95ED", onClick: () => onOpenChange(false) }) })
      ]
    }
  );
}
function AlertDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel,
  cancelLabel = "\u53D6\u6D88",
  onConfirm,
  loading = false
}) {
  return /* @__PURE__ */ jsx16(
    Dialog,
    {
      open,
      onOpenChange,
      title,
      description,
      footer: /* @__PURE__ */ jsxs7(Fragment2, { children: [
        /* @__PURE__ */ jsx16(
          Button,
          {
            variant: "secondary",
            label: cancelLabel,
            onClick: () => onOpenChange(false)
          }
        ),
        /* @__PURE__ */ jsx16(
          Button,
          {
            variant: "danger",
            label: confirmLabel,
            loading,
            onClick: onConfirm
          }
        )
      ] })
    }
  );
}
function mapGap(gap) {
  if (gap === "1") return 4;
  if (gap === "2") return 8;
  if (gap === "3") return 12;
  if (gap === "4") return 16;
  if (gap === "6") return 24;
  return gap;
}
var Stack3 = forwardRef8(function Stack4({ gap = "md", ...props }, ref) {
  return /* @__PURE__ */ jsx16(MantineStack, { ref, gap: mapGap(gap), ...props });
});
function HStack({
  children,
  gap = "3",
  justify = "start",
  align = "center",
  wrap = false
}) {
  return /* @__PURE__ */ jsx16(
    Group2,
    {
      gap: mapGap(gap),
      justify: justify === "between" ? "space-between" : justify,
      align: align === "start" ? "flex-start" : align === "end" ? "flex-end" : align,
      wrap: wrap ? "wrap" : "nowrap",
      children
    }
  );
}
function Grid({ children, gap = "4", columns = 2 }) {
  return /* @__PURE__ */ jsx16(SimpleGrid, { cols: { base: 1, sm: columns }, spacing: mapGap(gap), children });
}
function PageCanvas({ children }) {
  return /* @__PURE__ */ jsx16("main", { className: "vj-page-canvas", children });
}
function PageHeader({ title, scope, context, actions }) {
  return /* @__PURE__ */ jsxs7("header", { className: "vj-page-header", children: [
    /* @__PURE__ */ jsxs7("div", { className: "vj-page-header__main", children: [
      /* @__PURE__ */ jsx16("h1", { className: "vj-page-header__title", children: title }),
      scope,
      context ? /* @__PURE__ */ jsxs7("span", { className: "vj-page-header__context", children: [
        "\xB7 ",
        context
      ] }) : null
    ] }),
    actions
  ] });
}
function SectionHeader({
  title,
  description,
  subtitle,
  actions,
  contained = false
}) {
  const copy = description ?? subtitle;
  return /* @__PURE__ */ jsxs7(
    "div",
    {
      className: "vj-section-header",
      "data-slot": "section-header",
      "data-contained": contained ? "true" : void 0,
      style: contained ? {
        padding: `${FORM_LAYOUT.sectionBlock}px ${FORM_LAYOUT.sectionInline}px`,
        borderBottom: "1px solid var(--line)"
      } : void 0,
      children: [
        /* @__PURE__ */ jsxs7("div", { style: { minWidth: 0 }, children: [
          /* @__PURE__ */ jsx16("h2", { style: {
            margin: 0,
            fontFamily: "var(--font-sans)",
            fontSize: TYPOGRAPHY.sectionTitle.fontSize,
            fontWeight: TYPOGRAPHY.sectionTitle.fontWeight,
            lineHeight: TYPOGRAPHY.sectionTitle.lineHeight,
            letterSpacing: 0
          }, children: title }),
          copy ? /* @__PURE__ */ jsx16("p", { style: {
            margin: "3px 0 0",
            color: "var(--muted-foreground)",
            fontFamily: "var(--font-sans)",
            fontSize: TYPOGRAPHY.supporting.fontSize,
            fontWeight: TYPOGRAPHY.supporting.fontWeight,
            lineHeight: TYPOGRAPHY.supporting.lineHeight,
            letterSpacing: 0
          }, children: copy }) : null
        ] }),
        actions
      ]
    }
  );
}
function DashboardPage({
  title,
  scope,
  context,
  actions,
  children
}) {
  return /* @__PURE__ */ jsxs7("div", { className: "vj-pattern", children: [
    /* @__PURE__ */ jsx16(PageHeader, { title, scope, context, actions }),
    /* @__PURE__ */ jsx16(PageCanvas, { children })
  ] });
}
var ListPage = DashboardPage;
var DetailPage = DashboardPage;
var SettingsPage = DashboardPage;
function EmptyState({ title, description, action }) {
  return /* @__PURE__ */ jsx16("section", { className: "vj-empty-state", children: /* @__PURE__ */ jsxs7("div", { children: [
    /* @__PURE__ */ jsx16("h2", { children: title }),
    /* @__PURE__ */ jsx16("p", { children: description }),
    action
  ] }) });
}
function PermissionDeniedState({ action }) {
  return /* @__PURE__ */ jsx16(
    EmptyState,
    {
      title: "\u6CA1\u6709\u8BBF\u95EE\u6743\u9650",
      description: "\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u5F00\u901A\u6B64\u9875\u9762\u6240\u9700\u6743\u9650\u3002",
      action
    }
  );
}
function ErrorState({ action }) {
  return /* @__PURE__ */ jsx16(
    EmptyState,
    {
      title: "\u5185\u5BB9\u6682\u65F6\u65E0\u6CD5\u52A0\u8F7D",
      description: "\u8BF7\u7A0D\u540E\u91CD\u8BD5\uFF1B\u5982\u679C\u95EE\u9898\u6301\u7EED\u5B58\u5728\uFF0C\u8BF7\u8054\u7CFB\u7BA1\u7406\u5458\u3002",
      action
    }
  );
}
function FilterWorkspace({
  filters,
  children,
  filterLabel = "\u7B5B\u9009\u6761\u4EF6"
}) {
  return /* @__PURE__ */ jsxs7("div", { className: "vj-filter-workspace", children: [
    /* @__PURE__ */ jsx16("aside", { "aria-label": filterLabel, children: filters }),
    /* @__PURE__ */ jsx16("section", { children })
  ] });
}
function DataSection({
  title,
  description,
  actions,
  children,
  bodyPadding = "none"
}) {
  return /* @__PURE__ */ jsx16(
    Card,
    {
      header: /* @__PURE__ */ jsx16(SectionHeader, { title, description, actions }),
      bodyPadding,
      children
    }
  );
}
function FormSection({
  title,
  description,
  children,
  footer
}) {
  return /* @__PURE__ */ jsx16(Card, { header: /* @__PURE__ */ jsx16(SectionHeader, { title, description }), footer, children });
}
function SideNav({
  product,
  brand,
  navigation,
  user
}) {
  return /* @__PURE__ */ jsxs7("aside", { className: "vj-sidebar", "aria-label": `${product} \u4E3B\u5BFC\u822A`, children: [
    /* @__PURE__ */ jsx16("div", { className: "vj-sidebar__brand", children: brand }),
    navigation.map((section, index) => /* @__PURE__ */ jsxs7(
      "nav",
      {
        className: "vj-sidebar__section",
        "aria-label": section.label,
        children: [
          section.label ? /* @__PURE__ */ jsx16("div", { className: "vj-sidebar__section-label", children: section.label }) : null,
          section.items.map((item) => /* @__PURE__ */ jsxs7(
            "button",
            {
              className: "vj-sidebar__item",
              type: "button",
              "aria-current": item.active ? "page" : void 0,
              disabled: item.disabled,
              onClick: item.onSelect,
              children: [
                item.icon,
                item.label
              ]
            },
            item.id
          ))
        ]
      },
      section.label ?? index
    )),
    user ? /* @__PURE__ */ jsx16("div", { children: user }) : null
  ] });
}
function MobileNav({
  product
}) {
  return /* @__PURE__ */ jsx16("div", { className: "vj-mobile-nav", children: /* @__PURE__ */ jsx16("strong", { children: product }) });
}
function KpiGrid({
  children,
  columns = 4
}) {
  return /* @__PURE__ */ jsx16("div", { className: "vj-kpi-grid", "data-columns": columns, children });
}
function StatCard({
  value,
  label,
  hint,
  trend,
  tone = "neutral"
}) {
  return /* @__PURE__ */ jsxs7("article", { className: "vj-stat", "data-tone": normalizeTone(tone), children: [
    /* @__PURE__ */ jsxs7("div", { className: "vj-stat__value", children: [
      value,
      trend
    ] }),
    /* @__PURE__ */ jsx16("div", { className: "vj-stat__label", children: label }),
    hint ? /* @__PURE__ */ jsx16("div", { className: "vj-stat__hint", children: hint }) : null
  ] });
}
function DashboardGrid({ children }) {
  return /* @__PURE__ */ jsx16("div", { className: "vj-dashboard-grid", children });
}
function DashboardGridItem({
  children,
  span = 6
}) {
  return /* @__PURE__ */ jsx16("div", { className: "vj-dashboard-grid__item", "data-span": span, children });
}
var IconButton = forwardRef8(
  function IconButton2({ label, icon, variant = "ghost", size = "md", disabled, onClick }, ref) {
    return /* @__PURE__ */ jsx16(
      "button",
      {
        ref,
        className: "vj-button vj-icon-button",
        "data-variant": variant,
        "data-size": size,
        type: "button",
        "aria-label": label,
        disabled,
        onClick,
        children: icon
      }
    );
  }
);
function ProgressBar({
  value,
  max = 100,
  label,
  showValue = false,
  tone = "info"
}) {
  const safeMax = Math.max(1, max);
  const percent = Math.min(100, Math.max(0, value / safeMax * 100));
  return /* @__PURE__ */ jsxs7("div", { className: "vj-progress", children: [
    /* @__PURE__ */ jsxs7("div", { className: "vj-progress__meta", children: [
      /* @__PURE__ */ jsx16("span", { children: label }),
      showValue ? /* @__PURE__ */ jsxs7("span", { children: [
        Math.round(percent),
        "%"
      ] }) : null
    ] }),
    /* @__PURE__ */ jsxs7(
      "progress",
      {
        className: "vj-progress__native",
        "data-tone": tone,
        value,
        max: safeMax,
        children: [
          Math.round(percent),
          "%"
        ]
      }
    )
  ] });
}
function ThemeProvider({
  theme = "light",
  children
}) {
  return /* @__PURE__ */ jsx16("div", { className: "vijim-root", "data-vijim-theme": theme, children });
}
function BrandLockup({
  product,
  background = "light",
  alt = `VIJIM ${product}`
}) {
  return /* @__PURE__ */ jsx16(
    "img",
    {
      src: `/brand/vijimlabs-${product.toLowerCase()}-lockup${background === "dark" ? "-dark" : ""}.svg`,
      alt
    }
  );
}
var publicComponents = [
  "Button",
  "IconButton",
  "Card",
  "Badge",
  "StatusDot",
  "TrendBadge",
  "FormField",
  "TextInput",
  "Tabs",
  "SegmentedControl",
  "List",
  "ListItem",
  "DataTable",
  "Dialog",
  "Stack",
  "HStack",
  "Grid",
  "PageCanvas",
  "PageHeader",
  "SectionHeader",
  "AppShell"
];
function ToastRegion() {
  return null;
}
function ChartCard({
  title,
  description,
  children,
  footer
}) {
  return /* @__PURE__ */ jsx16(Card, { header: /* @__PURE__ */ jsx16(SectionHeader, { title, description }), footer, children });
}
function Avatar({
  src,
  alt,
  fallback,
  size = "md"
}) {
  const [failed, setFailed] = useState5(false);
  return /* @__PURE__ */ jsx16("span", { className: "vj-avatar", "data-size": size, children: src && !failed ? /* @__PURE__ */ jsx16("img", { src, alt, onError: () => setFailed(true) }) : /* @__PURE__ */ jsx16("span", { "aria-label": alt, children: fallback.slice(0, 2) }) });
}
function Thumbnail({
  src,
  alt,
  size = "md",
  fallbackLabel = "\u6682\u65E0\u56FE\u7247"
}) {
  const [failed, setFailed] = useState5(false);
  return /* @__PURE__ */ jsx16("span", { className: "vj-thumbnail", "data-size": size, children: src && !failed ? /* @__PURE__ */ jsx16("img", { src, alt, onError: () => setFailed(true) }) : /* @__PURE__ */ jsx16("span", { role: "img", "aria-label": `${alt}\uFF1A${fallbackLabel}`, children: fallbackLabel }) });
}
function MetadataList({
  items,
  columns = 1,
  ariaLabel
}) {
  return /* @__PURE__ */ jsx16("dl", { className: "vj-metadata", "data-columns": columns, "aria-label": ariaLabel, children: items.map((item) => /* @__PURE__ */ jsxs7("div", { children: [
    /* @__PURE__ */ jsx16("dt", { children: item.label }),
    /* @__PURE__ */ jsx16("dd", { children: item.value })
  ] }, item.label)) });
}
function MultiSelector({
  values,
  onChange,
  options,
  label,
  disabled
}) {
  const toggle = (value) => onChange(
    values.includes(value) ? values.filter((item) => item !== value) : [...values, value]
  );
  return /* @__PURE__ */ jsx16("div", { className: "vj-multi-selector", role: "group", "aria-label": label, children: options.map((option) => /* @__PURE__ */ jsx16(
    "button",
    {
      type: "button",
      "aria-pressed": values.includes(option.value),
      disabled: disabled || option.disabled,
      onClick: () => toggle(option.value),
      children: option.label
    },
    option.value
  )) });
}
function Tag({
  label,
  tone = "neutral",
  onRemove,
  removeLabel = `\u79FB\u9664${label}`
}) {
  return /* @__PURE__ */ jsxs7("span", { className: "vj-tag", "data-tone": tone, children: [
    /* @__PURE__ */ jsx16("span", { children: label }),
    onRemove ? /* @__PURE__ */ jsx16("button", { type: "button", "aria-label": removeLabel, onClick: onRemove, children: "\xD7" }) : null
  ] });
}
function InputGroup({
  value,
  onChange,
  placeholder,
  prefix,
  suffix,
  disabled,
  id,
  ariaLabel,
  required,
  "aria-describedby": describedBy,
  "aria-invalid": invalid
}) {
  return /* @__PURE__ */ jsxs7("div", { className: "vj-input-group", "data-invalid": invalid || void 0, children: [
    prefix ? /* @__PURE__ */ jsx16("span", { children: prefix }) : null,
    /* @__PURE__ */ jsx16(
      "input",
      {
        value,
        onChange: (event) => onChange?.(event.currentTarget.value),
        placeholder,
        disabled,
        id,
        "aria-label": ariaLabel,
        required,
        "aria-describedby": describedBy,
        "aria-invalid": invalid
      }
    ),
    suffix ? /* @__PURE__ */ jsx16("span", { children: suffix }) : null
  ] });
}
function Slider({
  value,
  onChange,
  label,
  min = 0,
  max = 100,
  step = 1,
  showValue = true,
  disabled
}) {
  return /* @__PURE__ */ jsxs7("label", { className: "vj-slider", children: [
    /* @__PURE__ */ jsxs7("span", { className: "vj-slider__meta", children: [
      /* @__PURE__ */ jsx16("span", { children: label }),
      showValue ? /* @__PURE__ */ jsx16("strong", { children: value }) : null
    ] }),
    /* @__PURE__ */ jsx16(
      "input",
      {
        type: "range",
        value,
        onChange: (event) => onChange(event.currentTarget.valueAsNumber),
        min,
        max,
        step,
        disabled
      }
    )
  ] });
}
function DatePicker({
  value,
  onChange,
  min,
  max,
  disabled,
  id,
  ariaLabel,
  required,
  "aria-describedby": describedBy,
  "aria-invalid": invalid
}) {
  return /* @__PURE__ */ jsx16(
    "input",
    {
      className: "vj-input vj-date",
      type: "date",
      value,
      onChange: (event) => onChange?.(event.currentTarget.value),
      min,
      max,
      disabled,
      id,
      "aria-label": ariaLabel,
      required,
      "aria-describedby": describedBy,
      "aria-invalid": invalid
    }
  );
}

// src/components/DataTable.tsx
import { jsx as jsx17, jsxs as jsxs8 } from "react/jsx-runtime";
function DataTable(props) {
  if ("rowKey" in props) {
    return /* @__PURE__ */ jsx17(LegacyDataTable, { ...props });
  }
  return /* @__PURE__ */ jsx17(ModernDataTable, { ...props });
}
function ModernDataTable({
  data,
  columns,
  getRowId,
  selectable = false,
  rowSelection: controlledSelection,
  onRowSelectionChange,
  pageSize,
  onRowClick,
  emptyTitle = "\u6682\u65E0\u6570\u636E",
  emptyDescription = "\u8C03\u6574\u7B5B\u9009\u6761\u4EF6\uFF0C\u6216\u7A0D\u540E\u518D\u8BD5\u3002",
  toolbar,
  loading = false,
  maxHeight
}) {
  const [sorting, setSorting] = useState6([]);
  const [internalSelection, setInternalSelection] = useState6(
    {}
  );
  const [pagination, setPagination] = useState6({
    pageIndex: 0,
    pageSize: pageSize ?? 20
  });
  const selection = controlledSelection ?? internalSelection;
  const setSelection = onRowSelectionChange ?? setInternalSelection;
  const cols = useMemo5(() => {
    if (!selectable) return columns;
    const selectCol = {
      id: "__select",
      size: 40,
      header: ({ table: table2 }) => /* @__PURE__ */ jsx17(
        Checkbox,
        {
          "aria-label": "\u5168\u9009",
          checked: table2.getIsAllPageRowsSelected(),
          indeterminate: table2.getIsSomePageRowsSelected(),
          onChange: table2.getToggleAllPageRowsSelectedHandler()
        }
      ),
      cell: ({ row }) => /* @__PURE__ */ jsx17(
        Checkbox,
        {
          "aria-label": "\u9009\u62E9\u884C",
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          onChange: row.getToggleSelectedHandler(),
          onClick: (e) => e.stopPropagation()
        }
      )
    };
    return [selectCol, ...columns];
  }, [columns, selectable]);
  const table = useReactTable({
    data,
    columns: cols,
    state: {
      sorting,
      rowSelection: selection,
      ...pageSize ? { pagination: { ...pagination, pageSize } } : {}
    },
    getRowId,
    enableRowSelection: selectable,
    onRowSelectionChange: setSelection,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    ...pageSize ? { getPaginationRowModel: getPaginationRowModel() } : {}
  });
  const rows = table.getRowModel().rows;
  const pageCount = table.getPageCount();
  return /* @__PURE__ */ jsxs8("div", { children: [
    toolbar ? /* @__PURE__ */ jsx17("div", { style: { marginBottom: 12 }, children: toolbar }) : null,
    /* @__PURE__ */ jsx17(Table.ScrollContainer, { minWidth: 640, maxHeight, children: /* @__PURE__ */ jsxs8(
      Table,
      {
        highlightOnHover: true,
        horizontalSpacing: "md",
        verticalSpacing: "sm",
        stickyHeader: Boolean(maxHeight),
        children: [
          /* @__PURE__ */ jsx17(Table.Thead, { children: table.getHeaderGroups().map((hg) => /* @__PURE__ */ jsx17(Table.Tr, { children: hg.headers.map((header) => /* @__PURE__ */ jsxs8(
            Table.Th,
            {
              style: {
                width: header.getSize() !== 150 ? header.getSize() : void 0,
                cursor: header.column.getCanSort() ? "pointer" : void 0,
                userSelect: "none"
              },
              onClick: header.column.getToggleSortingHandler(),
              children: [
                header.isPlaceholder ? null : flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                ),
                {
                  asc: " \u2191",
                  desc: " \u2193"
                }[header.column.getIsSorted()] ?? null
              ]
            },
            header.id
          )) }, hg.id)) }),
          /* @__PURE__ */ jsx17(Table.Tbody, { children: loading ? /* @__PURE__ */ jsx17(Table.Tr, { children: /* @__PURE__ */ jsx17(Table.Td, { colSpan: cols.length, children: /* @__PURE__ */ jsx17(Text4, { c: "dimmed", size: "sm", ta: "center", py: "lg", children: "\u52A0\u8F7D\u4E2D\u2026" }) }) }) : rows.length === 0 ? /* @__PURE__ */ jsx17(Table.Tr, { children: /* @__PURE__ */ jsx17(Table.Td, { colSpan: cols.length, children: /* @__PURE__ */ jsx17(Empty, { title: emptyTitle, description: emptyDescription }) }) }) : rows.map((row) => /* @__PURE__ */ jsx17(
            Table.Tr,
            {
              "data-selected": row.getIsSelected() || void 0,
              style: {
                cursor: onRowClick ? "pointer" : void 0,
                backgroundColor: row.getIsSelected() ? "rgba(51, 112, 255, 0.06)" : void 0
              },
              onClick: () => onRowClick?.(row.original),
              children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx17(Table.Td, { children: flexRender(
                cell.column.columnDef.cell,
                cell.getContext()
              ) }, cell.id))
            },
            row.id
          )) })
        ]
      }
    ) }),
    pageSize && pageCount > 1 ? /* @__PURE__ */ jsxs8(Group3, { justify: "space-between", mt: "md", children: [
      /* @__PURE__ */ jsxs8(Text4, { size: "sm", c: "dimmed", children: [
        "\u5171 ",
        data.length,
        " \u6761"
      ] }),
      /* @__PURE__ */ jsx17(
        Pagination,
        {
          total: pageCount,
          value: table.getState().pagination.pageIndex + 1,
          onChange: (page) => table.setPageIndex(page - 1)
        }
      )
    ] }) : null
  ] });
}

// src/components/FilterBar.tsx
import { Box as Box3, Group as Group4, Stack as Stack5, Text as Text5, UnstyledButton as UnstyledButton4 } from "@mantine/core";
import { jsx as jsx18, jsxs as jsxs9 } from "react/jsx-runtime";
var PANEL = {
  bg: COLORS.surface,
  border: `1px solid ${COLORS.border}`,
  radius: RADIUS.panel,
  // 12px 软面板（apple 大面）
  shadow: SHADOWS.sm
};
var pressHandlers = (disabled) => ({
  onMouseDown: (e) => {
    if (disabled) return;
    e.currentTarget.style.transform = `scale(${MOTION.pressScale})`;
  },
  onMouseUp: (e) => {
    e.currentTarget.style.transform = "scale(1)";
  },
  onMouseLeave: (e) => {
    e.currentTarget.style.transform = "scale(1)";
  }
});
function FilterBar({
  children,
  active,
  onClear,
  clearLabel = "\u6E05\u9664\u7B5B\u9009"
}) {
  return /* @__PURE__ */ jsxs9(
    Box3,
    {
      className: "vijim-filter-bar",
      style: {
        backgroundColor: PANEL.bg,
        border: PANEL.border,
        borderRadius: PANEL.radius,
        boxShadow: PANEL.shadow,
        marginBottom: 16
      },
      children: [
        /* @__PURE__ */ jsx18(Box3, { px: "md", py: "md", children }),
        active != null || onClear ? /* @__PURE__ */ jsx18(
          Box3,
          {
            px: "md",
            py: "xs",
            style: {
              borderTop: `1px solid ${COLORS.border}`,
              backgroundColor: COLORS.surface2,
              borderRadius: `0 0 ${PANEL.radius} ${PANEL.radius}`
            },
            children: /* @__PURE__ */ jsxs9(Group4, { justify: "space-between", align: "center", gap: "sm", wrap: "wrap", children: [
              /* @__PURE__ */ jsx18(Box3, { style: { flex: 1, minWidth: 0 }, children: active ?? /* @__PURE__ */ jsx18(Text5, { size: "xs", c: "dimmed", children: "\u672A\u8BBE\u7F6E\u7B5B\u9009" }) }),
              onClear ? /* @__PURE__ */ jsx18(Button, { variant: "subtle", color: "gray", size: "sm", onClick: onClear, children: clearLabel }) : null
            ] })
          }
        ) : null
      ]
    }
  );
}
function FilterToolbar({
  search,
  sort,
  actions,
  resultText,
  extras
}) {
  return /* @__PURE__ */ jsxs9(Stack5, { gap: "sm", children: [
    /* @__PURE__ */ jsxs9(Group4, { align: "center", gap: "md", wrap: "wrap", children: [
      /* @__PURE__ */ jsx18(Box3, { style: { flex: "1 1 260px", minWidth: 200, maxWidth: 480 }, children: search }),
      /* @__PURE__ */ jsxs9(Group4, { gap: "xs", wrap: "nowrap", ml: "auto", align: "center", children: [
        resultText ? /* @__PURE__ */ jsx18(Text5, { size: "xs", c: "dimmed", ff: "monospace", children: resultText }) : null,
        actions
      ] })
    ] }),
    sort,
    extras
  ] });
}
function FilterBatchBar({
  selectedCount,
  children
}) {
  if (selectedCount <= 0) return null;
  return /* @__PURE__ */ jsxs9(
    Group4,
    {
      gap: "sm",
      px: "md",
      py: "sm",
      justify: "space-between",
      style: {
        backgroundColor: COLORS.surface,
        border: PANEL.border,
        borderRadius: PANEL.radius
      },
      children: [
        /* @__PURE__ */ jsxs9(Text5, { size: "sm", c: COLORS.inkSecondary, children: [
          "\u5DF2\u9009",
          " ",
          /* @__PURE__ */ jsx18(Text5, { span: true, fw: 650, c: COLORS.ink, ff: "monospace", children: selectedCount }),
          " ",
          "\u9879"
        ] }),
        /* @__PURE__ */ jsx18(Group4, { gap: "xs", children })
      ]
    }
  );
}
function FilterRow({ children, label }) {
  return /* @__PURE__ */ jsxs9(Group4, { gap: 6, align: "center", wrap: "wrap", children: [
    label ? /* @__PURE__ */ jsx18(Text5, { size: "xs", c: "dimmed", style: { flex: "none" }, children: label }) : null,
    children
  ] });
}
function FilterField({
  label,
  children,
  grow = false,
  minWidth = 140,
  layout = "inline"
}) {
  if (layout === "stack") {
    return /* @__PURE__ */ jsxs9(Stack5, { gap: 4, style: { flex: grow ? "1 1 200px" : void 0, minWidth }, children: [
      label ? /* @__PURE__ */ jsx18(Text5, { size: "xs", c: "dimmed", fw: 500, children: label }) : null,
      children
    ] });
  }
  return /* @__PURE__ */ jsxs9(
    Group4,
    {
      gap: 6,
      align: "center",
      wrap: "nowrap",
      style: { flex: grow ? "1 1 200px" : void 0, minWidth },
      children: [
        label ? /* @__PURE__ */ jsx18(Text5, { size: "xs", c: "dimmed", style: { flex: "none" }, children: label }) : null,
        /* @__PURE__ */ jsx18(Box3, { style: { flex: 1, minWidth: 0 }, children })
      ]
    }
  );
}
function FilterSegment({
  options,
  value,
  onChange,
  disabled = false,
  "aria-label": ariaLabel
}) {
  return /* @__PURE__ */ jsx18(
    Group4,
    {
      gap: 2,
      align: "center",
      wrap: "nowrap",
      role: "radiogroup",
      "aria-label": ariaLabel,
      style: {
        display: "inline-flex",
        backgroundColor: "transparent",
        border: "none",
        borderRadius: RADIUS.segment,
        boxShadow: "none"
      },
      children: options.map((opt) => {
        const selected = opt.value === value;
        const press = pressHandlers(disabled);
        return /* @__PURE__ */ jsxs9(
          UnstyledButton4,
          {
            type: "button",
            role: "radio",
            "aria-checked": selected,
            disabled,
            onClick: () => {
              if (disabled || selected) return;
              onChange(opt.value);
            },
            style: {
              display: "inline-flex",
              alignItems: "center",
              gap: 4,
              minHeight: 28,
              paddingInline: 12,
              borderRadius: RADIUS.sm,
              border: "none",
              // 选中 = 灰色块；未选 = 透明
              backgroundColor: selected ? COLORS.selectedBg : "transparent",
              color: selected ? COLORS.selectedInk : COLORS.mutedFg,
              fontSize: 13,
              fontWeight: selected ? 600 : 500,
              fontFamily: "inherit",
              lineHeight: 1.2,
              whiteSpace: "nowrap",
              cursor: disabled ? "not-allowed" : "pointer",
              opacity: disabled ? 0.45 : 1,
              boxShadow: "none",
              transition: [
                `background-color ${MOTION.fast} ${MOTION.easeOut}`,
                `color ${MOTION.fast} ${MOTION.easeOut}`,
                `transform ${MOTION.press} ${MOTION.easeOut}`
              ].join(", ")
            },
            onMouseEnter: (e) => {
              if (disabled || selected) return;
              e.currentTarget.style.backgroundColor = COLORS.muted;
              e.currentTarget.style.color = COLORS.ink2;
            },
            onMouseLeave: (e) => {
              press.onMouseLeave(e);
              if (disabled || selected) return;
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = COLORS.mutedFg;
            },
            onMouseDown: press.onMouseDown,
            onMouseUp: press.onMouseUp,
            children: [
              opt.label,
              opt.count !== void 0 ? /* @__PURE__ */ jsx18(
                Text5,
                {
                  component: "span",
                  ff: "monospace",
                  style: {
                    fontSize: 11,
                    fontWeight: selected ? 560 : 450,
                    color: selected ? COLORS.selectedInk : COLORS.faint,
                    opacity: selected ? 0.72 : 1,
                    marginLeft: 2
                  },
                  children: opt.count
                }
              ) : null
            ]
          },
          opt.value
        );
      })
    }
  );
}
function FilterTerm({
  label,
  children,
  count,
  selected = false,
  onClick,
  disabled = false,
  "aria-label": ariaLabel
}) {
  const press = pressHandlers(disabled);
  return /* @__PURE__ */ jsxs9(
    UnstyledButton4,
    {
      type: "button",
      onClick,
      disabled,
      "aria-pressed": selected,
      "aria-label": ariaLabel,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        minHeight: 28,
        paddingInline: 10,
        borderRadius: RADIUS.term,
        border: "none",
        backgroundColor: selected ? COLORS.selectedBg : "transparent",
        color: selected ? COLORS.selectedInk : COLORS.mutedFg,
        fontSize: 13,
        fontWeight: selected ? 600 : 500,
        fontFamily: "inherit",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        lineHeight: 1.2,
        whiteSpace: "nowrap",
        boxShadow: "none",
        transition: [
          `background-color ${MOTION.fast} ${MOTION.easeOut}`,
          `color ${MOTION.fast} ${MOTION.easeOut}`,
          `transform ${MOTION.press} ${MOTION.easeOut}`
        ].join(", ")
      },
      onMouseEnter: (e) => {
        if (disabled || selected) return;
        e.currentTarget.style.backgroundColor = COLORS.muted;
        e.currentTarget.style.color = COLORS.ink2;
      },
      onMouseLeave: (e) => {
        press.onMouseLeave(e);
        if (disabled || selected) return;
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = COLORS.mutedFg;
      },
      onMouseDown: press.onMouseDown,
      onMouseUp: press.onMouseUp,
      children: [
        children ?? label,
        count !== void 0 ? /* @__PURE__ */ jsx18(
          Text5,
          {
            component: "span",
            ff: "monospace",
            style: {
              fontSize: 11,
              fontWeight: selected ? 560 : 450,
              color: selected ? COLORS.selectedInk : COLORS.faint,
              opacity: selected ? 0.72 : 1,
              marginLeft: 2
            },
            children: count
          }
        ) : null
      ]
    }
  );
}
function FilterFacet({
  label,
  options,
  value = null,
  onChange,
  nested = false,
  showAll = true,
  allLabel = "\u5168\u90E8"
}) {
  return /* @__PURE__ */ jsxs9(Group4, { gap: 14, align: "flex-start", wrap: "nowrap", children: [
    /* @__PURE__ */ jsx18(
      Text5,
      {
        size: "xs",
        c: "dimmed",
        style: {
          flex: "none",
          width: 44,
          lineHeight: 1.8,
          opacity: nested ? 0.85 : 1
        },
        children: nested ? `\u2514 ${label}` : label
      }
    ),
    /* @__PURE__ */ jsxs9(Group4, { gap: 4, align: "center", wrap: "wrap", style: { flex: 1, minWidth: 0 }, children: [
      showAll ? /* @__PURE__ */ jsx18(
        FilterTerm,
        {
          label: allLabel,
          selected: value == null || value === "",
          onClick: () => onChange(null)
        }
      ) : null,
      options.map((opt) => /* @__PURE__ */ jsx18(
        FilterTerm,
        {
          label: opt.label,
          count: opt.count,
          selected: value === opt.value,
          onClick: () => onChange(value === opt.value ? null : opt.value)
        },
        opt.value
      ))
    ] })
  ] });
}
function FilterActive({
  items,
  onClearAll,
  emptyText = "\u672A\u8BBE\u7F6E\u7B5B\u9009"
}) {
  if (items.length === 0) {
    return /* @__PURE__ */ jsx18(Text5, { size: "xs", c: "dimmed", children: emptyText });
  }
  return /* @__PURE__ */ jsxs9(Group4, { gap: "sm", align: "center", wrap: "wrap", children: [
    /* @__PURE__ */ jsx18(Text5, { size: "xs", c: "dimmed", style: { flex: "none" }, children: "\u5DF2\u9009" }),
    items.map((item) => /* @__PURE__ */ jsxs9(
      Group4,
      {
        gap: 4,
        align: "center",
        wrap: "nowrap",
        px: 8,
        style: {
          minHeight: 28,
          borderRadius: RADIUS.term,
          border: `1px solid ${COLORS.border}`,
          backgroundColor: COLORS.surface,
          fontSize: 12.5,
          boxShadow: "0 1px 2px rgba(18,19,23,0.03)"
        },
        children: [
          /* @__PURE__ */ jsx18(Text5, { size: "xs", c: COLORS.ink, fw: 500, children: item.label }),
          item.onRemove ? /* @__PURE__ */ jsx18(
            UnstyledButton4,
            {
              type: "button",
              "aria-label": `\u79FB\u9664 ${item.label}`,
              onClick: item.onRemove,
              style: {
                display: "inline-flex",
                width: 16,
                height: 16,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 4,
                color: COLORS.mutedFg,
                fontSize: 12,
                fontFamily: "inherit"
              },
              children: "\xD7"
            }
          ) : null
        ]
      },
      item.key
    )),
    onClearAll ? /* @__PURE__ */ jsx18(
      UnstyledButton4,
      {
        type: "button",
        onClick: onClearAll,
        style: {
          fontSize: 12.5,
          fontWeight: 600,
          color: COLORS.mutedFg,
          fontFamily: "inherit"
        },
        children: "\u5168\u90E8\u6E05\u9664"
      }
    ) : null
  ] });
}

// src/components/notifications.ts
import { notifications as mantineNotifications } from "@mantine/notifications";
var notify = {
  success(opts) {
    mantineNotifications.show({
      color: "green",
      title: opts.title ?? "\u6210\u529F",
      message: opts.message,
      autoClose: opts.autoClose ?? 3e3
    });
  },
  error(opts) {
    mantineNotifications.show({
      color: "red",
      title: opts.title ?? "\u51FA\u9519\u4E86",
      message: opts.message,
      autoClose: opts.autoClose ?? 5e3
    });
  },
  info(opts) {
    mantineNotifications.show({
      color: "brand",
      title: opts.title ?? "\u63D0\u793A",
      message: opts.message,
      autoClose: opts.autoClose ?? 3e3
    });
  },
  warning(opts) {
    mantineNotifications.show({
      color: "yellow",
      title: opts.title ?? "\u6CE8\u610F",
      message: opts.message,
      autoClose: opts.autoClose ?? 4e3
    });
  },
  hide(id) {
    mantineNotifications.hide(id);
  },
  clean() {
    mantineNotifications.clean();
  }
};

// src/components/Spotlight.tsx
import { Spotlight as MantineSpotlight } from "@mantine/spotlight";
import { IconSearch as IconSearch3 } from "@tabler/icons-react";
import { spotlight } from "@mantine/spotlight";
import { jsx as jsx19 } from "react/jsx-runtime";
function SpotlightSearch({
  actions,
  placeholder = "\u641C\u7D22\u9875\u9762\u4E0E\u64CD\u4F5C\u2026",
  shortcut = ["mod + K"]
}) {
  return /* @__PURE__ */ jsx19(
    MantineSpotlight,
    {
      actions,
      shortcut,
      nothingFound: "\u6CA1\u6709\u5339\u914D\u7ED3\u679C",
      highlightQuery: true,
      searchProps: {
        leftSection: /* @__PURE__ */ jsx19(IconSearch3, { size: 16, stroke: 1.5 }),
        placeholder
      }
    }
  );
}

// src/components/layout-primitives.tsx
import {
  Group as Group5,
  Box as Box4,
  SimpleGrid as SimpleGrid2,
  Divider,
  Paper,
  Text as Text6,
  Title,
  Anchor,
  Checkbox as Checkbox2,
  Switch,
  Alert,
  ActionIcon as ActionIcon2
} from "@mantine/core";
import {
  useDisclosure,
  useMediaQuery,
  useDebouncedValue
} from "@mantine/hooks";
import {
  useForm,
  isNotEmpty,
  isEmail,
  hasLength
} from "@mantine/form";
import { AreaChart, BarChart } from "@mantine/charts";

// src/components/Combobox.tsx
import {
  Combobox,
  useCombobox
} from "@mantine/core";

// src/components/ThemeCompare.tsx
import { MantineProvider as MantineProvider2 } from "@mantine/core";
import { IconSearch as TablerIconSearch } from "@tabler/icons-react";
import { jsx as jsx20 } from "react/jsx-runtime";
function DefaultThemeProvider({ children }) {
  return /* @__PURE__ */ jsx20(MantineProvider2, { forceColorScheme: "light", children });
}
function IconSearch4(props) {
  return /* @__PURE__ */ jsx20(TablerIconSearch, { size: props.size ?? 16, stroke: props.stroke ?? 1.5 });
}

// src/components/MaterialCompat.tsx
import {
  Children,
  cloneElement as cloneElement2,
  createContext,
  isValidElement as isValidElement3,
  useContext,
  useId as useId4,
  useMemo as useMemo6,
  useState as useState7
} from "react";
import { Fragment as Fragment3, jsx as jsx21, jsxs as jsxs10 } from "react/jsx-runtime";
var UiButtonAny = Button;
var UiBadgeAny = Badge;
var UiSelectAny = Select;
var UiSearchInputAny = SearchInput;
var UiSearchableSelectAny = SearchableSelect;
var UiSegmentedControlAny = SegmentedControl;
function mergeClassName(...names) {
  return names.filter(Boolean).join(" ") || void 0;
}
function mapButtonVariant(variant) {
  if (variant === "outline") return "outline";
  if (variant === "ghost" || variant === "link") return "ghost";
  if (variant === "secondary") return "light";
  if (variant === "destructive") return "light";
  return "filled";
}
function mapButtonSize(size) {
  if (size === "xs" || size === "icon-xs") return "xs";
  if (size === "lg" || size === "icon-lg") return "lg";
  return "sm";
}
function Button3({
  asChild,
  variant,
  size,
  color,
  children,
  className,
  ...props
}) {
  const mappedVariant = mapButtonVariant(variant);
  const mappedSize = mapButtonSize(size);
  const mappedColor = color ?? (variant === "destructive" ? "red" : "brand");
  if (asChild && isValidElement3(children)) {
    const child = children;
    const childProps = child.props;
    return /* @__PURE__ */ jsx21(
      UiButtonAny,
      {
        component: child.type,
        variant: mappedVariant,
        size: mappedSize,
        color: mappedColor,
        "data-slot": "button",
        "data-variant": variant ?? "default",
        "data-size": size ?? "default",
        className: mergeClassName(className, childProps.className),
        ...props,
        ...childProps,
        children: childProps.children
      }
    );
  }
  return /* @__PURE__ */ jsx21(
    UiButtonAny,
    {
      variant: mappedVariant,
      size: mappedSize,
      color: mappedColor,
      "data-slot": "button",
      "data-variant": variant ?? "default",
      "data-size": size ?? "default",
      className,
      ...props,
      children
    }
  );
}
function Badge2({
  variant = "default",
  asChild,
  children,
  ...props
}) {
  const tone = variant === "destructive" ? "error" : variant === "secondary" ? "neutral" : "info";
  if (asChild && isValidElement3(children)) {
    const child = children;
    return /* @__PURE__ */ jsx21(
      UiBadgeAny,
      {
        component: child.type,
        tone,
        "data-slot": "badge",
        "data-variant": variant,
        ...props,
        ...child.props,
        children: child.props.children
      }
    );
  }
  return /* @__PURE__ */ jsx21(UiBadgeAny, { tone, "data-slot": "badge", "data-variant": variant, ...props, children });
}
function Icon2({
  name,
  size = 16,
  strokeWidth,
  style,
  className
}) {
  return /* @__PURE__ */ jsx21(
    Icon,
    {
      name,
      size,
      ...strokeWidth === void 0 ? {} : { strokeWidth },
      className: className ? `material-ds-icon ${className}` : "material-ds-icon",
      ...style ? { style } : {}
    }
  );
}
function EmptyState2({
  icon = "board",
  title,
  description,
  action
}) {
  return /* @__PURE__ */ jsxs10("div", { className: "material-empty", children: [
    /* @__PURE__ */ jsx21("span", { className: "material-empty__icon", "aria-hidden": "true", children: typeof icon === "string" ? /* @__PURE__ */ jsx21(Icon2, { name: icon, size: 18 }) : icon }),
    /* @__PURE__ */ jsx21("strong", { children: title }),
    description ? /* @__PURE__ */ jsx21("p", { children: description }) : null,
    action ? /* @__PURE__ */ jsx21("div", { className: "material-empty__action", children: action }) : null
  ] });
}
function PageHeader2({
  eyebrow,
  title,
  description,
  actions,
  backAction
}) {
  return /* @__PURE__ */ jsxs10(
    "header",
    {
      className: "material-page-header",
      "data-slot": "page-header",
      style: { display: "grid", minWidth: 0, gap: 10 },
      children: [
        backAction ? /* @__PURE__ */ jsx21("div", { className: "material-page-header__back", children: backAction }) : null,
        /* @__PURE__ */ jsxs10(
          "div",
          {
            style: {
              display: "flex",
              minWidth: 0,
              alignItems: "flex-end",
              justifyContent: "space-between",
              gap: 16
            },
            children: [
              /* @__PURE__ */ jsxs10("div", { style: { minWidth: 0 }, children: [
                eyebrow ? /* @__PURE__ */ jsx21(
                  "p",
                  {
                    className: "material-eyebrow",
                    style: { margin: "0 0 5px", color: "var(--faint)", fontSize: 12, lineHeight: 1.4 },
                    children: eyebrow
                  }
                ) : null,
                /* @__PURE__ */ jsx21(
                  "h1",
                  {
                    style: {
                      margin: 0,
                      color: "var(--ink)",
                      fontFamily: "var(--font-sans)",
                      fontSize: TYPOGRAPHY.pageTitle.fontSize,
                      fontWeight: TYPOGRAPHY.pageTitle.fontWeight,
                      letterSpacing: 0,
                      lineHeight: TYPOGRAPHY.pageTitle.lineHeight,
                      overflowWrap: "anywhere"
                    },
                    children: title
                  }
                ),
                description ? /* @__PURE__ */ jsx21("p", { style: { margin: "6px 0 0", color: "var(--muted-foreground)", fontSize: 13, lineHeight: 1.45 }, children: description }) : null
              ] }),
              actions ? /* @__PURE__ */ jsx21(
                "div",
                {
                  className: "material-page-header__actions",
                  style: { display: "flex", flex: "none", alignItems: "center", gap: 8 },
                  children: actions
                }
              ) : null
            ]
          }
        )
      ]
    }
  );
}
function SectionHeader2({
  title,
  description,
  actions,
  action,
  divider,
  contained = false
}) {
  return /* @__PURE__ */ jsxs10(
    "header",
    {
      className: "material-section-header",
      "data-slot": "section-header",
      "data-divider": divider ? "true" : "false",
      "data-contained": contained ? "true" : void 0,
      style: {
        display: "flex",
        minWidth: 0,
        alignItems: "flex-end",
        justifyContent: "space-between",
        gap: 16,
        ...contained ? {
          padding: `${FORM_LAYOUT.sectionBlock}px ${FORM_LAYOUT.sectionInline}px`,
          borderBottom: "1px solid var(--line)"
        } : {}
      },
      children: [
        /* @__PURE__ */ jsxs10("div", { style: { minWidth: 0 }, children: [
          /* @__PURE__ */ jsx21("h2", { style: {
            margin: 0,
            color: "var(--ink)",
            fontFamily: "var(--font-sans)",
            fontSize: TYPOGRAPHY.sectionTitle.fontSize,
            fontWeight: TYPOGRAPHY.sectionTitle.fontWeight,
            letterSpacing: 0,
            lineHeight: TYPOGRAPHY.sectionTitle.lineHeight
          }, children: title }),
          description ? /* @__PURE__ */ jsx21("p", { style: {
            margin: "3px 0 0",
            color: "var(--muted-foreground)",
            fontFamily: "var(--font-sans)",
            fontSize: TYPOGRAPHY.supporting.fontSize,
            fontWeight: TYPOGRAPHY.supporting.fontWeight,
            lineHeight: TYPOGRAPHY.supporting.lineHeight
          }, children: description }) : null
        ] }),
        actions ?? action ? /* @__PURE__ */ jsx21("div", { className: "material-section-header__actions", children: actions ?? action }) : null
      ]
    }
  );
}
function PageToolbar({ children, end }) {
  return /* @__PURE__ */ jsxs10(
    "div",
    {
      className: "material-page-toolbar",
      "data-slot": "page-toolbar",
      style: {
        display: "flex",
        minWidth: 0,
        alignItems: "center",
        justifyContent: "space-between",
        gap: 12,
        flexWrap: "wrap"
      },
      children: [
        /* @__PURE__ */ jsx21("div", { style: { minWidth: 0 }, children }),
        end ? /* @__PURE__ */ jsx21("div", { "data-slot": "page-toolbar-end", style: { minWidth: 0, marginLeft: "auto" }, children: end }) : null
      ]
    }
  );
}
function DatePicker2({
  value,
  onChange,
  ...props
}) {
  return /* @__PURE__ */ jsx21(
    DatePickerInput,
    {
      value: value || null,
      onChange: (next) => onChange(next ?? ""),
      clearable: props.clearable ?? true,
      ...props
    }
  );
}
function Input({
  controlSize: _controlSize,
  onChange,
  ...props
}) {
  return /* @__PURE__ */ jsx21(
    TextInput,
    {
      "data-slot": "input",
      ...props,
      ...onChange ? { onInputChange: onChange } : {}
    }
  );
}
function Textarea3(props) {
  return /* @__PURE__ */ jsx21(Textarea, { "data-slot": "textarea", ...props });
}
function Label(props) {
  return /* @__PURE__ */ jsx21("label", { "data-slot": "label", ...props });
}
function FormField2({
  label,
  children,
  htmlFor,
  description,
  status,
  statusText,
  required,
  full
}) {
  const message = statusText ?? description;
  return /* @__PURE__ */ jsxs10("div", { className: full ? "material-field material-field--wide" : "material-field", "data-status": status, children: [
    /* @__PURE__ */ jsxs10(Label, { ...htmlFor ? { htmlFor } : {}, children: [
      label,
      required ? /* @__PURE__ */ jsx21("span", { "aria-hidden": "true", children: " *" }) : null
    ] }),
    children,
    message ? /* @__PURE__ */ jsx21("p", { className: "material-field-hint", children: message }) : null
  ] });
}
function FormGrid({
  children,
  columns = 2,
  gap
}) {
  const resolvedGap = FORM_LAYOUT.gridGap[gap ?? "md"];
  return /* @__PURE__ */ jsx21(
    "div",
    {
      className: "material-form-grid",
      "data-columns": columns,
      "data-gap": gap ?? "md",
      style: {
        "--material-form-columns": columns,
        "--material-form-column-gap": `${resolvedGap.column}px`,
        "--material-form-row-gap": `${resolvedGap.row}px`
      },
      children
    }
  );
}
function FormSection2({ title, description, children }) {
  return /* @__PURE__ */ jsx21(FormSection, { title, ...description ? { description } : {}, children });
}
function FormActions({ children }) {
  return /* @__PURE__ */ jsx21("div", { className: "material-action-row", children });
}
var SelectContext = createContext(null);
function collectSelectItems(children) {
  const items = [];
  Children.forEach(children, (child) => {
    if (!isValidElement3(child)) return;
    if (child.type === SelectItem) {
      const props = child.props;
      items.push({
        value: props.value,
        label: Children.toArray(props.children).join(""),
        ...props.disabled !== void 0 ? { disabled: props.disabled } : {}
      });
      return;
    }
    items.push(...collectSelectItems(child.props.children));
  });
  return items;
}
function findSelectPlaceholder(children) {
  let placeholder;
  Children.forEach(children, (child) => {
    if (!isValidElement3(child) || placeholder) return;
    if (child.type === SelectValue) {
      placeholder = child.props.placeholder;
      return;
    }
    placeholder = findSelectPlaceholder(child.props.children);
  });
  return placeholder;
}
function Select3({
  value,
  onValueChange,
  children
}) {
  return /* @__PURE__ */ jsx21(SelectContext.Provider, { value: { value, onValueChange, children: children ?? null }, children });
}
function SelectTrigger({
  id,
  fullWidth,
  size,
  children,
  "aria-label": ariaLabel
}) {
  const ctx = useContext(SelectContext);
  const data = useMemo6(() => collectSelectItems(ctx?.children), [ctx?.children]);
  const placeholder = findSelectPlaceholder(children);
  return /* @__PURE__ */ jsx21(
    UiSelectAny,
    {
      id,
      "aria-label": ariaLabel,
      data,
      value: ctx?.value || null,
      onChange: (next) => ctx?.onValueChange?.(next ?? ""),
      clearable: false,
      size: size === "sm" ? "sm" : "md",
      density: size === "sm" ? "compact" : "default",
      style: fullWidth ? { width: "100%" } : void 0,
      ...placeholder ? { placeholder } : {}
    }
  );
}
function SelectValue(_props) {
  return null;
}
function SelectContent({ children }) {
  return /* @__PURE__ */ jsx21(Fragment3, { children });
}
function SelectItem(_props) {
  return null;
}
function SearchableSelect2({
  name,
  label,
  value,
  options,
  placeholder,
  emptyLabel,
  onPick
}) {
  return /* @__PURE__ */ jsx21(
    UiSearchableSelectAny,
    {
      name,
      label,
      value: value ?? "",
      options,
      ...placeholder ? { placeholder } : {},
      ...emptyLabel ? { emptyLabel } : {},
      ...onPick ? { onPick } : {}
    }
  );
}
function SegmentedControl2({
  options,
  value,
  onChange,
  disabled,
  fullWidth,
  ariaLabel,
  size = "md"
}) {
  return /* @__PURE__ */ jsx21(
    UiSegmentedControlAny,
    {
      data: options.map((option) => ({
        value: option.value,
        label: /* @__PURE__ */ jsxs10("span", { className: "material-segment-label", children: [
          option.icon,
          /* @__PURE__ */ jsx21("span", { children: option.label }),
          option.meta !== void 0 ? /* @__PURE__ */ jsx21("small", { children: option.meta }) : null
        ] })
      })),
      value,
      onChange: onChange ?? (() => void 0),
      ...disabled !== void 0 ? { disabled } : {},
      ...fullWidth !== void 0 ? { fullWidth } : {},
      "aria-label": ariaLabel,
      size: size === "lg" ? "md" : size
    }
  );
}
function SearchField({ children }) {
  return /* @__PURE__ */ jsx21("div", { className: "material-search-field", children });
}
function SearchFieldInput(props) {
  return /* @__PURE__ */ jsx21(UiSearchInputAny, { ...props, className: "material-search-field__input", variant: "filter" });
}
function Switch2({
  checked,
  onCheckedChange,
  ...props
}) {
  return /* @__PURE__ */ jsx21(
    Switch,
    {
      checked,
      onChange: (event) => onCheckedChange?.(event.currentTarget.checked),
      ...props
    }
  );
}
function Table2(props) {
  return /* @__PURE__ */ jsx21(Table, { "data-slot": "table", ...props });
}
TableHeader.displayName = "TableHeader";
function TableHeader(props) {
  return /* @__PURE__ */ jsx21(Table.Thead, { "data-slot": "table-header", ...props });
}
function TableBody(props) {
  return /* @__PURE__ */ jsx21(Table.Tbody, { "data-slot": "table-body", ...props });
}
function TableRow(props) {
  return /* @__PURE__ */ jsx21(Table.Tr, { "data-slot": "table-row", ...props });
}
function TableHead(props) {
  return /* @__PURE__ */ jsx21(Table.Th, { "data-slot": "table-head", ...props });
}
function TableCell(props) {
  return /* @__PURE__ */ jsx21(Table.Td, { "data-slot": "table-cell", ...props });
}
function TableFooter(props) {
  return /* @__PURE__ */ jsx21(Table.Tfoot, { "data-slot": "table-footer", ...props });
}
function TableCaption(props) {
  const Caption = Table.Caption;
  return /* @__PURE__ */ jsx21(Caption, { "data-slot": "table-caption", ...props });
}
var DialogContext = createContext(null);
function Dialog2({
  open,
  onOpenChange,
  children
}) {
  const [innerOpen, setInnerOpen] = useState7(false);
  const id = useId4();
  const actualOpen = open ?? innerOpen;
  const setOpen = (next) => {
    if (onOpenChange) onOpenChange(next);
    else setInnerOpen(next);
  };
  return /* @__PURE__ */ jsx21(
    DialogContext.Provider,
    {
      value: {
        open: actualOpen,
        setOpen,
        contentId: `${id}-content`
      },
      children
    }
  );
}
function DialogTrigger({ asChild, children }) {
  const ctx = useContext(DialogContext);
  if (asChild && isValidElement3(children)) {
    const child = children;
    return cloneElement2(child, {
      "aria-controls": ctx?.contentId,
      "aria-expanded": ctx?.open ?? false,
      "aria-haspopup": "dialog",
      "data-state": ctx?.open ? "open" : "closed",
      onClick: (event) => {
        child.props.onClick?.(event);
        ctx?.setOpen(true);
      }
    });
  }
  return /* @__PURE__ */ jsx21(
    Button3,
    {
      type: "button",
      "aria-controls": ctx?.contentId,
      "aria-expanded": ctx?.open ?? false,
      "aria-haspopup": "dialog",
      "data-state": ctx?.open ? "open" : "closed",
      onClick: () => ctx?.setOpen(true),
      children
    }
  );
}
function findDialogPart(children, target) {
  let match = null;
  Children.forEach(children, (child) => {
    if (match != null || !isValidElement3(child)) return;
    if (child.type === target) {
      match = child.props.children ?? null;
      return;
    }
    match = findDialogPart(child.props.children, target);
  });
  return match;
}
function removeDialogPart(children, target) {
  return Children.map(children, (child) => {
    if (!isValidElement3(child)) return child;
    if (child.type === target) return null;
    const element = child;
    if (!("children" in element.props)) return child;
    return cloneElement2(element, {
      children: removeDialogPart(element.props.children, target)
    });
  });
}
function DialogContent({
  children,
  className,
  onPointerDownOutside,
  onEscapeKeyDown,
  showCloseButton = true
}) {
  const ctx = useContext(DialogContext);
  const title = findDialogPart(children, DialogTitle);
  const body = removeDialogPart(children, DialogTitle);
  return /* @__PURE__ */ jsx21(
    Modal,
    {
      id: ctx?.contentId,
      opened: ctx?.open ?? false,
      onClose: () => ctx?.setOpen(false),
      title,
      className,
      closeOnClickOutside: !onPointerDownOutside,
      closeOnEscape: !onEscapeKeyDown,
      withCloseButton: showCloseButton,
      size: "lg",
      centered: true,
      children: /* @__PURE__ */ jsx21("div", { "data-slot": "dialog-content", className, children: body })
    }
  );
}
function DialogHeader(props) {
  return /* @__PURE__ */ jsx21("div", { "data-slot": "dialog-header", ...props });
}
function DialogTitle(props) {
  return /* @__PURE__ */ jsx21("h2", { "data-slot": "dialog-title", ...props });
}
function DialogDescription(props) {
  return /* @__PURE__ */ jsx21("p", { "data-slot": "dialog-description", ...props });
}
function DialogFooter({
  showCloseButton,
  children,
  ...props
}) {
  const ctx = useContext(DialogContext);
  return /* @__PURE__ */ jsxs10("div", { "data-slot": "dialog-footer", ...props, children: [
    children,
    showCloseButton ? /* @__PURE__ */ jsx21(Button3, { type: "button", variant: "outline", onClick: () => ctx?.setOpen(false), children: "\u5173\u95ED" }) : null
  ] });
}
function ManagedDialog({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  footer,
  size = "md",
  closeOnOverlay = true,
  closeOnEscape = true,
  showCloseButton = true
}) {
  const triggerElement = trigger ? cloneElement2(trigger, {
    onClick: (event) => {
      trigger.props.onClick?.(event);
      onOpenChange(true);
    }
  }) : null;
  return /* @__PURE__ */ jsxs10(Fragment3, { children: [
    triggerElement,
    /* @__PURE__ */ jsxs10(
      Modal,
      {
        opened: open,
        onClose: () => onOpenChange(false),
        title,
        size,
        closeOnClickOutside: closeOnOverlay,
        closeOnEscape,
        withCloseButton: showCloseButton,
        centered: true,
        children: [
          description ? /* @__PURE__ */ jsx21("p", { className: "material-dialog-description", children: description }) : null,
          children,
          footer ? /* @__PURE__ */ jsx21("div", { "data-slot": "dialog-footer", children: footer }) : null
        ]
      }
    )
  ] });
}
export {
  ActionIcon2 as ActionIcon,
  Alert,
  AlertDialog,
  Anchor,
  AppShell,
  AreaChart,
  Avatar,
  Badge,
  BarChart,
  Box4 as Box,
  BrandLockup,
  Button,
  COLORS,
  CONTROL_HEIGHT,
  CONTROL_PADDING_X,
  Card,
  ChartCard,
  ChartPrimitives,
  Checkbox2 as Checkbox,
  Combobox,
  DashboardGrid,
  DashboardGridItem,
  DashboardPage,
  DataSection,
  DataTable,
  DateInput,
  DatePicker,
  DatePickerInput,
  DefaultThemeProvider,
  DetailPage,
  Dialog,
  Divider,
  Drawer,
  Empty,
  EmptyState,
  ErrorState,
  FONT,
  FORM_LAYOUT,
  FileInput,
  FilterActive,
  FilterBar,
  FilterBatchBar,
  FilterFacet,
  FilterField,
  FilterRow,
  FilterSegment,
  FilterTerm,
  FilterToolbar,
  FilterWorkspace,
  FormField,
  FormSection,
  Grid,
  Group5 as Group,
  HStack,
  Icon,
  IconButton,
  IconSearch4 as IconSearch,
  ImageGalleryUpload,
  InputGroup,
  KpiGrid,
  List,
  ListItem,
  ListPage,
  MOTION,
  Badge2 as MaterialBadge,
  Button3 as MaterialButton,
  DatePicker2 as MaterialDatePicker,
  Dialog2 as MaterialDialog,
  DialogContent as MaterialDialogContent,
  DialogDescription as MaterialDialogDescription,
  DialogFooter as MaterialDialogFooter,
  DialogHeader as MaterialDialogHeader,
  DialogTitle as MaterialDialogTitle,
  DialogTrigger as MaterialDialogTrigger,
  EmptyState2 as MaterialEmptyState,
  FormActions as MaterialFormActions,
  FormField2 as MaterialFormField,
  FormGrid as MaterialFormGrid,
  FormSection2 as MaterialFormSection,
  Icon2 as MaterialIcon,
  Input as MaterialInput,
  Label as MaterialLabel,
  ManagedDialog as MaterialManagedDialog,
  PageHeader2 as MaterialPageHeader,
  PageToolbar as MaterialPageToolbar,
  SearchField as MaterialSearchField,
  SearchFieldInput as MaterialSearchFieldInput,
  SearchableSelect2 as MaterialSearchableSelect,
  SectionHeader2 as MaterialSectionHeader,
  SegmentedControl2 as MaterialSegmentedControl,
  Select3 as MaterialSelect,
  SelectContent as MaterialSelectContent,
  SelectItem as MaterialSelectItem,
  SelectTrigger as MaterialSelectTrigger,
  SelectValue as MaterialSelectValue,
  Switch2 as MaterialSwitch,
  Table2 as MaterialTable,
  TableBody as MaterialTableBody,
  TableCaption as MaterialTableCaption,
  TableCell as MaterialTableCell,
  TableFooter as MaterialTableFooter,
  TableHead as MaterialTableHead,
  TableHeader as MaterialTableHeader,
  TableRow as MaterialTableRow,
  Textarea3 as MaterialTextarea,
  Menu,
  MetadataList,
  MobileNav,
  Modal,
  MultiSelector,
  NumberInput,
  PageCanvas,
  PageHeader,
  PageShell,
  Pagination,
  Paper,
  PermissionDeniedState,
  Popover,
  ProgressBar,
  RADIUS,
  SHADOWS,
  SHELL_GEOMETRY,
  SearchInput,
  SearchableSelect,
  SectionHeader,
  SegmentedControl,
  Select,
  SettingsPage,
  ShellTabs,
  SideNav,
  SimpleGrid2 as SimpleGrid,
  Skeleton,
  Slider,
  Spinner,
  SpotlightSearch,
  Stack3 as Stack,
  StatCard,
  StatusDot,
  Switch,
  TAG_COLORS,
  TYPOGRAPHY,
  Table,
  Tabs,
  Tag,
  Text6 as Text,
  TextArea,
  TextInput,
  Textarea,
  ThemeProvider,
  Thumbnail,
  Title,
  ToastRegion,
  Tooltip2 as Tooltip,
  TopBar,
  TrendBadge,
  UnstyledButton,
  VijimProvider,
  WORKFLOW_STEP_COLORS,
  hasLength,
  isEmail,
  isNotEmpty,
  notify,
  publicComponents,
  spotlight,
  useCombobox,
  useDebouncedValue,
  useDisclosure,
  useForm,
  useMediaQuery,
  vijimTheme
};
//# sourceMappingURL=index.js.map