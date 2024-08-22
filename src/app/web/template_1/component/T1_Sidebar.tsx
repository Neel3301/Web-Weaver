import Icon from "@/components/utils/Icon";
import Text from "@/components/utils/Text";
import { volkhov } from "@/constants/studio/font_list";
import { Instagram } from "lucide-react";

const T1_Sidebar = () => {
  return (
    <div className="flex h-full w-[200px] flex-col justify-between bg-[#141313] p-[24px]">
      {/* Title */}
      <Text
        cId="t1-sidebar-title"
        tag={"h1"}
        textColor="#ffffff"
        fontStyle={volkhov.className}
        fontSize={24}
      >
        Jac.
      </Text>

      {/* Nav  */}
      <div className="flex flex-col gap-[12px]">
        <Text
          cId="t1-sidebar-link-1"
          tag={"p"}
          fontWeight={400}
          textColor="#ffffff"
          link=""
        >
          Home
        </Text>
        <Text
          cId="t1-sidebar-link-2"
          tag={"p"}
          fontWeight={400}
          textColor="#ffffff"
          link=""
        >
          Abour
        </Text>
        <Text
          cId="t1-sidebar-link-3"
          tag={"p"}
          fontWeight={400}
          textColor="#ffffff"
          link=""
        >
          Service
        </Text>
        <Text
          cId="t1-sidebar-link-4"
          tag={"p"}
          fontWeight={400}
          textColor="#ffffff"
          link=""
        >
          Works
        </Text>
        <Text
          cId="t1-sidebar-link-5"
          tag={"p"}
          fontWeight={400}
          textColor="#ffffff"
          link=""
        >
          Blog
        </Text>
        <Text
          cId="t1-sidebar-link-6"
          tag={"p"}
          fontWeight={400}
          textColor="#ffffff"
          link=""
        >
          Contact
        </Text>
      </div>

      {/* Social */}
      <div className="flex flex-col gap-[12px]">
        <Icon cId="t1-sidebar-logo-1" icon="Instagram" />
        <Icon cId="t1-sidebar-logo-2" icon="Linkedin" />
        <Icon cId="t1-sidebar-logo-3" icon="Twitter" />
      </div>
    </div>
  );
};

export default T1_Sidebar;
