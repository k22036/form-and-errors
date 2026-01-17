import Link from "next/link";

type SuccessLink = {
  href: string;
  label: string;
  description: string;
};

const successLinks: SuccessLink[] = [
  {
    href: "/form/success?redirect=true",
    label: "リダイレクトあり",
    description: "/form/success?redirect=true",
  },
  {
    href: "/form/success?redirect=false",
    label: "リダイレクトなし",
    description: "/form/success?redirect=false",
  },
];

const FormSuccessList: React.FC = () => (
  <section className="w-full mt-12">
    <h2 className="text-xl font-semibold mb-6 text-blue-700 dark:text-blue-300 text-center">
      フォーム（成功）用リンク
    </h2>
    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {successLinks.map((link) => (
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
    </ul>
  </section>
);

export default FormSuccessList;
