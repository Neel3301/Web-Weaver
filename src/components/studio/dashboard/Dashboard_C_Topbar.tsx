import { Input } from "@/components/ui/input";
import {
  Facebook,
  Github,
  Grip,
  Instagram,
  LayoutPanelLeft,
  Linkedin,
  SearchIcon,
  Twitter,
} from "lucide-react";
import Link from "next/link";

const Dashboard_C_Topbar = () => {
  return (
    <div className="flex h-full w-full items-center justify-between gap-[24px] border-b-[1px] border-neutral-700 px-6">
      {/* <LayoutPanelLeft size={32} /> */}
      <div className="flex w-[480px] items-center overflow-hidden rounded-[8px] border-[2px] border-neutral-700 bg-black px-[12px] max-lg:w-full">
        <SearchIcon size={24} />
        <Input className="border-none" placeholder="Search Template..." />
      </div>

      <div className="flex items-center justify-center gap-[24px] max-lg:hidden">
        <button className="inline-flex animate-shimmer cursor-pointer items-center justify-center text-nowrap rounded-[8px] border border-neutral-700 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-[24px] py-[8px] font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          Hire Professional
        </button>
        <Link href={""}>
          <Twitter />
        </Link>
        <Link href={""}>
          <Linkedin />
        </Link>
        <Link href={""}>
          <Github />
        </Link>
      </div>
    </div>
  );
};

export default Dashboard_C_Topbar;
