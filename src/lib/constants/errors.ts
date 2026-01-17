// statusとerrorの定義
export const errorDefinitions = [
  // 400系
  { status: 400, error: "Bad Request", message: "リクエストが不正です" },
  { status: 401, error: "Unauthorized", message: "認証が必要です" },
  { status: 403, error: "Forbidden", message: "アクセスが禁止されています" },
  { status: 404, error: "Not Found", message: "リソースが見つかりません" },
  {
    status: 405,
    error: "Method Not Allowed",
    message: "許可されていないメソッドです",
  },
  {
    status: 429,
    error: "Too Many Requests",
    message: "リクエストが多すぎます",
  },
  // 500系
  {
    status: 500,
    error: "Internal Server Error",
    message: "サーバー内部でエラーが発生しました",
  },
  {
    status: 502,
    error: "Bad Gateway",
    message: "不正なゲートウェイです",
  },
  {
    status: 503,
    error: "Service Unavailable",
    message: "サービスは現在利用できません",
  },
] as const;

export const errorStatuses = errorDefinitions.map((e) => e.status);
