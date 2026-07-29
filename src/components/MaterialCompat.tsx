"use client";

import {
  Badge as UiBadge,
  FormSection as UiFormSection,
} from "./AdminCompat";
import { type ButtonProps as UiButtonProps, Button as VijimButton } from "./Button";
import { DatePickerInput } from "./DatePicker";
import { Icon as UiIcon, type IconName as UiIconName } from "./Icon";
import { SegmentedControl as UiSegmentedControl } from "./Navigation";
import { Modal } from "./Overlay";
import { SearchInput } from "./SearchInput";
import { SearchableSelect as UiSearchableSelect, Select as UiSelect } from "./Select";
import { Switch as UiSwitch } from "./layout-primitives";
import { Table as UiTable } from "./Table";
import { TextInput } from "./TextInput";
import { Textarea as UiTextarea } from "./Textarea";
import {
  Children,
  cloneElement,
  createContext,
  isValidElement,
  useContext,
  useMemo,
  useState,
  type ChangeEventHandler,
  type ComponentProps,
  type CSSProperties,
  type ReactElement,
  type ReactNode,
} from "react";

const UiButtonAny = VijimButton as unknown as React.ComponentType<Record<string, unknown>>;
const UiBadgeAny = UiBadge as unknown as React.ComponentType<Record<string, unknown>>;
const UiSelectAny = UiSelect as unknown as React.ComponentType<Record<string, unknown>>;
const UiSearchInputAny = SearchInput as unknown as React.ComponentType<Record<string, unknown>>;
const UiSearchableSelectAny = UiSearchableSelect as unknown as React.ComponentType<Record<string, unknown>>;
const UiSegmentedControlAny = UiSegmentedControl as unknown as React.ComponentType<Record<string, unknown>>;

type LegacyButtonVariant = "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
type LegacyButtonSize = "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";

function mergeClassName(...names: Array<string | undefined>): string | undefined {
  return names.filter(Boolean).join(" ") || undefined;
}

function mapButtonVariant(variant?: LegacyButtonVariant): UiButtonProps["variant"] {
  if (variant === "outline") return "outline";
  if (variant === "ghost" || variant === "link") return "ghost";
  if (variant === "secondary") return "light";
  if (variant === "destructive") return "light";
  return "filled";
}

function mapButtonSize(size?: LegacyButtonSize): UiButtonProps["size"] {
  if (size === "xs" || size === "icon-xs") return "xs";
  if (size === "lg" || size === "icon-lg") return "lg";
  return "sm";
}

export function Button({
  asChild,
  variant,
  size,
  color,
  children,
  className,
  ...props
}: Omit<UiButtonProps, "variant" | "size" | "color"> & {
  asChild?: boolean;
  variant?: LegacyButtonVariant;
  size?: LegacyButtonSize;
  color?: UiButtonProps["color"];
  children?: ReactNode;
}) {
  const mappedVariant = mapButtonVariant(variant);
  const mappedSize = mapButtonSize(size);
  const mappedColor = color ?? (variant === "destructive" ? "red" : "brand");

  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<Record<string, unknown>>;
    const childProps = child.props;
    return (
      <UiButtonAny
        component={child.type as never}
        variant={mappedVariant}
        size={mappedSize}
        color={mappedColor}
        data-slot="button"
        data-variant={variant ?? "default"}
        data-size={size ?? "default"}
        className={mergeClassName(className, childProps.className as string | undefined)}
        {...props}
        {...childProps}
      >
        {childProps.children as ReactNode}
      </UiButtonAny>
    );
  }

  return (
    <UiButtonAny
      variant={mappedVariant}
      size={mappedSize}
      color={mappedColor}
      data-slot="button"
      data-variant={variant ?? "default"}
      data-size={size ?? "default"}
      className={className}
      {...props}
    >
      {children}
    </UiButtonAny>
  );
}

export function Badge({
  variant = "default",
  asChild,
  children,
  ...props
}: ComponentProps<"span"> & {
  variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
  asChild?: boolean;
}) {
  const color = variant === "destructive" ? "red" : variant === "secondary" ? "gray" : "brand";
  const mappedVariant = variant === "outline" ? "outline" : variant === "default" ? "light" : "light";
  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<Record<string, unknown>>;
    return (
      <UiBadgeAny
        component={child.type as never}
        color={color}
        variant={mappedVariant}
        data-slot="badge"
        data-variant={variant}
        {...props}
        {...child.props}
      >
        {child.props.children as ReactNode}
      </UiBadgeAny>
    );
  }
  return (
    <UiBadgeAny color={color} variant={mappedVariant} data-slot="badge" data-variant={variant} {...props}>
      {children}
    </UiBadgeAny>
  );
}

