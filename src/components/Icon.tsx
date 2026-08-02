"use client";

import {
  IconAlertTriangle,
  IconArchive,
  IconArrowLeft,
  IconArrowRight,
  IconArrowsExchange,
  IconBox,
  IconBoxOff,
  IconBuildingWarehouse,
  IconCalendar,
  IconCategory,
  IconChartBar,
  IconChartBarPopular,
  IconChartLine,
  IconChartPie,
  IconCheck,
  IconChecklist,
  IconChevronDown,
  IconCircle,
  IconClock,
  IconClockHour4,
  IconClipboardText,
  IconDatabase,
  IconExternalLink,
  IconFileText,
  IconFilter,
  IconFlame,
  IconHome,
  IconInfoCircle,
  IconLayoutGrid,
  IconLayoutKanban,
  IconLayoutSidebar,
  IconLayersSubtract,
  IconListCheck,
  IconListDetails,
  IconMessageCheck,
  IconMoneybag,
  IconNote,
  IconPackage,
  IconPercentage,
  IconPlus,
  IconRefresh,
  IconRocket,
  IconSearch,
  IconSettings,
  IconShieldCheck,
  IconShoppingCartCheck,
  IconSparkles,
  IconStar,
  IconTag,
  IconTargetArrow,
  IconTrash,
  IconUpload,
  IconUsersGroup,
  IconUserStar,
  IconVideo,
  IconWorld,
  IconX,
  type IconProps as TablerIconProps,
  type Icon as TablerIcon,
} from "@tabler/icons-react";
import type { CSSProperties } from "react";

export type IconName =
  | "archive"
  | "arrow"
  | "back"
  | "board"
  | "calendar"
  | "cart"
  | "category"
  | "chart"
  | "chart-line"
  | "chart-pie"
  | "chart-trend"
  | "check"
  | "checklist"
  | "chevron"
  | "clock"
  | "close"
  | "clipboard"
  | "cube"
  | "database"
  | "doc"
  | "external-link"
  | "fail"
  | "feed"
  | "filter"
  | "flame"
  | "grid"
  | "home"
  | "info"
  | "layers"
  | "list-check"
  | "message-check"
  | "money"
  | "note"
  | "panel"
  | "percent"
  | "pkg"
  | "plus"
  | "refresh"
  | "rocket"
  | "search"
  | "settings"
  | "shield"
  | "star"
  | "sparkle"
  | "sync"
  | "tag"
  | "target"
  | "trash"
  | "upload"
  | "user-star"
  | "users"
  | "video"
  | "waiting"
  | "warehouse"
  | "world"
  | "warn";

const ICONS: Record<IconName, TablerIcon> = {
  archive: IconArchive,
  arrow: IconArrowRight,
  back: IconArrowLeft,
  board: IconLayoutKanban,
  calendar: IconCalendar,
  cart: IconShoppingCartCheck,
  category: IconCategory,
  chart: IconChartBar,
  "chart-line": IconChartLine,
  "chart-pie": IconChartPie,
  "chart-trend": IconChartBarPopular,
  check: IconCheck,
  checklist: IconChecklist,
  chevron: IconChevronDown,
  clock: IconClock,
  close: IconX,
  clipboard: IconClipboardText,
  cube: IconBox,
  database: IconDatabase,
  doc: IconFileText,
  "external-link": IconExternalLink,
  fail: IconBoxOff,
  feed: IconListDetails,
  filter: IconFilter,
  flame: IconFlame,
  grid: IconLayoutGrid,
  home: IconHome,
  info: IconInfoCircle,
  layers: IconLayersSubtract,
  "list-check": IconListCheck,
  "message-check": IconMessageCheck,
  money: IconMoneybag,
  note: IconNote,
  panel: IconLayoutSidebar,
  percent: IconPercentage,
  pkg: IconPackage,
  plus: IconPlus,
  refresh: IconRefresh,
  rocket: IconRocket,
  search: IconSearch,
  settings: IconSettings,
  shield: IconShieldCheck,
  star: IconStar,
  sparkle: IconSparkles,
  sync: IconArrowsExchange,
  tag: IconTag,
  target: IconTargetArrow,
  trash: IconTrash,
  upload: IconUpload,
  "user-star": IconUserStar,
  users: IconUsersGroup,
  video: IconVideo,
  waiting: IconClockHour4,
  warehouse: IconBuildingWarehouse,
  world: IconWorld,
  warn: IconAlertTriangle,
};

export type IconProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
  className?: string;
  style?: CSSProperties;
} & Pick<TablerIconProps, "color">;

export function Icon({
  name,
  size = 18,
  strokeWidth = 1.8,
  className,
  style,
  color,
}: IconProps) {
  const IconComponent = ICONS[name] ?? IconCircle;
  return (
    <IconComponent
      aria-hidden="true"
      className={className}
      color={color}
      size={size}
      stroke={strokeWidth}
      style={style}
    />
  );
}
