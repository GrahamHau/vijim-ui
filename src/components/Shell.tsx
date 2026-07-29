"use client";

/**
 * 全平台唯一页面骨架。
 * 几何：侧栏 246 · 品牌区 76 · 顶栏 60 · 内容区 20/22。
 * 业务只填导航 / 品牌 / 用户 / 顶栏动作，不自写壳层布局。
 */

import {
  Box,
  Group,
  Stack,
  Text,
  UnstyledButton,
} from "@mantine/core";
import type { MouseEvent, ReactNode } from "react";
import { useEffect, useId, useRef, useState } from "react";
import { COLORS, FONT, RADIUS } from "../theme/tokens";
import { Icon } from "./Icon";

export const SHELL_GEOMETRY = {
  headerH: 60,
  brandH: 76,
  navbarW: 246,
  contentPadX: 22,
  contentPadY: 20,
  sideItemRadius: 8,
  sideItemMinH: 36,
} as const;

// ── TopBar ─────────────────────────────────────────────

export type TopBarProps = {
  title: ReactNode;
  /** 路线定位默认是 h1；有正文记录标题时用 div，确保页面只有一个主标题。 */
  titleComponent?: "h1" | "div";
  context?: ReactNode;
  badge?: ReactNode;
  center?: ReactNode;
  actions?: ReactNode;
  backHref?: string;
  backLabel?: string;
  sticky?: boolean;
  onBack?: () => void;
  leading?: ReactNode;
};

export function TopBar({
  title,
  titleComponent = "h1",
  context,
  badge,
  center,
  actions,
  backHref,
  backLabel = "返回",
  sticky = true,
  onBack,
  leading,
}: TopBarProps) {
  return (
    <Box
      component="header"
      className="vj-platform-shell__topbar"
      style={{
        boxSizing: "border-box",
        position: sticky ? "sticky" : "relative",
        top: sticky ? 0 : undefined,
        zIndex: sticky ? 30 : undefined,
      }}
    >
      {leading}
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
            <Icon name="back" size={14} aria-hidden />
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

      <Group gap={8} align="center" className="vj-platform-shell__topbar-title" wrap="nowrap">
        <Text
          component={titleComponent}
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
            <Text
              c="dimmed"
              size="xs"
              className="vj-platform-shell__topbar-context-separator"
              style={{ flex: "none" }}
            >
              ·
            </Text>
            <Text
              size="xs"
              c="dimmed"
              className="vj-platform-shell__topbar-context"
            >
              {context}
            </Text>
          </>
        ) : null}
      </Group>

      {center != null ? (
        <div className="vj-platform-shell__topbar-center">{center}</div>
      ) : null}

      {actions != null ? (
        <Group gap={8} align="center" className="vj-platform-shell__topbar-actions">
          {actions}
        </Group>
      ) : null}
    </Box>
  );
}

// ── AppShell ───────────────────────────────────────────

export type AppShellNavItem = {
  key?: string;
  id?: string;
  label: string;
  href?: string;
  active?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  onSelect?: () => void;
  icon?: ReactNode;
  meta?: ReactNode;
  section?: string;
};

export type AppShellNavSection = {
  label?: string;
  items: readonly AppShellNavItem[];
};

export type AppShellProps = {
  /** 产品代号；兼容 ADMIN 旧调用 */
  product?: "STUDIO" | "GTM" | "ADMIN" | "PORTAL" | "MATERIAL" | string;
  brand?: ReactNode;
  brandHint?: string;
  /** 新推荐：分组导航 */
  navigation?: readonly AppShellNavSection[];
  /** 兼容旧扁平导航 */
  navItems?: AppShellNavItem[];
  user?: ReactNode;
  footer?: ReactNode;
  header?: ReactNode;
  headerTitle?: ReactNode;
  headerTitleComponent?: TopBarProps["titleComponent"];
  headerContext?: ReactNode;
  headerBadge?: ReactNode;
  headerBackHref?: string;
  headerBackLabel?: string;
  headerRight?: ReactNode;
  headerCenter?: ReactNode;
  headerActions?: ReactNode;
  children: ReactNode;
  contentPadding?: boolean;
  withHeader?: boolean;
  className?: string;
  contentClassName?: string;
  contentSurface?: "background" | "surface";
  viewport?: "page" | "fixed";
};

