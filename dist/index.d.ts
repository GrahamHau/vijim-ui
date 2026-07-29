import * as _mantine_core from '@mantine/core';
import { MantineThemeOverride, ButtonProps as ButtonProps$1, ElementProps, TextInputProps as TextInputProps$1, TextareaProps as TextareaProps$1, SelectProps as SelectProps$1, DrawerProps as DrawerProps$1, ModalProps as ModalProps$1, MenuProps, PaginationProps, PopoverProps, SegmentedControlProps, TabsProps, TooltipProps, CardProps as CardProps$1, StackProps as StackProps$1, TableProps as TableProps$1, SkeletonProps as SkeletonProps$1, Switch as Switch$1 } from '@mantine/core';
export { ActionIcon, Alert, Anchor, Box, Checkbox, Combobox, ComboboxProps, ComboboxStore, Divider, Group, GroupProps, MenuProps, PaginationProps, Paper, PaperProps, PopoverProps, SegmentedControlProps, SimpleGrid, Switch, TabsProps, Text, TextProps, Title, TitleProps, TooltipProps, useCombobox } from '@mantine/core';
import * as react from 'react';
import { ReactNode, CSSProperties, ComponentPropsWithoutRef, ChangeEventHandler, KeyboardEvent, ReactElement, MouseEventHandler, ComponentProps } from 'react';
import { IconProps as IconProps$1 } from '@tabler/icons-react';
import * as recharts_types_util_types from 'recharts/types/util/types';
import * as recharts from 'recharts';
import { CartesianGrid, LabelList, Tooltip as Tooltip$1, TooltipContentProps } from 'recharts';
import { DateInputProps as DateInputProps$1, DatePickerInputProps as DatePickerInputProps$1 } from '@mantine/dates';
import * as node_modules__mantine_core_lib_components_Menu_MenuDivider_MenuDivider from 'node_modules/@mantine/core/lib/components/Menu/MenuDivider/MenuDivider';
import * as node_modules__mantine_core_lib_components_Menu_MenuLabel_MenuLabel from 'node_modules/@mantine/core/lib/components/Menu/MenuLabel/MenuLabel';
import * as node_modules__mantine_core_lib_components_Menu_MenuItem_MenuItem from 'node_modules/@mantine/core/lib/components/Menu/MenuItem/MenuItem';
import * as node_modules__mantine_core_lib_components_Menu_MenuDropdown_MenuDropdown from 'node_modules/@mantine/core/lib/components/Menu/MenuDropdown/MenuDropdown';
import { ColumnDef, RowSelectionState, OnChangeFn } from '@tanstack/react-table';
export { RowSelectionState } from '@tanstack/react-table';
import * as node_modules__mantine_core_lib_components_Table_TableScrollContainer from 'node_modules/@mantine/core/lib/components/Table/TableScrollContainer';
import { SpotlightActionData } from '@mantine/spotlight';
export { SpotlightActionData, spotlight } from '@mantine/spotlight';
export { useDebouncedValue, useDisclosure, useMediaQuery } from '@mantine/hooks';
export { hasLength, isEmail, isNotEmpty, useForm } from '@mantine/form';
export { AreaChart, BarChart } from '@mantine/charts';

/**
 * 唯一主题：色/形/动全部在本包 tokens 闭环（无外部主题依赖）
 */
declare const vijimTheme: MantineThemeOverride;

/**
 * @vijimlabs/ui 唯一设计令牌（业务唯一真源）
 *
 * - 色：短名单见 COLOR.md（与 GTM 同值便于全平台一致）
 * - 形/动/触：本包内建（按压、ease-out、软阴影、按尺寸圆角）
 * - Mantine 默认 token 一律被 vijimTheme 覆盖，业务不要读 Mantine CSS 变量
 */
/** 录入高度：compact 32 / default 40 / large 44（同 GTM control-height） */
declare const CONTROL_HEIGHT: {
    readonly xs: 28;
    readonly sm: 32;
    readonly md: 40;
    readonly lg: 44;
};
declare const CONTROL_PADDING_X: {
    readonly xs: 8;
    readonly sm: 10;
    readonly md: 12;
    readonly lg: 14;
};
/**
 * 圆角按尺寸：小词条偏方、大面更软
 * 词条 6 · 控件/按钮 8 · 面板/卡 12 · 弹层 16
 */
declare const RADIUS: {
    readonly default: "md";
    readonly xs: "4px";
    readonly sm: "6px";
    readonly md: "8px";
    readonly lg: "12px";
    readonly xl: "16px";
    /** 按钮 / 录入 —— 触感软一点 */
    readonly element: "8px";
    readonly panel: "12px";
    readonly card: "12px";
    /** 弹层 / sheet —— 更厚的面 */
    readonly overlay: "16px";
    readonly page: "10px";
    /** 分面词条：小尺寸偏方，非胶囊 */
    readonly term: "6px";
    /** FilterSegment 外框 */
    readonly segment: "8px";
};
/**
 * 动效（本系统内建）
 * - 按压：100ms ease-out + scale(0.97)，按下即反馈
 * - 默认：干净 ease-out，浮层 springish、不弹
 * - 禁止 ease-in 开头（发闷）
 */
declare const MOTION: {
    readonly easeOut: "cubic-bezier(0.23, 1, 0.32, 1)";
    readonly easeInOut: "cubic-bezier(0.77, 0, 0.175, 1)";
    /** 浮层/抽屉：收得顺、不 overshoot */
    readonly springish: "cubic-bezier(0.32, 0.72, 0, 1)";
    readonly press: "100ms";
    readonly fast: "160ms";
    readonly normal: "280ms";
    readonly pressScale: "0.97";
};
/**
 * 阴影只表达脱离文档流的海拔。页面内卡片、筛选壳和选中态保持平面。
 * xs/sm 保留为兼容别名；md=浮层，lg/xl=模态。
 */
declare const SHADOWS: {
    readonly none: "none";
    /** 兼容旧选中滑块：改用灰面 / 边线表达，不抬高。 */
    readonly xs: "none";
    /** 页面内筛选壳 / 卡片：平面。 */
    readonly sm: "none";
    /** 下拉 / popover */
    readonly md: "0 6px 18px rgba(18, 19, 23, 0.1), 0 0 0 1px rgba(18, 19, 23, 0.06)";
    /** 模态 */
    readonly lg: "0 16px 40px rgba(18, 19, 23, 0.14), 0 0 0 1px rgba(18, 19, 23, 0.06)";
    readonly xl: "0 16px 40px rgba(18, 19, 23, 0.14), 0 0 0 1px rgba(18, 19, 23, 0.06)";
};
declare const FONT: {
    readonly family: "\"SF Pro Text\",\"SF Pro Display\",-apple-system,BlinkMacSystemFont,\"Helvetica Neue\",\"Segoe UI\",\"PingFang SC\",\"Microsoft YaHei\",sans-serif";
    readonly mono: "\"SF Mono\",\"Cascadia Code\",\"Roboto Mono\",ui-monospace,monospace";
    readonly headingWeight: "600";
    readonly bodyWeight: "400";
    readonly sizes: {
        readonly xs: "12px";
        readonly sm: "13px";
        readonly md: "14px";
        readonly lg: "16px";
        readonly xl: "18px";
        readonly h1: "28px";
        readonly h2: "22px";
        readonly h3: "18px";
        readonly h4: "16px";
    };
    /** 全平台字距保持 0，避免中英文混排在窄容器中失真。 */
    readonly tracking: {
        readonly display: "0";
        readonly title: "0";
        readonly body: "0";
        readonly caption: "0";
    };
    readonly leading: {
        readonly display: 1.15;
        readonly title: 1.25;
        readonly body: 1.5;
        readonly dense: 1.35;
    };
};
/**
 * William Material Hub 运行版流程轴状态色。
 *
 * 这组颜色只服务“完成 / 当前 / 未开始”的顺序节点表达，不替代平台品牌色或
 * 通用 success/info 色。数值来自 legacy/public/styles.css 的真实运行样式。
 */
