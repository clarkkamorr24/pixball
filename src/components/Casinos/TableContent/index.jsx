"use client";
import { useMemo } from "react";
import moment from "moment";
import CasinoTableHeader from "./Header";
import Expand from "./Expand";
import { useGetData } from "@/hooks";
import { Table, Toggle, SkeletonLoading } from "@/components/ui";
import { IoChevronUp } from "react-icons/io5";

const TableContent = () => {
  const { data, isLoading } = useGetData("/api/casino");

  const columns = useMemo(
    () => [
      {
        accessorKey: "_id",
        header: "ID",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "name",
        header: "Name",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "domain",
        header: "Domain",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "turn_over",
        header: "Turnover",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "tickets",
        header: "Tickets",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "license",
        header: "License",
        cell: (props) => props.getValue(),
        disableSortBy: true,
      },
      {
        accessorKey: "isActive",
        header: "Status",
        cell: ({ row, getValue }) => <Toggle row={row} getValue={getValue} />,
        sortable: false,
      },
      {
        accessorKey: "updatedAt",
        header: "Updated At",
        cell: ({ row, getValue }) => (
          <div className="flex items-center justify-center gap-5">
            {moment(getValue()).format("lll")}
            <button
              {...{
                onClick: () => row.toggleExpanded(!row.getIsExpanded()),
                style: { cursor: "pointer" },
              }}
            >
              {row.getIsExpanded() ? (
                <div className="rounded-full bg-primary p-1 text-white duration-300 ease-in ">
                  <IoChevronUp size={15} />
                </div>
              ) : (
                <div className="rotate-180 rounded-full bg-primary p-1 text-white duration-300 ease-in">
                  <IoChevronUp size={15} />
                </div>
              )}
            </button>
          </div>
        ),
      },
    ],
    [],
  );

  return (
    <div className="dark:outline-strokedark flex flex-col rounded-md bg-white pt-7.5 outline outline-1 outline-stroke dark:bg-black md:col-span-2 xl:col-span-3">
      <CasinoTableHeader />
      {isLoading ? (
        <SkeletonLoading />
      ) : (
        <Table data={data.users} columns={columns} expand={<Expand />} />
      )}
    </div>
  );
};

export default TableContent;
