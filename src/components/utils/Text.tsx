"use client";
import { use_Text_Store } from "@/store/utils/Text_Store";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { useEffect, useState } from "react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

interface Text_Props {
  cId: string;
  children?: string;
  tag?: keyof JSX.IntrinsicElements | React.ComponentType<any>;

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

  classname?: string;
}

const Text = ({
  cId,
  children = "text",
  tag = "p",

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

  classname = "",
}: Text_Props) => {
  // Import From Text Store
  const Text_Components = use_Text_Store((s) => s.Text_Components);
  const Add_Text_Component = use_Text_Store((s) => s.Add_Text_Component);
  const Set_Selected_Id = use_Text_Store((s) => s.Set_Selected_Id);
  const Set_Content = use_Text_Store((s) => s.Set_Content);

  // Adding Component Logic
  const Existing_Component = Text_Components.find((x) => x.Id === cId);
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
      Classname: classname,
    });
    Set_Content(cId, children);
    setInitialized(true);
  }

  // Finding Component
  const My_Component = Text_Components.find((x) => x.Id === cId);

  // Handle Click
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    Set_Selected_Id(cId);

    // Sending Data To Toolbox
    window.parent.postMessage(
      {
        type: "SET_TEXT_SELECTED_ID",
        id: cId,
        attributes: {
          fontStyle: My_Component?.Font_Style,
          fontSize: My_Component?.Font_Size,
          fontWeight: My_Component?.Font_Weight,
          textColor: My_Component?.Text_Color,
          textAlignment: My_Component?.Text_Alignment,
          textUnderline: My_Component?.Text_Underline,
          textItalic: My_Component?.Text_Italic,
          lineHeight: My_Component?.Line_Height,
          letterSpacing: My_Component?.Letter_Spacing,
          link: My_Component?.Link,
        },
      },
      "*"
    );
  };

  // Handle Input
  const handleInput = (e: React.FormEvent<HTMLDivElement>) => {
    Set_Content(cId, e.currentTarget.textContent || "");
  };

  // Setting Env
  const env = "development";
  // ...

  // Selecting Element
  const Element =
    tag == Link || "a" || link != ""
      ? env == "development"
        ? "span"
        : Link
      : tag;

  // Import From Text Store
  const Set_Font_Style = use_Text_Store((s) => s.Set_Font_Style);
  const Set_Font_Size = use_Text_Store((s) => s.Set_Font_Size);
  const Set_Font_Weight = use_Text_Store((s) => s.Set_Font_Weight);
  const Set_Text_Color = use_Text_Store((s) => s.Set_Text_Color);
  const Set_Text_Alignment = use_Text_Store((s) => s.Set_Text_Alignment);
  const Set_Text_Underline = use_Text_Store((s) => s.Set_Text_Underline);
  const Set_Text_Italic = use_Text_Store((s) => s.Set_Text_Italic);
  const Set_Line_Height = use_Text_Store((s) => s.Set_Line_Height);
  const Set_Letter_Spacing = use_Text_Store((s) => s.Set_Letter_Spacing);
  const Set_Link = use_Text_Store((s) => s.Set_Link);

  const Selected_Id = use_Text_Store((s) => s.Selected_Id);

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
        textAlignment,
        textUnderline,
        textItalic,
        lineHeight,
        letterSpacing,
        link,
      } = event.data;

      if (type === "UPDATE_TEXT_COMPONENT_FONT_STYLE") {
        Set_Font_Style(Selected_Id!, fontStyle);
      } else if (type === "UPDATE_TEXT_COMPONENT_FONT_SIZE") {
        Set_Font_Size(Selected_Id!, fontSize);
      } else if (type === "UPDATE_TEXT_COMPONENT_FONT_WEIGHT") {
        Set_Font_Weight(Selected_Id!, fontWeight);
      } else if (type === "UPDATE_TEXT_COMPONENT_TEXT_COLOR") {
        Set_Text_Color(Selected_Id!, textColor);
      } else if (type === "UPDATE_TEXT_COMPONENT_TEXT_ALIGNMENT") {
        Set_Text_Alignment(Selected_Id!, textAlignment);
      } else if (type === "UPDATE_TEXT_COMPONENT_TEXT_UNDERLINE") {
        Set_Text_Underline(Selected_Id!, textUnderline);
      } else if (type === "UPDATE_TEXT_COMPONENT_TEXT_ITALIC") {
        Set_Text_Italic(Selected_Id!, textItalic);
      } else if (type === "UPDATE_TEXT_COMPONENT_LINE_HEIGHT") {
        Set_Line_Height(Selected_Id!, lineHeight);
      } else if (type === "UPDATE_TEXT_COMPONENT_LETTER_SPACING") {
        Set_Letter_Spacing(Selected_Id!, letterSpacing);
      } else if (type === "UPDATE_TEXT_COMPONENT_LINK") {
        Set_Link(Selected_Id!, link);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [Text_Components, Selected_Id]);

  return (
    <Element
      id={cId}
      onClick={handleClick}
      onBlur={handleInput}
      contentEditable={true}
      spellCheck={false}
      className={`${My_Component?.Font_Style} ${classname} z-50 h-fit w-fit ${"cursor-text"}`}
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
      dangerouslySetInnerHTML={{ __html: My_Component?.Content || "" }}
    />
  );
};

export default Text;
