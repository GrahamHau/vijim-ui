/** 窄屏壳层规则随 Provider 注入，业务不再为顶栏拥挤补局部 CSS。 */
export const VIJIM_SHELL_RESPONSIVE_CSS = `
.vj-platform-shell__item:hover,
.vj-platform-shell__item:focus-visible,
.vj-sidebar__item:hover,
.vj-sidebar__item:focus-visible {
  text-decoration: none;
}

.vj-platform-shell__topbar-center {
  min-width: 180px;
  flex: 0 1 420px;
}

.vj-platform-shell[data-viewport="fixed"] {
  position: fixed;
  inset: 0;
  z-index: 50;
  overflow: hidden;
}

.vj-platform-shell[data-viewport="fixed"] .vj-platform-shell__main {
  height: 100%;
  min-height: 0;
}

.vj-platform-shell[data-viewport="fixed"] .vj-platform-shell__content {
  min-height: 0;
  overflow: auto;
}

@media (max-width: 560px) {
  .vj-platform-shell__topbar-title {
    gap: 6px;
  }

  .vj-platform-shell__topbar-context,
  .vj-platform-shell__topbar-context-separator {
    display: none;
  }

  .vj-platform-shell__topbar-center {
    display: none;
  }
}
`;
