import React, { ReactNode } from "react";

type ProgressProps = {
  title: string;
  total: string;
  children: ReactNode;
};

const ProgressCard: React.FC<ProgressProps> = ({ title, total, children }) => {
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
        <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
          {children}
        </div>
      </div>
      <div className="flex flex-col px-4 py-2 text-sm text-black dark:text-mediumGray">
        <div className="flex justify-between">
          <span>Task not finished</span>
          <span>20/28</span>
        </div>

        <div className="flex w-full bg-stroke rounded-full h-1.5 mt-2">
          <div
            className="bg-primary h-1.5 rounded-full"
            style={{ width: `50%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;
