"use client";

import {
  Center,
  Loader,
  Skeleton as MantineSkeleton,
  Stack,
  Text,
  type SkeletonProps as MantineSkeletonProps,
} from "@mantine/core";
import type { ReactNode } from "react";
import { COLORS, FORM_LAYOUT } from "../theme/tokens";
import { Button } from "./Button";

export type EmptyProps = {
  title?: string;
  description?: string;
  action?: ReactNode;
  icon?: ReactNode;
  scope?: "page" | "section" | "inline";
};

export function Empty({
  title = "暂无内容",
  description,
  action,
  icon,
  scope = "section",
}: EmptyProps) {
  const inline = scope === "inline";
  return (
    <Center
      data-scope={scope}
      mih={scope === "page" ? 420 : inline ? 72 : 120}
      py={scope === "page" ? 64 : inline ? 12 : 32}
      px={inline ? FORM_LAYOUT.sectionInline : "md"}
      style={inline ? { justifyContent: "flex-start" } : undefined}
    >
      <Stack align={inline ? "flex-start" : "center"} gap={inline ? 2 : "sm"} maw={360}>
        {icon}
        <Text fw={600} size="sm" c={COLORS.ink}>
          {title}
        </Text>
        {description ? (
          <Text size={inline ? "xs" : "sm"} c="dimmed" ta={inline ? "left" : "center"}>
            {description}
          </Text>
        ) : null}
        {action}
      </Stack>
    </Center>
  );
}

export type SkeletonProps = MantineSkeletonProps & {
  variant?: "text" | "block" | "avatar";
  lines?: 1 | 2 | 3 | 4;
};

export function Skeleton({ variant, lines, ...props }: SkeletonProps) {
  if (variant) {
    return (
      <div className="vj-skeleton" data-variant={variant} aria-hidden="true">
        {Array.from(
          { length: variant === "text" ? lines ?? 1 : 1 },
          (_, index) => (
            <span key={index} />
          ),
        )}
      </div>
    );
  }
  return <MantineSkeleton {...props} />;
}

export type SpinnerProps = {
  label?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
};

export function Spinner({ label, size = "sm" }: SpinnerProps) {
  return (
    <Center py="xl">
      <Stack align="center" gap="sm">
        <Loader size={size} color="brand" type="dots" />
        {label ? (
          <Text size="sm" c="dimmed">
            {label}
          </Text>
        ) : null}
      </Stack>
    </Center>
  );
}

export { Button as EmptyActionButton };