export function Icon({
  name,
  size = 16,
  strokeWidth,
  style,
  className,
}: {
  name: string;
  size?: number;
  style?: CSSProperties;
  className?: string;
  strokeWidth?: number;
}) {
  return (
    <UiIcon
      name={name as UiIconName}
      size={size}
      {...(strokeWidth === undefined ? {} : { strokeWidth })}
      className={className ? `material-ds-icon ${className}` : "material-ds-icon"}
      {...(style ? { style } : {})}
    />
  );
}

export function EmptyState({
  icon = "board",
  title,
  description,
  action,
}: {
  icon?: string | ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="material-empty">
      <span className="material-empty__icon" aria-hidden="true">
        {typeof icon === "string" ? <Icon name={icon} size={18} /> : icon}
      </span>
      <strong>{title}</strong>
      {description ? <p>{description}</p> : null}
      {action ? <div className="material-empty__action">{action}</div> : null}
    </div>
  );
}

export function PageHeader({
  eyebrow,
  title,
  description,
  actions,
  backAction,
}: {
  eyebrow?: ReactNode;
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  backAction?: ReactNode;
}) {
  return (
    <header
      className="material-page-header"
      data-slot="page-header"
      style={{ display: "grid", minWidth: 0, gap: 10 }}
    >
      {backAction ? <div className="material-page-header__back">{backAction}</div> : null}
      <div
        style={{
          display: "flex",
          minWidth: 0,
          alignItems: "flex-end",
          justifyContent: "space-between",
          gap: 16,
        }}
      >
        <div style={{ minWidth: 0 }}>
          {eyebrow ? (
            <p
              className="material-eyebrow"
              style={{ margin: "0 0 5px", color: "var(--faint)", fontSize: 12, lineHeight: 1.4 }}
            >
              {eyebrow}
            </p>
          ) : null}
          <h1
            style={{
              margin: 0,
              color: "var(--ink)",
              fontSize: 24,
              fontWeight: 680,
              letterSpacing: 0,
              lineHeight: 1.3,
              overflowWrap: "anywhere",
            }}
          >
            {title}
          </h1>
          {description ? (
            <p style={{ margin: "6px 0 0", color: "var(--muted-foreground)", fontSize: 13, lineHeight: 1.45 }}>
              {description}
            </p>
          ) : null}
        </div>
        {actions ? (
          <div
            className="material-page-header__actions"
            style={{ display: "flex", flex: "none", alignItems: "center", gap: 8 }}
          >
            {actions}
          </div>
        ) : null}
      </div>
    </header>
  );
}

export function SectionHeader({
  title,
  description,
  actions,
  action,
  divider,
}: {
  title: ReactNode;
  description?: ReactNode;
  actions?: ReactNode;
  action?: ReactNode;
  divider?: boolean;
}) {
  return (
    <header
      className="material-section-header"
      data-slot="section-header"
      data-divider={divider ? "true" : "false"}
      style={{ display: "flex", minWidth: 0, alignItems: "flex-end", justifyContent: "space-between", gap: 16 }}
    >
      <div style={{ minWidth: 0 }}>
        <h2 style={{ margin: 0, color: "var(--ink)", fontSize: 18, fontWeight: 650, letterSpacing: 0, lineHeight: 1.35 }}>
          {title}
        </h2>
        {description ? (
          <p style={{ margin: "4px 0 0", color: "var(--muted-foreground)", fontSize: 13, lineHeight: 1.5 }}>
            {description}
          </p>
        ) : null}
      </div>
      {actions ?? action ? <div className="material-section-header__actions">{actions ?? action}</div> : null}
    </header>
  );
}

export function PageToolbar({ children, end }: { children?: ReactNode; end?: ReactNode }) {
  return (
    <div className="material-page-toolbar" data-slot="page-toolbar">
      <div>{children}</div>
      {end ? <div data-slot="page-toolbar-end">{end}</div> : null}
    </div>
  );
}

