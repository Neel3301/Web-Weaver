"use client";
import { useEffect, useState } from "react";
import Template_1 from "../template_1/page";
import { usePathname } from "next/navigation";
import Template_2 from "../template_2/page";
import Loading from "@/app/loading";

const Website = () => {
  const path = usePathname();
  const websiteName = path.slice(5);

  const [templateId, setTemplateId] = useState();
  const [isLoading, setIsloading] = useState(true);
  useEffect(() => {
    const fetchId = async () => {
      try {
        const res = await fetch(`/api/website/${websiteName}`, {
          method: "GET",
        });

        const data = await res.json();
        setTemplateId(data.templateId);
      } catch (error) {
        console.log(error);
      }
    };
    fetchId();
    setIsloading(false);
  }, []);

  if (isLoading) {
    return (
      <Loading msg="Thanks for waiting! We're loading up something great!" />
    );
  }

  return <div>{templateId == 1 ? <Template_1 /> : <Template_2 />}</div>;
};

export default Website;
