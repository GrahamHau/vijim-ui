"use client";

/**
 * FilterBar = 列表筛选的**唯一外壳**
 *
 * 原则：
 * - 搜索 / 排序 / 库切换 / 下拉 / 分面 / 已选 —— 都进 FilterBar，别飘到外面
 * - **里面**用 Stack / Group / FilterRow 自由排布（给 AI 自由度）
 * - 外壳只负责：白底、浅边、圆角、可选「已选条件」底栏
 *
 * 原子：
 * - FilterSegment：二态/少态互斥切换（无外框灰选中）—— 全部可见/与我相关
 * - FilterTerm：无边框分面词（灰选中）—— 品牌/产品等级/平台/品类
 * - FilterRow · FilterField · FilterFacet · FilterActive
 * FilterBatchBar：表格勾选批量（可选，仍独立）
 */

import { Box, Group, Stack, Text, UnstyledButton } from "@mantine/core";
import type { MouseEvent, ReactNode } from "react";
import { Button } from "./Button";
import { COLORS, MOTION, RADIUS, SHADOWS } from "../theme/tokens";

const PANEL = {
  bg: COLORS.surface,
  border: `1px solid ${COLORS.border}`,
  radius: RADIUS.panel, // 12px 软面板（apple 大面）
  shadow: SHADOWS.sm,
} as const;

/** 按下即 scale（本包 MOTION） */
const pressHandlers = (disabled?: boolean) => ({
  onMouseDown: (e: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    e.currentTarget.style.transform = `scale(${MOTION.pressScale})`;
  },
  onMouseUp: (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "scale(1)";
  },
  onMouseLeave: (e: MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.transform = "scale(1)";
  },
});

// ═══════════════════════════════════════════════════════
// FilterBar · 唯一筛选外壳
// ═══════════════════════════════════════════════════════

export type FilterBarProps = {
  /**
   * 主体：自由排布。
   * 建议用 Stack gap="sm" 分行，例如：
   *  1) 搜索 + 结果数 + 视图
   *  2) 排序
   *  3) 库切换 + 下拉
   *  4) 分面
   */
  children: ReactNode;
  /** 已选条件（FilterActive），固定在面板底栏 */
  active?: ReactNode;
  onClear?: () => void;
  clearLabel?: string;
};

/**
 * 筛选面板：内容自由排，样式收在壳内。
 */
export function FilterBar({
  children,
  active,
  onClear,
  clearLabel = "清除筛选",
}: FilterBarProps) {
  return (
    <Box
      className="vijim-filter-bar"
      style={{
        backgroundColor: PANEL.bg,
        border: PANEL.border,
        borderRadius: PANEL.radius,
        boxShadow: PANEL.shadow,
        marginBottom: 16,
      }}
    >
      <Box px="md" py="md">
        {children}
      </Box>

      {active != null || onClear ? (
        <Box
          px="md"
          py="xs"
          style={{
            borderTop: `1px solid ${COLORS.border}`,
            backgroundColor: COLORS.surface2,
            borderRadius: `0 0 ${PANEL.radius} ${PANEL.radius}`,
          }}
        >
          <Group justify="space-between" align="center" gap="sm" wrap="wrap">
            <Box style={{ flex: 1, minWidth: 0 }}>
              {active ?? (
                <Text size="xs" c="dimmed">
                  未设置筛选
                </Text>
              )}
            </Box>
            {onClear ? (
              <Button variant="subtle" color="gray" size="sm" onClick={onClear}>
                {clearLabel}
              </Button>
            ) : null}
          </Group>
        </Box>
      ) : null}
    </Box>
  );
}

// ═══════════════════════════════════════════════════════
// FilterToolbar · 兼容别名（推荐直接用 FilterBar 内 Stack 分行）
// ═══════════════════════════════════════════════════════

export type FilterToolbarProps = {
  search: ReactNode;
  sort?: ReactNode;
  actions?: ReactNode;
  resultText?: string;
  /** 额外行（库/下拉等），接在排序下方 */
  extras?: ReactNode;
};

/**
 * @deprecated 优先把内容直接放进 FilterBar 用 Stack 分行。
 * 保留此 API 只为迁移期：内部仍渲染为「可嵌入 FilterBar 的一块」。
 */
export function FilterToolbar({
  search,
  sort,
  actions,
  resultText,
  extras,
}: FilterToolbarProps) {
  return (
    <Stack gap="sm">
      <Group align="center" gap="md" wrap="wrap">
        <Box style={{ flex: "1 1 260px", minWidth: 200, maxWidth: 480 }}>
          {search}
        </Box>
        <Group gap="xs" wrap="nowrap" ml="auto" align="center">
          {resultText ? (
            <Text size="xs" c="dimmed" ff="monospace">
              {resultText}
            </Text>
          ) : null}
          {actions}
        </Group>
      </Group>
      {sort}
      {extras}
    </Stack>
  );
}

// ═══════════════════════════════════════════════════════
// FilterBatchBar
// ═══════════════════════════════════════════════════════

