"use client";

import {
  Table as MantineTable,
  type TableProps as MantineTableProps,
} from "@mantine/core";

export type TableProps = MantineTableProps;

/** 基础表格原语；列表页请优先用 DataTable */
export function Table(props: TableProps) {
  return <MantineTable {...props} />;
}
Table.Thead = MantineTable.Thead;
Table.Tbody = MantineTable.Tbody;
Table.Tfoot = MantineTable.Tfoot;
Table.Tr = MantineTable.Tr;
Table.Th = MantineTable.Th;
Table.Td = MantineTable.Td;
Table.Caption = MantineTable.Caption;
Table.ScrollContainer = MantineTable.ScrollContainer;
