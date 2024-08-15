"use client";
import Btn from "@/components/utils/Btn";
import Text from "@/components/utils/Text";
import { use_Mockup_Store } from "@/store/studio/Mockup_Store";

const Editor_S_Mockup = () => {
  //using mockup store
  const [Mockup] = use_Mockup_Store((s) => [s.Mockup]);

  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      {/* <Editor_C_Desktop_Mockup />  */}
      <div
        className={`flex h-full flex-col transition-all duration-300 ${(Mockup == "Desktop" && "w-full") || (Mockup == "Tablet" && "w-[736px]") || (Mockup == "Mobile" && "w-[350px]")} items-center justify-center`}
      >
        {/* utils component trial  */}
        <Text cId="text" tag={"h1"}>
          Victor Von Doom
        </Text>
        <br />
        <Btn cId="btn" tag={"h1"}>
          My Btn
        </Btn>

        {/* iframe  */}
        <iframe src="http://localhost:3000/" className="h-full w-full"></iframe>
      </div>
    </div>
  );
};

export default Editor_S_Mockup;

// resizable div

// const Editor_S_Mockup = () => {
//   const [width, setWidth] = useState(1300);
//   const resizableRef = useRef<HTMLDivElement>(null);

//   const disableTextSelection = () => {
//     document.body.style.userSelect = "none";
//   };
//   const enableTextSelection = () => {
//     document.body.style.userSelect = "";
//   };

//   const handleResize = (
//     e: React.MouseEvent<HTMLDivElement, MouseEvent>,
//     direction: "left" | "right"
//   ) => {
//     const startX = e.clientX;
//     const startWidth = width;

//     disableTextSelection();

//     const onMouseMove = (e: MouseEvent) => {
//       if (direction === "right") {
//         const newWidth = startWidth + (e.clientX - startX);
//         setWidth(newWidth);
//       } else {
//         const newWidth = startWidth - (e.clientX - startX);
//         setWidth(newWidth);
//       }
//     };

//     const onMouseUp = () => {
//       enableTextSelection();
//       document.removeEventListener("mousemove", onMouseMove);
//       document.removeEventListener("mouseup", onMouseUp);
//     };

//     document.addEventListener("mousemove", onMouseMove);
//     document.addEventListener("mouseup", onMouseUp);
//   };
//   return (
//     <div className="flex h-full w-full items-center justify-center p-4">
//       <div
//         ref={resizableRef}
//         style={{ width: `${width}px` }}
//         className="max-w-[100vw - 250px - 16px - 16px] relative h-[calc(100vh-80px-16px-16px)] min-w-[350px]"
//       >
//         <div
//           className="absolute bottom-0 left-0 top-0 w-[2px] cursor-w-resize bg-neutral-500"
//           onMouseDown={(e) => handleResize(e, "left")}
//         />
//         <div
//           className="absolute bottom-0 right-0 top-0 w-[2px] cursor-e-resize bg-neutral-500"
//           onMouseDown={(e) => handleResize(e, "right")}
//         />
// <iframe
//   src="http://localhost:3001/"
//   className="h-full w-full p-4"
// ></iframe>
//       </div>
//     </div>
//   );
// };

// export default Editor_S_Mockup;
