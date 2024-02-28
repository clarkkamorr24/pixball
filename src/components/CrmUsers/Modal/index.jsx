import React, { useEffect } from "react";
import Form from "./Form";

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
    <div className="fixed inset-0 z-99999 flex justify-center bg-black bg-opacity-25 backdrop-blur-sm">
      <div>
        <div className="mx-4 my-2 mt-35 flex justify-center md:mx-0">
          <div className="w-full max-w-md rounded-lg border border-stroke bg-white p-6 shadow-md dark:bg-gray">
            <Form openModal={setShow} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;
