import Image from "next/image";
import React, { useState } from "react";
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";

const countries = [
  {
    name: "English",
  },
  {
    name: "Spain",
  },
  {
    name: "Chinese",
  },
  {
    name: "Russian",
  },
];

const DdLanguages = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex flex-col gap-2 rounded-md">
      <label className="text-black dark:text-white">Languages</label>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-md bg-primary p-2 dark:bg-stroke"
      >
        English
        {isOpen ? <IoCaretUpOutline /> : <IoCaretDownOutline />}
      </button>

      {isOpen && (
        <div className="absolute top-15 z-9999 flex w-full flex-col items-start gap-2 rounded-md bg-sky-300 dark:bg-stroke">
          <ul className="w-full ">
            {countries.map((country) => (
              <li
                onClick={() => setIsOpen(false)}
                className="cursor-pointer first:rounded-tl-md first:rounded-tr-md last:rounded-bl-md last:rounded-br-md hover:bg-primary"
              >
                <div className="flex items-center gap-3 px-3 py-2">
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

export default DdLanguages;
