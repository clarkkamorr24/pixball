"use client";
import React, { Fragment, useState } from "react";
import ModalForm from "../Modal";

const CasinoTableHeader = () => {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <div className="flex items-center justify-between px-4">
        <h3 className="text-sm font-semibold text-black dark:text-white">
          Departments
        </h3>
        <div
          className="flex cursor-pointer rounded-md bg-primary px-3 py-2 text-xs text-white first-letter:px-3"
          onClick={() => setShow(true)}
        >
          <button className="outline-none outline">
            Create New Department
          </button>
        </div>
      </div>
      {show && <ModalForm setShow={setShow} />}
    </Fragment>
  );
};

export default CasinoTableHeader;
