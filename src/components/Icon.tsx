"use client";

import {
  IconAlertTriangle,
  IconArrowLeft,
  IconArrowRight,
  IconArrowsExchange,
  IconBox,
  IconChartBar,
  IconCheck,
  IconChevronDown,
  IconCircle,
  IconClock,
  IconDatabase,
  IconFileText,
  IconLayoutGrid,
  IconLayoutKanban,
  IconLayoutSidebar,
  IconLayersSubtract,
  IconListDetails,
  IconNote,
  IconPackage,
  IconPlus,
  IconRefresh,
  IconSearch,
  IconSettings,
  IconShieldCheck,
  IconSparkles,
  IconTag,
  IconUpload,
  IconUsersGroup,
  IconVideo,
  IconX,
  type IconProps as TablerIconProps,
  type Icon as TablerIcon,
} from "@tabler/icons-react";
import type { CSSProperties } from "react";

export type IconName =
  | "arrow"
  | "back"
  | "board"
  | "chart"
  | "check"
  | "chevron"
  | "clock"
  | "close"
  | "cube"
  | "database"
  | "doc"
  | "feed"
  | "grid"
  | "layers"
  | "note"
  | "panel"
  | "pkg"
  | "plus"
  | "refresh"
  | "search"
  | "settings"
  | "shield"
  | "sparkle"
  | "sync"
  | "tag"
  | "upload"
  | "users"
  | "video"
  | "warn";

const ICONS: Record<IconName, TablerIcon> = {
  arrow: IconArrowRight,
  back: IconArrowLeft,
  board: IconLayoutKanban,
  chart: IconChartBar,
  check: IconCheck,
  chevron: IconChevronDown,
  clock: IconClock,
  close: IconX,
  cube: IconBox,
  database: IconDatabase,
  doc: IconFileText,
  feed: IconListDetails,
  grid: IconLayoutGrid,
  layers: IconLayersSubtract,
  note: IconNote,
  panel: IconLayoutSidebar,
  pkg: IconPackage,
  plus: IconPlus,
  refresh: IconRefresh,
  search: IconSearch,
  settings: IconSettings,
  shield: IconShieldCheck,
  sparkle: IconSparkles,
  sync: IconArrowsExchange,
  tag: IconTag,
  upload: IconUpload,
  users: IconUsersGroup,
  video: IconVideo,
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
