import React from "react";
import Image from "next/image";

const flags = [
  {
    image: "/images/flag/india.png",
    name: "India",
    percentage: 50,
  },
  {
    image: "/images/flag/canada.png",
    name: "Canda",
    percentage: 30,
  },
  {
    image: "/images/flag/russia.png",
    name: "Russia",
    percentage: 20,
  },
  {
    image: "/images/flag/uk.png",
    name: "Untied Kingdom",
    percentage: 40,
  },
  {
    image: "/images/flag/australia.png",
    name: "Australia",
    percentage: 60,
  },
  {
    image: "/images/flag/us.png",
    name: "United States",
    percentage: 20,
  },
  {
    image: "/images/flag/pakistan.png",
    name: "Pakistan",
    percentage: 20,
  },
];

const Flaglist = () => {
  return (
    <div>
      <div className="flex flex-col">
        {flags.map((item) => {
          return (
            <div
              key={item.name}
              className="flex w-full items-center gap-2 p-2 text-black dark:text-white"
            >
              <Image width={40} height={40} src={item.image} alt="User" />
              <div className="w-full">
                <div className="flex justify-between">
                  <h3>{item.name}</h3>
                  <h3>{item.percentage}%</h3>
                </div>
                <div className="mt-2 flex h-1.5 w-full rounded-full bg-stroke">
                  <div
                    className="h-1.5 rounded-full bg-primary"
                    style={{ width: `${item.percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Flaglist;
