"use client";
import Btn from "@/components/utils/Btn";
import Div from "@/components/utils/Div";
import Image from "@/components/utils/Image";
import Text from "@/components/utils/Text";
import { use_Mockup_Store } from "@/store/studio/Mockup_Store";

const Editor_S_Mockup = () => {
  // using mockup store
  const [Mockup] = use_Mockup_Store((s) => [s.Mockup]);

  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      {/* <Editor_C_Desktop_Mockup />  */}
      <div
        className={`flex h-full flex-col overflow-hidden rounded-[6px] transition-all duration-300 ${(Mockup == "Desktop" && "w-full") || (Mockup == "Tablet" && "w-[736px]") || (Mockup == "Mobile" && "w-[350px]")} items-center justify-center`}
      >
        {/* iframe  */}
        {/* <iframe
          src="http://localhost:3001/web/template_1"
          className="h-full w-full"
        ></iframe> */}

        <Div
          cId="div"
          bgColor="white"
          classname="flex justify-center items-center gap-[24px] flex-wrap"
        >
          <Div cId="div-2" bgColor="black" height={150} width={150}>
            <Text cId="text">My - Text</Text>
          </Div>
          <Btn cId="btn">My Btn</Btn>
          <Image cId="img" img="/floor.png" height={500} width={500} />
        </Div>
      </div>
    </div>
  );
};

export default Editor_S_Mockup;
