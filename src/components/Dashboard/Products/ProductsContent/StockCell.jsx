import React from "react";
import { cn } from "@/lib";

const StockCell = ({ getValue }) => {
  const status = getValue();
  return (
    <div
      className={cn(
        "rounded-md bg-opacity-10 px-2 py-1 text-center",
        status === "In Stock" ? "bg-success text-success" : "bg-red text-red",
      )}
    >
      {status}
    </div>
  );
};

export default StockCell;
