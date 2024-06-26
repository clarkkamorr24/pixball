import React from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

export const CrossCheck = ({ row, getValue }) => {
  const status = getValue();
  return (
    <div className="flex justify-center font-bold">
      {status ? (
        <IoCheckmarkOutline size={18} className="text-success" />
      ) : (
        <IoCloseOutline size={18} className="text-red" />
      )}
    </div>
  );
};
