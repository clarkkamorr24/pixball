import React from "react";

const Progress = ({ getValue }) => {
  const value = getValue();
  return (
    <div className="flex w-30 gap-2 text-black dark:text-white">
      <div className="mt-2 flex h-1.5 w-full rounded-full bg-stroke">
        <div
          className="h-1.5 rounded-full bg-primary"
          style={{ width: `${value}%` }}
        ></div>
      </div>
      <div>{value}%</div>
    </div>
  );
};

export default Progress;
