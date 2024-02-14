import React from "react";
import Image from "next/image";

type Flags = {
  image: string;
  name: string;
  percentage: number;
};

const flags: Flags[] = [
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
              className="flex w-full gap-2 p-2 items-center text-black dark:text-white"
            >
              <Image width={40} height={40} src={item.image} alt="User" />
              <div className="w-full">
                <div className="flex justify-between">
                  <h3>{item.name}</h3>
                  <h3>{item.percentage}%</h3>
                </div>
                <div className="flex w-full bg-stroke rounded-full h-1.5 mt-2">
                  <div
                    className="bg-primary h-1.5 rounded-full"
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
