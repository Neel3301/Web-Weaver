"use client";

import use_Toolbox_Store from "@/store/studio/Toolbox_Store";
import { Italic, Link, Underline, X } from "lucide-react";
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

const Btn_Toolbox = () => {
  // using toolbox store
  const Btn_Toolbox_On_Close = use_Toolbox_Store((s) => s.Btn_Toolbox_On_Close);

  // Btn Store
  const [
    Set_Font_Style,
    Set_Font_Size,
    Set_Font_Weight,

    Set_Text_Color,
    Set_Text_Underline,

    Set_Text_Italic,
    Set_Line_Height,
    Set_Letter_Spacing,

    Set_Bg_Color,
    Set_Border_Width,
    Set_Border_Color,
    Set_Pad_X,
    Set_Pad_Y,

    Set_Hover_Border_Color,
    Set_Hover_Bg_Color,
    Set_Hover_Text_Color,

    Set_Link,

    Selected_Id,

    Btn_Component,
  ] = use_Btn_Store((s) => [
    s.Set_Font_Style,
    s.Set_Font_Size,
    s.Set_Font_Weight,

    s.Set_Text_Color,
    s.Set_Text_Underline,

    s.Set_Text_Italic,
    s.Set_Line_Height,
    s.Set_Letter_Spacing,

    s.Set_Bg_Color,
    s.Set_Border_Width,
    s.Set_Border_Color,
    s.Set_Pad_X,
    s.Set_Pad_Y,

    s.Set_Hover_Border_Color,
    s.Set_Hover_Bg_Color,
    s.Set_Hover_Text_Color,

    s.Set_Link,

    s.Selected_Id,

    s.Btn_Components,
  ]);

  // finding component
  const My_Component = Btn_Component.find((x) => x.Id === Selected_Id);

  // style
  const Handle_Style = (value: string) => {
    Set_Font_Style(Selected_Id!, value);
  };
  // size
  const Handle_Size = (value: any) => {
    Set_Font_Size(Selected_Id!, value["0"]);
  };
  // weight
  const Handle_Weight = (value: any) => {
    Set_Font_Weight(Selected_Id!, value[0]);
  };
  // color
  const Handle_Color = (e: any) => {
    Set_Text_Color(Selected_Id!, e.target.value);
  };

  // underline
  const Handle_Underline = () => {
    Set_Text_Underline(Selected_Id!, !My_Component?.Text_Underline);
  };
  // italic
  const Handle_Italic = () => {
    Set_Text_Italic(Selected_Id!, !My_Component?.Text_Italic);
  };

  // bg color
  const Handle_Bg_Color = (e: any) => {
    Set_Bg_Color(Selected_Id!, e.target.value);
  };
  // border width
  const Handle_Border_Width = (value: any) => {
    Set_Border_Width(Selected_Id!, value[0]);
  };
  // border color
  const Handle_Border_Color = (e: any) => {
    Set_Border_Color(Selected_Id!, e.target.value);
  };
  // pad x
  const Handle_Pad_X = (value: any) => {
    Set_Pad_X(Selected_Id!, value[0]);
  };
  // pad y
  const Handle_Pad_Y = (value: any) => {
    Set_Pad_Y(Selected_Id!, value[0]);
  };

  // hover border color
  const Handle_Hover_Border_Color = (e: any) => {
    Set_Hover_Border_Color(Selected_Id!, e.target.value);
  };
  // hover bg color
  const Handle_Hover_Bg_Color = (e: any) => {
    Set_Hover_Bg_Color(Selected_Id!, e.target.value);
  };
  // hover text color
  const Handle_Hover_Text_Color = (e: any) => {
    Set_Hover_Text_Color(Selected_Id!, e.target.value);
  };

  // height
  const Handle_Line_Height = (value: any) => {
    Set_Line_Height(Selected_Id!, value[0]);
  };
  // spacing
  const Handle_Letter_Spacing = (value: any) => {
    Set_Letter_Spacing(Selected_Id!, value[0]);
  };
  // link
  const Handle_Link = (e: any) => {
    Set_Link(Selected_Id!, e.target.value);
  };
  return (
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
            <Select
              onValueChange={Handle_Style}
              value={My_Component?.Font_Style}
            >
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
        <Toolbox heading="Select Font Size">
          <div className="py-[12px]">
            <Slider
              defaultValue={[My_Component?.Font_Size || 0]}
              max={100}
              step={1}
              onValueChange={Handle_Size}
              className="w-full bg-white"
            />
          </div>
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
              className={`flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] ${My_Component?.Text_Italic && "border-[1px]"} hover:border-[1px]`}
              onClick={Handle_Italic}
            >
              <Italic size={24} />
            </div>
            <div
              className={`flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] hover:border-[1px] ${My_Component?.Text_Underline && "border-[1px]"}`}
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
              <Link size={24} />
              <Input
                className="border-none"
                placeholder="Past Your Link Here"
                onChange={Handle_Link}
              />
            </div>
          </div>
        </Toolbox>
        {/* weight */}
        <Toolbox heading="Select Font Weight">
          <div className="py-[12px]">
            <Slider
              defaultValue={[My_Component?.Font_Weight || 0]}
              max={1000}
              step={1}
              className="w-full bg-white"
              onValueChange={Handle_Weight}
            />
          </div>
        </Toolbox>
        {/* Lineheight */}
        <Toolbox heading="Select Line Height">
          <div className="py-[12px]">
            <Slider
              defaultValue={[My_Component?.Line_Height || 0]}
              max={100}
              step={1}
              className="w-full bg-white"
              onValueChange={Handle_Line_Height}
            />
          </div>
        </Toolbox>
        {/* letter spacing */}
        <Toolbox heading="Select Letter Spacing">
          <div className="py-[12px]">
            <Slider
              defaultValue={[My_Component?.Letter_Spacing || 0]}
              max={100}
              step={1}
              className="w-full bg-white"
              onValueChange={Handle_Letter_Spacing}
            />
          </div>
        </Toolbox>
      </div>
    </div>
  );
};

export default Btn_Toolbox;
