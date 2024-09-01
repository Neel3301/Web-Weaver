"use client";

import use_Toolbox_Store from "@/store/studio/Toolbox_Store";
import { use_Image_Store } from "@/store/utils/Image_Store";
import { X } from "lucide-react";
import { useState } from "react";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";
import { Toolbox } from "./Text_Toolbox";

const Image_Toolbox = () => {
  const Image_Toolbox_On_Close = use_Toolbox_Store(
    (s) => s.Image_Toolbox_On_Close
  );

  const [
    Set_Border_Radius,
    Set_Height,
    Set_Width,
    Set_Max_Height,
    Set_Max_Width,
    Set_Min_Height,
    Set_Min_Width,
    Set_Img,
    Image_Components,
    Add_Image_Component,
    selectedId,
    Set_Object,
    Set_Display_Img,
  ] = use_Image_Store((s) => [
    s.Set_Border_Radius,
    s.Set_Height,
    s.Set_Width,
    s.Set_Max_Height,
    s.Set_Max_Width,
    s.Set_Min_Height,
    s.Set_Min_Width,
    s.Set_Img,
    s.Image_Components,
    s.Add_Image_Component,
    s.Selected_Id,
    s.Set_Object,
    s.Set_Display_Img,
  ]);

  const component = Image_Components.find(
    (myComponent) => myComponent.Id === selectedId
  );

  const Handle_Border_Radius = (e: any) => {
    Set_Border_Radius(selectedId!, e);
  };
  const Handle_Height = (e: any) => {
    Set_Height(selectedId!, e);
  };
  const Handle_Width = (e: any) => {
    Set_Width(selectedId!, e);
  };
  const Handle_Max_Height = (e: any) => {
    Set_Max_Height(selectedId!, e);
  };
  const Handle_Max_Width = (e: any) => {
    Set_Max_Width(selectedId!, e);
  };
  const Handle_Min_Height = (e: any) => {
    Set_Min_Height(selectedId!, e);
  };
  const Handle_Min_Width = (e: any) => {
    Set_Min_Width(selectedId!, e);
  };

  const Handle_Object = (
    value: "fill" | "contain" | "cover" | "none" | "scale-down"
  ) => {
    Set_Object(selectedId!, value);
  };

  const [selectedImage, setSelectedImage] = useState("");
  const [selectedImageName, setSelectedImageName] = useState("");
  const handleImageUpload = (event: any) => {
    if (event.target.files && event.target.files.length > 0) {
      const selectedFile = event.target.files?.[0];
      setSelectedImageName(selectedFile.name);

      const reader = new FileReader();
      reader.readAsDataURL(selectedFile);
      reader.onloadend = async () => {
        if (reader.result && typeof reader.result === "string") {
          const result = reader.result as string;
          setSelectedImage(result);
          Set_Display_Img(selectedId!, result);
          Set_Img(selectedId!, result);
        }
      };
    }
  };

  return (
    <div className="h-full w-full border-r-[1px] border-neutral-700">
      {/* text editor title  */}
      <div
        className={`flex h-[60px] w-full items-center justify-between border-b-[1px] border-neutral-700 px-3`}
      >
        <h2 className={`text-[24px] font-bold text-neutral-200`}>
          Image Editor
        </h2>
        <div onClick={Image_Toolbox_On_Close} className="cursor-pointer">
          <X size={20} />
        </div>
      </div>
      {/* toolkit */}
      <div className="h-[calc(100vh-80px-66px)] w-full overflow-y-scroll p-4">
        {/* Upload Image */}
        <p className="pb-2">Select Image</p>
        <label htmlFor="file-upload">
          <div className="flex items-center justify-between rounded border border-white">
            <p className="w-[40%] cursor-pointer bg-white p-2 text-sm text-black">
              Choose File
            </p>
            <p className="w-[60%] overflow-hidden overflow-ellipsis whitespace-nowrap px-2 text-left">
              {selectedImage.length > 0 ? selectedImageName : "No file choosen"}
            </p>
          </div>
          <input
            id="file-upload"
            type="file"
            className="hidden"
            onChange={handleImageUpload}
          />
        </label>

        {/* Image Preview */}
        <div className="w-full border-b-2 border-gray-800 py-6">
          <img src={component?.Img} alt={component?.Img} className="w-full" />
        </div>

        {/* Image Height */}
        <Toolbox
          heading="Select Image Height"
          handleChange={(e: any) => Handle_Height(e.target.value)}
          value={component?.Height}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[component?.Height || 0]}
              max={1000}
              step={1}
              value={[component?.Height || 0]}
              className="w-full bg-white"
              onValueChange={Handle_Height}
            />
          </div>
        </Toolbox>

        {/* Image Width */}
        <Toolbox
          heading="Select Image Width"
          handleChange={(e: any) => Handle_Width(e.target.value)}
          value={component?.Width}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[component?.Width || 0]}
              max={1000}
              step={1}
              value={[component?.Width || 0]}
              className="w-full bg-white"
              onValueChange={Handle_Width}
            />
          </div>
        </Toolbox>

        {/* Border Radius */}
        <Toolbox
          heading="Select Border Radius"
          handleChange={(e: any) => Handle_Border_Radius(e.target.value)}
          value={component?.Border_Radius}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[component?.Border_Radius || 0]}
              max={1000}
              step={1}
              value={[component?.Border_Radius || 0]}
              className="w-full bg-white"
              onValueChange={Handle_Border_Radius}
            />
          </div>
        </Toolbox>

        {/* Object Property */}
        <Toolbox heading="Select Object Property">
          <div className="flex items-center justify-between py-[12px]">
            <div
              className={`flex cursor-pointer items-center justify-center rounded-[4px] px-[12px] py-[8px] ${component?.Object === "fill" && "border-[1px]"} hover:border-[1px]`}
              onClick={() => Handle_Object("fill")}
            >
              Fill
            </div>
            <div
              className={`flex cursor-pointer items-center justify-center rounded-[4px] px-[12px] py-[8px] ${component?.Object === "contain" && "border-[1px]"} hover:border-[1px]`}
              onClick={() => Handle_Object("contain")}
            >
              Contain
            </div>{" "}
            <div
              className={`flex cursor-pointer items-center justify-center rounded-[4px] px-[12px] py-[8px] ${component?.Object === "cover" && "border-[1px]"} hover:border-[1px]`}
              onClick={() => Handle_Object("cover")}
            >
              Cover
            </div>
          </div>
        </Toolbox>

        {/* Max Height */}
        <Toolbox
          heading="Select Max Height"
          handleChange={(e: any) => Handle_Max_Height(e.target.value)}
          value={component?.Max_Height}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[component?.Max_Height || 0]}
              max={1000}
              step={1}
              value={[component?.Max_Height || 0]}
              className="w-full bg-white"
              onValueChange={Handle_Max_Height}
            />
          </div>
        </Toolbox>

        {/* Max Width */}
        <Toolbox
          heading="Select Max Width"
          handleChange={(e: any) => Handle_Max_Width(e.target.value)}
          value={component?.Max_Width}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[component?.Max_Width || 0]}
              max={1000}
              step={1}
              value={[component?.Max_Width || 0]}
              className="w-full bg-white"
              onValueChange={Handle_Max_Width}
            />
          </div>
        </Toolbox>

        {/* Min Height */}
        <Toolbox
          heading="Select Min Height"
          handleChange={(e: any) => Handle_Min_Height(e.target.value)}
          value={component?.Min_Height}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[component?.Min_Height || 0]}
              max={1000}
              step={1}
              value={[component?.Min_Height || 0]}
              className="w-full bg-white"
              onValueChange={Handle_Min_Height}
            />
          </div>
        </Toolbox>

        {/* Min Width */}
        <Toolbox
          heading="Select Min Width"
          handleChange={(e: any) => Handle_Min_Width(e.target.value)}
          value={component?.Min_Width}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[component?.Min_Width || 0]}
              max={1000}
              step={1}
              value={[component?.Min_Width || 0]}
              className="w-full bg-white"
              onValueChange={Handle_Min_Width}
            />
          </div>
        </Toolbox>
      </div>
    </div>
  );
};

export default Image_Toolbox;