declare const WORKFLOW_STEP_COLORS: {
    readonly active: "#3370FF";
    readonly activeMuted: "rgba(51, 112, 255, 0.13)";
    readonly completed: "#00B42A";
    readonly pendingBorder: "#E5E6EB";
    readonly pendingText: "#83898F";
    readonly connector: "#F0F1F3";
    readonly foreground: "#FFFFFF";
    readonly nodeCardBorder: "#EEEEEE";
    readonly nodeCardTint: "#F9F9F9";
};
/**
 * 业务分类词条色。
 *
 * 仅用于“爆款 / 利润款 / 引流款 / 活动款”等彼此并列的分类标签；不替代
 * brand、success、warning、danger 等状态根色。保留完整六色短表，避免各业务
 * 页面再造同义的 tag palette。
 */
declare const TAG_COLORS: {
    readonly blue: "#356FB6";
    readonly cyan: "#2A7F88";
    readonly green: "#3E8461";
    readonly amber: "#9A711C";
    readonly rose: "#C65370";
    readonly violet: "#7163A8";
};
/**
 * 组件用色表。
 * 规范键优先；下列别名仅兼容存量调用，新代码请用规范键。
 */
declare const COLORS: {
    readonly foreground: "#121317";
    readonly actionPrimary: "#3370FF";
    readonly actionPrimaryHover: "#245BDB";
    readonly termSelectedBg: "rgba(51, 112, 255, 0.08)";
    readonly termSelectedInk: "#3370FF";
    /** @deprecated 用 background */
    readonly body: "#F7F8FA";
    /** @deprecated 用 ink2 */
    readonly inkSecondary: "#3D4047";
    /** @deprecated 用 mutedForeground */
    readonly mutedFg: "#6B7078";
    /** @deprecated 用 muted */
    readonly surfaceMuted: "#F6F7F9";
    /** @deprecated 用 line2 */
    readonly borderStrong: "rgba(18, 19, 23, 0.14)";
    /** 主行动浅底（链接 hover 底、词条选中底）≈ brand 8% */
    readonly brandMuted: "rgba(51, 112, 255, 0.08)";
    /** 强调浅底 ≈ brand 10%（GTM --color-accent-muted） */
    readonly brandSoft: "rgba(51, 112, 255, 0.10)";
    /** 侧栏/列表选中底 ≈ ink 7% on surface */
    readonly selectedBg: "rgba(18, 19, 23, 0.07)";
    readonly selectedInk: "#121317";
    /** 通用 hover / pressed 叠层 */
    readonly overlayHover: "rgba(18, 19, 23, 0.06)";
    readonly overlayPressed: "rgba(18, 19, 23, 0.10)";
    /** 录入 hover/focus：ink 叠在 surface 上（对齐 GTM field-*） */
    readonly fieldHover: "rgba(18, 19, 23, 0.035)";
    readonly fieldFocus: "rgba(18, 19, 23, 0.05)";
    readonly errorFieldBg: "rgba(224, 55, 66, 0.06)";
    readonly background: "#F7F8FA";
    readonly ink: "#121317";
    readonly ink2: "#3D4047";
    readonly mutedForeground: "#6B7078";
    readonly faint: "#A6AAB2";
    readonly surface: "#FFFFFF";
    readonly muted: "#F6F7F9";
    readonly surface2: "#FAFAFB";
    /** GTM: rgb(18 19 23 / 8.5%) */
    readonly border: "rgba(18, 19, 23, 0.085)";
    /** GTM: rgb(18 19 23 / 14%) */
    readonly line2: "rgba(18, 19, 23, 0.14)";
    /** 全平台主行动 = GTM --brand / --action-primary */
    readonly brand: "#3370FF";
    readonly brandHover: "#245BDB";
    readonly brandActive: "#1E4FB8";
    readonly brandForeground: "#FFFFFF";
    readonly info: "#1969CD";
    readonly success: "#18974C";
    readonly warning: "#EEA800";
    readonly danger: "#E03742";
    readonly favorite: "#E5484D";
    readonly ai: "#9065B0";
};

type VijimProviderProps = {
    children: ReactNode;
    theme?: MantineThemeOverride;
    withNotifications?: boolean;
    withModals?: boolean;
};
/**
 * 唯一 Provider：vijimTheme + 中文 Dates + 根 CSS 变量（首屏可用）。
 */
declare function VijimProvider({ children, theme, withNotifications, withModals, }: VijimProviderProps): react.JSX.Element;

type IconName = "archive" | "arrow" | "back" | "board" | "calendar" | "cart" | "category" | "chart" | "chart-line" | "chart-pie" | "chart-trend" | "check" | "checklist" | "chevron" | "clock" | "close" | "clipboard" | "cube" | "database" | "doc" | "external-link" | "fail" | "feed" | "flame" | "grid" | "home" | "info" | "layers" | "list-check" | "message-check" | "money" | "note" | "panel" | "percent" | "pkg" | "plus" | "refresh" | "rocket" | "search" | "settings" | "shield" | "star" | "sparkle" | "sync" | "tag" | "target" | "trash" | "upload" | "user-star" | "users" | "video" | "waiting" | "warehouse" | "world" | "warn";
type IconProps = {
    name: IconName;
    size?: number;
    strokeWidth?: number;
    className?: string;
    style?: CSSProperties;
} & Pick<IconProps$1, "color">;
declare function Icon$1({ name, size, strokeWidth, className, style, color, }: IconProps): react.JSX.Element;

declare const ChartPrimitives: {
    readonly Bar: <DataPointType = any, ValueAxisType = any>(props: recharts.BarProps<DataPointType, ValueAxisType>) => react.ReactElement;
    readonly CartesianGrid: typeof CartesianGrid;
    readonly ComposedChart: <DataPointType = any>(props: recharts_types_util_types.CartesianChartProps<DataPointType> & {
        ref?: React.Ref<SVGSVGElement>;
    }) => React.ReactElement;
    readonly LabelList: typeof LabelList;
    readonly Line: {
        <DataPointType = any, ValueAxisType = any>(props: recharts.LineProps<DataPointType, ValueAxisType>): react.ReactElement;
        (props: recharts.LineProps<any, any>): react.ReactElement;
    };
    readonly LineChart: <DataPointType = any>(props: recharts_types_util_types.CartesianChartProps<DataPointType> & {
        ref?: React.Ref<SVGSVGElement>;
    }) => React.ReactElement;
    readonly ResponsiveContainer: react.ForwardRefExoticComponent<recharts.ResponsiveContainerProps & react.RefAttributes<HTMLDivElement>>;
    readonly Tooltip: typeof Tooltip$1;
    readonly XAxis: <DataPointType = any, DataValueType = any>(props: recharts.XAxisProps<DataPointType, DataValueType>) => react.ReactElement;
    readonly YAxis: <DataPointType = any, DataValueType = any>(props: recharts.YAxisProps<DataPointType, DataValueType>) => react.ReactElement;
};
type ChartTooltipContentProps = TooltipContentProps;

/**
 * 按钮变体收敛（业务只认这些，不跟 Mantine 文档散开）：
 * - filled：主行动（默认 brand 蓝）
 * - light：浅底次要
 * - outline：描边
 * - subtle：文字/幽灵
 * - default：中性实底（少用）
 *
 * ghost 为 subtle 别名（兼容旧 Studio API）。
 * destructive 为 filled+red 迁移别名。
 * Admin 旧 variant 只做迁移兼容。
 * 高度默认 sm=32，不跟 Mantine 默认偏大。
 */
type ButtonVariant = "filled" | "light" | "outline" | "subtle" | "default" | "ghost" | "destructive"
/** @deprecated Admin 迁移兼容：用 filled */
 | "primary"
/** @deprecated Admin 迁移兼容：用 light */
 | "secondary"
/** @deprecated Admin 迁移兼容：用 filled + color=red */
 | "danger"
/** @deprecated Admin 迁移兼容：用 subtle */
 | "link";
