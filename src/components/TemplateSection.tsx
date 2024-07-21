import React from "react";

import { templates } from "../../data";
import TemplateCard from "./ui/TemplateCard";
import { HiOutlineArrowRight } from "react-icons/hi";
import Link from "next/link";

const TemplateSection = () => {
  return (
    <section id="templates" className="m-auto py-8 lg:w-[85%]">
      <div className="mb-8 flex flex-col gap-6 text-center text-black-100">
        <h2 className="text-center text-xl font-extrabold text-black-100 sm:text-3xl md:text-4xl md:leading-semi-tight lg:text-5xl">
          Creating stunning websites has never been easier.
        </h2>
        <p className="text-center text-sm font-semibold text-black-500 md:text-base lg:text-lg">
          Honestly, we're not that different from other website builders. But
          with our ready-made templates, you get the ease and speed you crave.
          Got it? Exactly, that's the point.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {templates.map(({ _id, img, title, description }) => (
          <Link href="#" key={_id}>
            <TemplateCard img={img} title={title} description={description} />
          </Link>
        ))}
      </div>

      <div className="flex flex-col items-center justify-center gap-2 pt-8 sm:flex-row">
        <span className="text-black-100">Check out all templates</span>
        <Link href="#templates">
          <div className="flex items-center justify-center gap-2 text-center text-blue-500 underline underline-offset-2">
            <HiOutlineArrowRight />
            View Templates
          </div>
        </Link>
      </div>
    </section>
  );
};

export default TemplateSection;
