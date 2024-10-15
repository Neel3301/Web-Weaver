"use client";

// To Improve Icon Selection

import { use_Btn_Store } from "@/store/utils/Btn_Store";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";
import * as LucidIcons from "lucide-react";
import { useSearchParams } from "next/navigation";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface Btn_Props {
  cId: string;
  children?: string;
  tag?: keyof JSX.IntrinsicElements | React.ComponentType<any>;

  fontStyle?: string;
  fontSize?: number;
  fontWeight?: number;

  textColor?: string;
  textUnderline?: boolean;
  textItalic?: boolean;

  bgColor?: string;
  borderWidth?: number;
  borderColor?: string;
  padX?: number;
  padY?: number;

  hoverBorderColor?: string;
  hoverBgColor?: string;
  hoverTextColor?: string;

  borderRadiusTl?: number;
  borderRadiusTr?: number;
  borderRadiusBl?: number;
  borderRadiusBr?: number;

  icon?: string;

  lineHeight?: number;
  letterSpacing?: number;

  link?: string;

  classname?: string;
}

const Btn = ({
  cId,
  children = "btn",
  tag = "span",

  fontStyle = poppins.className,
  fontSize = 18,
  fontWeight = 400,

  textColor = "#595959",
  textUnderline = false,
  textItalic = false,

  bgColor = "#000000",
  borderWidth = 2,
  borderColor = "#fff",
  padX = 12,
  padY = 4,

  hoverBorderColor = "#000000",
  hoverBgColor = "#ffffff",
  hoverTextColor = "#000000",

  borderRadiusTl = 0,
  borderRadiusTr = 0,
  borderRadiusBl = 0,
  borderRadiusBr = 0,

  icon = "",

  lineHeight,
  letterSpacing,

  link,

  classname = "",
}: Btn_Props) => {
  // Import From Btn store
  const Btn_Components = use_Btn_Store((s) => s.Btn_Components);
  const Add_Btn_Component = use_Btn_Store((s) => s.Add_Btn_Component);
  const Set_Selected_Id = use_Btn_Store((s) => s.Set_Selected_Id);
  const Set_Content = use_Btn_Store((s) => s.Set_Content);

  // Adding Component Logic
  const Existing_Component = Btn_Components.find((x) => x.Id === cId);
  const [initialized, setInitialized] = useState(false);
  if (!Existing_Component && !initialized) {
    Add_Btn_Component({
      Id: cId,
      Content: children,
      Font_Style: fontStyle,
      Font_Size: fontSize,
      Font_Weight: fontWeight,
      Text_Color: textColor,
      Text_Underline: textUnderline,
      Text_Italic: textItalic,
      Bg_Color: bgColor,
      Border_Width: borderWidth,
      Border_Color: borderColor,
      Pad_X: padX,
      Pad_Y: padY,
      Hover_Border_Color: hoverBorderColor,
      Hover_Bg_Color: hoverBgColor,
      Hover_Text_Color: hoverTextColor,
      Border_Radius_Tl: borderRadiusTl,
      Border_Radius_Tr: borderRadiusTr,
      Border_Radius_Bl: borderRadiusBl,
      Border_Radius_Br: borderRadiusBr,
      Icon: icon,
      Line_Height: lineHeight,
      Letter_Spacing: letterSpacing,
      Link: link,
      Classname: classname,
    });
    Set_Content(cId, children);
    setInitialized(true);
  }

  // Finding Component
  const My_Component = Btn_Components.find((x) => x.Id === cId);

  // Handle Click
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    Set_Selected_Id(cId);

    // Sending Data To Toolbox
    window.parent.postMessage(
      {
        type: "SET_BTN_SELECTED_ID",
        id: cId,
        attributes: {
          fontStyle: My_Component?.Font_Style,
          fontSize: My_Component?.Font_Size,
          fontWeight: My_Component?.Font_Weight,
          textColor: My_Component?.Text_Color,
          textUnderline: My_Component?.Text_Underline,
          textItalic: My_Component?.Text_Italic,
          bgColor: My_Component?.Bg_Color,
          borderWidth: My_Component?.Border_Width,
          borderColor: My_Component?.Border_Color,
          padX: My_Component?.Pad_X,
          padY: My_Component?.Pad_Y,
          hoverBorderColor: My_Component?.Hover_Border_Color,
          hoverBgColor: My_Component?.Hover_Bg_Color,
          hoverTextColor: My_Component?.Hover_Text_Color,
          borderRadiusTl: My_Component?.Border_Radius_Tl,
          borderRadiusTr: My_Component?.Border_Radius_Tr,
          borderRadiusBl: My_Component?.Border_Radius_Bl,
          borderRadiusBr: My_Component?.Border_Radius_Br,
          icon: My_Component?.Icon,
          lineHeight: My_Component?.Line_Height,
          letterSpacing: My_Component?.Letter_Spacing,
          link: My_Component?.Link,
        },
      },
      "*"
    );
  };

  // Handle Input
  const handleInput = (e: React.FormEvent<HTMLElement>) => {
    Set_Content(cId, e.currentTarget.textContent || "");
  };

  // Setting Env
  const searchParams = useSearchParams();
  const env = searchParams.get("editor") ? "development" : "production";
  // ...

  // Setting Tag
  const Element = env == "development" ? "span" : Link;

  // Hover State
  const [isHover, setIsHover] = useState(false);

  // Managing Icon
  const IconComponent = (LucidIcons as any as any)[
    My_Component?.Icon || ""
  ] as React.ComponentType<{ size?: number }>;

  // Import From Text Store
  const Set_Font_Style = use_Btn_Store((s) => s.Set_Font_Style);
  const Set_Font_Size = use_Btn_Store((s) => s.Set_Font_Size);
  const Set_Font_Weight = use_Btn_Store((s) => s.Set_Font_Weight);
  const Set_Text_Color = use_Btn_Store((s) => s.Set_Text_Color);
  const Set_Text_Underline = use_Btn_Store((s) => s.Set_Text_Underline);
  const Set_Text_Italic = use_Btn_Store((s) => s.Set_Text_Italic);
  const Set_Line_Height = use_Btn_Store((s) => s.Set_Line_Height);
  const Set_Letter_Spacing = use_Btn_Store((s) => s.Set_Letter_Spacing);
  const Set_Link = use_Btn_Store((s) => s.Set_Link);
  const Set_Bg_Color = use_Btn_Store((s) => s.Set_Bg_Color);
  const Set_Border_Width = use_Btn_Store((s) => s.Set_Border_Width);
  const Set_Border_Color = use_Btn_Store((s) => s.Set_Border_Color);
  const Set_Pad_X = use_Btn_Store((s) => s.Set_Pad_X);
  const Set_Pad_Y = use_Btn_Store((s) => s.Set_Pad_Y);
  const Set_Hover_Border_Color = use_Btn_Store((s) => s.Set_Hover_Border_Color);
  const Set_Hover_Bg_Color = use_Btn_Store((s) => s.Set_Hover_Bg_Color);
  const Set_Hover_Text_Color = use_Btn_Store((s) => s.Set_Hover_Text_Color);
  const Set_Border_Radius_Tl = use_Btn_Store((s) => s.Set_Border_Radius_Tl);
  const Set_Border_Radius_Tr = use_Btn_Store((s) => s.Set_Border_Radius_Tr);
  const Set_Border_Radius_Bl = use_Btn_Store((s) => s.Set_Border_Radius_Bl);
  const Set_Border_Radius_Br = use_Btn_Store((s) => s.Set_Border_Radius_Br);
  const Set_Icon = use_Btn_Store((s) => s.Set_Icon);

  const Selected_Id = use_Btn_Store((s) => s.Selected_Id);

  // Handling Changes From Toolbox
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const {
        type,
        id,
        fontStyle,
        fontSize,
        fontWeight,
        textColor,
        textUnderline,
        textItalic,
        lineHeight,
        letterSpacing,
        link,
        bgColor,
        borderWidth,
        borderColor,
        padX,
        padY,
        hoverBorderColor,
        hoverBgColor,
        hoverTextColor,
        borderRadiusTl,
        borderRadiusTr,
        borderRadiusBl,
        borderRadiusBr,
        icon,
      } = event.data;

      if (type === "UPDATE_BTN_COMPONENT_FONT_STYLE") {
        Set_Font_Style(Selected_Id!, fontStyle);
      } else if (type === "UPDATE_BTN_COMPONENT_FONT_SIZE") {
        Set_Font_Size(Selected_Id!, fontSize);
      } else if (type === "UPDATE_BTN_COMPONENT_FONT_WEIGHT") {
        Set_Font_Weight(Selected_Id!, fontWeight);
      } else if (type === "UPDATE_BTN_COMPONENT_TEXT_COLOR") {
        Set_Text_Color(Selected_Id!, textColor);
      } else if (type === "UPDATE_BTN_COMPONENT_TEXT_UNDERLINE") {
        Set_Text_Underline(Selected_Id!, textUnderline);
      } else if (type === "UPDATE_BTN_COMPONENT_TEXT_ITALIC") {
        Set_Text_Italic(Selected_Id!, textItalic);
      } else if (type === "UPDATE_BTN_COMPONENT_LINE_HEIGHT") {
        Set_Line_Height(Selected_Id!, lineHeight);
      } else if (type === "UPDATE_BTN_COMPONENT_LETTER_SPACING") {
        Set_Letter_Spacing(Selected_Id!, letterSpacing);
      } else if (type === "UPDATE_BTN_COMPONENT_Link") {
        Set_Link(Selected_Id!, link);
      } else if (type === "UPDATE_BTN_COMPONENT_BG_COLOR") {
        Set_Bg_Color(Selected_Id!, bgColor);
      } else if (type === "UPDATE_BTN_COMPONENT_BORDER_WIDTH") {
        Set_Border_Width(Selected_Id!, borderWidth);
      } else if (type === "UPDATE_BTN_COMPONENT_BORDER_COLOR") {
        Set_Border_Color(Selected_Id!, borderColor);
      } else if (type === "UPDATE_BTN_COMPONENT_PAD_X") {
        Set_Pad_X(Selected_Id!, padX);
      } else if (type === "UPDATE_BTN_COMPONENT_PAD_Y") {
        Set_Pad_Y(Selected_Id!, padY);
      } else if (type === "UPDATE_BTN_COMPONENT_HOVER_BORDER_COLOR") {
        Set_Hover_Border_Color(Selected_Id!, hoverBorderColor);
      } else if (type === "UPDATE_BTN_COMPONENT_HOVER_BG_COLOR") {
        Set_Hover_Bg_Color(Selected_Id!, hoverBgColor);
      } else if (type === "UPDATE_BTN_COMPONENT_HOVER_TEXT_COLOR") {
        Set_Hover_Text_Color(Selected_Id!, hoverTextColor);
      } else if (type === "UPDATE_BTN_COMPONENT_BORDER_RADIUS_TL") {
        Set_Border_Radius_Tl(Selected_Id!, borderRadiusTl);
      } else if (type === "UPDATE_BTN_COMPONENT_BORDER_RADIUS_TR") {
        Set_Border_Radius_Tr(Selected_Id!, borderRadiusTr);
      } else if (type === "UPDATE_BTN_COMPONENT_BORDER_RADIUS_BL") {
        Set_Border_Radius_Bl(Selected_Id!, borderRadiusBl);
      } else if (type === "UPDATE_BTN_COMPONENT_BORDER_RADIUS_BR") {
        Set_Border_Radius_Br(Selected_Id!, borderRadiusBr);
      } else if (type === "UPDATE_BTN_COMPONENT_ICON") {
        Set_Icon(Selected_Id!, icon);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [Btn_Components, Selected_Id]);

  return (
    <div
      onClick={env === "development" ? handleClick : () => {}}
      className={`flex h-fit w-fit items-center justify-center gap-[12px] transition duration-500 ${classname}`}
      style={{
        backgroundColor: `${isHover ? My_Component?.Hover_Bg_Color : My_Component?.Bg_Color}`,
        borderWidth: `${My_Component?.Border_Width}px`,
        borderColor: `${isHover ? My_Component?.Hover_Border_Color : My_Component?.Border_Color}`,
        padding: `${My_Component?.Pad_Y}px ${My_Component?.Pad_X}px`,
        color: `${isHover ? My_Component?.Hover_Text_Color : My_Component?.Text_Color}`,
        borderRadius: `${My_Component?.Border_Radius_Tl}px ${My_Component?.Border_Radius_Tr}px ${My_Component?.Border_Radius_Br}px ${My_Component?.Border_Radius_Bl}px`,
      }}
    >
      {IconComponent && <IconComponent size={24} />}
      {My_Component?.Content != "" && (
        <Element
          id={cId}
          onBlur={env === "development" ? handleInput : () => {}}
          contentEditable={env === "development" ? true : false}
          spellCheck={false}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={`${My_Component?.Font_Style} flex h-fit w-fit items-center justify-center gap-[12px] ${env == "development" ? "cursor-text" : "cursor-pointer"} hover:border-[${My_Component?.Hover_Border_Color}] hover:bg-[${My_Component?.Hover_Bg_Color}] hover:text-[${My_Component?.Hover_Text_Color}]`}
          href={My_Component?.Link || ""}
          style={{
            fontSize: `${My_Component?.Font_Size}px`,
            fontWeight: `${My_Component?.Font_Weight}`,

            textDecoration: `${My_Component?.Text_Underline == true ? `underline` : `none`}`,
            fontStyle: `${My_Component?.Text_Italic == true ? `italic` : `normal`}`,

            lineHeight: `${My_Component?.Line_Height === 0 ? `normal` : My_Component?.Line_Height}px`,
            letterSpacing: `${My_Component?.Letter_Spacing}px`,
          }}
          dangerouslySetInnerHTML={{ __html: My_Component?.Content || "" }}
        />
      )}
    </div>
  );
};

export default Btn;

{
  /* {My_Component?.Content} */
}
{
  /* </Element> */
}
