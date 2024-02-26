import React from "react";
import { IoPencil } from "react-icons/io5";

const Allowed = () => {
  return (
    <div className="col-span-2 inline-flex flex-col gap-2">
      <div className="gap-2 rounded-md border border-stroke p-2">
        <div className="flex items-center justify-between pb-2">
          <h3 className="">Allowed IPS</h3>
          <div className="cursor-pointer rounded-md bg-primary p-1 text-white">
            <IoPencil size={15} />
          </div>
        </div>
        <h3 className="text-lg">192.168..0.1, 127.0.01</h3>
      </div>
      <div className="h-full gap-2 rounded-md border border-stroke py-2">
        <div className="flex items-center justify-between px-2 pb-2">
          <h3>Deals</h3>
          <div className="cursor-pointer rounded-md bg-primary p-1 text-white">
            <IoPencil size={15} />
          </div>
        </div>
        <div className="px-1">
          <div className="flex flex-col gap-5 rounded-md border border-stroke">
            <div className="border-b border-stroke px-1 py-3">Flat</div>
            <div className="px-1 py-3 text-xl">$52,000</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Allowed;
