import React from "react";

const Status = (props) => {
  return (
    <div>
      <div className="my-3 flex w-full items-center justify-center">
        <label
          htmlFor={props.cell.id}
          className="flex cursor-pointer items-center"
        >
          <input type="checkbox" id={props.cell.id} className="peer sr-only" />
          <div className="relative block h-5 w-10 rounded-full bg-red p-1 text-xs before:absolute before:left-1 before:h-3 before:w-3 before:rounded-full before:bg-white before:p-1 before:transition-all before:duration-500 peer-checked:bg-success peer-checked:before:left-6 peer-checked:before:bg-white"></div>
        </label>
      </div>
    </div>
  );
};

export default Status;
