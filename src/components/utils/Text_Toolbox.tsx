"use client";

import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Font_List } from "@/constants/studio/font_list";
import { sendMessageToIframe } from "@/hooks/studio/Send_Msg_To_Iframe";
import use_Toolbox_Store from "@/store/studio/Toolbox_Store";
import { use_Text_Store } from "@/store/utils/Text_Store";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Italic,
  Link2,
  Underline,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";

const Text_Toolbox = () => {
  // Import From Toolbox store
  const Text_Toolbox_On_Close = use_Toolbox_Store(
    (s) => s.Text_Toolbox_On_Close
  );
  const Text_Toolbox_On_Open = use_Toolbox_Store((s) => s.Text_Toolbox_On_Open);
  const Text_Toolbox_Is_Open = use_Toolbox_Store((s) => s.Text_Toolbox_Is_Open);

  // Import From Text Store
  const Selected_Id = use_Text_Store((s) => s.Selected_Id);
  const Set_Selected_Id = use_Text_Store((s) => s.Set_Selected_Id);

  // Local State
  const [Font_Style, Set_Font_Style] = useState<string>("");
  const [Font_Size, Set_Font_Size] = useState<number>(0);
  const [Font_Weight, Set_Font_Weight] = useState<number>(0);
  const [Text_Color, Set_Text_Color] = useState<number>(0);
  const [Text_Alignment, Set_Text_Alignment] = useState<string>("");
  const [Text_Underline, Set_Text_Underline] = useState<boolean>(false);
  const [Text_Italic, Set_Text_Italic] = useState<boolean>(false);
  const [Line_Height, Set_Line_Height] = useState<number | null>(0);
  const [Letter_Spacing, Set_Letter_Spacing] = useState<number | null>(0);
  const [Link, Set_Link] = useState<string | null>();

  // Style
  const Handle_Style = (value: string) => {
    Set_Font_Style(value);
    sendMessageToIframe({
      type: "UPDATE_TEXT_COMPONENT_FONT_STYLE",
      id: Selected_Id,
      fontStyle: value,
    });
  };

  // Size
  const Handle_Size = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Font_Size(value);
    sendMessageToIframe({
      type: "UPDATE_TEXT_COMPONENT_FONT_SIZE",
      id: Selected_Id,
      fontSize: value,
    });
  };
  // Weight
  const Handle_Weight = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Font_Weight(value);
    sendMessageToIframe({
      type: "UPDATE_TEXT_COMPONENT_FONT_WEIGHT",
      id: Selected_Id,
      fontWeight: value,
    });
  };
  // Color
  const Handle_Color = (e: any) => {
    const color = e.target.value;
    Set_Text_Color(color);
    sendMessageToIframe({
      type: "UPDATE_TEXT_COMPONENT_TEXT_COLOR",
      id: Selected_Id,
      textColor: color,
    });
  };
  // Alignment
  const Handle_Alignment = (value: string) => {
    Set_Text_Alignment(value);
    sendMessageToIframe({
      type: "UPDATE_TEXT_COMPONENT_TEXT_ALIGNMENT",
      id: Selected_Id,
      textAlignment: value,
    });
  };
  // Underline
  const Handle_Underline = () => {
    Set_Text_Underline(!Text_Underline);
    sendMessageToIframe({
      type: "UPDATE_TEXT_COMPONENT_TEXT_UNDERLINE",
      id: Selected_Id,
      textUnderline: !Text_Underline,
    });
  };
  // Italic
  const Handle_Italic = () => {
    Set_Text_Italic(!Text_Italic);
    sendMessageToIframe({
      type: "UPDATE_TEXT_COMPONENT_TEXT_ITALIC",
      id: Selected_Id,
      textItalic: !Text_Italic,
    });
  };
  // Line Height
  const Handle_Line_Height = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Line_Height(value);
    sendMessageToIframe({
      type: "UPDATE_TEXT_COMPONENT_LINE_HEIGHT",
      id: Selected_Id,
      lineHeight: value,
    });
  };
  // Spacing
  const Handle_Letter_Spacing = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Letter_Spacing(value);
    sendMessageToIframe({
      type: "UPDATE_TEXT_COMPONENT_LETTER_SPACING",
      id: Selected_Id,
      letterSpacing: value,
    });
  };
  // Link
  const Handle_Link = (e: any) => {
    const value = e.target.value;
    Set_Link(value);
    sendMessageToIframe({
      type: "UPDATE_TEXT_COMPONENT_LINK",
      id: Selected_Id,
      link: value,
    });
  };

  // Receiving Data From Component Setting Id and Default Attributes Value
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (data.type === "SET_TEXT_SELECTED_ID") {
        // Setting Component ID
        Set_Selected_Id(data.id);

        // Opening Text Toolbox
        Text_Toolbox_On_Open();

        // Setting Default Attributes
        Set_Font_Style(data.attributes.fontStyle);
        Set_Font_Size(data.attributes.fontSize);
        Set_Font_Weight(data.attributes.fontWeight);
        Set_Text_Color(data.attributes.textColor);
        Set_Text_Alignment(data.attributes.textAlignment);
        Set_Text_Underline(data.attributes.textUnderline);
        Set_Text_Italic(data.attributes.textItalic);
        Set_Line_Height(data.attributes.lineHeight);
        Set_Letter_Spacing(data.attributes.letterSpacing);
        Set_Link(data.attributes.link);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return Text_Toolbox_Is_Open ? (
    <div className="h-full w-full border-r-[1px] border-neutral-700">
      {/* text editor title  */}
      <div
        className={`flex h-[60px] w-full items-center justify-between border-b-[1px] border-neutral-700 px-3`}
      >
        <h2 className={`text-[24px] font-bold text-neutral-200`}>
          Text Editor
        </h2>
        <div onClick={Text_Toolbox_On_Close} className="cursor-pointer">
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
              // defaultValue={[My_Component?.Font_Size || 0]}
              defaultValue={[Font_Size || 0]}
              max={100}
              step={1}
              onValueChange={Handle_Size}
              // value={[My_Component?.Font_Size || 0]}
              value={[Font_Size || 0]}
              className="w-full cursor-pointer bg-white"
            />
          </div>
        </Toolbox>
        {/* color */}
        <Toolbox heading="Select Text Color">
          <div>
            <input
              type="color"
              value={Text_Color}
              onInput={Handle_Color}
              className="inset-0 h-[32px] w-full border-none bg-transparent outline-none"
            />
          </div>
        </Toolbox>

        {/* Alignment  */}
        <Toolbox heading="Select Alignment">
          <div className="flex items-center justify-between py-[12px]">
            <div
              className={`flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] ${Text_Alignment == "left" && "border-[1px]"}`}
              onClick={() => Handle_Alignment("left")}
            >
              <AlignLeft size={24} />
            </div>
            <div
              className={`flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] hover:border-[1px] ${Text_Alignment == "center" && "border-[1px]"}`}
              onClick={() => Handle_Alignment("center")}
            >
              <AlignCenter size={24} />
            </div>
            <div
              className={`flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] hover:border-[1px] ${Text_Alignment == "right" && "border-[1px]"}`}
              onClick={() => Handle_Alignment("right")}
            >
              <AlignRight size={24} />
            </div>
            <div
              className={`flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] hover:border-[1px] ${Text_Alignment == "justify" && "border-[1px]"}`}
              onClick={() => Handle_Alignment("justify")}
            >
              <AlignJustify size={24} />
            </div>
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
              className={`flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] hover:border-[1px] ${Text_Italic && "border-[1px]"}`}
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
        {/* Add Link */}
        <Toolbox heading="Add Link">
          <div className="py-[12px]">
            <div className="flex w-full items-center overflow-hidden rounded-[8px] border-[2px] border-neutral-700 bg-black px-[12px]">
              <Link2 size={24} />
              <Input
                className="border-none"
                placeholder="Past Your Link Here"
                onChange={Handle_Link}
                value={Link || ""}
              />
            </div>
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
          value={Line_Height || 0}
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
          value={Letter_Spacing || 0}
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
      {/* Delete Text */}
    </div>
  ) : null;
};

export const Toolbox = ({
  heading,
  children,
  handleChange,
  value,
}: {
  heading: string;
  children: React.ReactNode;
  handleChange?: (e: any) => void;
  value?: string | number;
}) => {
  return (
    <div
      className={`flex flex-col gap-[8px] border-b-[1px] border-neutral-700 py-[12px]`}
    >
      <div className="flex items-center justify-between">
        <h2 className={`text-[16px] font-semibold text-neutral-300`}>
          {heading}
        </h2>

        {handleChange != undefined && (
          <div className="flex h-[24px] w-[60px] items-center overflow-hidden rounded-[8px] border-[2px] border-neutral-700 bg-black">
            <Input
              className="border-none text-center"
              type="number"
              value={value}
              onChange={handleChange}
            />
          </div>
        )}
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Text_Toolbox;
