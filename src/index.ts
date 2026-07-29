/**
 * @vijimlabs/ui — 业务唯一 UI 出口（封闭面）
 *
 * Mantine 9 仅存在于本包 dependencies，业务禁止 import @mantine/*。
 * 导出白名单见 SURFACE.md；此处有意不 re-export Mantine 全家桶。
 */

// ── 主题（唯一） ───────────────────────────────────────
export { vijimTheme } from "./theme/vijim-theme";
export {
  COLORS,
  CONTROL_HEIGHT,
  CONTROL_PADDING_X,
  RADIUS,
  MOTION,
  SHADOWS,
  FONT,
} from "./theme/tokens";
export { VijimProvider, type VijimProviderProps } from "./provider";
export { Icon, type IconProps, type IconName } from "./components/Icon";

// ── 录入 ───────────────────────────────────────────────
export {
  Button,
  type ButtonProps,
  type ButtonVariant,
  type ButtonSize,
  type ButtonColor,
} from "./components/Button";
export { TextInput, type TextInputProps } from "./components/TextInput";
export { Textarea, type TextareaProps } from "./components/Textarea";
export { SearchInput, type SearchInputProps } from "./components/SearchInput";
export {
  ImageGalleryUpload,
  type ImageGalleryUploadProps,
  type ImageGalleryUploadResult,
} from "./components/ImageGalleryUpload";
export {
  Select,
  SearchableSelect,
  type SelectProps,
  type SelectSize,
  type SelectDensity,
  type SelectOption,
  type SearchableSelectProps,
  type SearchableSelectOption,
} from "./components/Select";
export {
  DatePickerInput,
  DateInput,
  type DatePickerInputProps,
  type DateInputProps,
  type DateString,
} from "./components/DatePicker";

// ── 浮层 / 导航 ────────────────────────────────────────
export { Modal, Drawer, type ModalProps, type DrawerProps } from "./components/Overlay";
export {
  Menu,
  Popover,
  Tooltip,
  Tabs,
  SegmentedControl,
  Pagination,
  type MenuProps,
  type PopoverProps,
  type TooltipProps,
  type TabsProps,
  type SegmentedControlProps,
  type PaginationProps,
} from "./components/Navigation";

// ── 表（列表唯一 DataTable） ───────────────────────────
export {
  DataTable,
  type DataTableProps,
  type DataTableColumn,
  type RowSelectionState,
} from "./components/DataTable";
/** @deprecated 新列表用 DataTable；仅对照页/手写表头 */
export { Table, type TableProps } from "./components/Table";

// ── 筛选 ───────────────────────────────────────────────
export {
  FilterBar,
  FilterBatchBar,
  FilterRow,
  FilterField,
  FilterSegment,
  FilterTerm,
  FilterFacet,
  FilterActive,
  /** @deprecated 新代码用 FilterBar + Stack */
  FilterToolbar,
  type FilterBarProps,
  type FilterBatchBarProps,
  type FilterRowProps,
  type FilterFieldProps,
  type FilterSegmentProps,
  type FilterSegmentOption,
  type FilterTermProps,
  type FilterFacetProps,
  type FilterFacetOption,
  type FilterActiveProps,
  type FilterActiveItem,
  type FilterToolbarProps,
} from "./components/FilterBar";
export { FormSection, type FormSectionProps } from "./components/AdminCompat";

// ── 壳 ─────────────────────────────────────────────────
export {
  AppShell,
  TopBar,
  PageShell,
  ShellTabs,
  SHELL_GEOMETRY,
  type AppShellProps,
  type AppShellNavItem,
  type AppShellNavSection,
  type TopBarProps,
  type PageShellProps,
  type ShellTabsProps,
  type ShellTabItem,
} from "./components/Shell";

// ── 反馈 ───────────────────────────────────────────────
export {
  Empty,
  Skeleton,
  Spinner,
  type EmptyProps,
  type SkeletonProps,
  type SpinnerProps,
} from "./components/Feedback";
export { notify, type NotifyOptions } from "./components/notifications";
export {
  SpotlightSearch,
  spotlight,
  type SpotlightSearchProps,
  type SpotlightActionData,
} from "./components/Spotlight";

