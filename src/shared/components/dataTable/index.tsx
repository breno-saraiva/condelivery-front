import { cn } from "@/shared/lib/utils";
import { Loader } from "../loader";
import { Tooltip } from "@/shared/components/tooltip";
import { Button } from "@/shared/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/components/ui/table";
import {
  ColumnDef,
  SortingState,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { PiDotsThreeVerticalBold } from "react-icons/pi";
import { IPagination, Pagination } from "./pagination";
import { DropdownMenu } from "@/shared/components/dropdownMenu";
import { ActionButton } from "@/shared/components/types/ActionButton";

type DataTableProps<TData, TValue> = {
  columns: ColumnDef<TData, TValue>[];
  handleRowClick?: (row: TData) => void;
  data: TData[];
  actionButtons?: ActionButton[];
  actions?: ActionButton[];
  isLoading?: boolean;
} & IPagination;

export function DataTable<TData, TValue>({
  columns,
  data,
  isLoading,
  actionButtons = [],
  handleRowClick,
  pageInfo,
  handleSelectPerPage,
  handlePreviousPage,
  handleNextPage,
  actions = [],
}: DataTableProps<TData, TValue>) {
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    state: { sorting },
  });

  return (
    <>
      <div className="rounded-md border">
        <Table>
          <TableHeader className="bg-zinc-200">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {actionButtons.length > 0 && (
                  <TableHead className="text-center">#</TableHead>
                )}
                {actions.length > 0 && (
                  <TableHead className="flex items-center justify-center">
                    Ações
                  </TableHead>
                )}
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id} className=" text-center">
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center"
                >
                  <Loader />
                </TableCell>
              </TableRow>
            ) : table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className={cn(handleRowClick && "cursor-pointer")}
                  onClick={() =>
                    handleRowClick &&
                    actionButtons.length === 0 &&
                    actions.length === 0 &&
                    handleRowClick(row.original)
                  }
                >
                  {actionButtons.length > 0 && (
                    <TableCell className="text-center">
                      <DropdownMenu
                        buttons={actionButtons.map((buttonProperty) => {
                          return {
                            ...buttonProperty,
                            onClick: () => buttonProperty.onClick(row.original),
                          };
                        })}
                      >
                        <Button size="icon" variant="ghost">
                          <PiDotsThreeVerticalBold />
                        </Button>
                      </DropdownMenu>
                    </TableCell>
                  )}
                  {actions.length > 0 && (
                    <TableCell className="flex items-center justify-center">
                      {actions.map((action, index) => (
                        <Tooltip text={action.label} side="right">
                          <Button
                            key={index}
                            size="icon"
                            variant="ghost"
                            onClick={() => action.onClick(row.original)}
                          >
                            {action.icon}
                          </Button>
                        </Tooltip>
                      ))}
                    </TableCell>
                  )}
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className="text-center">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <div className="flex flex-col justify-center items-end font-semibold h-96 bg-white">
                  <h1 className="w-1/3 font-bold text-[#F48C06]">
                    Nenhum Dado foi encontrado
                  </h1>
                </div>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      {pageInfo && data.length > 0 && (
        <div className="flex items-center justify-end space-x-2 py-4 px-12">
          <Pagination
            pageInfo={pageInfo}
            handleSelectPerPage={handleSelectPerPage}
            handlePreviousPage={handlePreviousPage}
            handleNextPage={handleNextPage}
          />
        </div>
      )}
    </>
  );
}
