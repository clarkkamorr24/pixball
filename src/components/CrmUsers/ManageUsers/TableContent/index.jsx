"use client";
import React, { useMemo } from "react";
import moment from "moment";
import CrmTableHeader from "./Header";
import {
  SkeletonLoading,
  Table,
  Toggle,
  CrossCheck,
  Action,
} from "@/components/ui";
import { useGetData } from "@/hooks";

const TableContent = () => {
  const { data, isLoading } = useGetData("/api/crm-users");

  const columns = useMemo(
    () => [
      {
        accessorKey: "firstName",
        header: "First Name",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "lastName",
        header: "Last Name",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "email",
        header: "Email",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "password",
        header: "Password",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "type",
        header: "Casino",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "department",
        header: "Department",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "role",
        header: "Role",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "country",
        header: "Country",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "isOnline",
        header: "Is Online",
        cell: ({ row, getValue }) => (
          <CrossCheck row={row} getValue={getValue} />
        ),
      },
      {
        accessorKey: "isEmailVerified",
        header: "Verified Email",
        cell: ({ row, getValue }) => (
          <CrossCheck row={row} getValue={getValue} />
        ),
      },
      {
        accessorKey: "createdAt",
        header: "Created At",
        cell: (props) => <span>{moment(props.getValue()).format("lll")}</span>,
      },
      {
        accessorKey: "updatedAt",
        header: "Updated At",
        cell: (props) => <span>{moment(props.getValue()).format("lll")}</span>,
      },
      {
        accessorKey: "lastSeen",
        header: "Last Seen",
        cell: (props) => <span>{moment(props.getValue()).format("lll")}</span>,
      },
      {
        accessorKey: "two_fa",
        header: "2FA",
        cell: (props) => props.getValue(),
      },
      {
        accessorKey: "status",
        header: "Status",
        cell: ({ row, getValue }) => <Toggle row={row} getValue={getValue} />,
      },
      {
        accessorKey: "actions",
        header: "",
        cell: ({ row }) => <Action row={row} />,
      },
    ],
    [],
  );

  return (
    <div className="dark:outline-strokedark flex flex-col rounded-md bg-white pt-7.5 outline outline-1 outline-stroke dark:bg-black md:col-span-2 xl:col-span-3">
      <CrmTableHeader />
      {isLoading ? (
        <SkeletonLoading />
      ) : (
        <Table data={data.users} columns={columns} />
      )}
    </div>
  );
};

export default TableContent;
