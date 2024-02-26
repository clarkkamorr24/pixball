import React from "react";
import DdLanguages from "./Dropdowns/DdLanguages";
import DdGeo from "./Dropdowns/DdGeo";
import { IoAdd, IoPencil, IoCloseOutline } from "react-icons/io5";

const CreateCasino = ({ setShow }) => {
  return (
    <div className="relative flex gap-12 bg-primary bg-opacity-20 px-6 py-3 text-xs text-black dark:bg-lightGray dark:text-white">
      <span
        className="absolute bottom-2 right-1 cursor-pointer"
        onClick={() => setShow(false)}
      >
        <button className="mt-2 flex items-center rounded-md bg-red p-1 text-white">
          <IoCloseOutline size={20} />
          Cancel
        </button>
      </span>
      <span>ID</span>
      <span>006</span>
      <div className="flex flex-col gap-2">
        Company Name
        <input
          type="text"
          className="rounded-md border-none bg-primary p-2 text-white focus:border-none focus:outline-none dark:bg-stroke"
        />
        Domain Name
        <input
          type="text"
          className="rounded-md border-none bg-primary p-2 text-white focus:border-none focus:outline-none dark:bg-stroke"
        />
        License
        <input
          type="text"
          className="rounded-md border-none bg-primary p-2 text-white focus:border-none focus:outline-none dark:bg-stroke"
        />
      </div>
      <div className="flex flex-col gap-3 text-white">
        <div className="flex flex-col gap-2 rounded-md bg-primary p-1 dark:bg-stroke">
          <span>Deals</span>
          <div className="flex gap-2">
            <span className="w-30 cursor-pointer rounded-md bg-sky-400 p-2 dark:bg-primary">
              Flat
            </span>
            <span className="w-30 cursor-pointer rounded-md border bg-transparent p-2">
              Rev. Share
            </span>
          </div>
          <input
            type="text"
            placeholder="Amount..."
            className="rounded-md border-none bg-sky-300 p-3 placeholder:text-white focus:border-none focus:outline-none dark:bg-dark"
          />
        </div>
        <DdLanguages />
        <DdGeo />
      </div>
      <div className="flex flex-col gap-3">
        <div className="item flex flex-col gap-1">
          <span>Allowed IPS</span>
          <div className="flex gap-2">
            <input
              type="text"
              className="w-15 rounded-md bg-primary p-3 text-white outline-none dark:bg-stroke"
            />
            <span className="flex items-end text-2xl">.</span>
            <input
              type="text"
              className="w-15 rounded-md bg-primary p-3 text-white outline-none dark:bg-stroke"
            />
            <span className="flex items-end text-2xl">.</span>
            <input
              type="text"
              className="w-15 rounded-md bg-primary p-3 text-white outline-none dark:bg-stroke"
            />
            <span className="flex items-end text-2xl">.</span>
            <input
              type="text"
              className="w-15 rounded-md bg-primary p-3 text-white outline-none dark:bg-stroke"
            />
            <div className="flex items-center">
              <span className="flex cursor-pointer items-center rounded-full bg-primary p-1 text-white">
                <IoAdd size={25} />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span>List of IPS</span>
          <div className="flex items-center gap-2">
            <textarea
              type="text"
              className="h-20 w-full resize-none rounded-md border border-primary bg-transparent p-2 text-black outline-none dark:border-stroke dark:text-white"
            />
            <span className="flex cursor-pointer items-center justify-center rounded-md bg-primary p-2 text-white">
              <IoPencil size={15} />
            </span>
          </div>
        </div>
      </div>
      <div className="flex w-full flex-col gap-1">
        <span>Products</span>
        <div className="flex flex-col gap-2 rounded-md bg-primary px-4 py-2 text-white dark:bg-stroke">
          <input
            type="text"
            placeholder="Search..."
            className="rounded-md border-none bg-sky-300 p-3 placeholder:text-white focus:border-none focus:outline-none dark:bg-dark"
          />
          <div className="flex gap-3">
            <span className="cursor-pointer rounded-md border p-3 active:bg-primary">
              e-Sports
            </span>
            <span className="cursor-pointer rounded-md border p-3 active:bg-primary">
              Casino
            </span>
            <span className="cursor-pointer rounded-md border p-3 active:bg-primary">
              Horses
            </span>
            <span className="cursor-pointer rounded-md border p-3 active:bg-primary">
              Live Dealer
            </span>
            <span className="cursor-pointer rounded-md border p-3 active:bg-primary">
              Promos
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateCasino;
