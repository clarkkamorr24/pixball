import React from "react";

const ProgressCard = ({ title, total, props }) => {
  return (
    <div className="pt-5">
      <div className="flex justify-between px-6 md:px-6 xl:px-4">
        <div>
          <span className="text-sm font-medium text-black dark:text-white">
            {title}
          </span>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {total}
          </h4>
        </div>
        <div className="bg-meta-2 dark:bg-meta-4 flex h-11.5 w-11.5 items-center justify-center rounded-full">
          {props}
        </div>
      </div>
      <div className="flex flex-col px-4 py-2 text-sm text-black dark:text-mediumGray">
        <div className="flex justify-between">
          <span>Task not finished</span>
          <span>20/28</span>
        </div>

        <div className="mt-2 flex h-1.5 w-full rounded-full bg-stroke">
          <div
            className="h-1.5 rounded-full bg-primary"
            style={{ width: `50%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
