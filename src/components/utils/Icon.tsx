"use client";

// Icon Border Width Not Working
// Icon Hover IS Left
// To Add Search In Icon Dialog
// To Add Custom Icon

import use_Toolbox_Store from "@/store/studio/Toolbox_Store";
import { use_Icon_Store } from "@/store/utils/Icon_Store";
import Link from "next/link";
import { useEffect, useState } from "react";

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
  // Import From Icon store
  const Icon_Components = use_Icon_Store((s) => s.Icon_Components);
  const Add_Icon_Component = use_Icon_Store((s) => s.Add_Icon_Component);
  const Set_Selected_Id = use_Icon_Store((s) => s.Set_Selected_Id);

  // Import From Toolbox
  const Icon_Toolbox_On_Open = use_Toolbox_Store((s) => s.Icon_Toolbox_On_Open);

  // Adding Component Logic
  const Existing_Component = Icon_Components.find((x) => x.Id === cId);
  const [initialized, setInitialized] = useState(false);
  if (!Existing_Component && !initialized) {
    Add_Icon_Component({
      Id: cId,
      Icon: icon,

      Icon_Size: iconSize,

      Icon_Color: iconColor,
      Icon_Bg_Color: iconBgColor,

      Icon_Border_Width: iconBorderWidth,
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

  // Finding Component
  const My_Component = Icon_Components.find((x) => x.Id === cId);

  // Handle Click
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    Icon_Toolbox_On_Open();
    Set_Selected_Id(cId);

    // Sending Data To Toolbox
    window.parent.postMessage(
      {
        type: "SET_ICON_SELECTED_ID",
        id: cId,
        attributes: {
          icon: My_Component?.Icon,
          iconSize: My_Component?.Icon_Size,
          iconColor: My_Component?.Icon_Color,
          iconBgColor: My_Component?.Icon_Bg_Color,
          iconBorderWidth: My_Component?.Icon_Border_Width,
          iconBorderColor: My_Component?.Icon_Border_Color,
          hoverIconColor: My_Component?.Hover_Icon_Color,
          hoverIconBgColor: My_Component?.Hover_Icon_Bg_Color,
          hoverIconBorderColor: My_Component?.Hover_Icon_Border_Color,
          padX: My_Component?.Pad_X,
          padY: My_Component?.Pad_Y,
          link: My_Component?.Link,
        },
      },
      "*"
    );
  };

  // Setting Env
  let env = "development";

  // Setting Element
  const Element = env === "development" ? "button" : link != "" ? Link : "span";

  // Setting Icon
  const IconComponent = (LucidIcons as any as any)[
    My_Component?.Icon || ""
  ] as React.ComponentType<{ size?: number }>;

  // Managing Hover
  const [isHover, setIsHover] = useState(false);

  // Import From Icon Store
  const Set_Icon = use_Icon_Store((s) => s.Set_Icon);
  const Set_Icon_Size = use_Icon_Store((s) => s.Set_Icon_Size);
  const Set_Icon_Color = use_Icon_Store((s) => s.Set_Icon_Color);
  const Set_Icon_Bg_Color = use_Icon_Store((s) => s.Set_Icon_Bg_Color);
  const Set_Icon_Border_Width = use_Icon_Store((s) => s.Set_Icon_Border_Width);
  const Set_Icon_Border_Color = use_Icon_Store((s) => s.Set_Icon_Border_Color);
  const Set_Hover_Icon_Color = use_Icon_Store((s) => s.Set_Hover_Icon_Color);
  const Set_Hover_Icon_Bg_Color = use_Icon_Store(
    (s) => s.Set_Hover_Icon_Bg_Color
  );
  const Set_Hover_Icon_Border_Color = use_Icon_Store(
    (s) => s.Set_Hover_Icon_Border_Color
  );
  const Set_Pad_X = use_Icon_Store((s) => s.Set_Pad_X);
  const Set_Pad_Y = use_Icon_Store((s) => s.Set_Pad_Y);
  const Set_Link = use_Icon_Store((s) => s.Set_Link);

  const Selected_Id = use_Icon_Store((s) => s.Selected_Id);

  // Handling Changes From Toolbox
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const {
        type,
        id,
        icon,
        iconSize,
        iconColor,
        iconBgColor,
        iconBorderWidth,
        iconBorderColor,
        hoverIconColor,
        hoverIconBgColor,
        hoverIconBorderColor,
        padX,
        padY,
        link,
      } = event.data;

      if (type === "UPDATE_ICON_COMPONENT_ICON") {
        Set_Icon(Selected_Id!, icon);
      } else if (type === "UPDATE_ICON_COMPONENT_ICON_SIZE") {
        Set_Icon_Size(Selected_Id!, iconSize);
      } else if (type === "UPDATE_ICON_COMPONENT_ICON_COLOR") {
        Set_Icon_Color(Selected_Id!, iconColor);
      } else if (type === "UPDATE_ICON_COMPONENT_ICON_BG_COLOR") {
        Set_Icon_Bg_Color(Selected_Id!, iconBgColor);
      } else if (type === "UPDATE_ICON_COMPONENT_ICON_BORDER_WIDTH") {
        Set_Icon_Border_Width(Selected_Id!, iconBorderWidth);
      } else if (type === "UPDATE_ICON_COMPONENT_ICON_BORDER_COLOR") {
        Set_Icon_Border_Color(Selected_Id!, iconBorderColor);
      } else if (type === "UPDATE_ICON_COMPONENT_HOVER_ICON_COLOR") {
        Set_Hover_Icon_Color(Selected_Id!, hoverIconColor);
      } else if (type === "UPDATE_ICON_COMPONENT_HOVER_ICON_BG_COLOR") {
        Set_Hover_Icon_Bg_Color(Selected_Id!, hoverIconBgColor);
      } else if (type === "UPDATE_ICON_COMPONENT_HOVER_ICON_BORDER_COLOR") {
        Set_Hover_Icon_Border_Color(Selected_Id!, hoverIconBorderColor);
      } else if (type === "UPDATE_ICON_COMPONENT_PAD_X") {
        Set_Pad_X(Selected_Id!, padX);
      } else if (type === "UPDATE_ICON_COMPONENT_PAD_Y") {
        Set_Pad_Y(Selected_Id!, padY);
      } else if (type === "UPDATE_ICON_COMPONENT_ICON_LINK") {
        Set_Link(Selected_Id!, link);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [Icon_Components, Selected_Id]);

  return (
    <Element
      id={cId}
      onClick={handleClick}
      href={link || ""}
      // Hover Management ... Incomplete ...
      onMouseOver={() => setIsHover(false)}
      onMouseLeave={() => setIsHover(false)}
      // Hover Management ... Incomplete ...
      className={`h-fit w-fit ${
        env == "development" ? "cursor-text" : "cursor-pointer"
      }`}
      style={{
        backgroundColor: `${
          isHover
            ? My_Component?.Hover_Icon_Bg_Color
            : My_Component?.Icon_Bg_Color
        }`,
        borderWidth: `${My_Component?.Icon_Border_Width}px`,
        borderColor: `${
          isHover
            ? My_Component?.Hover_Icon_Border_Color
            : My_Component?.Icon_Border_Color
        }`,
        padding: `${My_Component?.Pad_Y}px ${My_Component?.Pad_X}px`,
        color: `${
          isHover ? My_Component?.Hover_Icon_Color : My_Component?.Icon_Color
        }`,
      }}
    >
      {My_Component?.Icon && <IconComponent size={My_Component?.Icon_Size} />}
    </Element>
  );
};

export default Icon;
