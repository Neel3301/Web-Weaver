"use client";

import use_Toolbox_Store from "@/store/studio/Toolbox_Store";
import { use_Div_Store } from "@/store/utils/Div_Store";
import { X } from "lucide-react";
import { Toolbox } from "./Text_Toolbox";
import { Slider } from "../ui/slider";

const Div_Toolbox = () => {
  const Div_Toolbox_On_Close = use_Toolbox_Store((s) => s.Div_Toolbox_On_Close);

  //Div Store
  const [
    Set_Height,
    Set_Width,
    Set_Pad_L,
    Set_Pad_R,
    Set_Pad_T,
    Set_Pad_B,
    Set_Bg_Color,
    Selected_Id,
    Div_Components,
  ] = use_Div_Store((s) => [
    s.Set_Height,
    s.Set_Width,
    s.Set_Pad_L,
    s.Set_Pad_R,
    s.Set_Pad_T,
    s.Set_Pad_B,
    s.Set_Bg_Color,
    s.Selected_Id,
    s.Div_Components,
  ]);

  // finding component
  const My_Component = Div_Components.find((x) => x.Id === Selected_Id);

  // Height
  const Handle_Height = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Height(Selected_Id!, value);
  };

  // Width
  const Handle_Width = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Width(Selected_Id!, value);
  };

  // pad l
  const Handle_Pad_L = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Pad_L(Selected_Id!, value);
  };
  // pad r
  const Handle_Pad_R = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Pad_R(Selected_Id!, value);
  };
  // pad t
  const Handle_Pad_T = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Pad_T(Selected_Id!, value);
  };
  // pad b
  const Handle_Pad_B = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Pad_B(Selected_Id!, value);
  };

  // bg color
  const Handle_Bg_Color = (e: any) => {
    Set_Bg_Color(Selected_Id!, e.target.value);
  };

  return (
    <div className="h-full w-full border-r-[1px] border-neutral-700">
      {/* text editor title  */}
      <div
        className={`flex h-[60px] w-full items-center justify-between border-b-[1px] border-neutral-700 px-3`}
      >
        <h2 className={`text-[24px] font-bold text-neutral-200`}>Div Editor</h2>
        <div onClick={Div_Toolbox_On_Close} className="cursor-pointer">
          <X size={20} />
        </div>
      </div>
      {/* toolkit */}
      <div className="h-[calc(100vh-80px-66px)] w-full overflow-y-scroll px-4">
        {/* Bg Color */}
        <Toolbox heading="Select Bg Color">
          <div>
            <input
              type="color"
              // value={component?.textColor}
              onInput={Handle_Bg_Color}
              className="inset-0 h-[32px] w-full border-none bg-transparent outline-none"
            />
          </div>
        </Toolbox>
        {/* Height */}
        <Toolbox
          heading="Select Height"
          handleChange={(e: any) => Handle_Height(e.target.value)}
          value={My_Component?.Height}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[
                typeof My_Component?.Height !== "number"
                  ? 0
                  : My_Component.Height,
              ]}
              max={500}
              step={1}
              value={[
                typeof My_Component?.Height !== "number"
                  ? 0
                  : My_Component.Height,
              ]}
              onValueChange={Handle_Height}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>

        {/* Width */}
        <Toolbox
          heading="Select Width"
          handleChange={(e: any) => Handle_Height(e.target.value)}
          value={My_Component?.Width}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[
                typeof My_Component?.Width !== "number"
                  ? 0
                  : My_Component.Width,
              ]}
              max={500}
              step={1}
              value={[
                typeof My_Component?.Width !== "number"
                  ? 0
                  : My_Component.Width,
              ]}
              onValueChange={Handle_Width}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>
        {/* Pad L */}
        <Toolbox
          heading="Select Padding Left"
          handleChange={(e: any) => Handle_Pad_L(e.target.value)}
          value={My_Component?.Pad_L}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[
                typeof My_Component?.Pad_L !== "number"
                  ? 0
                  : My_Component.Pad_L,
              ]}
              max={500}
              step={1}
              value={[
                typeof My_Component?.Pad_L !== "number"
                  ? 0
                  : My_Component.Pad_L,
              ]}
              onValueChange={Handle_Pad_L}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>
        {/* Pad R */}
        <Toolbox
          heading="Select Padding Right"
          handleChange={(e: any) => Handle_Pad_R(e.target.value)}
          value={My_Component?.Pad_R}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[
                typeof My_Component?.Pad_R !== "number"
                  ? 0
                  : My_Component.Pad_R,
              ]}
              max={500}
              step={1}
              value={[
                typeof My_Component?.Pad_R !== "number"
                  ? 0
                  : My_Component.Pad_R,
              ]}
              onValueChange={Handle_Pad_R}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>
        {/* Pad T */}
        <Toolbox
          heading="Select Padding Top"
          handleChange={(e: any) => Handle_Pad_T(e.target.value)}
          value={My_Component?.Pad_T}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[
                typeof My_Component?.Pad_T !== "number"
                  ? 0
                  : My_Component.Pad_T,
              ]}
              max={500}
              step={1}
              value={[
                typeof My_Component?.Pad_T !== "number"
                  ? 0
                  : My_Component.Pad_T,
              ]}
              onValueChange={Handle_Pad_T}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>
        {/* Pad B */}
        <Toolbox
          heading="Select Padding Bottom"
          handleChange={(e: any) => Handle_Pad_B(e.target.value)}
          value={My_Component?.Pad_B}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[
                typeof My_Component?.Pad_B !== "number"
                  ? 0
                  : My_Component.Pad_B,
              ]}
              max={500}
              step={1}
              value={[
                typeof My_Component?.Pad_B !== "number"
                  ? 0
                  : My_Component.Pad_B,
              ]}
              onValueChange={Handle_Pad_B}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>
      </div>
    </div>
  );
};

export default Div_Toolbox;
