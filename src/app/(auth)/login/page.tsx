"use client";
import { useRouter } from "next/navigation";
import { EyeCloseIcon, EyeOpenIcon } from "@/components/Icons";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import loginValidate from "@/lib/validate";

type ValuesType = {
  email: string;
  password: string;
};

const LoginForm = () => {
  const [show, setShow] = useState<boolean>(false);
  const [error, setError] = useState<string | null | undefined>("");

  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: loginValidate,
    onSubmit,
  });

  async function onSubmit(values: ValuesType) {
    const { email, password } = values;
    const status = await signIn("credentials", {
      redirect: false,
      email,
      password,
      callbackUrl: "/",
    });
    if (status?.ok) {
      router.push("/");
    } else {
      setError(status?.error);
      router.push("/login");
    }
  }

  return (
    <div>
      <div className="flex justify-center my-2 mx-4 md:mx-0 mt-35">
        <div className="w-full max-w-md bg-gray rounded-lg shadow-md p-6 border border-stroke">
          <form onSubmit={formik.handleSubmit}>
            <div className="flex flex-col text-white justify-center mb-5">
              <span className="text-center font-bold text-4xl">CRM</span>
              <p className="text-center">Login Account</p>
              {error !== "" && (
                <span className="block text-red pt-2 text-center">{error}</span>
              )}
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-full px-3 mb-6">
                <label
                  className="block tracking-wide text-gray-700 mb-2 text-stroke"
                  htmlFor="Password"
                >
                  Username
                </label>
                <input
                  className="appearance-none block w-full bg-dark text-white font-medium rounded-lg py-3 px-3 leading-tight outline-none focus:outline-stroke"
                  {...formik.getFieldProps("email")}
                  type="email"
                  name="email"
                />
                {formik.errors.email && formik.touched.email && (
                  <span className="block text-red text-xs mt-2">
                    {formik.errors.email}
                  </span>
                )}
              </div>

              <div className="w-full md:w-full mb-6">
                <div className="relative dark:bg-lightGray px-3 rounded-md">
                  <button
                    className="absolute right-0 top-13 -translate-y-1/2 p-2 mr-4"
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
                    className="block tracking-wide text-gray-700 mb-2 text-stroke"
                    htmlFor="Password"
                  >
                    Password
                  </label>
                  <input
                    {...formik.getFieldProps("password")}
                    className="appearance-none block w-full bg-dark text-white font-medium rounded-lg py-3 px-3 leading-tight outline-none focus:outline-stroke"
                    name="password"
                    type={`${show ? "text" : "password"}`}
                  />
                  {formik.errors.password && formik.touched.password && (
                    <span className="block text-red text-xs mt-2">
                      {formik.errors.password}
                    </span>
                  )}
                </div>
              </div>
              <div className="w-full flex items-center justify-between px-3 mb-3 ">
                <label htmlFor="remember" className="flex items-center w-1/2">
                  <input type="checkbox" className="mr-1 shadow" />
                  <span className="text-sm text-white pt-1">Remember Me</span>
                </label>
                <div className="w-1/2 text-right">
                  <a href="#" className="text-primary text-sm tracking-tight">
                    Forget your password?
                  </a>
                </div>
              </div>
              <div className="w-full md:w-full px-3 mb-6">
                <button
                  type="submit"
                  className="appearance-none block w-full bg-primary text-white font-bold rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none"
                >
                  Log in
                </button>
              </div>
            </div>
          </form>
          <div className="flex items-center w-full mt-2 px-3 gap-2">
            <div className="block h-[0.25px] bg-stroke w-full"></div>
            <span className="text-center text-lg text-stroke">OR</span>
            <div className="block h-[0.25px] bg-stroke w-full"></div>
          </div>
          <div className="flex items-center w-full mt-2 px-3">
            <button className="flex text-stroke font-semibold justify-center bg-dark py-4 w-full gap-3 items-center rounded-lg">
              <FcGoogle />
              Login with Google
            </button>
          </div>
          <div className="flex justify-center items-center w-full mt-6 px-3 text-xs gap-2">
            <p className="text-stroke">Dont have an account?</p>{" "}
            <a className="text-primary cursor-pointer">Sign up</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
