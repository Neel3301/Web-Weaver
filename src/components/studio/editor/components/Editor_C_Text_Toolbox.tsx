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

const Editor_C_Text_Toolbox = () => {
  const Text_Toolbox_On_Close = use_Toolbox_Store(
    (s) => s.Text_Toolbox_On_Close
  );

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
            <Select onValueChange={() => {}} value="Poppins">
              <SelectTrigger className="border-none text-neutral-300">
                <SelectValue placeholder="Select Fonts" />
              </SelectTrigger>
              <SelectContent className="bg-black text-neutral-300">
                {Font_List.map((font: Object, index: number) => (
                  <SelectItem
                    value={`${Object.keys(Font_List[index])[0]}`}
                    key={`${Object.keys(Font_List[index])[0]}`}
                    className="cursor-pointer py-[16px]"
                  >
                    {`${Object.keys(Font_List[index])[0]}`}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </Toolbox>
        {/* color */}
        <Toolbox heading="Select Text Color">
          <div>
            <input
              type="color"
              // value={component?.textColor}
              // onInput={handleTextColor}
              className="inset-0 h-[32px] w-full border-none bg-transparent outline-none"
            />
          </div>
        </Toolbox>
        {/* size */}
        <Toolbox heading="Select Font Size">
          <div className="py-[12px]">
            <Slider
              defaultValue={[0]}
              max={100}
              step={1}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>
        {/* Alignment  */}
        <Toolbox heading="Select Alignment">
          <div className="flex items-center justify-between py-[12px]">
            <div className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] border-[1px]">
              <AlignLeft size={24} />
            </div>
            <div className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] hover:border-[1px]">
              <AlignCenter size={24} />
            </div>
            <div className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] hover:border-[1px]">
              <AlignRight size={24} />
            </div>
            <div className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] hover:border-[1px]">
              <AlignJustify size={24} />
            </div>
          </div>
        </Toolbox>
        {/* Decoration */}
        <Toolbox heading="Select Text Decoration">
          <div className="flex items-center justify-between py-[12px]">
            <div className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] border-[1px] hover:border-[1px]">
              <Italic size={24} />
            </div>
            <div className="flex h-[32px] w-[32px] cursor-pointer items-center justify-center rounded-[4px] hover:border-[1px]">
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
              />
            </div>
          </div>
        </Toolbox>
        {/* weight */}
        <Toolbox heading="Select Font Weight">
          <div className="py-[12px]">
            <Slider
              defaultValue={[0]}
              max={100}
              step={1}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>
        {/* Lineheight */}
        <Toolbox heading="Select Line Height">
          <div className="py-[12px]">
            <Slider
              defaultValue={[0]}
              max={100}
              step={1}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>
        {/* letter spacing */}
        <Toolbox heading="Select Letter Spacing">
          <div className="py-[12px]">
            <Slider
              defaultValue={[0]}
              max={100}
              step={1}
              className="w-full bg-white"
            />
          </div>
        </Toolbox>
      </div>
      {/* Delete Text */}
    </div>
  );
};

const Toolbox = ({
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

export default Editor_C_Text_Toolbox;
