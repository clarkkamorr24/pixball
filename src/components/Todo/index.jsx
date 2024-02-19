"use client";
import React, { useState } from "react";
import { CheckIcon, DeleteIcon, EditIcon, WarningIcon } from "../Icons";

const Todo = () => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="dark:outline-strokedark outline-stroke rounded-md bg-white py-5 outline outline-1 md:col-span-2 xl:col-span-2 dark:bg-black">
      <div className="mb-5 flex justify-between px-6">
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
              <p className="text-warning flex items-center gap-2">
                <WarningIcon />
                Latest to do`s
              </p>
              <div className="flex items-center justify-between">
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
                  <span className="bg-red cursor-pointer rounded-md bg-opacity-10 p-2">
                    <DeleteIcon />
                  </span>
                  <span className="bg-primary cursor-pointer rounded-md bg-opacity-10 p-2">
                    <EditIcon />
                  </span>
                </div>
              </div>
              <p>2023-12-26 07:15:00</p>
            </div>
          </li>
          <li className="border-b pb-4">
            <div className="px-6">
              <p className="text-success flex items-center gap-2">
                <CheckIcon className="stroke-success stroke-2" />
                Latest finished to do`s
              </p>
              <div className="flex items-center justify-between">
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
                  <span className="bg-red cursor-pointer rounded-md bg-opacity-10 p-2">
                    <DeleteIcon />
                  </span>
                  <span className="bg-primary cursor-pointer rounded-md bg-opacity-10 p-2">
                    <EditIcon />
                  </span>
                </div>
              </div>
              <p>2023-12-26 07:15:00</p>
            </div>
          </li>
          <li className="border-b pb-4">
            <div className="px-6">
              <div className="flex items-center justify-between">
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
                  <span className="bg-red cursor-pointer rounded-md bg-opacity-10 p-2">
                    <DeleteIcon />
                  </span>
                  <span className="bg-primary cursor-pointer rounded-md bg-opacity-10 p-2">
                    <EditIcon />
                  </span>
                </div>
              </div>
              <p>2023-12-26 07:15:00</p>
            </div>
          </li>
          <li className="border-b pb-4">
            <div className="px-6">
              <div className="flex items-center justify-between">
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
                  <span className="bg-red cursor-pointer rounded-md bg-opacity-10 p-2">
                    <DeleteIcon />
                  </span>
                  <span className="bg-primary cursor-pointer rounded-md bg-opacity-10 p-2">
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
