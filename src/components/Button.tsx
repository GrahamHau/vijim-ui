"use client";

import {
  Button as MantineButton,
  type ButtonProps as MantineButtonProps,
  type ElementProps,
} from "@mantine/core";
import { forwardRef, type ReactNode } from "react";

/**
 * 按钮变体收敛（业务只认这些，不跟 Mantine 文档散开）：
 * - filled：主行动（默认 brand 蓝）
 * - light：浅底次要
 * - outline：描边
 * - subtle：文字/幽灵
 * - default：中性实底（少用）
 *
 * ghost 为 subtle 别名（兼容旧 Studio API）。
 * 高度默认 sm=32，不跟 Mantine 默认偏大。
 */
export type ButtonVariant =
  | "filled"
  | "light"
  | "outline"
  | "subtle"
  | "default"
  | "ghost"
  /** @deprecated Admin 迁移兼容：用 filled */
  | "primary"
  /** @deprecated Admin 迁移兼容：用 light */
  | "secondary"
  /** @deprecated Admin 迁移兼容：用 filled + color=red */
  | "danger"
  /** @deprecated Admin 迁移兼容：用 subtle */
  | "link";

export type ButtonSize = "xs" | "sm" | "md" | "lg";
/** brand=主蓝；red=危险；其余中性/语义 */
export type ButtonColor =
  | "brand"
  | "neutral"
  | "gray"
  | "red"
  | "green"
  | "yellow";

export type ButtonProps = Omit<
  MantineButtonProps,
  "variant" | "size" | "color"
> &
  ElementProps<"button", keyof MantineButtonProps> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    color?: ButtonColor;
    label?: string;
    icon?: ReactNode;
    iconPosition?: "start" | "end";
    fullWidth?: boolean;
    children?: ReactNode;
  };

function mapVariant(v: ButtonVariant): MantineButtonProps["variant"] {
  if (v === "ghost") return "subtle";
  if (v === "primary") return "filled";
  if (v === "secondary") return "light";
  if (v === "danger") return "filled";
  if (v === "link") return "subtle";
  return v;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
      variant = "filled",
      size = "sm",
      color = "brand",
      label,
      icon,
      iconPosition = "start",
      fullWidth,
      children,
      ...props
    },
    ref,
  ) {
    const mappedColor = variant === "danger" ? "red" : color;
    const isDestructive =
      mappedColor === "red" && (variant === "filled" || variant === "light" || variant === "danger");
    return (
      <MantineButton
        ref={ref}
        variant={mapVariant(variant)}
        size={size}
        color={isDestructive ? "red" : mappedColor}
        {...props}
        leftSection={icon && iconPosition === "start" ? icon : props.leftSection}
        rightSection={icon && iconPosition === "end" ? icon : props.rightSection}
        fullWidth={fullWidth}
      >
        {label ?? children}
      </MantineButton>
    );
  },
);
