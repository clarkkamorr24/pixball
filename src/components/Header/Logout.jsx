"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui";

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
      <Button label="Logout" className="bg-red py-1" onClick={handleLogout} />
    </div>
  );
};

export default Logout;
