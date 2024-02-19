"use client";
import { useRouter } from "next/navigation";
import { EyeCloseIcon, EyeOpenIcon } from "@/components/Icons";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useFormik } from "formik";
import loginValidate from "@/lib/validate";

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
      router.push("/");
    } else {
      setError(status?.error);
      router.push("/login");
    }
  }
  //google login
  async function handleGoogleSignIn() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div className="mb-5 flex flex-col justify-center text-white">
          <span className="text-center text-4xl font-bold">CRM</span>
          <p className="text-center">Login Account</p>
          {error !== "" && (
            <span className="block pt-2 text-center text-red">{error}</span>
          )}
        </div>
        <div className="-mx-3 mb-6 flex flex-wrap">
          <div className="mb-6 w-full px-3 md:w-full">
            <label
              className="text-gray-700 mb-2 block tracking-wide text-stroke"
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
                className="text-gray-700 mb-2 block tracking-wide text-stroke"
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
              className="hover:bg-blue-500 block w-full appearance-none rounded-lg bg-primary px-3 py-3 font-bold leading-tight text-white focus:outline-none"
            >
              Log in
            </button>
          </div>
        </div>
      </form>
      <div className="mt-2 flex w-full items-center gap-2 px-3">
        <div className="block h-[0.25px] w-full bg-stroke"></div>
        <span className="text-center text-lg text-stroke">OR</span>
        <div className="block h-[0.25px] w-full bg-stroke"></div>
      </div>
      <div className="mt-2 flex w-full items-center px-3">
        <button
          className="flex w-full items-center justify-center gap-3 rounded-lg bg-dark py-4 font-semibold text-stroke"
          onClick={handleGoogleSignIn}
        >
          <FcGoogle />
          Login with Google
        </button>
      </div>
      <div className="mt-6 flex w-full items-center justify-center gap-2 px-3 text-xs">
        <p className="text-stroke">Dont have an account?</p>{" "}
        <a className="cursor-pointer text-primary">Sign up</a>
      </div>
    </div>
  );
};

export default Form;
