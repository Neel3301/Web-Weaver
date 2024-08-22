"use client";
import Btn from "@/components/utils/Btn";
import Icon from "@/components/utils/Icon";
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
        {/* <iframe src="http://localhost:3000/" className="h-full w-full"></iframe> */}

        <Text cId="text1" tag={"h1"}>
          Text-1
        </Text>
        <br />
        <Btn cId="btn" tag={"h1"} icon="">
          My Btn
        </Btn>
        <br />
        <Icon cId="icon1" icon="X" />
      </div>
    </div>
  );
};

export default Editor_S_Mockup;
