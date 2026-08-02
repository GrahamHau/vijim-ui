/**
 * DataTable 两条兼容路径共用的表头交互样式。
 *
 * LegacyDataTable 使用原生 table，ModernDataTable 使用 Mantine Table；
 * 排序按钮必须保持为表头文字的一部分，不能退化成浏览器原生按钮。
 */
export const VIJIM_DATA_TABLE_CSS = `
.vj-table-wrap,
.vj-data-table-scroll {
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  overscroll-behavior-inline: contain;
}

.vj-table-wrap .vj-table th {
  background: var(--vijim-surface-subtle, var(--surface-3, #f6f7f9));
  color: var(--vijim-text-secondary, var(--ink-2, #3d4047));
}

.vj-table-sort {
  appearance: none;
  display: inline-flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  justify-content: space-between;
  gap: var(--vijim-2, 8px);
  border: 0;
  padding: 0;
  background: transparent;
  color: inherit;
  font: inherit;
  font-weight: inherit;
  line-height: inherit;
  text-align: left;
  cursor: pointer;
  transition: color var(--duration-fast, 160ms) var(--ease-out, ease);
}

.vj-table-sort > span {
  min-width: 0;
}

.vj-table-sort > i {
  display: inline-grid;
  flex: none;
  width: 14px;
  place-items: center;
  color: var(--vijim-text-disabled, var(--faint, #a6aab2));
  font-size: 0.9em;
  font-style: normal;
  font-weight: 500;
}

.vj-table-sort[data-direction] > i,
.vj-table-sort:hover,
.vj-table-sort:focus-visible {
  color: var(--vijim-text-primary, var(--ink, #121317));
}

.vj-table-sort:focus-visible {
  outline: 2px solid var(--vijim-focus, rgba(51, 112, 255, 0.35));
  outline-offset: 2px;
}

.vj-data-table-column-header {
  display: flex;
  width: 100%;
  min-width: 0;
  align-items: center;
  gap: var(--vijim-1, 4px);
}

.vj-data-table-column-header__sort {
  flex: 1 1 auto;
}

.vj-data-table-column-header__label {
  min-width: 0;
  flex: 1 1 auto;
  overflow: hidden;
  color: inherit;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.vj-data-table-column-header .vj-popover {
  flex: none;
}

.vj-data-table-column-header .vj-popover__trigger {
  display: inline-grid;
  width: 22px;
  height: 22px;
  min-height: 22px;
  place-items: center;
  border: 0;
  border-radius: var(--vijim-radius-term, 6px);
  padding: 0;
  background: transparent;
  color: var(--vijim-text-disabled, var(--faint, #a6aab2));
  cursor: pointer;
  transition:
    background-color var(--duration-fast, 160ms) var(--ease-out, ease),
    color var(--duration-fast, 160ms) var(--ease-out, ease);
}

.vj-data-table-column-header__filter-trigger {
  display: inline-grid;
  place-items: center;
  opacity: 0.66;
  transition: opacity var(--duration-fast, 160ms) var(--ease-out, ease);
}

.vj-data-table-column-header:hover .vj-data-table-column-header__filter-trigger,
.vj-data-table-column-header .vj-popover__trigger:hover .vj-data-table-column-header__filter-trigger,
.vj-data-table-column-header .vj-popover__trigger:focus-visible .vj-data-table-column-header__filter-trigger,
.vj-data-table-column-header__filter-trigger[data-active] {
  opacity: 1;
}

.vj-data-table-column-header .vj-popover__trigger:hover,
.vj-data-table-column-header .vj-popover__trigger:focus-visible {
  background: var(--vijim-surface-subtle, var(--muted, #f6f7f9));
  color: var(--vijim-text-primary, var(--ink, #121317));
  outline: 0;
}

.vj-data-table-column-header .vj-popover__trigger:focus-visible {
  box-shadow: 0 0 0 2px var(--vijim-focus, rgba(51, 112, 255, 0.35));
}

.vj-data-table-column-header[data-filtered] .vj-popover__trigger {
  background: var(--vijim-accent-subtle, var(--term-selected-bg, rgba(51, 112, 255, 0.08)));
  color: var(--vijim-accent-default, var(--brand, #3370ff));
}

.vj-data-table-column-header__filter-popover {
  display: flex;
  width: 240px;
  align-items: center;
  gap: var(--vijim-2, 8px);
}

.vj-data-table-column-header__filter-popover [data-slot="text-input"] {
  flex: 1 1 auto;
}
`;
