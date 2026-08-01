"use client";

import {
  AppShell as PlatformAppShell,
  type AppShellProps as PlatformAppShellProps,
} from "./Shell";

import {
  Card as MantineCard,
  Group,
  SimpleGrid,
  Stack as MantineStack,
  Text,
  type CardProps as MantineCardProps,
  type StackProps as MantineStackProps,
} from "@mantine/core";
import {
  cloneElement,
  forwardRef,
  isValidElement,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ComponentPropsWithoutRef,
  type MouseEventHandler,
  type ReactElement,
  type ReactNode,
} from "react";
import { FORM_LAYOUT, TYPOGRAPHY } from "../theme/tokens";
import { Button } from "./Button";
import { scrollWideTableOnWheel } from "../internal/table-interaction";

export type Tone =
  | "neutral"
  | "accent"
  | "info"
  | "success"
  | "warning"
  | "danger"
  | "error";

function normalizeTone(tone: Tone = "neutral"): string {
  if (tone === "accent") return "info";
  if (tone === "danger") return "error";
  return tone;
}

export type CardProps = MantineCardProps & {
  bodyPadding?: "none" | "sm" | "md" | "lg";
  footer?: ReactNode;
  header?: ReactNode;
  scrollBody?: boolean;
  surface?: "default" | "workflow-node";
};

const PAD = { sm: 12, md: 16, lg: 24 } as const;

export function Card({
  children,
  padding = "md",
  bodyPadding,
  header,
  footer,
  scrollBody = false,
  surface = "default",
  style,
  withBorder,
  ...props
}: CardProps) {
  const workflowNodeStyle = surface === "workflow-node"
    ? {
        overflow: "hidden",
        border: "1px solid var(--workflow-node-card-border)",
        borderRadius: "var(--radius-element)",
        background: "linear-gradient(180deg, var(--surface) 0%, var(--surface) 58%, var(--workflow-node-card-tint) 100%)",
        boxShadow: "none",
      }
    : undefined;
  if (header == null && footer == null && bodyPadding == null && !scrollBody) {
    return (
      <MantineCard
        padding={padding}
        withBorder={surface === "workflow-node" ? true : withBorder}
        data-surface={surface === "default" ? undefined : surface}
        {...props}
        style={{ ...workflowNodeStyle, ...style }}
      >
        {children}
      </MantineCard>
    );
  }

  const outerPad =
    typeof padding === "string" && padding in PAD
      ? PAD[padding as keyof typeof PAD]
      : typeof padding === "number"
        ? padding
        : PAD.md;
  const innerPad =
    bodyPadding === "none"
      ? 0
      : bodyPadding && bodyPadding in PAD
        ? PAD[bodyPadding as keyof typeof PAD]
        : outerPad;

  return (
    <MantineCard
      padding={0}
      radius="md"
      withBorder={surface === "workflow-node" ? true : (withBorder ?? true)}
      data-surface={surface === "default" ? undefined : surface}
      {...props}
      style={{
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        height: scrollBody ? "100%" : undefined,
        ...workflowNodeStyle,
        ...style,
      }}
    >
      {header != null ? (
        <div className="vj-card__header" style={{ padding: outerPad }}>
          {typeof header === "string" ? (
            <div className="vj-card__title">{header}</div>
          ) : (
            header
          )}
        </div>
      ) : null}
      <div
        className="vj-card__body"
        style={{
          padding: innerPad,
          flex: scrollBody ? 1 : undefined,
          minHeight: 0,
          overflow: scrollBody ? "auto" : undefined,
        }}
      >
        {children}
      </div>
      {footer != null ? (
        <div className="vj-card__footer" style={{ padding: outerPad }}>
          {footer}
        </div>
      ) : null}
    </MantineCard>
  );
}

export type BadgeProps = Omit<ComponentPropsWithoutRef<"span">, "children"> & {
  label?: string;
  children?: ReactNode;
  tone?: Tone;
  size?: "xs" | "sm" | "md" | "lg";
  dot?: boolean;
};

export function Badge({ label, children, tone = "neutral", className, ...props }: BadgeProps) {
  return (
    <span
      className={["vj-badge", className].filter(Boolean).join(" ")}
      data-tone={normalizeTone(tone)}
      {...props}
    >
      {label ?? children}
    </span>
  );
}

