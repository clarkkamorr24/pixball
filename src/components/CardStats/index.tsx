"use client";
import React, { useState, ReactNode } from "react";

import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
import ProgressCard from "./CartContent/ProgressCard";
import PieChartCard from "./CartContent/PieChartCard";
import BarChartCard from "./CartContent/BarChartCard";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

type CardDataStatsProps = {
  title: string;
  total: string;
  children: ReactNode;
  chart: "Bar" | "Pie" | "Progress";
};

const options: ApexOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    height: 335,
    type: "area",

    toolbar: {
      show: false,
    },
  },
  responsive: [
    {
      breakpoint: 1024,
      options: {
        chart: {
          height: 300,
        },
      },
    },
    {
      breakpoint: 1366,
      options: {
        chart: {
          height: 350,
        },
      },
    },
  ],
  stroke: {
    width: [1, 2],
    curve: "straight",
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: false,
      },
    },
    yaxis: {
      lines: {
        show: false,
      },
    },
  },
  xaxis: {
    labels: { show: false },
    type: "category",
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: { show: false },
    title: {
      style: {
        fontSize: "0px",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const CardStats: React.FC<CardDataStatsProps> = ({
  title,
  total,
  children,
  chart,
}) => {
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: "Product One",
        data: [645, 240, 700, 200, 160, 490, 150, 500, 430, 22, 30, 645],
      },

      // {
      //   name: "Product Two",
      //   data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 651],
      // },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };

  handleReset;

  const renderSwitch = (param: string) => {
    switch (param) {
      case "Pie":
        return <PieChartCard />;
      case "Progress":
        return <ProgressCard title={title} total={total} children={children} />;
      case "Bar":
        return <ProgressCard title={title} total={total} children={children} />;
      // return <BarChartCard title={title} total={total} children={children} />;
      default:
        return null;
    }
  };

  return (
    <div className="rounded-md bg-white outline outline-1 outline-stroke dark:outline-strokedark dark:bg-black">
      {renderSwitch(chart)}
    </div>
  );
};

export default CardStats;
