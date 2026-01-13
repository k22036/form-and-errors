import { NextResponse } from "next/server";

export async function GET() {
  // 60秒待機
  await new Promise((resolve) => setTimeout(resolve, 60000));
  return NextResponse.json({ message: "Timeout completed" });
}
