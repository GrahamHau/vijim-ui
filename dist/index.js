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
  /** 芯片 / 选中滑块 */
  xs: "0 1px 2px rgba(18, 19, 23, 0.05), 0 0 0 1px rgba(18, 19, 23, 0.03)",
  /** 筛选壳 / 卡片 */
  sm: "0 1px 2px rgba(18, 19, 23, 0.04), 0 4px 16px rgba(18, 19, 23, 0.05)",
  /** 下拉 / popover */
  md: "0 2px 8px rgba(18, 19, 23, 0.05), 0 12px 32px rgba(18, 19, 23, 0.07)",
  /** 模态 */
  lg: "0 4px 16px rgba(18, 19, 23, 0.06), 0 24px 48px rgba(18, 19, 23, 0.1)",
  xl: "0 8px 28px rgba(18, 19, 23, 0.08), 0 32px 64px rgba(18, 19, 23, 0.12)"
};
var FONT = {
  family: '"SF Pro Text","SF Pro Display",-apple-system,BlinkMacSystemFont,"Helvetica Neue","Segoe UI","PingFang SC","Microsoft YaHei",sans-serif',
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
  /** 字距按尺寸：大标题收紧，正文 ~0 */
  tracking: {
    display: "-0.022em",
    title: "-0.015em",
    body: "0",
    caption: "0.01em"
  },
  leading: {
    display: 1.15,
    title: 1.25,
    body: 1.5,
    dense: 1.35
  }
};
var ROOT = {
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
  ai: "#9065B0"
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
  "#F1F3F6",
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
  "--tracking-display": FONT.tracking.display
};

