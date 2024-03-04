"use client";
import React, { useState } from "react";
import ModalForm from "../Modal";
import { Button } from "@/components/ui";

const CrmTableHeader = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between px-4">
        <h3 className="text-sm font-semibold text-black dark:text-white">
          List of Users
        </h3>
        <Button
          onClick={() => setShow(true)}
          label="Create New Users"
          type="button"
        />
      </div>
      {show && <ModalForm setShow={setShow} />}
    </div>
  );
};

export default CrmTableHeader;
