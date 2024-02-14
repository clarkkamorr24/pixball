import Dashboard from "@/components/Dashboard";
import { Metadata } from "next";
import RootLayout from "./layout";
export const metadata: Metadata = {
  title: "CRM Dashboard",
  description: "dashboard",
};

export default function Home() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
