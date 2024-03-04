"use client";

import { SessionProvider } from "next-auth/react";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function RoutesProvider({ children }) {
  return (
    <div>
      <SessionProvider>
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          <div className="relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden">
            <Header />
            <main>
              <div className="mx-4 py-4 md:py-6 2xl:py-10">{children}</div>
            </main>
          </div>
        </div>
      </SessionProvider>
    </div>
  );
}
