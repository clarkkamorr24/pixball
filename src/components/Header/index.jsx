import DropdownUser from "./DropdownUser";
import { MessageIcon, NotifIcon, SettingsIcon } from "../Icons";
import Logout from "./Logout";
import DarkModeSwitcher from "./DarkModeSwitcher";
import React from "react";
import Image from "next/image";
import { HamburgerIcon } from "../Logos";

export default function Header({ sidebarOpen, setSidebarOpen }) {
  return (
    <header className="sticky top-0 z-999 flex h-15 w-full bg-white pr-4 drop-shadow-2 dark:bg-gray dark:drop-shadow-lg ">
      <div className="flex flex-grow items-center justify-between">
        <div className="flex items-center">
          {/* <div className="mr-1 flex  h-15 w-10 bg-red">a</div> */}
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              setSidebarOpen(!sidebarOpen);
            }}
            className="z-99999 flex h-15 w-20 items-center justify-start rounded-sm lg:hidden"
          >
            <span className="">
              <Image src={HamburgerIcon} height={50} alt="logo" />
            </span>
          </button>
          <div className="hidden sm:block">
            <form method="">
              <div className="dark:shadow-0 relative ml-2 rounded-md p-2 shadow-2 dark:bg-lightGray">
                <button className="absolute left-0 top-1/2 -translate-y-1/2 p-2">
                  <svg
                    className="fill-stroke hover:fill-primary dark:fill-bodydark dark:hover:fill-primary"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                      fill="dark:white"
                    />
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                      fill="dark:white"
                    />
                  </svg>
                </button>
                <input
                  type="text"
                  placeholder="Type to search..."
                  className="w-full bg-transparent pl-9 pr-4 text-sm font-medium placeholder-mediumGray focus:outline-none xl:w-125"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="flex h-15 items-center gap-3 2xsm:gap-4">
          <ul className="flex items-center gap-2 2xsm:gap-6">
            <DarkModeSwitcher />
            <NotifIcon className="cursor-pointer stroke-black hover:stroke-primary dark:stroke-white dark:hover:stroke-primary" />
            <SettingsIcon className="cursor-pointer stroke-black hover:stroke-primary dark:stroke-white dark:hover:stroke-primary" />
            <MessageIcon className="cursor-pointer stroke-black hover:stroke-primary dark:stroke-white dark:hover:stroke-primary" />
            {/* seperator */}
            <Logout />
            <div className="hidden h-15 border-r border-mediumGray md:block lg:block xl:block">
              <span className="relative top-3 h-11.5 cursor-pointer"></span>
            </div>
          </ul>
          <DropdownUser />
        </div>
      </div>
    </header>
  );
}
