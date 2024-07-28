"use client";
import { Plus } from "lucide-react";
import Image from "next/image";

interface Dashboard_C_Template_Card_Props {
  img: string;
}
const Dashboard_C_Template_Card = ({
  img,
}: Dashboard_C_Template_Card_Props) => {
  return (
    <div className="cursor-pointer p-3">
      <div className="relative h-[200px] w-[350px]">
        <Image src={img} fill alt="t1" objectFit="cover" />

        {/* plus */}
        <Plus
          size={18}
          className="absolute -left-[12px] -top-[12px] text-white"
        />
        <Plus
          size={18}
          className="absolute -bottom-[12px] -left-[12px] text-white"
        />
        <Plus
          size={18}
          className="absolute -right-[12px] -top-[12px] text-white"
        />
        <Plus
          size={18}
          className="absolute -bottom-[12px] -right-[12px] text-white"
        />
      </div>
    </div>
  );
};

export default Dashboard_C_Template_Card;
