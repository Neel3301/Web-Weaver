"use client";

import use_Toolbox_Store from "@/store/studio/Toolbox_Store";
import { use_Div_Store } from "@/store/utils/Div_Store";
import { X } from "lucide-react";
import { Toolbox } from "./Text_Toolbox";
import { Slider } from "../ui/slider";
import { useEffect, useState } from "react";
import { sendMessageToIframe } from "@/hooks/studio/Send_Msg_To_Iframe";

const Div_Toolbox = () => {
  // Import From Toolbox store
  const Div_Toolbox_On_Close = use_Toolbox_Store((s) => s.Div_Toolbox_On_Close);
  const Div_Toolbox_On_Open = use_Toolbox_Store((s) => s.Div_Toolbox_On_Open);
  const Div_Toolbox_Is_Open = use_Toolbox_Store((s) => s.Div_Toolbox_Is_Open);

  // Import From Div store
  const Selected_Id = use_Div_Store((s) => s.Selected_Id);
  const Set_Selected_Id = use_Div_Store((s) => s.Set_Selected_Id);

  // Local State
  const [Height, Set_Height] = useState<number>();
  const [Width, Set_Width] = useState<number>();
  const [Pad_L, Set_Pad_L] = useState<number>();
  const [Pad_R, Set_Pad_R] = useState<number>();
  const [Pad_T, Set_Pad_T] = useState<number>();
  const [Pad_B, Set_Pad_B] = useState<number>();
  const [Bg_Color, Set_Bg_Color] = useState<string>();

  // Height
  const Handle_Height = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Height(value);
    sendMessageToIframe({
      type: "UPDATE_DIV_COMPONENT_HEIGHT",
      id: Selected_Id,
      height: value,
    });
  };
  // Width
  const Handle_Width = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Width(value);
    sendMessageToIframe({
      type: "UPDATE_DIV_COMPONENT_WIDTH",
      id: Selected_Id,
      width: value,
    });
  };
  // pad l
  const Handle_Pad_L = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Pad_L(value);
    sendMessageToIframe({
      type: "UPDATE_DIV_COMPONENT_PAD_L",
      id: Selected_Id,
      padL: value,
    });
  };
  // pad r
  const Handle_Pad_R = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Pad_R(value);
    sendMessageToIframe({
      type: "UPDATE_DIV_COMPONENT_PAD_R",
      id: Selected_Id,
      padR: value,
    });
  };
  // pad t
  const Handle_Pad_T = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Pad_T(value);
    sendMessageToIframe({
      type: "UPDATE_DIV_COMPONENT_PAD_T",
      id: Selected_Id,
      padT: value,
    });
  };
  // pad b
  const Handle_Pad_B = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Pad_B(value);
    sendMessageToIframe({
      type: "UPDATE_DIV_COMPONENT_PAD_B",
      id: Selected_Id,
      padB: value,
    });
  };
  // bg color
  const Handle_Bg_Color = (e: any) => {
    const bgColor = e.target.value;
    Set_Bg_Color(bgColor);
    sendMessageToIframe({
      type: "UPDATE_DIV_COMPONENT_BG_COLOR",
      id: Selected_Id,
      bgColor: bgColor,
    });
  };

  // Receiving Data From Component Setting Id and Default Attributes Value
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (data.type === "SET_DIV_SELECTED_ID") {
        // Setting Component ID
        Set_Selected_Id(data.id);

        // Opening Text Toolbox
        Div_Toolbox_On_Open();

        // Setting Default Attributes
        Set_Height(data.attributes.height);
        Set_Width(data.attributes.width);
        Set_Pad_L(data.attributes.padL);
        Set_Pad_R(data.attributes.padR);
        Set_Pad_T(data.attributes.padT);
        Set_Pad_B(data.attributes.padB);
        Set_Bg_Color(data.attributes.bgColor);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return Div_Toolbox_Is_Open ? (
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
              value={Bg_Color}
              onInput={Handle_Bg_Color}
              className="inset-0 h-[32px] w-full border-none bg-transparent outline-none"
            />
          </div>
        </Toolbox>
        {/* Height */}
        <Toolbox
          heading="Select Height"
          handleChange={(e: any) => Handle_Height(e.target.value)}
          value={Height}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[typeof Height !== "number" ? 0 : Height]}
              max={500}
              step={1}
              value={[typeof Height !== "number" ? 0 : Height]}
              onValueChange={Handle_Height}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>

        {/* Width */}
        <Toolbox
          heading="Select Width"
          handleChange={(e: any) => Handle_Width(e.target.value)}
          value={Width}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[typeof Width !== "number" ? 0 : Width]}
              max={500}
              step={1}
              value={[typeof Width !== "number" ? 0 : Width]}
              onValueChange={Handle_Width}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>
        {/* Pad L */}
        <Toolbox
          heading="Select Padding Left"
          handleChange={(e: any) => Handle_Pad_L(e.target.value)}
          value={Pad_L}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[typeof Pad_L !== "number" ? 0 : Pad_L]}
              max={500}
              step={1}
              value={[typeof Pad_L !== "number" ? 0 : Pad_L]}
              onValueChange={Handle_Pad_L}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>
        {/* Pad R */}
        <Toolbox
          heading="Select Padding Right"
          handleChange={(e: any) => Handle_Pad_R(e.target.value)}
          value={Pad_R}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[typeof Pad_R !== "number" ? 0 : Pad_R]}
              max={500}
              step={1}
              value={[typeof Pad_R !== "number" ? 0 : Pad_R]}
              onValueChange={Handle_Pad_R}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>
        {/* Pad T */}
        <Toolbox
          heading="Select Padding Top"
          handleChange={(e: any) => Handle_Pad_T(e.target.value)}
          value={Pad_T}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[typeof Pad_T !== "number" ? 0 : Pad_T]}
              max={500}
              step={1}
              value={[typeof Pad_T !== "number" ? 0 : Pad_T]}
              onValueChange={Handle_Pad_T}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>
        {/* Pad B */}
        <Toolbox
          heading="Select Padding Bottom"
          handleChange={(e: any) => Handle_Pad_B(e.target.value)}
          value={Pad_B}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[typeof Pad_B !== "number" ? 0 : Pad_B]}
              max={500}
              step={1}
              value={[typeof Pad_B !== "number" ? 0 : Pad_B]}
              onValueChange={Handle_Pad_B}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>
      </div>
    </div>
  ) : null;
};

export default Div_Toolbox;