export function DatePicker({
  value,
  onChange,
  ...props
}: {
  value: string;
  onChange: (value: string) => void;
  id?: string;
  name?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  clearable?: boolean;
  className?: string;
  "aria-describedby"?: string;
  "aria-invalid"?: boolean;
  "aria-required"?: boolean;
}) {
  return (
    <DatePickerInput
      value={value || null}
      onChange={(next) => onChange(next ?? "")}
      clearable={props.clearable ?? true}
      {...props}
    />
  );
}

export function Input({
  controlSize: _controlSize,
  onChange,
  ...props
}: Omit<ComponentProps<typeof TextInput>, "onChange" | "onInputChange"> & {
  controlSize?: "compact" | "default" | "large";
  onChange?: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <TextInput
      data-slot="input"
      {...props}
      {...(onChange ? { onInputChange: onChange } : {})}
    />
  );
}

export function Textarea(props: ComponentProps<typeof UiTextarea>) {
  return <UiTextarea data-slot="textarea" {...props} />;
}

export function Label(props: ComponentProps<"label">) {
  return <label data-slot="label" {...props} />;
}

export function FormField({
  label,
  children,
  htmlFor,
  description,
  status,
  statusText,
  required,
  full,
}: {
  label: string;
  children: ReactNode;
  htmlFor?: string;
  description?: string;
  status?: "error" | "warning" | "success";
  statusText?: string;
  required?: boolean;
  full?: boolean;
}) {
  return (
    <div className={full ? "material-field material-field--wide" : "material-field"} data-status={status}>
      <Label {...(htmlFor ? { htmlFor } : {})}>
        {label}
        {required ? <span aria-hidden="true"> *</span> : null}
      </Label>
      {description ? <p className="material-field-hint">{description}</p> : null}
      {children}
      {statusText ? <p className="material-field-hint">{statusText}</p> : null}
    </div>
  );
}

export function FormGrid({
  children,
  columns = 2,
  gap,
}: {
  children?: ReactNode;
  columns?: 1 | 2 | 3;
  gap?: "sm" | "md" | "lg";
}) {
  return (
    <div className="material-form-grid" data-columns={columns} data-gap={gap ?? "md"}>
      {children}
    </div>
  );
}

export function FormSection({ title, description, children }: { title: string; description?: string; children?: ReactNode }) {
  return <UiFormSection title={title} {...(description ? { description } : {})}>{children}</UiFormSection>;
}

export function FormActions({ children }: { children?: ReactNode }) {
  return <div className="material-action-row">{children}</div>;
}

type SelectContextValue = {
  value: string | undefined;
  onValueChange: ((value: string) => void) | undefined;
  children: ReactNode;
};
const SelectContext = createContext<SelectContextValue | null>(null);

function collectSelectItems(children: ReactNode): Array<{ value: string; label: string; disabled?: boolean }> {
  const items: Array<{ value: string; label: string; disabled?: boolean }> = [];
  Children.forEach(children, (child) => {
    if (!isValidElement(child)) return;
    if (child.type === SelectItem) {
      const props = child.props as { value: string; disabled?: boolean; children?: ReactNode };
      items.push({
        value: props.value,
        label: Children.toArray(props.children).join(""),
        ...(props.disabled !== undefined ? { disabled: props.disabled } : {}),
      });
      return;
    }
    items.push(...collectSelectItems((child.props as { children?: ReactNode }).children));
  });
  return items;
}

function findSelectPlaceholder(children: ReactNode): string | undefined {
  let placeholder: string | undefined;
  Children.forEach(children, (child) => {
    if (!isValidElement(child) || placeholder) return;
    if (child.type === SelectValue) {
      placeholder = (child.props as { placeholder?: string }).placeholder;
      return;
    }
    placeholder = findSelectPlaceholder((child.props as { children?: ReactNode }).children);
  });
  return placeholder;
}

export function Select({
  value,
  onValueChange,
  children,
}: {
  value?: string;
  onValueChange?: (value: string) => void;
  children?: ReactNode;
}) {
  return <SelectContext.Provider value={{ value, onValueChange, children: children ?? null }}>{children}</SelectContext.Provider>;
}

