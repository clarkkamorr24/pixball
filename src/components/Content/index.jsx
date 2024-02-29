"use client";

import React, { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Providers from "@/components/Provider";

export default function Content({ props }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div>
      <Providers>
        <div className="flex h-screen overflow-hidden">
          <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
            <main>
              <div className="mx-4 py-4 md:py-6 2xl:py-10">{props}</div>
            </main>
          </div>
        </div>
      </Providers>
    </div>
  );
}
