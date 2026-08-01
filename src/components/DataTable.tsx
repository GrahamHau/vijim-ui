"use client";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
  type ColumnDef,
  type OnChangeFn,
  type PaginationState,
  type RowSelectionState,
  type SortingState,
  type Table as TanstackTable,
} from "@tanstack/react-table";
import { Checkbox, Group, Text } from "@mantine/core";
import { useMemo, useState, type ReactNode } from "react";
import { Table } from "./Table";
import { Pagination } from "./Navigation";
import { Empty } from "./Feedback";
import { scrollWideTableOnWheel } from "../internal/table-interaction";
import {
  LegacyDataTable,
  type LegacyDataTableColumn,
  type LegacyDataTableProps,
} from "./AdminCompat";

export type ModernDataTableColumn<T> = ColumnDef<T, unknown>;
export type DataTableColumn<T extends object> = LegacyDataTableColumn<T>;

export type ModernDataTableProps<T> = {
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
  /** 窄屏合并列时允许缩小表格基准宽度；桌面默认 640。 */
  minWidth?: number | string;
};
export type DataTableProps<T extends object> =
  | ModernDataTableProps<T>
  | LegacyDataTableProps<T>;

export function DataTable<T extends object>(props: DataTableProps<T>) {
  if ("rowKey" in props) {
    return <LegacyDataTable {...props} />;
  }
  return <ModernDataTable {...props} />;
}

function ModernDataTable<T>({
  data,
  columns,
  getRowId,
  selectable = false,
  rowSelection: controlledSelection,
  onRowSelectionChange,
  pageSize,
  onRowClick,
  emptyTitle = "暂无数据",
  emptyDescription = "调整筛选条件，或稍后再试。",
  toolbar,
  loading = false,
  maxHeight,
  minWidth = 640,
}: ModernDataTableProps<T>) {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [internalSelection, setInternalSelection] = useState<RowSelectionState>(
    {},
  );
  const [pagination, setPagination] = useState<PaginationState>({
    pageIndex: 0,
    pageSize: pageSize ?? 20,
  });

  const selection = controlledSelection ?? internalSelection;
  const setSelection = onRowSelectionChange ?? setInternalSelection;

  const cols = useMemo(() => {
    if (!selectable) return columns;
    const selectCol: ColumnDef<T, unknown> = {
      id: "__select",
      size: 40,
      header: ({ table }) => (
        <Checkbox
          aria-label="全选"
          checked={table.getIsAllPageRowsSelected()}
          indeterminate={table.getIsSomePageRowsSelected()}
          onChange={table.getToggleAllPageRowsSelectedHandler()}
        />
      ),
      cell: ({ row }) => (
        <Checkbox
          aria-label="选择行"
          checked={row.getIsSelected()}
          disabled={!row.getCanSelect()}
          onChange={row.getToggleSelectedHandler()}
          onClick={(e) => e.stopPropagation()}
        />
      ),
    };
    return [selectCol, ...columns];
  }, [columns, selectable]);

  const table = useReactTable({
    data,
    columns: cols,
    state: {
      sorting,
      rowSelection: selection,
      ...(pageSize
        ? { pagination: { ...pagination, pageSize } }
        : {}),
    },
    getRowId,
    enableRowSelection: selectable,
    onRowSelectionChange: setSelection,
    onSortingChange: setSorting,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    sortDescFirst: false,
    enableSortingRemoval: true,
    ...(pageSize
      ? { getPaginationRowModel: getPaginationRowModel() }
      : {}),
  });

  const rows = table.getRowModel().rows;
  const pageCount = table.getPageCount();

  return (
    <div>
      {toolbar ? <div style={{ marginBottom: 12 }}>{toolbar}</div> : null}

      <Table.ScrollContainer
        className="vj-data-table-scroll"
        minWidth={minWidth}
        maxHeight={maxHeight}
        onWheel={scrollWideTableOnWheel}
      >
        <Table
          highlightOnHover
          horizontalSpacing="md"
          verticalSpacing="sm"
          stickyHeader={Boolean(maxHeight)}
        >
          <Table.Thead>
            {table.getHeaderGroups().map((hg) => (
              <Table.Tr key={hg.id}>
                {hg.headers.map((header) => (
                  <Table.Th
                    key={header.id}
                    style={{
                      width: header.getSize() !== 150 ? header.getSize() : undefined,
                      userSelect: "none",
                    }}
                  >
                    {header.isPlaceholder ? null : header.column.getCanSort() ? (
                      <button
                        type="button"
                        className="vj-table-sort"
                        data-direction={header.column.getIsSorted() || undefined}
                        onClick={header.column.getToggleSortingHandler()}
                        aria-label={`${String(header.column.columnDef.header ?? header.id)}，${
                          header.column.getIsSorted() === "asc"
                            ? "当前正序，点击切换倒序"
                            : header.column.getIsSorted() === "desc"
                              ? "当前倒序，点击恢复默认排序"
                              : "当前默认排序，点击切换正序"
                        }`}
                      >
                        <span>{flexRender(header.column.columnDef.header, header.getContext())}</span>
                        <i aria-hidden="true">
                          {header.column.getIsSorted() === "asc"
                            ? "↑"
                            : header.column.getIsSorted() === "desc"
                              ? "↓"
                          : ""}
                        </i>
                      </button>
                    ) : (
                      flexRender(header.column.columnDef.header, header.getContext())
                    )}
                  </Table.Th>
                ))}
              </Table.Tr>
            ))}
          </Table.Thead>
          <Table.Tbody>
            {loading ? (
              <Table.Tr>
                <Table.Td colSpan={cols.length}>
                  <Text c="dimmed" size="sm" ta="center" py="lg">
                    加载中…
                  </Text>
                </Table.Td>
              </Table.Tr>
            ) : rows.length === 0 ? (
              <Table.Tr>
                <Table.Td colSpan={cols.length}>
                  <Empty title={emptyTitle} description={emptyDescription} />
                </Table.Td>
              </Table.Tr>
            ) : (
              rows.map((row) => (
                <Table.Tr
                  key={row.id}
                  data-selected={row.getIsSelected() || undefined}
                  style={{
                    cursor: onRowClick ? "pointer" : undefined,
                    backgroundColor: row.getIsSelected()
                      ? "rgba(51, 112, 255, 0.06)"
                      : undefined,
                  }}
                  onClick={() => onRowClick?.(row.original)}
                >
                  {row.getVisibleCells().map((cell) => (
                    <Table.Td key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </Table.Td>
                  ))}
                </Table.Tr>
              ))
            )}
          </Table.Tbody>
        </Table>
      </Table.ScrollContainer>

      {pageSize && pageCount > 1 ? (
        <Group justify="space-between" mt="md">
          <Text size="sm" c="dimmed">
            共 {data.length} 条
          </Text>
          <Pagination
            total={pageCount}
            value={table.getState().pagination.pageIndex + 1}
            onChange={(page) => table.setPageIndex(page - 1)}
          />
        </Group>
      ) : null}
    </div>
  );
}

export type { RowSelectionState, SortingState, TanstackTable };
