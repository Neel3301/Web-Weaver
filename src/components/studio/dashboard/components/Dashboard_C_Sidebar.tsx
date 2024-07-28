import { Button } from "@/components/ui/button";
import {
  BookA,
  BotMessageSquare,
  Camera,
  Dumbbell,
  EggFried,
  FileTerminal,
  Flame,
  Gem,
  HeartIcon,
  Hexagon,
  HomeIcon,
  Layers3,
  Leaf,
  LucideIcon,
  Minimize,
  Minimize2,
  Pickaxe,
  Plane,
  Settings,
  ShoppingCartIcon,
  Terminal,
  Webhook,
} from "lucide-react";

import Link from "next/link";
import Dashboard_C_Link_Hover from "./Dashboard_C_Link_Hover";

const Dashboard_C_Sidebar = () => {
  return (
    <div
      className={`flex h-screen w-[250px] flex-col justify-between border-r-[1px] border-neutral-700`}
    >
      <div>
        {/* Sidebar Title */}
        <div className="flex h-[80px] items-center justify-between px-4 pr-0">
          <Link href={`http://localhost:3000/dashboard/${""}`}>
            <div className="flex items-center justify-center gap-[8px]">
              <Flame size={32} />
              {/* bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 */}
              <h1 className="bg-gradient-to-b from-neutral-50 to-neutral-200 bg-clip-text text-[32px] font-bold text-transparent">
                Glimmer
              </h1>
            </div>
            <div className="relative">
              <div className="absolute top-0 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
              <div className="absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
              <div className="absolute top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
              <div className="absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
            </div>
          </Link>
          {/* Collapse */}
          {/* <Button className="cursor-pointer">
            <Minimize2 size={20} strokeWidth={3} />
          </Button> */}
        </div>

        {/* scroll  */}
        <div className="h-[calc(100vh-80px-60px)] overflow-y-scroll">
          {/* Navigate  */}
          <div className="border-b-[1px] border-neutral-700 p-6 pt-0">
            <Sidebar_Section_Title title="Navigate" />
            <div className="mt-[24px] flex flex-col gap-[24px]">
              <My_Link icon={HomeIcon} text="Dashboard" href="" />
              <My_Link icon={Hexagon} text="Your&nbsp;Template" href="" />
              <My_Link icon={ShoppingCartIcon} text="E-Commerce" href="" />
              <My_Link icon={HeartIcon} text="Health&nbsp;Care" href="" />
              <My_Link icon={Leaf} text="Social&nbsp;Media" href="" />
              <My_Link icon={Gem} text="Portfolio" href="" />
              <My_Link icon={Plane} text="Travelling" href="" />
              <My_Link icon={Dumbbell} text="Gym" href="" />
              <My_Link icon={Camera} text="Photography" href="" />
              <My_Link icon={Pickaxe} text="Construction" href="" />
              <My_Link icon={Layers3} text="Service" href="" />
              <My_Link icon={BookA} text="Education" href="" />
            </div>
          </div>

          {/* Help  */}
          <div className="px-6 py-4">
            <Sidebar_Section_Title title="Help" />
            <div className="mt-[24px] flex flex-col gap-[24px]">
              <My_Link icon={FileTerminal} text="Documentation" href="" />
              <My_Link icon={BotMessageSquare} text="Support" href="" />
            </div>
          </div>
        </div>
      </div>

      {/* Account */}
      <div className="flex h-[60px] items-center justify-start gap-[18px] border-t-[1px] border-neutral-700 px-6">
        {/* <UserButton /> */}
        <Settings size={20} />
        <Link href={""} className="text-[16px] font-semibold text-neutral-300">
          <Dashboard_C_Link_Hover content="Manage&nbsp;Account" />
        </Link>
      </div>
    </div>
  );
};

const Sidebar_Section_Title = ({ title }: { title: string }) => {
  return <p className="text-[15px] font-semibold text-neutral-400">{title}</p>;
};

const My_Link = ({
  href,
  text,
  icon: Icon,
}: {
  href: string;
  text: string;
  icon: LucideIcon;
}) => {
  return (
    <div className="group flex items-center justify-start gap-[18px]">
      <Icon className="group-hover:text-sky-400" />
      <Link
        href={href}
        className="text-[16px] text-white group-hover:text-sky-400"
      >
        <Dashboard_C_Link_Hover content={text} />
      </Link>
    </div>
  );
};

export default Dashboard_C_Sidebar;
