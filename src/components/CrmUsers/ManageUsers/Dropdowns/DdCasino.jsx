import React, { useState } from "react";
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";

const countries = [
  {
    name: "Operator",
  },
  {
    name: "Client",
  },
  {
    name: "Admin",
  },
];

const DdCasino = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex flex-col gap-2 rounded-md text-sm">
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-md bg-primary p-2 px-3 py-3 text-white dark:bg-lightGray dark:text-stroke"
      >
        Operator
        {isOpen ? <IoCaretUpOutline /> : <IoCaretDownOutline />}
      </button>

      {isOpen && (
        <div className="absolute top-12 z-9999 flex w-full flex-col items-start gap-2 rounded-md bg-secondary dark:bg-lightGray">
          <ul className="w-full ">
            {countries.map((country) => (
              <li
                onClick={() => setIsOpen(false)}
                className="cursor-pointer first:rounded-tl-md first:rounded-tr-md last:rounded-bl-md last:rounded-br-md hover:bg-primary "
              >
                <div className="flex items-center gap-3 px-3 py-2 text-white">
                  <label>{country.name}</label>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DdCasino;
