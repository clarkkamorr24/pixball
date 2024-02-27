"use client";
import React, { useState } from "react";
import CreateCasino from "./CreateCasino";

const CasinoTableHeader = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between px-4 pb-3">
        <h3 className="text-sm font-semibold text-black dark:text-white">
          List of Casino(s)
        </h3>
        <div className="flex rounded-md bg-primary px-4 py-2 text-sm text-white">
          <button onClick={() => setShow(true)}>Create New Casino</button>
        </div>
      </div>
      {show && <CreateCasino setShow={setShow} />}
    </div>
  );
};

export default CasinoTableHeader;
