"use client";

import Gradient_Btn from "@/components/Gradient_Btn";
import Outline_Btn from "@/components/Outline_Btn";
import Home_Hero from "@/components/studio/Home/Home_Hero";
import Home_Navbar from "@/components/studio/Home/Home_Navbar";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import { auth, currentUser } from "@clerk/nextjs/server";

const Home = () => {
  return (
    <>
      <Home_Navbar />
      <Home_Hero />
    </>
  );
};

export default Home;
