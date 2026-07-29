/** Material 兼容组件的排版与表单几何。业务只传语义，不再补本地 CSS。 */
export const VIJIM_MATERIAL_COMPAT_CSS = `
.material-form-grid {
  display: grid;
  column-gap: var(--material-form-column-gap, var(--form-column-gap, 16px));
  row-gap: var(--material-form-row-gap, var(--form-row-gap, 14px));
  align-items: start;
  min-width: 0;
}
.material-form-grid[data-columns] {
  grid-template-columns: repeat(var(--material-form-columns, 2), minmax(0, 1fr));
}
.material-form-grid:not([data-columns]) {
  grid-template-columns: repeat(12, minmax(0, 1fr));
}
.material-form-grid[data-columns] > .material-field {
  grid-column: auto;
  align-self: start;
  min-width: 0;
}
.material-form-grid[data-columns] > .material-field--wide {
  grid-column: 1 / -1;
}
.material-form-grid:not([data-columns]) > .material-field {
  grid-column: span 6;
  align-self: start;
}
.material-form-grid:not([data-columns]) > .material-field--third {
  grid-column: span 4;
}
.material-form-grid:not([data-columns]) > .material-field--wide {
  grid-column: 1 / -1;
}
.material-field {
  display: grid;
  min-width: 0;
  gap: var(--form-field-gap, 5px);
}
.material-field > [data-slot="label"] {
  color: var(--ink-2, #3D4047);
  font-family: var(--font-sans, inherit);
  font-size: var(--type-label-size, 13px);
  font-weight: 500;
  line-height: var(--type-label-line, 1.4);
  letter-spacing: 0;
}
.material-field-hint {
  margin: 0;
  color: var(--faint, #A6AAB2);
  font-family: var(--font-sans, inherit);
  font-size: var(--type-supporting-size, 12px);
  font-weight: 400;
  line-height: var(--type-supporting-line, 1.45);
  letter-spacing: 0;
}
.material-field[data-status="error"] .material-field-hint {
  color: var(--color-error, #E03742);
}
.material-field[data-status="warning"] .material-field-hint {
  color: var(--color-warning, #D88A00);
}
.material-field[data-status="success"] .material-field-hint {
  color: var(--color-success, #18974C);
}
.material-dialog-description {
  margin: 0 0 var(--form-section-gap, 14px);
  color: var(--muted-foreground, #6B7078);
  font-size: var(--type-label-size, 13px);
  line-height: var(--type-label-line, 1.4);
  letter-spacing: 0;
}
[data-slot="dialog-footer"] {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 16px;
}
@media (max-width: 620px) {
  .material-form-grid {
    grid-template-columns: minmax(0, 1fr);
  }
  .material-form-grid[data-columns] > .material-field,
  .material-form-grid[data-columns] > .material-field--wide,
  .material-form-grid:not([data-columns]) > .material-field,
  .material-form-grid:not([data-columns]) > .material-field--third,
  .material-form-grid:not([data-columns]) > .material-field--wide {
    grid-column: auto;
  }
}
`;
