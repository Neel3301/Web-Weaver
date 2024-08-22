import Btn from "@/components/utils/Btn";
import Icon from "@/components/utils/Icon";
import Image from "@/components/utils/Image";
import Text from "@/components/utils/Text";
import { poppins } from "@/constants/studio/font_list";

const T1_Landing = () => {
  return (
    <div className="flex h-full w-full">
      {/* left */}
      <div className="flex h-full w-[50%] flex-col items-center justify-center">
        <div className="w-[320px]">
          <Text
            cId="t1-landing-text"
            tag={"h1"}
            fontSize={58}
            textColor="#000000"
            lineHeight={52}
            fontWeight={600}
          >
            {`My name is\nJacob Jones..`}
          </Text>
        </div>

        <div className="mt-[12px]">
          <Text cId="t1-landing-sub-text" tag={"h3"}>
            Product Designer based in London
          </Text>
        </div>

        <div className="mt-[24px] w-[320px]">
          <Btn
            cId="t1-landing-btn"
            tag={"span"}
            textColor="#ffffff"
            padX={24}
            padY={8}
            icon="ArrowUpLeftIcon"
          >
            {"Let’s talk with me"}
          </Btn>
        </div>

        <div className="mt-[24px] flex w-[320px] flex-col gap-[24px]">
          <div className="flex items-center justify-start gap-[8px]">
            <Icon cId="t1-icon1" icon="PhoneIcon" iconColor="#000000" />
            <Text
              cId="t1-contact-num"
              tag={"p"}
              textColor="#000000"
              fontSize={18}
            >
              +77 022 444 05 05
            </Text>
          </div>
          <div className="flex items-center justify-start gap-[8px]">
            <Icon cId="t1-icon-2" icon="MailIcon" iconColor="#000000" />
            <Text cId="t1-mail" tag={"p"} textColor="#000000" fontSize={18}>
              jacob360@gmail.com
            </Text>
          </div>
        </div>
      </div>

      {/* right */}
      <div className="flex h-full w-[50%] flex-col items-center justify-center">
        <Image
          cid="t1-landing-img"
          img="/T1/landing.png"
          height={500}
          width={400}
        />
      </div>
    </div>
  );
};

export default T1_Landing;
