"use client";
// Icon
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
  Github,
  HeartIcon,
  Hexagon,
  HomeIcon,
  Layers3,
  Leaf,
  Linkedin,
  LucideIcon,
  Pickaxe,
  Plane,
  Settings,
  ShoppingCartIcon,
  Twitter,
} from "lucide-react";

import Link from "next/link";

import Dashboard_C_Link_Hover from "./Dashboard_C_Link_Hover";

import use_Toolbox_Store from "@/store/studio/Toolbox_Store";

const Dashboard_C_Sidebar = () => {
  // Using Toolbox Store For Handling Sidebar
  const [Dashboard_Sidebar_Is_Open, Dashboard_Sidebar_Toggle] =
    use_Toolbox_Store((s) => [
      s.Dashboard_Sidebar_Is_Open,
      s.Dashboard_Sidebar_Toggle,
    ]);

  // Handling Sidebar Toggle
  const handleToggle = () => {
    Dashboard_Sidebar_Toggle();
  };

  return (
    <div
      className={`${Dashboard_Sidebar_Is_Open && "!w-[80px]"} relative flex h-screen w-[250px] flex-col justify-between border-r-[1px] border-neutral-700 duration-300 ease-in-out`}
    >
      {/* Hide Show Btn */}
      <div
        onClick={handleToggle}
        className={`absolute left-[250px] ${Dashboard_Sidebar_Is_Open && "left-[80px]"} top-[50%] flex h-[52px] w-[20px] cursor-pointer items-center justify-center rounded-br-[8px] rounded-tr-[8px] border-[1px] border-l-0 border-neutral-700`}
      >
        {Dashboard_Sidebar_Is_Open ? <ChevronRight /> : <ChevronLeft />}
      </div>

      {/* Main sidebar  */}
      <div>
        {/* Sidebar Title */}
        <div
          className={`flex h-[80px] items-center justify-between px-4 pr-0 ${Dashboard_Sidebar_Is_Open && "justify-center !p-0"}`}
        >
          <Link
            href={`http://localhost:3000/dashboard/${""}`}
            className={`${Dashboard_Sidebar_Is_Open && "w-full"}`}
          >
            <div
              className={`flex h-full w-full items-center justify-center gap-[8px]`}
            >
              <Flame size={`${Dashboard_Sidebar_Is_Open ? 42 : 28}`} />
              {/* bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 */}
              <h1
                className={`bg-gradient-to-b ${Dashboard_Sidebar_Is_Open && "hidden"} text-nowrap from-neutral-50 to-neutral-200 bg-clip-text text-[26px] font-bold text-transparent`}
              >
                Web Weaver
              </h1>
            </div>
            <div
              className={`relative ${Dashboard_Sidebar_Is_Open && "hidden"}`}
            >
              <div className="absolute top-0 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
              <div className="absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
              <div className="absolute top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
              <div className="absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
            </div>
          </Link>
        </div>

        {/* Scroll  */}
        <div className="h-[calc(100vh-80px-60px)] overflow-y-scroll">
          {/* Navigate  */}
          <div
            className={`border-b-[1px] border-neutral-700 p-6 pt-0 ${Dashboard_Sidebar_Is_Open && "flex items-center justify-center !p-0"}`}
          >
            <Sidebar_Section_Title
              title="Navigate"
              Dashboard_Sidebar_Is_Open={Dashboard_Sidebar_Is_Open}
            />
            <div className="my-[12px] flex flex-col gap-[24px]">
              <My_Link
                Dashboard_Sidebar_Is_Open={Dashboard_Sidebar_Is_Open}
                icon={HomeIcon}
                text="Dashboard"
                href=""
              />
              <My_Link
                Dashboard_Sidebar_Is_Open={Dashboard_Sidebar_Is_Open}
                icon={Hexagon}
                text="Your&nbsp;Template"
                href=""
              />
              <My_Link
                Dashboard_Sidebar_Is_Open={Dashboard_Sidebar_Is_Open}
                icon={ShoppingCartIcon}
                text="E-Commerce"
                href=""
              />
              <My_Link
                Dashboard_Sidebar_Is_Open={Dashboard_Sidebar_Is_Open}
                icon={HeartIcon}
                text="Health&nbsp;Care"
                href=""
              />
              <My_Link
                Dashboard_Sidebar_Is_Open={Dashboard_Sidebar_Is_Open}
                icon={Leaf}
                text="Social&nbsp;Media"
                href=""
              />
              <My_Link
                Dashboard_Sidebar_Is_Open={Dashboard_Sidebar_Is_Open}
                icon={Gem}
                text="Portfolio"
                href=""
              />
              <My_Link
                Dashboard_Sidebar_Is_Open={Dashboard_Sidebar_Is_Open}
                icon={Plane}
                text="Travelling"
                href=""
              />
              <My_Link
                Dashboard_Sidebar_Is_Open={Dashboard_Sidebar_Is_Open}
                icon={Dumbbell}
                text="Gym"
                href=""
              />
              <My_Link
                Dashboard_Sidebar_Is_Open={Dashboard_Sidebar_Is_Open}
                icon={Camera}
                text="Photography"
                href=""
              />
              <My_Link
                Dashboard_Sidebar_Is_Open={Dashboard_Sidebar_Is_Open}
                icon={Pickaxe}
                text="Construction"
                href=""
              />
              <My_Link
                Dashboard_Sidebar_Is_Open={Dashboard_Sidebar_Is_Open}
                icon={Layers3}
                text="Service"
                href=""
              />
              <My_Link
                Dashboard_Sidebar_Is_Open={Dashboard_Sidebar_Is_Open}
                icon={BookA}
                text="Education"
                href=""
              />
            </div>
          </div>

          {/* Help  */}
          <div
            className={`border-b-[1px] border-neutral-700 px-6 py-4 ${Dashboard_Sidebar_Is_Open && "flex items-center justify-center !p-0"}`}
          >
            <Sidebar_Section_Title
              title="Help"
              Dashboard_Sidebar_Is_Open={Dashboard_Sidebar_Is_Open}
            />
            <div className="my-[12px] flex flex-col gap-[24px]">
              <My_Link
                Dashboard_Sidebar_Is_Open={Dashboard_Sidebar_Is_Open}
                icon={FileTerminal}
                text="Documentation"
                href=""
              />
              <My_Link
                Dashboard_Sidebar_Is_Open={Dashboard_Sidebar_Is_Open}
                icon={BotMessageSquare}
                text="Support"
                href=""
              />
            </div>
          </div>

          {/* Social Links Visible at 1020px [lg] */}
          <div
            className={`px-6 py-4 ${Dashboard_Sidebar_Is_Open && "flex items-center justify-center !p-0"}`}
          >
            <Sidebar_Section_Title
              title="Social Links"
              Dashboard_Sidebar_Is_Open={Dashboard_Sidebar_Is_Open}
            />
            <div className="my-[12px] flex flex-col gap-[24px]">
              <My_Link
                Dashboard_Sidebar_Is_Open={Dashboard_Sidebar_Is_Open}
                icon={Twitter}
                text="Twitter"
                href=""
              />
              <My_Link
                Dashboard_Sidebar_Is_Open={Dashboard_Sidebar_Is_Open}
                icon={Linkedin}
                text="Linkedin"
                href=""
              />
              <My_Link
                Dashboard_Sidebar_Is_Open={Dashboard_Sidebar_Is_Open}
                icon={Github}
                text="Github"
                href=""
              />
            </div>
          </div>
          {/* Hire Professional */}
        </div>
      </div>

      {/* Account */}
      <div
        className={`flex h-[60px] items-center justify-start ${Dashboard_Sidebar_Is_Open && "justify-center"} gap-[18px] border-t-[1px] border-neutral-700 px-6`}
      >
        {/* <UserButton /> */}
        <Settings size={20} />
        <Link
          href={""}
          className={`text-[16px] font-semibold text-neutral-300 ${Dashboard_Sidebar_Is_Open && "hidden"}`}
        >
          <Dashboard_C_Link_Hover content="Manage&nbsp;Account" />
        </Link>
      </div>
    </div>
  );
};

const Sidebar_Section_Title = ({
  title,
  Dashboard_Sidebar_Is_Open,
}: {
  title: string;
  Dashboard_Sidebar_Is_Open?: boolean;
}) => {
  return (
    <p
      className={`text-[15px] font-semibold text-neutral-400 ${Dashboard_Sidebar_Is_Open && "hidden"}`}
    >
      {title}
    </p>
  );
};

const My_Link = ({
  href,
  text,
  icon: Icon,
  Dashboard_Sidebar_Is_Open,
}: {
  href: string;
  text: string;
  icon: LucideIcon;
  Dashboard_Sidebar_Is_Open?: boolean;
}) => {
  return (
    <div className={`group flex items-center justify-start gap-[18px]`}>
      <div className="cursor-pointer">
        <Icon className="group-hover:text-sky-400" />
      </div>
      <Link
        href={href}
        className={`text-[16px] ${Dashboard_Sidebar_Is_Open && "hidden"} text-white group-hover:text-sky-400`}
      >
        <Dashboard_C_Link_Hover content={text} />
      </Link>
    </div>
  );
};

export default Dashboard_C_Sidebar;
