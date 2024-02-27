import React, { useEffect } from "react";

const ModalForm = ({ setShow }) => {
  useEffect(() => {
    const closeOnEscapePressed = (e) => {
      if (e.key === "Escape") {
        setShow(false);
      }
    };
    window.addEventListener("keydown", closeOnEscapePressed);
    return () => window.removeEventListener("keydown", closeOnEscapePressed);
  }, []);

  return (
    <div
      className="fixed inset-0 z-99999 flex items-center justify-center bg-black bg-opacity-25 backdrop-blur-sm"
      onKeyUp={(event) => console.log("event", event)}
    >
      <div className="w-[600px]">
        <div className="bg-white">ModalForm</div>
      </div>
    </div>
  );
};

export default ModalForm;
