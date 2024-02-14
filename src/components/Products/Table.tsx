"use client";
import React, { useMemo, useState } from "react";
import { Products, mockProductData } from "@/data/mockData";
import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getFacetedRowModel,
  getFacetedUniqueValues,
  getFacetedMinMaxValues,
  getPaginationRowModel,
  getSortedRowModel,
  ColumnDef,
  flexRender,
} from "@tanstack/react-table";
import { SortIcon } from "../Icons";
import StockCell from "./ProductsContent/StockCell";
import ProductNameCell from "./ProductsContent/ProductNameCell";

const DataTable = () => {
  const [data, setData] = useState<Products[]>(() => mockProductData());

  const columns = useMemo<ColumnDef<Products, any>[]>(
    () => [
      {
        accessorKey: "product_name",
        header: "Product Name",
        cell: ProductNameCell,
      },
      {
        accessorKey: "price",
        header: "Price",
        cell: (props) => (
          <span className="text-primary">${props.getValue()}</span>
        ),
      },
      {
        accessorKey: "orders",
        header: "Orders",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "stock",
        header: "Stock",
        cell: StockCell,
      },
      {
        accessorKey: "amount",
        header: "Amount",
        cell: (props) => props.getValue(),
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    getFacetedMinMaxValues: getFacetedMinMaxValues(),
    debugTable: true,
    debugHeaders: true,
    debugColumns: false,
    initialState: {
      pagination: {
        pageSize: 7,
      },
    },
  });

  return (
    <div className="relative overflow-x-auto py-4">
      <table className="w-full text-white">
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id} className="">
              {headerGroup.headers.map((header) => {
                return (
                  <th
                    key={header.id}
                    colSpan={header.colSpan}
                    className="bg-dark py-4 text-sm"
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
                            header.getContext()
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
              <tr key={row.id}>
                {row.getVisibleCells().map((cell) => {
                  return (
                    <td
                      scope="row"
                      key={cell.id}
                      className="whitespace-nowrap px-4 py-3 text-sm dark:text-white text-black"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="relative overflow-x-auto flex items-center gap-2 px-4 justify-between text-white py-2">
        <span className="flex items-center gap-1 dark:text-white text-black">
          <div>
            Showing {table.getState().pagination.pageIndex + 1} to{" "}
            {table.getRowModel().rows.length} of {table.getPageCount()} entries
          </div>
        </span>

        <div className="flex gap-5">
          <button
            className="cursor-pointer text-xl text-primary font-bold"
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            {"<"}
          </button>
          <div className="flex gap-2">
            <button className="px-3 rounded-md bg-primary">
              {table.getState().pagination.pageIndex + 1}
            </button>
          </div>

          <button
            className="cursor-pointer text-xl text-primary font-bold"
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

export default DataTable;
