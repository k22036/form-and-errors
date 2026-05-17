"use client";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import ReturnToTop from "@/components/form/ReturnToTop";

export default function FormSuccessDone() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh]">
      <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-8 max-w-md w-full text-center">
        <CheckCircleOutlineIcon className="mx-auto mb-4 text-green-500 drop-shadow-lg w-14! h-14!" />
        <h1 className="text-2xl font-semibold mb-2 text-zinc-900 dark:text-zinc-100">
          送信が完了しました
        </h1>
        <p className="text-zinc-600 dark:text-zinc-400 mb-4">
          お問い合わせありがとうございます。
        </p>
        <ReturnToTop />
      </div>
    </div>
  );
}
