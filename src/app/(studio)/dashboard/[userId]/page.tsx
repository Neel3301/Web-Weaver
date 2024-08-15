"use client";
import Dashboard_C_Sidebar from "@/components/studio/dashboard/components/Dashboard_C_Sidebar";
import Dashboard_C_Topbar from "@/components/studio/dashboard/components/Dashboard_C_Topbar";
import Dashboard_C_Template from "@/components/studio/dashboard/Dashboard_S_Template";
import ShootingStars from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import use_Toolbox_Store from "@/store/studio/Toolbox_Store";

import { Titillium_Web } from "next/font/google";

const titillium_Web = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export default function Dashboard_Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Dashboard_Sidebar_Is_Open = use_Toolbox_Store(
    (s) => s.Dashboard_Sidebar_Is_Open
  );

  return (
    <div className="flex h-screen w-screen justify-center bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#121212] via-black to-black">
      {/* Shooting star Bg  */}
      <div className="absolute left-0 top-0 h-full w-full">
        <ShootingStars />
        <StarsBackground />
      </div>

      {/* childrens */}
      <div className={`relative flex w-screen max-w-[1560px] text-neutral-100`}>
        <div className="z-50">
          {/* w-[250px] and w-[80px]*/}
          <Dashboard_C_Sidebar />
        </div>
        <div
          className={`z-40 ${Dashboard_Sidebar_Is_Open ? "w-[calc(100vw-80px)]" : "w-[calc(100vw-250px)]"} max-w-[calc(1560px-250px)]`}
        >
          <div
            className={`h-[80px] ${Dashboard_Sidebar_Is_Open ? "w-[calc(100vw-80px)]" : "w-[calc(100vw-250px)]"}`}
          >
            <Dashboard_C_Topbar />
          </div>
          <div
            className={`h-[calc(100vh-80px)] ${Dashboard_Sidebar_Is_Open ? "w-[calc(100vw-80px)]" : "w-[calc(100vw-250px)]"}`}
          >
            <Dashboard_C_Template />
          </div>
        </div>
      </div>
    </div>
  );
}
