"use client";
import use_Toolbox_Store from "@/store/studio/Toolbox_Store";
import { use_Btn_Store } from "@/store/utils/Btn_Store";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import * as LucidIcons from "lucide-react";

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
}

const Btn = ({
  cId,
  children = "text",
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
}: Btn_Props) => {
  // Btn stote
  const [Btn_Component, Add_Btn_Component, Set_Selected_Id, Set_Content] =
    use_Btn_Store((s) => [
      s.Btn_Components,
      s.Add_Btn_Component,
      s.Set_Selected_Id,
      s.Set_Content,
    ]);

  // Btn toolbox
  const [Btn_Toolbox_On_Open] = use_Toolbox_Store((s) => [
    s.Btn_Toolbox_On_Open,
  ]);

  // adding element
  const Existing_Component = Btn_Component.find((x) => x.Id === cId);
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
    });
    Set_Content(cId, children);
    setInitialized(true);
  }

  // finding component
  const My_Component = Btn_Component.find((x) => x.Id === cId);

  // handle click
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    Btn_Toolbox_On_Open();
    Set_Selected_Id(cId);
  };

  // handle Input
  const handleInput = (e: any) => {
    Set_Content(cId, e.currentTarget.textContent || "");
  };

  // setting environment
  let env = "development";
  const path = usePathname();
  if (path.startsWith("/web/")) {
    env = "production";
  }

  const Element = env == "development" ? "span" : Link;

  const [isHover, setIsHover] = useState(false);

  const IconComponent = (LucidIcons as any as any)[
    My_Component?.Icon || ""
  ] as React.ComponentType<{ size?: number }>;

  // console.log(IconComponent);
  // console.log(My_Component?.Icon);

  return (
    <div
      onClick={env == "development" ? handleClick : () => {}}
      className="flex h-fit w-fit items-center justify-center gap-[12px] transition duration-500"
      style={{
        backgroundColor: `${isHover ? My_Component?.Hover_Bg_Color : My_Component?.Bg_Color}`,
        borderWidth: `${My_Component?.Border_Width}px`,
        borderColor: `${isHover ? My_Component?.Hover_Border_Color : My_Component?.Border_Color}`,
        padding: `${My_Component?.Pad_Y}px ${My_Component?.Pad_X}px`,
        color: `${isHover ? My_Component?.Hover_Text_Color : My_Component?.Text_Color}`,
        borderRadius: `${My_Component?.Border_Radius_Tl}px ${My_Component?.Border_Radius_Tr}px ${My_Component?.Border_Radius_Br}px ${My_Component?.Border_Radius_Bl}px`,
      }}
    >
      {My_Component?.Icon != "" && <IconComponent size={24} />}
      {My_Component?.Content != "" && (
        <Element
          id={cId}
          onBlur={env == "development" ? handleInput : () => {}}
          contentEditable={env == "development" ? true : false}
          spellCheck={false}
          onMouseOver={() => setIsHover(true)}
          onMouseLeave={() => setIsHover(false)}
          className={`${My_Component?.Font_Style} flex h-fit w-fit items-center justify-center gap-[12px] ${env == "development" ? "cursor-text" : "cursor-pointer"} hover:border-[${My_Component?.Hover_Border_Color}] hover:bg-[${My_Component?.Hover_Bg_Color}] hover:text-[${My_Component?.Hover_Text_Color}]`}
          href={link || ""}
          style={{
            fontSize: `${My_Component?.Font_Size}px`,
            fontWeight: `${My_Component?.Font_Weight}`,

            textDecoration: `${My_Component?.Text_Underline == true ? `underline` : `none`}`,
            fontStyle: `${My_Component?.Text_Italic == true ? `italic` : `normal`}`,

            lineHeight: `${My_Component?.Line_Height === 0 ? `normal` : My_Component?.Line_Height}px`,
            letterSpacing: `${My_Component?.Letter_Spacing}px`,
          }}
        >
          {children != "" && children}
        </Element>
      )}
    </div>
  );
};

export default Btn;
