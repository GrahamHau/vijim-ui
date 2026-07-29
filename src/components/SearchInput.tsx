"use client";

/**
 * 对齐 Studio SearchField：
 * - filter：32px、透明底、仅底部分隔线（竞品库工具条）
 * - lookup：40px、灰阶浅底、7px 圆角（发起查找）
 */
import { IconSearch, IconX } from "@tabler/icons-react";
import { ActionIcon, Box } from "@mantine/core";
import {
  forwardRef,
  useState,
  type ChangeEvent,
  type ChangeEventHandler,
  type InputHTMLAttributes,
  type KeyboardEvent,
} from "react";
import { COLORS, CONTROL_HEIGHT, RADIUS, SECTION_OFFSET } from "../theme/tokens";
import { TextInput, type TextInputProps } from "./TextInput";

export type SearchInputVariant = "filter" | "lookup";

export type SearchInputProps = Omit<
  TextInputProps,
  "leftSection" | "type" | "variant" | "size" | "onChange"
> & {
  onChange?: ChangeEventHandler<HTMLInputElement>;
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

function eventFromValue(value: string): ChangeEvent<HTMLInputElement> {
  const target = { value } as HTMLInputElement;
  return {
    currentTarget: target,
    target,
  } as ChangeEvent<HTMLInputElement>;
}

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
      className,
      style,
      ...props
    },
    ref,
  ) {
    const controlled = value !== undefined;
    const [internalValue, setInternalValue] = useState(defaultValue ?? "");
    const currentValue = controlled ? String(value ?? "") : internalValue;
    const hasValue = currentValue.length > 0;

    const emitChange = (event: ChangeEvent<HTMLInputElement>) => {
      if (!controlled) setInternalValue(event.currentTarget.value);
      onChange?.(event);
    };

    const clear = () => {
      if (!controlled) setInternalValue("");
      onClear?.();
      onChange?.(eventFromValue(""));
    };

    const clearBtn =
      clearable && hasValue ? (
        <ActionIcon
          variant="subtle"
          color="gray"
          size="sm"
          aria-label="清空"
          onClick={clear}
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
        ...inputProps
      } = props as {
        disabled?: boolean;
        name?: string;
        id?: string;
        "aria-label"?: string;
        autoFocus?: boolean;
      } & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type">;
      return (
        <Box
          data-slot="search-field"
          data-search-variant="filter"
          className={className}
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
            ...style,
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
            data-slot="search-input"
            data-search-variant="filter"
            type="search"
            placeholder={placeholder}
            value={currentValue}
            onChange={emitChange}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
            spellCheck={spellCheck}
            disabled={disabled}
            name={name}
            id={id}
            aria-label={ariaLabel}
            autoFocus={autoFocus}
            {...inputProps}
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
      <Box
        data-slot="search-field"
        data-search-variant="lookup"
        className={className}
        style={{ width: "100%", minWidth: 0, ...style }}
      >
        <TextInput
          ref={ref}
          data-slot="search-input"
          data-search-variant="lookup"
          type="search"
          size="md"
          placeholder={placeholder}
          leftSection={<IconSearch size={16} stroke={1.5} />}
          rightSection={clearBtn}
          value={currentValue}
          onChange={(next) => emitChange(eventFromValue(next))}
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
      </Box>
    );
  },
);
