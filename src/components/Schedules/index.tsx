import React from "react";
import ScheduleHeader from "./SheduleContent/ScheduleHeader";

const Schedules: React.FC = () => {
  return (
    <div className="flex flex-col rounded-md bg-white outline outline-1 outline-stroke dark:outline-strokedark dark:bg-black pt-7.5 md:col-span-2 xl:col-span-2">
      <ScheduleHeader />
    </div>
  );
};

export default Schedules;
