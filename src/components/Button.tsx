"use client";

import {
  Button as MantineButton,
  type ButtonProps as MantineButtonProps,
  type ElementProps,
} from "@mantine/core";
import {
  forwardRef,
  isValidElement,
  type ComponentPropsWithoutRef,
  type ReactElement,
  type ReactNode,
} from "react";

/**
 * 按钮变体收敛（业务只认这些，不跟 Mantine 文档散开）：
 * - filled：主行动（默认 brand 蓝）
 * - light：浅底次要
 * - outline：描边
 * - subtle：文字/幽灵
 * - default：中性实底（少用）
 *
 * ghost 为 subtle 别名（兼容旧 Studio API）。
 * destructive 为 filled+red 迁移别名。
 * Admin 旧 variant 只做迁移兼容。
 * 高度默认 sm=32，不跟 Mantine 默认偏大。
 */
export type ButtonVariant =
  | "filled"
  | "light"
  | "outline"
  | "subtle"
  | "default"
  | "ghost"
  | "destructive"
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
    /** 迁移期兼容：让 Button 承载 Link 等子元素，不向业务暴露 Mantine component 方言。 */
    asChild?: boolean;
    label?: string;
    icon?: ReactNode;
    iconPosition?: "start" | "end";
    fullWidth?: boolean;
    children?: ReactNode;
  };

function mapVariant(v: ButtonVariant): MantineButtonProps["variant"] {
  if (v === "destructive") return "filled";
  if (v === "ghost") return "subtle";
  if (v === "primary") return "filled";
  if (v === "secondary") return "light";
  if (v === "danger") return "filled";
  if (v === "link") return "subtle";
  return v;
}

function mapColor(variant: ButtonVariant, color: ButtonColor): ButtonColor {
  if (variant === "destructive" || variant === "danger") return "red";
  return color;
}

function isDestructiveButton(variant: ButtonVariant, color: ButtonColor) {
  return (
    color === "red" &&
    (variant === "filled" ||
      variant === "light" ||
      variant === "destructive" ||
      variant === "danger")
  );
}

function splitAsChild(
  children: ReactNode,
):
  | {
      component: ReactElement["type"];
      childProps: ComponentPropsWithoutRef<"a">;
      childChildren: ReactNode;
    }
  | null {
  if (!isValidElement(children)) return null;
  const child = children as ReactElement<ComponentPropsWithoutRef<"a">>;
  const { children: childChildren, ...childProps } = child.props;
  return {
    component: child.type,
    childProps,
    childChildren,
  };
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  function Button(
    {
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
    },
    ref,
  ) {
    const child = asChild ? splitAsChild(children) : null;
    const mappedColor = mapColor(variant, color);
    const buttonChildren = label ?? (child ? child.childChildren : children);
    const commonProps = {
      ref,
      variant: mapVariant(variant),
      size,
      color: isDestructiveButton(variant, mappedColor) ? "red" : mappedColor,
      leftSection:
        icon && iconPosition === "start" ? icon : props.leftSection,
      rightSection:
        icon && iconPosition === "end" ? icon : props.rightSection,
      fullWidth,
      ...props,
    };

    if (child) {
      const AnyMantineButton = MantineButton as any;
      return (
        <AnyMantineButton
          component={child.component}
          {...child.childProps}
          {...commonProps}
        >
          {buttonChildren}
        </AnyMantineButton>
      );
    }

    return <MantineButton {...commonProps}>{buttonChildren}</MantineButton>;
  },
);
