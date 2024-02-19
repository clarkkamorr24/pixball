import React from "react";

const Progress = ({ getValue }) => {
  const value = getValue();
  return (
    <div className="w-30 flex gap-2 text-black dark:text-white">
      <div className="bg-stroke mt-2 flex h-1.5 w-full rounded-full">
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
