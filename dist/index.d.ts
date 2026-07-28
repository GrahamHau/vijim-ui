import * as _mantine_core from '@mantine/core';
import { MantineThemeOverride, ButtonProps as ButtonProps$1, ElementProps, TextInputProps as TextInputProps$1, TextareaProps as TextareaProps$1, SelectProps as SelectProps$1, DrawerProps as DrawerProps$1, ModalProps as ModalProps$1, MenuProps, PaginationProps, PopoverProps, SegmentedControlProps, TabsProps, TooltipProps, TableProps as TableProps$1, SkeletonProps as SkeletonProps$1 } from '@mantine/core';
export { ActionIcon, Alert, Anchor, Badge, BadgeProps, Box, Card, CardProps, Checkbox, Combobox, ComboboxProps, ComboboxStore, Divider, Group, GroupProps, MenuProps, PaginationProps, Paper, PaperProps, PopoverProps, SegmentedControlProps, SimpleGrid, Stack, StackProps, Switch, TabsProps, Text, TextProps, Title, TitleProps, TooltipProps, useCombobox } from '@mantine/core';
import * as react from 'react';
import { ReactNode, KeyboardEvent, CSSProperties } from 'react';
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
 * 阴影：大面更深、小面更轻。禁止重黑框投影。
 */
