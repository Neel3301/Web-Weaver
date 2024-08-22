import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-neutral-300">
      <div className="animate-spin">
        <Loader size={48} />
      </div>
    </div>
  );
};

export default Loading;
