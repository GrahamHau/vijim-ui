"use client";

import {
  DatePickerInput as MantineDatePickerInput,
  DateInput as MantineDateInput,
  type DatePickerInputProps as MantineDatePickerInputProps,
  type DateInputProps as MantineDateInputProps,
} from "@mantine/dates";
import { IconCalendar } from "@tabler/icons-react";
import { forwardRef, useMemo } from "react";
import {
  fromDateString,
  toDateString,
  type DateString,
} from "../utils/date";
import { SECTION_OFFSET } from "../theme/tokens";

export type { DateString };

type SharedDateProps = {
  size?: "xs" | "sm" | "md" | "lg";
  /** 业务契约：YYYY-MM-DD 或 null */
  value?: DateString;
  defaultValue?: DateString;
  onChange?: (value: DateString) => void;
};

export type DatePickerInputProps = Omit<
  MantineDatePickerInputProps,
  "value" | "defaultValue" | "onChange" | "size" | "type" | "valueFormat"
> &
  SharedDateProps;

export type DateInputProps = Omit<
  MantineDateInputProps,
  "value" | "defaultValue" | "onChange" | "size" | "valueFormat"
> &
  SharedDateProps;

/**
 * 日期选择：对外 value 固定 YYYY-MM-DD | null，不暴露 Date/datetime。
 */
export const DatePickerInput = forwardRef<HTMLButtonElement, DatePickerInputProps>(
  function DatePickerInput(
    {
      size = "md",
      value,
      defaultValue,
      onChange,
      leftSection,
      styles,
      ...props
    },
    ref,
  ) {
    const dateValue = useMemo(
      () => (value === undefined ? undefined : fromDateString(value ?? null)),
      [value],
    );
    const defaultDate = useMemo(
      () =>
        defaultValue === undefined
          ? undefined
          : fromDateString(defaultValue ?? null),
      [defaultValue],
    );

    return (
      <MantineDatePickerInput
        ref={ref}
        size={size}
        valueFormat="YYYY-MM-DD"
        value={dateValue}
        defaultValue={defaultDate}
        leftSection={
          leftSection ?? <IconCalendar size={16} stroke={1.5} />
        }
        leftSectionPointerEvents="none"
        onChange={(next) => {
          onChange?.(toDateString(next));
        }}
        styles={(theme, styleProps, ctx) => {
          const base =
            typeof styles === "function"
              ? styles(theme, styleProps, ctx)
              : styles ?? {};
          return {
            ...base,
            input: {
              ...(typeof base === "object" && base && "input" in base
                ? (base as { input?: object }).input
                : {}),
              paddingInlineStart: SECTION_OFFSET.left,
            },
            section: { width: SECTION_OFFSET.left },
          };
        }}
        {...props}
      />
    );
  },
);

export const DateInput = forwardRef<HTMLInputElement, DateInputProps>(
  function DateInput(
    {
      size = "sm",
      value,
      defaultValue,
      onChange,
      leftSection,
      styles,
      ...props
    },
    ref,
  ) {
    const dateValue = useMemo(
      () => (value === undefined ? undefined : fromDateString(value ?? null)),
      [value],
    );
    const defaultDate = useMemo(
      () =>
        defaultValue === undefined
          ? undefined
          : fromDateString(defaultValue ?? null),
      [defaultValue],
    );

    return (
      <MantineDateInput
        ref={ref}
        size={size}
        valueFormat="YYYY-MM-DD"
        value={dateValue}
        defaultValue={defaultDate}
        leftSection={
          leftSection ?? <IconCalendar size={16} stroke={1.5} />
        }
        leftSectionPointerEvents="none"
        onChange={(next) => {
          onChange?.(toDateString(next));
        }}
        styles={(theme, styleProps, ctx) => {
          const base =
            typeof styles === "function"
              ? styles(theme, styleProps, ctx)
              : styles ?? {};
          return {
            ...base,
            input: {
              ...(typeof base === "object" && base && "input" in base
                ? (base as { input?: object }).input
                : {}),
              paddingInlineStart: SECTION_OFFSET.left,
            },
            section: { width: SECTION_OFFSET.left },
          };
        }}
        {...props}
      />
    );
  },
);
