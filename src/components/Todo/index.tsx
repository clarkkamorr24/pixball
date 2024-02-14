"use client";
import React, { useState } from "react";
import { CheckIcon, DeleteIcon, EditIcon, WarningIcon } from "../Icons";

const Todo: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);
  return (
    <div className="rounded-md bg-white py-5 outline outline-1 outline-stroke dark:outline-strokedark dark:bg-black md:col-span-2 xl:col-span-2">
      <div className="flex justify-between mb-5 px-6">
        <p className="font-semibold">My To Do Items</p>
        <div className="flex gap-2">
          <p className="cursor-pointer">View All</p>
          <p className="cursor-pointer">+ Add Todo</p>
        </div>
      </div>
      <div>
        <ul className="flex flex-col gap-6">
          <li className="border-b pb-4">
            <div className="px-6">
              <p className="flex gap-2 text-warning items-center">
                <WarningIcon />
                Latest to do's
              </p>
              <div className="flex justify-between items-center">
                <label className="flex cursor-pointer select-none items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="checkboxOne"
                      className="sr-only"
                      onChange={() => {
                        setIsChecked(!isChecked);
                      }}
                    />
                    <div
                      className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                        isChecked &&
                        "border-bodydark1 bg-bodydark1 dark:bg-white"
                      }`}
                    >
                      <span
                        className={`opacity-0 ${isChecked && "!opacity-100"}`}
                      >
                        <CheckIcon className="stroke-black" />
                      </span>
                    </div>
                  </div>
                  Complete this projects Monday
                </label>
                <div className="flex gap-2">
                  <span className="p-2 bg-red bg-opacity-10 rounded-md cursor-pointer">
                    <DeleteIcon />
                  </span>
                  <span className="p-2 bg-primary bg-opacity-10 rounded-md cursor-pointer">
                    <EditIcon />
                  </span>
                </div>
              </div>
              <p>2023-12-26 07:15:00</p>
            </div>
          </li>
          <li className="border-b pb-4">
            <div className="px-6">
              <p className="flex gap-2 text-success items-center">
                <CheckIcon className="stroke-success stroke-2" />
                Latest finished to do's
              </p>
              <div className="flex justify-between items-center">
                <label className="flex cursor-pointer select-none items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="checkboxTwo"
                      className="sr-only"
                      onChange={() => {
                        setIsChecked(!isChecked);
                      }}
                    />
                    <div
                      className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                        isChecked &&
                        "border-bodydark1 bg-bodydark1 dark:bg-white"
                      }`}
                    >
                      <span
                        className={`opacity-0 ${isChecked && "!opacity-100"}`}
                      >
                        <CheckIcon className="stroke-black" />
                      </span>
                    </div>
                  </div>
                  Complete this projects Monday
                </label>
                <div className="flex gap-2">
                  <span className="p-2 bg-red bg-opacity-10 rounded-md cursor-pointer">
                    <DeleteIcon />
                  </span>
                  <span className="p-2 bg-primary bg-opacity-10 rounded-md cursor-pointer">
                    <EditIcon />
                  </span>
                </div>
              </div>
              <p>2023-12-26 07:15:00</p>
            </div>
          </li>
          <li className="border-b pb-4">
            <div className="px-6">
              <div className="flex justify-between items-center">
                <label className="flex cursor-pointer select-none items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="checkboxThree"
                      className="sr-only"
                      onChange={() => {
                        setIsChecked(!isChecked);
                      }}
                    />
                    <div
                      className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                        isChecked &&
                        "border-bodydark1 bg-bodydark1 dark:bg-white"
                      }`}
                    >
                      <span
                        className={`opacity-0 ${isChecked && "!opacity-100"}`}
                      >
                        <CheckIcon className="stroke-black" />
                      </span>
                    </div>
                  </div>
                  Complete this projects Monday
                </label>
                <div className="flex gap-2">
                  <span className="p-2 bg-red bg-opacity-10 rounded-md cursor-pointer">
                    <DeleteIcon />
                  </span>
                  <span className="p-2 bg-primary bg-opacity-10 rounded-md cursor-pointer">
                    <EditIcon />
                  </span>
                </div>
              </div>
              <p>2023-12-26 07:15:00</p>
            </div>
          </li>
          <li className="border-b pb-4">
            <div className="px-6">
              <div className="flex justify-between items-center">
                <label className="flex cursor-pointer select-none items-center">
                  <div className="relative">
                    <input
                      type="checkbox"
                      id="checkbox"
                      className="sr-only"
                      onChange={() => {
                        setIsChecked(!isChecked);
                      }}
                    />
                    <div
                      className={`mr-4 flex h-5 w-5 items-center justify-center rounded border ${
                        isChecked &&
                        "border-bodydark1 bg-bodydark1 dark:bg-white"
                      }`}
                    >
                      <span
                        className={`opacity-0 ${isChecked && "!opacity-100"}`}
                      >
                        <CheckIcon className="stroke-black" />
                      </span>
                    </div>
                  </div>
                  Complete this projects Monday
                </label>
                <div className="flex gap-2">
                  <span className="p-2 bg-red bg-opacity-10 rounded-md cursor-pointer">
                    <DeleteIcon />
                  </span>
                  <span className="p-2 bg-primary bg-opacity-10 rounded-md cursor-pointer">
                    <EditIcon />
                  </span>
                </div>
              </div>
              <p>2023-12-26 07:15:00</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Todo;