export type StatusDotProps = { label: string; tone?: Tone };

export function StatusDot({ label, tone = "neutral" }: StatusDotProps) {
  return (
    <span className="vj-status-dot" data-tone={normalizeTone(tone)}>
      {label}
    </span>
  );
}

export type TrendBadgeProps = {
  direction: "up" | "down" | "flat";
  value: string;
  positiveDirection?: "up" | "down";
};

export function TrendBadge({
  direction,
  value,
  positiveDirection = "up",
}: TrendBadgeProps) {
  const tone =
    direction === "flat"
      ? "neutral"
      : direction === positiveDirection
        ? "success"
        : "error";
  const marker = direction === "up" ? "↑" : direction === "down" ? "↓" : "—";
  return (
    <Badge tone={tone}>
      <span aria-hidden>{marker}</span>
      {value}
      <span className="vj-visually-hidden">
        ，趋势{direction === "up" ? "上升" : direction === "down" ? "下降" : "持平"}
      </span>
    </Badge>
  );
}

export type FormFieldProps = {
  label: string;
  children: ReactElement<{
    id?: string;
    "aria-describedby"?: string;
    "aria-invalid"?: boolean;
    required?: boolean;
  }>;
  description?: string;
  error?: string;
  required?: boolean;
};

export function FormField({
  label,
  children,
  description,
  error,
  required = false,
}: FormFieldProps) {
  const generated = useId();
  const inputId = children.props.id ?? `${generated}-control`;
  const messageId = `${generated}-message`;
  const controlProps: Record<string, unknown> = {
    id: inputId,
    required,
    "aria-invalid": Boolean(error),
  };
  if (description || error) controlProps["aria-describedby"] = messageId;
  const control = isValidElement(children)
    ? cloneElement(children, controlProps)
    : children;

  return (
    <div className="vj-field">
      <label className="vj-field__label" htmlFor={inputId}>
        {label}
        {required ? (
          <span className="vj-field__required" aria-hidden>
            {" "}
            *
          </span>
        ) : null}
      </label>
      {control}
      {error || description ? (
        <p
          className="vj-field__message"
          data-error={Boolean(error) || undefined}
          id={messageId}
        >
          {error ?? description}
        </p>
      ) : null}
    </div>
  );
}

export type TextAreaProps = {
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  rows?: 3 | 5 | 8 | number;
  disabled?: boolean;
  name?: string;
  id?: string;
  ariaLabel?: string;
  required?: boolean;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
};

export function TextArea({
  value,
  defaultValue,
  onChange,
  placeholder,
  rows = 5,
  disabled,
  name,
  id,
  ariaLabel,
  required,
  "aria-describedby": describedBy,
  "aria-invalid": invalid,
}: TextAreaProps) {
  return (
    <textarea
      className="vj-textarea"
      data-rows={rows}
      value={value}
      defaultValue={defaultValue}
      onChange={(event) => onChange?.(event.currentTarget.value)}
      placeholder={placeholder}
      disabled={disabled}
      name={name}
      id={id}
      aria-label={ariaLabel}
      required={required}
      aria-describedby={describedBy}
      aria-invalid={invalid}
      rows={typeof rows === "number" ? rows : undefined}
    />
  );
}

export type NumberInputProps = {
  value?: number | null;
  onChange?: (value: number | null) => void;
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
  disabled?: boolean;
  name?: string;
  id?: string;
  ariaLabel?: string;
  required?: boolean;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
};

export function NumberInput({
  value,
  onChange,
  min,
  max,
  step,
  placeholder,
  disabled,
  name,
  id,
  ariaLabel,
  required,
  "aria-describedby": describedBy,
  "aria-invalid": invalid,
}: NumberInputProps) {
  return (
    <input
      className="vj-input"
      type="number"
      value={value ?? ""}
      onChange={(event) =>
        onChange?.(
          event.currentTarget.value === ""
            ? null
            : event.currentTarget.valueAsNumber,
        )
      }
      min={min}
      max={max}
      step={step}
      placeholder={placeholder}
      disabled={disabled}
      name={name}
      id={id}
      aria-label={ariaLabel}
      required={required}
      aria-describedby={describedBy}
      aria-invalid={invalid}
    />
  );
}

