import "../globals.css";
import Content from "@/components/Content";

export default function RoutesLayout({ children }) {
  return (
    <div>
      <div className="bg-white dark:bg-black dark:text-bodydark">
        <Content props={children} />
      </div>
    </div>
  );
}
