"use client";

import {
  Textarea as MantineTextarea,
  type TextareaProps as MantineTextareaProps,
  type ElementProps,
} from "@mantine/core";
import { forwardRef } from "react";

export type TextareaProps = Omit<MantineTextareaProps, "size"> &
  ElementProps<"textarea", keyof MantineTextareaProps> & {
    size?: "xs" | "sm" | "md" | "lg";
  };

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea({ size = "sm", ...props }, ref) {
    return <MantineTextarea ref={ref} size={size} {...props} data-slot="textarea" />;
  },
);
