import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

const Editor_C_Desktop_Mockup = () => {
  return (
    <div className="h-full min-h-[500px] w-full max-w-[1380px] rounded-[12px] border-[1px] border-neutral-700 bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#121212] via-black to-black">
      {/* top  */}
      <div
        className={`flex h-[70px] items-center justify-between gap-[24px] border-b-[1px] border-neutral-700 px-[16px]`}
      >
        {/* 3 dots  */}
        <div className={`flex items-center justify-center gap-[12px]`}>
          <div className={`h-[16px] w-[16px] rounded-full bg-red-400`}></div>
          <div className={`h-[16px] w-[16px] rounded-full bg-yellow-400`}></div>
          <div className={`h-[16px] w-[16px] rounded-full bg-green-400`}></div>
        </div>
        {/* flex  */}
        <div className={`flex-1`} />
        {/* url  */}
        <div className="flex w-[480px] items-center overflow-hidden rounded-[8px] border-[2px] border-neutral-700 bg-black px-[12px]">
          <SearchIcon size={24} />
          <Input
            className="border-none"
            placeholder="www.Web Weaver.com/t1"
            readOnly
          />
        </div>
        {/* flex  */}
        <div className={`flex-1`} />
      </div>
      <div className="w-full overflow-x-hidden overflow-y-scroll">
        Templates
      </div>
    </div>
  );
};

export default Editor_C_Desktop_Mockup;
