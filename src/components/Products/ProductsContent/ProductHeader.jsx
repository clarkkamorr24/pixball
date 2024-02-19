import React from "react";
import { ChevronDownIcon, NotifIcon } from "../../Icons";

const ProductHeader = () => {
  return (
    <div className="flex items-center justify-between px-4">
      <h3 className="font-semibold text-black dark:text-white">
        Best Selling Products
      </h3>
      <div className="inline-flex items-center gap-3">
        <h2 className="text-mediumGray">SORT BY: </h2>
        <div className="flex cursor-pointer items-center gap-1">
          <h2 className="text-primary">Today </h2>
          <span>
            <ChevronDownIcon className="stroke-primary" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
