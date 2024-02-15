"use client";

import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const CoreHrPage = () => {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/login");
    },
  });

  return <div>CoreHrPage</div>;
};

export default CoreHrPage;
