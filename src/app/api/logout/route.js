import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request, res) {
  console.log("Res", res);
  try {
    const body = await request.json();
    const url = `${process.env.NEXT_PUBLIC_PIXBALL_URL}/admin/logout`;
    const headers = {
      "Content-Type": "application/json",
    };

    const response = await axios.post(url, body, { headers });
    console.log("user", response.data);

    return NextResponse.json(
      { message: "Successfully Logout" },
      { status: 200 },
    );
  } catch (error) {
    const errorMessage =
      error.response?.data?.message || "Internal Server Error";
    const statusCode = error.response?.status || 500;

    return NextResponse.json({ error: errorMessage }, { status: statusCode });
  }
}
