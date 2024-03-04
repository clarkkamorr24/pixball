"use client";
import React, { useState } from "react";
import CasinoForm from "./Form";
import { Button } from "@/components/ui";

const CasinoTableHeader = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between px-4 pb-3">
        <h3 className="text-sm font-semibold text-black dark:text-white">
          List of Casino(s)
        </h3>
        <Button
          onClick={() => setShow(true)}
          label="Create New Casinos"
          type="button"
        />
      </div>
      {show && <CasinoForm setShow={setShow} />}
    </div>
  );
};

export default CasinoTableHeader;
