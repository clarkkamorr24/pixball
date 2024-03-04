"use client";
import React, { useState } from "react";
import { IoEllipsisHorizontal } from "react-icons/io5";
import { cn } from "@/lib";

export const Action = ({ row, roles }) => {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className="relative rounded-full bg-primary p-1 text-white dark:bg-stroke">
        <IoEllipsisHorizontal size={15} onClick={togglePopover} />
        {isOpen && (
          <div
            className={cn(
              "absolute right-3 top-7 z-99999 flex flex-col items-start rounded-md bg-primary outline outline-1 outline-white dark:bg-darkGray dark:outline-stroke",
              roles ? "w-40" : "w-30",
            )}
          >
            <span
              className="flex w-full rounded-tl-md rounded-tr-md p-2 hover:bg-secondary dark:hover:bg-primary"
              onClick={() => console.log("id", row.id)}
            >
              Edit
            </span>
            {roles && (
              <>
                <span className="h-0.5 w-full rounded-bl-md rounded-br-md border-b border-white px-2 dark:border-stroke"></span>
                <span className="flex w-full text-wrap p-2 hover:bg-secondary dark:hover:bg-primary">
                  Roles and Permissions
                </span>
              </>
            )}
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
