import React from "react";

const Progress = ({ getValue }: any) => {
  const value = getValue();
  return (
    <div className="flex w-30 gap-2 dark:text-white text-black">
      <div className="flex w-full bg-stroke rounded-full h-1.5 mt-2">
        <div
          className="bg-primary h-1.5 rounded-full"
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <div>{value}%</div>
    </div>
  );
};

export default Progress;
