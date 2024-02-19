import React from "react";
import ProductHeader from "./ProductsContent/ProductHeader";
import DataTable from "./Table";

const Products = () => {
  return (
    <div className="dark:outline-strokedark pt-7.5 outline-stroke flex flex-col rounded-md bg-white outline outline-1 md:col-span-2 xl:col-span-4 dark:bg-black">
      <ProductHeader />
      <div className="h-full">
        <DataTable />
      </div>
    </div>
  );
};

export default Products;
