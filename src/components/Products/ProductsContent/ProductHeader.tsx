import React from "react";
import { ChevronDown, NotifIcon } from "../../Icons";

const ProductHeader = () => {
  return (
    <div className="flex justify-between items-center px-4">
      <h3 className="font-semibold text-black dark:text-white">
        Best Selling Products
      </h3>
      <div className="inline-flex gap-3 items-center">
        <h2 className="text-mediumGray">SORT BY: </h2>
        <div className="cursor-pointer flex items-center gap-1">
          <h2 className="text-primary">Today </h2>
          <span>
            <ChevronDown className="stroke-primary" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductHeader;
