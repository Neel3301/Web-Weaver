import Dashboard_C_Template_Card from "@/components/studio/dashboard/components/Dashboard_C_Template_Card";
import { Eye } from "lucide-react";

const Dashboard_S_Template = ({
  params,
}: {
  params?: {
    userId: string;
  };
}) => {
  return (
    <div className="h-full w-full overflow-y-scroll p-6">
      <Section_Heading
        heading="Most Use E-Commerce Templates"
        subHeading="Trending"
      />

      <div className="mb-[24px] mt-[24px] flex items-center justify-start gap-[34px] overflow-x-scroll">
        <Dashboard_C_Template_Card img="/t1.png" />
        <Dashboard_C_Template_Card img="/t2.png" />
        <Dashboard_C_Template_Card img="/t3.png" />
        <Dashboard_C_Template_Card img="/t4.png" />
        <Dashboard_C_Template_Card img="/t3.png" />
        <Dashboard_C_Template_Card img="/t3.png" />
        <Dashboard_C_Template_Card img="/t3.png" />
      </div>

      <Section_Heading
        heading="Social Media Templates"
        subHeading="Peoples Favourite"
      />
      <div className="mb-[24px] mt-[24px] flex items-center justify-start gap-[34px] overflow-x-scroll">
        <Dashboard_C_Template_Card img="/t4.png" />
        <Dashboard_C_Template_Card img="/t3.png" />
        <Dashboard_C_Template_Card img="/t2.png" />
        <Dashboard_C_Template_Card img="/t1.png" />
      </div>

      <Section_Heading
        heading="Portfolio Templates"
        subHeading="Glimmers Hand Pick"
      />
      <div className="mb-[24px] mt-[24px] flex items-center justify-start gap-[34px] overflow-x-scroll">
        <Dashboard_C_Template_Card img="/t2.png" />
        <Dashboard_C_Template_Card img="/t4.png" />
        <Dashboard_C_Template_Card img="/t3.png" />
        <Dashboard_C_Template_Card img="/t1.png" />
      </div>
    </div>
  );
};

const Section_Heading = ({
  subHeading,
  heading,
}: {
  subHeading?: string;
  heading: string;
}) => {
  return (
    <div className="flex items-end justify-between overflow-scroll pr-6">
      <div className="w-fit">
        <div className="font-semibold text-neutral-400">{subHeading}</div>
        <div className="text-[24px] font-semibold">{heading}</div>
        <div className="relative">
          <div className="absolute top-0 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
          <div className="absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="absolute top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
          <div className="absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-center gap-[4px] text-[14px] font-semibold">
          <Eye size={14} /> View All
        </div>
        <div className="relative">
          <div className="absolute top-0 h-[2px] w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
          <div className="absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
          <div className="absolute top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
          <div className="absolute top-0 h-px w-full bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard_S_Template;
