"use client";

import { Box, SimpleGrid, Stack, Text, Title } from "@mantine/core";
import type { ReactNode } from "react";
import { COLORS } from "../theme/tokens";

export type FormSectionProps = {
  title: string;
  description?: string;
  children: ReactNode;
  /** 字段栅格列数 */
  cols?: number;
};

/** 复杂表单分区：标题 + 说明 + 字段栅格 */
export function FormSection({
  title,
  description,
  children,
  cols = 2,
}: FormSectionProps) {
  return (
    <Box
      p="lg"
      style={{
        backgroundColor: COLORS.surface,
        border: `1px solid ${COLORS.border}`,
        borderRadius: 10,
      }}
    >
      <Stack gap="md">
        <div>
          <Title order={4}>{title}</Title>
          {description ? (
            <Text size="sm" c="dimmed" mt={4}>
              {description}
            </Text>
          ) : null}
        </div>
        <SimpleGrid cols={{ base: 1, sm: cols }} spacing="md">
          {children}
        </SimpleGrid>
      </Stack>
    </Box>
  );
}
