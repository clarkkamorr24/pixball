"use client";

import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const Logout = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false }).then(() => {
      router.push("/login");
    });

    await axios
      .post(
        `api/logout`,
        {
          email: session.email,
          refreshToken: session.refresh.token,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        },
      )
      .then((data) => {
        console.log("Data", data);
      });
  };

  return (
    <div>
      <button
        className="bg-primary rounded-md px-4 py-1 text-white"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
