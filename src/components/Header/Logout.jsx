"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

const Logout = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut({ redirect: false }).then(() => {
      router.replace("/login");
    });

    await fetch(`/api/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: session.email,
        refreshToken: session.refresh.token,
      }),
    });
  };

  return (
    <div>
      <button
        className="rounded-md bg-red px-2 py-1 text-xs text-white"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
