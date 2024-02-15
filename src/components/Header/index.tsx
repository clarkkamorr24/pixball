import DropdownUser from "./DropdownUser";
import { MessageIcon, NotifIcon, SettingsIcon } from "../Icons/";
import Logout from "./Logout";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky h-15 top-0 z-999 flex w-full bg-white drop-shadow-2 dark:bg-gray dark:drop-shadow-lg pr-4 ">
      <div className="flex flex-grow items-center justify-between">
        <div className="flex items-center">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 flex justify-center rounded-sm outline outline-1 outline-stroke dark:bg-dark p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-11.5 w-10.5 cursor-pointer top-3">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-300"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "delay-400 !w-full"
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!w-full delay-500"
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 bottom-2 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!h-0 !delay-[0]"
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute top-3 right-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && "!h-0 !delay-200"
                  }`}
                ></span>
              </span>
            </span>
          </button>
          <div className="hidden sm:block">
            <form method="">
              <div className="relative dark:bg-lightGray ml-2 p-2 rounded-md dark:shadow-0 shadow-2">
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
                  className="w-full bg-transparent pl-9 pr-4 font-medium focus:outline-none xl:w-125 placeholder-mediumGray"
                />
              </div>
            </form>
          </div>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-4">
          <ul className="flex items-center gap-2 2xsm:gap-6">
            <NotifIcon className="dark:stroke-white stroke-black cursor-pointer hover:stroke-primary dark:hover:stroke-primary" />
            <SettingsIcon className="dark:stroke-white stroke-black cursor-pointer hover:stroke-primary dark:hover:stroke-primary" />
            <MessageIcon className="dark:stroke-white stroke-black cursor-pointer hover:stroke-primary dark:hover:stroke-primary" />
            {/* seperator */}
            <Logout />
            <div className="flex p-1.5 border-r border-mediumGray">
              <span className="relative h-11.5 cursor-pointer top-3"></span>
            </div>
          </ul>
          <DropdownUser />
        </div>
      </div>
    </header>
  );
};

export default Header;
