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
import { use_Dashboard_Store } from "@/store/studio/Dashboard_Store";
import { UserButton } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";
import { ReactNode, useEffect, useMemo } from "react";

const Dashboard_C_Sidebar = () => {
  // Using Toolbox Store For Handling Sidebar
  const Dashboard_Sidebar_Is_Open = use_Toolbox_Store(
    (s) => s.Dashboard_Sidebar_Is_Open
  );
  const Dashboard_Sidebar_Toggle = use_Toolbox_Store(
    (s) => s.Dashboard_Sidebar_Toggle
  );

  // Handling Sidebar Toggle
  const handleToggle = () => {
    Dashboard_Sidebar_Toggle();
  };

  // Handling Dashboard State
  const searchParams = useSearchParams();
  const Set_ActiveMenu = use_Dashboard_Store((s) => s.Set_ActiveMenu);

  const searchQuery = searchParams.get("navigateTo") || "Dashboard";

  useEffect(() => {
    Set_ActiveMenu(searchQuery);
  }, [searchQuery, Set_ActiveMenu]);

  // Navigation links
  const navLinks = useMemo(
    () => [
      { icon: HomeIcon, text: "Dashboard", href: "?navigateTo=Dashboard" },
      {
        icon: Hexagon,
        text: "Your-Template",
        href: "?navigateTo=Your-Template",
      },
      {
        icon: ShoppingCartIcon,
        text: "E-Commerce",
        href: "?navigateTo=E-Commerce",
      },
      { icon: HeartIcon, text: "Health-Care", href: "?navigateTo=Health-Care" },
      { icon: Leaf, text: "Social-Media", href: "?navigateTo=Social-Media" },
      { icon: Gem, text: "Portfolio", href: "?navigateTo=Portfolio" },
      { icon: Plane, text: "Travelling", href: "?navigateTo=Travelling" },
      { icon: Dumbbell, text: "Gym", href: "?navigateTo=Gym" },
      { icon: Camera, text: "Photography", href: "?navigateTo=Photography" },
      { icon: Pickaxe, text: "Construction", href: "?navigateTo=Construction" },
      { icon: Layers3, text: "Service", href: "?navigateTo=Service" },
      { icon: BookA, text: "Education", href: "?navigateTo=Education" },
    ],
    []
  );

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
            href={``}
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

          <SidebarSection title="Navigate" isOpen={Dashboard_Sidebar_Is_Open}>
            {navLinks.map(({ icon, text, href }) => (
              <My_Link
                key={text}
                icon={icon}
                text={text}
                href={href}
                isOpen={Dashboard_Sidebar_Is_Open}
              />
            ))}
          </SidebarSection>

          {/* Help  */}

          <SidebarSection title="Help" isOpen={Dashboard_Sidebar_Is_Open}>
            <My_Link
              icon={FileTerminal}
              text="Documentation"
              isOpen={Dashboard_Sidebar_Is_Open}
            />
            <My_Link
              icon={BotMessageSquare}
              text="Support"
              isOpen={Dashboard_Sidebar_Is_Open}
            />
          </SidebarSection>

          <SidebarSection
            title="Social Links"
            isOpen={Dashboard_Sidebar_Is_Open}
          >
            <My_Link
              icon={Twitter}
              text="Twitter"
              isOpen={Dashboard_Sidebar_Is_Open}
            />
            <My_Link
              icon={Linkedin}
              text="Linkedin"
              isOpen={Dashboard_Sidebar_Is_Open}
            />
            <My_Link
              icon={Github}
              text="Github"
              isOpen={Dashboard_Sidebar_Is_Open}
            />
          </SidebarSection>

          {/* Hire Professional */}
        </div>
      </div>

      {/* Account */}
      <div
        className={`flex h-[60px] items-center justify-start ${Dashboard_Sidebar_Is_Open && "justify-center"} gap-[18px] border-t-[1px] border-neutral-700 px-6`}
      >
        {/* <UserButton /> */}
        {/* <Settings size={20} /> */}
        <UserButton />
        <Link
          href={""}
          className={`text-[16px] font-semibold text-neutral-300 ${Dashboard_Sidebar_Is_Open && "hidden"}`}
        >
          <Dashboard_C_Link_Hover content="Manage-Account" />
        </Link>
      </div>
    </div>
  );
};

// Sidebar Section Title
const SidebarSection = ({
  title,
  isOpen,
  children,
}: {
  title: string;
  isOpen: boolean;
  children: ReactNode;
}) => (
  <div
    className={`border-b border-neutral-700 p-6 ${isOpen && "items-center"}`}
  >
    {!isOpen && (
      <p className="text-[15px] font-semibold text-neutral-400">{title}</p>
    )}
    <div className={`my-[12px] flex flex-col gap-[24px]`}>{children}</div>
  </div>
);

// Link Component
const My_Link = ({ icon: Icon, text, href = "#", isOpen }: any) => {
  const ActiveMenu = use_Dashboard_Store((s) => s.ActiveMenu);
  const Set_ActiveMenu = use_Dashboard_Store((s) => s.Set_ActiveMenu);
  const Set_SearchQuery = use_Dashboard_Store((s) => s.Set_SearchQuery);

  const handleClick = () => {
    Set_ActiveMenu(text);
    Set_SearchQuery("");
  };

  return (
    <div className="group flex cursor-pointer items-center gap-[18px]">
      <Icon
        onClick={handleClick}
        className={`group-hover:text-sky-400 ${ActiveMenu === text ? "text-sky-500" : ""}`}
      />
      {!isOpen && (
        <Link
          href={href}
          onClick={handleClick}
          className={`text-[16px] group-hover:text-sky-400 ${ActiveMenu === text ? "text-sky-500" : ""}`}
        >
          <Dashboard_C_Link_Hover content={text} />
        </Link>
      )}
    </div>
  );
};

export default Dashboard_C_Sidebar;
