import type { Metadata } from "next";
import FormFail from "./FormFail";

export const metadata: Metadata = {
  title: "フォーム送信（失敗パターン）",
  description: "失敗パターンのフォーム送信ページです。",
};

export default function Page() {
  return <FormFail />;
}
