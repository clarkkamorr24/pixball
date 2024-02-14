"use client";
import { Poppins } from "next/font/google";
import { useState, useEffect } from "react";
import "../globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400"],
});

export default function RoutesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <html lang="en">
      <body className={poppins.className} suppressHydrationWarning={true}>
        <div className="dark:bg-black dark:text-bodydark bg-white">
          <div className="flex h-screen overflow-hidden">
            <Sidebar
              sidebarOpen={sidebarOpen}
              setSidebarOpen={setSidebarOpen}
            />
            <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
              <Header
                sidebarOpen={sidebarOpen}
                setSidebarOpen={setSidebarOpen}
              />
              <main>
                <div className="mx-4 py-4 md:py-6 2xl:py-10">{children}</div>
              </main>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
