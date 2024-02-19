import "../globals.css";
import Content from "@/components/Content";

export default function RoutesLayout({ children }) {
  return (
    <div>
      <div className="dark:text-bodydark bg-white dark:bg-black">
        <Content props={children} />
      </div>
    </div>
  );
}
