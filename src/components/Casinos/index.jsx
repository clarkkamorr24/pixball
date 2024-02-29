import Card from "@/components/Casinos/Card";
import React from "react";
import { IoStarOutline } from "react-icons/io5";
import { IoThumbsUpOutline } from "react-icons/io5";
import { IoThumbsDownOutline } from "react-icons/io5";
import Table from "./TableContent";
import Sort from "./Sort";

const casino = [
  {
    label: "Top Casino",
    total: 8,
    duration: "For the last 3 weeks",
    icon: <IoStarOutline size={20} />,
    casinoList: [
      {
        id: 1,
        title: "Casino Pool",
      },
      {
        id: 2,
        title: "Casino Tongits",
      },
      {
        id: 3,
        title: "Casino Casino Cards",
      },
    ],
  },
  {
    label: "Active Casino",
    total: 53,
    duration: "For the last 3 weeks",
    icon: <IoThumbsUpOutline size={20} />,
  },
  {
    label: "Inactive Casino",
    total: 4,
    duration: "For the last 3 weeks",
    icon: <IoThumbsDownOutline size={20} />,
  },
];

export default function Casinos() {
  return (
    <div className="flex flex-col gap-4">
      <Sort />
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {casino.map((item, index) => (
          <Card casino={item} key={index} />
        ))}
      </div>
      <div>
        <Table />
      </div>
    </div>
  );
}
