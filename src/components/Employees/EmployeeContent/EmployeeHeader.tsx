import React from "react";
import { ChevronDown, NotifIcon } from "../../Icons";

const EmployeeHeader = () => {
  return (
    <div className="flex justify-between items-center px-4">
      <h3 className="font-semibold text-black dark:text-white">Chat</h3>
      <div className="inline-flex gap-3 items-center">
        <span>
          <NotifIcon className="stroke-primary" />
        </span>
        <div className="cursor-pointer flex items-center gap-1">
          <h2 className="text-primary">Settings </h2>
          <span>
            <ChevronDown className="stroke-primary" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeHeader;
