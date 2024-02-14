import Image from "next/image";
import React from "react";

const ProductNameCell = ({ getValue }: any) => {
  const name = getValue();
  return (
    <div className="flex">
      <Image width={40} height={40} src={"/images/user/user.png"} alt="User" />
      <div className="ml-4">
        <span>{name}</span>
        <p>24, April 2021 </p>
      </div>
    </div>
  );
};

export default ProductNameCell;
