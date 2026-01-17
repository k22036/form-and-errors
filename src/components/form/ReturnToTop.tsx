import Link from "next/link";

const ReturnToTop: React.FC = () => {
  return (
    <Link
      href="/"
      className="inline-block px-6 py-2 bg-blue-600 dark:bg-blue-500 text-white rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-600 transition"
    >
      トップへ戻る
    </Link>
  );
};

export default ReturnToTop;
