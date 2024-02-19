import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  EmployeesIcon,
  CoreHRIcon,
  FinanceIcon,
  TaskIcon,
  PerformanceIcon,
  BackIcon,
  NotifIcon,
} from "../Icons";

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const pathname = usePathname();

  const trigger = useRef(null);
  const sidebar = useRef(null);

  let storedSidebarExpanded = "true";
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true",
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
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
    const keyHandler = ({ key }) => {
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
      className={`dark:bg-boxdark z-9999 w-62.5 border-bodydark1 dark:border-shadow absolute left-0 top-0 flex h-screen flex-col overflow-y-hidden border-r bg-white lg:static lg:translate-x-0 dark:bg-black ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="drop-shadow-2 dark:bg-gray flex items-center justify-center bg-white px-6 py-1.5">
        <span className="dark:text-bodydark1 text-5xl font-bold text-black ">
          CRM
        </span>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <BackIcon className="absolute right-0 top-4 mr-2 fill-black dark:fill-white" />
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
                  className={`hover:bg-primary dark:text-bodydark1 group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out hover:bg-opacity-10 dark:hover:text-white ${
                    pathname === "/" &&
                    "bg-primary text-primary dark:text-primary bg-opacity-10"
                  }`}
                >
                  <EmployeesIcon
                    className={
                      pathname === "/"
                        ? "stroke-primary"
                        : "dark:stroke-bodydark1 stroke-black"
                    }
                  />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/casinos"
                  className={`hover:bg-primary dark:text-bodydark1 group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out hover:bg-opacity-10 dark:hover:text-white ${
                    pathname.includes("casinos") &&
                    "bg-primary text-primary dark:text-primary bg-opacity-10"
                  }`}
                >
                  <EmployeesIcon
                    className={
                      pathname === "/casinos"
                        ? "stroke-primary"
                        : "dark:stroke-bodydark1 stroke-black"
                    }
                  />
                  Casinos
                </Link>
              </li>
              <li>
                <Link
                  href="/crm-users"
                  className={`hover:bg-primary dark:text-bodydark1 group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out hover:bg-opacity-10 dark:hover:text-white ${
                    pathname.includes("crm-users") &&
                    "bg-primary text-primary dark:text-primary bg-opacity-10"
                  }`}
                >
                  <CoreHRIcon
                    className={
                      pathname === "/crm-users"
                        ? "stroke-primary"
                        : "dark:stroke-bodydark1 stroke-black"
                    }
                  />
                  CRM Users
                </Link>
              </li>
              <li>
                <Link
                  href="/clients"
                  className={`hover:bg-primary dark:text-bodydark1 group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out hover:bg-opacity-10 dark:hover:text-white ${
                    pathname.includes("clients") &&
                    "bg-primary text-primary dark:text-primary bg-opacity-10"
                  }`}
                >
                  <FinanceIcon
                    className={
                      pathname === "/clients"
                        ? "stroke-primary"
                        : "dark:stroke-bodydark1 stroke-black"
                    }
                  />
                  Clients
                </Link>
              </li>
              <li>
                <Link
                  href="/betting-monitor"
                  className={`hover:bg-primary dark:text-bodydark1 group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out hover:bg-opacity-10 dark:hover:text-white ${
                    pathname.includes("betting-monitor") &&
                    "bg-primary text-primary dark:text-primary bg-opacity-10"
                  }`}
                >
                  <TaskIcon
                    className={
                      pathname === "/betting-monitor"
                        ? "stroke-primary"
                        : "dark:stroke-bodydark1 stroke-black"
                    }
                  />
                  Betting Monitor Bonuses
                </Link>
              </li>
              <li>
                <Link
                  href="/bonuses"
                  className={`hover:bg-primary dark:text-bodydark1 group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out hover:bg-opacity-10 dark:hover:text-white ${
                    pathname.includes("bonuses") &&
                    "bg-primary text-primary dark:text-primary bg-opacity-10"
                  }`}
                >
                  <PerformanceIcon
                    className={
                      pathname === "/bonuses"
                        ? "stroke-primary"
                        : "dark:stroke-bodydark1 stroke-black"
                    }
                  />
                  Bonuses
                </Link>
              </li>
              <li>
                <Link
                  href="/integrations"
                  className={`hover:bg-primary dark:text-bodydark1 group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out hover:bg-opacity-10 dark:hover:text-white ${
                    pathname.includes("integrations") &&
                    "bg-primary text-primary dark:text-primary bg-opacity-10"
                  }`}
                >
                  <PerformanceIcon
                    className={
                      pathname === "/integrations"
                        ? "stroke-primary"
                        : "dark:stroke-bodydark1 stroke-black"
                    }
                  />
                  Integrations
                </Link>
              </li>
              <li>
                <Link
                  href="/game-settings"
                  className={`hover:bg-primary dark:text-bodydark1 group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out hover:bg-opacity-10 dark:hover:text-white ${
                    pathname.includes("game-settings") &&
                    "bg-primary text-primary dark:text-primary bg-opacity-10"
                  }`}
                >
                  <NotifIcon
                    className={
                      pathname === "/game-settings"
                        ? "stroke-primary"
                        : "dark:stroke-bodydark1 stroke-black"
                    }
                  />
                  Game Settings
                </Link>
              </li>
              <li>
                <div className="px-4 py-2">
                  <button className="bg-primary rounded-md px-4 py-1 text-white">
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
