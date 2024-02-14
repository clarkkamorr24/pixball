import React from "react";
import { cn } from "@/lib/utils";

const StockCell = ({ getValue }: any) => {
  const status = getValue();
  return (
    <div
      className={cn(
        "rounded-md py-1 px-2 text-center bg-opacity-10",
        status === "In Stock" ? "bg-success text-success" : "bg-red text-red"
      )}
    >
      {status}
    </div>
  );
};

export default StockCell;
