import React from "react";
import Company from "./Company";
import Geo from "./Geo";
import Allowed from "./Allowed";
import Client from "./Client";
import Product from "./Product";

const Expand = () => {
  return (
    <div className="text-md grid grid-cols-11 gap-4 text-sm">
      <Company />
      <Geo />
      <Allowed />
      <Client />
      <Product />
    </div>
  );
};

export default Expand;