declare const SHADOWS: {
    readonly none: "none";
    /** 芯片 / 选中滑块 */
    readonly xs: "0 1px 2px rgba(18, 19, 23, 0.05), 0 0 0 1px rgba(18, 19, 23, 0.03)";
    /** 筛选壳 / 卡片 */
    readonly sm: "0 1px 2px rgba(18, 19, 23, 0.04), 0 4px 16px rgba(18, 19, 23, 0.05)";
    /** 下拉 / popover */
    readonly md: "0 2px 8px rgba(18, 19, 23, 0.05), 0 12px 32px rgba(18, 19, 23, 0.07)";
    /** 模态 */
    readonly lg: "0 4px 16px rgba(18, 19, 23, 0.06), 0 24px 48px rgba(18, 19, 23, 0.1)";
    readonly xl: "0 8px 28px rgba(18, 19, 23, 0.08), 0 32px 64px rgba(18, 19, 23, 0.12)";
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
    /** 字距按尺寸：大标题收紧，正文 ~0 */
    readonly tracking: {
        readonly display: "-0.022em";
        readonly title: "-0.015em";
        readonly body: "0";
        readonly caption: "0.01em";
    };
    readonly leading: {
        readonly display: 1.15;
        readonly title: 1.25;
        readonly body: 1.5;
        readonly dense: 1.35;
    };
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
    readonly body: "#F1F3F6";
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
    readonly background: "#F1F3F6";
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

/**
 * 按钮变体收敛（业务只认这些，不跟 Mantine 文档散开）：
 * - filled：主行动（默认 brand 蓝）
 * - light：浅底次要
 * - outline：描边
 * - subtle：文字/幽灵
 * - default：中性实底（少用）
 *
 * ghost 为 subtle 别名（兼容旧 Studio API）。
 * 高度默认 sm=32，不跟 Mantine 默认偏大。
 */
type ButtonVariant = "filled" | "light" | "outline" | "subtle" | "default" | "ghost";
type ButtonSize = "xs" | "sm" | "md" | "lg";
/** brand=主蓝；red=危险；其余中性/语义 */
type ButtonColor = "brand" | "neutral" | "gray" | "red" | "green" | "yellow";
type ButtonProps = Omit<ButtonProps$1, "variant" | "size" | "color"> & ElementProps<"button", keyof ButtonProps$1> & {
    variant?: ButtonVariant;
    size?: ButtonSize;
    color?: ButtonColor;
    children?: ReactNode;
};
declare const Button: react.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & react.RefAttributes<HTMLButtonElement>>;

type TextInputProps = Omit<TextInputProps$1, "size"> & ElementProps<"input", keyof TextInputProps$1> & {
    size?: "xs" | "sm" | "md" | "lg";
};
/**
 * 统一录入框：默认 sm、中性浅底；有 left/right section 时加大内容内边距，图标不贴边。
 */
declare const TextInput: react.ForwardRefExoticComponent<Omit<TextInputProps, "ref"> & react.RefAttributes<HTMLInputElement>>;

type TextareaProps = Omit<TextareaProps$1, "size"> & ElementProps<"textarea", keyof TextareaProps$1> & {
    size?: "xs" | "sm" | "md" | "lg";
};
declare const Textarea: react.ForwardRefExoticComponent<Omit<TextareaProps, "ref"> & react.RefAttributes<HTMLTextAreaElement>>;

type SearchInputVariant = "filter" | "lookup";
type SearchInputProps = Omit<TextInputProps, "leftSection" | "type" | "variant" | "size"> & {
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
};
declare const Select: react.ForwardRefExoticComponent<Omit<SelectProps, "ref"> & react.RefAttributes<HTMLInputElement>>;
type SearchableSelectOption = string | {
    value: string;
    label: string;
    disabled?: boolean;
};
type SearchableSelectProps = {
    name?: string;
    /** 无障碍标签；筛选条可不展示可见 label */
    label: string;
    /** 受控值；与 defaultValue 二选一 */
    value?: string | null;
    /** 非受控初始值（表单 GET 场景） */
    defaultValue?: string | null;
    options: SearchableSelectOption[];
    placeholder?: string;
    /** 空值时的占位文案（如「全部品牌」） */
    emptyLabel?: string;
    onPick?: (value: string) => void;
    onChange?: (value: string | null) => void;
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
declare function SearchableSelect({ name, label, value, defaultValue, options, placeholder, emptyLabel, onPick, onChange, disabled, clearable, density, size, searchable, nothingFoundMessage, style, className, minWidth, }: SearchableSelectProps): react.JSX.Element;

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

declare function Tabs(props: TabsProps): react.JSX.Element;
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
declare function SegmentedControl(props: SegmentedControlProps): react.JSX.Element;
declare function Pagination(props: PaginationProps): react.JSX.Element;
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
declare function Popover(props: PopoverProps): react.JSX.Element;
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
declare function Tooltip(props: TooltipProps): react.JSX.Element;

type DataTableColumn<T> = ColumnDef<T, unknown>;
type DataTableProps<T> = {
    data: T[];
    columns: DataTableColumn<T>[];
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
declare function DataTable<T>({ data, columns, getRowId, selectable, rowSelection: controlledSelection, onRowSelectionChange, pageSize, onRowClick, emptyTitle, emptyDescription, toolbar, loading, maxHeight, }: DataTableProps<T>): react.JSX.Element;

type TableProps = TableProps$1;
/** 基础表格原语；列表页请优先用 DataTable */
declare function Table(props: TableProps): react.JSX.Element;
declare namespace Table {
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
    label: string;
    count?: number | string;
    selected?: boolean;
    onClick?: () => void;
    disabled?: boolean;
};
/**
 * 分面词条：无外框、无描边。选中 = 浅蓝底 + 品牌蓝字。
 * 用于平台/品类/信号等多选项 —— **不要**给二态切换用（二态用 FilterSegment）。
 */
declare function FilterTerm({ label, count, selected, onClick, disabled, }: FilterTermProps): react.JSX.Element;
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

type FormSectionProps = {
    title: string;
    description?: string;
    children: ReactNode;
    /** 字段栅格列数 */
    cols?: number;
};
/** 复杂表单分区：标题 + 说明 + 字段栅格 */
declare function FormSection({ title, description, children, cols, }: FormSectionProps): react.JSX.Element;

type TopBarProps = {
    title: string;
    context?: ReactNode;
    badge?: ReactNode;
    actions?: ReactNode;
    backHref?: string;
    backLabel?: string;
    sticky?: boolean;
    onBack?: () => void;
};
declare function TopBar({ title, context, badge, actions, backHref, backLabel, sticky, onBack, }: TopBarProps): react.JSX.Element;
type AppShellNavItem = {
    key: string;
    label: string;
    href?: string;
    active?: boolean;
    onClick?: () => void;
    icon?: ReactNode;
    section?: string;
};
type VijimAppShellProps = {
    brand?: ReactNode;
    brandHint?: string;
    navItems?: AppShellNavItem[];
    headerRight?: ReactNode;
    headerCenter?: ReactNode;
    children: ReactNode;
    navbarWidth?: number;
    withHeader?: boolean;
};
declare function AppShell({ brand, brandHint, navItems, headerRight, headerCenter, children, navbarWidth, withHeader, }: VijimAppShellProps): react.JSX.Element;
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

type EmptyProps = {
    title?: string;
    description?: string;
    action?: ReactNode;
    icon?: ReactNode;
};
declare function Empty({ title, description, action, icon, }: EmptyProps): react.JSX.Element;
type SkeletonProps = SkeletonProps$1;
declare function Skeleton(props: SkeletonProps): react.JSX.Element;
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

export { AppShell, type AppShellNavItem, Button, type ButtonColor, type ButtonProps, type ButtonSize, type ButtonVariant, COLORS, CONTROL_HEIGHT, CONTROL_PADDING_X, DataTable, type DataTableColumn, type DataTableProps, DateInput, type DateInputProps, DatePickerInput, type DatePickerInputProps, type DateString, DefaultThemeProvider, Drawer, type DrawerProps, Empty, type EmptyProps, FONT, FilterActive, type FilterActiveItem, type FilterActiveProps, FilterBar, type FilterBarProps, FilterBatchBar, type FilterBatchBarProps, FilterFacet, type FilterFacetOption, type FilterFacetProps, FilterField, type FilterFieldProps, FilterRow, type FilterRowProps, FilterSegment, type FilterSegmentOption, type FilterSegmentProps, FilterTerm, type FilterTermProps, FilterToolbar, type FilterToolbarProps, FormSection, type FormSectionProps, IconSearch, MOTION, Menu, Modal, type ModalProps, type NotifyOptions, PageShell, type PageShellProps, Pagination, Popover, RADIUS, SHADOWS, SearchInput, type SearchInputProps, SearchableSelect, type SearchableSelectOption, type SearchableSelectProps, SegmentedControl, Select, type SelectDensity, type SelectOption, type SelectProps, type SelectSize, type ShellTabItem, ShellTabs, type ShellTabsProps, Skeleton, type SkeletonProps, Spinner, type SpinnerProps, SpotlightSearch, type SpotlightSearchProps, Table, type TableProps, Tabs, TextInput, type TextInputProps, Textarea, type TextareaProps, Tooltip, TopBar, type TopBarProps, type VijimAppShellProps, VijimProvider, type VijimProviderProps, notify, vijimTheme };
