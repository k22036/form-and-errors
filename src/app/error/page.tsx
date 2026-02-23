import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "障害発生",
  description:
    "現在、システムに障害が発生しています。復旧までしばらくお待ちください。",
};

export default function ErrorPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#fff0f0]">
      <h1 className="text-[#d32f2f] text-5xl mb-4 font-bold">障害発生</h1>
      <p className="text-[#333] text-lg mb-8 text-center">
        現在、システムに障害が発生しています。
        <br />
        ご迷惑をおかけして申し訳ありません。
        <br />
        復旧までしばらくお待ちください。
      </p>
      <div className="text-6xl">🛠️</div>
    </main>
  );
}
