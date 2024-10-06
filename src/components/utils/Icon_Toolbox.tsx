"use client";
import use_Toolbox_Store from "@/store/studio/Toolbox_Store";
import { use_Icon_Store } from "@/store/utils/Icon_Store";
import { X } from "lucide-react";
import { Toolbox } from "./Text_Toolbox";
import { Slider } from "../ui/slider";
import { Input } from "../ui/input";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Button } from "../ui/button";
import Icon_List from "@/constants/studio/icon_list";

import * as LucidIcons from "lucide-react";
import { useEffect, useState } from "react";
import { sendMessageToIframe } from "@/hooks/studio/Send_Msg_To_Iframe";

const Icon_Toolbox = () => {
  // Import From Toolbox store
  const Icon_Toolbox_On_Close = use_Toolbox_Store(
    (s) => s.Icon_Toolbox_On_Close
  );
  const Icon_Toolbox_On_Open = use_Toolbox_Store((s) => s.Icon_Toolbox_On_Open);
  const Icon_Toolbox_Is_Open = use_Toolbox_Store((s) => s.Icon_Toolbox_Is_Open);

  // Import From Icon Store
  const Selected_Id = use_Icon_Store((s) => s.Selected_Id);
  const Set_Selected_Id = use_Icon_Store((s) => s.Set_Selected_Id);

  // Local State
  const [Icon_Size, Set_Icon_Size] = useState<number>();
  const [Icon_Color, Set_Icon_Color] = useState<string>();
  const [Icon_Bg_Color, Set_Icon_Bg_Color] = useState<string>();
  const [Icon_Border_Width, Set_Icon_Border_Width] = useState<number>();
  const [Icon_Border_Color, Set_Icon_Border_Color] = useState<string>();
  // const [Icon_Border_Color, Set_Icon_Border_Color] = useState<>();
  // const [Icon_Border_Color, Set_Icon_Border_Color] = useState<>();
  // const [Icon_Border_Color, Set_Icon_Border_Color] = useState<>();
  const [Link, Set_Link] = useState<string>();
  const [Pad_X, Set_Pad_X] = useState<number>();
  const [Pad_Y, Set_Pad_Y] = useState<number>();

  // icon size
  const Handle_Icon_Size = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Icon_Size(value);
    sendMessageToIframe({
      type: "UPDATE_ICON_COMPONENT_ICON_SIZE",
      id: Selected_Id,
      iconSize: value,
    });
  };

  // icon color
  const Handle_Icon_Color = (e: any) => {
    const color = e.target.value;
    Set_Icon_Color(color);
    sendMessageToIframe({
      type: "UPDATE_ICON_COMPONENT_ICON_COLOR",
      id: Selected_Id,
      iconColor: color,
    });
  };

  // icon bg color
  const Handle_Icon_Bg_Color = (e: any) => {
    const bgColor = e.target.value;
    Set_Icon_Bg_Color(bgColor);
    sendMessageToIframe({
      type: "UPDATE_ICON_COMPONENT_ICON_BG_COLOR",
      id: Selected_Id,
      iconBgColor: bgColor,
    });
  };
  // handle border width
  const Handle_Icon_Border_Width = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Icon_Border_Width(value);
    sendMessageToIframe({
      type: "UPDATE_ICON_COMPONENT_ICON_BORDER_WIDTH",
      id: Selected_Id,
      iconBorderWidth: value,
    });
  };
  // icon color
  const Handle_Icon_Border_Color = (e: any) => {
    const borderColor = e.target.value;
    Set_Icon_Border_Color(borderColor);
    sendMessageToIframe({
      type: "UPDATE_ICON_COMPONENT_ICON_BORDER_COLOR",
      id: Selected_Id,
      iconBorderColor: borderColor,
    });
  };
  // pad x
  const Handle_Pad_X = (value: any) => {
    Set_Pad_X(value[0]);
    sendMessageToIframe({
      type: "UPDATE_ICON_COMPONENT_PAD_X",
      id: Selected_Id,
      padX: value,
    });
  };
  // pad y
  const Handle_Pad_Y = (value: any) => {
    Set_Pad_Y(value[0]);
    sendMessageToIframe({
      type: "UPDATE_ICON_COMPONENT_PAD_Y",
      id: Selected_Id,
      padY: value,
    });
  };

  // link
  const Handle_Link = (e: any) => {
    const value = e.target.value;
    Set_Link(value);
    sendMessageToIframe({
      type: "UPDATE_ICON_COMPONENT_ICON_LINK",
      id: Selected_Id,
      link: value,
    });
  };

  // Receiving Data From Component Setting Id and Default Attributes Value
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (data.type === "SET_ICON_SELECTED_ID") {
        // Setting Component ID
        Set_Selected_Id(data.id);

        // Opening Text Toolbox
        Icon_Toolbox_On_Open();

        // Setting Default Attributes
        Set_Icon_Size(data.attributes.iconSize);
        Set_Icon_Color(data.attributes.iconColor);
        Set_Icon_Bg_Color(data.attributes.iconBgColor);
        Set_Icon_Border_Width(data.attributes.iconBorderWidth);
        Set_Icon_Border_Color(data.attributes.iconBorderColor);
        Set_Link(data.attributes.link);
        Set_Pad_X(data.attributes.padX);
        Set_Pad_Y(data.attributes.padY);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return Icon_Toolbox_Is_Open ? (
    <div className="h-full w-full border-r-[1px] border-neutral-700">
      {/* Icon editor title  */}
      <div
        className={`flex h-[60px] w-full items-center justify-between border-b-[1px] border-neutral-700 px-3`}
      >
        <h2 className={`text-[24px] font-bold text-neutral-200`}>
          Icon Editor
        </h2>
        <div onClick={Icon_Toolbox_On_Close} className="cursor-pointer">
          <X size={20} />
        </div>
      </div>
      {/* toolkit */}
      <div className="h-[calc(100vh-80px-66px)] w-full overflow-y-scroll px-4">
        {/* icon select */}
        <Toolbox heading="Select Icon">
          <Icon_Dialog />
        </Toolbox>
        {/* icon size */}
        <Toolbox
          heading="Select Icon Size"
          handleChange={(e: any) => Handle_Icon_Size(e.target.value)}
          value={Icon_Size}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[Icon_Size || 0]}
              max={100}
              step={1}
              onValueChange={Handle_Icon_Size}
              value={[Icon_Size || 0]}
              className="w-full cursor-pointer bg-white"
            />
          </div>
        </Toolbox>
        {/* icon color */}
        <Toolbox heading="Select Icon Color">
          <div>
            <input
              type="color"
              // value={component?.textColor}
              onInput={Handle_Icon_Color}
              className="inset-0 h-[32px] w-full border-none bg-transparent outline-none"
            />
          </div>
        </Toolbox>
        {/* icon bg color */}
        <Toolbox heading="Select Icon Bg Color">
          <div>
            <input
              type="color"
              // value={component?.textColor}
              onInput={Handle_Icon_Bg_Color}
              className="inset-0 h-[32px] w-full border-none bg-transparent outline-none"
            />
          </div>
        </Toolbox>
        {/* Border Width */}
        <Toolbox
          heading="Select Border Width"
          handleChange={(e: any) => Handle_Icon_Border_Width(e.target.value)}
          value={Icon_Border_Width}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[Icon_Border_Width || 0]}
              max={10}
              step={1}
              value={[Icon_Border_Width || 0]}
              onValueChange={Handle_Icon_Border_Width}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>
        {/* icon border color */}
        <Toolbox heading="Select Border Color">
          <div>
            <input
              type="color"
              // value={component?.textColor}
              onInput={Handle_Icon_Border_Color}
              className="inset-0 h-[32px] w-full border-none bg-transparent outline-none"
            />
          </div>
        </Toolbox>
        {/* Pad X */}
        <Toolbox
          heading="Select Padding X"
          handleChange={(e: any) => Handle_Pad_X(e.target.value)}
          value={Pad_X}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[Pad_X || 0]}
              max={100}
              step={1}
              value={[Pad_X || 0]}
              onValueChange={Handle_Pad_X}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>
        {/* Pad X */}
        <Toolbox
          heading="Select Padding Y"
          handleChange={(e: any) => Handle_Pad_Y(e.target.value)}
          value={Pad_Y}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[Pad_Y || 0]}
              max={100}
              step={1}
              value={[Pad_Y || 0]}
              onValueChange={Handle_Pad_Y}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>
        {/* Add Link */}
        <Toolbox heading="Add Link">
          <div className="py-[12px]">
            <div className="flex w-full items-center overflow-hidden rounded-[8px] border-[2px] border-neutral-700 bg-black px-[12px]">
              <LucidIcons.Link2 size={24} />
              <Input
                className="border-none"
                placeholder="Past Your Link Here"
                onChange={Handle_Link}
              />
            </div>
          </div>
        </Toolbox>
      </div>
    </div>
  ) : null;
};

