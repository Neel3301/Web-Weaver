"use client";
import use_Toolbox_Store from "@/store/studio/Toolbox_Store";
import { use_Image_Store } from "@/store/utils/Image_Store";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Interface
interface Image_Props {
  cId: string;
  img: string;
  classname?: string;
  env?: "production" | "development";

  borderRadius?: number;
  height: number;
  width: number;
  maxHeight?: number;
  maxWidth?: number;
  minHeight?: number;
  minWidth?: number;
  object?: "fill" | "contain" | "cover" | "none" | "scale-down";
}

const Image = ({
  cId,
  img,
  classname,
  borderRadius,
  height,
  width,
  minHeight,
  minWidth,
  maxHeight,
  maxWidth,
  object,
}: Image_Props) => {
  //  Import From Image Store
  const Add_Image_Component = use_Image_Store((s) => s.Add_Image_Component);
  const Image_Components = use_Image_Store((s) => s.Image_Components);
  const Set_Selected_Id = use_Image_Store((s) => s.Set_Selected_Id);

  // Adding Component Logic
  const Existing_Component = Image_Components.find((x) => x.Id === cId);
  const [initialized, setInitialized] = useState(false);
  if (!Existing_Component && !initialized) {
    Add_Image_Component({
      Id: cId,
      Img: img,
      Img_Url: "",
      Display_Img: img,
      Border_Radius: borderRadius === undefined ? 0 : borderRadius,
      Height: height === undefined ? 100 : height,
      Width: width === undefined ? 100 : width,
      Max_Height: maxHeight!,
      Max_Width: maxWidth!,
      Min_Height: minHeight!,
      Min_Width: minWidth!,
      Object: object!,
    });
    setInitialized(true);
  }
  // Finding Component
  const My_Component = Image_Components.find((x) => x.Id === cId);

  // Setting Environment
  let env = "development";

  // Handle Click
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    Set_Selected_Id(cId);
    Set_Display_Img(cId, My_Component!.Img);
    window.parent.postMessage(
      {
        type: "SET_IMAGE_SELECTED_ID",
        id: cId,
        attributes: {
          img: My_Component?.Img,
          imgUrl: My_Component?.Img_Url,
          displayImg: My_Component?.Img,
          borderRadius: My_Component?.Border_Radius,
          height: My_Component?.Height,
          width: My_Component?.Width,
          maxHeight: My_Component?.Max_Height,
          maxWidth: My_Component?.Max_Width,
          minHeight: My_Component?.Min_Height,
          minWidth: My_Component?.Min_Width,
          object: My_Component?.Object,
        },
      },
      "*"
    );
  };

  // Import From Image Store
  const Set_Img = use_Image_Store((s) => s.Set_Img);
  const Set_Img_Url = use_Image_Store((s) => s.Set_Img_Url);
  const Set_Display_Img = use_Image_Store((s) => s.Set_Display_Img);
  const Set_Border_Radius = use_Image_Store((s) => s.Set_Border_Radius);
  const Set_Height = use_Image_Store((s) => s.Set_Height);
  const Set_Width = use_Image_Store((s) => s.Set_Width);
  const Set_Max_Height = use_Image_Store((s) => s.Set_Max_Height);
  const Set_Max_Width = use_Image_Store((s) => s.Set_Max_Width);
  const Set_Min_Height = use_Image_Store((s) => s.Set_Min_Height);
  const Set_Min_Width = use_Image_Store((s) => s.Set_Min_Width);
  const Set_Object = use_Image_Store((s) => s.Set_Object);

  const Selected_Id = use_Image_Store((s) => s.Selected_Id);

  // Handling Changes From Toolbox
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const {
        type,
        id,
        img,
        imgUrl,
        displayImg,
        borderRadius,
        height,
        width,
        maxHeight,
        maxWidth,
        minHeight,
        minWidth,
        object,
      } = event.data;

      if (type === "UPDATE_IMAGE_COMPONENT_IMG") {
        Set_Img(Selected_Id!, img);
      } else if (type === "UPDATE_IMAGE_COMPONENT_IMG_URL") {
        Set_Img_Url(Selected_Id!, imgUrl);
      } else if (type === "UPDATE_IMAGE_COMPONENT_DISPLAY_IMG") {
        Set_Display_Img(Selected_Id!, displayImg);
      } else if (type === "UPDATE_IMAGE_COMPONENT_HEIGHT") {
        Set_Height(Selected_Id!, height);
      } else if (type === "UPDATE_IMAGE_COMPONENT_WIDTH") {
        Set_Width(Selected_Id!, width);
      } else if (type === "UPDATE_IMAGE_COMPONENT_MAX_HEIGHT") {
        Set_Max_Height(Selected_Id!, maxHeight);
      } else if (type === "UPDATE_IMAGE_COMPONENT_MAX_WIDTH") {
        Set_Max_Width(Selected_Id!, maxWidth);
      } else if (type === "UPDATE_IMAGE_COMPONENT_MIN_HEIGHT") {
        Set_Min_Height(Selected_Id!, minHeight);
      } else if (type === "UPDATE_IMAGE_COMPONENT_MIN_WIDTH") {
        Set_Min_Width(Selected_Id!, minWidth);
      } else if (type === "UPDATE_IMAGE_COMPONENT_OBJECT") {
        Set_Object(Selected_Id!, object);
      } else if (type === "UPDATE_IMAGE_COMPONENT_BORDER_RADIUS") {
        Set_Border_Radius(Selected_Id!, borderRadius);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [Image_Components, Selected_Id]);

  return (
    <div
      style={{
        height: `${My_Component?.Height}px`,
        width: `${My_Component?.Width}px`,
        minHeight: `${My_Component?.Min_Height}px`,
        minWidth: `${My_Component?.Min_Width}px`,
        maxHeight: `${My_Component?.Max_Height}px`,
        maxWidth: `${My_Component?.Max_Width}px`,
      }}
      className="resize"
      onClick={env == "development" ? handleClick : () => {}}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={My_Component?.Img}
        alt={img}
        id={cId}
        className={`${classname} h-full w-full`}
        style={{
          objectFit: `${My_Component?.Object!}`,
          borderRadius: `${My_Component?.Border_Radius}px`,
        }}
      />
    </div>
  );
};

export default Image;
