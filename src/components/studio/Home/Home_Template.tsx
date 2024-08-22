import { HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";
import { templates } from "@/constants/studio/templates";
import Home_C_Template_Card from "./components/Home_C_Template_Card";
import Image from "next/image";
import FloorImg from "@public/floor.png";

const Home_Template = () => {
  return (
    <>
      <section
        id="templates"
        className="relative m-auto py-20 lg:max-w-[1440px]"
      >
        <div className="mb-8 flex flex-col gap-6 text-center text-gray-100">
          <h2 className="text-center text-2xl font-extrabold text-gray-100 sm:text-4xl md:leading-semi-tight lg:text-5xl">
            Creating stunning websites has never been easier.
          </h2>
          <p className="text-center text-sm font-semibold text-gray-500 md:text-base lg:text-lg">
            {`Honestly, we're not that different from other website builders. But
          with our ready-made templates, you get the ease and speed you crave.
          Got it? Exactly, that's the point.`}
          </p>
        </div>

        <div className="m-auto grid gap-4 sm:grid-cols-2 lg:w-[48rem]">
          {templates.map(({ _id, img, title, description }) => (
            <Link href="/dashboard/1" key={_id}>
              <Home_C_Template_Card
                img={img}
                title={title}
                description={description}
              />
            </Link>
          ))}
        </div>

        <div className="flex flex-col items-center justify-center gap-2 pt-8 sm:flex-row">
          <span className="text-gray-100">Check out all templates</span>
          <Link href="/dashboard/1">
            <div className="flex items-center justify-center gap-2 text-center text-blue-500 underline underline-offset-2">
              <HiOutlineArrowRight />
              View Templates
            </div>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 -z-10 hidden sm:-mx-4 sm:block md:-mx-24 lg:-mx-36">
          <div className="absolute inset-0 bottom-48 bg-gradient-to-t from-transparent to-black" />
          <Image
            src={FloorImg}
            alt="Decorative Image"
            priority
            className="m-auto min-w-80 object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default Home_Template;
