import { Button } from "@/components/ui/button";

interface Outline_Btn_Props {
  text: string;
}

const Home_C_Outline_Btn = ({ text }: Outline_Btn_Props) => {
  return (
    <Button className="rounded-full px-4 py-1 text-sm font-semibold text-black-200 ring-1 ring-black-100 sm:px-8 sm:py-2 sm:text-base">
      {text}
    </Button>
  );
};

export default Home_C_Outline_Btn;
