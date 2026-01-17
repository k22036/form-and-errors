import Link from "next/link";
import MainPageList from "@/components/home/MainPageList";
import { errorStatuses } from "@/lib/constants/errors";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-24 px-6 bg-white dark:bg-zinc-900 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100 text-center">
          テスト用ページ一覧
        </h1>

        {/* 主要ページ一覧 */}
        <MainPageList />

        {/* フォーム（失敗）用リンク */}
        <section className="w-full mt-12">
          <h2 className="text-xl font-semibold mb-6 text-blue-700 dark:text-blue-300 text-center">
            フォーム（失敗）用リンク
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li>
              <Link href="/form/fail?redirect=true">
                <div className="p-5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer shadow flex flex-col items-center">
                  <span className="text-gray-800 dark:text-gray-100 font-medium text-lg">
                    リダイレクトあり
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    /form/fail?redirect=true
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/form/fail?redirect=false">
                <div className="p-5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer shadow flex flex-col items-center">
                  <span className="text-gray-800 dark:text-gray-100 font-medium text-lg">
                    リダイレクトなし
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    /form/fail?redirect=false
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </section>

        {/* フォーム（成功）用リンク */}
        <section className="w-full mt-12">
          <h2 className="text-xl font-semibold mb-6 text-blue-700 dark:text-blue-300 text-center">
            フォーム（成功）用リンク
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li>
              <Link href="/form/success?redirect=true">
                <div className="p-5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer shadow flex flex-col items-center">
                  <span className="text-gray-800 dark:text-gray-100 font-medium text-lg">
                    リダイレクトあり
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    /form/success?redirect=true
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/form/success?redirect=false">
                <div className="p-5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer shadow flex flex-col items-center">
                  <span className="text-gray-800 dark:text-gray-100 font-medium text-lg">
                    リダイレクトなし
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    /form/success?redirect=false
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </section>

        {/* エラー&タイムアウトページ一覧 */}
        <section className="w-full mt-12">
          <h2 className="text-xl font-semibold mb-6 text-blue-700 dark:text-blue-300 text-center">
            エラー＆タイムアウトページ一覧
          </h2>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {errorStatuses.map((status) => (
              <li key={status}>
                <Link href={`/api/error?status=${status}`}>
                  <div className="p-5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer shadow flex flex-col items-center">
                    <span className="text-gray-800 dark:text-gray-100 font-medium text-lg">
                      エラーコード {status} ページ
                    </span>
                    <span className="text-xs text-gray-400 mt-1">
                      /api/error?status={status}
                    </span>
                  </div>
                </Link>
              </li>
            ))}
            <li>
              <Link href="/api/timeout">
                <div className="p-5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer shadow flex flex-col items-center">
                  <span className="text-gray-800 dark:text-gray-100 font-medium text-lg">
                    タイムアウトページ
                  </span>
                  <span className="text-xs text-gray-400 mt-1">
                    /api/timeout
                  </span>
                </div>
              </Link>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
