"use client";
import React, { useState } from "react";
import { EyeCloseIcon, EyeOpenIcon } from "@/components/Icons";
import { loginValidate } from "@/lib";
import { useFormik } from "formik";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { HamburgerIcon } from "@/components/Logos";
import Image from "next/image";

const Form = () => {
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidate,
    onSubmit,
  });

  async function onSubmit(values) {
    const { email, password } = values;
    const status = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/",
    });
    if (status?.ok) {
      router.replace("/");
    } else {
      setError(status?.error);
      router.push("/login");
    }
  }

  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-5 flex flex-col justify-center text-white">
          <span className="flex justify-center">
            <Image
              src={HamburgerIcon}
              alt="logo"
              height={100}
              width={100}
              className="h-25 w-25"
            />
          </span>
          {error !== "" && (
            <span className="block pt-2 text-center text-red">{error}</span>
          )}
        </div>
        <div className="-mx-3 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:w-full">
            <label
              className="text-gray-700 mb-2 block text-sm tracking-wide text-stroke"
              htmlFor="Password"
            >
              Username
            </label>
            <input
              className="block w-full appearance-none rounded-lg bg-dark px-3 py-3 font-medium leading-tight text-white outline-none focus:outline-stroke"
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

          <div className="mb-6 w-full md:w-full">
            <div className="relative rounded-md px-3">
              <button
                className="absolute right-0 top-13 mr-4 -translate-y-1/2 p-2"
                onClick={(e) => {
                  e.preventDefault();
                  setShow(!show);
                }}
              >
                {show ? (
                  <EyeOpenIcon className="stroke-stroke" />
                ) : (
                  <EyeCloseIcon className="stroke-stroke" />
                )}
              </button>
              <label
                className="text-gray-700 mb-2 block text-sm tracking-wide text-stroke"
                htmlFor="Password"
              >
                Password
              </label>
              <input
                {...formik.getFieldProps("password")}
                className="block w-full appearance-none rounded-lg bg-dark px-3 py-3 font-medium leading-tight text-white outline-none focus:outline-stroke"
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
          <div className="mb-3 flex w-full items-center justify-between px-3 ">
            <label htmlFor="remember" className="flex w-1/2 items-center">
              <input type="checkbox" className="mr-1 shadow" />
              <span className="pt-1 text-sm text-white">Remember Me</span>
            </label>
            <div className="w-1/2 text-right">
              <a href="#" className="text-sm tracking-tight text-primary">
                Forget your password?
              </a>
            </div>
          </div>
          <div className="mb-6 w-full px-3 md:w-full">
            <button
              type="submit"
              className="block w-full appearance-none rounded-lg bg-primary px-3 py-3 font-bold leading-tight text-white hover:bg-blue-500 focus:outline-none"
            >
              Log in
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
