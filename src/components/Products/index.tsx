import React from "react";
import ProductHeader from "./ProductsContent/ProductHeader";
import DataTable from "./Table";

const Products: React.FC = () => {
  return (
    <div className="flex flex-col rounded-md bg-white outline outline-1 outline-stroke dark:outline-strokedark dark:bg-black pt-7.5 md:col-span-2 xl:col-span-4">
      <ProductHeader />
      <div className="h-full">
        <DataTable />
      </div>
    </div>
  );
};

export default Products;
