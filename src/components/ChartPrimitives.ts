/**
 * 复杂分析图表的受控逃生口。
 *
 * 常规页面继续使用语义图表；只有需要组合柱线、标签和自定义 Tooltip 的既有分析页
 * 才使用此命名空间，避免业务直接依赖 Recharts 或扩散一组同义图表组件。
 */
import {
  Bar,
  CartesianGrid,
  ComposedChart,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import type { TooltipContentProps } from "recharts";

export const ChartPrimitives = {
  Bar,
  CartesianGrid,
  ComposedChart,
  LabelList,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} as const;

export type ChartTooltipContentProps = TooltipContentProps;
