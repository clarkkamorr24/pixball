"use client";
import React, { useEffect, useState } from "react";
import SkeletonLoading from "@/components/ui/SkeletonLoading";
import CasinoTableHeader from "./Header";
import CasinoDataTable from "./Body";

const getData = async () => {
  try {
    const response = await fetch("/api/casino", { method: "GET" });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return null;
  }
};

const Table = () => {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getData();
      setApiData(data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="dark:outline-strokedark flex flex-col rounded-md bg-white pt-7.5 outline outline-1 outline-stroke dark:bg-black md:col-span-2 xl:col-span-3">
      <CasinoTableHeader />
      {loading ? (
        <SkeletonLoading />
      ) : (
        <CasinoDataTable casinoData={apiData} loading={loading} />
      )}
    </div>
  );
};

export default Table;
