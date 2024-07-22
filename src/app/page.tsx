"use client";

import Home_Client from "@/components/studio/Home/Home_Client";
import Home_Features from "@/components/studio/Home/Home_Features";
import Home_Hero from "@/components/studio/Home/Home_Hero";
import Home_Template from "@/components/studio/Home/Home_Template";

const Home = () => {
  return (
    <div className="px-4 md:px-24 lg:px-36">
      <Home_Hero />
      <Home_Template />
      <Home_Client />
      <Home_Features />
    </div>
  );
};

export default Home;
