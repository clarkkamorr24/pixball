"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  legend: {
    show: false,
    position: "top",
    horizontalAlign: "left",
  },
  colors: ["#3C50E0", "#80CAEE"],
  chart: {
    fontFamily: "Satoshi, sans-serif",
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
    size: 5,
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
    categories: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "July",
      "August",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ],
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    title: {
      style: {
        fontSize: "0px",
      },
    },
    min: 0,
    max: 100,
  },
};

const ProjectOverview = () => {
  const [state, setState] = useState({
    series: [
      {
        name: "Product One",
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
      },

      {
        name: "Product Two",
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
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
    <div className="dark:outline-strokedark flex flex-col rounded-md bg-white pt-7.5 outline outline-1 outline-stroke dark:bg-black md:col-span-2 xl:col-span-3">
      <div className="flex items-center justify-between px-7.5">
        <p className="font-semibold text-black dark:text-white">
          Project Overview
        </p>
      </div>

      <div className="-ml-5 h-[400px] px-5 pb-3">
        <ReactApexChart
          options={options}
          series={state.series}
          type="bar"
          width="100%"
          height="100%"
        />
      </div>
      <div className="flex flex-grow">
        <div className="flex flex-1 border-t border-t-stroke text-sm md:text-sm xl:text-base">
          <div className="flex h-full w-1/4 flex-col justify-center  border-r p-2 text-center text-black dark:text-stroke">
            <p className="dark:text-white">12,721</p>
            <p>Number of Projects</p>
          </div>
          <div className="flex w-1/4 flex-col justify-center border-r border-r-stroke p-2 text-center text-black dark:text-stroke">
            <p className="dark:text-white">721</p>
            <p>Active Projects</p>
          </div>
          <div className="flex w-1/4 flex-col justify-center border-r border-r-stroke p-2 text-center text-black dark:text-stroke">
            <p className="dark:text-white">$250,5231</p>
            <p>Revenue</p>
          </div>
          <div className="flex w-1/4 flex-col justify-center p-2 text-center text-black dark:text-stroke">
            <p className="dark:text-white">12,275h</p>
            <p>Working Hours</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectOverview;
