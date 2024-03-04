import useSWR from "swr";

export const useAddData = (path) => {
  const { mutate } = useSWR(path);

  const addData = async (data) => {
    const res = await fetch(path, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    const response = await res.json();

    if (!res.ok) {
      throw response.message;
    }

    mutate();
  };

  return addData;
};
