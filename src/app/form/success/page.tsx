import type { Metadata } from "next";
import FormSuccess from "./FormSuccess";

export const metadata: Metadata = {
  title: "フォーム送信（成功パターン）",
  description: "成功パターンのフォーム送信ページです。",
};

export default function Page() {
  return <FormSuccess />;
}
