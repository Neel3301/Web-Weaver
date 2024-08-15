import { use_Mockup_Store } from "@/store/studio/Mockup_Store";
import {
  BotMessageSquare,
  Flame,
  Monitor,
  Smartphone,
  Tablet,
} from "lucide-react";
import Link from "next/link";

const Editor_C_Topbar = () => {
  // using mockup store
  const [Mockup, Set_MockUP] = use_Mockup_Store((s) => [
    s.Mockup,
    s.Set_MockUP,
  ]);

  return (
    <div className="flex h-full w-full items-center justify-between border-b-[1px] border-neutral-700 p-6">
      {/* Title */}
      <Link href={`http://localhost:3000/dashboard/${""}`}>
        <div className="flex items-center justify-center gap-[8px]">
          <Flame size={32} />
          {/* bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 */}
          <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text text-[32px] font-bold text-transparent">
            Web Weaver
          </h1>
        </div>
        <div className="relative">
          <div className="absolute top-0 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
          <div className="absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="absolute top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
          <div className="absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
        </div>
      </Link>
      {/* Device Width */}
      <div className={`flex items-center justify-center gap-[24px]`}>
        <div
          className={`cursor-pointer ${Mockup == "Desktop" && "text-blue-500"}`}
          onClick={() => Set_MockUP("Desktop")}
        >
          <Monitor />
        </div>
        <div
          className={`cursor-pointer ${Mockup == "Tablet" && "text-blue-500"}`}
          onClick={() => Set_MockUP("Tablet")}
        >
          <Tablet />
        </div>
        <div
          className={`cursor-pointer ${Mockup == "Mobile" && "text-blue-500"}`}
          onClick={() => Set_MockUP("Mobile")}
        >
          <Smartphone />
        </div>
      </div>
      {/* Hire Professional */}
      <div className="flex items-center justify-center gap-[24px]">
        <div className="flex items-center justify-center gap-[12px]">
          <BotMessageSquare />
          <Link href={""}>Support</Link>
        </div>
        <button className="inline-flex animate-shimmer cursor-pointer items-center justify-center rounded-[8px] border border-neutral-700 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-[24px] py-[8px] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Publish Website
        </button>
      </div>
    </div>
  );
};

export default Editor_C_Topbar;
