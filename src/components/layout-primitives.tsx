"use client";

/**
 * 布局 / 字 / 表单钩子 / 图 —— 封闭白名单。
 * 从 Mantine 只 re-export 下列名字；业务不得再扩 Grid/Flex/Center/…
 * 图表只 AreaChart / BarChart，禁止业务直连 recharts。
 */

export {
  Group,
  Stack,
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
  type GroupProps,
  type StackProps,
  type PaperProps,
  type CardProps,
  type TextProps,
  type TitleProps,
  type BadgeProps,
} from "@mantine/core";

export {
  useDisclosure,
  useMediaQuery,
  useDebouncedValue,
} from "@mantine/hooks";

export {
  useForm,
  isNotEmpty,
  isEmail,
  hasLength,
} from "@mantine/form";

export { AreaChart, BarChart } from "@mantine/charts";
