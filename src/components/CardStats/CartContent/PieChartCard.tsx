import React, { useState } from "react";
import { ApexOptions } from "apexcharts";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const options: ApexOptions = {
  chart: {
    type: "donut",
  },
  colors: ["#3AC977", "#0D99FF", "#202020"],
  labels: ["Complete", "Pending", "Not Start"],
  legend: {
    show: true,
    position: "right",
    fontSize: "15px",
    offsetX: 10,
    offsetY: -5,
    labels: {
      colors: "#888888",
    },
  },

  plotOptions: {
    pie: {
      donut: {
        size: "75%",
        background: "transparent",
        labels: {
          show: true,
          name: {
            show: true,
            fontFamily: "Poppins, sans-serif",
            offsetY: 20,
          },
          total: {
            showAlways: true,
            show: true,
            label: "",
            fontFamily: "Poppins, sans-serif",
            formatter: function (w) {
              const arr = [];
              arr.push(w.globals.seriesTotals[0] + w.globals.seriesTotals[1]);
              const sum = arr.reduce((a: any, b: any) => {
                return a + b;
              }, 0);
              return `${sum} complete`;
            },
          },
          value: {
            show: true,
            color: "#888888",
            fontSize: "12px",
            fontFamily: "Poppins, sans-serif",
            offsetY: -10,
            formatter: function (value) {
              return value + "";
            },
          },
        },
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
          width: 280,
        },
      },
    },
    {
      breakpoint: 640,
      options: {
        chart: {
          width: 280,
        },
      },
    },
  ],
};

type ChartThreeState = {
  series: number[];
};

const PieChartCard = () => {
  const [state, setState] = useState<ChartThreeState>({
    series: [12, 50, 38],
  });

  return (
    <div className="mx-auto flex justify-center pt-2">
      <ReactApexChart
        options={options}
        series={state.series}
        type="donut"
        width="100%"
        height="80%"
      />
    </div>
  );
};

export default PieChartCard;
