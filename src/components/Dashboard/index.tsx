import { Metadata } from "next";
import CardStats from "@/components/CardStats";
import { DepositIcon, DollarIcon } from "@/components/Icons";
import TotalEarning from "@/components/TotalEarning";
import ProjectOverview from "@/components/ProjectOverview";
import Todo from "@/components/Todo";
import ActiveProject from "@/components/ActiveProject";
import ActiveUser from "@/components/ActiveUser";
import Chat from "@/components/Chat";
import Products from "@/components/Products";
import Schedules from "@/components/Schedules";

export const metadata: Metadata = {
  title: "CRM Dashboard",
  description: "dashboard",
};

export default function Dashboard() {
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-2 2xl:gap-6">
        <CardStats title="Total Deposit" total="$1200.00" chart="Bar">
          <div className="px-4 py-3 bg-primary bg-opacity-10 rounded-md">
            <DollarIcon className="stroke-primary fill-primary" />
          </div>
        </CardStats>
        <CardStats title="All Projects" total="$45,2K" chart="Pie">
          <div className="px-4 py-3 bg-primary bg-opacity-10 rounded-md">
            <DollarIcon className="stroke-primary fill-primary" />
          </div>
        </CardStats>
        <CardStats title="Total Expenses" total="$1200.00" chart="Bar">
          <div className="px-4 py-3 bg-red bg-opacity-10 rounded-md">
            <DollarIcon className="stroke-red fill-red" />
          </div>
        </CardStats>
        <CardStats title="Total Deposit" total="20" chart="Progress">
          <div className="px-3 py-3 bg-primary bg-opacity-10 rounded-md">
            <DepositIcon className="stroke-primary fill-primary" />
          </div>
        </CardStats>
        <TotalEarning />
        <div className="grid md:grid-cols-4 xl:grid-cols-5 md:col-span-2 xl:col-span-4 xl:row-span-2 gap-4">
          <ProjectOverview />
          <Todo />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-2 2xl:gap-6">
        <ActiveProject />
        <ActiveUser />
      </div>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-9 gap-2 2xl:gap-6">
        <Chat />
        <Products />
        <Schedules />
      </div>
    </div>
  );
}
