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
`;
