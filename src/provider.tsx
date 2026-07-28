"use client";

import "@mantine/core/styles.css";
import "@mantine/dates/styles.css";
import "@mantine/notifications/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/dropzone/styles.css";
import "@mantine/spotlight/styles.css";
/** 本包触感层：按压变量 + reduced-motion */
import "./styles.css";

import { MantineProvider, type MantineThemeOverride } from "@mantine/core";
import { DatesProvider } from "@mantine/dates";
import { Notifications } from "@mantine/notifications";
import { ModalsProvider } from "@mantine/modals";
import dayjs from "dayjs";
import "dayjs/locale/zh-cn";
import { useMemo, type ReactNode } from "react";
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
      {withModals ? <ModalsProvider>{tree}</ModalsProvider> : tree}
    </MantineProvider>
  );
}
