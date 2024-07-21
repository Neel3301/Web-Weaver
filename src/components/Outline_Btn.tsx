import { Button } from "@/components/ui/button";

interface Outline_Btn_Props {
  text: string;
}

const Outline_Btn = ({ text }: Outline_Btn_Props) => {
  return (
    <Button className="ring-black-100 text-black-200 rounded-full px-4 py-1 text-sm font-semibold ring-1 sm:px-8 sm:py-2 sm:text-base">
      {text}
    </Button>
  );
};

export default Outline_Btn;