type ButtonSize = "xs" | "sm" | "md" | "lg";
/** brand=主蓝；red=危险；其余中性/语义 */
type ButtonColor = "brand" | "neutral" | "gray" | "red" | "green" | "yellow";
type ButtonProps = Omit<ButtonProps$1, "variant" | "size" | "color"> & ElementProps<"button", keyof ButtonProps$1> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    color?: ButtonColor;
    /** 迁移期兼容：让 Button 承载 Link 等子元素，不向业务暴露 Mantine component 方言。 */
    asChild?: boolean;
    label?: string;
    icon?: ReactNode;
    iconPosition?: "start" | "end";
    fullWidth?: boolean;
    children?: ReactNode;
};
declare const Button$1: react.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & react.RefAttributes<HTMLButtonElement>>;
type UnstyledButtonProps = ComponentPropsWithoutRef<"button">;
/** 只提供按钮语义，供 Tree 行、整行选择器等业务布局承载交互。 */
declare const UnstyledButton: react.ForwardRefExoticComponent<Omit<react.DetailedHTMLProps<react.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, "ref"> & react.RefAttributes<HTMLButtonElement>>;

type TextInputProps = Omit<TextInputProps$1, "size" | "onChange"> & ElementProps<"input", keyof TextInputProps$1> & {
    size?: "xs" | "sm" | "md" | "lg";
    onChange?: (value: string) => void;
    onInputChange?: ChangeEventHandler<HTMLInputElement>;
    /** @deprecated 用 aria-label */
    ariaLabel?: string;
};
/**
 * 统一录入框：默认 sm、中性浅底；有 left/right section 时加大内容内边距，图标不贴边。
 */
declare const TextInput: react.ForwardRefExoticComponent<Omit<TextInputProps, "ref"> & react.RefAttributes<HTMLInputElement>>;

type TextareaProps = Omit<TextareaProps$1, "size"> & ElementProps<"textarea", keyof TextareaProps$1> & {
    size?: "xs" | "sm" | "md" | "lg";
};
declare const Textarea$1: react.ForwardRefExoticComponent<Omit<TextareaProps, "ref"> & react.RefAttributes<HTMLTextAreaElement>>;

type SearchInputVariant = "filter" | "lookup";
type SearchInputProps = Omit<TextInputProps, "leftSection" | "type" | "variant" | "size" | "onChange"> & {
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onClear?: () => void;
    clearable?: boolean;
    /** Studio 双面：默认 filter（列表筛选） */
    variant?: SearchInputVariant;
    defaultValue?: string;
    onFocus?: () => void;
    onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
    spellCheck?: boolean;
    "aria-label"?: string;
};
declare const SearchInput: react.ForwardRefExoticComponent<Omit<SearchInputProps, "ref"> & react.RefAttributes<HTMLInputElement>>;

type FileInputProps = Omit<ComponentPropsWithoutRef<"input">, "type">;
/** 文件选择的唯一底层入口；触发器和上传流程由业务按场景组合。 */
declare const FileInput: react.ForwardRefExoticComponent<FileInputProps & react.RefAttributes<HTMLInputElement>>;

type ImageGalleryUploadResult = {
    ok: true;
    url: string;
} | {
    ok: false;
    message: string;
};
type ImageGalleryUploadProps = {
    values: string[];
    onAdd: (url: string, file: File) => void;
    onRemove: (url: string) => void;
    onReorder?: (values: string[]) => void;
    upload?: (file: File) => Promise<ImageGalleryUploadResult>;
    accept?: string;
    maxSize?: number;
    maxItems?: number;
    multiple?: boolean;
    replaceable?: boolean;
    reorderable?: boolean;
    coverBadge?: boolean;
    removable?: boolean | ((url: string, index: number) => boolean);
    addLabel?: string;
    hint?: string;
    paste?: boolean;
    drop?: boolean;
    aspectRatio?: string;
    frameless?: boolean;
    disabled?: boolean;
    readOnly?: boolean;
};
declare function ImageGalleryUpload({ values, onAdd, onRemove, onReorder, upload, accept, maxSize, maxItems, multiple, replaceable, reorderable, coverBadge, removable, addLabel, hint, paste, drop, aspectRatio, frameless, disabled, readOnly, }: ImageGalleryUploadProps): react.JSX.Element;

type SelectSize = "xs" | "sm" | "md" | "lg";
/** compact = 筛选条；default = 表单 */
type SelectDensity = "default" | "compact";
type SelectOption = {
    value: string;
    label: string;
    disabled?: boolean;
};
type SelectProps = Omit<SelectProps$1, "size" | "data"> & {
    size?: SelectSize;
    /** compact → 高度走 CONTROL_HEIGHT.sm，筛选条用 */
    density?: SelectDensity;
    data?: SelectProps$1["data"];
    /** @deprecated Admin/Studio 迁移兼容；新代码用 data */
    options?: readonly SelectOption[];
    /** @deprecated 用 aria-label */
    ariaLabel?: string;
};
declare const Select$1: react.ForwardRefExoticComponent<Omit<SelectProps, "ref"> & react.RefAttributes<HTMLInputElement>>;
type SearchableSelectOption$1 = string | {
    value: string;
    label: string;
    disabled?: boolean;
};
type SearchableSelectProps = {
    id?: string;
    name?: string;
    /** 无障碍标签；筛选条可不展示可见 label */
    label: string;
    /** 受控值；与 defaultValue 二选一 */
    value?: string | null;
    /** 非受控初始值（表单 GET 场景） */
    defaultValue?: string | null;
    options: readonly SearchableSelectOption$1[];
    placeholder?: string;
    /** 空值时的占位文案（如「全部品牌」） */
    emptyLabel?: string;
    onPick?: (value: string) => void;
    onChange?: (value: string) => void;
    disabled?: boolean;
    clearable?: boolean;
    /** 默认 compact（筛选条）；表单用 default */
    density?: SelectDensity;
    size?: SelectSize;
    searchable?: boolean;
    nothingFoundMessage?: string;
    style?: CSSProperties;
    className?: string;
    minWidth?: number;
};
/**
 * 可搜索下拉：筛选用 compact；与 Select 同一皮，禁止页面再写 height 魔数。
 */
declare function SearchableSelect$1({ name, id, label, value, defaultValue, options, placeholder, emptyLabel, onPick, onChange, disabled, clearable, density, size, searchable, nothingFoundMessage, style, className, minWidth, }: SearchableSelectProps): react.JSX.Element;

/** 业务日期契约：YYYY-MM-DD 或 null */
type DateString = string | null;

type SharedDateProps = {
    size?: "xs" | "sm" | "md" | "lg";
    /** 业务契约：YYYY-MM-DD 或 null */
    value?: DateString;
    defaultValue?: DateString;
    onChange?: (value: DateString) => void;
};
type DatePickerInputProps = Omit<DatePickerInputProps$1, "value" | "defaultValue" | "onChange" | "size" | "type" | "valueFormat"> & SharedDateProps;
type DateInputProps = Omit<DateInputProps$1, "value" | "defaultValue" | "onChange" | "size" | "valueFormat"> & SharedDateProps;
/**
 * 日期选择：对外 value 固定 YYYY-MM-DD | null，不暴露 Date/datetime。
 */
declare const DatePickerInput: react.ForwardRefExoticComponent<Omit<DatePickerInputProps, "ref"> & react.RefAttributes<HTMLButtonElement>>;
declare const DateInput: react.ForwardRefExoticComponent<Omit<DateInputProps, "ref"> & react.RefAttributes<HTMLInputElement>>;

