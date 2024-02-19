import React from "react";
import { ReportIcon } from "@/components/Icons";
import DataTable from "./Table";

const ActiveProject = () => {
  return (
    <div className="dark:outline-strokedark pt-7.5 outline-stroke flex flex-col rounded-md bg-white outline outline-1 md:col-span-2 xl:col-span-3 dark:bg-black">
      <div className="flex items-center justify-between px-4">
        <h3 className="font-semibold text-black dark:text-white">
          Active Projects
        </h3>
        <div className="inline-flex items-center gap-1">
          <span>
            <ReportIcon className="fill-primary stroke-primary" />
          </span>
          <h2 className="text-primary cursor-pointer">Export Report</h2>
        </div>
      </div>
      <div>
        <DataTable />
      </div>
    </div>
  );
};

export default ActiveProject;
