import Link from "next/link";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-center py-24 px-6 bg-white dark:bg-zinc-900 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold mb-10 text-gray-900 dark:text-gray-100 text-center">
          テスト用ページ一覧
        </h1>

        {/* 主要ページ一覧 */}
        <section className="w-full">
          <h2 className="text-xl font-semibold mb-6 text-blue-700 dark:text-blue-300 text-center">
            主要ページ一覧
          </h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <li>
              <Link href="/form/fail">
                <div className="p-5 rounded-lg bg-blue-50 dark:bg-blue-900 hover:bg-blue-100 dark:hover:bg-blue-800 transition cursor-pointer shadow flex flex-col items-center">
                  <span className="text-blue-700 dark:text-blue-200 font-medium text-lg">
                    フォーム（失敗）
                  </span>
                  <span className="text-xs text-blue-400 mt-1">/form/fail</span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/form/fail/done">
                <div className="p-5 rounded-lg bg-red-50 dark:bg-red-900 hover:bg-red-100 dark:hover:bg-red-800 transition cursor-pointer shadow flex flex-col items-center">
                  <span className="text-red-700 dark:text-red-200 font-medium text-lg">
                    送信失敗完了ページ
                  </span>
                  <span className="text-xs text-red-400 mt-1">
                    /form/fail/done
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/form/success">
                <div className="p-5 rounded-lg bg-green-50 dark:bg-green-900 hover:bg-green-100 dark:hover:bg-green-800 transition cursor-pointer shadow flex flex-col items-center">
                  <span className="text-green-700 dark:text-green-200 font-medium text-lg">
                    フォーム（成功）
                  </span>
                  <span className="text-xs text-green-400 mt-1">
                    /form/success
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/form/success/done">
                <div className="p-5 rounded-lg bg-emerald-50 dark:bg-emerald-900 hover:bg-emerald-100 dark:hover:bg-emerald-800 transition cursor-pointer shadow flex flex-col items-center">
                  <span className="text-emerald-700 dark:text-emerald-200 font-medium text-lg">
                    送信成功完了ページ
                  </span>
                  <span className="text-xs text-emerald-400 mt-1">
                    /form/success/done
                  </span>
                </div>
              </Link>
            </li>
            <li>
              <Link href="/error">
                <div className="p-5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer shadow flex flex-col items-center">
                  <span className="text-gray-700 dark:text-gray-200 font-medium text-lg">
                    障害ページ
                  </span>
                  <span className="text-xs text-gray-400 mt-1">/error</span>
                </div>
              </Link>
            </li>
          </ul>
        </section>

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
      </main>
    </div>
  );
}
