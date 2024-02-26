import React from "react";
import { IoPencil } from "react-icons/io5";

const products = [
  {
    name: "e-Sports",
  },
  {
    name: "Casino",
  },
  {
    name: "Live Dealer",
  },
  {
    name: "Horses",
  },
  {
    name: "Promos",
  },
];

const Product = () => {
  return (
    <div className="col-span-2 inline-flex flex-col gap-2 rounded-md border border-stroke p-2">
      <div className="flex items-center justify-between">
        <span>Products</span>
        <div className="cursor-pointer rounded-md bg-primary p-1 text-white">
          <IoPencil size={15} />
        </div>
      </div>
      <div className="mt-3 flex flex-col gap-5">
        {products.map((product) => (
          <span>{product.name}</span>
        ))}
      </div>
    </div>
  );
};

export default Product;
