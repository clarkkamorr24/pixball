"use client";

import React, { useEffect, useRef } from "react";
import { useFormik } from "formik";
import { OtpValidate } from "@/lib/validate";

const Form = () => {
  const formik = useFormik({
    initialValues: {
      otp: Array.from({ length: 6 }).fill(""),
    },
    validate: OtpValidate,
    onSubmit,
  });

  const inputRef = useRef({});

  async function onSubmit(values) {
    console.log("values", values);
  }

  useEffect(() => {
    inputRef.current[0].focus();

    inputRef.current[0].addEventListener("paste", pasteText);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => inputRef.current[0].removeEventListener("paste", pasteText);
  }, []);

  const pasteText = (event) => {
    const pastedText = event.clipboardData.getData("text");
    const currentOTP = [...formik.values.otp];

    pastedText.split("").forEach((char, index) => {
      if (index < currentOTP.length) {
        currentOTP[index] = char;
      }
    });

    formik.setValues((prev) => ({
      ...prev,
      otp: currentOTP,
    }));

    inputRef.current[5].focus();
  };

  const handleChange = (event, index) => {
    const { value } = event.target;

    if (/[a-z]/gi.test(value)) return;

    const currentOTP = [...formik.values.otp];
    currentOTP[index] = value.slice(-1);

    formik.setValues((prev) => ({
      ...prev,
      otp: currentOTP,
    }));

    if (value && index < 5) {
      inputRef.current[index + 1].focus();
    }
  };

  const handleBackSpace = (event, index) => {
    if (event.key === "Backspace") {
      if (index > 0) {
        inputRef.current[index - 1].focus();
      }
    }
  };

  const renderInput = () => {
    return formik.values.otp.map((value, index) => (
      <input
        className="bg-dark focus:outline-stroke h-15 w-12 appearance-none rounded-lg px-3 py-3 text-center font-medium leading-tight text-white outline-none"
        ref={(element) => (inputRef.current[index] = element)}
        type="text"
        name={index}
        value={value}
        onChange={(event) => handleChange(event, index)}
        key={index}
        onKeyUp={(event) => handleBackSpace(event, index)}
        maxLength="1"
      />
    ));
  };

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="container mx-auto">
          <div className="mx-auto max-w-sm md:max-w-lg">
            <div className="w-full">
              <div className="py-10 text-center text-white">
                <span className="mb-5 flex text-3xl">
                  Two-Factor Authentication
                </span>
                <p className="mb-10 block">
                  Enter the 6-digit code sent to your email to confirm your
                  action
                </p>
                <p className="">Enter OTP</p>
                <div className="mt-5 flex flex-row justify-center gap-3 px-2 text-center">
                  {renderInput()}
                </div>
                {console.log("mik", formik.errors.otp)}
                <div className="mt-10 flex justify-center text-center">
                  <button
                    className="bg-primary px-15 rounded-sm py-3 disabled:bg-opacity-50"
                    type="submit"
                    disabled={
                      formik.errors.otp ||
                      (formik.errors.otp == undefined && true)
                    }
                  >
                    Verify
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
