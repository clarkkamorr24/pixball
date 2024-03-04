"use client";
import React, { useState } from "react";
import ModalForm from "../Modal";
import { Button } from "@/components/ui";

const CasinoTableHeader = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between px-4">
        <h3 className="text-sm font-semibold text-black dark:text-white">
          Departments
        </h3>
        <Button
          onClick={() => setShow(true)}
          label="Create New Department"
          type="button"
        />
      </div>
      {show && <ModalForm setShow={setShow} />}
    </div>
  );
};

export default CasinoTableHeader;
