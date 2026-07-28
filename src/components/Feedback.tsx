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
import { COLORS } from "../theme/tokens";
import { Button } from "./Button";

export type EmptyProps = {
  title?: string;
  description?: string;
  action?: ReactNode;
  icon?: ReactNode;
};

export function Empty({
  title = "暂无内容",
  description,
  action,
  icon,
}: EmptyProps) {
  return (
    <Center py={40} px="md">
      <Stack align="center" gap="sm" maw={360}>
        {icon}
        <Text fw={600} size="sm" c={COLORS.ink}>
          {title}
        </Text>
        {description ? (
          <Text size="sm" c="dimmed" ta="center">
            {description}
          </Text>
        ) : null}
        {action}
      </Stack>
    </Center>
  );
}

export type SkeletonProps = MantineSkeletonProps;

export function Skeleton(props: SkeletonProps) {
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
