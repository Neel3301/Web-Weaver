"use client";
import use_Toolbox_Store from "@/store/studio/Toolbox_Store";
import { use_Div_Store } from "@/store/utils/Div_Store";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

// Interface
interface Div_Props {
  cId: string;
  children: React.ReactNode;

  classname?: string;

  height?: number | string;
  width?: number | string;

  padL?: number;
  padR?: number;
  padT?: number;
  padB?: number;

  bgColor?: string;
}
const Div = ({
  cId,
  children,
  classname = "",
  height = "100%",
  width = "100%",
  padL = 0,
  padR = 0,
  padT = 0,
  padB = 0,
  bgColor = "transparent",
}: Div_Props) => {
  // Import From Div Store
  const Div_Components = use_Div_Store((s) => s.Div_Components);
  const Add_Div_Component = use_Div_Store((s) => s.Add_Div_Component);
  const Set_Selected_Id = use_Div_Store((s) => s.Set_Selected_Id);

  // Adding Component Logic
  const Existing_Component = Div_Components.find((x) => x.Id === cId);
  const [initialized, setInitialized] = useState(false);
  if (!Existing_Component && !initialized) {
    Add_Div_Component({
      Id: cId,

      Height: height,
      Width: width,

      Pad_L: padL,
      Pad_R: padR,
      Pad_T: padT,
      Pad_B: padB,

      Bg_Color: bgColor,
    });
    setInitialized(true);
  }

  // Finding Component
  const My_Component = Div_Components.find((x) => x.Id === cId);

  // handle click
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    Set_Selected_Id(cId);
    window.parent.postMessage(
      {
        type: "SET_DIV_SELECTED_ID",
        id: cId,
        attributes: {
          height: My_Component?.Height,
          width: My_Component?.Width,
          padL: My_Component?.Pad_L,
          parR: My_Component?.Pad_R,
          parT: My_Component?.Pad_T,
          parB: My_Component?.Pad_B,
          bgColor: My_Component?.Bg_Color,
        },
      },
      "*"
    );
  };

  // Setting Env
  let env = "development";
  // ...

  // Handling Hover
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Handle Mouse Enter
  const handleMouseEnter = (
    id: string,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    e.stopPropagation();
    setHoveredId(id);
  };

  // Handle Mouse Leave
  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  // Import From Div Store
  const Set_Height = use_Div_Store((s) => s.Set_Height);
  const Set_Width = use_Div_Store((s) => s.Set_Width);
  const Set_Pad_L = use_Div_Store((s) => s.Set_Pad_L);
  const Set_Pad_R = use_Div_Store((s) => s.Set_Pad_R);
  const Set_Pad_T = use_Div_Store((s) => s.Set_Pad_T);
  const Set_Pad_B = use_Div_Store((s) => s.Set_Pad_B);
  const Set_Bg_Color = use_Div_Store((s) => s.Set_Bg_Color);

  const Selected_Id = use_Div_Store((s) => s.Selected_Id);

  // Handling Changes From Toolbox
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      const { type, id, height, width, padL, padR, padB, padT, bgColor } =
        event.data;

      if (type === "UPDATE_DIV_COMPONENT_HEIGHT") {
        Set_Height(Selected_Id!, height);
      } else if (type === "UPDATE_DIV_COMPONENT_WIDTH") {
        Set_Width(Selected_Id!, width);
      } else if (type === "UPDATE_DIV_COMPONENT_PAD_L") {
        Set_Pad_L(Selected_Id!, padL);
      } else if (type === "UPDATE_DIV_COMPONENT_PAD_R") {
        Set_Pad_R(Selected_Id!, padR);
      } else if (type === "UPDATE_DIV_COMPONENT_PAD_T") {
        Set_Pad_T(Selected_Id!, padT);
      } else if (type === "UPDATE_DIV_COMPONENT_PAD_B") {
        Set_Pad_B(Selected_Id!, padB);
      } else if (type === "UPDATE_DIV_COMPONENT_BG_COLOR") {
        Set_Bg_Color(Selected_Id!, bgColor);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, [Div_Components, Selected_Id]);

  return (
    <div
      id={cId}
      onClick={handleClick}
      onMouseEnter={(e) => handleMouseEnter(cId, e)}
      onMouseLeave={handleMouseLeave}
      className={`${classname} ${hoveredId === cId ? "border-[3px]" : "border-[0px]"} border-dotted border-transparent`}
      style={{
        height: `${typeof My_Component?.Height == "number" ? `${My_Component?.Height}px` : My_Component?.Height}`,
        width: `${typeof My_Component?.Width == "number" ? `${My_Component?.Width}px` : My_Component?.Width}`,
        paddingLeft: `${My_Component?.Pad_L}px`,
        paddingRight: `${My_Component?.Pad_R}px`,
        paddingTop: `${My_Component?.Pad_T}px`,
        paddingBottom: `${My_Component?.Pad_B}px`,
        backgroundColor: `${My_Component?.Bg_Color}`,
        borderColor: hoveredId === cId ? "#3b82f6" : "transparent",
      }}
    >
      {children}
    </div>
  );
};

export default Div;
