import type { Metadata } from "next";
import FormSuccessDone from "./FormSuccessDone";

export const metadata: Metadata = {
  title: "送信完了",
  description: "フォームの送信が完了しました。お問い合わせありがとうございます。",
};

export default function Page() {
  return <FormSuccessDone />;
}
