import React from "react";
import { cn } from "@/lib/utils";

const Status = ({ getValue }: any) => {
  const status = getValue();
  return (
    <div
      className={cn(
        "rounded-md py-1 px-2 text-center bg-opacity-10",
        status === "Inprogress"
          ? "bg-primary text-primary"
          : status === "Completed"
          ? "bg-success text-success"
          : "bg-red text-red"
      )}
    >
      {status}
    </div>
  );
};

export default Status;
