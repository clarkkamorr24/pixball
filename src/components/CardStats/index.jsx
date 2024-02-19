"use client";
import React from "react";

import ProgressCard from "./CartContent/ProgressCard";
import PieChartCard from "./CartContent/PieChartCard";
import BarChartCard from "./CartContent/BarChartCard";

const CardStats = ({ title, total, children, chart }) => {
  const renderSwitch = (param) => {
    switch (param) {
      case "Pie":
        return <PieChartCard />;
      case "Progress":
        return <ProgressCard title={title} total={total} props={children} />;
      case "Bar":
        return <ProgressCard title={title} total={total} props={children} />;
      // return <BarChartCard title={title} total={total} children={children} />;
      default:
        return null;
    }
  };

  return (
    <div className="dark:outline-strokedark outline-stroke rounded-md bg-white outline outline-1 dark:bg-black">
      {renderSwitch(chart)}
    </div>
  );
};

export default CardStats;
