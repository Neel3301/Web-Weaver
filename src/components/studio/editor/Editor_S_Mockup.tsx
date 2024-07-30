import Image from "next/image";
import Editor_C_Desktop_Mockup from "./components/Editor_C_Desktop_Mockup";
import Text from "@/components/utils/Text";

const Editor_S_Mockup = () => {
  return (
    <div className="flex h-full w-full items-center justify-center p-6">
      {/* <Editor_C_Desktop_Mockup />  */}
      <div className="relative flex h-full w-full items-center justify-center">
        <Text />
      </div>
    </div>
  );
};

export default Editor_S_Mockup;
