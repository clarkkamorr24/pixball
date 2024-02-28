import React, { Fragment } from "react";
import { SortIcon } from "@/components/Icons";

const headers = [
  {
    name: "ID",
  },
  {
    name: "Name",
  },
  {
    name: "Domain",
  },
  {
    name: "Turnover",
  },
  {
    name: "Tickets",
  },
  {
    name: "License",
  },
  {
    name: "Status",
  },
  {
    name: "Updated At",
  },
];
const SkeletonLoading = () => {
  const filledArray = new Array(88).fill("");
  return (
    <div className="w-full py-4 text-white">
      <div className="flex justify-between bg-primary py-4 pl-6 pr-25 text-sm dark:bg-dark">
        {headers.map((header, index) => (
          <div className="flex items-center gap-2" key={index}>
            {header.name} <SortIcon />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center gap-2 px-4 py-10 text-black dark:text-white">
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status"
        ></div>
        <span className="animate-pulse">Fetching Data . . .</span>
      </div>
    </div>
  );
};

export default SkeletonLoading;
