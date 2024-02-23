import Image from "next/image";
import React from "react";
import { IoPencil } from "react-icons/io5";

const languages = [
  {
    image: "/images/flag/us.png",
    name: "English",
  },
  {
    image: "/images/flag/spain.png",
    name: "Spanish",
  },
];
function Company() {
  return (
    <div className="col-span-3 flex flex-col gap-4">
      <div className="flex justify-between">
        <span>Company:</span>
        <span>Casino Company</span>
      </div>
      <div className="flex justify-between">
        <span>Super Admin:</span>
        <span>Admin Casino</span>
      </div>
      <div className="h-full gap-2 rounded-md border border-stroke p-2">
        <div className="flex items-center justify-between pb-4">
          <h3 className="">Languages</h3>
          <div className="cursor-pointer rounded-md bg-primary p-1">
            <IoPencil size={15} />
          </div>
        </div>
        <div className="mt-2 flex flex-col gap-4">
          {languages.map((language, index) => (
            <div className="flex gap-4" key={index}>
              <span>
                <Image width={25} height={25} src={language.image} alt="flag" />
              </span>
              <span>{language.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Company;
