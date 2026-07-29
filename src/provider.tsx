"use client";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/spotlight/styles.css";
/** 触感 + 壳层 + ADMIN 兼容：走 runtime 字符串注入，避免 tsup 抽 CSS 后业务加载不到 */
import { VIJIM_RUNTIME_CSS } from "./runtime-css";
import { VIJIM_SHELL_RESPONSIVE_CSS } from "./shell-responsive-css";

import { MantineProvider, type MantineThemeOverride } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { useEffect, useMemo, type ReactNode } from "react";
import { vijimTheme } from "./theme/vijim-theme";
import { COLORS, FONT, STUDIO_CSS_VARS } from "./theme/tokens";

dayjs.locale("zh-cn");

export type VijimProviderProps = {
  children: ReactNode;
  theme?: MantineThemeOverride;
  withNotifications?: boolean;
  withModals?: boolean;
};

/** SSR 即可用：把 token 打进 <style>，筛选/壳层 var(--line) 等不再等 useEffect */
function buildRootCss(): string {
  const decls = Object.entries(STUDIO_CSS_VARS)
    .map(([k, v]) => `${k}:${v}`)
    .join(";");
  return (
    `:root{color-scheme:light;font-family:${FONT.family};${decls}}` +
    `html,body{background:${COLORS.background};color:${COLORS.ink}}`
  );
}

/**
 * 唯一 Provider：vijimTheme + 中文 Dates + 根 CSS 变量（首屏可用）。
 */
export function VijimProvider({
  children,
  theme = vijimTheme,
  withNotifications = true,
  withModals = true,
}: VijimProviderProps) {
  useEffect(() => {
    const root = document.documentElement;
    const previous = root.getAttribute("data-mantine-color-scheme");
    root.setAttribute("data-mantine-color-scheme", "light");
    return () => {
      if (previous) root.setAttribute("data-mantine-color-scheme", previous);
      else root.removeAttribute("data-mantine-color-scheme");
    };
  }, []);

  const rootCss = useMemo(
    () => (theme === vijimTheme ? buildRootCss() : ""),
    [theme],
  );

  const tree = (
    <DatesProvider
      settings={{ locale: "zh-cn", firstDayOfWeek: 1, consistentWeeks: true }}
    >
      {withNotifications ? (
        <Notifications position="top-right" zIndex={4000} />
      ) : null}
      {children}
    </DatesProvider>
  );

  return (
    <MantineProvider theme={theme} defaultColorScheme="light">
      {rootCss ? (
        <style
          // 筛选条 / 分面词依赖这些变量；必须在首屏 HTML 里就有
          dangerouslySetInnerHTML={{ __html: rootCss }}
        />
      ) : null}
      <style
        // 壳层 / 触感 / ADMIN 兼容样式；必须随 Provider 自动挂载
        dangerouslySetInnerHTML={{
          __html: `${VIJIM_RUNTIME_CSS}\n${VIJIM_SHELL_RESPONSIVE_CSS}`,
        }}
      />
      {withModals ? <ModalsProvider>{tree}</ModalsProvider> : tree}
    </MantineProvider>
  );
}
