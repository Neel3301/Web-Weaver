import { SparklesCore } from "@/components/ui/sparkles";
import { Webhook } from "lucide-react";
import React from "react";

const Dashboard_C_Title = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center overflow-hidden">
      <div className="flex items-center justify-center gap-[12px]">
        <Webhook />
        <h1 className="relative z-20 text-center text-[24px] font-bold text-white">
          Glimmer
        </h1>
      </div>
      <div className="relative h-[20px] w-[150px]">
        {/* Gradients */}
        <div className="absolute inset-x-[0px] top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
        <div className="absolute inset-x-[20px] top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        <div className="absolute inset-x-[30px] top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
        <div className="absolute inset-x-[50px] top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />

        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="h-full w-full"
          particleColor="#FFFFFF"
        />

        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 h-full w-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  );
};

export default Dashboard_C_Title;
