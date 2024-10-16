"use client";
import Loading from "@/app/loading";
import Btn from "@/components/utils/Btn";
import Div from "@/components/utils/Div";
import Image from "@/components/utils/Image";
import Text from "@/components/utils/Text";
import { titillium_Web } from "@/constants/studio/font_list";
import useTemplateLogic from "@/hooks/web/Use_Template_Logic";

const Template_2 = () => {
  const isLoading = useTemplateLogic();

  if (isLoading) {
    return (
      <Loading msg="Thanks for waiting! We're loading up something great!" />
    );
  }

  return (
    <>
      {" "}
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
          textAlignment="center"
          fontStyle={titillium_Web.className}
          fontWeight={600}
        >
          Template Under Construction
        </Text>
      </Div>
    </>
  );
};

export default Template_2;
