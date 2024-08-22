import Btn from "@/components/utils/Btn";
import Text from "@/components/utils/Text";

const Template_1 = () => {
  return (
    <div className="flex h-screen w-screen flex-wrap items-center justify-center gap-4 bg-white">
      {/* utils component trial  */}
      <Text cId="text1" tag={"h1"}>
        Text-1
      </Text>
      <br />
      <Text cId="text2" tag={"h1"}>
        Text-2
      </Text>
      <br />
      <Btn cId="btn" tag={"h1"}>
        My Btn
      </Btn>
    </div>
  );
};

export default Template_1;
