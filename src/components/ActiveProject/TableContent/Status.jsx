import React from "react";
import { cn } from "@/lib/utils";

const Status = ({ getValue }) => {
  const status = getValue();
  return (
    <div
      className={cn(
        "rounded-md bg-opacity-10 px-2 py-1 text-center",
        status === "Inprogress"
          ? "bg-primary text-primary"
          : status === "Completed"
            ? "bg-success text-success"
            : "bg-red text-red",
      )}
    >
      {status}
    </div>
  );
};

export default Status;
