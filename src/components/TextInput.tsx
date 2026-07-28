"use client";

import {
  TextInput as MantineTextInput,
  type TextInputProps as MantineTextInputProps,
  type ElementProps,
} from "@mantine/core";
import { forwardRef, type ChangeEventHandler } from "react";
import { SECTION_OFFSET } from "../theme/tokens";

export type TextInputProps = Omit<MantineTextInputProps, "size" | "onChange"> &
  ElementProps<"input", keyof MantineTextInputProps> & {
    size?: "xs" | "sm" | "md" | "lg";
    onChange?: (value: string) => void;
    onInputChange?: ChangeEventHandler<HTMLInputElement>;
    /** @deprecated 用 aria-label */
    ariaLabel?: string;
  };

/**
 * 统一录入框：默认 sm、中性浅底；有 left/right section 时加大内容内边距，图标不贴边。
 */
export const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  function TextInput(
    {
      size = "md",
      leftSection,
      rightSection,
      styles,
      ariaLabel,
      onChange,
      onInputChange,
      ...props
    },
    ref,
  ) {
    const hasLeft = Boolean(leftSection);
    const hasRight = Boolean(rightSection);

    return (
      <MantineTextInput
        ref={ref}
        size={size}
        leftSection={leftSection}
        rightSection={rightSection}
        leftSectionPointerEvents={hasLeft ? "none" : undefined}
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
              ...(hasLeft
                ? { paddingInlineStart: SECTION_OFFSET.left }
                : {}),
              ...(hasRight
                ? { paddingInlineEnd: SECTION_OFFSET.right }
                : {}),
            },
            section: {
              ...(typeof base === "object" && base && "section" in base
                ? (base as { section?: object }).section
                : {}),
              width: SECTION_OFFSET.left,
            },
          };
        }}
        onChange={(event) => {
          onChange?.(event.currentTarget.value);
          onInputChange?.(event);
        }}
        {...props}
        aria-label={props["aria-label"] ?? ariaLabel}
      />
    );
  },
);
