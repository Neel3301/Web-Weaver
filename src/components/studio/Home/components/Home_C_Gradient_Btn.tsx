import { Button } from "@/components/ui/button";

interface Gradient_Btn_Props {
  text: string;
}

const Home_C_Gradient_Btn = ({ text }: Gradient_Btn_Props) => {
  return (
    <Button className="rounded-full bg-gradient-to-b from-blue-500 to-blue-600 px-4 py-1 text-sm text-white transition duration-200 hover:shadow-xl focus:ring-2 focus:ring-blue-400 sm:px-8 sm:py-2 sm:text-base">
      {text}
    </Button>
  );
};

export default Home_C_Gradient_Btn;
