import useSWR from "swr";
import { fetcher } from "@/lib";

export const useGetData = (url) => {
  const { data, isLoading, error } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
  });

  return {
    data,
    isLoading,
    error,
  };
};
