"use client";
import use_Toolbox_Store from "@/store/studio/Toolbox_Store";
import { use_Image_Store } from "@/store/utils/Image_Store";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  //  Image Store
  const [
    Add_Image_Component,
    Image_Components,
    Set_Selected_Id,
    Set_Img,
    Set_Display_Img,
  ] = use_Image_Store((s) => [
    s.Add_Image_Component,
    s.Image_Components,
    s.Set_Selected_Id,
    s.Set_Img,
    s.Set_Display_Img,
  ]);

  // Adding Component
  const Existing_Component = Image_Components.find(
    (myComponent) => myComponent.Id === cId
  );
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
  // Model Store
  const Image_Toolbox_On_Open = use_Toolbox_Store(
    (s) => s.Image_Toolbox_On_Open
  );

  // Finding Component
  const My_Component = Image_Components.find(
    (myComponent) => myComponent.Id === cId
  );

  // Setting Environment
  let env = "development";
  const path = usePathname();
  if (path.startsWith("/web/")) {
    env = "production";
  }

  // Handle Click
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    Set_Selected_Id(cId);
    Image_Toolbox_On_Open();
    Set_Display_Img(cId, My_Component!.Img);
  };

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
