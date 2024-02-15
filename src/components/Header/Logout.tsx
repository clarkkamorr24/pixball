"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { signOut } from "next-auth/react";

const Logout = () => {
  const router = useRouter();
  const handleLogout = () => {
    signOut({ redirect: false }).then(() => {
      router.push("/login");
    });
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
