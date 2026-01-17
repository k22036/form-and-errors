import Link from "next/link";

type PageItem = {
  href: string;
  bg: string;
  hoverBg: string;
  text: string;
  textColor: string;
  subTextColor: string;
  label: string;
};

const pages: PageItem[] = [
  {
    href: "/form/fail",
    bg: "bg-blue-50 dark:bg-blue-900",
    hoverBg: "hover:bg-blue-100 dark:hover:bg-blue-800",
    text: "フォーム（失敗）",
    textColor: "text-blue-700 dark:text-blue-200",
    subTextColor: "text-blue-400",
    label: "/form/fail",
  },
  {
    href: "/form/fail/done",
    bg: "bg-red-50 dark:bg-red-900",
    hoverBg: "hover:bg-red-100 dark:hover:bg-red-800",
    text: "送信失敗完了ページ",
    textColor: "text-red-700 dark:text-red-200",
    subTextColor: "text-red-400",
    label: "/form/fail/done",
  },
  {
    href: "/form/success",
    bg: "bg-green-50 dark:bg-green-900",
    hoverBg: "hover:bg-green-100 dark:hover:bg-green-800",
    text: "フォーム（成功）",
    textColor: "text-green-700 dark:text-green-200",
    subTextColor: "text-green-400",
    label: "/form/success",
  },
  {
    href: "/form/success/done",
    bg: "bg-emerald-50 dark:bg-emerald-900",
    hoverBg: "hover:bg-emerald-100 dark:hover:bg-emerald-800",
    text: "送信成功完了ページ",
    textColor: "text-emerald-700 dark:text-emerald-200",
    subTextColor: "text-emerald-400",
    label: "/form/success/done",
  },
  {
    href: "/error",
    bg: "bg-gray-100 dark:bg-gray-800",
    hoverBg: "hover:bg-gray-200 dark:hover:bg-gray-700",
    text: "障害ページ",
    textColor: "text-gray-700 dark:text-gray-200",
    subTextColor: "text-gray-400",
    label: "/error",
  },
];

const MainPageList: React.FC = () => {
  return (
    <section className="w-full">
      <h2 className="text-xl font-semibold mb-6 text-blue-700 dark:text-blue-300 text-center">
        主要ページ一覧
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {pages.map((page) => (
          <li key={page.href}>
            <Link href={page.href}>
              <div
                className={`p-5 rounded-lg ${page.bg} ${page.hoverBg} transition cursor-pointer shadow flex flex-col items-center`}
              >
                <span className={`${page.textColor} font-medium text-lg`}>
                  {page.text}
                </span>
                <span className={`text-xs ${page.subTextColor} mt-1`}>
                  {page.label}
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default MainPageList;
