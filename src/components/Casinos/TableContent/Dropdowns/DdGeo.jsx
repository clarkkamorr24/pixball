import Image from "next/image";
import React, { useState } from "react";
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";

const countries = [
  {
    image: "/images/flag/us.png",
    name: "USA",
  },
  {
    image: "/images/flag/canada.png",
    name: "Canada",
  },
  {
    image: "/images/flag/pakistan.png",
    name: "Pakista",
  },
  {
    image: "/images/flag/russia.png",
    name: "Russia",
  },
  {
    image: "/images/flag/australia.png",
    name: "Australia",
  },
];

const DdGeo = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="relative flex flex-col gap-2 rounded-md">
      <label className="text-black dark:text-white">Blocked GEO(s)</label>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="flex w-full items-center justify-between rounded-md bg-primary p-2 dark:bg-stroke"
      >
        United States
        {isOpen ? <IoCaretUpOutline /> : <IoCaretDownOutline />}
      </button>

      {isOpen && (
        <div className="absolute top-15 z-99 flex w-full flex-col items-start gap-2 rounded-md bg-secondary  dark:bg-stroke">
          <ul className="w-full ">
            {countries.map((country) => (
              <li
                onClick={() => setIsOpen(false)}
                className="cursor-pointer first:rounded-tl-md first:rounded-tr-md last:rounded-bl-md last:rounded-br-md hover:bg-primary"
              >
                <div className="flex items-center gap-3 px-3 py-2">
                  <span>
                    <Image
                      width={25}
                      height={25}
                      src={country.image}
                      alt="flag"
                    />
                  </span>
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

export default DdGeo;