export type FilterBatchBarProps = {
  selectedCount: number;
  children: ReactNode;
};

export function FilterBatchBar({
  selectedCount,
  children,
}: FilterBatchBarProps) {
  if (selectedCount <= 0) return null;
  return (
    <Group
      gap="sm"
      px="md"
      py="sm"
      justify="space-between"
      style={{
        backgroundColor: COLORS.surface,
        border: PANEL.border,
        borderRadius: PANEL.radius,
      }}
    >
      <Text size="sm" c={COLORS.inkSecondary}>
        已选{" "}
        <Text span fw={650} c={COLORS.ink} ff="monospace">
          {selectedCount}
        </Text>{" "}
        项
      </Text>
      <Group gap="xs">{children}</Group>
    </Group>
  );
}

// ═══════════════════════════════════════════════════════
// 原子
// ═══════════════════════════════════════════════════════

export type FilterRowProps = {
  children: ReactNode;
  /** 可选标签；库切换这类可不传 */
  label?: string;
};

export function FilterRow({ children, label }: FilterRowProps) {
  return (
    <Group gap={6} align="center" wrap="wrap">
      {label ? (
        <Text size="xs" c="dimmed" style={{ flex: "none" }}>
          {label}
        </Text>
      ) : null}
      {children}
    </Group>
  );
}

export type FilterFieldProps = {
  label?: string;
  children: ReactNode;
  grow?: boolean;
  minWidth?: number;
  layout?: "inline" | "stack";
};

export function FilterField({
  label,
  children,
  grow = false,
  minWidth = 140,
  layout = "inline",
}: FilterFieldProps) {
  if (layout === "stack") {
    return (
      <Stack gap={4} style={{ flex: grow ? "1 1 200px" : undefined, minWidth }}>
        {label ? (
          <Text size="xs" c="dimmed" fw={500}>
            {label}
          </Text>
        ) : null}
        {children}
      </Stack>
    );
  }

  return (
    <Group
      gap={6}
      align="center"
      wrap="nowrap"
      style={{ flex: grow ? "1 1 200px" : undefined, minWidth }}
    >
      {label ? (
        <Text size="xs" c="dimmed" style={{ flex: "none" }}>
          {label}
        </Text>
      ) : null}
      <Box style={{ flex: 1, minWidth: 0 }}>{children}</Box>
    </Group>
  );
}

// ── FilterSegment：无外框互斥切换（灰选中块）────────

export type FilterSegmentOption = {
  value: string;
  label: string;
  count?: number | string;
};

export type FilterSegmentProps = {
  options: FilterSegmentOption[];
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  "aria-label"?: string;
};

/**
 * 二态/少态互斥切换：无外框，选中项用灰色块。
 * 用于全部可见/与我相关、公共/个人 —— 与分面词（FilterTerm 蓝选中）职责分开。
 */
export function FilterSegment({
  options,
  value,
  onChange,
  disabled = false,
  "aria-label": ariaLabel,
}: FilterSegmentProps) {
  return (
    <Group
      gap={2}
      align="center"
      wrap="nowrap"
      role="radiogroup"
      aria-label={ariaLabel}
      style={{
        display: "inline-flex",
        backgroundColor: "transparent",
        border: "none",
        borderRadius: RADIUS.segment,
        boxShadow: "none",
      }}
    >
      {options.map((opt) => {
        const selected = opt.value === value;
        const press = pressHandlers(disabled);
        return (
          <UnstyledButton
            key={opt.value}
            type="button"
            role="radio"
            aria-checked={selected}
            disabled={disabled}
            onClick={() => {
              if (disabled || selected) return;
              onChange(opt.value);
            }}
            style={{
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
                `transform ${MOTION.press} ${MOTION.easeOut}`,
              ].join(", "),
            }}
            onMouseEnter={(e: MouseEvent<HTMLButtonElement>) => {
              if (disabled || selected) return;
              e.currentTarget.style.backgroundColor = COLORS.muted;
              e.currentTarget.style.color = COLORS.ink2;
            }}
            onMouseLeave={(e: MouseEvent<HTMLButtonElement>) => {
              press.onMouseLeave(e);
              if (disabled || selected) return;
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = COLORS.mutedFg;
            }}
            onMouseDown={press.onMouseDown}
            onMouseUp={press.onMouseUp}
          >
            {opt.label}
            {opt.count !== undefined ? (
              <Text
                component="span"
                ff="monospace"
                style={{
                  fontSize: 11,
                  fontWeight: selected ? 560 : 450,
                  color: selected ? COLORS.selectedInk : COLORS.faint,
                  opacity: selected ? 0.72 : 1,
                  marginLeft: 2,
                }}
              >
                {opt.count}
              </Text>
            ) : null}
          </UnstyledButton>
        );
      })}
    </Group>
  );
}

// ── FilterTerm：无边框分面词（多选/多标签行）────────────────

export type FilterTermProps = {
  label?: string;
  children?: ReactNode;
  count?: number | string;
  selected?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  "aria-label"?: string;
};

