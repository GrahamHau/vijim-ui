"use client";

/**
 * 下拉唯一入口（本包闭环）
 *
 * - 表单单选：`Select` size=md（默认 40）
 * - 筛选条紧凑：`Select` size=sm / density=compact，或 `SearchableSelect`
 * - 可搜索：`searchable` 或直接用 `SearchableSelect`（筛选用 API）
 * - 禁止页面 styles 写 height/minWidth 魔数；紧凑尺寸走 token
 */

import {
  Select as MantineSelect,
  type SelectProps as MantineSelectProps,
} from "@mantine/core";
import {
  forwardRef,
  useMemo,
  type CSSProperties,
} from "react";
import {
  COLORS,
  CONTROL_HEIGHT,
  CONTROL_PADDING_X,
  FONT,
  MOTION,
  RADIUS,
  SECTION_OFFSET,
  SHADOWS,
} from "../theme/tokens";

export type SelectSize = "xs" | "sm" | "md" | "lg";

/** compact = 筛选条；default = 表单 */
export type SelectDensity = "default" | "compact";

export type SelectOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

export type SelectProps = Omit<MantineSelectProps, "size" | "data"> & {
  size?: SelectSize;
  /** compact → 高度走 CONTROL_HEIGHT.sm，筛选条用 */
  density?: SelectDensity;
  data?: MantineSelectProps["data"];
  /** @deprecated Admin/Studio 迁移兼容；新代码用 data */
  options?: readonly SelectOption[];
  /** @deprecated 用 aria-label */
  ariaLabel?: string;
};

function heightFor(size: SelectSize, density: SelectDensity): number {
  if (density === "compact" || size === "sm" || size === "xs") {
    return size === "xs" ? CONTROL_HEIGHT.xs : CONTROL_HEIGHT.sm;
  }
  if (size === "lg") return CONTROL_HEIGHT.lg;
  return CONTROL_HEIGHT.md;
}

function fontFor(size: SelectSize, density: SelectDensity): string {
  if (density === "compact" || size === "xs" || size === "sm") {
    return FONT.sizes.xs;
  }
  return FONT.sizes.sm;
}

/** 下拉浮层 + 选项：只写扁平 style；交互态走 styles.css（React 19 不接受 &: 选择器） */
const selectDropdownStyles = {
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
    color: COLORS.ink,
    transition: `background-color ${MOTION.fast} ${MOTION.easeOut}, color ${MOTION.fast} ${MOTION.easeOut}`,
  },
} as const;

export const Select = forwardRef<HTMLInputElement, SelectProps>(
  function Select(
    {
      size = "md",
      density = "default",
      leftSection,
      rightSection,
      styles,
      comboboxProps,
      clearable = false,
      nothingFoundMessage = "无匹配",
      data,
      options,
      ariaLabel,
      ...props
    },
    ref,
  ) {
    const hasLeft = Boolean(leftSection);
    const hasRight = Boolean(rightSection);
    const h = heightFor(size, density);
    const fs = fontFor(size, density);
    const padX =
      density === "compact" || size === "sm" || size === "xs"
        ? CONTROL_PADDING_X.sm
        : CONTROL_PADDING_X.md;

    const mergedCombobox = useMemo(
      () => ({
        withinPortal: true,
        ...comboboxProps,
      }),
      [comboboxProps],
    );

    return (
      <MantineSelect
        ref={ref}
        size={size === "lg" ? "md" : size === "xs" ? "xs" : size === "sm" ? "sm" : "md"}
        leftSection={leftSection}
        rightSection={rightSection}
        clearable={clearable}
        nothingFoundMessage={nothingFoundMessage}
        comboboxProps={mergedCombobox}
        styles={(theme, styleProps, ctx) => {
          const base =
            typeof styles === "function"
              ? styles(theme, styleProps, ctx)
              : styles ?? {};
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
              ...(hasLeft ? { paddingInlineStart: SECTION_OFFSET.left } : {}),
              ...(hasRight ? { paddingInlineEnd: SECTION_OFFSET.right } : {}),
              // hover/focus/expanded → packages/ui styles.css（避免 React 19 把 &: 当 style）
              ...(typeof baseObj === "object" &&
              baseObj &&
              "input" in baseObj
                ? (baseObj as { input?: object }).input
                : {}),
            },
            section: {
              width: SECTION_OFFSET.left,
              color: COLORS.faint,
              ...(typeof baseObj === "object" &&
              baseObj &&
              "section" in baseObj
                ? (baseObj as { section?: object }).section
                : {}),
            },
            dropdown: {
              ...selectDropdownStyles.dropdown,
              ...(typeof baseObj === "object" &&
              baseObj &&
              "dropdown" in baseObj
                ? (baseObj as { dropdown?: object }).dropdown
                : {}),
            },
            option: {
              ...selectDropdownStyles.option,
              fontSize: fs,
              ...(typeof baseObj === "object" &&
              baseObj &&
              "option" in baseObj
                ? (baseObj as { option?: object }).option
                : {}),
            },
          };
        }}
        {...props}
        data-slot="select"
        data={data ?? options?.map((option) => ({ ...option }))}
        aria-label={props["aria-label"] ?? ariaLabel}
      />
    );
  },
);

