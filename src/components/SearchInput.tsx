"use client";

/**
 * 对齐 Studio SearchField：
 * - filter：32px、透明底、仅底部分隔线（竞品库工具条）
 * - lookup：40px、灰阶浅底、7px 圆角（发起查找）
 */
import { IconSearch, IconX } from "@tabler/icons-react";
import { ActionIcon, Box } from "@mantine/core";
import { forwardRef, type ChangeEvent, type KeyboardEvent } from "react";
import { COLORS, CONTROL_HEIGHT, RADIUS, SECTION_OFFSET } from "../theme/tokens";
import { TextInput, type TextInputProps } from "./TextInput";

export type SearchInputVariant = "filter" | "lookup";

export type SearchInputProps = Omit<
  TextInputProps,
  "leftSection" | "type" | "variant" | "size"
> & {
  onClear?: () => void;
  clearable?: boolean;
  /** Studio 双面：默认 filter（列表筛选） */
  variant?: SearchInputVariant;
  defaultValue?: string;
  onFocus?: () => void;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  spellCheck?: boolean;
  "aria-label"?: string;
};

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(
  function SearchInput(
    {
      placeholder = "搜索…",
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
    },
    ref,
  ) {
    const hasValue =
      typeof value === "string" ? value.length > 0 : Boolean(value);

    const clearBtn =
      clearable && hasValue ? (
        <ActionIcon
          variant="subtle"
          color="gray"
          size="sm"
          aria-label="清空"
          onClick={() => {
            onClear?.();
            onChange?.({
              currentTarget: { value: "" },
            } as ChangeEvent<HTMLInputElement>);
          }}
        >
          <IconX size={14} stroke={1.5} />
        </ActionIcon>
      ) : (
        rightSection
      );

    if (variant === "filter") {
      // Studio filter：下划线搜索，不用灰底圆角盒
      const {
        disabled,
        name,
        id,
        "aria-label": ariaLabel,
        autoFocus,
      } = props as {
        disabled?: boolean;
        name?: string;
        id?: string;
        "aria-label"?: string;
        autoFocus?: boolean;
      };
      return (
        <Box
          style={{
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
          }}
          onFocusCapture={(e) => {
            e.currentTarget.style.borderBottomColor = COLORS.ink;
            e.currentTarget.style.color = COLORS.ink;
          }}
          onBlurCapture={(e) => {
            e.currentTarget.style.borderBottomColor = COLORS.borderStrong;
            e.currentTarget.style.color = COLORS.faint;
          }}
        >
          <IconSearch size={15} stroke={1.5} style={{ flex: "none" }} />
          <input
            ref={ref}
            type="search"
            placeholder={placeholder}
            value={value as string | undefined}
            defaultValue={defaultValue}
            onChange={onChange as ((e: ChangeEvent<HTMLInputElement>) => void) | undefined}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            spellCheck={spellCheck}
            disabled={disabled}
            name={name}
            id={id}
            aria-label={ariaLabel}
            autoFocus={autoFocus}
            style={{
              flex: 1,
              minWidth: 0,
              height: "100%",
              border: "none",
              outline: "none",
              background: "transparent",
              fontSize: 13,
              color: COLORS.ink,
              fontFamily: "inherit",
              padding: 0,
            }}
          />
          {clearBtn}
        </Box>
      );
    }

    // lookup：Studio 40px 灰底方框
    return (
      <TextInput
        ref={ref}
        type="search"
        size="md"
        placeholder={placeholder}
        leftSection={<IconSearch size={16} stroke={1.5} />}
        rightSection={clearBtn}
        value={value}
        defaultValue={defaultValue}
        onChange={onChange}
        onFocus={onFocus}
        onKeyDown={onKeyDown}
        spellCheck={spellCheck}
        styles={(theme, styleProps, ctx) => {
          const base =
            typeof styles === "function"
              ? styles(theme, styleProps, ctx)
              : styles ?? {};
          return {
            ...base,
            input: {
              ...(typeof base === "object" && base && "input" in base
                ? (base as { input?: object }).input
                : {}),
              height: CONTROL_HEIGHT.md,
              minHeight: CONTROL_HEIGHT.md,
              borderRadius: RADIUS.element,
              paddingInlineStart: SECTION_OFFSET.left,
              backgroundColor: COLORS.surfaceMuted,
              borderColor: "transparent",
            },
            section: { width: SECTION_OFFSET.left, color: COLORS.faint },
          };
        }}
        {...props}
      />
    );
  },
);
