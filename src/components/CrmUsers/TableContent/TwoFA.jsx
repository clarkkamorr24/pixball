import React from "react";

const TwoFA = ({ getValue }) => {
  const status = getValue();
  return (
    <div className="text-white">
      {status === "active" ? (
        <span className="rounded-md bg-success px-3 py-1 capitalize ">
          {status}
        </span>
      ) : (
        <span className="rounded-md bg-red px-3 py-1 capitalize">{status}</span>
      )}
    </div>
  );
};

export default TwoFA;