export type ListProps = {
  children?: ReactNode;
  density?: "comfortable" | "compact";
  dividers?: boolean;
  ariaLabel: string;
};

export function List({
  children,
  density = "comfortable",
  dividers = false,
  ariaLabel,
}: ListProps) {
  return (
    <div
      className="vj-list"
      data-density={density}
      data-dividers={dividers || undefined}
      role="list"
      aria-label={ariaLabel}
    >
      {children}
    </div>
  );
}

export type ListItemProps = {
  label: ReactNode;
  description?: ReactNode;
  startContent?: ReactNode;
  endContent?: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

export function ListItem({
  label,
  description,
  startContent,
  endContent,
  onClick,
  disabled,
}: ListItemProps) {
  const content = (
    <>
      {startContent ? <span className="vj-list-item__side">{startContent}</span> : null}
      <span className="vj-list-item__body">
        <span className="vj-list-item__label">{label}</span>
        {description ? (
          <span className="vj-list-item__desc">{description}</span>
        ) : null}
      </span>
      {endContent ? <span className="vj-list-item__side">{endContent}</span> : null}
    </>
  );

  return onClick ? (
    <button
      className="vj-list-item"
      role="listitem"
      type="button"
      disabled={disabled}
      onClick={onClick}
    >
      {content}
    </button>
  ) : (
    <div className="vj-list-item" role="listitem">
      {content}
    </div>
  );
}

export type LegacyDataTableColumn<Row> = {
  key: keyof Row & string;
  header: string;
  align?: "start" | "end";
  render?: (row: Row) => ReactNode;
  /** 默认可排序；派生列用 sortValue 返回真实业务值。 */
  sortable?: boolean;
  sortValue?: (row: Row) => string | number | Date | null | undefined;
};

export type LegacyDataTableProps<Row extends object> = {
  columns: readonly LegacyDataTableColumn<Row>[];
  data: readonly Row[];
  rowKey: keyof Row & string;
  ariaLabel: string;
  density?: "compact" | "default";
  emptyLabel?: string;
  /** 表格内容最小宽度；超过容器后由 DataTable 自己横向滚动。 */
  minWidth?: number | string;
};

export function LegacyDataTable<Row extends object>({
  columns,
  data,
  rowKey,
  ariaLabel,
  density = "default",
  emptyLabel = "暂无数据",
  minWidth = 720,
}: LegacyDataTableProps<Row>) {
  const [sort, setSort] = useState<{
    key: keyof Row & string;
    direction: "asc" | "desc";
  } | null>(null);
  const collator = useMemo(
    () => new Intl.Collator("zh-CN", { numeric: true, sensitivity: "base" }),
    [],
  );
  const sortedData = useMemo(() => {
    if (!sort) return data;
    const column = columns.find((candidate) => candidate.key === sort.key);
    if (!column) return data;
    const valueAt = (row: Row) => column.sortValue?.(row) ?? row[column.key];
    const compare = (left: Row, right: Row) => {
      const leftValue = valueAt(left);
      const rightValue = valueAt(right);
      const leftMissing = leftValue === null || leftValue === undefined || leftValue === "";
      const rightMissing = rightValue === null || rightValue === undefined || rightValue === "";
      if (leftMissing || rightMissing) {
        if (leftMissing && rightMissing) return 0;
        return leftMissing ? 1 : -1;
      }
      const leftComparable = leftValue instanceof Date ? leftValue.getTime() : leftValue;
      const rightComparable = rightValue instanceof Date ? rightValue.getTime() : rightValue;
      const result = typeof leftComparable === "number" && typeof rightComparable === "number"
        ? leftComparable - rightComparable
        : collator.compare(String(leftComparable), String(rightComparable));
      return sort.direction === "asc" ? result : -result;
    };
    return data
      .map((row, index) => ({ row, index }))
      .sort((left, right) => compare(left.row, right.row) || left.index - right.index)
      .map(({ row }) => row);
  }, [collator, columns, data, sort]);

  const changeSort = (column: LegacyDataTableColumn<Row>) => {
    if (column.sortable === false) return;
    setSort((current) => {
      if (current?.key !== column.key) return { key: column.key, direction: "asc" };
      if (current.direction === "asc") return { key: column.key, direction: "desc" };
      return null;
    });
  };

  return (
    <div className="vj-table-wrap" onWheel={scrollWideTableOnWheel}>
      <table className="vj-table" data-density={density} style={{ minWidth }}>
        <caption>{ariaLabel}</caption>
        <thead>
          <tr>
            {columns.map((column) => {
              const direction = sort?.key === column.key ? sort.direction : null;
              return (
              <th key={column.key} scope="col" data-align={column.align}>
                {column.sortable === false ? column.header : (
                  <button
                    type="button"
                    className="vj-table-sort"
                    data-direction={direction ?? undefined}
                    onClick={() => changeSort(column)}
                    aria-label={`${column.header}，${
                      direction === "asc"
                        ? "当前正序，点击切换倒序"
                        : direction === "desc"
                          ? "当前倒序，点击恢复默认排序"
                          : "当前默认排序，点击切换正序"
                    }`}
                  >
                    <span>{column.header}</span>
                    <i aria-hidden="true">{direction === "asc" ? "↑" : direction === "desc" ? "↓" : ""}</i>
                  </button>
                )}
              </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.length === 0 ? (
            <tr>
              <td className="vj-table__empty" colSpan={columns.length}>
                {emptyLabel}
              </td>
            </tr>
          ) : (
            sortedData.map((row) => (
              <tr key={String(row[rowKey])}>
                {columns.map((column) => (
                  <td key={column.key} data-align={column.align}>
                    {column.render
                      ? column.render(row)
                      : String(row[column.key] ?? "—")}
                  </td>
                ))}
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export type DialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
};

export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  footer,
}: DialogProps) {
  const ref = useRef<HTMLDialogElement | null>(null);
  useEffect(() => {
    const dialog = ref.current;
    if (!dialog) return;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="vj-dialog"
      onCancel={(event) => {
        event.preventDefault();
        onOpenChange(false);
      }}
      onClose={() => onOpenChange(false)}
      aria-labelledby="vj-dialog-title"
      aria-describedby={description ? "vj-dialog-description" : undefined}
    >
      <header className="vj-dialog__header">
        <h2 className="vj-dialog__title" id="vj-dialog-title">
          {title}
        </h2>
        {description ? (
          <p className="vj-dialog__description" id="vj-dialog-description">
            {description}
          </p>
        ) : null}
      </header>
      <div className="vj-dialog__body">{children}</div>
      <footer className="vj-dialog__footer">
        {footer ?? (
          <Button variant="secondary" label="关闭" onClick={() => onOpenChange(false)} />
        )}
      </footer>
    </dialog>
  );
}

export type AlertDialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description: string;
  confirmLabel: string;
  cancelLabel?: string;
  onConfirm: () => void;
  loading?: boolean;
};

export function AlertDialog({
  open,
  onOpenChange,
  title,
  description,
  confirmLabel,
  cancelLabel = "取消",
  onConfirm,
  loading = false,
}: AlertDialogProps) {
  return (
    <Dialog
      open={open}
      onOpenChange={onOpenChange}
      title={title}
      description={description}
      footer={
        <>
          <Button
            variant="secondary"
            label={cancelLabel}
            onClick={() => onOpenChange(false)}
          />
          <Button
            variant="danger"
            label={confirmLabel}
            loading={loading}
            onClick={onConfirm}
          />
        </>
      }
    />
  );
}

export type Space = "1" | "2" | "3" | "4" | "6";

function mapGap(gap: MantineStackProps["gap"] | Space | undefined) {
  if (gap === "1") return 4;
  if (gap === "2") return 8;
  if (gap === "3") return 12;
  if (gap === "4") return 16;
  if (gap === "6") return 24;
  return gap;
}

export type StackProps = MantineStackProps & { gap?: MantineStackProps["gap"] | Space };

export const Stack = forwardRef<HTMLDivElement, StackProps>(function Stack(
  { gap = "md", ...props },
  ref,
) {
  return <MantineStack ref={ref} gap={mapGap(gap)} {...props} />;
});

export type HStackProps = {
  children?: ReactNode;
  gap?: Space | number | string;
  justify?: "start" | "between" | "center" | "end";
  align?: "start" | "center" | "end";
  wrap?: boolean;
};

export function HStack({
  children,
  gap = "3",
  justify = "start",
  align = "center",
  wrap = false,
}: HStackProps) {
  return (
    <Group
      gap={mapGap(gap as Space)}
      justify={justify === "between" ? "space-between" : justify}
      align={align === "start" ? "flex-start" : align === "end" ? "flex-end" : align}
      wrap={wrap ? "wrap" : "nowrap"}
    >
      {children}
    </Group>
  );
}

export type GridProps = {
  children?: ReactNode;
  gap?: Space | number | string;
  columns?: 1 | 2 | 3 | 4;
};

export function Grid({ children, gap = "4", columns = 2 }: GridProps) {
  return (
    <SimpleGrid cols={{ base: 1, sm: columns }} spacing={mapGap(gap as Space)}>
      {children}
    </SimpleGrid>
  );
}

export type PageCanvasProps = { children?: ReactNode };

export function PageCanvas({ children }: PageCanvasProps) {
  return <main className="vj-page-canvas">{children}</main>;
}

export type PageHeaderProps = {
  title: string;
  scope?: ReactNode;
  context?: string;
  actions?: ReactNode;
};

export function PageHeader({ title, scope, context, actions }: PageHeaderProps) {
  return (
    <header className="vj-page-header">
      <div className="vj-page-header__main">
        <h1 className="vj-page-header__title">{title}</h1>
        {scope}
        {context ? <span className="vj-page-header__context">· {context}</span> : null}
      </div>
      {actions}
    </header>
  );
}

export type SectionHeaderProps = {
  title: string;
  description?: string;
  subtitle?: string;
  actions?: ReactNode;
  /** 标题位于有边框的面板内，由 UI 统一提供内边距与下分隔线。 */
  contained?: boolean;
};

export function SectionHeader({
  title,
  description,
  subtitle,
  actions,
  contained = false,
}: SectionHeaderProps) {
  const copy = description ?? subtitle;
  return (
    <div
      className="vj-section-header"
      data-slot="section-header"
      data-contained={contained ? "true" : undefined}
      style={contained ? {
        padding: `${FORM_LAYOUT.sectionBlock}px ${FORM_LAYOUT.sectionInline}px`,
        borderBottom: "1px solid var(--line)",
      } : undefined}
    >
      <div style={{ minWidth: 0 }}>
        <h2 style={{
          margin: 0,
          fontFamily: "var(--font-sans)",
          fontSize: TYPOGRAPHY.sectionTitle.fontSize,
          fontWeight: TYPOGRAPHY.sectionTitle.fontWeight,
          lineHeight: TYPOGRAPHY.sectionTitle.lineHeight,
          letterSpacing: 0,
        }}>{title}</h2>
        {copy ? <p style={{
          margin: "3px 0 0",
          color: "var(--muted-foreground)",
          fontFamily: "var(--font-sans)",
          fontSize: TYPOGRAPHY.supporting.fontSize,
          fontWeight: TYPOGRAPHY.supporting.fontWeight,
          lineHeight: TYPOGRAPHY.supporting.lineHeight,
          letterSpacing: 0,
        }}>{copy}</p> : null}
      </div>
      {actions}
    </div>
  );
}

type PagePatternProps = PageHeaderProps & { children?: ReactNode };

export function DashboardPage({
  title,
  scope,
  context,
  actions,
  children,
}: PagePatternProps) {
  return (
    <div className="vj-pattern">
      <PageHeader title={title} scope={scope} context={context} actions={actions} />
      <PageCanvas>{children}</PageCanvas>
    </div>
  );
}

export const ListPage = DashboardPage;
export const DetailPage = DashboardPage;
export const SettingsPage = DashboardPage;

export type EmptyStateProps = {
  title: string;
  description: string;
  action?: ReactNode;
};

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <section className="vj-empty-state">
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        {action}
      </div>
    </section>
  );
}

export function PermissionDeniedState({ action }: { action?: ReactNode }) {
  return (
    <EmptyState
      title="没有访问权限"
      description="请联系管理员开通此页面所需权限。"
      action={action}
    />
  );
}

export function ErrorState({ action }: { action?: ReactNode }) {
  return (
    <EmptyState
      title="内容暂时无法加载"
      description="请稍后重试；如果问题持续存在，请联系管理员。"
      action={action}
    />
  );
}

export function FilterWorkspace({
  filters,
  children,
  filterLabel = "筛选条件",
}: {
  filters: ReactNode;
  children?: ReactNode;
  filterLabel?: string;
}) {
  return (
    <div className="vj-filter-workspace">
      <aside aria-label={filterLabel}>{filters}</aside>
      <section>{children}</section>
    </div>
  );
}

export function DataSection({
  title,
  description,
  actions,
  children,
  bodyPadding = "none",
}: {
  title: string;
  description?: string;
  actions?: ReactNode;
  children?: ReactNode;
  bodyPadding?: "none" | "sm" | "md" | "lg";
}) {
  return (
    <Card
      header={<SectionHeader title={title} description={description} actions={actions} />}
      bodyPadding={bodyPadding}
    >
      {children}
    </Card>
  );
}

export type FormSectionProps = {
  title: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
};

export function FormSection({
  title,
  description,
  children,
  footer,
}: FormSectionProps) {
  return (
    <Card header={<SectionHeader title={title} description={description} />} footer={footer}>
      {children}
    </Card>
  );
}

export type NavigationItem = {
  id: string;
  label: string;
  icon?: ReactNode;
  active?: boolean;
  disabled?: boolean;
  onSelect?: () => void;
  href?: string;
  meta?: ReactNode;
};

export type NavigationSection = {
  label?: string;
  items: readonly NavigationItem[];
};

export type AppShellProps = PlatformAppShellProps;

export function AppShell(props: AppShellProps) {
  // ADMIN 旧调用不希望再包一层内容 padding；页面自己用 PageCanvas
  const contentPadding = props.contentPadding ?? false;
  const withHeader = props.withHeader ?? false;
  return (
    <PlatformAppShell
      {...props}
      contentPadding={contentPadding}
      withHeader={withHeader}
    />
  );
}

/** @deprecated 侧栏已并入 AppShell；保留给极少数直接调用 */
export function SideNav({
  product,
  brand,
  navigation,
  user,
}: {
  product: string;
  brand: ReactNode;
  navigation: readonly NavigationSection[];
  user?: ReactNode;
}) {
  return (
    <aside className="vj-sidebar" aria-label={`${product} 主导航`}>
      <div className="vj-sidebar__brand">{brand}</div>
      {navigation.map((section, index) => (
        <nav
          className="vj-sidebar__section"
          aria-label={section.label}
          key={section.label ?? index}
        >
          {section.label ? (
            <div className="vj-sidebar__section-label">{section.label}</div>
          ) : null}
          {section.items.map((item) => (
            <button
              className="vj-sidebar__item"
              type="button"
              aria-current={item.active ? "page" : undefined}
              disabled={item.disabled}
              onClick={item.onSelect}
              key={item.id}
            >
              {item.icon}
              {item.label}
            </button>
          ))}
        </nav>
      ))}
      {user ? <div>{user}</div> : null}
    </aside>
  );
}

/** @deprecated 移动导航已内建在 AppShell */
export function MobileNav({
  product,
}: {
  product: string;
  navigation?: readonly NavigationSection[];
  user?: ReactNode;
}) {
  return (
    <div className="vj-mobile-nav">
      <strong>{product}</strong>
    </div>
  );
}

export function KpiGrid({
  children,
  columns = 4,
}: {
  children?: ReactNode;
  columns?: 2 | 3 | 4;
}) {
  return (
    <div className="vj-kpi-grid" data-columns={columns}>
      {children}
    </div>
  );
}

export function StatCard({
  value,
  label,
  hint,
  trend,
  tone = "neutral",
}: {
  value: ReactNode;
  label: string;
  hint?: string;
  trend?: ReactNode;
  tone?: Extract<Tone, "neutral" | "info" | "error">;
}) {
  return (
    <article className="vj-stat" data-tone={normalizeTone(tone)}>
      <div className="vj-stat__value">
        {value}
        {trend}
      </div>
      <div className="vj-stat__label">{label}</div>
      {hint ? <div className="vj-stat__hint">{hint}</div> : null}
    </article>
  );
}

export function DashboardGrid({ children }: { children?: ReactNode }) {
  return <div className="vj-dashboard-grid">{children}</div>;
}

export function DashboardGridItem({
  children,
  span = 6,
}: {
  children?: ReactNode;
  span?: 4 | 6 | 8 | 12;
}) {
  return (
    <div className="vj-dashboard-grid__item" data-span={span}>
      {children}
    </div>
  );
}

export type IconButtonProps = {
  label: string;
  icon: ReactNode;
  variant?: "secondary" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(
    { label, icon, variant = "ghost", size = "md", disabled, onClick },
    ref,
  ) {
    return (
      <button
        ref={ref}
        className="vj-button vj-icon-button"
        data-variant={variant}
        data-size={size}
        type="button"
        aria-label={label}
        disabled={disabled}
        onClick={onClick}
      >
        {icon}
      </button>
    );
  },
);

export function ProgressBar({
  value,
  max = 100,
  label,
  showValue = false,
  tone = "info",
}: {
  value: number;
  max?: number;
  label: string;
  showValue?: boolean;
  tone?: "info" | "success" | "warning" | "error";
}) {
  const safeMax = Math.max(1, max);
  const percent = Math.min(100, Math.max(0, (value / safeMax) * 100));
  return (
    <div className="vj-progress">
      <div className="vj-progress__meta">
        <span>{label}</span>
        {showValue ? <span>{Math.round(percent)}%</span> : null}
      </div>
      <progress
        className="vj-progress__native"
        data-tone={tone}
        value={value}
        max={safeMax}
      >
        {Math.round(percent)}%
      </progress>
    </div>
  );
}

export function ThemeProvider({
  theme = "light",
  children,
}: {
  theme?: "light" | "dark";
  children: ReactNode;
}) {
  return (
    <div className="vijim-root" data-vijim-theme={theme}>
      {children}
    </div>
  );
}

export type Theme = "light" | "dark";

export function BrandLockup({
  product,
  background = "light",
  alt = `VIJIM ${product}`,
}: {
  product: "STUDIO" | "GTM";
  background?: "light" | "dark";
  alt?: string;
}) {
  return (
    <img
      src={`/brand/vijimlabs-${product.toLowerCase()}-lockup${background === "dark" ? "-dark" : ""}.svg`}
      alt={alt}
    />
  );
}

export type BrandProduct = "STUDIO" | "GTM";

export const publicComponents = [
  "Button",
  "IconButton",
  "Card",
  "Badge",
  "StatusDot",
  "TrendBadge",
  "FormField",
  "TextInput",
  "Tabs",
  "SegmentedControl",
  "List",
  "ListItem",
  "DataTable",
  "Dialog",
  "Stack",
  "HStack",
  "Grid",
  "PageCanvas",
  "PageHeader",
  "SectionHeader",
  "AppShell",
] as const;

export function ToastRegion() {
  return null;
}

export function LineChart() {
  return null;
}

export function AreaChart() {
  return null;
}

export function PieChart() {
  return null;
}

export function Sparkline() {
  return null;
}

export function BarChart() {
  return null;
}

export function ChartCard({
  title,
  description,
  children,
  footer,
}: {
  title: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <Card header={<SectionHeader title={title} description={description} />} footer={footer}>
      {children}
    </Card>
  );
}

export function Avatar({
  src,
  alt,
  fallback,
  size = "md",
}: {
  src?: string;
  alt: string;
  fallback: string;
  size?: "sm" | "md" | "lg";
}) {
  const [failed, setFailed] = useState(false);
  return (
    <span className="vj-avatar" data-size={size}>
      {src && !failed ? (
        <img src={src} alt={alt} onError={() => setFailed(true)} />
      ) : (
        <span aria-label={alt}>{fallback.slice(0, 2)}</span>
      )}
    </span>
  );
}

export function Thumbnail({
  src,
  alt,
  size = "md",
  fallbackLabel = "暂无图片",
}: {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  fallbackLabel?: string;
}) {
  const [failed, setFailed] = useState(false);
  return (
    <span className="vj-thumbnail" data-size={size}>
      {src && !failed ? (
        <img src={src} alt={alt} onError={() => setFailed(true)} />
      ) : (
        <span role="img" aria-label={`${alt}：${fallbackLabel}`}>
          {fallbackLabel}
        </span>
      )}
    </span>
  );
}

export function MetadataList({
  items,
  columns = 1,
  ariaLabel,
}: {
  items: readonly { label: string; value: ReactNode }[];
  columns?: 1 | 2;
  ariaLabel: string;
}) {
  return (
    <dl className="vj-metadata" data-columns={columns} aria-label={ariaLabel}>
      {items.map((item) => (
        <div key={item.label}>
          <dt>{item.label}</dt>
          <dd>{item.value}</dd>
        </div>
      ))}
    </dl>
  );
}

export function MultiSelector({
  values,
  onChange,
  options,
  label,
  disabled,
}: {
  values: readonly string[];
  onChange: (values: string[]) => void;
  options: readonly { value: string; label: string; disabled?: boolean }[];
  label: string;
  disabled?: boolean;
}) {
  const toggle = (value: string) =>
    onChange(
      values.includes(value)
        ? values.filter((item) => item !== value)
        : [...values, value],
    );
  return (
    <div className="vj-multi-selector" role="group" aria-label={label}>
      {options.map((option) => (
        <button
          type="button"
          aria-pressed={values.includes(option.value)}
          disabled={disabled || option.disabled}
          onClick={() => toggle(option.value)}
          key={option.value}
        >
          {option.label}
        </button>
      ))}
    </div>
  );
}

export function Tag({
  label,
  tone = "neutral",
  onRemove,
  removeLabel = `移除${label}`,
}: {
  label: string;
  tone?: "neutral" | "info";
  onRemove?: () => void;
  removeLabel?: string;
}) {
  return (
    <span className="vj-tag" data-tone={tone}>
      <span>{label}</span>
      {onRemove ? (
        <button type="button" aria-label={removeLabel} onClick={onRemove}>
          ×
        </button>
      ) : null}
    </span>
  );
}

export function InputGroup({
  value,
  onChange,
  placeholder,
  prefix,
  suffix,
  disabled,
  id,
  ariaLabel,
  required,
  "aria-describedby": describedBy,
  "aria-invalid": invalid,
}: {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  disabled?: boolean;
  id?: string;
  ariaLabel?: string;
  required?: boolean;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
}) {
  return (
    <div className="vj-input-group" data-invalid={invalid || undefined}>
      {prefix ? <span>{prefix}</span> : null}
      <input
        value={value}
        onChange={(event) => onChange?.(event.currentTarget.value)}
        placeholder={placeholder}
        disabled={disabled}
        id={id}
        aria-label={ariaLabel}
        required={required}
        aria-describedby={describedBy}
        aria-invalid={invalid}
      />
      {suffix ? <span>{suffix}</span> : null}
    </div>
  );
}

export function Slider({
  value,
  onChange,
  label,
  min = 0,
  max = 100,
  step = 1,
  showValue = true,
  disabled,
}: {
  value: number;
  onChange: (value: number) => void;
  label: string;
  min?: number;
  max?: number;
  step?: number;
  showValue?: boolean;
  disabled?: boolean;
}) {
  return (
    <label className="vj-slider">
      <span className="vj-slider__meta">
        <span>{label}</span>
        {showValue ? <strong>{value}</strong> : null}
      </span>
      <input
        type="range"
        value={value}
        onChange={(event) => onChange(event.currentTarget.valueAsNumber)}
        min={min}
        max={max}
        step={step}
        disabled={disabled}
      />
    </label>
  );
}

export function DatePicker({
  value,
  onChange,
  min,
  max,
  disabled,
  id,
  ariaLabel,
  required,
  "aria-describedby": describedBy,
  "aria-invalid": invalid,
}: {
  value?: string;
  onChange?: (value: string) => void;
  min?: string;
  max?: string;
  disabled?: boolean;
  id?: string;
  ariaLabel?: string;
  required?: boolean;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
}) {
  return (
    <input
      className="vj-input vj-date"
      type="date"
      value={value}
      onChange={(event) => onChange?.(event.currentTarget.value)}
      min={min}
      max={max}
      disabled={disabled}
      id={id}
      aria-label={ariaLabel}
      required={required}
      aria-describedby={describedBy}
      aria-invalid={invalid}
    />
  );
}

export function RadioList() {
  return null;
}