/**
 * 分面词条：无外框、无描边。选中 = 灰色块。
 * 用于品牌/产品等级/平台/品类等多选项 —— 与 FilterSegment 共用中性选中语义。
 */
export function FilterTerm({
  label,
  children,
  count,
  selected = false,
  onClick,
  disabled = false,
  "aria-label": ariaLabel,
}: FilterTermProps) {
  const press = pressHandlers(disabled);
  return (
    <UnstyledButton
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-pressed={selected}
      aria-label={ariaLabel}
      style={{
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
          `transform ${MOTION.press} ${MOTION.easeOut}`,
        ].join(", "),
      }}
      onMouseEnter={(e: MouseEvent<HTMLButtonElement>) => {
        if (disabled || selected) return;
        e.currentTarget.style.backgroundColor = COLORS.muted;
        e.currentTarget.style.color = COLORS.ink2;
      }}
      onMouseLeave={(e: MouseEvent<HTMLButtonElement>) => {
        press.onMouseLeave(e);
        if (disabled || selected) return;
        e.currentTarget.style.backgroundColor = "transparent";
        e.currentTarget.style.color = COLORS.mutedFg;
      }}
      onMouseDown={press.onMouseDown}
      onMouseUp={press.onMouseUp}
    >
      {children ?? label}
      {count !== undefined ? (
        <Text
          component="span"
          ff="monospace"
          style={{
            fontSize: 11,
            fontWeight: selected ? 560 : 450,
            color: selected ? COLORS.selectedInk : COLORS.faint,
            opacity: selected ? 0.72 : 1,
            marginLeft: 2,
          }}
        >
          {count}
        </Text>
      ) : null}
    </UnstyledButton>
  );
}

export type FilterFacetOption = {
  value: string;
  label: string;
  count?: number | string;
};

export type FilterFacetProps = {
  label: string;
  options: FilterFacetOption[];
  value?: string | null;
  onChange: (value: string | null) => void;
  nested?: boolean;
  showAll?: boolean;
  allLabel?: string;
};

export function FilterFacet({
  label,
  options,
  value = null,
  onChange,
  nested = false,
  showAll = true,
  allLabel = "全部",
}: FilterFacetProps) {
  return (
    <Group gap={14} align="flex-start" wrap="nowrap">
      <Text
        size="xs"
        c="dimmed"
        style={{
          flex: "none",
          width: 44,
          lineHeight: 1.8,
          opacity: nested ? 0.85 : 1,
        }}
      >
        {nested ? `└ ${label}` : label}
      </Text>
      <Group gap={4} align="center" wrap="wrap" style={{ flex: 1, minWidth: 0 }}>
        {showAll ? (
          <FilterTerm
            label={allLabel}
            selected={value == null || value === ""}
            onClick={() => onChange(null)}
          />
        ) : null}
        {options.map((opt) => (
          <FilterTerm
            key={opt.value}
            label={opt.label}
            count={opt.count}
            selected={value === opt.value}
            onClick={() => onChange(value === opt.value ? null : opt.value)}
          />
        ))}
      </Group>
    </Group>
  );
}

export type FilterActiveItem = {
  key: string;
  label: string;
  onRemove?: () => void;
};

export type FilterActiveProps = {
  items: FilterActiveItem[];
  onClearAll?: () => void;
  emptyText?: string;
};

export function FilterActive({
  items,
  onClearAll,
  emptyText = "未设置筛选",
}: FilterActiveProps) {
  if (items.length === 0) {
    return (
      <Text size="xs" c="dimmed">
        {emptyText}
      </Text>
    );
  }

  return (
    <Group gap="sm" align="center" wrap="wrap">
      <Text size="xs" c="dimmed" style={{ flex: "none" }}>
        已选
      </Text>
      {items.map((item) => (
        <Group
          key={item.key}
          gap={4}
          align="center"
          wrap="nowrap"
          px={8}
          style={{
            minHeight: 28,
            borderRadius: RADIUS.term,
            border: `1px solid ${COLORS.border}`,
            backgroundColor: COLORS.surface,
            fontSize: 12.5,
            boxShadow: "0 1px 2px rgba(18,19,23,0.03)",
          }}
        >
          <Text size="xs" c={COLORS.ink} fw={500}>
            {item.label}
          </Text>
          {item.onRemove ? (
            <UnstyledButton
              type="button"
              aria-label={`移除 ${item.label}`}
              onClick={item.onRemove}
              style={{
                display: "inline-flex",
                width: 16,
                height: 16,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 4,
                color: COLORS.mutedFg,
                fontSize: 12,
                fontFamily: "inherit",
              }}
            >
              ×
            </UnstyledButton>
          ) : null}
        </Group>
      ))}
      {onClearAll ? (
        <UnstyledButton
          type="button"
          onClick={onClearAll}
          style={{
            fontSize: 12.5,
            fontWeight: 600,
            color: COLORS.mutedFg,
            fontFamily: "inherit",
          }}
        >
          全部清除
        </UnstyledButton>
      ) : null}
    </Group>
  );
}
