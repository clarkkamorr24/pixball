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

export const metadata = {
  title: "CRM Dashboard",
  description: "dashboard",
};

export default function Dashboard() {
  return (
    <div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-6 2xl:gap-6">
        <CardStats title="Total Deposit" total="$1200.00" chart="Bar">
          <div className="bg-primary rounded-md bg-opacity-10 px-4 py-3">
            <DollarIcon className="fill-primary stroke-primary" />
          </div>
        </CardStats>
        <CardStats title="All Projects" total="$45,2K" chart="Pie">
          <div className="bg-primary rounded-md bg-opacity-10 px-4 py-3">
            <DollarIcon className="fill-primary stroke-primary" />
          </div>
        </CardStats>
        <CardStats title="Total Expenses" total="$1200.00" chart="Bar">
          <div className="bg-red rounded-md bg-opacity-10 px-4 py-3">
            <DollarIcon className="fill-red stroke-red" />
          </div>
        </CardStats>
        <CardStats title="Total Deposit" total="20" chart="Progress">
          <div className="bg-primary rounded-md bg-opacity-10 px-3 py-3">
            <DepositIcon className="fill-primary stroke-primary" />
          </div>
        </CardStats>
        <TotalEarning />
        <div className="grid gap-4 md:col-span-2 md:grid-cols-4 xl:col-span-4 xl:row-span-2 xl:grid-cols-5">
          <ProjectOverview />
          <Todo />
        </div>
      </div>
      <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-6 2xl:gap-6">
        <ActiveProject />
        <ActiveUser />
      </div>
      <div className="mt-6 grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-9 2xl:gap-6">
        <Chat />
        <Products />
        <Schedules />
      </div>
    </div>
  );
}
