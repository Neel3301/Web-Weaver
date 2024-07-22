"use client";

import Home_Hero from "@/components/studio/Home/Home_Hero";
import Home_Template from "@/components/studio/Home/Home_Template";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center px-4 md:px-24 lg:px-36">
      <Home_Hero />
      <Home_Template />
    </div>
  );
};

export default Home;
