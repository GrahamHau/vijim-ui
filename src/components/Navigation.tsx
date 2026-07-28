"use client";

import {
  Tabs as MantineTabs,
  SegmentedControl as MantineSegmentedControl,
  Pagination as MantinePagination,
  Menu as MantineMenu,
  Popover as MantinePopover,
  Tooltip as MantineTooltip,
  type TabsProps,
  type SegmentedControlProps,
  type PaginationProps,
  type MenuProps,
  type PopoverProps,
  type TooltipProps,
} from "@mantine/core";
import {
  useEffect,
  useId,
  useRef,
  useState,
  type KeyboardEvent,
  type ReactNode,
} from "react";

export type {
  TabsProps,
  SegmentedControlProps,
  PaginationProps,
  MenuProps,
  PopoverProps,
  TooltipProps,
};

type LegacyTabOption = {
  value: string;
  label: string;
  disabled?: boolean;
};

type LegacyTabsProps = {
  value: string;
  onChange: (value: string) => void;
  options: readonly LegacyTabOption[];
  ariaLabel: string;
};

export function Tabs(props: LegacyTabsProps): ReactNode;
export function Tabs(props: TabsProps): ReactNode;
export function Tabs(props: TabsProps | LegacyTabsProps) {
  if ("options" in props) {
    const legacyProps = props;
    const refs = useRef<Array<HTMLButtonElement | null>>([]);
    function onKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      const delta = event.key === "ArrowRight" ? 1 : -1;
      let next = index;
      do {
        next =
          (next + delta + legacyProps.options.length) %
          legacyProps.options.length;
      } while (legacyProps.options[next]?.disabled && next !== index);
      refs.current[next]?.focus();
      const option = legacyProps.options[next];
      if (option) legacyProps.onChange(option.value);
    }
    return (
      <div className="vj-tabs" role="tablist" aria-label={legacyProps.ariaLabel}>
        {legacyProps.options.map((option, index) => (
          <button
            ref={(node) => {
              refs.current[index] = node;
            }}
            className="vj-tab"
            role="tab"
            aria-selected={legacyProps.value === option.value}
            tabIndex={legacyProps.value === option.value ? 0 : -1}
            disabled={option.disabled}
            onClick={() => legacyProps.onChange(option.value)}
            onKeyDown={(event) => onKeyDown(event, index)}
            key={option.value}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  }
  return <MantineTabs {...props} />;
}
Tabs.List = MantineTabs.List;
Tabs.Tab = MantineTabs.Tab;
Tabs.Panel = MantineTabs.Panel;

export function SegmentedControl(props: LegacyTabsProps): ReactNode;
export function SegmentedControl(props: SegmentedControlProps): ReactNode;
export function SegmentedControl(props: SegmentedControlProps | LegacyTabsProps) {
  if ("options" in props) {
    return (
      <div className="vj-segmented" role="radiogroup" aria-label={props.ariaLabel}>
        {props.options.map((option) => (
          <button
            className="vj-segmented__item"
            role="radio"
            aria-checked={props.value === option.value}
            disabled={option.disabled}
            onClick={() => props.onChange(option.value)}
            key={option.value}
          >
            {option.label}
          </button>
        ))}
      </div>
    );
  }
  return <MantineSegmentedControl size={props.size ?? "sm"} {...props} />;
}

type LegacyPaginationProps = {
  page: number;
  pageCount: number;
  onChange: (page: number) => void;
  ariaLabel?: string;
};

export function Pagination(props: PaginationProps | LegacyPaginationProps) {
  if ("page" in props) {
    const total = Math.max(1, props.pageCount);
    const current = Math.min(total, Math.max(1, props.page));
    const start = Math.max(1, Math.min(current - 2, total - 4));
    const pages = Array.from({ length: Math.min(5, total) }, (_, index) => start + index);
    return (
      <nav className="vj-pagination" aria-label={props.ariaLabel ?? "分页"}>
        <button
          type="button"
          disabled={current <= 1}
          onClick={() => props.onChange(current - 1)}
        >
          上一页
        </button>
        {pages.map((item) => (
          <button
            type="button"
            aria-current={item === current ? "page" : undefined}
            onClick={() => props.onChange(item)}
            key={item}
          >
            {item}
          </button>
        ))}
        <button
          type="button"
          disabled={current >= total}
          onClick={() => props.onChange(current + 1)}
        >
          下一页
        </button>
      </nav>
    );
  }
  return <MantinePagination size={props.size ?? "sm"} {...props} />;
}

/** 下拉菜单（含 Target/Dropdown/Item）；不做 MoreMenu / DropdownMenu 第二套名字 */
export function Menu(props: MenuProps) {
  return <MantineMenu {...props} />;
}
Menu.Target = MantineMenu.Target;
Menu.Dropdown = MantineMenu.Dropdown;
Menu.Item = MantineMenu.Item;
Menu.Label = MantineMenu.Label;
Menu.Divider = MantineMenu.Divider;

type LegacyPopoverProps = {
  trigger: ReactNode;
  triggerLabel: string;
  children?: ReactNode;
  placement?: "start" | "end";
  open?: boolean;
  onOpenChange?: (open: boolean) => void;
};

export function Popover(props: PopoverProps | LegacyPopoverProps) {
  if ("trigger" in props) {
    const [internalOpen, setInternalOpen] = useState(false);
    const controlled = props.open !== undefined;
    const visible = controlled ? props.open : internalOpen;
    const rootRef = useRef<HTMLDivElement | null>(null);
    const contentId = useId();
    const setVisible = (next: boolean) => {
      if (!controlled) setInternalOpen(next);
      props.onOpenChange?.(next);
    };
    useEffect(() => {
      if (!visible) return;
      const onPointerDown = (event: MouseEvent) => {
        if (!rootRef.current?.contains(event.target as Node)) setVisible(false);
      };
      const onKeyDown = (event: globalThis.KeyboardEvent) => {
        if (event.key === "Escape") setVisible(false);
      };
      document.addEventListener("mousedown", onPointerDown);
      document.addEventListener("keydown", onKeyDown);
      return () => {
        document.removeEventListener("mousedown", onPointerDown);
        document.removeEventListener("keydown", onKeyDown);
      };
    }, [visible]);
    return (
      <div className="vj-popover" ref={rootRef}>
        <button
          className="vj-popover__trigger"
          type="button"
          aria-label={props.triggerLabel}
          aria-expanded={visible}
          aria-controls={contentId}
          onClick={() => setVisible(!visible)}
        >
          {props.trigger}
        </button>
        {visible ? (
          <div
            className="vj-popover__content"
            data-placement={props.placement}
            id={contentId}
            data-vj-popover-content
            tabIndex={-1}
          >
            {props.children}
          </div>
        ) : null}
      </div>
    );
  }
  return <MantinePopover {...props} />;
}
Popover.Target = MantinePopover.Target;
Popover.Dropdown = MantinePopover.Dropdown;

type LegacyTooltipProps = {
  trigger: ReactNode;
  triggerLabel: string;
  content: string;
  placement?: "top" | "bottom";
};

export function Tooltip(props: TooltipProps | LegacyTooltipProps) {
  if ("trigger" in props) {
    const id = useId();
    return (
      <span className="vj-tooltip">
        <button type="button" aria-label={props.triggerLabel} aria-describedby={id}>
          {props.trigger}
        </button>
        <span
          className="vj-tooltip__content"
          data-placement={props.placement}
          role="tooltip"
          id={id}
        >
          {props.content}
        </span>
      </span>
    );
  }
  return <MantineTooltip {...props} />;
}
