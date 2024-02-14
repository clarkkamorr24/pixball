import Dashboard from "@/components/Dashboard";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "CRM Dashboard",
  description: "dashboard",
};

export default function DashboardPage() {
  return (
    <div>
      <Dashboard />
    </div>
  );
}
