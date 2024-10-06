"use client";
import Div from "@/components/utils/Div";
import Text from "@/components/utils/Text";
import { titillium_Web } from "@/constants/studio/font_list";

const Template_2 = () => {
  return (
    <Div
      cId="T2-landing"
      height={"100vh"}
      width={"100vw"}
      bgColor="#ffffff"
      classname="max-md:!bg-purple-500 max-sm:!bg-yellow-500 flex justify-center items-center"
    >
      <Text
        cId="t2"
        fontSize={52}
        fontStyle={titillium_Web.className}
        fontWeight={600}
      >
        Template - 2
      </Text>
    </Div>
  );
};

export default Template_2;
