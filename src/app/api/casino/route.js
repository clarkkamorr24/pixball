import { authOptions } from "@/lib";
import { getServerSession } from "next-auth/next";
import { NextResponse } from "next/server";

export async function GET(req, res) {
  const session = await getServerSession(authOptions);
  const token = session?.access.token;
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  const url = `${process.env.NEXT_PUBLIC_PIXBALL_URL}/casino`;

  try {
    const res = await fetch(url, { headers: headers });

    const users = await res.json();
    return NextResponse.json({ users });
  } catch (err) {
    NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req, res) {
  const body = await req.json();
  const session = await getServerSession(authOptions);
  const token = session?.access.token;
  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
  const url = `${process.env.NEXT_PUBLIC_PIXBALL_URL}/casino/create`;

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    });
    console.log("Res", res);
    if (!res.ok) {
      const errorData = await res.json();
      const { code, message } = errorData;
      return NextResponse.json({ message: message }, { status: code });
    }

    return NextResponse.json(
      { message: "Successfully created Data" },
      { status: 200 },
    );
  } catch (err) {
    NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
