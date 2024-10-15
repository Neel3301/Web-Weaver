import Image from "next/image";
import React from "react";
import backgroundImg from "@/../public/grid-background.png";
import Home_C_Gradient_Btn from "./components/Home_C_Gradient_Btn";
import Home_C_Outline_Btn from "./components/Home_C_Outline_Btn";
import Link from "next/link";

const Home_Features = () => {
  return (
    <section className="relative flex w-full items-center py-20">
      <div className="absolute right-0 top-0 z-0 h-full w-full overflow-hidden sm:max-w-[50%]">
        <Image
          src={backgroundImg}
          alt="Background Image"
          priority
          className="h-full w-full scale-125 object-contain"
        />
      </div>

      <div className="relative z-10 flex w-full flex-col gap-4 sm:max-w-[70%]">
        <h2 className="text-center text-2xl font-extrabold text-gray-100 sm:text-left sm:text-4xl md:leading-semi-tight lg:text-5xl">
          Features like responsive design, no coding required and more
        </h2>
        <p className="text-center text-sm font-semibold text-gray-500 sm:text-left md:text-base lg:text-lg">
          {`Whether you're a technical expert or a non-technical user, Glimmer
          helps you create stunning websites effortlessly.`}
        </p>
        <div className="flex items-center justify-center gap-2 sm:justify-start">
          <Link href={"/v2"} prefetch>
            <Home_C_Gradient_Btn text="Get Started" />
          </Link>
          <Link href={"/dashboard/1"}>
            <Home_C_Outline_Btn text="Watch Demo" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Home_Features;
