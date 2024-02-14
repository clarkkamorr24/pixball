"use client";
import { useRouter } from "next/navigation";
import { EyeCloseIcon, EyeOpenIcon } from "@/components/Icons";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";

const LoginForm = () => {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const url = `${process.env.NEXT_PIXBALL_URL}/client/login`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      // const res = await response.json();
      // console.log("Res", res);
      if (response.ok) {
        // Assuming the response contains a token
        // Store token in local storage or cookie
        // localStorage.setItem("token", data.token);
        // Redirect to dashboard or desired page
        router.push("/");
      } else {
        setError("Invalid Credentials");
        console.error("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }

    // router.push("/");
  };

  return (
    <div>
      <div className="flex justify-center my-2 mx-4 md:mx-0 mt-24">
        <div className="w-full max-w-md bg-gray rounded-lg shadow-md p-6 border border-stroke">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col text-white justify-center ">
              <span className="text-center font-bold text-4xl">CRM</span>
              <p className="text-center">Login Account</p>
            </div>
            {error !== "" && (
              <div className="text-center my-2 text-red">
                {" "}
                Invalid Credentials!
              </div>
            )}
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
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value), setError("");
                  }}
                  required
                />
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
                    className="appearance-none block w-full bg-dark text-white font-medium rounded-lg py-3 px-3 leading-tight outline-none focus:outline-stroke"
                    type={show ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
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
                <button className="appearance-none block w-full bg-primary text-white font-bold rounded-lg py-3 px-3 leading-tight hover:bg-blue-500 focus:outline-none">
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
