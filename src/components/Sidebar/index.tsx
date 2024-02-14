import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import SidebarLinkGroup from "./SidebarLinkGroup";
import Image from "next/image";
import useColorMode from "@/hooks/useColorMode";

import {
  DashboardIcon,
  EmployeesIcon,
  CoreHRIcon,
  FinanceIcon,
  TaskIcon,
  PerformanceIcon,
  ProjectsIcon,
  ReportsIcon,
  ManageIcon,
  AppsIcon,
  ChartIcon,
  BootstrapIcon,
  PluginsIcon,
  WidgetIcon,
  FormsIcon,
  TableIcon,
  PagesIcon,
  IndicatorIcon,
  PointerIcon,
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
      className={`absolute border-r dark:border-lightGray left-0 top-0 z-9999 flex h-screen w-62.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-center px-6 py-2.5 lg:py-3.5 bg-gray">
        <Link href="/">
          <Image
            width={100}
            height={100}
            src={"/images/logo/logo.svg"}
            alt="Logo"
          />
        </Link>

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
            <h3 className="mb-4 ml-4 text-sm font-semibold text-primary">
              YOUR COMPANY
            </h3>
            <ul className="mb-6 flex flex-col gap-1.5">
              <SidebarLinkGroup activeCondition={pathname === "/"}>
                {(handleClick, open) => {
                  return (
                    <React.Fragment>
                      <Link
                        href="/"
                        className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 hover:text-white dark:hover:bg-meta-4 ${
                          pathname.includes("/") &&
                          "bg-primary bg-opacity-10 dark:bg-meta-4 text-white"
                        }`}
                        onClick={(e) => {
                          router.push("/");
                          e.preventDefault();
                          sidebarExpanded
                            ? handleClick()
                            : setSidebarExpanded(true);
                        }}
                      >
                        <DashboardIcon
                          className={
                            pathname === "/"
                              ? "stroke-primary"
                              : "stroke-stroke"
                          }
                        />
                        Dashboard
                        <PointerIcon
                          className={`nav absolute right-4 top-1/2 -translate-y-1/2 ${
                            open && "rotate-180 stroke-primary"
                          }`}
                        />
                      </Link>
                      <div
                        className={`translate transform overflow-hidden ${
                          !open && "hidden"
                        }`}
                      >
                        <ul className="mt-4 mb-5.5 flex flex-col gap-2.5 pl-6">
                          <li className="cursor-pointer">
                            <div
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark1 hover:text-white dark:hover:bg-meta-4 duration-300 ease-in-out`}
                              onClick={() => {
                                if (typeof setColorMode === "function") {
                                  setColorMode("light");
                                }
                              }}
                            >
                              <IndicatorIcon />
                              Dashboard Light
                            </div>
                          </li>
                          <li className="cursor-pointer">
                            <div
                              className={`group relative flex items-center gap-2.5 rounded-md px-4 font-medium text-bodydark1 hover:text-white dark:hover:bg-meta-4 duration-300 ease-in-out`}
                              onClick={() => {
                                if (typeof setColorMode === "function") {
                                  setColorMode("dark");
                                }
                              }}
                            >
                              <IndicatorIcon />
                              Dashboard Dark
                            </div>
                          </li>
                        </ul>
                      </div>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              <li>
                <Link
                  href="/employees"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 hover:text-white dark:hover:bg-meta-4 ${
                    pathname.includes("employees") &&
                    "bg-primary bg-opacity-10 dark:bg-meta-4 text-white"
                  }`}
                >
                  <EmployeesIcon
                    className={
                      pathname === "/employees"
                        ? "stroke-primary"
                        : "stroke-stroke"
                    }
                  />
                  Employees
                </Link>
              </li>
              <li>
                <Link
                  href="/core-hr"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 hover:text-white dark:hover:bg-meta-4 ${
                    pathname.includes("core-hr") &&
                    "bg-primary bg-opacity-10 dark:bg-meta-4 text-white"
                  }`}
                >
                  <CoreHRIcon
                    className={
                      pathname === "/core-hr"
                        ? "stroke-primary"
                        : "stroke-stroke"
                    }
                  />
                  Core HR
                </Link>
              </li>
              <li>
                <Link
                  href="/finance"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 hover:text-white dark:hover:bg-meta-4 ${
                    pathname.includes("finance") &&
                    "bg-primary bg-opacity-10 dark:bg-meta-4 text-white"
                  }`}
                >
                  <FinanceIcon
                    className={
                      pathname === "/finance"
                        ? "stroke-primary"
                        : "stroke-stroke"
                    }
                  />
                  Finance
                </Link>
              </li>
              <li>
                <Link
                  href="/task"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 hover:text-white dark:hover:bg-meta-4 ${
                    pathname.includes("task") &&
                    "bg-primary bg-opacity-10 dark:bg-meta-4 text-white"
                  }`}
                >
                  <TaskIcon
                    className={
                      pathname === "/task" ? "stroke-primary" : "stroke-stroke"
                    }
                  />
                  Task
                </Link>
              </li>
              <li>
                <Link
                  href="/performance"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 hover:text-white dark:hover:bg-meta-4 ${
                    pathname.includes("performance") &&
                    "bg-primary bg-opacity-10 dark:bg-meta-4 text-white"
                  }`}
                >
                  <PerformanceIcon
                    className={
                      pathname === "/performance"
                        ? "stroke-primary"
                        : "stroke-stroke"
                    }
                  />
                  Performance
                </Link>
              </li>
              <li>
                <Link
                  href="/projects"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 hover:text-white dark:hover:bg-meta-4 ${
                    pathname.includes("projects") &&
                    "bg-primary bg-opacity-10 dark:bg-meta-4 text-white"
                  }`}
                >
                  <ProjectsIcon
                    className={
                      pathname === "/projects"
                        ? "stroke-primary"
                        : "stroke-stroke"
                    }
                  />
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  href="/reports"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 hover:text-white dark:hover:bg-meta-4 ${
                    pathname.includes("reports") &&
                    "bg-primary bg-opacity-10 dark:bg-meta-4 text-white"
                  }`}
                >
                  <ReportsIcon
                    className={
                      pathname === "/reports"
                        ? "stroke-primary"
                        : "stroke-stroke"
                    }
                  />
                  Reports
                </Link>
              </li>
              <li>
                <Link
                  href="/manage"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 hover:text-white dark:hover:bg-meta-4 ${
                    pathname.includes("manage") &&
                    "bg-primary bg-opacity-10 dark:bg-meta-4 text-white"
                  }`}
                >
                  <ManageIcon
                    className={
                      pathname === "/manage"
                        ? "stroke-primary"
                        : "stroke-stroke"
                    }
                  />
                  Manage Clients
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 ml-4 text-sm font-semibold text-primary">
              OUR FEATURES
            </h3>

            <ul className="mb-6 flex flex-col gap-1.5">
              <li>
                <Link
                  href="/apps"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 hover:text-white dark:hover:bg-meta-4 ${
                    pathname.includes("apps") &&
                    "bg-primary bg-opacity-10 dark:bg-meta-4 text-white"
                  }`}
                >
                  <AppsIcon
                    className={
                      pathname === "/apps" ? "stroke-primary" : "stroke-stroke"
                    }
                  />
                  Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/chart"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 hover:text-white dark:hover:bg-meta-4 ${
                    pathname.includes("chart") &&
                    "bg-primary bg-opacity-10 dark:bg-meta-4 text-white"
                  }`}
                >
                  <ChartIcon
                    className={
                      pathname === "/chart" ? "stroke-primary" : "stroke-stroke"
                    }
                  />
                  Charts
                </Link>
              </li>
              <li>
                <Link
                  href="/bootstrap"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 hover:text-white dark:hover:bg-meta-4 ${
                    pathname.includes("bootstrap") &&
                    "bg-primary bg-opacity-10 dark:bg-meta-4 text-white"
                  }`}
                >
                  <BootstrapIcon
                    className={
                      pathname === "/bootstrap"
                        ? "stroke-primary"
                        : "stroke-stroke"
                    }
                  />
                  Bootstrap
                </Link>
              </li>
              <li>
                <Link
                  href="/plugin"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 hover:text-white dark:hover:bg-meta-4 ${
                    pathname.includes("plugin") &&
                    "bg-primary bg-opacity-10 dark:bg-meta-4 text-white"
                  }`}
                >
                  <PluginsIcon
                    className={
                      pathname === "/plugin"
                        ? "stroke-primary"
                        : "stroke-stroke"
                    }
                  />
                  Plugins
                </Link>
              </li>
              <li>
                <Link
                  href="/widget"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 hover:text-white dark:hover:bg-meta-4 ${
                    pathname.includes("widget") &&
                    "bg-primary bg-opacity-10 dark:bg-meta-4 text-white"
                  }`}
                >
                  <WidgetIcon
                    className={
                      pathname === "/widget"
                        ? "stroke-primary"
                        : "stroke-stroke"
                    }
                  />
                  Widget
                </Link>
              </li>
              <li>
                <Link
                  href="/forms"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 hover:text-white dark:hover:bg-meta-4 ${
                    pathname.includes("forms") &&
                    "bg-primary bg-opacity-10 dark:bg-meta-4 text-white"
                  }`}
                >
                  <FormsIcon
                    className={
                      pathname === "/forms" ? "stroke-primary" : "stroke-stroke"
                    }
                  />
                  Forms
                </Link>
              </li>
              <li>
                <Link
                  href="/table"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 hover:text-white dark:hover:bg-meta-4 ${
                    pathname.includes("table") &&
                    "bg-primary bg-opacity-10 dark:bg-meta-4 text-white"
                  }`}
                >
                  <TableIcon
                    className={
                      pathname === "/table" ? "stroke-primary" : "stroke-stroke"
                    }
                  />
                  Table
                </Link>
              </li>
              <li>
                <Link
                  href="/pages"
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 hover:text-white dark:hover:bg-meta-4 ${
                    pathname.includes("pages") &&
                    "bg-primary bg-opacity-10 dark:bg-meta-4 text-white"
                  }`}
                >
                  <PagesIcon
                    className={
                      pathname === "/pages" ? "stroke-primary" : "stroke-stroke"
                    }
                  />
                  Pages
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