type ModalProps = ModalProps$1;
type DrawerProps = DrawerProps$1;
declare function Modal(props: ModalProps): react.JSX.Element;
declare function Drawer(props: DrawerProps): react.JSX.Element;

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
declare function Tabs(props: LegacyTabsProps): ReactNode;
declare function Tabs(props: TabsProps): ReactNode;
declare namespace Tabs {
    var List: _mantine_core.MantineComponent<{
        props: _mantine_core.TabsListProps;
        ref: HTMLDivElement;
        stylesNames: _mantine_core.TabsListStylesNames;
        compound: true;
    }>;
    var Tab: _mantine_core.MantineComponent<{
        props: _mantine_core.TabsTabProps;
        ref: HTMLButtonElement;
        stylesNames: _mantine_core.TabsTabStylesNames;
        compound: true;
    }>;
    var Panel: _mantine_core.MantineComponent<{
        props: _mantine_core.TabsPanelProps;
        ref: HTMLDivElement;
        stylesNames: _mantine_core.TabsPanelStylesNames;
        compound: true;
    }>;
}
declare function SegmentedControl$1(props: LegacyTabsProps): ReactNode;
declare function SegmentedControl$1(props: SegmentedControlProps): ReactNode;
type LegacyPaginationProps = {
    page: number;
    pageCount: number;
    onChange: (page: number) => void;
    ariaLabel?: string;
};
declare function Pagination(props: PaginationProps | LegacyPaginationProps): react.JSX.Element;
/** 下拉菜单（含 Target/Dropdown/Item）；不做 MoreMenu / DropdownMenu 第二套名字 */
declare function Menu(props: MenuProps): react.JSX.Element;
declare namespace Menu {
    var Target: typeof _mantine_core.MenuTarget;
    var Dropdown: _mantine_core.MantineComponent<{
        props: _mantine_core.MenuDropdownProps;
        ref: HTMLDivElement;
        stylesNames: node_modules__mantine_core_lib_components_Menu_MenuDropdown_MenuDropdown.MenuDropdownStylesNames;
        compound: true;
    }>;
    var Item: (<C = "button">(props: _mantine_core.PolymorphicComponentProps<C, _mantine_core.MenuItemProps>) => React.ReactElement) & Omit<react.FunctionComponent<(_mantine_core.MenuItemProps & {
        component?: any;
    } & Omit<any, "component" | keyof _mantine_core.MenuItemProps> & {
        ref?: any;
        renderRoot?: (props: any) => any;
    }) | (_mantine_core.MenuItemProps & {
        component: React.ElementType;
        renderRoot?: (props: Record<string, any>) => any;
    })>, never> & _mantine_core.ThemeExtend<{
        props: _mantine_core.MenuItemProps;
        defaultRef: HTMLButtonElement;
        defaultComponent: "button";
        stylesNames: node_modules__mantine_core_lib_components_Menu_MenuItem_MenuItem.MenuItemStylesNames;
        compound: true;
    }> & _mantine_core.ComponentClasses<{
        props: _mantine_core.MenuItemProps;
        defaultRef: HTMLButtonElement;
        defaultComponent: "button";
        stylesNames: node_modules__mantine_core_lib_components_Menu_MenuItem_MenuItem.MenuItemStylesNames;
        compound: true;
    }> & _mantine_core.PolymorphicComponentWithProps<{
        props: _mantine_core.MenuItemProps;
        defaultRef: HTMLButtonElement;
        defaultComponent: "button";
        stylesNames: node_modules__mantine_core_lib_components_Menu_MenuItem_MenuItem.MenuItemStylesNames;
        compound: true;
    }> & Record<string, never>;
    var Label: _mantine_core.MantineComponent<{
        props: _mantine_core.MenuLabelProps;
        ref: HTMLDivElement;
        stylesNames: node_modules__mantine_core_lib_components_Menu_MenuLabel_MenuLabel.MenuLabelStylesNames;
        compound: true;
    }>;
    var Divider: _mantine_core.MantineComponent<{
        props: _mantine_core.MenuDividerProps;
        ref: HTMLDivElement;
        stylesNames: node_modules__mantine_core_lib_components_Menu_MenuDivider_MenuDivider.MenuDividerStylesNames;
        compound: true;
    }>;
}
type LegacyPopoverProps = {
    trigger: ReactNode;
    triggerLabel: string;
    children?: ReactNode;
    placement?: "start" | "end";
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
};
declare function Popover(props: PopoverProps | LegacyPopoverProps): react.JSX.Element;
declare namespace Popover {
    var Target: _mantine_core.MantineComponent<{
        props: _mantine_core.PopoverTargetProps;
        ref: HTMLElement;
        compound: true;
    }>;
    var Dropdown: _mantine_core.MantineComponent<{
        props: _mantine_core.PopoverDropdownProps;
        ref: HTMLDivElement;
        stylesNames: _mantine_core.PopoverStylesNames;
        compound: true;
    }>;
}
type LegacyTooltipProps = {
    trigger: ReactNode;
    triggerLabel: string;
    content: string;
    placement?: "top" | "bottom";
};
declare function Tooltip(props: TooltipProps | LegacyTooltipProps): react.JSX.Element;

declare const SHELL_GEOMETRY: {
    readonly headerH: 60;
    readonly brandH: 76;
    readonly navbarW: 246;
    readonly contentPadX: 22;
    readonly contentPadY: 20;
    readonly sideItemRadius: 8;
    readonly sideItemMinH: 36;
};
type TopBarProps = {
    title: ReactNode;
    /** 路线定位默认是 h1；有正文记录标题时用 div，确保页面只有一个主标题。 */
    titleComponent?: "h1" | "div";
    context?: ReactNode;
    badge?: ReactNode;
    center?: ReactNode;
    actions?: ReactNode;
    backHref?: string;
    backLabel?: string;
    sticky?: boolean;
    onBack?: () => void;
    leading?: ReactNode;
};
declare function TopBar({ title, titleComponent, context, badge, center, actions, backHref, backLabel, sticky, onBack, leading, }: TopBarProps): react.JSX.Element;
type AppShellNavItem = {
    key?: string;
    id?: string;
    label: string;
    href?: string;
    active?: boolean;
    disabled?: boolean;
    onClick?: () => void;
    onSelect?: () => void;
    icon?: ReactNode;
    meta?: ReactNode;
    section?: string;
};
type AppShellNavSection = {
    label?: string;
    items: readonly AppShellNavItem[];
};
type AppShellProps = {
    /** 产品代号；兼容 ADMIN 旧调用 */
    product?: "STUDIO" | "GTM" | "ADMIN" | "PORTAL" | "MATERIAL" | string;
    brand?: ReactNode;
    brandHint?: string;
    /** 新推荐：分组导航 */
    navigation?: readonly AppShellNavSection[];
    /** 兼容旧扁平导航 */
    navItems?: AppShellNavItem[];
    user?: ReactNode;
    footer?: ReactNode;
    header?: ReactNode;
    headerTitle?: ReactNode;
    headerTitleComponent?: TopBarProps["titleComponent"];
    headerContext?: ReactNode;
    headerBadge?: ReactNode;
    headerBackHref?: string;
    headerBackLabel?: string;
    headerRight?: ReactNode;
    headerCenter?: ReactNode;
    headerActions?: ReactNode;
    children: ReactNode;
    contentPadding?: boolean;
    withHeader?: boolean;
    className?: string;
    contentClassName?: string;
    contentSurface?: "background" | "surface";
    viewport?: "page" | "fixed";
};
declare function AppShell({ product, brand, brandHint, navigation, navItems, user, footer, header, headerTitle, headerTitleComponent, headerContext, headerBadge, headerBackHref, headerBackLabel, headerRight, headerCenter, headerActions, children, contentPadding, withHeader, className, contentClassName, contentSurface, viewport, }: AppShellProps): react.JSX.Element;
type PageShellProps = {
    title: string;
    description?: string;
    context?: ReactNode;
    badge?: ReactNode;
    actions?: ReactNode;
    backHref?: string;
    backLabel?: string;
    children: ReactNode;
    maxWidth?: number | string;
};
declare function PageShell({ title, description, context, badge, actions, backHref, backLabel, children, maxWidth, }: PageShellProps): react.JSX.Element;
type ShellTabItem = {
    key: string;
    label: string;
    href?: string;
    active?: boolean;
    onClick?: () => void;
};
type ShellTabsProps = {
    items: ShellTabItem[];
};
declare function ShellTabs({ items }: ShellTabsProps): react.JSX.Element;

