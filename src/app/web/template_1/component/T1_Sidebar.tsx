import Icon from "@/components/utils/Icon";
import Text from "@/components/utils/Text";
import { volkhov } from "@/constants/studio/font_list";
import { Instagram } from "lucide-react";

const T1_Sidebar = () => {
  return (
    <div className="flex h-full w-[200px] flex-col justify-between bg-[#141313] p-[24px]">
      {/* Title */}
      <Text
        cId="Jac."
        tag={"h1"}
        textColor="#ffffff"
        fontStyle={volkhov.className}
        fontSize={24}
      >
        Jac.
      </Text>

      {/* Nav  */}
      <div className="flex flex-col gap-[12px]">
        <Text cId="Home" tag={"p"} fontWeight={400} textColor="#ffffff" link="">
          Home
        </Text>
        <Text cId="Home" tag={"p"} fontWeight={400} textColor="#ffffff" link="">
          Abour
        </Text>
        <Text cId="Home" tag={"p"} fontWeight={400} textColor="#ffffff" link="">
          Service
        </Text>
        <Text cId="Home" tag={"p"} fontWeight={400} textColor="#ffffff" link="">
          Works
        </Text>
        <Text cId="Home" tag={"p"} fontWeight={400} textColor="#ffffff" link="">
          Blog
        </Text>
        <Text cId="Home" tag={"p"} fontWeight={400} textColor="#ffffff" link="">
          Contact
        </Text>
      </div>

      {/* Social */}
      <div className="flex flex-col gap-[12px]">
        <Icon cId="Instagram" icon="Instagram" />
        <Icon cId="Linkedin" icon="Linkedin" />
        <Icon cId="Twitter" icon="Twitter" />
      </div>
    </div>
  );
};

export default T1_Sidebar;
