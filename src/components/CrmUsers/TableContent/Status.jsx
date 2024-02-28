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
      {status === "active" ? (
        <span className="rounded-md bg-success px-3 py-1 capitalize">
          {status}
        </span>
      ) : (
        <span className="rounded-md bg-red px-3 py-1 capitalize">{status}</span>
      )}
      <div className="relative rounded-full bg-primary p-1 dark:bg-stroke">
        <IoEllipsisHorizontal size={20} onClick={togglePopover} />
        {isOpen && (
          <div className="absolute right-3 top-9 z-99999 flex w-30 flex-col items-start rounded-md bg-primary outline outline-1 outline-white dark:bg-darkGray dark:outline-stroke">
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