const Icon_Dialog = () => {
  const [Set_Icon, Selected_Id, Icon_Component] = use_Icon_Store((s) => [
    s.Set_Icon,
    s.Selected_Id,
    s.Icon_Components,
  ]);

  // finding component
  const My_Component = Icon_Component.find((x) => x.Id === Selected_Id);

  const Handle_Icon = (e: any) => {
    const icon = e.currentTarget.getAttribute("value");
    if (My_Component?.Icon == icon) {
      Set_Icon(Selected_Id!, "");
    } else {
      Set_Icon(Selected_Id!, icon);
      sendMessageToIframe({
        type: "UPDATE_ICON_COMPONENT_ICON",
        id: Selected_Id,
        icon: icon,
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger>
        <Button variant={"outline"} className="w-[calc(250px-12px-12px-12px)]">
          Select
        </Button>
      </DialogTrigger>
      <DialogContent className="overflow-scroll border-[2px] border-neutral-300 bg-black">
        <DialogHeader className="">
          <DialogTitle className="border-b-[1px] border-neutral-300 text-[32px] text-white">
            Select Icon
          </DialogTitle>
        </DialogHeader>
        <div className="h-[500px]">
          <div className="flex flex-wrap items-center justify-between gap-[12px] overflow-scroll text-white">
            {Icon_List.map((iconName) => {
              // const IconComponent = LucidIcons[iconName];
              const IconComponent = (LucidIcons as any)[
                iconName
              ] as React.ComponentType<{ size?: number }>;

              if (!IconComponent) {
                // Handle the case where the icon is not found
                return (
                  <div key={iconName}>
                    <div>NF</div>
                  </div>
                );
              }

              return (
                <DialogClose key={iconName}>
                  <button
                    className={`cursor-pointer rounded-[12px] border-[1px] border-transparent p-[12px] hover:bg-gray-900 ${My_Component?.Icon == iconName && `border-white bg-gray-900`}`}
                    value={iconName}
                    onClick={Handle_Icon}
                  >
                    <IconComponent size={28} />
                  </button>
                </DialogClose>
              );
            })}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default Icon_Toolbox;