type Tone = "neutral" | "accent" | "info" | "success" | "warning" | "danger" | "error";
type CardProps = CardProps$1 & {
    bodyPadding?: "none" | "sm" | "md" | "lg";
    footer?: ReactNode;
    header?: ReactNode;
    scrollBody?: boolean;
    surface?: "default" | "workflow-node";
};
declare function Card({ children, padding, bodyPadding, header, footer, scrollBody, surface, style, withBorder, ...props }: CardProps): react.JSX.Element;
type BadgeProps = Omit<ComponentPropsWithoutRef<"span">, "children"> & {
    label?: string;
    children?: ReactNode;
    tone?: Tone;
    size?: "xs" | "sm" | "md" | "lg";
    dot?: boolean;
};
declare function Badge$1({ label, children, tone, className, ...props }: BadgeProps): react.JSX.Element;
type StatusDotProps = {
    label: string;
    tone?: Tone;
};
declare function StatusDot({ label, tone }: StatusDotProps): react.JSX.Element;
type TrendBadgeProps = {
    direction: "up" | "down" | "flat";
    value: string;
    positiveDirection?: "up" | "down";
};
declare function TrendBadge({ direction, value, positiveDirection, }: TrendBadgeProps): react.JSX.Element;
type FormFieldProps = {
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
declare function FormField$1({ label, children, description, error, required, }: FormFieldProps): react.JSX.Element;
type TextAreaProps = {
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
declare function TextArea({ value, defaultValue, onChange, placeholder, rows, disabled, name, id, ariaLabel, required, "aria-describedby": describedBy, "aria-invalid": invalid, }: TextAreaProps): react.JSX.Element;
type NumberInputProps = {
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
declare function NumberInput({ value, onChange, min, max, step, placeholder, disabled, name, id, ariaLabel, required, "aria-describedby": describedBy, "aria-invalid": invalid, }: NumberInputProps): react.JSX.Element;
type ListProps = {
    children?: ReactNode;
    density?: "comfortable" | "compact";
    dividers?: boolean;
    ariaLabel: string;
};
declare function List({ children, density, dividers, ariaLabel, }: ListProps): react.JSX.Element;
type ListItemProps = {
    label: ReactNode;
    description?: ReactNode;
    startContent?: ReactNode;
    endContent?: ReactNode;
    onClick?: () => void;
    disabled?: boolean;
};
declare function ListItem({ label, description, startContent, endContent, onClick, disabled, }: ListItemProps): react.JSX.Element;
type LegacyDataTableColumn<Row> = {
    key: keyof Row & string;
    header: string;
    align?: "start" | "end";
    render?: (row: Row) => ReactNode;
};
type LegacyDataTableProps<Row extends object> = {
    columns: readonly LegacyDataTableColumn<Row>[];
    data: readonly Row[];
    rowKey: keyof Row & string;
    ariaLabel: string;
    density?: "compact" | "default";
    emptyLabel?: string;
};
type DialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description?: string;
    children?: ReactNode;
    footer?: ReactNode;
};
declare function Dialog$1({ open, onOpenChange, title, description, children, footer, }: DialogProps): react.JSX.Element;
type AlertDialogProps = {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    title: string;
    description: string;
    confirmLabel: string;
    cancelLabel?: string;
    onConfirm: () => void;
    loading?: boolean;
};
declare function AlertDialog({ open, onOpenChange, title, description, confirmLabel, cancelLabel, onConfirm, loading, }: AlertDialogProps): react.JSX.Element;
type Space = "1" | "2" | "3" | "4" | "6";
type StackProps = StackProps$1 & {
    gap?: StackProps$1["gap"] | Space;
};
declare const Stack: react.ForwardRefExoticComponent<Omit<StackProps, "ref"> & react.RefAttributes<HTMLDivElement>>;
type HStackProps = {
    children?: ReactNode;
    gap?: Space | number | string;
    justify?: "start" | "between" | "center" | "end";
    align?: "start" | "center" | "end";
    wrap?: boolean;
};
declare function HStack({ children, gap, justify, align, wrap, }: HStackProps): react.JSX.Element;
type GridProps = {
    children?: ReactNode;
    gap?: Space | number | string;
    columns?: 1 | 2 | 3 | 4;
};
declare function Grid({ children, gap, columns }: GridProps): react.JSX.Element;
type PageCanvasProps = {
    children?: ReactNode;
};
declare function PageCanvas({ children }: PageCanvasProps): react.JSX.Element;
type PageHeaderProps = {
    title: string;
    scope?: ReactNode;
    context?: string;
    actions?: ReactNode;
};
declare function PageHeader$1({ title, scope, context, actions }: PageHeaderProps): react.JSX.Element;
type SectionHeaderProps = {
    title: string;
    description?: string;
    subtitle?: string;
    actions?: ReactNode;
    /** 标题位于有边框的面板内，由 UI 统一提供内边距与下分隔线。 */
    contained?: boolean;
};
declare function SectionHeader$1({ title, description, subtitle, actions, contained, }: SectionHeaderProps): react.JSX.Element;
type PagePatternProps = PageHeaderProps & {
    children?: ReactNode;
};
declare function DashboardPage({ title, scope, context, actions, children, }: PagePatternProps): react.JSX.Element;
declare const ListPage: typeof DashboardPage;
declare const DetailPage: typeof DashboardPage;
declare const SettingsPage: typeof DashboardPage;
type EmptyStateProps = {
    title: string;
    description: string;
    action?: ReactNode;
};
declare function EmptyState$1({ title, description, action }: EmptyStateProps): react.JSX.Element;
declare function PermissionDeniedState({ action }: {
    action?: ReactNode;
}): react.JSX.Element;
declare function ErrorState({ action }: {
    action?: ReactNode;
}): react.JSX.Element;
declare function FilterWorkspace({ filters, children, filterLabel, }: {
    filters: ReactNode;
    children?: ReactNode;
    filterLabel?: string;
}): react.JSX.Element;
declare function DataSection({ title, description, actions, children, bodyPadding, }: {
    title: string;
    description?: string;
    actions?: ReactNode;
    children?: ReactNode;
    bodyPadding?: "none" | "sm" | "md" | "lg";
}): react.JSX.Element;
type FormSectionProps = {
    title: string;
    description?: string;
    children?: ReactNode;
    footer?: ReactNode;
};
declare function FormSection$1({ title, description, children, footer, }: FormSectionProps): react.JSX.Element;
type NavigationItem = {
    id: string;
    label: string;
    icon?: ReactNode;
    active?: boolean;
    disabled?: boolean;
    onSelect?: () => void;
    href?: string;
    meta?: ReactNode;
};
type NavigationSection = {
    label?: string;
    items: readonly NavigationItem[];
};
/** @deprecated 侧栏已并入 AppShell；保留给极少数直接调用 */
declare function SideNav({ product, brand, navigation, user, }: {
    product: string;
    brand: ReactNode;
    navigation: readonly NavigationSection[];
    user?: ReactNode;
}): react.JSX.Element;
/** @deprecated 移动导航已内建在 AppShell */
declare function MobileNav({ product, }: {
    product: string;
    navigation?: readonly NavigationSection[];
    user?: ReactNode;
}): react.JSX.Element;
declare function KpiGrid({ children, columns, }: {
    children?: ReactNode;
    columns?: 2 | 3 | 4;
}): react.JSX.Element;
declare function StatCard({ value, label, hint, trend, tone, }: {
    value: ReactNode;
    label: string;
    hint?: string;
    trend?: ReactNode;
    tone?: Extract<Tone, "neutral" | "info" | "error">;
}): react.JSX.Element;
declare function DashboardGrid({ children }: {
    children?: ReactNode;
}): react.JSX.Element;
declare function DashboardGridItem({ children, span, }: {
    children?: ReactNode;
    span?: 4 | 6 | 8 | 12;
}): react.JSX.Element;
type IconButtonProps = {
    label: string;
    icon: ReactNode;
    variant?: "secondary" | "ghost" | "danger";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    onClick?: MouseEventHandler<HTMLButtonElement>;
};
declare const IconButton: react.ForwardRefExoticComponent<IconButtonProps & react.RefAttributes<HTMLButtonElement>>;
declare function ProgressBar({ value, max, label, showValue, tone, }: {
    value: number;
    max?: number;
    label: string;
    showValue?: boolean;
    tone?: "info" | "success" | "warning" | "error";
}): react.JSX.Element;
declare function ThemeProvider({ theme, children, }: {
    theme?: "light" | "dark";
    children: ReactNode;
}): react.JSX.Element;
type Theme = "light" | "dark";
declare function BrandLockup({ product, background, alt, }: {
    product: "STUDIO" | "GTM";
    background?: "light" | "dark";
    alt?: string;
}): react.JSX.Element;
type BrandProduct = "STUDIO" | "GTM";
declare const publicComponents: readonly ["Button", "IconButton", "Card", "Badge", "StatusDot", "TrendBadge", "FormField", "TextInput", "Tabs", "SegmentedControl", "List", "ListItem", "DataTable", "Dialog", "Stack", "HStack", "Grid", "PageCanvas", "PageHeader", "SectionHeader", "AppShell"];
declare function ToastRegion(): null;
declare function ChartCard({ title, description, children, footer, }: {
    title: string;
    description?: string;
    children?: ReactNode;
    footer?: ReactNode;
}): react.JSX.Element;
declare function Avatar({ src, alt, fallback, size, }: {
    src?: string;
    alt: string;
    fallback: string;
    size?: "sm" | "md" | "lg";
}): react.JSX.Element;
declare function Thumbnail({ src, alt, size, fallbackLabel, }: {
    src?: string;
    alt: string;
    size?: "sm" | "md" | "lg";
    fallbackLabel?: string;
}): react.JSX.Element;
declare function MetadataList({ items, columns, ariaLabel, }: {
    items: readonly {
        label: string;
        value: ReactNode;
    }[];
    columns?: 1 | 2;
    ariaLabel: string;
}): react.JSX.Element;
declare function MultiSelector({ values, onChange, options, label, disabled, }: {
    values: readonly string[];
    onChange: (values: string[]) => void;
    options: readonly {
        value: string;
        label: string;
        disabled?: boolean;
    }[];
    label: string;
    disabled?: boolean;
}): react.JSX.Element;
declare function Tag({ label, tone, onRemove, removeLabel, }: {
    label: string;
    tone?: "neutral" | "info";
    onRemove?: () => void;
    removeLabel?: string;
}): react.JSX.Element;
declare function InputGroup({ value, onChange, placeholder, prefix, suffix, disabled, id, ariaLabel, required, "aria-describedby": describedBy, "aria-invalid": invalid, }: {
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
}): react.JSX.Element;
declare function Slider({ value, onChange, label, min, max, step, showValue, disabled, }: {
    value: number;
    onChange: (value: number) => void;
    label: string;
    min?: number;
    max?: number;
    step?: number;
    showValue?: boolean;
    disabled?: boolean;
}): react.JSX.Element;
declare function DatePicker$1({ value, onChange, min, max, disabled, id, ariaLabel, required, "aria-describedby": describedBy, "aria-invalid": invalid, }: {
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
}): react.JSX.Element;

type ModernDataTableColumn<T> = ColumnDef<T, unknown>;
type DataTableColumn<T extends object> = LegacyDataTableColumn<T>;
type ModernDataTableProps<T> = {
    data: T[];
    columns: ModernDataTableColumn<T>[];
    /** 行唯一 id 字段或函数 */
    getRowId?: (row: T, index: number) => string;
    /** 启用多选 */
    selectable?: boolean;
    rowSelection?: RowSelectionState;
    onRowSelectionChange?: OnChangeFn<RowSelectionState>;
    /** 分页；不传则不分页展示全部 */
    pageSize?: number;
    /** 点击行 */
    onRowClick?: (row: T) => void;
    emptyTitle?: string;
    emptyDescription?: string;
    /** 表头下方/表格上方额外区域（批量操作条等） */
    toolbar?: ReactNode;
    loading?: boolean;
    maxHeight?: number | string;
};
type DataTableProps<T extends object> = ModernDataTableProps<T> | LegacyDataTableProps<T>;
declare function DataTable<T extends object>(props: DataTableProps<T>): react.JSX.Element;

type TableProps = TableProps$1;
/** 基础表格原语；列表页请优先用 DataTable */
declare function Table$1(props: TableProps): react.JSX.Element;
declare namespace Table$1 {
    var Thead: _mantine_core.MantineComponent<{
        props: _mantine_core.TableTheadProps;
        ref: HTMLTableSectionElement;
        stylesNames: "thead";
        compound: true;
    }>;
    var Tbody: _mantine_core.MantineComponent<{
        props: _mantine_core.TableTbodyProps;
        ref: HTMLTableSectionElement;
        stylesNames: "tbody";
        compound: true;
    }>;
    var Tfoot: _mantine_core.MantineComponent<{
        props: _mantine_core.TableTfootProps;
        ref: HTMLTableSectionElement;
        stylesNames: "tfoot";
        compound: true;
    }>;
    var Tr: _mantine_core.MantineComponent<{
        props: _mantine_core.TableTrProps;
        ref: HTMLTableRowElement;
        stylesNames: "tr";
        compound: true;
    }>;
    var Th: _mantine_core.MantineComponent<{
        props: _mantine_core.TableThProps;
        ref: HTMLTableCellElement;
        stylesNames: "th";
        compound: true;
    }>;
    var Td: _mantine_core.MantineComponent<{
        props: _mantine_core.TableTdProps;
        ref: HTMLTableCellElement;
        stylesNames: "td";
        compound: true;
    }>;
    var Caption: _mantine_core.MantineComponent<{
        props: _mantine_core.TableCaptionProps;
        ref: HTMLTableCaptionElement;
        stylesNames: "caption";
        compound: true;
    }>;
    var ScrollContainer: _mantine_core.MantineComponent<{
        props: _mantine_core.TableScrollContainerProps;
        ref: HTMLDivElement;
        stylesNames: node_modules__mantine_core_lib_components_Table_TableScrollContainer.TableScrollContainerStylesNames;
        vars: node_modules__mantine_core_lib_components_Table_TableScrollContainer.TableScrollContainerCssVariables;
    }>;
}

type FilterBarProps = {
    /**
     * 主体：自由排布。
     * 建议用 Stack gap="sm" 分行，例如：
     *  1) 搜索 + 结果数 + 视图
     *  2) 排序
     *  3) 库切换 + 下拉
     *  4) 分面
     */
    children: ReactNode;
    /** 已选条件（FilterActive），固定在面板底栏 */
    active?: ReactNode;
    onClear?: () => void;
    clearLabel?: string;
};
/**
 * 筛选面板：内容自由排，样式收在壳内。
 */
declare function FilterBar({ children, active, onClear, clearLabel, }: FilterBarProps): react.JSX.Element;
type FilterToolbarProps = {
    search: ReactNode;
    sort?: ReactNode;
    actions?: ReactNode;
    resultText?: string;
    /** 额外行（库/下拉等），接在排序下方 */
    extras?: ReactNode;
};
/**
 * @deprecated 优先把内容直接放进 FilterBar 用 Stack 分行。
 * 保留此 API 只为迁移期：内部仍渲染为「可嵌入 FilterBar 的一块」。
 */
declare function FilterToolbar({ search, sort, actions, resultText, extras, }: FilterToolbarProps): react.JSX.Element;
type FilterBatchBarProps = {
    selectedCount: number;
    children: ReactNode;
};
declare function FilterBatchBar({ selectedCount, children, }: FilterBatchBarProps): react.JSX.Element | null;
type FilterRowProps = {
    children: ReactNode;
    /** 可选标签；库切换这类可不传 */
    label?: string;
};
declare function FilterRow({ children, label }: FilterRowProps): react.JSX.Element;
type FilterFieldProps = {
    label?: string;
    children: ReactNode;
    grow?: boolean;
    minWidth?: number;
    layout?: "inline" | "stack";
};
declare function FilterField({ label, children, grow, minWidth, layout, }: FilterFieldProps): react.JSX.Element;
type FilterSegmentOption = {
    value: string;
    label: string;
    count?: number | string;
};
type FilterSegmentProps = {
    options: FilterSegmentOption[];
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    "aria-label"?: string;
};
/**
 * 二态/少态互斥切换：外面一整块框，框内像按钮切换。
 * 用于公共/个人、画廊/列表 —— **不要**和下方无边框分面词混成同一皮。
 */
declare function FilterSegment({ options, value, onChange, disabled, "aria-label": ariaLabel, }: FilterSegmentProps): react.JSX.Element;
type FilterTermProps = {
    label?: string;
    children?: ReactNode;
    count?: number | string;
    selected?: boolean;
    onClick?: () => void;
    disabled?: boolean;
    "aria-label"?: string;
};
/**
 * 分面词条：无外框、无描边。选中 = 浅蓝底 + 品牌蓝字。
 * 用于平台/品类/信号等多选项 —— **不要**给二态切换用（二态用 FilterSegment）。
 */
declare function FilterTerm({ label, children, count, selected, onClick, disabled, "aria-label": ariaLabel, }: FilterTermProps): react.JSX.Element;
type FilterFacetOption = {
    value: string;
    label: string;
    count?: number | string;
};
type FilterFacetProps = {
    label: string;
    options: FilterFacetOption[];
    value?: string | null;
    onChange: (value: string | null) => void;
    nested?: boolean;
    showAll?: boolean;
    allLabel?: string;
};
declare function FilterFacet({ label, options, value, onChange, nested, showAll, allLabel, }: FilterFacetProps): react.JSX.Element;
type FilterActiveItem = {
    key: string;
    label: string;
    onRemove?: () => void;
};
type FilterActiveProps = {
    items: FilterActiveItem[];
    onClearAll?: () => void;
    emptyText?: string;
};
declare function FilterActive({ items, onClearAll, emptyText, }: FilterActiveProps): react.JSX.Element;

type EmptyProps = {
    title?: string;
    description?: string;
    action?: ReactNode;
    icon?: ReactNode;
    scope?: "page" | "section" | "inline";
};
declare function Empty({ title, description, action, icon, scope, }: EmptyProps): react.JSX.Element;
type SkeletonProps = SkeletonProps$1 & {
    variant?: "text" | "block" | "avatar";
    lines?: 1 | 2 | 3 | 4;
};
declare function Skeleton({ variant, lines, ...props }: SkeletonProps): react.JSX.Element;
type SpinnerProps = {
    label?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
};
declare function Spinner({ label, size }: SpinnerProps): react.JSX.Element;

type NotifyOptions = {
    title?: string;
    message: string;
    autoClose?: number | boolean;
};
/**
 * 唯一通知入口。不做 toast / banner / message 三套并行命名。
 */
declare const notify: {
    success(opts: NotifyOptions): void;
    error(opts: NotifyOptions): void;
    info(opts: NotifyOptions): void;
    warning(opts: NotifyOptions): void;
    hide(id: string): void;
    clean(): void;
};

type SpotlightSearchProps = {
    actions: SpotlightActionData[];
    placeholder?: string;
    shortcut?: string[] | null;
};
/** 全局命令面板入口；actions 由业务注册 */
declare function SpotlightSearch({ actions, placeholder, shortcut, }: SpotlightSearchProps): react.JSX.Element;

/**
 * 仅供 /design-preview/theme-compare 左栏：挂空默认 theme，
 * 与外层 VijimProvider(vijimTheme) 对照。业务页禁止使用。
 */
declare function DefaultThemeProvider({ children }: {
    children: ReactNode;
}): react.JSX.Element;
/** 图标从 UI 包出口提供，app 不直接依赖 @tabler */
declare function IconSearch(props: {
    size?: number;
    stroke?: number;
}): react.JSX.Element;

type LegacyButtonVariant = "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
type LegacyButtonSize = "default" | "xs" | "sm" | "lg" | "icon" | "icon-xs" | "icon-sm" | "icon-lg";
declare function Button({ asChild, variant, size, color, children, className, ...props }: Omit<ButtonProps, "variant" | "size" | "color"> & {
    asChild?: boolean;
    variant?: LegacyButtonVariant;
    size?: LegacyButtonSize;
    color?: ButtonProps["color"];
    children?: ReactNode;
}): react.JSX.Element;
declare function Badge({ variant, asChild, children, ...props }: ComponentProps<"span"> & {
    variant?: "default" | "secondary" | "destructive" | "outline" | "ghost" | "link";
    asChild?: boolean;
}): react.JSX.Element;
declare function Icon({ name, size, strokeWidth, style, className, }: {
    name: string;
    size?: number;
    style?: CSSProperties;
    className?: string;
    strokeWidth?: number;
}): react.JSX.Element;
declare function EmptyState({ icon, title, description, action, }: {
    icon?: string | ReactNode;
    title: string;
    description?: string;
    action?: ReactNode;
}): react.JSX.Element;
declare function PageHeader({ eyebrow, title, description, actions, backAction, }: {
    eyebrow?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
    backAction?: ReactNode;
}): react.JSX.Element;
declare function SectionHeader({ title, description, actions, action, divider, contained, }: {
    title: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
    action?: ReactNode;
    divider?: boolean;
    contained?: boolean;
}): react.JSX.Element;
declare function PageToolbar({ children, end }: {
    children?: ReactNode;
    end?: ReactNode;
}): react.JSX.Element;
declare function DatePicker({ value, onChange, ...props }: {
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
}): react.JSX.Element;
declare function Input({ controlSize: _controlSize, onChange, ...props }: Omit<ComponentProps<typeof TextInput>, "onChange" | "onInputChange"> & {
    controlSize?: "compact" | "default" | "large";
    onChange?: ChangeEventHandler<HTMLInputElement>;
}): react.JSX.Element;
declare function Textarea(props: ComponentProps<typeof Textarea$1>): react.JSX.Element;
declare function Label(props: ComponentProps<"label">): react.JSX.Element;
declare function FormField({ label, children, htmlFor, description, status, statusText, required, full, }: {
    label: string;
    children: ReactNode;
    htmlFor?: string;
    description?: string;
    status?: "error" | "warning" | "success";
    statusText?: string;
    required?: boolean;
    full?: boolean;
}): react.JSX.Element;
declare function FormGrid({ children, columns, gap, }: {
    children?: ReactNode;
    columns?: 1 | 2 | 3;
    gap?: "sm" | "md" | "lg";
}): react.JSX.Element;
declare function FormSection({ title, description, children }: {
    title: string;
    description?: string;
    children?: ReactNode;
}): react.JSX.Element;
declare function FormActions({ children }: {
    children?: ReactNode;
}): react.JSX.Element;
declare function Select({ value, onValueChange, children, }: {
    value?: string;
    onValueChange?: (value: string) => void;
    children?: ReactNode;
}): react.JSX.Element;
declare function SelectTrigger({ id, fullWidth, size, children, "aria-label": ariaLabel, }: {
    id?: string;
    fullWidth?: boolean;
    size?: "sm" | "default";
    children?: ReactNode;
    "aria-label"?: string;
}): react.JSX.Element;
declare function SelectValue(_props: {
    placeholder?: string;
}): null;
declare function SelectContent({ children }: {
    children?: ReactNode;
    position?: string;
    align?: string;
    className?: string;
}): react.JSX.Element;
declare function SelectItem(_props: {
    value: string;
    disabled?: boolean;
    children?: ReactNode;
}): null;
declare function SearchableSelect({ name, label, value, options, placeholder, emptyLabel, onPick, }: {
    name: string;
    label: string;
    value?: string;
    options: Array<string | {
        value: string;
        label: string;
    }>;
    placeholder?: string;
    emptyLabel?: string;
    onPick?: (value: string) => void;
}): react.JSX.Element;
type SearchableSelectOption = {
    value: string;
    label: string;
};
declare function SegmentedControl({ options, value, onChange, disabled, fullWidth, ariaLabel, size, }: {
    options: Array<{
        value: string;
        label: string;
        meta?: string | number;
        icon?: ReactNode;
    }>;
    value: string;
    onChange?: (value: string) => void;
    purpose?: "filter" | "view";
    size?: "sm" | "md" | "lg";
    disabled?: boolean;
    fullWidth?: boolean;
    ariaLabel: string;
}): react.JSX.Element;
declare function SearchField({ children }: {
    variant: "filter" | "lookup";
    density?: "compact" | "default";
    children?: ReactNode;
}): react.JSX.Element;
declare function SearchFieldInput(props: Omit<ComponentProps<"input">, "className" | "style" | "type">): react.JSX.Element;
declare function Switch({ checked, onCheckedChange, ...props }: Omit<ComponentProps<typeof Switch$1>, "onChange"> & {
    onCheckedChange?: (checked: boolean) => void;
}): react.JSX.Element;
declare function Table(props: ComponentProps<typeof Table$1>): react.JSX.Element;
declare function TableHeader(props: ComponentProps<"thead">): react.JSX.Element;
declare namespace TableHeader {
    var displayName: string;
}
declare function TableBody(props: ComponentProps<"tbody">): react.JSX.Element;
declare function TableRow(props: ComponentProps<"tr">): react.JSX.Element;
declare function TableHead(props: ComponentProps<"th">): react.JSX.Element;
declare function TableCell(props: ComponentProps<"td">): react.JSX.Element;
declare function TableFooter(props: ComponentProps<"tfoot">): react.JSX.Element;
declare function TableCaption(props: ComponentProps<"caption">): react.JSX.Element;
declare function Dialog({ open, onOpenChange, children, }: {
    open?: boolean;
    onOpenChange?: (open: boolean) => void;
    children?: ReactNode;
}): react.JSX.Element;
declare function DialogTrigger({ asChild, children }: {
    asChild?: boolean;
    children?: ReactNode;
}): react.JSX.Element;
declare function DialogContent({ children, className, onPointerDownOutside, onEscapeKeyDown, showCloseButton, }: {
    children?: ReactNode;
    className?: string;
    onPointerDownOutside?: (event: {
        preventDefault: () => void;
    }) => void;
    onEscapeKeyDown?: (event: {
        preventDefault: () => void;
    }) => void;
    showCloseButton?: boolean;
}): react.JSX.Element;
declare function DialogHeader(props: ComponentProps<"div">): react.JSX.Element;
declare function DialogTitle(props: ComponentProps<"h2">): react.JSX.Element;
declare function DialogDescription(props: ComponentProps<"p">): react.JSX.Element;
declare function DialogFooter({ showCloseButton, children, ...props }: ComponentProps<"div"> & {
    showCloseButton?: boolean;
}): react.JSX.Element;
declare function ManagedDialog({ open, onOpenChange, trigger, title, description, children, footer, size, closeOnOverlay, closeOnEscape, showCloseButton, }: {
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
}): react.JSX.Element;

export { AlertDialog, type AlertDialogProps, AppShell, type AppShellNavItem, type AppShellNavSection, type AppShellProps, Avatar, Badge$1 as Badge, type BadgeProps, BrandLockup, type BrandProduct, Button$1 as Button, type ButtonColor, type ButtonProps, type ButtonSize, type ButtonVariant, COLORS, CONTROL_HEIGHT, CONTROL_PADDING_X, Card, type CardProps, ChartCard, ChartPrimitives, type ChartTooltipContentProps, DashboardGrid, DashboardGridItem, DashboardPage, DataSection, DataTable, type DataTableColumn, type DataTableProps, DateInput, type DateInputProps, DatePicker$1 as DatePicker, DatePickerInput, type DatePickerInputProps, type DateString, DefaultThemeProvider, DetailPage, Dialog$1 as Dialog, type DialogProps, Drawer, type DrawerProps, Empty, type EmptyProps, EmptyState$1 as EmptyState, ErrorState, FONT, FileInput, type FileInputProps, FilterActive, type FilterActiveItem, type FilterActiveProps, FilterBar, type FilterBarProps, FilterBatchBar, type FilterBatchBarProps, FilterFacet, type FilterFacetOption, type FilterFacetProps, FilterField, type FilterFieldProps, FilterRow, type FilterRowProps, FilterSegment, type FilterSegmentOption, type FilterSegmentProps, FilterTerm, type FilterTermProps, FilterToolbar, type FilterToolbarProps, FilterWorkspace, FormField$1 as FormField, type FormFieldProps, FormSection$1 as FormSection, type FormSectionProps, Grid, type GridProps, HStack, type HStackProps, Icon$1 as Icon, IconButton, type IconName, type IconProps, IconSearch, ImageGalleryUpload, type ImageGalleryUploadProps, type ImageGalleryUploadResult, InputGroup, KpiGrid, List, ListItem, type ListItemProps, ListPage, type ListProps, MOTION, Badge as MaterialBadge, Button as MaterialButton, DatePicker as MaterialDatePicker, Dialog as MaterialDialog, DialogContent as MaterialDialogContent, DialogDescription as MaterialDialogDescription, DialogFooter as MaterialDialogFooter, DialogHeader as MaterialDialogHeader, DialogTitle as MaterialDialogTitle, DialogTrigger as MaterialDialogTrigger, EmptyState as MaterialEmptyState, FormActions as MaterialFormActions, FormField as MaterialFormField, FormGrid as MaterialFormGrid, FormSection as MaterialFormSection, Icon as MaterialIcon, Input as MaterialInput, Label as MaterialLabel, ManagedDialog as MaterialManagedDialog, PageHeader as MaterialPageHeader, PageToolbar as MaterialPageToolbar, SearchField as MaterialSearchField, SearchFieldInput as MaterialSearchFieldInput, SearchableSelect as MaterialSearchableSelect, type SearchableSelectOption as MaterialSearchableSelectOption, SectionHeader as MaterialSectionHeader, SegmentedControl as MaterialSegmentedControl, Select as MaterialSelect, SelectContent as MaterialSelectContent, SelectItem as MaterialSelectItem, SelectTrigger as MaterialSelectTrigger, SelectValue as MaterialSelectValue, Switch as MaterialSwitch, Table as MaterialTable, TableBody as MaterialTableBody, TableCaption as MaterialTableCaption, TableCell as MaterialTableCell, TableFooter as MaterialTableFooter, TableHead as MaterialTableHead, TableHeader as MaterialTableHeader, TableRow as MaterialTableRow, Textarea as MaterialTextarea, Menu, MetadataList, MobileNav, Modal, type ModalProps, MultiSelector, type NavigationItem, type NavigationSection, type NotifyOptions, NumberInput, type NumberInputProps, PageCanvas, type PageCanvasProps, PageHeader$1 as PageHeader, type PageHeaderProps, PageShell, type PageShellProps, Pagination, PermissionDeniedState, Popover, ProgressBar, RADIUS, SHADOWS, SHELL_GEOMETRY, SearchInput, type SearchInputProps, SearchableSelect$1 as SearchableSelect, type SearchableSelectOption$1 as SearchableSelectOption, type SearchableSelectProps, SectionHeader$1 as SectionHeader, type SectionHeaderProps, SegmentedControl$1 as SegmentedControl, Select$1 as Select, type SelectDensity, type SelectOption, type SelectProps, type SelectSize, SettingsPage, type ShellTabItem, ShellTabs, type ShellTabsProps, SideNav, Skeleton, type SkeletonProps, Slider, type Space, Spinner, type SpinnerProps, SpotlightSearch, type SpotlightSearchProps, Stack, type StackProps, StatCard, StatusDot, type StatusDotProps, TAG_COLORS, Table$1 as Table, type TableProps, Tabs, Tag, TextArea, type TextAreaProps, TextInput, type TextInputProps, Textarea$1 as Textarea, type TextareaProps, type Theme, ThemeProvider, Thumbnail, ToastRegion, type Tone, Tooltip, TopBar, type TopBarProps, TrendBadge, type TrendBadgeProps, UnstyledButton, type UnstyledButtonProps, VijimProvider, type VijimProviderProps, WORKFLOW_STEP_COLORS, notify, publicComponents, vijimTheme };
