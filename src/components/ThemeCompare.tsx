"use client";

import { MantineProvider } from "@mantine/core";
import type { ReactNode } from "react";
import { IconSearch as TablerIconSearch } from "@tabler/icons-react";

/**
 * 仅供 /design-preview/theme-compare 左栏：挂空默认 theme，
 * 与外层 VijimProvider(vijimTheme) 对照。业务页禁止使用。
 */
export function DefaultThemeProvider({ children }: { children: ReactNode }) {
  return <MantineProvider forceColorScheme="light">{children}</MantineProvider>;
}

/** 图标从 UI 包出口提供，app 不直接依赖 @tabler */
export function IconSearch(props: { size?: number; stroke?: number }) {
  return <TablerIconSearch size={props.size ?? 16} stroke={props.stroke ?? 1.5} />;
}
