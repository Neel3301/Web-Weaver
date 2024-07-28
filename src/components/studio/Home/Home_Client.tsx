import React from "react";
import { Infinite_Moving_Cards } from "@/components/ui/Infinite_Moving_Cards";
import { clientReviews } from "@/constants/studio/client_reviews";

const Home_Client = () => {
  return (
    <section className="w-full py-24">
      <h2 className="text-center text-2xl font-extrabold text-gray-100 sm:text-4xl md:leading-semi-tight lg:text-5xl">
        Discover How Our No-Code Website Builder Empowers Creators
      </h2>
      <div className="pt-4">
        <Infinite_Moving_Cards
          items={clientReviews}
          speed="slow"
          direction="left"
        />
      </div>
    </section>
  );
};

export default Home_Client;
