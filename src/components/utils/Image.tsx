import use_Toolbox_Store from "@/store/studio/Toolbox_Store";
import { use_Image_Store } from "@/store/utils/Image_Store";
import { usePathname } from "next/navigation";
import { useState } from "react";

// Interface
interface Image_Props {
  cid: string;
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
  cid,
  img,
  classname,
  env = "development",
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
    addImageComponent,
    ImageComponents,
    setSelectedId,
    setImg,
    setDisplayImg,
  ] = use_Image_Store((s) => [
    s.Add_Image_Component,
    s.Image_Components,
    s.Set_Selected_Id,
    s.Set_Img,
    s.Set_Display_Img,
  ]);

  // Adding Component
  const [initialized, setInitialized] = useState(false);
  const existingComponent = ImageComponents.find(
    (myComponent) => myComponent.Id === cid
  );
  if (!existingComponent) {
    if (!initialized) {
      addImageComponent({
        Id: cid,
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
  }
  // Model Store
  const Image_Toolbox_On_Open = use_Toolbox_Store(
    (s) => s.Image_Toolbox_On_Open
  );

  // Finding Component
  const component = ImageComponents.find(
    (myComponent) => myComponent.Id === cid
  );

  // Setting Environment
  const path = usePathname();
  if (path.startsWith("/web/")) {
    env = "production";
  }

  // Handle Click
  const handleClick = () => {
    setSelectedId(cid);
    Image_Toolbox_On_Open();
    setDisplayImg(cid, component!.Img);
  };

  return (
    <div
      style={{
        height: `${component?.Height}px`,
        width: `${component?.Width}px`,
        minHeight: `${component?.Min_Height}px`,
        minWidth: `${component?.Min_Width}px`,
        maxHeight: `${component?.Max_Height}px`,
        maxWidth: `${component?.Max_Width}px`,
      }}
      className="resize"
      onClick={handleClick}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={component?.Img}
        alt={img}
        id={cid}
        className={`${classname} h-full w-full`}
        style={{
          objectFit: `${component?.Object!}`,
          borderRadius: `${component?.Border_Radius}px`,
        }}
      />
    </div>
  );
};

export default Image;
