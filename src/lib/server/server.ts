import "server-only";
import type { InquiryFormValues } from "../types/form";

export const sendToServer = async (data: InquiryFormValues) => {
  // ここでサーバーサイドの処理を実装（例: データベース保存、メール送信など）
  console.log("Received data on server:", data);
};
