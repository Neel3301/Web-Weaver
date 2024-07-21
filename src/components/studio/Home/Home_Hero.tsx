import Gradient_Btn from "@/components/Gradient_Btn";
import Outline_Btn from "@/components/Outline_Btn";
import Image from "next/image";

import backgroundImg from "@/../public/grid-background.webp";

const Home_Hero = () => {
  return (
    <section className="relative h-[36rem] lg:h-[38rem]">
      <Image
        src={backgroundImg}
        alt="Background"
        className="hidden h-full w-full object-contain sm:block"
        priority
      />

      <div className="absolute inset-0 m-auto flex flex-col items-center justify-center gap-6 md:gap-10 lg:w-[90%]">
        <h1 className="text-black-100 md:leading-semi-tight text-center text-2xl font-extrabold sm:text-4xl md:text-5xl lg:text-6xl">
          Building websites made effortless. No coding skills required, just
          creativity.
        </h1>
        <p className="text-black-500 text-center text-sm font-semibold md:text-base lg:text-lg">
          Transform beautiful templates into unique, personalized websites. No
          coding skills needed to create a professional online presence. Edit
          templates, add your content, and launch your site with just a few
          clicks.
        </p>
        <div className="flex gap-2">
          <Gradient_Btn text="Get Started" />
          <Outline_Btn text="Watch Demo" />
        </div>
      </div>
    </section>
  );
};

export default Home_Hero;
