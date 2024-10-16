import { useEffect, useState } from "react";
import Dashboard_C_Section_Heading from "./Dashboard_C_Section_Heading";
import { useQRCode } from "next-qrcode";
import { DotSquare, Plus } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Dashboard_S_User_Templates = () => {
  const [websiteData, setWebsitesData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("userData") || "");
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`/api/website`, {
          method: "GET",
          headers: {
            clerkId: localStorageData.clerkId,
          },
        });
        const data = await res.json();
        setWebsitesData(data.website);
      } catch (err) {
        console.log("Error :", err);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  const { Canvas } = useQRCode();

  if (isLoading) {
    return (
      <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center">
        <div className="animate-spin">
          <DotSquare size={48} color="#ffffff" />
        </div>
      </div>
    );
  }

  const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN;

  return (
    <div className="h-[calc(100vh-80px)] w-full overflow-y-scroll p-6">
      {websiteData.length === 0 ? (
        <div className="flex h-[calc(100vh-80px)] w-full items-center justify-center overflow-y-scroll p-6">
          <Dashboard_C_Section_Heading heading="No Templates Found" />
        </div>
      ) : (
        <>
          <Dashboard_C_Section_Heading
            heading="Recently Edited Template"
            subHeading={"Your Template"}
          />
          {websiteData.map((x: any) => (
            <div key={x.id}>
              <div className="flex items-center justify-between">
                <div className="mb-[24px] mt-[24px] flex gap-[34px]">
                  <Dashboard_C_Template_Card
                    href={`${DOMAIN}/web/${x.website}`}
                    img={`/Template_Thumbnails/t${x.templateId}.png`}
                    id="a"
                  />
                  <div className="flex flex-col justify-center gap-[18px]">
                    <h3 className="font-semibold text-neutral-400">
                      Website Name : {x.website}
                    </h3>
                    <h3 className="font-semibold text-neutral-400">
                      Website ID : {x.id}
                    </h3>
                    <h3 className="font-semibold text-neutral-400">
                      Template Id : {x.templateId}
                    </h3>
                    <h3 className="font-semibold text-neutral-400">
                      Created At : {x.createdAt}
                    </h3>
                    <h3 className="font-semibold text-neutral-400">
                      URL :{" "}
                      <Link
                        className="text-sky-400"
                        href={`${DOMAIN}/web/${x.website}`}
                      >
                        {DOMAIN}/web/{x.website}
                      </Link>
                    </h3>
                  </div>
                </div>
                <Canvas
                  text={`${DOMAIN}/web/${x.website}`}
                  options={{
                    errorCorrectionLevel: "M",
                    margin: 3,
                    scale: 4,
                    width: 200,
                    color: {
                      dark: "#262626",
                      light: "#FFFFFF",
                    },
                  }}
                />
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
};

interface Dashboard_C_Template_Card_Props {
  img: string;
  id: string | number;
  href: string;
}
const Dashboard_C_Template_Card = ({
  img,
  id,
  href,
}: Dashboard_C_Template_Card_Props) => {
  return (
    <Link href={`${href}`} prefetch>
      <div className="cursor-pointer p-3">
        <div className="relative h-[250px] w-[450px]">
          <Image src={img} fill alt="t1" objectFit="cover" />
          {/* <iframe src={`${href}`} height={250} width={450}></iframe> */}

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

export default Dashboard_S_User_Templates;
