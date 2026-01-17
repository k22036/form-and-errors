import ErrorTimeoutPageList from "@/components/home/ErrorTimeoutPageList";
import FormFailList from "@/components/home/FormFailList";
import FormSuccessList from "@/components/home/FormSuccessList";
import MainPageList from "@/components/home/MainPageList";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex w-full max-w-3xl flex-col items-center justify-center py-24 px-6 bg-white dark:bg-zinc-900 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100 text-center">
          テスト用ページ一覧
        </h1>

        {/* 主要ページ一覧 */}
        <MainPageList />

        {/* フォーム（失敗）用リンク */}
        <FormFailList />

        {/* フォーム（成功）用リンク */}
        <FormSuccessList />

        {/* エラー&タイムアウトページ一覧 */}
        <ErrorTimeoutPageList />
      </main>
    </div>
  );
}
