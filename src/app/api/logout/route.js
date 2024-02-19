import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  const headers = {
    "Content-Type": "application/json",
  };
  const url = `${process.env.NEXT_PUBLIC_PIXBALL_URL}/admin/logout`;
  let data;
  try {
    data = await axios.post(url, body, { headers }).then((data) => data.data);
  } catch (e) {
    throw new Error(e);
  }

  return NextResponse.json(data);
}
