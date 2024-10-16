"use client";
import Loading from "@/app/loading";
import { use_Loading_Store } from "@/store/Loading_Store";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Dashboard_C_Template_Card_Props {
  img: string;
  id: string | number;
}
const Dashboard_C_Template_Card = ({
  img,
  id,
}: Dashboard_C_Template_Card_Props) => {
  return (
    <Link href={`/editor/${id}`} prefetch target="_blank">
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
    </Link>
  );
};

export default Dashboard_C_Template_Card;
