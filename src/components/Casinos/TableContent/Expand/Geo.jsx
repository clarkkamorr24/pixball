import Image from "next/image";
import React from "react";
import { IoPencil } from "react-icons/io5";

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

const Geo = () => {
  return (
    <div className="col-span-2 inline-flex flex-col gap-2 rounded-md border border-stroke px-4 py-3">
      <div className="flex items-center justify-between">
        <span>Blocked GEOs</span>
        <div className="cursor-pointer rounded-md bg-primary p-1 text-white">
          <IoPencil size={15} />
        </div>
      </div>
      <div className="mt-2 flex flex-col gap-4">
        {countries.map((country) => (
          <div className="flex gap-4">
            <span>
              <Image width={25} height={25} src={country.image} alt="flag" />
            </span>
            <span>{country.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Geo;
