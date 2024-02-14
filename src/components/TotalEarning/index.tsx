"use client";
import { ApexOptions } from "apexcharts";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    // events: {
    //   beforeMount: (chart) => {
    //     chart.windowResizeHandler();
    //   },
    // },
    height: 335,
    type: "area",
    dropShadow: {
      enabled: true,
      color: "#623CEA14",
      top: 10,
      blur: 4,
      left: 0,
      opacity: 0.1,
    },

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
    width: [2, 2],
    curve: "straight",
  },
  // labels: {
  //   show: false,
  //   position: "top",
  // },
  grid: {
    xaxis: {
      lines: {
        show: true,
      },
    },
    yaxis: {
      lines: {
        show: true,
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  markers: {
    size: 4,
    colors: "#fff",
    strokeColors: ["#3056D3", "#80CAEE"],
    strokeWidth: 3,
    strokeOpacity: 0.9,
    strokeDashArray: 0,
    fillOpacity: 1,
    discrete: [],
    hover: {
      size: undefined,
      sizeOffset: 5,
    },
  },

  xaxis: {
    type: "category",
    categories: ["May", "Jun", "July", "Aug", "Sep", "Oct"],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
    max: 6,
    labels: {
      show: true,
      rotateAlways: false,
      style: {
        colors: "#888888",
        fontSize: "11px",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 400,
        cssClass: "apexcharts-xaxis-label",
      },
    },
  },

  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 800,
    labels: {
      show: true,
      style: {
        colors: "#888888",
        fontSize: "11px",
        fontFamily: "Poppins, sans-serif",
        fontWeight: 400,
        cssClass: "apexcharts-xaxis-label",
      },
    },
  },
};

interface ChartOneState {
  series: {
    name: string;
    data: number[];
  }[];
}

const TotalEarning: React.FC = () => {
  const [state, setState] = useState<ChartOneState>({
    series: [
      {
        name: "Product One",
        data: [645, 240, 700, 200, 160, 490, 150, 500, 430, 22, 30, 645],
      },
    ],
  });

  const handleReset = () => {
    setState((prevState) => ({
      ...prevState,
    }));
  };

  handleReset;

  return (
    <div className="rounded-md bg-white outline outline-1 outline-stroke dark:outline-strokedark dark:bg-black px-5 pt-7.5 pb-0 sm:px-7.5 col-span-1 md:col-span-2 xl:row-span-3 xl:col-span-2">
      <div className="flex flex-col gap-3">
        <p className="font-semibold text-black dark:text-white">
          Total Earning
        </p>
        <p className="flex justify-center font-semibold text-black text-3xl dark:text-white">
          $6,743.00
        </p>
        <ul className="flex justify-center gap-5">
          <li className="cursor-pointer text-black dark:text-white">Day</li>
          <li className="cursor-pointer text-black dark:text-white">Week</li>
          <li className="cursor-pointer text-black dark:text-white">Month</li>
          <li className="cursor-pointer text-black dark:text-white">Year</li>
        </ul>
      </div>

      <div>
        <div className="-ml-5 h-[100%] xl:h-[520px]">
          <ReactApexChart
            options={options}
            series={state.series}
            type="area"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>
  );
};

export default TotalEarning;
