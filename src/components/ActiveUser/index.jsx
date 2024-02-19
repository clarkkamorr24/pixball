"use client";
import dynamic from "next/dynamic";
import { usAea } from "@react-jvectormap/unitedstates";
import Flaglist from "./Flaglist";
const VectorMap = dynamic(
  // @ts-ignore
  () => import("@react-jvectormap/core").then((m) => m.VectorMap),
  { ssr: false },
);

const ActiveUser = () => {
  return (
    <div className="dark:outline-strokedark outline-stroke flex flex-col rounded-md bg-white outline outline-1 md:col-span-2 xl:col-span-3 dark:bg-black">
      <div className="grid h-full md:grid-cols-2 xl:grid-cols-3">
        <div className="pt-7.5 col-span-1 w-auto md:col-span-1 xl:col-span-2">
          <h3 className="px-4 font-semibold text-black dark:text-white">
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
        <div className="pt-6.5 col-span-1 px-4 xl:col-span-1">
          <Flaglist />
        </div>
      </div>
    </div>
  );
};

export default ActiveUser;
