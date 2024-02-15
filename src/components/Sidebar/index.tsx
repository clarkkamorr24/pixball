import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import useColorMode from "@/hooks/useColorMode";

import {
  EmployeesIcon,
  CoreHRIcon,
  FinanceIcon,
  TaskIcon,
  PerformanceIcon,
  ProjectsIcon,
} from "../Icons/";

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const [colorMode, setColorMode] = useColorMode();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ key }: KeyboardEvent) => {
      if (!sidebarOpen || key !== "Escape") return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector("body")?.classList.add("sidebar-expanded");
    } else {
      document.querySelector("body")?.classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`absolute border-r border-bodydark1 dark:border-shadow left-0 top-0 z-9999 flex h-screen w-62.5 flex-col overflow-y-hidden bg-white dark:bg-black dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-center px-6 py-1.5 bg-white dark:bg-gray drop-shadow-2">
        <span className="text-5xl font-bold text-black dark:text-bodydark1 ">
          CRM
        </span>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <svg
            className="fill-current absolute right-0 mr-2 top-4"
            width="20"
            height="18"
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-4 py-4">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <Link
                  href="/"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black dark:text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 dark:hover:text-white ${
                    pathname === "/" &&
                    "bg-primary bg-opacity-10 text-primary dark:text-primary"
                  }`}
                >
                  <EmployeesIcon
                    className={
                      pathname === "/"
                        ? "stroke-primary"
                        : "stroke-black dark:stroke-bodydark1"
                    }
                  />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/casinos"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black dark:text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 dark:hover:text-white ${
                    pathname.includes("casinos") &&
                    "bg-primary bg-opacity-10 text-primary dark:text-primary"
                  }`}
                >
                  <EmployeesIcon
                    className={
                      pathname === "/casinos"
                        ? "stroke-primary"
                        : "stroke-black dark:stroke-bodydark1"
                    }
                  />
                  Casinos
                </Link>
              </li>
              <li>
                <Link
                  href="/crm-users"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black dark:text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 dark:hover:text-white ${
                    pathname.includes("crm-users") &&
                    "bg-primary bg-opacity-10 text-primary dark:text-primary"
                  }`}
                >
                  <CoreHRIcon
                    className={
                      pathname === "/crm-users"
                        ? "stroke-primary"
                        : "stroke-black dark:stroke-bodydark1"
                    }
                  />
                  CRM Users
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black dark:text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 dark:hover:text-white ${
                    pathname.includes("clients") &&
                    "bg-primary bg-opacity-10 text-primary dark:text-primary"
                  }`}
                >
                  <FinanceIcon
                    className={
                      pathname === "/clients"
                        ? "stroke-primary"
                        : "stroke-black dark:stroke-bodydark1"
                    }
                  />
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/betting-monitor"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black dark:text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 dark:hover:text-white ${
                    pathname.includes("betting-monitor") &&
                    "bg-primary bg-opacity-10 text-primary dark:text-primary"
                  }`}
                >
                  <TaskIcon
                    className={
                      pathname === "/betting-monitor"
                        ? "stroke-primary"
                        : "stroke-black dark:stroke-bodydark1"
                    }
                  />
                  Betting Monitor Bonuses
                </Link>
              </li>
              <li>
                <Link
                  href="/bonuses"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black dark:text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 dark:hover:text-white ${
                    pathname.includes("bonuses") &&
                    "bg-primary bg-opacity-10 text-primary dark:text-primary"
                  }`}
                >
                  <PerformanceIcon
                    className={
                      pathname === "/bonuses"
                        ? "stroke-primary"
                        : "stroke-black dark:stroke-bodydark1"
                    }
                  />
                  Bonuses
                </Link>
              </li>
              <li>
                <Link
                  href="/integrations"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black dark:text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 dark:hover:text-white ${
                    pathname.includes("integrations") &&
                    "bg-primary bg-opacity-10 text-primary dark:text-primary"
                  }`}
                >
                  <PerformanceIcon
                    className={
                      pathname === "/integrations"
                        ? "stroke-primary"
                        : "stroke-black dark:stroke-bodydark1"
                    }
                  />
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="/game-settings"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-black dark:text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 dark:hover:text-white ${
                    pathname.includes("game-settings") &&
                    "bg-primary bg-opacity-10 text-primary dark:text-primary"
                  }`}
                >
                  <ProjectsIcon
                    className={
                      pathname === "/game-settings"
                        ? "stroke-primary"
                        : "stroke-black dark:stroke-bodydark1"
                    }
                  />
                  Game Settings
                </Link>
              </li>
              <li>
                <div className="py-2 px-4">
                  <button className="px-4 py-1 rounded-md bg-primary text-white">
                    Help Desk
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
