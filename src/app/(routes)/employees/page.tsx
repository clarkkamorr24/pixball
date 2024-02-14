import React from "react";

const EmployeePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-6 gap-2 xl:grid-rows-3 bg-body text-center">
      {/* 4 boxes */}
      <div className="bg-stroke py-10 ">one</div>
      <div className="bg-success py-10">two</div>
      <div className="bg-gray py-10">three</div>
      <div className="bg-primary py-10">four</div>
      {/* Total earnings */}
      <div className="bg-red py-10 col-span-1 md:col-span-2 xl:row-span-3 xl:col-span-2">
        five
      </div>
      {/* overview */}
      <div className="grid md:grid-cols-4 xl:grid-cols-5 md:col-span-2 xl:col-span-4 xl:row-span-2 gap-2">
        <div className="bg-red md:col-span-2 py-10 xl:row-span-2 xl:col-span-3">
          six
        </div>
        <div className="bg-warning md:col-span-2 py-10 xl:col-span-2 xl:row-span-2">
          seven
        </div>
      </div>
    </div>
  );
};

export default EmployeePage;
