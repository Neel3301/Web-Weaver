import Image from "next/image";

import backgroundImg from "@/../public/grid-background.webp";
import Home_C_Gradient_Btn from "./components/Home_C_Gradient_Btn";
import Home_C_Outline_Btn from "./components/Home_C_Outline_Btn";

const Home_Hero = () => {
  return (
    <section className="relative h-[36rem] w-full lg:h-[38rem] lg:max-w-[1440px]">
      <div className="absolute inset-0 -mx-4 flex items-center justify-center overflow-x-hidden">
        <Image
          src={backgroundImg}
          alt="Background"
          className="h-full min-w-80 object-cover"
          priority
        />
      </div>

      <div className="absolute inset-0 m-auto flex flex-col items-center justify-center gap-6 md:w-[95%] md:gap-10 lg:w-[90%]">
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
          <Home_C_Gradient_Btn text="Get Started" />
          <Home_C_Outline_Btn text="Watch Demo" />
        </div>
      </div>
    </section>
  );
};

export default Home_Hero;