// ── 布局 / 字 / 表单钩子 / 图（白名单） ────────────────
export {
  Group,
  Stack,
  HStack,
  Grid,
  Box,
  SimpleGrid,
  Divider,
  Paper,
  Card,
  Text,
  Title,
  Anchor,
  Badge,
  Checkbox,
  Switch,
  Alert,
  ActionIcon,
  useDisclosure,
  useMediaQuery,
  useDebouncedValue,
  useForm,
  isNotEmpty,
  isEmail,
  hasLength,
  AreaChart,
  BarChart,
  type GroupProps,
  type StackProps,
  type HStackProps,
  type GridProps,
  type PaperProps,
  type CardProps,
  type TextProps,
  type TitleProps,
  type BadgeProps,
} from "./components/layout-primitives";

// ── 高级 / 仅对照 ──────────────────────────────────────
/** 自由输入+候选；常规选值请用 Select / SearchableSelect */
export {
  Combobox,
  useCombobox,
  type ComboboxProps,
  type ComboboxStore,
} from "./components/Combobox";
/** 仅 /design-preview/theme-compare */
export { DefaultThemeProvider, IconSearch } from "./components/ThemeCompare";

// ── MATERIAL 迁移兼容面（业务仍只从本包根出口取 UI）────────
export {
  Badge as MaterialBadge,
  Button as MaterialButton,
  DatePicker as MaterialDatePicker,
  Dialog as MaterialDialog,
  DialogContent as MaterialDialogContent,
  DialogDescription as MaterialDialogDescription,
  DialogFooter as MaterialDialogFooter,
  DialogHeader as MaterialDialogHeader,
  DialogTitle as MaterialDialogTitle,
  DialogTrigger as MaterialDialogTrigger,
  EmptyState as MaterialEmptyState,
  FormActions as MaterialFormActions,
  FormField as MaterialFormField,
  FormGrid as MaterialFormGrid,
  FormSection as MaterialFormSection,
  Icon as MaterialIcon,
  Input as MaterialInput,
  Label as MaterialLabel,
  ManagedDialog as MaterialManagedDialog,
  PageHeader as MaterialPageHeader,
  PageToolbar as MaterialPageToolbar,
  SearchableSelect as MaterialSearchableSelect,
  SearchField as MaterialSearchField,
  SearchFieldInput as MaterialSearchFieldInput,
  SectionHeader as MaterialSectionHeader,
  SegmentedControl as MaterialSegmentedControl,
  Select as MaterialSelect,
  SelectContent as MaterialSelectContent,
  SelectItem as MaterialSelectItem,
  SelectTrigger as MaterialSelectTrigger,
  SelectValue as MaterialSelectValue,
  Switch as MaterialSwitch,
  Table as MaterialTable,
  TableBody as MaterialTableBody,
  TableCaption as MaterialTableCaption,
  TableCell as MaterialTableCell,
  TableFooter as MaterialTableFooter,
  TableHead as MaterialTableHead,
  TableHeader as MaterialTableHeader,
  TableRow as MaterialTableRow,
  Textarea as MaterialTextarea,
  type SearchableSelectOption as MaterialSearchableSelectOption,
} from "./components/MaterialCompat";

// ── ADMIN 迁移兼容面（旧 @vijimlabs/ui@0.1 API，仍从本包统一出口）──
export {
  AlertDialog,
  Avatar,
  BrandLockup,
  ChartCard,
  DashboardGrid,
  DashboardGridItem,
  DashboardPage,
  DataSection,
  DatePicker,
  DetailPage,
  Dialog,
  EmptyState,
  ErrorState,
  FilterWorkspace,
  FormField,
  IconButton,
  InputGroup,
  KpiGrid,
  List,
  ListItem,
  ListPage,
  MetadataList,
  MobileNav,
  MultiSelector,
  NumberInput,
  PageCanvas,
  PageHeader,
  PermissionDeniedState,
  ProgressBar,
  SectionHeader,
  SettingsPage,
  SideNav,
  Slider,
  StatCard,
  StatusDot,
  Tag,
  TextArea,
  ThemeProvider,
  Thumbnail,
  ToastRegion,
  TrendBadge,
  publicComponents,
  type AlertDialogProps,
  type BrandProduct,
  type DialogProps,
  type FormFieldProps,
  type ListItemProps,
  type ListProps,
  type NavigationItem,
  type NavigationSection,
  type NumberInputProps,
  type PageCanvasProps,
  type PageHeaderProps,
  type SectionHeaderProps,
  type Space,
  type StatusDotProps,
  type TextAreaProps,
  type Theme,
  type Tone,
  type TrendBadgeProps,
} from "./components/AdminCompat";
