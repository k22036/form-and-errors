import CircularProgress from "@mui/material/CircularProgress";

const Loading: React.FC = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-black">
      <div className="flex flex-col items-center">
        <CircularProgress color="primary" size={48} sx={{ mb: 2 }} />
        <span className="text-gray-700 dark:text-gray-200 text-lg font-medium">
          読み込み中...
        </span>
      </div>
    </div>
  );
};

export default Loading;
