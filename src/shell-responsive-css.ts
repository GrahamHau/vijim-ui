/** 窄屏壳层规则随 Provider 注入，业务不再为顶栏拥挤补局部 CSS。 */
export const VIJIM_SHELL_RESPONSIVE_CSS = `
@media (max-width: 560px) {
  .vj-platform-shell__topbar-title {
    gap: 6px;
  }

  .vj-platform-shell__topbar-context,
  .vj-platform-shell__topbar-context-separator {
    display: none;
  }
}
`;
