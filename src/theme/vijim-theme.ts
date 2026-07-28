import { createTheme, type MantineThemeOverride } from "@mantine/core";
import {
  BRAND_BLUE,
  COLORS,
  CONTROL_HEIGHT,
  CONTROL_PADDING_X,
  DANGER_SCALE,
  FONT,
  GRAY_SCALE,
  MOTION,
  NEUTRAL_PRIMARY,
  RADIUS,
  SECTION_OFFSET,
  SHADOWS,
  SUCCESS_SCALE,
  WARNING_SCALE,
} from "./tokens";

const fieldInput = {
  height: CONTROL_HEIGHT.md,
  minHeight: CONTROL_HEIGHT.md,
  fontSize: FONT.sizes.sm,
  paddingInline: CONTROL_PADDING_X.md,
  backgroundColor: COLORS.surfaceMuted,
  borderColor: "transparent",
  borderRadius: RADIUS.element,
  color: COLORS.ink,
  fontFamily: FONT.family,
  transition: `background-color ${MOTION.fast} ${MOTION.easeOut}`,
} as const;

/**
 * 唯一主题：色/形/动全部在本包 tokens 闭环（无外部主题依赖）
 */
export const vijimTheme: MantineThemeOverride = createTheme({
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
    red: DANGER_SCALE,
  },

  white: COLORS.surface,
  black: COLORS.ink,

  fontSizes: {
    xs: FONT.sizes.xs,
    sm: FONT.sizes.sm,
    md: FONT.sizes.md,
    lg: FONT.sizes.lg,
    xl: FONT.sizes.xl,
  },

  headings: {
    fontFamily: FONT.family,
    fontWeight: FONT.headingWeight,
    sizes: {
      // tracking 走 Title styles + styles.css（Mantine HeadingStyle 无 letterSpacing 字段）
      h1: {
        fontSize: FONT.sizes.h1,
        fontWeight: FONT.headingWeight,
        lineHeight: String(FONT.leading.display),
      },
      h2: {
        fontSize: FONT.sizes.h2,
        fontWeight: FONT.headingWeight,
        lineHeight: String(FONT.leading.title),
      },
      h3: {
        fontSize: FONT.sizes.h3,
        fontWeight: FONT.headingWeight,
        lineHeight: String(FONT.leading.title),
      },
      h4: {
        fontSize: FONT.sizes.h4,
        fontWeight: FONT.headingWeight,
        lineHeight: "1.4",
      },
      h5: { fontSize: FONT.sizes.md, fontWeight: FONT.headingWeight, lineHeight: "1.4" },
      h6: { fontSize: FONT.sizes.sm, fontWeight: FONT.headingWeight, lineHeight: "1.4" },
    },
  },

  spacing: {
    xs: "4px",
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "24px",
  },

  radius: {
    xs: RADIUS.xs,
    sm: RADIUS.sm,
    md: RADIUS.element,
    lg: RADIUS.card,
    xl: RADIUS.overlay,
  },

  shadows: {
    xs: SHADOWS.xs,
    sm: SHADOWS.sm,
    md: SHADOWS.md,
    lg: SHADOWS.lg,
    xl: SHADOWS.xl,
  },

  other: {
    controlHeight: CONTROL_HEIGHT,
    colors: COLORS,
    radiusSemantic: {
      element: RADIUS.element,
      card: RADIUS.card,
      overlay: RADIUS.overlay,
    },
  },

  components: {
    Button: {
      defaultProps: {
        size: "sm",
        radius: "md",
        color: "brand",
      },
      styles: (
        _theme: unknown,
        props: { size?: string | undefined },
      ) => {
        const size = props.size ?? "sm";
        const h =
          size === "xs"
            ? 26
            : size === "md"
              ? 36
              : size === "lg"
                ? 40
                : CONTROL_HEIGHT.sm;
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
              `transform ${MOTION.press} ${MOTION.easeOut}`,
            ].join(", "),

          },
          section: { marginInline: 4 },
        };
      },
    },

    TextInput: {
      defaultProps: { size: "md", radius: "sm" },
      styles: {
        input: {
          ...fieldInput,
          // hover/focus/error/placeholder → styles.css

        },
        section: { width: SECTION_OFFSET.left, color: COLORS.faint },
        label: {
          fontWeight: 500,
          fontSize: FONT.sizes.sm,
          color: COLORS.inkSecondary,
          marginBottom: 6,
        },
        error: { fontSize: FONT.sizes.xs, color: COLORS.danger },
        description: { fontSize: FONT.sizes.xs, color: COLORS.mutedFg },
      },
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
          fontSize: FONT.sizes.sm,
          // hover/focus/error/placeholder → styles.css

        },
        label: {
          fontWeight: 500,
          fontSize: FONT.sizes.sm,
          color: COLORS.inkSecondary,
          marginBottom: 6,
        },
      },
    },

    /** 下拉唯一皮：触发器 = 录入面；浮层 = overlay 圆角 + shadow-md；选中项 brand 浅底+蓝字 */
    Select: {
      defaultProps: {
        size: "md",
        radius: "md",
        checkIconPosition: "right",
        withCheckIcon: true,
        comboboxProps: { withinPortal: true },
      },
      styles: {
        input: {
          ...fieldInput,
          borderRadius: RADIUS.element,
          // hover/expanded → styles.css

        },
        section: { width: SECTION_OFFSET.left, color: COLORS.faint },
        dropdown: {
          border: `1px solid ${COLORS.border}`,
          borderRadius: RADIUS.overlay,
          boxShadow: SHADOWS.md,
          padding: 4,
          backgroundColor: COLORS.surface,
        },
        option: {
          fontSize: FONT.sizes.sm,
          borderRadius: RADIUS.sm,
          padding: "8px 10px",
          transition: `background-color ${MOTION.fast} ${MOTION.easeOut}`,

        },
      },
    },

    MultiSelect: {
      defaultProps: {
        size: "md",
        radius: "md",
        comboboxProps: { withinPortal: true },
      },
      styles: {
        input: {
          ...fieldInput,
          height: "auto",
          minHeight: CONTROL_HEIGHT.md,
        },
        dropdown: {
          border: `1px solid ${COLORS.border}`,
          borderRadius: RADIUS.overlay,
          boxShadow: SHADOWS.md,
          padding: 4,
        },
        option: {
          borderRadius: RADIUS.sm,

        },
        pill: {
          backgroundColor: COLORS.muted,
          color: COLORS.ink2,
          borderRadius: RADIUS.sm,
        },
      },
    },

    Combobox: {
      defaultProps: {
        withinPortal: true,
      },
      styles: {
        dropdown: {
          border: `1px solid ${COLORS.border}`,
          borderRadius: RADIUS.overlay,
          boxShadow: SHADOWS.md,
          padding: 4,
          backgroundColor: COLORS.surface,
        },
        option: {
          borderRadius: RADIUS.sm,
          fontSize: FONT.sizes.sm,

        },
      },
    },

    Input: {
      defaultProps: { size: "md", radius: "sm" },
      styles: {
        input: { ...fieldInput },
        section: { width: SECTION_OFFSET.left },
      },
    },

    InputBase: {
      defaultProps: { size: "md", radius: "sm" },
    },

    PasswordInput: {
      defaultProps: { size: "md", radius: "sm" },
      styles: {
        input: { ...fieldInput },
        section: { width: SECTION_OFFSET.left },
      },
    },

    NumberInput: {
      defaultProps: { size: "md", radius: "sm" },
      styles: {
        input: { ...fieldInput },
        section: { width: SECTION_OFFSET.left },
      },
    },

    DatePickerInput: {
      defaultProps: {
        size: "md",
        radius: "sm",
        valueFormat: "YYYY-MM-DD",
      },
      styles: {
        input: { ...fieldInput },
        section: { width: SECTION_OFFSET.left, color: COLORS.faint },
      },
    },

    DateInput: {
      defaultProps: {
        size: "md",
        radius: "sm",
        valueFormat: "YYYY-MM-DD",
      },
      styles: {
        input: { ...fieldInput },
      },
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
          timingFunction: MOTION.springish,
        },
      },
      styles: {
        content: {
          border: `1px solid ${COLORS.border}`,
          borderRadius: RADIUS.overlay,
          boxShadow: SHADOWS.lg,
        },
        title: {
          fontWeight: 600,
          fontSize: FONT.sizes.md,
          color: COLORS.ink,
          letterSpacing: FONT.tracking.title,
        },
      },
    },

    Drawer: {
      defaultProps: {
        radius: 0,
        shadow: "lg",
        overlayProps: { backgroundOpacity: 0.12, blur: 4 },
        transitionProps: {
          duration: 280,
          timingFunction: MOTION.springish,
        },
      },
      styles: {
        content: {
          borderLeft: `1px solid ${COLORS.border}`,
          boxShadow: SHADOWS.lg,
        },
        title: {
          fontWeight: 600,
          fontSize: FONT.sizes.md,
          letterSpacing: FONT.tracking.title,
        },
      },
    },

    Tabs: {
      styles: {
        tab: {
          fontWeight: 500,
          fontSize: FONT.sizes.sm,
          color: COLORS.mutedFg,

        },
        list: { borderColor: COLORS.border },
      },
    },

    /** 与 FilterSegment 同气质：外框 + 框内白底按钮滑块 + 短 ease-out */
    SegmentedControl: {
      defaultProps: { size: "sm", radius: "md", withItemsBorders: false },
      styles: {
        root: {
          backgroundColor: COLORS.surfaceMuted,
          border: `1px solid ${COLORS.border}`,
          padding: 3,
          borderRadius: RADIUS.segment,
        },
        label: {
          fontWeight: 500,
          fontSize: FONT.sizes.sm,
          color: COLORS.mutedFg,
          transition: `color ${MOTION.fast} ${MOTION.easeOut}`,

        },
        indicator: {
          backgroundColor: COLORS.surface,
          border: "none",
          borderRadius: RADIUS.sm,
          boxShadow: SHADOWS.xs,
          transition: `transform ${MOTION.normal} ${MOTION.springish}, box-shadow ${MOTION.fast} ${MOTION.easeOut}`,
        },
        control: {
          border: "none",
        },
      },
    },

    Pagination: {
      defaultProps: { size: "sm", radius: "sm" },
      styles: {
        control: {
          borderColor: COLORS.border,
          fontSize: FONT.sizes.sm,
        },
      },
    },

    Menu: {
      defaultProps: { shadow: "md", radius: "md" },
      styles: {
        dropdown: {
          border: `1px solid ${COLORS.border}`,
          borderRadius: RADIUS.overlay,
          padding: 4,
        },
        item: { fontSize: FONT.sizes.sm, borderRadius: RADIUS.element },
      },
    },

    Popover: {
      defaultProps: { shadow: "md", radius: "md" },
      styles: {
        dropdown: {
          border: `1px solid ${COLORS.border}`,
          borderRadius: RADIUS.overlay,
        },
      },
    },

    Tooltip: {
      defaultProps: { withArrow: true, radius: "sm" },
      styles: {
        tooltip: {
          fontSize: FONT.sizes.xs,
          fontWeight: 500,
          backgroundColor: COLORS.ink,
          color: COLORS.surface,
        },
      },
    },

    Table: {
      defaultProps: {
        horizontalSpacing: "md",
        verticalSpacing: "sm",
        highlightOnHover: true,
      },
      styles: {
        table: { fontSize: FONT.sizes.sm },
        th: {
          fontWeight: 650,
          color: COLORS.mutedFg,
          backgroundColor: COLORS.surfaceMuted,
          borderColor: COLORS.border,
          fontSize: 12,
        },
        td: { borderColor: COLORS.border, color: COLORS.ink },
      },
    },

    Paper: {
      defaultProps: {
        radius: "lg",
        shadow: "none",
        withBorder: true,
      },
      styles: {
        root: {
          borderColor: COLORS.border,
          backgroundColor: COLORS.surface,
          borderRadius: RADIUS.card,
        },
      },
    },

    Card: {
      defaultProps: {
        radius: "lg",
        shadow: "none",
        padding: "lg",
        withBorder: true,
      },
      styles: {
        root: {
          borderColor: COLORS.border,
          backgroundColor: COLORS.surface,
          borderRadius: RADIUS.card,
        },
      },
    },

    Badge: {
      defaultProps: {
        size: "sm",
        radius: "sm",
        variant: "light",
      },
      styles: {
        root: {
          fontWeight: 500,
          textTransform: "none",
          borderRadius: RADIUS.element,
        },
      },
    },

    Checkbox: { defaultProps: { size: "sm", radius: "sm" } },
    Switch: { defaultProps: { size: "sm" } },
    Radio: { defaultProps: { size: "sm" } },
    Skeleton: { defaultProps: { radius: "sm" } },
    Loader: {
      defaultProps: { size: "sm", type: "dots", color: "brand" },
    },

    /** 大标题收紧字距 */
    Title: {
      styles: {
        root: {
          letterSpacing: FONT.tracking.title,
          // title tracking → styles.css

        },
      },
    },

    Alert: {
      defaultProps: { radius: "md" },
      styles: {
        root: { border: `1px solid ${COLORS.border}` },
        title: { fontWeight: 600 },
      },
    },

    AppShell: {
      styles: {
        root: { backgroundColor: COLORS.body },
        header: {
          backgroundColor: COLORS.surface,
          borderBottom: `1px solid ${COLORS.border}`,
          boxShadow: "none",
        },
        navbar: {
          backgroundColor: COLORS.surface,
          borderRight: `1px solid ${COLORS.border}`,
        },
        main: { backgroundColor: COLORS.body },
      },
    },

    Notification: {
      defaultProps: { radius: "md" },
      styles: {
        root: {
          border: `1px solid ${COLORS.border}`,
          boxShadow: "0 1px 2px rgba(18,19,23,0.06), 0 12px 36px rgba(18,19,23,0.08)",
        },
        title: { fontWeight: 600 },
      },
    },

    ActionIcon: {
      defaultProps: {
        size: "sm",
        radius: "sm",
        variant: "subtle",
      },
      styles: {
        root: {
          "--ai-size": `${CONTROL_HEIGHT.sm}px`,
          borderRadius: RADIUS.element,
        },
      },
    },
  },
});

export default vijimTheme;
