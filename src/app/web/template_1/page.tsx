"use client";
import Div from "@/components/utils/Div";
import Text from "@/components/utils/Text";
import { titillium_Web } from "@/constants/studio/font_list";

const Template_1 = () => {
  return (
    <Div
      cId="T1-landing"
      height={"100vh"}
      width={"100vw"}
      bgColor="#ffffff"
      classname="max-md:!bg-purple-500 max-sm:!bg-yellow-500 flex justify-center items-center"
    >
      <Text
        cId="t1"
        fontSize={52}
        fontStyle={titillium_Web.className}
        fontWeight={600}
      >
        Template - 1
      </Text>
    </Div>
  );
};

export default Template_1;
