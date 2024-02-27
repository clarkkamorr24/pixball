"use client";
import React, { Fragment, useState } from "react";
import ModalForm from "./ModalForm";

const CasinoTableHeader = () => {
  const [show, setShow] = useState(false);
  return (
    <Fragment>
      <div className="flex items-center justify-between px-4">
        <h3 className="text-sm font-semibold text-black dark:text-white">
          List of Users
        </h3>
        <div
          className="flex cursor-pointer rounded-md bg-primary px-4 py-2 text-sm text-white"
          onClick={() => setShow(true)}
        >
          <button>Create New User</button>
        </div>
      </div>
      {show && <ModalForm setShow={setShow} />}
    </Fragment>
  );
};

export default CasinoTableHeader;