// src/theme/vijim-theme.ts
var fieldInput = {
  height: CONTROL_HEIGHT.md,
  minHeight: CONTROL_HEIGHT.md,
  fontSize: FONT.sizes.sm,
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
        title: {
          fontWeight: 600,
          fontSize: FONT.sizes.md,
          color: COLORS.ink,
          letterSpacing: FONT.tracking.title
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
          fontWeight: 600,
          fontSize: FONT.sizes.md,
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
    /** 与 FilterSegment 同气质：外框 + 框内白底按钮滑块 + 短 ease-out */
    SegmentedControl: {
      defaultProps: { size: "sm", radius: "md", withItemsBorders: false },
      styles: {
        root: {
          backgroundColor: COLORS.surfaceMuted,
          border: `1px solid ${COLORS.border}`,
          padding: 3,
          borderRadius: RADIUS.segment
        },
        label: {
          fontWeight: 500,
          fontSize: FONT.sizes.sm,
          color: COLORS.mutedFg,
          transition: `color ${MOTION.fast} ${MOTION.easeOut}`
        },
        indicator: {
          backgroundColor: COLORS.surface,
          border: "none",
          borderRadius: RADIUS.sm,
          boxShadow: SHADOWS.xs,
          transition: `transform ${MOTION.normal} ${MOTION.springish}, box-shadow ${MOTION.fast} ${MOTION.easeOut}`
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
import { MantineProvider } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { useMemo } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
dayjs.locale("zh-cn");
function buildRootCss() {
  const decls = Object.entries(STUDIO_CSS_VARS).map(([k, v]) => `${k}:${v}`).join(";");
  return `:root{color-scheme:light;font-family:${FONT.family};${decls}}html,body{background:${COLORS.background};color:${COLORS.ink}}`;
}
function VijimProvider({
  children,
  theme = vijimTheme,
  withNotifications = true,
  withModals = true
}) {
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
    withModals ? /* @__PURE__ */ jsx(ModalsProvider, { children: tree }) : tree
  ] });
}

// src/components/Button.tsx
import {
  Button as MantineButton
} from "@mantine/core";
import { forwardRef } from "react";
import { jsx as jsx2 } from "react/jsx-runtime";
function mapVariant(v) {
  if (v === "ghost") return "subtle";
  return v;
}
var Button = forwardRef(
  function Button2({ variant = "filled", size = "sm", color = "brand", ...props }, ref) {
    const isDestructive = color === "red" && (variant === "filled" || variant === "light");
    return /* @__PURE__ */ jsx2(
      MantineButton,
      {
        ref,
        variant: mapVariant(variant),
        size,
        color: isDestructive ? "red" : color,
        ...props
      }
    );
  }
);

// src/components/TextInput.tsx
import {
  TextInput as MantineTextInput
} from "@mantine/core";
import { forwardRef as forwardRef2 } from "react";
import { jsx as jsx3 } from "react/jsx-runtime";
var TextInput = forwardRef2(
  function TextInput2({ size = "md", leftSection, rightSection, styles, ...props }, ref) {
    const hasLeft = Boolean(leftSection);
    const hasRight = Boolean(rightSection);
    return /* @__PURE__ */ jsx3(
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
        ...props
      }
    );
  }
);

// src/components/Textarea.tsx
import {
  Textarea as MantineTextarea
} from "@mantine/core";
import { forwardRef as forwardRef3 } from "react";
import { jsx as jsx4 } from "react/jsx-runtime";
var Textarea = forwardRef3(
  function Textarea2({ size = "sm", ...props }, ref) {
    return /* @__PURE__ */ jsx4(MantineTextarea, { ref, size, ...props });
  }
);

// src/components/SearchInput.tsx
import { IconSearch, IconX } from "@tabler/icons-react";
import { ActionIcon, Box } from "@mantine/core";
import { forwardRef as forwardRef4 } from "react";
import { jsx as jsx5, jsxs as jsxs2 } from "react/jsx-runtime";
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
    ...props
  }, ref) {
    const hasValue = typeof value === "string" ? value.length > 0 : Boolean(value);
    const clearBtn = clearable && hasValue ? /* @__PURE__ */ jsx5(
      ActionIcon,
      {
        variant: "subtle",
        color: "gray",
        size: "sm",
        "aria-label": "\u6E05\u7A7A",
        onClick: () => {
          onClear?.();
          onChange?.({
            currentTarget: { value: "" }
          });
        },
        children: /* @__PURE__ */ jsx5(IconX, { size: 14, stroke: 1.5 })
      }
    ) : rightSection;
    if (variant === "filter") {
      const {
        disabled,
        name,
        id,
        "aria-label": ariaLabel,
        autoFocus
      } = props;
      return /* @__PURE__ */ jsxs2(
        Box,
        {
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
            transition: "border-color 0.15s ease, color 0.15s ease"
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
            /* @__PURE__ */ jsx5(IconSearch, { size: 15, stroke: 1.5, style: { flex: "none" } }),
            /* @__PURE__ */ jsx5(
              "input",
              {
                ref,
                type: "search",
                placeholder,
                value,
                defaultValue,
                onChange,
                onFocus,
                onKeyDown,
                spellCheck,
                disabled,
                name,
                id,
                "aria-label": ariaLabel,
                autoFocus,
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
    return /* @__PURE__ */ jsx5(
      TextInput,
      {
        ref,
        type: "search",
        size: "md",
        placeholder,
        leftSection: /* @__PURE__ */ jsx5(IconSearch, { size: 16, stroke: 1.5 }),
        rightSection: clearBtn,
        value,
        defaultValue,
        onChange,
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
    );
  }
);

// src/components/Select.tsx
import {
  Select as MantineSelect
} from "@mantine/core";
import {
  forwardRef as forwardRef5,
  useMemo as useMemo2
} from "react";
import { jsx as jsx6 } from "react/jsx-runtime";
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
var Select = forwardRef5(
  function Select2({
    size = "md",
    density = "default",
    leftSection,
    rightSection,
    styles,
    comboboxProps,
    clearable = true,
    nothingFoundMessage = "\u65E0\u5339\u914D",
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
    return /* @__PURE__ */ jsx6(
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
        ...props
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
  return /* @__PURE__ */ jsx6(
    Select,
    {
      name,
      "aria-label": label,
      data,
      value: controlled ? value || null : void 0,
      defaultValue: !controlled ? defaultValue != null && defaultValue !== "" ? defaultValue : null : void 0,
      onChange: (v) => {
        onChange?.(v);
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
import { IconCalendar } from "@tabler/icons-react";
import { forwardRef as forwardRef6, useMemo as useMemo3 } from "react";

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
import { jsx as jsx7 } from "react/jsx-runtime";
var DatePickerInput = forwardRef6(
  function DatePickerInput2({
    size = "md",
    value,
    defaultValue,
    onChange,
    leftSection,
    styles,
    ...props
  }, ref) {
    const dateValue = useMemo3(
      () => value === void 0 ? void 0 : fromDateString(value ?? null),
      [value]
    );
    const defaultDate = useMemo3(
      () => defaultValue === void 0 ? void 0 : fromDateString(defaultValue ?? null),
      [defaultValue]
    );
    return /* @__PURE__ */ jsx7(
      MantineDatePickerInput,
      {
        ref,
        size,
        valueFormat: "YYYY-MM-DD",
        value: dateValue,
        defaultValue: defaultDate,
        leftSection: leftSection ?? /* @__PURE__ */ jsx7(IconCalendar, { size: 16, stroke: 1.5 }),
        leftSectionPointerEvents: "none",
        onChange: (next) => {
          onChange?.(toDateString(next));
        },
        styles: (theme, styleProps, ctx) => {
          const base = typeof styles === "function" ? styles(theme, styleProps, ctx) : styles ?? {};
          return {
            ...base,
            input: {
              ...typeof base === "object" && base && "input" in base ? base.input : {},
              paddingInlineStart: SECTION_OFFSET.left
            },
            section: { width: SECTION_OFFSET.left }
          };
        },
        ...props
      }
    );
  }
);
var DateInput = forwardRef6(
  function DateInput2({
    size = "sm",
    value,
    defaultValue,
    onChange,
    leftSection,
    styles,
    ...props
  }, ref) {
    const dateValue = useMemo3(
      () => value === void 0 ? void 0 : fromDateString(value ?? null),
      [value]
    );
    const defaultDate = useMemo3(
      () => defaultValue === void 0 ? void 0 : fromDateString(defaultValue ?? null),
      [defaultValue]
    );
    return /* @__PURE__ */ jsx7(
      MantineDateInput,
      {
        ref,
        size,
        valueFormat: "YYYY-MM-DD",
        value: dateValue,
        defaultValue: defaultDate,
        leftSection: leftSection ?? /* @__PURE__ */ jsx7(IconCalendar, { size: 16, stroke: 1.5 }),
        leftSectionPointerEvents: "none",
        onChange: (next) => {
          onChange?.(toDateString(next));
        },
        styles: (theme, styleProps, ctx) => {
          const base = typeof styles === "function" ? styles(theme, styleProps, ctx) : styles ?? {};
          return {
            ...base,
            input: {
              ...typeof base === "object" && base && "input" in base ? base.input : {},
              paddingInlineStart: SECTION_OFFSET.left
            },
            section: { width: SECTION_OFFSET.left }
          };
        },
        ...props
      }
    );
  }
);

// src/components/Overlay.tsx
import {
  Modal as MantineModal,
  Drawer as MantineDrawer
} from "@mantine/core";
import { jsx as jsx8 } from "react/jsx-runtime";
function Modal(props) {
  return /* @__PURE__ */ jsx8(MantineModal, { ...props });
}
function Drawer(props) {
  return /* @__PURE__ */ jsx8(MantineDrawer, { ...props });
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
import { jsx as jsx9 } from "react/jsx-runtime";
function Tabs(props) {
  return /* @__PURE__ */ jsx9(MantineTabs, { ...props });
}
Tabs.List = MantineTabs.List;
Tabs.Tab = MantineTabs.Tab;
Tabs.Panel = MantineTabs.Panel;
function SegmentedControl(props) {
  return /* @__PURE__ */ jsx9(MantineSegmentedControl, { size: props.size ?? "sm", ...props });
}
function Pagination(props) {
  return /* @__PURE__ */ jsx9(MantinePagination, { size: props.size ?? "sm", ...props });
}
function Menu(props) {
  return /* @__PURE__ */ jsx9(MantineMenu, { ...props });
}
Menu.Target = MantineMenu.Target;
Menu.Dropdown = MantineMenu.Dropdown;
Menu.Item = MantineMenu.Item;
Menu.Label = MantineMenu.Label;
Menu.Divider = MantineMenu.Divider;
function Popover(props) {
  return /* @__PURE__ */ jsx9(MantinePopover, { ...props });
}
Popover.Target = MantinePopover.Target;
Popover.Dropdown = MantinePopover.Dropdown;
function Tooltip(props) {
  return /* @__PURE__ */ jsx9(MantineTooltip, { ...props });
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
import { Checkbox, Group, Text as Text2 } from "@mantine/core";
import { useMemo as useMemo4, useState } from "react";

// src/components/Table.tsx
import {
  Table as MantineTable
} from "@mantine/core";
import { jsx as jsx10 } from "react/jsx-runtime";
function Table(props) {
  return /* @__PURE__ */ jsx10(MantineTable, { ...props });
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
import { jsx as jsx11, jsxs as jsxs3 } from "react/jsx-runtime";
function Empty({
  title = "\u6682\u65E0\u5185\u5BB9",
  description,
  action,
  icon
}) {
  return /* @__PURE__ */ jsx11(Center, { py: 40, px: "md", children: /* @__PURE__ */ jsxs3(Stack, { align: "center", gap: "sm", maw: 360, children: [
    icon,
    /* @__PURE__ */ jsx11(Text, { fw: 600, size: "sm", c: COLORS.ink, children: title }),
    description ? /* @__PURE__ */ jsx11(Text, { size: "sm", c: "dimmed", ta: "center", children: description }) : null,
    action
  ] }) });
}
function Skeleton(props) {
  return /* @__PURE__ */ jsx11(MantineSkeleton, { ...props });
}
function Spinner({ label, size = "sm" }) {
  return /* @__PURE__ */ jsx11(Center, { py: "xl", children: /* @__PURE__ */ jsxs3(Stack, { align: "center", gap: "sm", children: [
    /* @__PURE__ */ jsx11(Loader, { size, color: "brand", type: "dots" }),
    label ? /* @__PURE__ */ jsx11(Text, { size: "sm", c: "dimmed", children: label }) : null
  ] }) });
}

// src/components/DataTable.tsx
import { jsx as jsx12, jsxs as jsxs4 } from "react/jsx-runtime";
function DataTable({
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
  const [sorting, setSorting] = useState([]);
  const [internalSelection, setInternalSelection] = useState(
    {}
  );
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: pageSize ?? 20
  });
  const selection = controlledSelection ?? internalSelection;
  const setSelection = onRowSelectionChange ?? setInternalSelection;
  const cols = useMemo4(() => {
    if (!selectable) return columns;
    const selectCol = {
      id: "__select",
      size: 40,
      header: ({ table: table2 }) => /* @__PURE__ */ jsx12(
        Checkbox,
        {
          "aria-label": "\u5168\u9009",
          checked: table2.getIsAllPageRowsSelected(),
          indeterminate: table2.getIsSomePageRowsSelected(),
          onChange: table2.getToggleAllPageRowsSelectedHandler()
        }
      ),
      cell: ({ row }) => /* @__PURE__ */ jsx12(
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
  return /* @__PURE__ */ jsxs4("div", { children: [
    toolbar ? /* @__PURE__ */ jsx12("div", { style: { marginBottom: 12 }, children: toolbar }) : null,
    /* @__PURE__ */ jsx12(Table.ScrollContainer, { minWidth: 640, maxHeight, children: /* @__PURE__ */ jsxs4(
      Table,
      {
        highlightOnHover: true,
        horizontalSpacing: "md",
        verticalSpacing: "sm",
        stickyHeader: Boolean(maxHeight),
        children: [
          /* @__PURE__ */ jsx12(Table.Thead, { children: table.getHeaderGroups().map((hg) => /* @__PURE__ */ jsx12(Table.Tr, { children: hg.headers.map((header) => /* @__PURE__ */ jsxs4(
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
          /* @__PURE__ */ jsx12(Table.Tbody, { children: loading ? /* @__PURE__ */ jsx12(Table.Tr, { children: /* @__PURE__ */ jsx12(Table.Td, { colSpan: cols.length, children: /* @__PURE__ */ jsx12(Text2, { c: "dimmed", size: "sm", ta: "center", py: "lg", children: "\u52A0\u8F7D\u4E2D\u2026" }) }) }) : rows.length === 0 ? /* @__PURE__ */ jsx12(Table.Tr, { children: /* @__PURE__ */ jsx12(Table.Td, { colSpan: cols.length, children: /* @__PURE__ */ jsx12(Empty, { title: emptyTitle, description: emptyDescription }) }) }) : rows.map((row) => /* @__PURE__ */ jsx12(
            Table.Tr,
            {
              "data-selected": row.getIsSelected() || void 0,
              style: {
                cursor: onRowClick ? "pointer" : void 0,
                backgroundColor: row.getIsSelected() ? "rgba(51, 112, 255, 0.06)" : void 0
              },
              onClick: () => onRowClick?.(row.original),
              children: row.getVisibleCells().map((cell) => /* @__PURE__ */ jsx12(Table.Td, { children: flexRender(
                cell.column.columnDef.cell,
                cell.getContext()
              ) }, cell.id))
            },
            row.id
          )) })
        ]
      }
    ) }),
    pageSize && pageCount > 1 ? /* @__PURE__ */ jsxs4(Group, { justify: "space-between", mt: "md", children: [
      /* @__PURE__ */ jsxs4(Text2, { size: "sm", c: "dimmed", children: [
        "\u5171 ",
        data.length,
        " \u6761"
      ] }),
      /* @__PURE__ */ jsx12(
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
import { Box as Box2, Group as Group2, Stack as Stack2, Text as Text3, UnstyledButton } from "@mantine/core";
import { jsx as jsx13, jsxs as jsxs5 } from "react/jsx-runtime";
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
  return /* @__PURE__ */ jsxs5(
    Box2,
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
        /* @__PURE__ */ jsx13(Box2, { px: "md", py: "md", children }),
        active != null || onClear ? /* @__PURE__ */ jsx13(
          Box2,
          {
            px: "md",
            py: "xs",
            style: {
              borderTop: `1px solid ${COLORS.border}`,
              backgroundColor: COLORS.surface2,
              borderRadius: `0 0 ${PANEL.radius} ${PANEL.radius}`
            },
            children: /* @__PURE__ */ jsxs5(Group2, { justify: "space-between", align: "center", gap: "sm", wrap: "wrap", children: [
              /* @__PURE__ */ jsx13(Box2, { style: { flex: 1, minWidth: 0 }, children: active ?? /* @__PURE__ */ jsx13(Text3, { size: "xs", c: "dimmed", children: "\u672A\u8BBE\u7F6E\u7B5B\u9009" }) }),
              onClear ? /* @__PURE__ */ jsx13(Button, { variant: "subtle", color: "gray", size: "sm", onClick: onClear, children: clearLabel }) : null
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
  return /* @__PURE__ */ jsxs5(Stack2, { gap: "sm", children: [
    /* @__PURE__ */ jsxs5(Group2, { align: "center", gap: "md", wrap: "wrap", children: [
      /* @__PURE__ */ jsx13(Box2, { style: { flex: "1 1 260px", minWidth: 200, maxWidth: 480 }, children: search }),
      /* @__PURE__ */ jsxs5(Group2, { gap: "xs", wrap: "nowrap", ml: "auto", align: "center", children: [
        resultText ? /* @__PURE__ */ jsx13(Text3, { size: "xs", c: "dimmed", ff: "monospace", children: resultText }) : null,
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
  return /* @__PURE__ */ jsxs5(
    Group2,
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
        /* @__PURE__ */ jsxs5(Text3, { size: "sm", c: COLORS.inkSecondary, children: [
          "\u5DF2\u9009",
          " ",
          /* @__PURE__ */ jsx13(Text3, { span: true, fw: 650, c: COLORS.ink, ff: "monospace", children: selectedCount }),
          " ",
          "\u9879"
        ] }),
        /* @__PURE__ */ jsx13(Group2, { gap: "xs", children })
      ]
    }
  );
}
function FilterRow({ children, label }) {
  return /* @__PURE__ */ jsxs5(Group2, { gap: 6, align: "center", wrap: "wrap", children: [
    label ? /* @__PURE__ */ jsx13(Text3, { size: "xs", c: "dimmed", style: { flex: "none" }, children: label }) : null,
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
    return /* @__PURE__ */ jsxs5(Stack2, { gap: 4, style: { flex: grow ? "1 1 200px" : void 0, minWidth }, children: [
      label ? /* @__PURE__ */ jsx13(Text3, { size: "xs", c: "dimmed", fw: 500, children: label }) : null,
      children
    ] });
  }
  return /* @__PURE__ */ jsxs5(
    Group2,
    {
      gap: 6,
      align: "center",
      wrap: "nowrap",
      style: { flex: grow ? "1 1 200px" : void 0, minWidth },
      children: [
        label ? /* @__PURE__ */ jsx13(Text3, { size: "xs", c: "dimmed", style: { flex: "none" }, children: label }) : null,
        /* @__PURE__ */ jsx13(Box2, { style: { flex: 1, minWidth: 0 }, children })
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
  return /* @__PURE__ */ jsx13(
    Group2,
    {
      gap: 2,
      align: "center",
      wrap: "nowrap",
      role: "radiogroup",
      "aria-label": ariaLabel,
      p: 2,
      style: {
        display: "inline-flex",
        backgroundColor: COLORS.muted,
        border: `1px solid ${COLORS.border}`,
        borderRadius: RADIUS.segment,
        boxShadow: "none"
      },
      children: options.map((opt) => {
        const selected = opt.value === value;
        const press = pressHandlers(disabled);
        return /* @__PURE__ */ jsxs5(
          UnstyledButton,
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
              minHeight: 26,
              paddingInline: 12,
              borderRadius: RADIUS.sm,
              border: "none",
              // 选中 = 白底「按钮」浮在灰框上；未选 = 透明
              backgroundColor: selected ? COLORS.surface : "transparent",
              color: selected ? COLORS.ink : COLORS.mutedFg,
              fontSize: 13,
              fontWeight: selected ? 600 : 500,
              fontFamily: "inherit",
              lineHeight: 1.2,
              whiteSpace: "nowrap",
              cursor: disabled ? "not-allowed" : "pointer",
              opacity: disabled ? 0.45 : 1,
              boxShadow: selected ? SHADOWS.xs : "none",
              transition: [
                `background-color ${MOTION.fast} ${MOTION.easeOut}`,
                `color ${MOTION.fast} ${MOTION.easeOut}`,
                `box-shadow ${MOTION.fast} ${MOTION.easeOut}`,
                `transform ${MOTION.press} ${MOTION.easeOut}`
              ].join(", ")
            },
            onMouseEnter: (e) => {
              if (disabled || selected) return;
              e.currentTarget.style.color = COLORS.ink2;
            },
            onMouseLeave: (e) => {
              press.onMouseLeave(e);
              if (disabled || selected) return;
              e.currentTarget.style.color = COLORS.mutedFg;
            },
            onMouseDown: press.onMouseDown,
            onMouseUp: press.onMouseUp,
            children: [
              opt.label,
              opt.count !== void 0 ? /* @__PURE__ */ jsx13(
                Text3,
                {
                  component: "span",
                  ff: "monospace",
                  style: {
                    fontSize: 11,
                    fontWeight: selected ? 560 : 450,
                    color: selected ? COLORS.inkSecondary : COLORS.faint,
                    opacity: selected ? 0.8 : 1,
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
  count,
  selected = false,
  onClick,
  disabled = false
}) {
  const press = pressHandlers(disabled);
  return /* @__PURE__ */ jsxs5(
    UnstyledButton,
    {
      type: "button",
      onClick,
      disabled,
      "aria-pressed": selected,
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 4,
        minHeight: 28,
        paddingInline: 10,
        borderRadius: RADIUS.term,
        border: "none",
        backgroundColor: selected ? COLORS.termSelectedBg : "transparent",
        // 飞书选中：浅蓝底 + 品牌蓝字亮起，无描边
        color: selected ? COLORS.termSelectedInk : COLORS.mutedFg,
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
        label,
        count !== void 0 ? /* @__PURE__ */ jsx13(
          Text3,
          {
            component: "span",
            ff: "monospace",
            style: {
              fontSize: 11,
              fontWeight: selected ? 560 : 450,
              // 选中时数字也跟字一起亮蓝，略透明
              color: selected ? COLORS.termSelectedInk : COLORS.faint,
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
  return /* @__PURE__ */ jsxs5(Group2, { gap: 14, align: "flex-start", wrap: "nowrap", children: [
    /* @__PURE__ */ jsx13(
      Text3,
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
    /* @__PURE__ */ jsxs5(Group2, { gap: 4, align: "center", wrap: "wrap", style: { flex: 1, minWidth: 0 }, children: [
      showAll ? /* @__PURE__ */ jsx13(
        FilterTerm,
        {
          label: allLabel,
          selected: value == null || value === "",
          onClick: () => onChange(null)
        }
      ) : null,
      options.map((opt) => /* @__PURE__ */ jsx13(
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
    return /* @__PURE__ */ jsx13(Text3, { size: "xs", c: "dimmed", children: emptyText });
  }
  return /* @__PURE__ */ jsxs5(Group2, { gap: "sm", align: "center", wrap: "wrap", children: [
    /* @__PURE__ */ jsx13(Text3, { size: "xs", c: "dimmed", style: { flex: "none" }, children: "\u5DF2\u9009" }),
    items.map((item) => /* @__PURE__ */ jsxs5(
      Group2,
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
          /* @__PURE__ */ jsx13(Text3, { size: "xs", c: COLORS.ink, fw: 500, children: item.label }),
          item.onRemove ? /* @__PURE__ */ jsx13(
            UnstyledButton,
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
    onClearAll ? /* @__PURE__ */ jsx13(
      UnstyledButton,
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

// src/components/FormSection.tsx
import { Box as Box3, SimpleGrid, Stack as Stack3, Text as Text4, Title } from "@mantine/core";
import { jsx as jsx14, jsxs as jsxs6 } from "react/jsx-runtime";
function FormSection({
  title,
  description,
  children,
  cols = 2
}) {
  return /* @__PURE__ */ jsx14(
    Box3,
    {
      p: "lg",
      style: {
        backgroundColor: COLORS.surface,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 10
      },
      children: /* @__PURE__ */ jsxs6(Stack3, { gap: "md", children: [
        /* @__PURE__ */ jsxs6("div", { children: [
          /* @__PURE__ */ jsx14(Title, { order: 4, children: title }),
          description ? /* @__PURE__ */ jsx14(Text4, { size: "sm", c: "dimmed", mt: 4, children: description }) : null
        ] }),
        /* @__PURE__ */ jsx14(SimpleGrid, { cols: { base: 1, sm: cols }, spacing: "md", children })
      ] })
    }
  );
}

// src/components/Shell.tsx
import {
  AppShell as MantineAppShell,
  Box as Box4,
  Burger,
  Group as Group3,
  Stack as Stack4,
  Text as Text5,
  UnstyledButton as UnstyledButton2
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Fragment, jsx as jsx15, jsxs as jsxs7 } from "react/jsx-runtime";
var SHELL = {
  headerH: 60,
  brandH: 76,
  navbarW: 246,
  contentPadX: 24,
  contentPadY: 20,
  sideItemRadius: 8,
  sideItemMinH: 36
};
function TopBar({
  title,
  context,
  badge,
  actions,
  backHref,
  backLabel = "\u8FD4\u56DE",
  sticky = true,
  onBack
}) {
  return /* @__PURE__ */ jsxs7(
    Box4,
    {
      component: "header",
      style: {
        boxSizing: "border-box",
        position: sticky ? "sticky" : "relative",
        top: sticky ? 0 : void 0,
        zIndex: sticky ? 30 : void 0,
        display: "flex",
        alignItems: "center",
        width: "100%",
        minWidth: 0,
        height: SHELL.headerH,
        gap: 12,
        padding: `0 ${SHELL.contentPadX}px`,
        borderBottom: `1px solid ${COLORS.border}`,
        background: COLORS.surface
      },
      children: [
        backHref != null || onBack ? /* @__PURE__ */ jsxs7(Fragment, { children: [
          /* @__PURE__ */ jsxs7(
            UnstyledButton2,
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
                /* @__PURE__ */ jsx15("span", { "aria-hidden": true, children: "\u2190" }),
                backLabel
              ]
            }
          ),
          /* @__PURE__ */ jsx15(
            Box4,
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
        /* @__PURE__ */ jsxs7(Group3, { gap: 8, align: "center", style: { flex: 1, minWidth: 0 }, wrap: "nowrap", children: [
          /* @__PURE__ */ jsx15(
            Text5,
            {
              component: "h1",
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
          context != null ? /* @__PURE__ */ jsxs7(Fragment, { children: [
            /* @__PURE__ */ jsx15(Text5, { c: "dimmed", size: "xs", style: { flex: "none" }, children: "\xB7" }),
            /* @__PURE__ */ jsx15(
              Text5,
              {
                size: "xs",
                c: "dimmed",
                style: {
                  minWidth: 0,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  whiteSpace: "nowrap"
                },
                children: context
              }
            )
          ] }) : null
        ] }),
        actions != null ? /* @__PURE__ */ jsx15(Group3, { gap: 8, align: "center", style: { flex: "none", marginLeft: "auto" }, children: actions }) : null
      ]
    }
  );
}
function AppShell({
  brand = "VIJIM STUDIO",
  brandHint,
  navItems = [],
  headerRight,
  headerCenter,
  children,
  navbarWidth = SHELL.navbarW,
  withHeader = true
}) {
  const [opened, { toggle }] = useDisclosure();
  return /* @__PURE__ */ jsxs7(
    MantineAppShell,
    {
      header: withHeader ? { height: SHELL.headerH } : void 0,
      navbar: {
        width: navbarWidth,
        breakpoint: "sm",
        collapsed: { mobile: !opened }
      },
      padding: 0,
      styles: {
        root: { minHeight: "100vh", background: COLORS.body },
        main: {
          background: COLORS.body,
          minHeight: withHeader ? `calc(100vh - ${SHELL.headerH}px)` : "100vh"
        },
        header: {
          background: COLORS.surface,
          borderBottom: `1px solid ${COLORS.border}`,
          boxShadow: "none"
        },
        navbar: {
          background: COLORS.surface,
          borderRight: `1px solid ${COLORS.border}`
        }
      },
      children: [
        withHeader ? /* @__PURE__ */ jsx15(MantineAppShell.Header, { px: SHELL.contentPadX, children: /* @__PURE__ */ jsxs7(Group3, { h: "100%", justify: "space-between", wrap: "nowrap", gap: "md", children: [
          /* @__PURE__ */ jsxs7(Group3, { gap: "sm", wrap: "nowrap", children: [
            /* @__PURE__ */ jsx15(
              Burger,
              {
                opened,
                onClick: toggle,
                hiddenFrom: "sm",
                size: "sm",
                color: COLORS.inkSecondary
              }
            ),
            /* @__PURE__ */ jsx15(
              Text5,
              {
                fw: 650,
                size: "sm",
                c: COLORS.ink,
                style: { letterSpacing: "-0.01em", whiteSpace: "nowrap" },
                hiddenFrom: "sm",
                children: brand
              }
            )
          ] }),
          headerCenter ? /* @__PURE__ */ jsx15(
            Box4,
            {
              style: {
                flex: 1,
                minWidth: 0,
                display: "flex",
                justifyContent: "flex-start"
              },
              children: headerCenter
            }
          ) : /* @__PURE__ */ jsx15(Box4, { style: { flex: 1 } }),
          headerRight
        ] }) }) : null,
        /* @__PURE__ */ jsxs7(
          MantineAppShell.Navbar,
          {
            p: 0,
            style: { display: "flex", flexDirection: "column" },
            children: [
              /* @__PURE__ */ jsx15(
                Box4,
                {
                  style: {
                    height: SHELL.brandH,
                    display: "flex",
                    alignItems: "center",
                    padding: "0 12px 0 26px",
                    flex: "none"
                  },
                  children: /* @__PURE__ */ jsxs7(Stack4, { gap: 2, children: [
                    /* @__PURE__ */ jsx15(
                      Text5,
                      {
                        fw: 650,
                        size: "sm",
                        c: COLORS.ink,
                        style: { letterSpacing: "-0.01em" },
                        children: brand
                      }
                    ),
                    brandHint ? /* @__PURE__ */ jsx15(Text5, { size: "xs", c: "dimmed", lineClamp: 1, children: brandHint }) : null
                  ] })
                }
              ),
              /* @__PURE__ */ jsx15(Stack4, { gap: 0, style: { flex: 1, padding: "12px 12px 18px" }, children: navItems.map((item) => {
                if (item.section) {
                  return /* @__PURE__ */ jsx15(
                    Text5,
                    {
                      style: {
                        display: "flex",
                        alignItems: "center",
                        minHeight: 28,
                        margin: "0 6px 5px",
                        padding: "7px 0 6px",
                        borderBottom: `1px solid ${COLORS.border}`,
                        color: COLORS.faint,
                        fontSize: 11.5,
                        fontWeight: 650,
                        letterSpacing: "0.2px",
                        marginTop: 10
                      },
                      children: item.section
                    },
                    item.key
                  );
                }
                return /* @__PURE__ */ jsxs7(
                  Box4,
                  {
                    component: item.href ? "a" : "button",
                    href: item.href,
                    onClick: item.onClick,
                    style: {
                      position: "relative",
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      minHeight: SHELL.sideItemMinH,
                      padding: "8px 13px",
                      marginBottom: 3,
                      border: "1px solid transparent",
                      width: "100%",
                      textAlign: "left",
                      textDecoration: "none",
                      cursor: "pointer",
                      borderRadius: SHELL.sideItemRadius,
                      backgroundColor: item.active ? COLORS.selectedBg : "transparent",
                      color: item.active ? COLORS.selectedInk : COLORS.inkSecondary,
                      fontWeight: item.active ? 600 : 500,
                      fontSize: 13.5,
                      lineHeight: 1.35,
                      fontFamily: FONT.family,
                      transition: "background-color 0.15s ease, color 0.15s ease"
                    },
                    onMouseEnter: (e) => {
                      if (item.active) return;
                      e.currentTarget.style.backgroundColor = COLORS.surface2;
                      e.currentTarget.style.color = COLORS.ink;
                    },
                    onMouseLeave: (e) => {
                      if (item.active) return;
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = COLORS.inkSecondary;
                    },
                    children: [
                      item.icon,
                      item.label
                    ]
                  },
                  item.key
                );
              }) })
            ]
          }
        ),
        /* @__PURE__ */ jsx15(MantineAppShell.Main, { children })
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
  return /* @__PURE__ */ jsxs7(Box4, { style: { minHeight: "100%", display: "flex", flexDirection: "column" }, children: [
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
      Box4,
      {
        style: {
          flex: 1,
          padding: `${SHELL.contentPadY}px ${SHELL.contentPadX}px`,
          maxWidth: maxWidth ?? void 0,
          width: "100%",
          boxSizing: "border-box"
        },
        children: /* @__PURE__ */ jsx15(Stack4, { gap: "md", children })
      }
    )
  ] });
}
function ShellTabs({ items }) {
  return /* @__PURE__ */ jsx15(Group3, { gap: 2, align: "stretch", h: SHELL.headerH, wrap: "nowrap", children: items.map((item) => /* @__PURE__ */ jsx15(
    Box4,
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
import { IconSearch as IconSearch2 } from "@tabler/icons-react";
import { spotlight } from "@mantine/spotlight";
import { jsx as jsx16 } from "react/jsx-runtime";
function SpotlightSearch({
  actions,
  placeholder = "\u641C\u7D22\u9875\u9762\u4E0E\u64CD\u4F5C\u2026",
  shortcut = ["mod + K"]
}) {
  return /* @__PURE__ */ jsx16(
    MantineSpotlight,
    {
      actions,
      shortcut,
      nothingFound: "\u6CA1\u6709\u5339\u914D\u7ED3\u679C",
      highlightQuery: true,
      searchProps: {
        leftSection: /* @__PURE__ */ jsx16(IconSearch2, { size: 16, stroke: 1.5 }),
        placeholder
      }
    }
  );
}

// src/components/layout-primitives.tsx
import {
  Group as Group4,
  Stack as Stack5,
  Box as Box5,
  SimpleGrid as SimpleGrid2,
  Divider,
  Paper,
  Card,
  Text as Text6,
  Title as Title2,
  Anchor,
  Badge,
  Checkbox as Checkbox2,
  Switch,
  Alert,
  ActionIcon as ActionIcon2
} from "@mantine/core";
import {
  useDisclosure as useDisclosure2,
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
import { jsx as jsx17 } from "react/jsx-runtime";
function DefaultThemeProvider({ children }) {
  return /* @__PURE__ */ jsx17(MantineProvider2, { forceColorScheme: "light", children });
}
function IconSearch3(props) {
  return /* @__PURE__ */ jsx17(TablerIconSearch, { size: props.size ?? 16, stroke: props.stroke ?? 1.5 });
}
export {
  ActionIcon2 as ActionIcon,
  Alert,
  Anchor,
  AppShell,
  AreaChart,
  Badge,
  BarChart,
  Box5 as Box,
  Button,
  COLORS,
  CONTROL_HEIGHT,
  CONTROL_PADDING_X,
  Card,
  Checkbox2 as Checkbox,
  Combobox,
  DataTable,
  DateInput,
  DatePickerInput,
  DefaultThemeProvider,
  Divider,
  Drawer,
  Empty,
  FONT,
  FilterActive,
  FilterBar,
  FilterBatchBar,
  FilterFacet,
  FilterField,
  FilterRow,
  FilterSegment,
  FilterTerm,
  FilterToolbar,
  FormSection,
  Group4 as Group,
  IconSearch3 as IconSearch,
  MOTION,
  Menu,
  Modal,
  PageShell,
  Pagination,
  Paper,
  Popover,
  RADIUS,
  SHADOWS,
  SearchInput,
  SearchableSelect,
  SegmentedControl,
  Select,
  ShellTabs,
  SimpleGrid2 as SimpleGrid,
  Skeleton,
  Spinner,
  SpotlightSearch,
  Stack5 as Stack,
  Switch,
  Table,
  Tabs,
  Text6 as Text,
  TextInput,
  Textarea,
  Title2 as Title,
  Tooltip,
  TopBar,
  VijimProvider,
  hasLength,
  isEmail,
  isNotEmpty,
  notify,
  spotlight,
  useCombobox,
  useDebouncedValue,
  useDisclosure2 as useDisclosure,
  useForm,
  useMediaQuery,
  vijimTheme
};
//# sourceMappingURL=index.js.map