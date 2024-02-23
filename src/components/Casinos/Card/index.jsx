import React from "react";
import { IoTrophyOutline } from "react-icons/io5";

const Card = (casino) => {
  const { label, total, duration, casinoList, icon } = casino.casino;
  return (
    <div className="dark:outline-strokedark rounded-md bg-white px-8 py-3 text-black outline outline-1 outline-stroke dark:bg-black dark:text-white">
      <div className="text-xl font-bold">{label}</div>
      <div className="flex justify-between text-2xl font-thin">
        {total}
        <span className=" flex items-center justify-center rounded-full bg-primary bg-opacity-20 p-2 text-primary">
          {icon}
        </span>
      </div>
      <div className="text-xs">{duration}</div>
      <ul className="mt-2 flex flex-col">
        {casinoList &&
          casinoList.map((item) => {
            return (
              <li
                key={item.id}
                className="flex justify-between border-b border-stroke py-1.5 text-xs last:border-none"
              >
                <div className="flex gap-3">
                  <span className="w-4">{item.id}</span>
                  <span>{item.title}</span>
                </div>
                <div>
                  <span>
                    <IoTrophyOutline size={20} />
                  </span>
                </div>
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export default Card;
