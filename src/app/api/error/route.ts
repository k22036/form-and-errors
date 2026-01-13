import { NextResponse } from "next/server";
import { errorDefinitions } from "@/lib/constants/errors";

export async function GET(request: Request) {
  // クエリパラメータでstatusを受け取る
  const { searchParams } = new URL(request.url);
  const status = Number(searchParams.get("status")) || undefined;

  // 定義から該当エラーを取得
  const errorDef = errorDefinitions.find((e) => e.status === status);

  if (errorDef) {
    return NextResponse.json(
      { error: errorDef.error, message: errorDef.message },
      { status: errorDef.status },
    );
  } else {
    // 未定義の場合
    return NextResponse.json(
      { error: "Unknown Error", message: "未定義のエラーです" },
      { status: 500 },
    );
  }
}
