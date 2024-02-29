"use client";
import React, { useMemo, useState } from "react";
import { SortIcon } from "@/components/Icons";
import { departmentsData } from "@/data/departments";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getExpandedRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel,
  flexRender,
} from "@tanstack/react-table";
import { cn } from "@/lib/utils";
import Status from "./Status";
import UpdatedAt from "./UpdatedAt";

const CasinoDataTable = () => {
  const [data, setData] = useState(() => departmentsData());
  const [expanded, setExpanded] = useState({});

  const columns = useMemo(
    () => [
      {
        accessorKey: "id",
        header: "ID",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "department",
        header: "Password",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "role",
        header: "Role",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "casino",
        header: "Casino",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row, getValue }) => <Status row={row} getValue={getValue} />,
      },
      {
        accessorKey: "created_at",
        header: "Created At",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "updated_at",
        header: "Updated At",
        cell: UpdatedAt,
      },
    ],
    [],
  );

  const table = useReactTable({
    data,
    columns,
    state: {
      expanded,
    },
    onExpandedChange: setExpanded,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    getExpandedRowModel: getExpandedRowModel(),

    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  return (
    <div>
      <div className="relative overflow-x-auto py-4">
        <table className="w-full text-white">
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr
                key={headerGroup.id}
                className="shadow-md shadow-stroke drop-shadow-lg"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <th
                      key={header.id}
                      colSpan={header.colSpan}
                      className="bg-primary px-4 py-4 text-xs dark:bg-dark"
                      scope="col"
                    >
                      {header.isPlaceholder ? null : (
                        <>
                          <div
                            {...{
                              className: header.column.getCanSort()
                                ? "cursor-pointer"
                                : "",
                              onClick: header.column.getToggleSortingHandler(),
                            }}
                            className="inline-flex cursor-pointer items-center gap-1"
                          >
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext(),
                            )}
                            <SortIcon />
                          </div>
                        </>
                      )}
                    </th>
                  );
                })}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => {
              return (
                <React.Fragment key={row.id}>
                  <tr
                    key={row.id + "original"}
                    className={cn(
                      "border-b border-stroke",
                      row.id % 2 == 0
                        ? "bg-white text-black hover:bg-orange-200 dark:bg-darkGray dark:text-white dark:hover:bg-orange-200 dark:hover:text-black"
                        : "bg-primary bg-opacity-20 text-black hover:bg-orange-200 dark:bg-black dark:text-white dark:hover:bg-orange-200 dark:hover:text-black",
                    )}
                  >
                    {row.getVisibleCells().map((cell) => {
                      return (
                        <td
                          scope="row"
                          key={cell.id}
                          className="cursor-pointer whitespace-nowrap border-t border-stroke px-4 py-3 text-xs"
                        >
                          <div className="text-center">
                            {flexRender(
                              cell.column.columnDef.cell,
                              cell.getContext(),
                            )}
                          </div>
                        </td>
                      );
                    })}
                  </tr>
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="relative flex items-center justify-between gap-2 overflow-x-auto px-4 py-2 text-white">
        <span className="flex items-center gap-1 text-xs text-black dark:text-white">
          <div>
            {/* <td colSpan={20}>Page Rows ({table.getRowModel().rows.length})</td> */}
            Showing {table.getState().pagination.pageIndex + 1} to{" "}
            {table.getRowModel().rows.length} of {table.getPageCount()} entries
          </div>
        </span>
        <div className="flex gap-5">
          <button
            className="cursor-pointer text-xl font-bold text-primary"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <button className="rounded-md bg-primary px-3 text-xs">
            {table.getState().pagination.pageIndex + 1}
          </button>
          <button
            className="cursor-pointer text-xl font-bold text-primary"
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            {">"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CasinoDataTable;
