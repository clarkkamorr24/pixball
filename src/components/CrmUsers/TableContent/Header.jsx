import React from "react";
import { ReportIcon } from "@/components/Icons";

const CasinoTableHeader = () => {
  return (
    <div className="flex items-center justify-between px-4">
      <h3 className="text-sm font-semibold text-black dark:text-white">
        List of Users
      </h3>
      <div className="flex rounded-md bg-primary px-4 py-2 text-sm text-white">
        <button>Create New User</button>
      </div>
    </div>
  );
};

export default CasinoTableHeader;
