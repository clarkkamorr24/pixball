import "../globals.css";
import RoutesProvider from "@/components/RoutesProvider";

export default function RoutesLayout({ children }) {
  return (
    <div>
      <div className="bg-white dark:bg-black dark:text-bodydark">
        <RoutesProvider>{children}</RoutesProvider>
      </div>
    </div>
  );
}
