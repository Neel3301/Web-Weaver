"use client";
import Text_Toolbox from "@/components/utils/Text_Toolbox";
import Editor_C_Topbar from "@/components/studio/editor/Editor_C_Topbar";
import Editor_S_Mockup from "@/components/studio/editor/Editor_S_Mockup";
import ShootingStars from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";

import { Titillium_Web } from "next/font/google";
import use_Toolbox_Store from "@/store/studio/Toolbox_Store";
import Editor_C_Sidebar from "@/components/studio/editor/Editor_C_Sidebar";
import Btn_Toolbox from "@/components/utils/Btn_Toolbox";
import Icon_Toolbox from "@/components/utils/Icon_Toolbox";
import Image_Toolbox from "@/components/utils/Image_Toolbox";
import Div_Toolbox from "@/components/utils/Div_Toolbox";

const titillium_Web = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
});

export default function Editor() {
  const Text_Toolbox_Is_Open = use_Toolbox_Store((s) => s.Text_Toolbox_Is_Open);
  const Btn_Toolbox_Is_Open = use_Toolbox_Store((s) => s.Btn_Toolbox_Is_Open);
  const Icon_Toolbox_Is_Open = use_Toolbox_Store((s) => s.Icon_Toolbox_Is_Open);
  const Image_Toolbox_Is_Open = use_Toolbox_Store(
    (s) => s.Image_Toolbox_Is_Open
  );
  const Div_Toolbox_Is_Open = use_Toolbox_Store((s) => s.Div_Toolbox_Is_Open);

  return (
    <div className="flex h-screen w-screen justify-center bg-[radial-gradient(circle_at_top_left,_var(--tw-gradient-stops))] from-[#121212] via-black to-black">
      {/* Shooting star Bg  */}
      <div className="absolute left-0 top-0 h-full w-full">
        <ShootingStars />
        <StarsBackground />
      </div>
      {/* childrens */}
      <div
        className={`${titillium_Web.className} relative w-screen max-w-[1560px] text-neutral-100`}
      >
        <div className="z-50 h-[80px] w-full">
          <Editor_C_Topbar />
        </div>
        <div className="z-50 flex">
          <div className="h-[calc(100vh-80px)] w-[250px]">
            <Text_Toolbox />
            <Btn_Toolbox />
            <Icon_Toolbox />
            <Image_Toolbox />
            <Div_Toolbox />
            {!Text_Toolbox_Is_Open &&
              !Btn_Toolbox_Is_Open &&
              !Icon_Toolbox_Is_Open &&
              !Image_Toolbox_Is_Open &&
              !Div_Toolbox_Is_Open && <Editor_C_Sidebar />}
          </div>

          <div className="h-[calc(100vh-80px)] w-[calc(100vw-250px)] max-w-[calc(1560px-250px)]">
            <Editor_S_Mockup />
          </div>
        </div>
      </div>
    </div>
  );
}
