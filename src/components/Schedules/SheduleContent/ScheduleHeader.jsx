import React from "react";
import { ChevronDownIcon, NotifIcon } from "../../Icons";

const ScheduleHeader = () => {
  return (
    <div className="flex items-center justify-between px-4">
      <h3 className="font-semibold text-black dark:text-white">
        Upcoming Schedules
      </h3>
    </div>
  );
};

export default ScheduleHeader;
