import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function GET(request) {
  const session = await getServerSession(authOptions);
  const token = session?.access.token;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const url = `${process.env.NEXT_PUBLIC_PIXBALL_URL}/casino`;

  const res = await fetch(url, { headers: headers });

  const users = await res.json();

  return NextResponse.json({ users });
}
