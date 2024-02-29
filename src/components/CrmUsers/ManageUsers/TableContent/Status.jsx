import React, { useState } from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";

const Status = ({ row, getValue }) => {
  const [isOpen, setIsOpen] = useState(false); // State to control popover visibility
  const status = getValue();

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-between gap-3 text-white">
      <div className="flex w-full items-center justify-center">
        <label htmlFor={row.id} className="flex cursor-pointer items-center">
          <input
            type="checkbox"
            id={row.id}
            className="peer sr-only"
            defaultChecked={status === "active" ? true : false}
          />
          <div className="relative block h-5 w-10 rounded-full bg-red p-1 text-xs before:absolute before:left-1 before:h-3 before:w-3 before:rounded-full before:bg-white before:p-1 before:transition-all before:duration-500 peer-checked:bg-success peer-checked:before:left-6 peer-checked:before:bg-white"></div>
        </label>
      </div>
      <div className="relative rounded-full bg-primary p-1 dark:bg-stroke">
        <IoEllipsisHorizontal size={15} onClick={togglePopover} />
        {isOpen && (
          <div className="absolute right-3 top-7 z-99999 flex w-30 flex-col items-start rounded-md bg-primary outline outline-1 outline-white dark:bg-darkGray dark:outline-stroke">
            <span
              className="flex w-full rounded-tl-md rounded-tr-md p-2 hover:bg-secondary dark:hover:bg-primary"
              onClick={() => console.log("id", row.original.id)}
            >
              Edit
            </span>
            <span className="h-0.5 w-full rounded-bl-md rounded-br-md border-b border-white px-2 dark:border-stroke"></span>
            <span className="flex w-full p-2 hover:bg-secondary dark:hover:bg-primary">
              Delete
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Status;
