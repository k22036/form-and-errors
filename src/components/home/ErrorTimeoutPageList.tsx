import Link from "next/link";
import { errorStatuses } from "@/lib/constants/errors";

const errorLinks = errorStatuses.map((status) => ({
  href: `/api/error?status=${status}`,
  label: `エラーコード ${status} ページ`,
  description: `/api/error?status=${status}`,
}));

const timeoutLink = {
  href: "/api/timeout",
  label: "タイムアウトページ",
  description: "/api/timeout",
};

const ErrorTimeoutPageList: React.FC = () => (
  <section className="w-full mt-12">
    <h2 className="text-xl font-semibold mb-6 text-blue-700 dark:text-blue-300 text-center">
      エラー＆タイムアウトページ一覧
    </h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {errorLinks.map((link) => (
        <li key={link.href}>
          <Link href={link.href}>
            <div className="p-5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer shadow flex flex-col items-center">
              <span className="text-gray-800 dark:text-gray-100 font-medium text-lg">
                {link.label}
              </span>
              <span className="text-xs text-gray-400 mt-1">
                {link.description}
              </span>
            </div>
          </Link>
        </li>
      ))}
      <li>
        <Link href={timeoutLink.href}>
          <div className="p-5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer shadow flex flex-col items-center">
            <span className="text-gray-800 dark:text-gray-100 font-medium text-lg">
              {timeoutLink.label}
            </span>
            <span className="text-xs text-gray-400 mt-1">
              {timeoutLink.description}
            </span>
          </div>
        </Link>
      </li>
    </ul>
  </section>
);

export default ErrorTimeoutPageList;
