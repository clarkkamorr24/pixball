import React, { useState } from "react";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options = {
  chart: {
    type: "donut",
  },
  colors: ["#0D99FF", "#FF9F00"],
  labels: ["Active Clients", "Vip Clients"],
  legend: {
    show: false,
  },

  plotOptions: {
    pie: {
      donut: {
        size: "75%",
        background: "transparent",
      },
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 2600,
      options: {
        chart: {
          width: 200,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 200,
        },
      },
    },
  ],
};
const Client = () => {
  const [state, setState] = useState({
    series: [850, 354],
  });
  return (
    <div className="col-span-2 inline-flex flex-col gap-2 rounded-md border border-stroke p-2">
      <span>Clients</span>
      <div className="text-xl">1,234</div>
      <div className="-mb-8 flex justify-center">
        <ReactApexChart
          options={options}
          series={state.series}
          type="donut"
          width="100%"
          height="90%"
        />
      </div>
      <div className="mt-2 flex flex-col gap-2">
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <span className="h-3 w-3 bg-primary"></span>
            <span>Active Clients</span>
          </div>
          <div className="ga-2 flex">
            <span>850</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="flex items-center gap-4">
            <span className="h-3 w-3 bg-warning"></span>
            <span>VIP Clients</span>
          </div>
          <div className="ga-2 flex">
            <span>384</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Client;
