"use client";
import use_Toolbox_Store from "@/store/studio/Toolbox_Store";
import { use_Div_Store } from "@/store/utils/Div_Store";
import { usePathname } from "next/navigation";
import { useState } from "react";

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
  padL = 12,
  padR = 12,
  padT = 12,
  padB = 12,
  bgColor = "transparent",
}: Div_Props) => {
  //div store
  const [Div_Components, Add_Div_Component, Set_Selected_Id, Selected_Id] =
    use_Div_Store((s) => [
      s.Div_Components,
      s.Add_Div_Component,
      s.Set_Selected_Id,
      s.Selected_Id,
    ]);

  // DIv toolbox
  const [Div_Toolbox_On_Open, Div_Toolbox_Is_Open] = use_Toolbox_Store((s) => [
    s.Div_Toolbox_On_Open,
    s.Div_Toolbox_Is_Open,
  ]);

  // adding element
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

  // finding component
  const My_Component = Div_Components.find((x) => x.Id === cId);

  // handle click
  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    Div_Toolbox_On_Open();
    Set_Selected_Id(cId);
  };

  // setting environment
  let env = "development";
  const path = usePathname();
  if (path.startsWith("/web/")) {
    env = "production";
  }

  // Hover To Be Handle

  // Handling Hover
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  // Handle mouse enter
  const handleMouseEnter = (
    id: string,
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    // e.stopPropagation();
    setHoveredId(id);
  };

  // Handle mouse leave
  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  return (
    <div
      id={cId}
      onClick={env == "development" ? handleClick : () => {}}
      onMouseEnter={(e) => handleMouseEnter(cId, e)}
      onMouseLeave={handleMouseLeave}
      className={`${classname} border-[5px] border-transparent`}
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
