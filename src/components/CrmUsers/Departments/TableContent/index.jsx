import React from "react";
import CasinoTableHeader from "./Header";
import CasinoDataTable from "./Body";

const Table = () => {
  return (
    <div className="dark:outline-strokedark flex flex-col rounded-md bg-white pt-7.5 outline outline-1 outline-stroke dark:bg-black md:col-span-2 xl:col-span-3">
      <CasinoTableHeader />
      <CasinoDataTable />
    </div>
  );
};

export default Table;
