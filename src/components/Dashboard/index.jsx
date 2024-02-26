"use client";
import { DepositIcon, DollarIcon } from "@/components/Icons";
import CardStats from "@/components/Dashboard/CardStats";
import TotalEarning from "@/components/Dashboard/TotalEarning";
import ProjectOverview from "@/components/Dashboard/ProjectOverview";
import Todo from "@/components/Dashboard/Todo";
import ActiveUser from "@/components/Dashboard/ActiveUser";
import ActiveProject from "@/components/Dashboard/ActiveProject";
import Chat from "@/components/Dashboard/Chat";
import Products from "@/components/Dashboard/Products";
import Schedules from "@/components/Dashboard/Schedules";
import { useState } from "react";
import Datepicker from "react-tailwindcss-datepicker";

export const metadata = {
  title: "CRM Dashboard",
  description: "dashboard",
};

export default function Dashboard() {
  const [value, setValue] = useState({
    startDate: null,
    endDate: null,
  });

  const handleValueChange = (newValue) => {
    console.log("newValue:", newValue);
    setValue(newValue);
  };

  return (
    <div>
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
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-6 2xl:gap-6">
        <CardStats title="Total Deposit" total="$1200.00" chart="Bar">
          <div className="rounded-md bg-primary bg-opacity-10 px-4 py-3">
            <DollarIcon className="fill-primary stroke-primary" />
          </div>
        </CardStats>
        <CardStats title="All Projects" total="$45,2K" chart="Pie">
          <div className="rounded-md bg-primary bg-opacity-10 px-4 py-3">
            <DollarIcon className="fill-primary stroke-primary" />
          </div>
        </CardStats>
        <CardStats title="Total Expenses" total="$1200.00" chart="Bar">
          <div className="rounded-md bg-red bg-opacity-10 px-4 py-3">
            <DollarIcon className="fill-red stroke-red" />
          </div>
        </CardStats>
        <CardStats title="Total Deposit" total="20" chart="Progress">
          <div className="rounded-md bg-primary bg-opacity-10 px-3 py-3">
            <DepositIcon className="fill-primary stroke-primary" />
          </div>
        </CardStats>
        <TotalEarning />
        <div className="grid gap-4 md:col-span-2 md:grid-cols-4 xl:col-span-4 xl:row-span-2 xl:grid-cols-5">
          <ProjectOverview />
          <Todo />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-6 2xl:gap-6">
        <ActiveProject />
        <ActiveUser />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-9 2xl:gap-6">
        <Chat />
        <Products />
        <Schedules />
      </div>
    </div>
  );
}
