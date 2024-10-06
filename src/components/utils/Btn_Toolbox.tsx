"use client";
import * as LucidIcons from "lucide-react";
import use_Toolbox_Store from "@/store/studio/Toolbox_Store";
import { Icon, Italic, Underline, X } from "lucide-react";
import { Toolbox } from "./Text_Toolbox";
import { Slider } from "../ui/slider";
import { Input } from "../ui/input";
import { use_Btn_Store } from "@/store/utils/Btn_Store";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Font_List } from "@/constants/studio/font_list";
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
import { useEffect, useState } from "react";
import { sendMessageToIframe } from "@/hooks/studio/Send_Msg_To_Iframe";

const Btn_Toolbox = () => {
  // Import From Toolbox store
  const Btn_Toolbox_On_Close = use_Toolbox_Store((s) => s.Btn_Toolbox_On_Close);
  const Btn_Toolbox_On_Open = use_Toolbox_Store((s) => s.Btn_Toolbox_On_Open);
  const Btn_Toolbox_Is_Open = use_Toolbox_Store((s) => s.Btn_Toolbox_Is_Open);

  //  Import From Btn Store
  const Selected_Id = use_Btn_Store((s) => s.Selected_Id);
  const Set_Selected_Id = use_Btn_Store((s) => s.Set_Selected_Id);

  // Local State
  const [Font_Style, Set_Font_Style] = useState<string>("");
  const [Font_Size, Set_Font_Size] = useState<number>(0);
  const [Font_Weight, Set_Font_Weight] = useState<number>(0);
  const [Text_Color, Set_Text_Color] = useState<string>("");
  const [Text_Underline, Set_Text_Underline] = useState<boolean>(false);
  const [Text_Italic, Set_Text_Italic] = useState<boolean>(false);
  const [Line_Height, Set_Line_Height] = useState<number>(0);
  const [Letter_Spacing, Set_Letter_Spacing] = useState<number>(0);
  const [Link, Set_Link] = useState<string>("");
  const [Bg_Color, Set_Bg_Color] = useState<string>("");
  const [Border_Width, Set_Border_Width] = useState<number>(0);
  const [Border_Color, Set_Border_Color] = useState<string>("");
  const [Pad_X, Set_Pad_X] = useState<number>(0);
  const [Pad_Y, Set_Pad_Y] = useState<number>(0);
  const [Hover_Border_Color, Set_Hover_Border_Color] = useState<string>("");
  const [Hover_Bg_Color, Set_Hover_Bg_Color] = useState<string>("");
  const [Hover_Text_Color, Set_Hover_Text_Color] = useState<string>("");
  const [Border_Radius_Tl, Set_Border_Radius_Tl] = useState<number>(0);
  const [Border_Radius_Tr, Set_Border_Radius_Tr] = useState<number>(0);
  const [Border_Radius_Bl, Set_Border_Radius_Bl] = useState<number>(0);
  const [Border_Radius_Br, Set_Border_Radius_Br] = useState<number>(0);

  // style
  const Handle_Style = (value: string) => {
    Set_Font_Style(value);
    sendMessageToIframe({
      type: "UPDATE_BTN_COMPONENT_FONT_STYLE",
      id: Selected_Id,
      fontStyle: value,
    });
  };
  // size
  const Handle_Size = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Font_Size(value);
    sendMessageToIframe({
      type: "UPDATE_BTN_COMPONENT_FONT_SIZE",
      id: Selected_Id,
      fontSize: value,
    });
  };
  // weight
  const Handle_Weight = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Font_Weight(value);
    sendMessageToIframe({
      type: "UPDATE_BTN_COMPONENT_FONT_WEIGHT",
      id: Selected_Id,
      fontWeight: value,
    });
  };
  // color
  const Handle_Color = (e: any) => {
    const color = e.target.value;
    Set_Text_Color(color);
    sendMessageToIframe({
      type: "UPDATE_BTN_COMPONENT_TEXT_COLOR",
      id: Selected_Id,
      textColor: color,
    });
  };
  // underline
  const Handle_Underline = () => {
    Set_Text_Underline(!Text_Underline);
    sendMessageToIframe({
      type: "UPDATE_BTN_COMPONENT_TEXT_UNDERLINE",
      id: Selected_Id,
      textUnderline: !Text_Underline,
    });
  };
  // italic
  const Handle_Italic = () => {
    Set_Text_Italic(!Text_Italic);
    sendMessageToIframe({
      type: "UPDATE_BTN_COMPONENT_TEXT_ITALIC",
      id: Selected_Id,
      textItalic: !Text_Italic,
    });
  };
  // bg color
  const Handle_Bg_Color = (e: any) => {
    const bgColor = e.target.value;
    Set_Bg_Color(bgColor);
    sendMessageToIframe({
      type: "UPDATE_BTN_COMPONENT_BG_COLOR",
      id: Selected_Id,
      bgColor: bgColor,
    });
  };
  // border width
  const Handle_Border_Width = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Border_Width(value);
    sendMessageToIframe({
      type: "UPDATE_BTN_COMPONENT_BORDER_WIDTH",
      id: Selected_Id,
      borderWidth: Border_Width,
    });
  };
  // border color
  const Handle_Border_Color = (e: any) => {
    Set_Border_Color(e.target.value);
    sendMessageToIframe({
      type: "UPDATE_BTN_COMPONENT_BORDER_COLOR",
      id: Selected_Id,
      borderColor: Border_Color,
    });
  };
  // pad x
  const Handle_Pad_X = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Pad_X(value);
    sendMessageToIframe({
      type: "UPDATE_BTN_COMPONENT_PAD_X",
      id: Selected_Id,
      padX: Pad_X,
    });
  };
  // pad y
  const Handle_Pad_Y = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Pad_Y(value);
    sendMessageToIframe({
      type: "UPDATE_BTN_COMPONENT_PAD_Y",
      id: Selected_Id,
      padY: Pad_Y,
    });
  };
  // hover border color
  const Handle_Hover_Border_Color = (e: any) => {
    Set_Hover_Border_Color(e.target.value);
    sendMessageToIframe({
      type: "UPDATE_BTN_COMPONENT_HOVER_BORDER_COLOR",
      id: Selected_Id,
      hoverBorderColor: Hover_Border_Color,
    });
  };
  // hover bg color
  const Handle_Hover_Bg_Color = (e: any) => {
    Set_Hover_Bg_Color(e.target.value);
    sendMessageToIframe({
      type: "UPDATE_BTN_COMPONENT_HOVER_BG_COLOR",
      id: Selected_Id,
      hoverBgColor: Hover_Bg_Color,
    });
  };
  // hover text color
  const Handle_Hover_Text_Color = (e: any) => {
    Set_Hover_Text_Color(e.target.value);
    sendMessageToIframe({
      type: "UPDATE_BTN_COMPONENT_HOVER_TEXT_COLOR",
      id: Selected_Id,
      hoverTextColor: Hover_Text_Color,
    });
  };
  // height
  const Handle_Line_Height = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Line_Height(value);
    sendMessageToIframe({
      type: "UPDATE_BTN_COMPONENT_LINE_HEIGHT",
      id: Selected_Id,
      lineHeight: Line_Height,
    });
  };
  // spacing
  const Handle_Letter_Spacing = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Letter_Spacing(value);
    sendMessageToIframe({
      type: "UPDATE_BTN_COMPONENT_LETTER_SPACING",
      id: Selected_Id,
      letterSpacing: Letter_Spacing,
    });
  };
  // border radius tl
  const Handle_Border_Radius_Tl = (e: any) => {
    Set_Border_Radius_Tl(e.target.value);
    sendMessageToIframe({
      type: "UPDATE_BTN_COMPONENT_BORDER_RADIUS_TL",
      id: Selected_Id,
      borderRadiusTl: Border_Radius_Tl,
    });
  };
  // border radius tr
  const Handle_Border_Radius_Tr = (e: any) => {
    Set_Border_Radius_Tr(e.target.value);
    sendMessageToIframe({
      type: "UPDATE_BTN_COMPONENT_BORDER_RADIUS_TR",
      id: Selected_Id,
      borderRadiusTr: Border_Radius_Tr,
    });
  };
  // border radius bl
  const Handle_Border_Radius_Bl = (e: any) => {
    Set_Border_Radius_Bl(e.target.value);
    sendMessageToIframe({
      type: "UPDATE_BTN_COMPONENT_BORDER_RADIUS_BL",
      id: Selected_Id,
      borderRadiusBl: Border_Radius_Bl,
    });
  };
  // border radius br
  const Handle_Border_Radius_Br = (e: any) => {
    Set_Border_Radius_Br(e.target.value);
    sendMessageToIframe({
      type: "UPDATE_BTN_COMPONENT_BORDER_RADIUS_BR",
      id: Selected_Id,
      borderRadiusBr: Border_Radius_Br,
    });
  };

  // link
  const Handle_Link = (e: any) => {
    Set_Link(e.target.value);
    sendMessageToIframe({
      type: "UPDATE_BTN_COMPONENT_Link",
      id: Selected_Id,
      link: Link,
    });
  };

  // Receiving Data From Component Setting Id and Default Attributes Value
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (data.type === "SET_BTN_SELECTED_ID") {
        // Setting Component ID
        Set_Selected_Id(data.id);

        // Opening Text Toolbox
        Btn_Toolbox_On_Open();

        // Setting Default Attributes
        Set_Font_Style(data.attributes.fontStyle);
        Set_Font_Size(data.attributes.fontSize);
        Set_Font_Weight(data.attributes.fontWeight);
        Set_Text_Color(data.attributes.textColor);
        Set_Text_Underline(data.attributes.textUnderline);
        Set_Text_Italic(data.attributes.textItalic);
        Set_Line_Height(data.attributes.lineHeight);
        Set_Letter_Spacing(data.attributes.letterSpacing);
        Set_Link(data.attributes.link);
        Set_Bg_Color(data.attributes.bgColor);
        Set_Border_Width(data.attributes.borderWidth);
        Set_Border_Color(data.attributes.borderColor);
        Set_Pad_X(data.attributes.padX);
        Set_Pad_Y(data.attributes.padY);
        Set_Hover_Border_Color(data.attributes.hoverBorderColor);
        Set_Hover_Bg_Color(data.attributes.hoverBgColor);
        Set_Hover_Text_Color(data.attributes.hoverTextColor);
        Set_Border_Radius_Tl(data.attributes.borderRadiusTl);
        Set_Border_Radius_Tr(data.attributes.borderRadiusTr);
        Set_Border_Radius_Bl(data.attributes.borderRadiusBl);
        Set_Border_Radius_Br(data.attributes.borderRadiusBr);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return Btn_Toolbox_Is_Open ? (
    <div className="h-full w-full border-r-[1px] border-neutral-700">
      {/* text editor title  */}
      <div
        className={`flex h-[60px] w-full items-center justify-between border-b-[1px] border-neutral-700 px-3`}
      >
        <h2 className={`text-[24px] font-bold text-neutral-200`}>
          Button Editor
        </h2>
        <div onClick={Btn_Toolbox_On_Close} className="cursor-pointer">
          <X size={20} />
        </div>
      </div>
      {/* toolkit */}
      <div className="h-[calc(100vh-80px-66px)] w-full overflow-y-scroll px-4">
        {/* fonts  */}
        <Toolbox heading="Select Font Style">
          <div>
            <Select onValueChange={Handle_Style} value={Font_Style}>
              <SelectTrigger className="border-none text-neutral-300">
                <SelectValue placeholder="Select Fonts" />
              </SelectTrigger>
              <SelectContent className="bg-black text-neutral-300">
                {Font_List.map((x: Array<string>) => (
                  <SelectItem
                    value={`${x[1]}`}
                    key={`${x[1]}`}
                    className="cursor-pointer py-[16px]"
                  >
                    {`${x[0]}`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </Toolbox>
        {/* size */}
        <Toolbox
          heading="Select Font Size"
          handleChange={(e: any) => Handle_Size(e.target.value)}
          value={Font_Size}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[Font_Size || 0]}
              max={100}
              step={1}
              value={[Font_Size || 0]}
              onValueChange={Handle_Size}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>
        {/* Icons */}
        <Toolbox heading="Select Icons">
          <Icon_Dialog />
        </Toolbox>
        {/* color */}
        <Toolbox heading="Select Text Color">
          <div>
            <input
              type="color"
              // value={component?.textColor}
              onInput={Handle_Color}
              className="inset-0 h-[32px] w-full border-none bg-transparent outline-none"
            />
          </div>
        </Toolbox>
        {/* Decoration */}
        <Toolbox heading="Select Text Decoration">
          <div className="flex items-center justify-between py-[12px]">
            <div
              className={`flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] ${Text_Italic && "border-[1px]"} hover:border-[1px]`}
              onClick={Handle_Italic}
            >
              <Italic size={24} />
            </div>
            <div
              className={`flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] hover:border-[1px] ${Text_Underline && "border-[1px]"}`}
              onClick={Handle_Underline}
            >
              <Underline size={24} />
            </div>
            <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[4px]">
              {/* Dummy */}
            </div>{" "}
            <div className="flex h-[32px] w-[32px] items-center justify-center rounded-[4px]">
              {/* Dummy */}
            </div>
          </div>
        </Toolbox>
        {/* Bg color */}
        <Toolbox heading="Select Background Color">
          <div>
            <input
              type="color"
              value={Bg_Color}
              onInput={Handle_Bg_Color}
              className="inset-0 h-[32px] w-full border-none bg-transparent outline-none"
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
        {/* Border Color */}
        <Toolbox heading="Select Border Color">
          <div>
            <input
              type="color"
              value={Border_Color}
              onInput={Handle_Border_Color}
              className="inset-0 h-[32px] w-full border-none bg-transparent outline-none"
            />
          </div>
        </Toolbox>
        {/* Border Width */}
        <Toolbox
          heading="Select Border Width"
          handleChange={(e: any) => Handle_Border_Width(e.target.value)}
          value={Border_Width}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[Border_Width || 0]}
              max={10}
              step={1}
              value={[Border_Width || 0]}
              onValueChange={Handle_Border_Width}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>
        {/* Border radius */}
        <Toolbox heading="Select Border Radius">
          <div className="flex items-center justify-between gap-4">
            <div className="flex h-[34px] w-full items-center overflow-hidden rounded-[8px] border-[2px] border-neutral-700 bg-black">
              <Input
                type="number"
                className="border-none"
                placeholder="Tl"
                onChange={Handle_Border_Radius_Tl}
              />
            </div>
            <div className="flex h-[34px] w-full items-center overflow-hidden rounded-[8px] border-[2px] border-neutral-700 bg-black">
              <Input
                type="number"
                className="border-none"
                placeholder="Tr"
                onChange={Handle_Border_Radius_Tr}
              />
            </div>
            <div className="flex h-[34px] w-full items-center overflow-hidden rounded-[8px] border-[2px] border-neutral-700 bg-black">
              <Input
                type="number"
                className="border-none"
                placeholder="Bl"
                onChange={Handle_Border_Radius_Bl}
              />
            </div>
            <div className="flex h-[34px] w-full items-center overflow-hidden rounded-[8px] border-[2px] border-neutral-700 bg-black">
              <Input
                type="number"
                className="border-none"
                placeholder="Br"
                onChange={Handle_Border_Radius_Br}
              />
            </div>
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
        {/* HOver Border Color */}
        <Toolbox heading="Select Hover Border Color">
          <div>
            <input
              type="color"
              value={Hover_Border_Color}
              onInput={Handle_Hover_Border_Color}
              className="inset-0 h-[32px] w-full border-none bg-transparent outline-none"
            />
          </div>
        </Toolbox>
        {/* Hover Bg Color */}
        <Toolbox heading="Select Hover Bg Color">
          <div>
            <input
              type="color"
              value={Hover_Bg_Color}
              onInput={Handle_Hover_Bg_Color}
              className="inset-0 h-[32px] w-full border-none bg-transparent outline-none"
            />
          </div>
        </Toolbox>
        {/* Hover Text Color */}
        <Toolbox heading="Select Hover Text Color">
          <div>
            <input
              type="color"
              value={Hover_Text_Color}
              onInput={Handle_Hover_Text_Color}
              className="inset-0 h-[32px] w-full border-none bg-transparent outline-none"
            />
          </div>
        </Toolbox>
        {/* weight */}
        <Toolbox
          heading="Select Font Weight"
          handleChange={(e: any) => Handle_Weight(e.target.value)}
          value={Font_Weight}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[Font_Weight || 0]}
              max={1000}
              step={1}
              value={[Font_Weight || 0]}
              className="w-full bg-white"
              onValueChange={Handle_Weight}
            />
          </div>
        </Toolbox>
        {/* Lineheight */}
        <Toolbox
          heading="Select Line Height"
          handleChange={(e: any) => Handle_Line_Height(e.target.value)}
          value={Line_Height}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[Line_Height || 0]}
              max={100}
              step={1}
              value={[Line_Height || 0]}
              className="w-full bg-white"
              onValueChange={Handle_Line_Height}
            />
          </div>
        </Toolbox>
        {/* letter spacing */}
        <Toolbox
          heading="Select Letter Spacing"
          handleChange={(e: any) => Handle_Letter_Spacing(e.target.value)}
          value={Letter_Spacing}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[Letter_Spacing || 0]}
              max={100}
              step={1}
              value={[Letter_Spacing || 0]}
              className="w-full bg-white"
              onValueChange={Handle_Letter_Spacing}
            />
          </div>
        </Toolbox>
      </div>
    </div>
  ) : null;
};

const Icon_Dialog = () => {
  const [Set_Icon, Selected_Id, Btn_Component] = use_Btn_Store((s) => [
    s.Set_Icon,
    s.Selected_Id,
    s.Btn_Components,
  ]);

  // finding component
  const My_Component = Btn_Component.find((x) => x.Id === Selected_Id);

  const Handle_Icon = (e: any) => {
    const icon = e.currentTarget.getAttribute("value");
    if (Icon == icon) {
      Set_Icon(Selected_Id!, "");
    } else {
      Set_Icon(Selected_Id!, icon);
      sendMessageToIframe({
        type: "UPDATE_BTN_COMPONENT_ICON",
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

export default Btn_Toolbox;
