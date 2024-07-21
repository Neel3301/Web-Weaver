"use client";

import Home_Hero from "@/components/studio/Home/Home_Hero";
import Home_Template from "@/components/studio/Home/Home_Template";

const Home = () => {
  return (
    <div className="m-auto flex max-w-[1440px] flex-col px-4 md:px-24 lg:px-36">
      <Home_Hero />
      <Home_Template />
    </div>
  );
};

export default Home;
