import React from "react";
import { ChevronDown, NotifIcon } from "../../Icons";

const ScheduleHeader = () => {
  return (
    <div className="flex justify-between items-center px-4">
      <h3 className="font-semibold text-black dark:text-white">
        Upcoming Schedules
      </h3>
    </div>
  );
};

export default ScheduleHeader;