function normalizeSections(
  navigation?: readonly AppShellNavSection[],
  navItems?: AppShellNavItem[],
): AppShellNavSection[] {
  if (navigation && navigation.length > 0) return [...navigation];
  if (!navItems || navItems.length === 0) return [];

  const sections: AppShellNavSection[] = [];
  let current: AppShellNavSection = { items: [] };

  for (const item of navItems) {
    if (item.section) {
      if (current.items.length > 0 || current.label) sections.push(current);
      current = { label: item.section, items: [] };
      continue;
    }
    current = {
      ...current,
      items: [...current.items, item],
    };
  }
  if (current.items.length > 0 || current.label) sections.push(current);
  return sections;
}

function NavTree({
  sections,
  onNavigate,
}: {
  sections: readonly AppShellNavSection[];
  onNavigate?: () => void;
}) {
  return (
    <div className="vj-platform-shell__nav">
      {sections.map((section, index) => (
        <div className="vj-platform-shell__section" key={section.label ?? `section-${index}`}>
          {section.label ? (
            <div className="vj-platform-shell__section-label">{section.label}</div>
          ) : null}
          {section.items.map((item) => {
            const key = item.key ?? item.id ?? item.label;
            const active = Boolean(item.active);
            const disabled = Boolean(item.disabled);
            const handle = (event: MouseEvent<HTMLElement>) => {
              if (disabled) {
                event.preventDefault();
                return;
              }
              item.onClick?.();
              item.onSelect?.();
              onNavigate?.();
            };
            const content = (
              <>
                {item.icon ? <span className="vj-platform-shell__item-icon">{item.icon}</span> : null}
                <span className="vj-platform-shell__item-label">{item.label}</span>
                {item.meta ? <span className="vj-platform-shell__item-meta">{item.meta}</span> : null}
              </>
            );

            if (item.href && !disabled) {
              return (
                <a
                  key={key}
                  href={item.href}
                  className="vj-platform-shell__item"
                  data-active={active ? "true" : "false"}
                  aria-current={active ? "page" : undefined}
                  onClick={handle}
                >
                  {content}
                </a>
              );
            }

            return (
              <button
                key={key}
                type="button"
                className="vj-platform-shell__item"
                data-active={active ? "true" : "false"}
                aria-current={active ? "page" : undefined}
                disabled={disabled}
                onClick={handle}
              >
                {content}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );
}

export function AppShell({
  product,
  brand = product ? `VIJIM ${product}` : "VIJIM",
  brandHint,
  navigation,
  navItems = [],
  user,
  footer,
  header,
  headerTitle,
  headerTitleComponent,
  headerContext,
  headerBadge,
  headerBackHref,
  headerBackLabel,
  headerRight,
  headerCenter,
  headerActions,
  children,
  contentPadding = true,
  withHeader = true,
  className,
  contentClassName,
  contentSurface = "background",
  viewport = "page",
}: AppShellProps) {
  const sections = normalizeSections(navigation, navItems);
  const [mobileOpen, setMobileOpen] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLElement>(null);
  const drawerTitleId = useId();
  const foot = footer ?? user;

  useEffect(() => {
    const desktopQuery = window.matchMedia("(min-width: 901px)");
    const closeAtDesktop = (event: MediaQueryListEvent | MediaQueryList) => {
      if (event.matches) setMobileOpen(false);
    };
    closeAtDesktop(desktopQuery);
    desktopQuery.addEventListener("change", closeAtDesktop);
    return () => desktopQuery.removeEventListener("change", closeAtDesktop);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const frame = window.requestAnimationFrame(() => closeRef.current?.focus());
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        setMobileOpen(false);
        return;
      }
      if (event.key !== "Tab" || !panelRef.current) return;
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(
          'a[href],button:not([disabled]),[tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => el.getClientRects().length > 0);
      const first = focusable[0];
      const last = focusable.at(-1);
      if (!first || !last) return;
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener("keydown", onKeyDown);
      previous?.focus();
    };
  }, [mobileOpen]);

  const brandNode =
    typeof brand === "string" ? (
      <Stack gap={2}>
        <Text fw={650} size="sm" c={COLORS.ink} style={{ letterSpacing: "-0.01em" }}>
          {brand}
        </Text>
        {brandHint ? (
          <Text size="xs" c="dimmed" lineClamp={1}>
            {brandHint}
          </Text>
        ) : null}
      </Stack>
    ) : (
      brand
    );

  const topbar =
    header ??
    (withHeader && (headerTitle || headerCenter || headerRight || headerActions) ? (
      <TopBar
        title={headerTitle ?? (typeof brand === "string" ? brand : product ?? "VIJIM")}
        titleComponent={headerTitleComponent}
        context={headerContext}
        center={headerCenter}
        badge={headerBadge}
        actions={headerActions ?? headerRight}
        backHref={headerBackHref}
        backLabel={headerBackLabel}
        leading={
          <button
            type="button"
            className="vj-platform-shell__menu-button"
            aria-label="打开导航"
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen(true)}
          >
            <Icon name="panel" size={18} />
          </button>
        }
      />
    ) : withHeader ? (
      <div className="vj-platform-shell__topbar">
        <button
          type="button"
          className="vj-platform-shell__menu-button"
          aria-label="打开导航"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <Icon name="panel" size={18} />
        </button>
        <div className="vj-platform-shell__topbar-title">
          <strong>{typeof brand === "string" ? brand : product ?? "VIJIM"}</strong>
        </div>
        {headerActions ?? headerRight}
      </div>
    ) : null);

  return (
    <div
      className={["vj-platform-shell", className].filter(Boolean).join(" ")}
      data-product={product}
      data-viewport={viewport}
    >
      <aside className="vj-platform-shell__sidebar" aria-label={`${product ?? "VIJIM"} 主导航`}>
        <div className="vj-platform-shell__brand">{brandNode}</div>
        <NavTree sections={sections} />
        {foot ? <div className="vj-platform-shell__footer">{foot}</div> : null}
      </aside>

      <div className="vj-platform-shell__drawer" data-open={mobileOpen ? "true" : "false"}>
        <button
          type="button"
          className="vj-platform-shell__drawer-backdrop"
          aria-label="关闭导航"
          tabIndex={-1}
          onClick={() => setMobileOpen(false)}
        />
        <aside
          ref={panelRef}
          className="vj-platform-shell__drawer-panel"
          aria-label="移动端主导航"
          aria-modal="true"
          role="dialog"
          aria-labelledby={drawerTitleId}
        >
          <div className="vj-platform-shell__brand" id={drawerTitleId}>
            {brandNode}
            <button
              ref={closeRef}
              type="button"
              className="vj-platform-shell__menu-button"
              aria-label="关闭导航"
              onClick={() => setMobileOpen(false)}
              style={{ display: "grid" }}
            >
              <Icon name="close" size={18} />
            </button>
          </div>
          <NavTree sections={sections} onNavigate={() => setMobileOpen(false)} />
          {foot ? <div className="vj-platform-shell__footer">{foot}</div> : null}
        </aside>
      </div>

      <div
        className="vj-platform-shell__main"
        aria-hidden={mobileOpen ? true : undefined}
        {...(mobileOpen ? { inert: true } : {})}
      >
        {topbar}
        {contentPadding ? (
          <div
            className={["vj-platform-shell__content", contentClassName].filter(Boolean).join(" ")}
            data-surface={contentSurface}
            style={{ background: contentSurface === "surface" ? COLORS.surface : COLORS.background }}
          >
            {children}
          </div>
        ) : (
          children
        )}
      </div>
    </div>
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
        className="vj-platform-shell__content"
        style={{
          maxWidth: maxWidth ?? undefined,
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
    <Group gap={2} align="stretch" h={SHELL_GEOMETRY.headerH} wrap="nowrap">
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
