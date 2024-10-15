import { Loader } from "lucide-react";

const Loading = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center bg-black">
      <div className="animate-spin">
        <Loader size={48} color="#ffffff" />
      </div>
    </div>
  );
};

export default Loading;
