"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { BackIcon, ChevronDownIcon } from "../Icons";
import { sideNavItem } from "@/data/sideNav";
import SidebarLinkGroup from "./SidebarLinkGroup";
import { cn } from "@/lib/utils";

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
      className={cn(
        "dark:bg-boxdark absolute left-0 top-0 z-9999 flex h-screen w-62.5 flex-col overflow-y-hidden border-r border-bodydark1 bg-white dark:border-shadow dark:bg-black lg:static lg:translate-x-0",
        sidebarOpen ? "translate-x-0" : "-translate-x-full",
      )}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="flex items-center justify-center bg-white px-6 py-1.5 drop-shadow-2 dark:bg-gray">
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
          <BackIcon className="absolute right-0 top-4 mr-2 fill-black dark:fill-white" />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        <nav className="mt-4 py-4">
          <div>
            <ul className="mb-6 flex flex-col gap-1.5">
              {sideNavItem.map((item) => {
                return (
                  <React.Fragment key={item.pathname}>
                    {item?.subMenus ? (
                      <SidebarLinkGroup
                        activeCondition={pathname === `${item.href}`}
                      >
                        {(handleClick, open) => {
                          return (
                            <React.Fragment>
                              <Link
                                href="#"
                                className={cn(
                                  "group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 hover:text-primary dark:text-bodydark1 dark:hover:text-white",
                                  pathname === `${item.href}` &&
                                    "bg-primary bg-opacity-10 text-primary dark:text-primary",
                                )}
                                onClick={(e) => {
                                  e.preventDefault();
                                  sidebarExpanded
                                    ? handleClick()
                                    : setSidebarExpanded(true);
                                }}
                              >
                                <div className="w-5"> {item.icon.icon}</div>
                                <p className="ml-1 text-sm">{item.label}</p>
                                <ChevronDownIcon
                                  className={cn(
                                    "absolute right-4 top-1/2 -translate-y-1/2 fill-current",
                                    open && "rotate-180",
                                  )}
                                />
                              </Link>
                              <div
                                className={cn(
                                  "translate transform overflow-hidden",
                                  !open && "hidden",
                                )}
                              >
                                <ul className="mb-5.5 mt-4 flex w-full flex-1 flex-col gap-2.5">
                                  {item.subMenus.map((submenu) => (
                                    <li key={submenu.pathname}>
                                      <Link
                                        href={`${item.href === "/crm-users" ? submenu.href : item.href}`}
                                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 dark:text-bodydark1 
                                        dark:hover:text-white`}
                                      >
                                        <p className="ml-4 text-xs">
                                          {submenu.label}
                                        </p>
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </React.Fragment>
                          );
                        }}
                      </SidebarLinkGroup>
                    ) : (
                      <li key={item.pathname}>
                        <Link
                          href={`${item.href}`}
                          className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-black duration-300 ease-in-out hover:bg-primary hover:bg-opacity-10 dark:text-bodydark1 dark:hover:text-white ${
                            pathname === `${item.href}` &&
                            "bg-primary bg-opacity-10 text-primary dark:text-primary"
                          }`}
                        >
                          <div className="w-5"> {item.icon.icon}</div>
                          <p className="ml-1 text-sm">{item.label}</p>
                        </Link>
                      </li>
                    )}
                  </React.Fragment>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;