// ── SearchableSelect：筛选条 / 表单可搜下拉（业务常用 API）──

export type SearchableSelectOption =
  | string
  | { value: string; label: string; disabled?: boolean };

export type SearchableSelectProps = {
  id?: string;
  name?: string;
  /** 无障碍标签；筛选条可不展示可见 label */
  label: string;
  /** 受控值；与 defaultValue 二选一 */
  value?: string | null;
  /** 非受控初始值（表单 GET 场景） */
  defaultValue?: string | null;
  options: readonly SearchableSelectOption[];
  placeholder?: string;
  /** 空值时的占位文案（如「全部品牌」） */
  emptyLabel?: string;
  onPick?: (value: string) => void;
  onChange?: (value: string) => void;
  disabled?: boolean;
  clearable?: boolean;
  /** 默认 compact（筛选条）；表单用 default */
  density?: SelectDensity;
  size?: SelectSize;
  searchable?: boolean;
  nothingFoundMessage?: string;
  style?: CSSProperties;
  className?: string;
  minWidth?: number;
};

function normalizeOptions(
  options: readonly SearchableSelectOption[],
): SelectOption[] {
  return options.map((o) =>
    typeof o === "string" ? { value: o, label: o } : o,
  );
}

/**
 * 可搜索下拉：筛选用 compact；与 Select 同一皮，禁止页面再写 height 魔数。
 */
export function SearchableSelect({
  name,
  id,
  label,
  value,
  defaultValue,
  options,
  placeholder = "全部",
  emptyLabel,
  onPick,
  onChange,
  disabled = false,
  clearable = false,
  density = "compact",
  size = "sm",
  searchable = true,
  nothingFoundMessage = "无匹配",
  style,
  className,
  minWidth = 128,
}: SearchableSelectProps) {
  const data = normalizeOptions(options);
  const controlled = value !== undefined;

  return (
    <Select
      name={name}
      id={id}
      aria-label={label}
      data={data}
      value={controlled ? value || null : undefined}
      defaultValue={
        !controlled
          ? defaultValue != null && defaultValue !== ""
            ? defaultValue
            : null
          : undefined
      }
      onChange={(v) => {
        onChange?.(v ?? "");
        onPick?.(v ?? "");
      }}
      placeholder={emptyLabel || placeholder}
      searchable={searchable}
      clearable={clearable}
      disabled={disabled}
      density={density}
      size={size}
      nothingFoundMessage={nothingFoundMessage}
      className={className}
      style={{
        minWidth,
        flex: "0 0 auto",
        ...style,
      }}
    />
  );
}
