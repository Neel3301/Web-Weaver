import Image from "next/image";
import React from "react";
import backgroundImg from "../../public/grid-background.png";
import GradientButton from "./ui/GradientButton";
import OutlineButton from "./ui/OutlineButton";

const Hero = () => {
  return (
    <section className="relative h-[36rem] lg:h-[38rem]">
      <Image
        src={backgroundImg}
        alt="Background"
        className="hidden h-full w-full object-contain sm:block"
      />

      <div className="absolute inset-0 m-auto flex flex-col items-center justify-center gap-6 md:gap-10 lg:w-[90%]">
        <h1 className="text-center text-2xl font-extrabold text-black-100 sm:text-4xl md:text-5xl md:leading-semi-tight lg:text-6xl">
          Building websites made effortless. No coding skills required, just
          creativity.
        </h1>
        <p className="text-center text-sm font-semibold text-black-500 md:text-base lg:text-lg">
          Transform beautiful templates into unique, personalized websites. No
          coding skills needed to create a professional online presence. Edit
          templates, add your content, and launch your site with just a few
          clicks.
        </p>
        <div className="flex gap-2">
          <GradientButton text="Get Started" />
          <OutlineButton text="Watch Demo" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