export function SelectTrigger({
  id,
  fullWidth,
  size,
  children,
  "aria-label": ariaLabel,
}: {
  id?: string;
  fullWidth?: boolean;
  size?: "sm" | "default";
  children?: ReactNode;
  "aria-label"?: string;
}) {
  const ctx = useContext(SelectContext);
  const data = useMemo(() => collectSelectItems(ctx?.children), [ctx?.children]);
  const placeholder = findSelectPlaceholder(children);
  return (
    <UiSelectAny
      id={id}
      aria-label={ariaLabel}
      data={data}
      value={ctx?.value || null}
      onChange={(next: string | null) => ctx?.onValueChange?.(next ?? "")}
      clearable={false}
      size={size === "sm" ? "sm" : "md"}
      density={size === "sm" ? "compact" : "default"}
      style={fullWidth ? { width: "100%" } : undefined}
      {...(placeholder ? { placeholder } : {})}
    />
  );
}

export function SelectValue(_props: { placeholder?: string }) {
  return null;
}
export function SelectContent({ children }: { children?: ReactNode; position?: string; align?: string; className?: string }) {
  return <>{children}</>;
}
export function SelectItem(_props: { value: string; disabled?: boolean; children?: ReactNode }) {
  return null;
}

export function SearchableSelect({
  name,
  label,
  value,
  options,
  placeholder,
  emptyLabel,
  onPick,
}: {
  name: string;
  label: string;
  value?: string;
  options: Array<string | { value: string; label: string }>;
  placeholder?: string;
  emptyLabel?: string;
  onPick?: (value: string) => void;
}) {
  return (
    <UiSearchableSelectAny
      name={name}
      label={label}
      value={value ?? ""}
      options={options}
      {...(placeholder ? { placeholder } : {})}
      {...(emptyLabel ? { emptyLabel } : {})}
      {...(onPick ? { onPick } : {})}
    />
  );
}
export type SearchableSelectOption = { value: string; label: string };

export function SegmentedControl({
  options,
  value,
  onChange,
  disabled,
  fullWidth,
  ariaLabel,
  size = "md",
}: {
  options: Array<{ value: string; label: string; meta?: string | number; icon?: ReactNode }>;
  value: string;
  onChange?: (value: string) => void;
  purpose?: "filter" | "view";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  fullWidth?: boolean;
  ariaLabel: string;
}) {
  return (
    <UiSegmentedControlAny
      data={options.map((option) => ({
        value: option.value,
        label: (
          <span className="material-segment-label">
            {option.icon}
            <span>{option.label}</span>
            {option.meta !== undefined ? <small>{option.meta}</small> : null}
          </span>
        ),
      }))}
      value={value}
      onChange={onChange ?? (() => undefined)}
      {...(disabled !== undefined ? { disabled } : {})}
      {...(fullWidth !== undefined ? { fullWidth } : {})}
      aria-label={ariaLabel}
      size={size === "lg" ? "md" : size}
    />
  );
}

export function SearchField({ children }: { variant: "filter" | "lookup"; density?: "compact" | "default"; children?: ReactNode }) {
  return <div className="material-search-field">{children}</div>;
}

export function SearchFieldInput(props: Omit<ComponentProps<"input">, "className" | "style" | "type">) {
  return <UiSearchInputAny {...props} className="material-search-field__input" variant="filter" />;
}

export function Switch({
  checked,
  onCheckedChange,
  ...props
}: Omit<ComponentProps<typeof UiSwitch>, "onChange"> & {
  onCheckedChange?: (checked: boolean) => void;
}) {
  return (
    <UiSwitch
      checked={checked}
      onChange={(event) => onCheckedChange?.(event.currentTarget.checked)}
      {...props}
    />
  );
}

export function Table(props: ComponentProps<typeof UiTable>) {
  return <UiTable data-slot="table" {...props} />;
}
TableHeader.displayName = "TableHeader";
export function TableHeader(props: ComponentProps<"thead">) {
  return <UiTable.Thead data-slot="table-header" {...props} />;
}
export function TableBody(props: ComponentProps<"tbody">) {
  return <UiTable.Tbody data-slot="table-body" {...props} />;
}
export function TableRow(props: ComponentProps<"tr">) {
  return <UiTable.Tr data-slot="table-row" {...props} />;
}
export function TableHead(props: ComponentProps<"th">) {
  return <UiTable.Th data-slot="table-head" {...props} />;
}
export function TableCell(props: ComponentProps<"td">) {
  return <UiTable.Td data-slot="table-cell" {...props} />;
}
export function TableFooter(props: ComponentProps<"tfoot">) {
  return <UiTable.Tfoot data-slot="table-footer" {...props} />;
}
export function TableCaption(props: ComponentProps<"caption">) {
  const Caption = UiTable.Caption as unknown as React.ComponentType<Record<string, unknown>>;
  return <Caption data-slot="table-caption" {...props} />;
}

type DialogContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
};
const DialogContext = createContext<DialogContextValue | null>(null);

export function Dialog({
  open,
  onOpenChange,
  children,
}: {
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
  children?: ReactNode;
}) {
  const [innerOpen, setInnerOpen] = useState(false);
  const actualOpen = open ?? innerOpen;
  const setOpen = (next: boolean) => {
    if (onOpenChange) onOpenChange(next);
    else setInnerOpen(next);
  };
  return <DialogContext.Provider value={{ open: actualOpen, setOpen }}>{children}</DialogContext.Provider>;
}

export function DialogTrigger({ asChild, children }: { asChild?: boolean; children?: ReactNode }) {
  const ctx = useContext(DialogContext);
  if (asChild && isValidElement(children)) {
    const child = children as ReactElement<Record<string, unknown>>;
    return cloneElement(child, {
      onClick: (event: unknown) => {
        (child.props.onClick as ((event: unknown) => void) | undefined)?.(event);
        ctx?.setOpen(true);
      },
    });
  }
  return (
    <Button type="button" onClick={() => ctx?.setOpen(true)}>
      {children}
    </Button>
  );
}

export function DialogContent({
  children,
  className,
  onPointerDownOutside,
  onEscapeKeyDown,
  showCloseButton = true,
}: {
  children?: ReactNode;
  className?: string;
  onPointerDownOutside?: (event: { preventDefault: () => void }) => void;
  onEscapeKeyDown?: (event: { preventDefault: () => void }) => void;
  showCloseButton?: boolean;
}) {
  const ctx = useContext(DialogContext);
  return (
    <Modal
      opened={ctx?.open ?? false}
      onClose={() => ctx?.setOpen(false)}
      className={className}
      closeOnClickOutside={!onPointerDownOutside}
      closeOnEscape={!onEscapeKeyDown}
      withCloseButton={showCloseButton}
      size="lg"
      centered
    >
      <div data-slot="dialog-content" className={className}>{children}</div>
    </Modal>
  );
}

export function DialogHeader(props: ComponentProps<"div">) {
  return <div data-slot="dialog-header" {...props} />;
}
export function DialogTitle(props: ComponentProps<"h2">) {
  return <h2 data-slot="dialog-title" {...props} />;
}
export function DialogDescription(props: ComponentProps<"p">) {
  return <p data-slot="dialog-description" {...props} />;
}
export function DialogFooter({
  showCloseButton,
  children,
  ...props
}: ComponentProps<"div"> & { showCloseButton?: boolean }) {
  const ctx = useContext(DialogContext);
  return (
    <div data-slot="dialog-footer" {...props}>
      {children}
      {showCloseButton ? <Button type="button" variant="outline" onClick={() => ctx?.setOpen(false)}>关闭</Button> : null}
    </div>
  );
}

export function ManagedDialog({
  open,
  onOpenChange,
  trigger,
  title,
  description,
  children,
  footer,
  size = "md",
  closeOnOverlay = true,
  closeOnEscape = true,
  showCloseButton = true,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  trigger?: ReactElement;
  title: string;
  description?: string;
  children?: ReactNode;
  footer?: ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  closeOnOverlay?: boolean;
  closeOnEscape?: boolean;
  showCloseButton?: boolean;
}) {
  const triggerElement = trigger
    ? cloneElement(trigger, {
        onClick: (event: unknown) => {
          (trigger.props as { onClick?: (event: unknown) => void }).onClick?.(event);
          onOpenChange(true);
        },
      } as Partial<typeof trigger.props>)
    : null;

  return (
    <>
      {triggerElement}
      <Modal
        opened={open}
        onClose={() => onOpenChange(false)}
        title={title}
        size={size}
        closeOnClickOutside={closeOnOverlay}
        closeOnEscape={closeOnEscape}
        withCloseButton={showCloseButton}
        centered
      >
        {description ? <p className="material-dialog-description">{description}</p> : null}
        {children}
        {footer ? <div data-slot="dialog-footer">{footer}</div> : null}
      </Modal>
    </>
  );
}
