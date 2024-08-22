"use client";
import * as LucidIcons from "lucide-react";
import use_Toolbox_Store from "@/store/studio/Toolbox_Store";
import { AxeIcon, Icon, Italic, Link, Underline, X } from "lucide-react";
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

    Set_Border_Radius_Tl,
    Set_Border_Radius_Tr,
    Set_Border_Radius_Bl,
    Set_Border_Radius_Br,

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

    s.Set_Border_Radius_Tl,
    s.Set_Border_Radius_Tr,
    s.Set_Border_Radius_Bl,
    s.Set_Border_Radius_Br,

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
    value = typeof value == "string" ? value : value["0"];
    Set_Font_Size(Selected_Id!, value);
  };
  // weight
  const Handle_Weight = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Font_Weight(Selected_Id!, value);
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
    value = typeof value == "string" ? value : value["0"];
    Set_Border_Width(Selected_Id!, value);
  };
  // border color
  const Handle_Border_Color = (e: any) => {
    Set_Border_Color(Selected_Id!, e.target.value);
  };
  // pad x
  const Handle_Pad_X = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Pad_X(Selected_Id!, value);
  };
  // pad y
  const Handle_Pad_Y = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Pad_Y(Selected_Id!, value);
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
    value = typeof value == "string" ? value : value["0"];
    Set_Line_Height(Selected_Id!, value);
  };
  // spacing
  const Handle_Letter_Spacing = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Letter_Spacing(Selected_Id!, value);
  };

  // border radius tl
  const Handle_Border_Radius_Tl = (e: any) => {
    Set_Border_Radius_Tl(Selected_Id!, e.target.value);
  };
  // border radius tr
  const Handle_Border_Radius_Tr = (e: any) => {
    Set_Border_Radius_Tr(Selected_Id!, e.target.value);
  };
  // border radius bl
  const Handle_Border_Radius_Bl = (e: any) => {
    Set_Border_Radius_Bl(Selected_Id!, e.target.value);
  };
  // border radius br
  const Handle_Border_Radius_Br = (e: any) => {
    Set_Border_Radius_Br(Selected_Id!, e.target.value);
  };

  // link
  const Handle_Link = (e: any) => {
    Set_Link(Selected_Id!, e.target.value);
  };

  // Object.keys(LucidIcons)
  //   .slice(0, 10)
  //   .map((x) => console.log(x));

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
        <Toolbox
          heading="Select Font Size"
          handleChange={(e: any) => Handle_Size(e.target.value)}
          value={My_Component?.Font_Size}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[My_Component?.Font_Size || 0]}
              max={100}
              step={1}
              value={[My_Component?.Font_Size || 0]}
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
        {/* Bg color */}
        <Toolbox heading="Select Background Color">
          <div>
            <input
              type="color"
              value={My_Component?.Bg_Color}
              onInput={Handle_Bg_Color}
              className="inset-0 h-[32px] w-full border-none bg-transparent outline-none"
            />
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
        {/* Border Color */}
        <Toolbox heading="Select Border Color">
          <div>
            <input
              type="color"
              value={My_Component?.Border_Color}
              onInput={Handle_Border_Color}
              className="inset-0 h-[32px] w-full border-none bg-transparent outline-none"
            />
          </div>
        </Toolbox>
        {/* Border Width */}
        <Toolbox
          heading="Select Border Width"
          handleChange={(e: any) => Handle_Border_Width(e.target.value)}
          value={My_Component?.Border_Width}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[My_Component?.Border_Width || 0]}
              max={10}
              step={1}
              value={[My_Component?.Border_Width || 0]}
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
          value={My_Component?.Pad_X}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[My_Component?.Pad_X || 0]}
              max={100}
              step={1}
              value={[My_Component?.Pad_X || 0]}
              onValueChange={Handle_Pad_X}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>
        {/* Pad X */}
        <Toolbox
          heading="Select Padding Y"
          handleChange={(e: any) => Handle_Pad_Y(e.target.value)}
          value={My_Component?.Pad_Y}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[My_Component?.Pad_Y || 0]}
              max={100}
              step={1}
              value={[My_Component?.Pad_Y || 0]}
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
              value={My_Component?.Hover_Border_Color}
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
              value={My_Component?.Hover_Bg_Color}
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
              value={My_Component?.Hover_Text_Color}
              onInput={Handle_Hover_Text_Color}
              className="inset-0 h-[32px] w-full border-none bg-transparent outline-none"
            />
          </div>
        </Toolbox>
        {/* weight */}
        <Toolbox
          heading="Select Font Weight"
          handleChange={(e: any) => Handle_Weight(e.target.value)}
          value={My_Component?.Font_Weight}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[My_Component?.Font_Weight || 0]}
              max={1000}
              step={1}
              value={[My_Component?.Font_Weight || 0]}
              className="w-full bg-white"
              onValueChange={Handle_Weight}
            />
          </div>
        </Toolbox>
        {/* Lineheight */}
        <Toolbox
          heading="Select Line Height"
          handleChange={(e: any) => Handle_Line_Height(e.target.value)}
          value={My_Component?.Line_Height}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[My_Component?.Line_Height || 0]}
              max={100}
              step={1}
              value={[My_Component?.Line_Height || 0]}
              className="w-full bg-white"
              onValueChange={Handle_Line_Height}
            />
          </div>
        </Toolbox>
        {/* letter spacing */}
        <Toolbox
          heading="Select Letter Spacing"
          handleChange={(e: any) => Handle_Letter_Spacing(e.target.value)}
          value={My_Component?.Letter_Spacing}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[My_Component?.Letter_Spacing || 0]}
              max={100}
              step={1}
              value={[My_Component?.Letter_Spacing || 0]}
              className="w-full bg-white"
              onValueChange={Handle_Letter_Spacing}
            />
          </div>
        </Toolbox>
      </div>
    </div>
  );
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
    if (My_Component?.Icon == icon) {
      Set_Icon(Selected_Id!, "");
    } else {
      Set_Icon(Selected_Id!, icon);
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
