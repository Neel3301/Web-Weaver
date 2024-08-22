"use client";

import Dashboard_C_Sidebar from "@/components/studio/dashboard/Dashboard_C_Sidebar";
import Dashboard_C_Topbar from "@/components/studio/dashboard/Dashboard_C_Topbar";
import Dashboard_S_Template from "@/components/studio/dashboard/Dashboard_S_Template";

import ShootingStars from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import use_Toolbox_Store from "@/store/studio/Toolbox_Store";

export default function Dashboard_Layout() {
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
      <div
        className={`relative flex h-screen max-h-[1020px] w-screen max-w-[1560px] text-neutral-100`}
      >
        {/* Sidebar */}
        <div className="z-50">
          {/* w-[250px] and w-[80px]*/}
          <Dashboard_C_Sidebar />
        </div>

        {/* Dashboard */}
        <div
          className={`z-40 ${Dashboard_Sidebar_Is_Open ? "w-[calc(100vw-80px)]" : "w-[calc(100vw-250px)]"} max-w-[calc(1560px-250px)]`}
        >
          {/* Topbar */}
          <div
            className={`h-[80px] ${Dashboard_Sidebar_Is_Open ? "w-[calc(100vw-80px)]" : "w-full"}`}
          >
            <Dashboard_C_Topbar />
          </div>
          {/* Templates */}
          <div
            className={`h-[calc(100vh-80px)] ${Dashboard_Sidebar_Is_Open ? "w-[calc(100vw-80px)]" : "w-full"} `}
          >
            <Dashboard_S_Template />
          </div>
        </div>
      </div>
    </div>
  );
}
