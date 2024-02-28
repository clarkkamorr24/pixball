"use client";
import React, { useState } from "react";
import { EyeCloseIcon, EyeOpenIcon } from "@/components/Icons";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { modalValidate } from "@/lib/validate";
import DdCasino from "../Dropdowns/DdCasino";
import DdDepartment from "../Dropdowns/DdDepartment";
import DdCountry from "../Dropdowns/DdCountry";
import DdRole from "../Dropdowns/DdRole";

const Form = ({ openModal }) => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
    validate: modalValidate,
    onSubmit,
  });

  async function onSubmit(values) {
    console.log("values", values);
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-5 flex items-center justify-between border-b border-stroke">
          <span className="mb-3 text-center text-xl font-bold text-black dark:text-white ">
            Create New User
          </span>
          <p
            className="mb-3 cursor-pointer text-center text-sm text-primary"
            onClick={() => openModal(false)}
          >
            Cancel
          </p>
        </div>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="grid grid-cols-2">
            <div className="mb-2 w-full px-3 md:w-full">
              <label
                className="text-gray-700 mb-2 block text-sm tracking-wide text-black dark:text-stroke"
                htmlFor="FirstName"
              >
                First Name
                <span className="ml-1 text-red">*</span>
              </label>
              <input
                className="block w-full appearance-none rounded-lg bg-primary px-3 py-3 font-medium leading-tight text-white outline-none focus:outline-secondary dark:bg-lightGray dark:focus:outline-stroke"
                {...formik.getFieldProps("firstname")}
                type="text"
                name="firstname"
              />
              {formik.errors.firstname && formik.touched.firstname && (
                <span className="mt-2 block text-xs text-red">
                  {formik.errors.firstname}
                </span>
              )}
            </div>
            <div className="mb-2 w-full px-3 md:w-full">
              <label
                className="text-gray-700 mb-2 block text-sm tracking-wide text-black dark:text-stroke"
                htmlFor="LastName"
              >
                Last Name
                <span className="ml-1 text-red">*</span>
              </label>
              <input
                className="block w-full appearance-none rounded-lg bg-primary px-3 py-3 font-medium leading-tight text-white outline-none focus:outline-secondary dark:bg-lightGray dark:focus:outline-stroke"
                {...formik.getFieldProps("lastname")}
                type="text"
                name="lastname"
              />
              {formik.errors.lastname && formik.touched.lastname && (
                <span className="mt-2 block text-xs text-red">
                  {formik.errors.lastname}
                </span>
              )}
            </div>
            <div className="col-span-2 mb-2 w-full px-3 md:w-full">
              <label
                className="text-gray-700 mb-2 block text-sm tracking-wide text-black dark:text-stroke"
                htmlFor="Email"
              >
                Email
                <span className="ml-1 text-red">*</span>
              </label>
              <input
                className="block w-full appearance-none rounded-lg bg-primary px-3 py-3 font-medium leading-tight text-white outline-none focus:outline-secondary dark:bg-lightGray dark:focus:outline-stroke"
                {...formik.getFieldProps("email")}
                type="email"
                name="email"
              />
              {formik.errors.email && formik.touched.email && (
                <span className="mt-2 block text-xs text-red">
                  {formik.errors.email}
                </span>
              )}
            </div>
            <div className="col-span-2 mb-2 w-full md:w-full">
              <div className="relative rounded-md px-3">
                <button
                  className="absolute right-0 top-13 mr-4 -translate-y-1/2 p-2"
                  onClick={(e) => {
                    e.preventDefault();
                    setShow(!show);
                  }}
                >
                  {show ? (
                    <EyeOpenIcon className="stroke-white dark:stroke-stroke" />
                  ) : (
                    <EyeCloseIcon className="stroke-white dark:stroke-stroke" />
                  )}
                </button>
                <label
                  className="text-gray-700 mb-2 block text-sm tracking-wide text-black dark:text-stroke"
                  htmlFor="Password"
                >
                  Password
                  <span className="ml-1 text-red">*</span>
                </label>
                <input
                  {...formik.getFieldProps("password")}
                  className="block w-full appearance-none rounded-lg bg-primary px-3 py-3 font-medium leading-tight text-white outline-none focus:outline-secondary dark:bg-lightGray dark:focus:outline-stroke"
                  name="password"
                  type={`${show ? "text" : "password"}`}
                />
                {formik.errors.password && formik.touched.password && (
                  <span className="mt-2 block text-xs text-red">
                    {formik.errors.password}
                  </span>
                )}
              </div>
            </div>
            <div className="col-span-1 mb-2 w-full px-3 md:w-full">
              <label
                className="text-gray-700 mb-2 block text-sm tracking-wide text-black dark:text-stroke"
                htmlFor="Casino"
              >
                Casino
              </label>
              <DdCasino />
            </div>
            <div className="col-span-1 mb-2 w-full px-3 md:w-full">
              <label
                className="text-gray-700 mb-2 block text-sm tracking-wide text-black dark:text-stroke"
                htmlFor="Department"
              >
                Department
              </label>
              <DdDepartment />
            </div>
            <div className="col-span-1 mb-2 w-full px-3 md:w-full">
              <label
                className="text-gray-700 mb-2 block text-sm tracking-wide text-black dark:text-stroke"
                htmlFor="Role"
              >
                Role
              </label>
              <DdRole />
            </div>
            <div className="col-span-1 mb-2 w-full px-3 md:w-full">
              <label
                className="text-gray-700 mb-2 block text-sm tracking-wide text-black dark:text-stroke"
                htmlFor="Country"
              >
                Country
              </label>
              <DdCountry />
            </div>
          </div>

          <div className="mt-6 w-full px-3 md:w-full">
            <button
              type="submit"
              className="block w-full appearance-none rounded-lg bg-primary px-3 py-3 font-bold leading-tight text-white hover:bg-blue-500 focus:outline-none"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
