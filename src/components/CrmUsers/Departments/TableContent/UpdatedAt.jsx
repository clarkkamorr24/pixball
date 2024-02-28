import React, { useState } from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";

const UpdatedAt = ({ row, getValue }) => {
  const [isOpen, setIsOpen] = useState(false);
  const status = getValue();

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex items-center justify-center gap-3 ">
      <span>{status}</span>
      <div className="right relative items-end rounded-full bg-primary p-1 dark:bg-stroke">
        <IoEllipsisHorizontal
          size={15}
          onClick={togglePopover}
          className="text-white"
        />
        {isOpen && (
          <div className="absolute right-3 top-7 z-99999 flex w-40 flex-col items-start rounded-md bg-primary text-white outline outline-1 outline-white dark:bg-darkGray dark:outline-stroke">
            <span className="flex w-full rounded-tl-md rounded-tr-md p-2 hover:bg-secondary dark:hover:bg-primary">
              Edit
            </span>
            <span className="h-0.5 w-full rounded-bl-md rounded-br-md border-b border-white px-2 dark:border-stroke"></span>
            <span className="flex w-full text-wrap p-2 hover:bg-secondary dark:hover:bg-primary">
              Roles and Permissions
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

export default UpdatedAt;
