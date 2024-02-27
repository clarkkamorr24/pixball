"use client";
import React, { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";
const Sort = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <div className="flex w-full flex-col gap-2 pb-5 sm:flex-row md:flex-row lg:flex-row xl:flex-row 2xl:flex-row">
      <div className="flex gap-2">
        <button className="dark:hover:bg-boxdark rounded-lg bg-primary px-3 py-1 text-xs font-medium text-white shadow-card hover:shadow-card dark:text-white">
          Today
        </button>
        <button className="dark:hover:bg-boxdark rounded-lg bg-primary px-3 py-1 text-xs font-medium text-white shadow-card  hover:shadow-card dark:text-white">
          Yesterday
        </button>
        <button className="dark:hover:bg-boxdark rounded-lg bg-primary px-3 py-1 text-xs font-medium text-white  shadow-card  hover:shadow-card dark:text-white">
          Week
        </button>
        <button className="dark:hover:bg-boxdark rounded-lg bg-primary px-3 py-1 text-xs font-medium text-white  shadow-card  hover:shadow-card dark:text-white">
          Month
        </button>
      </div>
      <div className="flex gap-2">
        <div>
          <Datepicker
            placeholder={"Custom"}
            separator={"to"}
            value={value}
            displayFormat={"DD/MM/YY"}
            onChange={handleValueChange}
            toggleClassName="absolute text-white right-0 h-full px-3 focus:outline-none"
            inputClassName="bg-primary rounded-md p-2 text-white placeholder:text-white focus:outline-none w-43 text-xs cursor-pointer"
          />
        </div>
        <button className="dark:hover:bg-boxdark rounded-lg bg-primary px-3 py-1 text-xs font-medium text-white  shadow-card  hover:shadow-card dark:text-white">
          All
        </button>
      </div>
    </div>
  );
};

export default Sort;
