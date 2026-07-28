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

export type {
  TabsProps,
  SegmentedControlProps,
  PaginationProps,
  MenuProps,
  PopoverProps,
  TooltipProps,
};

export function Tabs(props: TabsProps) {
  return <MantineTabs {...props} />;
}
Tabs.List = MantineTabs.List;
Tabs.Tab = MantineTabs.Tab;
Tabs.Panel = MantineTabs.Panel;

export function SegmentedControl(props: SegmentedControlProps) {
  return <MantineSegmentedControl size={props.size ?? "sm"} {...props} />;
}

export function Pagination(props: PaginationProps) {
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

export function Popover(props: PopoverProps) {
  return <MantinePopover {...props} />;
}
Popover.Target = MantinePopover.Target;
Popover.Dropdown = MantinePopover.Dropdown;

export function Tooltip(props: TooltipProps) {
  return <MantineTooltip {...props} />;
}
