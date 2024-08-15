"use client";
import { Button } from "@/components/ui/button";
import {
  BookA,
  BotMessageSquare,
  Camera,
  ChevronLeft,
  ChevronRight,
  Dumbbell,
  FileTerminal,
  Flame,
  Gem,
  HeartIcon,
  Hexagon,
  HomeIcon,
  Layers3,
  Leaf,
  LucideIcon,
  Pickaxe,
  Plane,
  Settings,
  ShoppingCartIcon,
} from "lucide-react";

import Link from "next/link";
import Dashboard_C_Link_Hover from "./Dashboard_C_Link_Hover";
import { useRef, useState } from "react";
import use_Toolbox_Store from "@/store/studio/Toolbox_Store";

const Dashboard_C_Sidebar = () => {
  // const [isActive, setIsActive] = useState(false);
  const ToggleBtnRef = useRef(null);

  const [isActive, Dashboard_Sidebar_Toggle] = use_Toolbox_Store((s) => [
    s.Dashboard_Sidebar_Is_Open,
    s.Dashboard_Sidebar_Toggle,
  ]);

  const handleToggle = () => {
    Dashboard_Sidebar_Toggle();
  };

  return (
    <div
      className={`${isActive && "!w-[80px]"} relative flex h-screen w-[250px] flex-col justify-between border-r-[1px] border-neutral-700 duration-300 ease-in-out`}
    >
      {/* hide show btn   */}
      <div
        ref={ToggleBtnRef}
        onClick={handleToggle}
        className={`absolute left-[250px] ${isActive && "left-[80px]"} top-[50%] flex h-[52px] w-[20px] cursor-pointer items-center justify-center rounded-br-[8px] rounded-tr-[8px] border-[1px] border-l-0 border-neutral-700`}
      >
        {isActive ? <ChevronRight /> : <ChevronLeft />}
      </div>

      {/* main sidebar  */}
      <div>
        {/* Sidebar Title */}
        <div
          className={`flex h-[80px] items-center justify-between px-4 pr-0 ${isActive && "justify-center !p-0"}`}
        >
          <Link
            href={`http://localhost:3000/dashboard/${""}`}
            className={`${isActive && "w-full"}`}
          >
            <div
              className={`flex h-full w-full items-center justify-center gap-[8px]`}
            >
              <Flame size={`${isActive ? 42 : 28}`} />
              {/* bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 */}
              <h1
                className={`bg-gradient-to-b ${isActive && "hidden"} text-nowrap from-neutral-50 to-neutral-200 bg-clip-text text-[26px] font-bold text-transparent`}
              >
                Web Weaver
              </h1>
            </div>
            <div className={`relative ${isActive && "hidden"}`}>
              <div className="absolute top-0 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
              <div className="absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
              <div className="absolute top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
              <div className="absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
            </div>
          </Link>
        </div>

        {/* scroll  */}
        <div className="h-[calc(100vh-80px-60px)] overflow-y-scroll">
          {/* Navigate  */}
          <div
            className={`border-b-[1px] border-neutral-700 p-6 pt-0 ${isActive && "flex items-center justify-center !p-0"}`}
          >
            <Sidebar_Section_Title title="Navigate" isActive={isActive} />
            <div className="my-[12px] flex flex-col gap-[24px]">
              <My_Link
                isActive={isActive}
                icon={HomeIcon}
                text="Dashboard"
                href=""
              />
              <My_Link
                isActive={isActive}
                icon={Hexagon}
                text="Your&nbsp;Template"
                href=""
              />
              <My_Link
                isActive={isActive}
                icon={ShoppingCartIcon}
                text="E-Commerce"
                href=""
              />
              <My_Link
                isActive={isActive}
                icon={HeartIcon}
                text="Health&nbsp;Care"
                href=""
              />
              <My_Link
                isActive={isActive}
                icon={Leaf}
                text="Social&nbsp;Media"
                href=""
              />
              <My_Link
                isActive={isActive}
                icon={Gem}
                text="Portfolio"
                href=""
              />
              <My_Link
                isActive={isActive}
                icon={Plane}
                text="Travelling"
                href=""
              />
              <My_Link isActive={isActive} icon={Dumbbell} text="Gym" href="" />
              <My_Link
                isActive={isActive}
                icon={Camera}
                text="Photography"
                href=""
              />
              <My_Link
                isActive={isActive}
                icon={Pickaxe}
                text="Construction"
                href=""
              />
              <My_Link
                isActive={isActive}
                icon={Layers3}
                text="Service"
                href=""
              />
              <My_Link
                isActive={isActive}
                icon={BookA}
                text="Education"
                href=""
              />
            </div>
          </div>

          {/* Help  */}
          <div
            className={`px-6 py-4 ${isActive && "flex items-center justify-center !p-0"}`}
          >
            <Sidebar_Section_Title title="Help" isActive={isActive} />
            <div className="my-[12px] flex flex-col gap-[24px]">
              <My_Link
                isActive={isActive}
                icon={FileTerminal}
                text="Documentation"
                href=""
              />
              <My_Link
                isActive={isActive}
                icon={BotMessageSquare}
                text="Support"
                href=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Account */}
      <div
        className={`flex h-[60px] items-center justify-start ${isActive && "justify-center"} gap-[18px] border-t-[1px] border-neutral-700 px-6`}
      >
        {/* <UserButton /> */}
        <Settings size={20} />
        <Link
          href={""}
          className={`text-[16px] font-semibold text-neutral-300 ${isActive && "hidden"}`}
        >
          <Dashboard_C_Link_Hover content="Manage&nbsp;Account" />
        </Link>
      </div>
    </div>
  );
};

const Sidebar_Section_Title = ({
  title,
  isActive,
}: {
  title: string;
  isActive?: boolean;
}) => {
  return (
    <p
      className={`text-[15px] font-semibold text-neutral-400 ${isActive && "hidden"}`}
    >
      {title}
    </p>
  );
};

const My_Link = ({
  href,
  text,
  icon: Icon,
  isActive,
}: {
  href: string;
  text: string;
  icon: LucideIcon;
  isActive?: boolean;
}) => {
  return (
    <div className={`group flex items-center justify-start gap-[18px]`}>
      <div className="cursor-pointer">
        <Icon className="group-hover:text-sky-400" />
      </div>
      <Link
        href={href}
        className={`text-[16px] ${isActive && "hidden"} text-white group-hover:text-sky-400`}
      >
        <Dashboard_C_Link_Hover content={text} />
      </Link>
    </div>
  );
};

export default Dashboard_C_Sidebar;
