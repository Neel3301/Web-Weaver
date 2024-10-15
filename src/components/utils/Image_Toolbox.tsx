"use client";

import use_Toolbox_Store from "@/store/studio/Toolbox_Store";
import { use_Image_Store } from "@/store/utils/Image_Store";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { Slider } from "../ui/slider";
import { Button } from "../ui/button";
import { Toolbox } from "./Text_Toolbox";
import { sendMessageToIframe } from "@/hooks/studio/Send_Msg_To_Iframe";

const Image_Toolbox = () => {
  // Import From Toolbox Store
  const Image_Toolbox_On_Close = use_Toolbox_Store(
    (s) => s.Image_Toolbox_On_Close
  );
  const Image_Toolbox_On_Open = use_Toolbox_Store(
    (s) => s.Image_Toolbox_On_Open
  );
  const Image_Toolbox_Is_Open = use_Toolbox_Store(
    (s) => s.Image_Toolbox_Is_Open
  );

  // Import From Image Store
  const Selected_Id = use_Image_Store((s) => s.Selected_Id);
  const Set_Selected_Id = use_Image_Store((s) => s.Set_Selected_Id);

  // Local State
  const [Border_Radius, Set_Border_Radius] = useState<number>();
  const [Height, Set_Height] = useState<number>();
  const [Width, Set_Width] = useState<number>();
  const [Max_Height, Set_Max_Height] = useState<number>();
  const [Max_Width, Set_Max_Width] = useState<number>();
  const [Min_Height, Set_Min_Height] = useState<number>();
  const [Min_Width, Set_Min_Width] = useState<number>();
  const [Img, Set_Img] = useState<string>();
  const [Object, Set_Object] = useState<string>();
  const [Display_Img, Set_Display_Img] = useState<string>();

  const Handle_Border_Radius = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Border_Radius(value);
    sendMessageToIframe({
      type: "UPDATE_IMAGE_COMPONENT_BORDER_RADIUS",
      id: Selected_Id,
      borderRadius: value,
    });
  };
  const Handle_Height = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Height(value);
    sendMessageToIframe({
      type: "UPDATE_IMAGE_COMPONENT_HEIGHT",
      id: Selected_Id,
      height: value,
    });
  };
  const Handle_Width = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Width(value);
    sendMessageToIframe({
      type: "UPDATE_IMAGE_COMPONENT_WIDTH",
      id: Selected_Id,
      width: value,
    });
  };
  const Handle_Max_Height = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Max_Height(value);
    sendMessageToIframe({
      type: "UPDATE_IMAGE_COMPONENT_MAX_HEIGHT",
      id: Selected_Id,
      maxHeight: value,
    });
  };
  const Handle_Max_Width = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Max_Width(value);
    sendMessageToIframe({
      type: "UPDATE_IMAGE_COMPONENT_MAX_WIDTH",
      id: Selected_Id,
      maxWidth: value,
    });
  };
  const Handle_Min_Height = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Min_Height(value);
    sendMessageToIframe({
      type: "UPDATE_IMAGE_COMPONENT_MIN_HEIGHT",
      id: Selected_Id,
      minHeight: value,
    });
  };
  const Handle_Min_Width = (value: any) => {
    value = typeof value == "string" ? value : value["0"];
    Set_Min_Width(value);
    sendMessageToIframe({
      type: "UPDATE_IMAGE_COMPONENT_MIN_WIDTH",
      id: Selected_Id,
      minWidth: value,
    });
  };

  const Handle_Object = (
    value: "fill" | "contain" | "cover" | "none" | "scale-down"
  ) => {
    Set_Object(value);
    sendMessageToIframe({
      type: "UPDATE_IMAGE_COMPONENT_OBJECT",
      id: Selected_Id,
      object: value,
    });
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
          Set_Display_Img(result);
          Set_Img(result);
          sendMessageToIframe({
            type: "UPDATE_IMAGE_COMPONENT_IMG",
            id: Selected_Id,
            img: result,
          });
        } else {
          sendMessageToIframe({
            type: "USE_DEFAULT_IMAGE",
            id: Selected_Id,
            img: selectedImage,
          });
        }
      };
    }
  };

  // Receiving Data From Component Setting Id and Default Attributes Value
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const data = event.data;
      if (data.type === "SET_IMAGE_SELECTED_ID") {
        // Setting Component ID
        Set_Selected_Id(data.id);

        // Opening Text Toolbox
        Image_Toolbox_On_Open();

        // Setting Default Attributes
        Set_Border_Radius(data.attributes.borderRadius);
        Set_Height(data.attributes.height);
        Set_Width(data.attributes.width);
        Set_Max_Height(data.attributes.maxHeight);
        Set_Max_Width(data.attributes.maxWidth);
        Set_Min_Height(data.attributes.minHeight);
        Set_Min_Width(data.attributes.minWidth);
        Set_Img(data.attributes.img);
        Set_Object(data.attributes.object);
        Set_Display_Img(data.attributes.displayImg);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return Image_Toolbox_Is_Open ? (
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
          <img src={Img} alt={Img} className="w-full" />
        </div>

        {/* Image Height */}
        <Toolbox
          heading="Select Image Height"
          handleChange={(e: any) => Handle_Height(e.target.value)}
          value={Height}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[Height || 0]}
              max={1000}
              step={1}
              value={[Height || 0]}
              className="w-full bg-white"
              onValueChange={Handle_Height}
            />
          </div>
        </Toolbox>

        {/* Image Width */}
        <Toolbox
          heading="Select Image Width"
          handleChange={(e: any) => Handle_Width(e.target.value)}
          value={Width}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[Width || 0]}
              max={1000}
              step={1}
              value={[Width || 0]}
              className="w-full bg-white"
              onValueChange={Handle_Width}
            />
          </div>
        </Toolbox>

        {/* Border Radius */}
        <Toolbox
          heading="Select Border Radius"
          handleChange={(e: any) => Handle_Border_Radius(e.target.value)}
          value={Border_Radius}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[Border_Radius || 0]}
              max={1000}
              step={1}
              value={[Border_Radius || 0]}
              className="w-full bg-white"
              onValueChange={Handle_Border_Radius}
            />
          </div>
        </Toolbox>

        {/* Object Property */}
        <Toolbox heading="Select Object Property">
          <div className="flex items-center justify-between py-[12px]">
            <div
              className={`flex cursor-pointer items-center justify-center rounded-[4px] px-[12px] py-[8px] ${Object === "fill" && "border-[1px]"} hover:border-[1px]`}
              onClick={() => Handle_Object("fill")}
            >
              Fill
            </div>
            <div
              className={`flex cursor-pointer items-center justify-center rounded-[4px] px-[12px] py-[8px] ${Object === "contain" && "border-[1px]"} hover:border-[1px]`}
              onClick={() => Handle_Object("contain")}
            >
              Contain
            </div>{" "}
            <div
              className={`flex cursor-pointer items-center justify-center rounded-[4px] px-[12px] py-[8px] ${Object === "cover" && "border-[1px]"} hover:border-[1px]`}
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
          value={Max_Height}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[Max_Height || 0]}
              max={1000}
              step={1}
              value={[Max_Height || 0]}
              className="w-full bg-white"
              onValueChange={Handle_Max_Height}
            />
          </div>
        </Toolbox>

        {/* Max Width */}
        <Toolbox
          heading="Select Max Width"
          handleChange={(e: any) => Handle_Max_Width(e.target.value)}
          value={Max_Width}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[Max_Width || 0]}
              max={1000}
              step={1}
              value={[Max_Width || 0]}
              className="w-full bg-white"
              onValueChange={Handle_Max_Width}
            />
          </div>
        </Toolbox>

        {/* Min Height */}
        <Toolbox
          heading="Select Min Height"
          handleChange={(e: any) => Handle_Min_Height(e.target.value)}
          value={Min_Height}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[Min_Height || 0]}
              max={1000}
              step={1}
              value={[Min_Height || 0]}
              className="w-full bg-white"
              onValueChange={Handle_Min_Height}
            />
          </div>
        </Toolbox>

        {/* Min Width */}
        <Toolbox
          heading="Select Min Width"
          handleChange={(e: any) => Handle_Min_Width(e.target.value)}
          value={Min_Width}
        >
          <div className="py-[12px]">
            <Slider
              defaultValue={[Min_Width || 0]}
              max={1000}
              step={1}
              value={[Min_Width || 0]}
              className="w-full bg-white"
              onValueChange={Handle_Min_Width}
            />
          </div>
        </Toolbox>
      </div>
    </div>
  ) : null;
};

export default Image_Toolbox;
