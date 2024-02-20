"use client";

import React from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const Logout = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false }).then(() => {
      router.push("/login");
    });

    await axios
      .post(`api/logout`, {
        email: session.email,
        refreshToken: session.refresh.token,
      })
      .then((data) => data.status);
  };

  return (
    <div>
      <button
        className="rounded-md bg-primary px-4 py-1 text-white"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
