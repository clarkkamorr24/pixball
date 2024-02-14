import React from "react";
import { ReportIcon } from "@/components/Icons";
import DataTable from "./Table";

const ActiveProject: React.FC = () => {
  return (
    <div className="flex flex-col rounded-md bg-white outline outline-1 outline-stroke dark:outline-strokedark dark:bg-black pt-7.5 md:col-span-2 xl:col-span-3">
      <div className="flex justify-between items-center px-4">
        <h3 className="font-semibold text-black dark:text-white">
          Active Projects
        </h3>
        <div className="inline-flex gap-1 items-center">
          <span>
            <ReportIcon className="stroke-primary fill-primary" />
          </span>
          <h2 className="cursor-pointer text-primary">Export Report</h2>
        </div>
      </div>
      <div>
        <DataTable />
      </div>
    </div>
  );
};

export default ActiveProject;
