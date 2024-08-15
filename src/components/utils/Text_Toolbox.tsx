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
import use_Toolbox_Store from "@/store/studio/Toolbox_Store";
import { use_Text_Store } from "@/store/utils/Text_Store";
import {
  AlignCenter,
  AlignJustify,
  AlignLeft,
  AlignRight,
  Italic,
  Link,
  Underline,
  X,
} from "lucide-react";

const Text_Toolbox = () => {
  // Tollbox store
  const Text_Toolbox_On_Close = use_Toolbox_Store(
    (s) => s.Text_Toolbox_On_Close
  );

  // text_Store
  const [
    Set_Font_Style,
    Set_Font_Size,
    Set_Font_Weight,

    Set_Text_Color,
    Set_Text_Alignment,
    Set_Text_Underline,

    Set_Text_Italic,
    Set_Line_Height,
    Set_Letter_Spacing,

    Set_Link,

    Selected_Id,

    Text_Component,
  ] = use_Text_Store((s) => [
    s.Set_Font_Style,
    s.Set_Font_Size,
    s.Set_Font_Weight,

    s.Set_Text_Color,
    s.Set_Text_Alignment,
    s.Set_Text_Underline,

    s.Set_Text_Italic,
    s.Set_Line_Height,
    s.Set_Letter_Spacing,

    s.Set_Link,

    s.Selected_Id,

    s.Text_Components,
  ]);

  // finding component
  const My_Component = Text_Component.find((x) => x.Id === Selected_Id);

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
  // alignment
  const Handle_Alignment = (value: string) => {
    Set_Text_Alignment(Selected_Id!, value);
  };
  // underline
  const Handle_Underline = () => {
    Set_Text_Underline(Selected_Id!, !My_Component?.Text_Underline);
  };
  // italic
  const Handle_Italic = () => {
    Set_Text_Italic(Selected_Id!, !My_Component?.Text_Italic);
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

        {/* Alignment  */}
        <Toolbox heading="Select Alignment">
          <div className="flex items-center justify-between py-[12px]">
            <div
              className={`flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] ${My_Component?.Text_Alignment == "left" && "border-[1px]"}`}
              onClick={() => Handle_Alignment("left")}
            >
              <AlignLeft size={24} />
            </div>
            <div
              className={`flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] hover:border-[1px] ${My_Component?.Text_Alignment == "center" && "border-[1px]"}`}
              onClick={() => Handle_Alignment("center")}
            >
              <AlignCenter size={24} />
            </div>
            <div
              className={`flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] hover:border-[1px] ${My_Component?.Text_Alignment == "right" && "border-[1px]"}`}
              onClick={() => Handle_Alignment("right")}
            >
              <AlignRight size={24} />
            </div>
            <div
              className={`flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] hover:border-[1px] ${My_Component?.Text_Alignment == "justify" && "border-[1px]"}`}
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
      {/* Delete Text */}
    </div>
  );
};

export const Toolbox = ({
  heading,
  children,
}: {
  heading: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={`flex flex-col gap-[8px] border-b-[1px] border-neutral-700 py-[12px]`}
    >
      <h2 className={`text-[16px] font-semibold text-neutral-300`}>
        {heading}
      </h2>
      <div>{children}</div>
    </div>
  );
};

export default Text_Toolbox;
