"use client";

/**
 * 页面骨架 —— 几何与 Studio app shell 对齐
 * 侧栏 246 · 顶 60/品牌区 76 · 选中近黑浅底 · 项高 36 · 圆角 8
 */

import {
  AppShell as MantineAppShell,
  Box,
  Burger,
  Group,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { MouseEvent, ReactNode } from "react";
import { COLORS, FONT, RADIUS } from "../theme/tokens";

const SHELL = {
  headerH: 60,
  brandH: 76,
  navbarW: 246,
  contentPadX: 24,
  contentPadY: 20,
  sideItemRadius: 8,
  sideItemMinH: 36,
} as const;

// ── TopBar（Studio ds-topbar） ─────────────────────────

export type TopBarProps = {
  title: string;
  context?: ReactNode;
  badge?: ReactNode;
  actions?: ReactNode;
  backHref?: string;
  backLabel?: string;
  sticky?: boolean;
  onBack?: () => void;
};

export function TopBar({
  title,
  context,
  badge,
  actions,
  backHref,
  backLabel = "返回",
  sticky = true,
  onBack,
}: TopBarProps) {
  return (
    <Box
      component="header"
      style={{
        boxSizing: "border-box",
        position: sticky ? "sticky" : "relative",
        top: sticky ? 0 : undefined,
        zIndex: sticky ? 30 : undefined,
        display: "flex",
        alignItems: "center",
        width: "100%",
        minWidth: 0,
        height: SHELL.headerH,
        gap: 12,
        padding: `0 ${SHELL.contentPadX}px`,
        borderBottom: `1px solid ${COLORS.border}`,
        background: COLORS.surface,
      }}
    >
      {backHref != null || onBack ? (
        <>
          <UnstyledButton
            component={backHref ? "a" : "button"}
            href={backHref}
            onClick={onBack}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              height: 32,
              paddingInline: 10,
              borderRadius: RADIUS.element,
              color: COLORS.mutedFg,
              fontSize: 13,
              fontWeight: 500,
              fontFamily: FONT.family,
              textDecoration: "none",
            }}
          >
            <span aria-hidden>←</span>
            {backLabel}
          </UnstyledButton>
          <Box
            aria-hidden
            style={{
              width: 1,
              height: 24,
              background: COLORS.border,
              flex: "none",
            }}
          />
        </>
      ) : null}

      <Group gap={8} align="center" style={{ flex: 1, minWidth: 0 }} wrap="nowrap">
        <Text
          component="h1"
          style={{
            margin: 0,
            flex: "none",
            color: COLORS.inkSecondary,
            fontSize: 14,
            fontWeight: 580,
            lineHeight: 1.2,
            fontFamily: FONT.family,
          }}
        >
          {title}
        </Text>
        {badge}
        {context != null ? (
          <>
            <Text c="dimmed" size="xs" style={{ flex: "none" }}>
              ·
            </Text>
            <Text
              size="xs"
              c="dimmed"
              style={{
                minWidth: 0,
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
              }}
            >
              {context}
            </Text>
          </>
        ) : null}
      </Group>

      {actions != null ? (
        <Group gap={8} align="center" style={{ flex: "none", marginLeft: "auto" }}>
          {actions}
        </Group>
      ) : null}
    </Box>
  );
}

// ── AppShell ───────────────────────────────────────────

export type AppShellNavItem = {
  key: string;
  label: string;
  href?: string;
  active?: boolean;
  onClick?: () => void;
  icon?: ReactNode;
  section?: string;
};

export type VijimAppShellProps = {
  brand?: ReactNode;
  brandHint?: string;
  navItems?: AppShellNavItem[];
  headerRight?: ReactNode;
  headerCenter?: ReactNode;
  children: ReactNode;
  navbarWidth?: number;
  withHeader?: boolean;
};

