import { NextResponse } from "next/server";
import { createLoader, parseAsInteger } from "nuqs/server";
import { errorDefinitions } from "@/lib/constants/errors";

const errorSearchParams = {
  status: parseAsInteger,
};

const loadRequestParams = createLoader(errorSearchParams);

export async function GET(request: Request) {
  // 未定義かの判定のために初期値はnull
  const { status } = loadRequestParams(request);

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
