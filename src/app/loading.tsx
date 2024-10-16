import { titillium_Web } from "@/constants/studio/font_list";
import { DotSquare } from "lucide-react";

interface Loading_Props {
  msg?: string;
}

const Loading = ({ msg }: Loading_Props) => {
  return (
    <div className="flex h-screen w-screen flex-col items-center justify-center gap-[24px] bg-black">
      <div className="animate-spin">
        <DotSquare size={48} color="#ffffff" />
      </div>
      {msg && (
        <h1
          className={`text-center text-[24px] font-bold text-neutral-300 ${titillium_Web.className}`}
        >
          {msg}
        </h1>
      )}
    </div>
  );
};

export default Loading;
