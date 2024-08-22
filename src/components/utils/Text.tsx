"use client";
import use_Toolbox_Store from "@/store/studio/Toolbox_Store";
import { use_Text_Store } from "@/store/utils/Text_Store";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Children, useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface Text_Props {
  cId: string;
  children?: string;
  tag: keyof JSX.IntrinsicElements | React.ComponentType<any>;

  fontStyle?: string;
  fontSize?: number;
  fontWeight?: number;

  textColor?: string;
  textAlignment?: string;
  textUnderline?: boolean;
  textItalic?: boolean;

  lineHeight?: number;
  letterSpacing?: number;

  link?: string;
}

const Text = ({
  cId,
  children = "text",
  tag = "span",

  fontStyle = poppins.className,
  fontSize = 18,
  fontWeight = 400,

  textColor = "#595959",
  textAlignment = "left",
  textUnderline = false,
  textItalic = false,

  lineHeight,
  letterSpacing,

  link = "",
}: Text_Props) => {
  // text stote
  const [
    Text_Component,
    Add_Text_Component,
    Set_Selected_Id,
    Set_Content,
    Selected_Id,
  ] = use_Text_Store((s) => [
    s.Text_Components,
    s.Add_Text_Component,
    s.Set_Selected_Id,
    s.Set_Content,
    s.Selected_Id,
  ]);

  // text toolbox
  const [Text_Toolbox_On_Open, Text_Toolbox_Is_Open] = use_Toolbox_Store(
    (s) => [s.Text_Toolbox_On_Open, s.Text_Toolbox_Is_Open]
  );

  // adding element
  const Existing_Component = Text_Component.find((x) => x.Id === cId);
  const [initialized, setInitialized] = useState(false);
  if (!Existing_Component && !initialized) {
    Add_Text_Component({
      Id: cId,
      Content: children,
      Font_Style: fontStyle,
      Font_Size: fontSize,
      Font_Weight: fontWeight,
      Text_Color: textColor,
      Text_Alignment: textAlignment,
      Text_Underline: textUnderline,
      Text_Italic: textItalic,
      Line_Height: lineHeight,
      Letter_Spacing: letterSpacing,
      Link: link,
    });
    Set_Content(cId, children);
    setInitialized(true);
  }

  // finding component
  const My_Component = Text_Component.find((x) => x.Id === cId);

  // handle click
  const handleClick = () => {
    // window.parent.postMessage(
    //   { action: "openSidebar", id: cId, My_Component: My_Component },
    //   "*"
    // );

    Text_Toolbox_On_Open();
    Set_Selected_Id(cId);
  };

  // handle Input
  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    Set_Content(cId, e.currentTarget.textContent || "");
  };

  // setting environment
  let env = "development";
  const path = usePathname();
  if (path.startsWith("/web/")) {
    env = "production";
  }

  // selecting Element
  const Element =
    tag == Link || "a" || link != ""
      ? env == "development"
        ? "span"
        : Link
      : tag;

  return (
    <Element
      id={cId}
      onClick={env == "development" ? handleClick : () => {}}
      onBlur={env == "development" ? handleInput : () => {}}
      contentEditable={env == "development" ? true : false}
      spellCheck={false}
      className={`${My_Component?.Font_Style} h-fit w-fit ${env == "development" ? "cursor-text" : "cursor-default"}`}
      href={`${link}`}
      style={{
        fontSize: `${My_Component?.Font_Size}px`,
        fontWeight: `${My_Component?.Font_Weight}`,

        color: `${My_Component?.Text_Color}`,
        textAlign: `${My_Component?.Text_Alignment}`,
        textDecoration: `${My_Component?.Text_Underline == true ? `underline` : `none`}`,
        fontStyle: `${My_Component?.Text_Italic == true ? `italic` : `normal`}`,

        lineHeight: `${My_Component?.Line_Height === 0 ? `normal` : My_Component?.Line_Height}px`,
        letterSpacing: `${My_Component?.Letter_Spacing}px`,
      }}
    >
      {children}
    </Element>
  );
};

export default Text;
