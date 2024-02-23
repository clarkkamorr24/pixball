"use client";
import Card from "@/components/Casinos/Card";
import React, { useState } from "react";
import { IoStarOutline } from "react-icons/io5";
import { IoThumbsUpOutline } from "react-icons/io5";
import { IoThumbsDownOutline } from "react-icons/io5";
import Table from "./TableContent";
import Datepicker from "react-tailwindcss-datepicker";

const casino = [
  {
    label: "Top Casino",
    total: 8,
    duration: "For the last 3 weeks",
    icon: <IoStarOutline size={20} />,
    casinoList: [
      {
        id: 1,
        title: "Casino Pool",
      },
      {
        id: 2,
        title: "Casino Tongits",
      },
      {
        id: 3,
        title: "Casino Casino Cards",
      },
    ],
  },
  {
    label: "Active Casino",
    total: 53,
    duration: "For the last 3 weeks",
    icon: <IoThumbsUpOutline size={20} />,
  },
  {
    label: "Inactive Casino",
    total: 4,
    duration: "For the last 3 weeks",
    icon: <IoThumbsDownOutline size={20} />,
  },
];
const Casinos = () => {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };
  return (
    <div className="flex flex-col gap-4">
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
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {casino.map((item, index) => (
          <Card casino={item} key={index} />
        ))}
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
};

export default Casinos;
