import use_Toolbox_Store from "@/store/studio/Toolbox_Store";
import { use_Btn_Store } from "@/store/utils/Btn_Store";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface Btn_Props {
  cId: string;
  children?: string;
  tag: keyof JSX.IntrinsicElements | React.ComponentType<any>;
  env?: "development" | "production";

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

  lineHeight?: number;
  letterSpacing?: number;

  link?: string;
}

const Btn = ({
  cId,
  children = "text",
  tag = "span",
  env = "development",

  fontStyle = poppins.className,
  fontSize = 18,
  fontWeight = 400,

  textColor = "#595959",
  textUnderline = false,
  textItalic = false,

  bgColor = "000",
  borderWidth = 2,
  borderColor = "#fff",
  padX = 12,
  padY = 4,

  hoverBorderColor = "#000",
  hoverBgColor = "#fff",
  hoverTextColor = "#000",

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
  const handleClick = () => {
    Btn_Toolbox_On_Open();
    Set_Selected_Id(cId);
  };

  // handle Input
  const handleInput = (e: any) => {
    Set_Content(cId, e.currentTarget.textContent || "");
  };

  const Element = env == "development" ? "span" : Link;

  return (
    <Element
      id={cId}
      onClick={handleClick}
      onBlur={env == "development" ? handleInput : () => {}}
      contentEditable={true}
      spellCheck={false}
      className={`${My_Component?.Font_Style} h-fit w-fit ${env != "development" ? "cursor-pointer" : "cursor-text"} h-border-[${My_Component?.Hover_Border_Color}] h-bg-[${My_Component?.Hover_Bg_Color}] h-text-[${My_Component?.Hover_Text_Color}]`}
      href={link || ""}
      style={{
        fontSize: `${My_Component?.Font_Size}px`,
        fontWeight: `${My_Component?.Font_Weight}`,

        color: `${My_Component?.Text_Color}`,
        textDecoration: `${My_Component?.Text_Underline == true ? `underline` : `none`}`,
        fontStyle: `${My_Component?.Text_Italic == true ? `italic` : `normal`}`,

        backgroundColor: `${My_Component?.Bg_Color}`,
        borderWidth: `${My_Component?.Border_Width}px`,
        borderColor: `${My_Component?.Border_Color}`,
        padding: `${My_Component?.Pad_Y}px ${My_Component?.Pad_X}px`,

        lineHeight: `${My_Component?.Line_Height === 0 ? `normal` : My_Component?.Line_Height}px`,
        letterSpacing: `${My_Component?.Letter_Spacing}px`,
      }}
    >
      {children}
    </Element>
  );
};

export default Btn;
