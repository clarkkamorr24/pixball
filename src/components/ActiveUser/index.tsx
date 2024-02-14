"use client";
import React from "react";
import dynamic from "next/dynamic";
import { usAea } from "@react-jvectormap/unitedstates";
import Image from "next/image";
import Flaglist from "./Flaglist";
const VectorMap = dynamic(
  // @ts-ignore
  () => import("@react-jvectormap/core").then((m) => m.VectorMap),
  { ssr: false }
);

const ActiveUser: React.FC = () => {
  return (
    <div className="flex flex-col rounded-md bg-white outline outline-1 outline-stroke dark:outline-strokedark dark:bg-black md:col-span-2 xl:col-span-3">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 h-full">
        <div className="w-auto col-span-1 md:col-span-1 xl:col-span-2 pt-7.5">
          <h3 className="font-semibold text-black dark:text-white px-4">
            Active Users
          </h3>
          <div className="h-100 w-auto">
            <VectorMap
              map={usAea}
              backgroundColor="#242424"
              style={{ marginTop: 20, padding: 10 }}
              regionStyle={{
                initial: {
                  fill: "white",
                },
                hover: {
                  fillOpacity: 1,
                  fill: "blue",
                },
                selected: {
                  fill: "#FFFB00",
                },
              }}
              onRegionTipShow={function reginalTip(event, label, code) {
                //@ts-ignore
                return label.html(`
                  <div style="background-color: #F8FAFC; color: black; padding: 2px 8px"; >
                    ${
                      //@ts-ignore
                      label.html()
                    }
                  </div>`);
              }}
            />
          </div>
        </div>
        <div className="col-span-1 xl:col-span-1 pt-6.5 px-4">
          <Flaglist />
        </div>
      </div>
    </div>
  );
};

export default ActiveUser;
