"use client";
import use_Toolbox_Store from "@/store/studio/Toolbox_Store";
import { use_Icon_Store } from "@/store/utils/Icon_Store";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import * as LucidIcons from "lucide-react";

interface Icon_Props {
  cId: string;
  icon: string;

  iconSize?: number;

  iconColor?: string;
  iconBgColor?: string;

  iconBorderWidth?: number;
  iconBorderColor?: string;

  hoverIconColor?: string;
  hoverIconBgColor?: string;
  hoverIconBorderColor?: string;

  padX?: number;
  padY?: number;

  link?: string;
}
const Icon = ({
  cId,
  icon = "",

  iconSize = 24,

  iconColor = "#ffffff",
  iconBgColor = "transparent",

  iconBorderWidth = 1,
  iconBorderColor = "transparent",

  hoverIconColor = "transparent",
  hoverIconBgColor = "transparent",
  hoverIconBorderColor = "transparent",

  padX = 4,
  padY = 4,

  link = "",
}: Icon_Props) => {
  // Btn stote
  const [Icon_Component, Add_Icon_Component, Set_Selected_Id] = use_Icon_Store(
    (s) => [s.Icon_Components, s.Add_Icon_Component, s.Set_Selected_Id]
  );

  // Btn toolbox
  const [Icon_Toolbox_On_Open] = use_Toolbox_Store((s) => [
    s.Icon_Toolbox_On_Open,
  ]);

  // adding element
  const Existing_Component = Icon_Component.find((x) => x.Id === cId);
  const [initialized, setInitialized] = useState(false);
  if (!Existing_Component && !initialized) {
    Add_Icon_Component({
      Id: cId,
      Icon: icon,

      Icon_Size: iconSize,

      Icon_Color: iconColor,
      Icon_Bg_Color: iconBgColor,

      Icon_Border_width: iconBorderWidth,
      Icon_Border_Color: iconBorderColor,

      Hover_Icon_Color: hoverIconColor,
      Hover_Icon_Bg_Color: hoverIconBgColor,
      Hover_Icon_Border_Color: hoverIconBorderColor,

      Pad_X: padX,
      Pad_Y: padY,

      Link: link,
    });
    setInitialized(true);
  }

  // finding component
  const My_Component = Icon_Component.find((x) => x.Id === cId);

  // handle click
  const handleClick = () => {
    Icon_Toolbox_On_Open();
    Set_Selected_Id(cId);
  };

  // setting environment
  let env = "development";
  const path = usePathname();
  if (path.startsWith("/web/")) {
    env = "production";
  }

  // element
  const Element = env === "development" ? "span" : link != "" ? Link : "span";

  // icon
  const IconComponent = (LucidIcons as any as any)[
    My_Component?.Icon || ""
  ] as React.ComponentType<{ size?: number }>;

  // hover0
  const [isHover, setIsHover] = useState(false);

  return (
    <Element
      id={cId}
      onClick={env == "development" ? handleClick : () => {}}
      href={link || ""}
      className={`h-fit w-fit ${env == "development" ? "cursor-text" : "cursor-pointer"}`}
      style={{
        backgroundColor: `${isHover ? My_Component?.Hover_Icon_Bg_Color : My_Component?.Icon_Bg_Color}`,
        borderWidth: `${My_Component?.Icon_Border_width}px`,
        borderColor: `${isHover ? My_Component?.Hover_Icon_Border_Color : My_Component?.Icon_Border_Color}`,
        padding: `${My_Component?.Pad_Y}px ${My_Component?.Pad_X}px`,
        color: `${isHover ? My_Component?.Hover_Icon_Color : My_Component?.Icon_Color}`,
      }}
    >
      {My_Component?.Icon != "" && (
        <IconComponent size={My_Component?.Icon_Size} />
      )}
    </Element>
  );
};

export default Icon;
