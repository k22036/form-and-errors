import type { Metadata } from "next";
import FormFailDone from "./FormFailDone";

export const metadata: Metadata = {
  title: "送信失敗",
  description: "フォームの送信に失敗しました。再度お試しください。",
};

export default function Page() {
  return <FormFailDone />;
}