export function AppShell({
  brand = "VIJIM STUDIO",
  brandHint,
  navItems = [],
  headerRight,
  headerCenter,
  children,
  navbarWidth = SHELL.navbarW,
  withHeader = true,
}: VijimAppShellProps) {
  const [opened, { toggle }] = useDisclosure();

  return (
    <MantineAppShell
      header={withHeader ? { height: SHELL.headerH } : undefined}
      navbar={{
        width: navbarWidth,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding={0}
      styles={{
        root: { minHeight: "100vh", background: COLORS.body },
        main: {
          background: COLORS.body,
          minHeight: withHeader ? `calc(100vh - ${SHELL.headerH}px)` : "100vh",
        },
        header: {
          background: COLORS.surface,
          borderBottom: `1px solid ${COLORS.border}`,
          boxShadow: "none",
        },
        navbar: {
          background: COLORS.surface,
          borderRight: `1px solid ${COLORS.border}`,
        },
      }}
    >
      {withHeader ? (
        <MantineAppShell.Header px={SHELL.contentPadX}>
          <Group h="100%" justify="space-between" wrap="nowrap" gap="md">
            <Group gap="sm" wrap="nowrap">
              <Burger
                opened={opened}
                onClick={toggle}
                hiddenFrom="sm"
                size="sm"
                color={COLORS.inkSecondary}
              />
              <Text
                fw={650}
                size="sm"
                c={COLORS.ink}
                style={{ letterSpacing: "-0.01em", whiteSpace: "nowrap" }}
                hiddenFrom="sm"
              >
                {brand}
              </Text>
            </Group>

            {headerCenter ? (
              <Box
                style={{
                  flex: 1,
                  minWidth: 0,
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                {headerCenter}
              </Box>
            ) : (
              <Box style={{ flex: 1 }} />
            )}

            {headerRight}
          </Group>
        </MantineAppShell.Header>
      ) : null}

      <MantineAppShell.Navbar
        p={0}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Box
          style={{
            height: SHELL.brandH,
            display: "flex",
            alignItems: "center",
            padding: "0 12px 0 26px",
            flex: "none",
          }}
        >
          <Stack gap={2}>
            <Text
              fw={650}
              size="sm"
              c={COLORS.ink}
              style={{ letterSpacing: "-0.01em" }}
            >
              {brand}
            </Text>
            {brandHint ? (
              <Text size="xs" c="dimmed" lineClamp={1}>
                {brandHint}
              </Text>
            ) : null}
          </Stack>
        </Box>

        <Stack gap={0} style={{ flex: 1, padding: "12px 12px 18px" }}>
          {navItems.map((item) => {
            if (item.section) {
              return (
                <Text
                  key={item.key}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    minHeight: 28,
                    margin: "0 6px 5px",
                    padding: "7px 0 6px",
                    borderBottom: `1px solid ${COLORS.border}`,
                    color: COLORS.faint,
                    fontSize: 11.5,
                    fontWeight: 650,
                    letterSpacing: "0.2px",
                    marginTop: 10,
                  }}
                >
                  {item.section}
                </Text>
              );
            }

            return (
              <Box
                key={item.key}
                component={item.href ? "a" : "button"}
                href={item.href}
                onClick={item.onClick}
                style={{
                  position: "relative",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  minHeight: SHELL.sideItemMinH,
                  padding: "8px 13px",
                  marginBottom: 3,
                  border: "1px solid transparent",
                  width: "100%",
                  textAlign: "left",
                  textDecoration: "none",
                  cursor: "pointer",
                  borderRadius: SHELL.sideItemRadius,
                  backgroundColor: item.active
                    ? COLORS.selectedBg
                    : "transparent",
                  color: item.active ? COLORS.selectedInk : COLORS.inkSecondary,
                  fontWeight: item.active ? 600 : 500,
                  fontSize: 13.5,
                  lineHeight: 1.35,
                  fontFamily: FONT.family,
                  transition: "background-color 0.15s ease, color 0.15s ease",
                }}
                onMouseEnter={(e: MouseEvent<HTMLElement>) => {
                  if (item.active) return;
                  e.currentTarget.style.backgroundColor = COLORS.surface2;
                  e.currentTarget.style.color = COLORS.ink;
                }}
                onMouseLeave={(e: MouseEvent<HTMLElement>) => {
                  if (item.active) return;
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = COLORS.inkSecondary;
                }}
              >
                {item.icon}
                {item.label}
              </Box>
            );
          })}
        </Stack>
      </MantineAppShell.Navbar>

      <MantineAppShell.Main>{children}</MantineAppShell.Main>
    </MantineAppShell>
  );
}

// ── PageShell ──────────────────────────────────────────

export type PageShellProps = {
  title: string;
  description?: string;
  context?: ReactNode;
  badge?: ReactNode;
  actions?: ReactNode;
  backHref?: string;
  backLabel?: string;
  children: ReactNode;
  maxWidth?: number | string;
};

export function PageShell({
  title,
  description,
  context,
  badge,
  actions,
  backHref,
  backLabel,
  children,
  maxWidth,
}: PageShellProps) {
  return (
    <Box style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>
      <TopBar
        title={title}
        context={context ?? description}
        badge={badge}
        actions={actions}
        backHref={backHref}
        backLabel={backLabel}
      />
      <Box
        style={{
          flex: 1,
          padding: `${SHELL.contentPadY}px ${SHELL.contentPadX}px`,
          maxWidth: maxWidth ?? undefined,
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <Stack gap="md">{children}</Stack>
      </Box>
    </Box>
  );
}

// ── ShellTabs ──────────────────────────────────────────

export type ShellTabItem = {
  key: string;
  label: string;
  href?: string;
  active?: boolean;
  onClick?: () => void;
};

export type ShellTabsProps = {
  items: ShellTabItem[];
};

export function ShellTabs({ items }: ShellTabsProps) {
  return (
    <Group gap={2} align="stretch" h={SHELL.headerH} wrap="nowrap">
      {items.map((item) => (
        <Box
          key={item.key}
          component={item.href ? "a" : "button"}
          href={item.href}
          onClick={item.onClick}
          style={{
            display: "inline-flex",
            alignItems: "center",
            height: "100%",
            paddingInline: 14,
            border: "none",
            background: "transparent",
            cursor: "pointer",
            fontFamily: FONT.family,
            fontSize: 13,
            fontWeight: item.active ? 600 : 500,
            color: item.active ? COLORS.ink : COLORS.mutedFg,
            textDecoration: "none",
            boxShadow: item.active
              ? `inset 0 -2px 0 ${COLORS.brand}`
              : "inset 0 -2px 0 transparent",
            transition: "color 0.12s ease, box-shadow 0.12s ease",
          }}
        >
          {item.label}
        </Box>
      ))}
    </Group>
  );
}
