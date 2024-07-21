"use client";

import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const Home_Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="m-auto flex max-w-[1440px] flex-col">
        <div className="flex items-center justify-between p-4 md:px-24 lg:px-36">
          <a className="text-black-100 text-lg font-bold md:text-2xl" href="/">
            Glimmer
          </a>

          {showMenu ? (
            <div className="flex items-center md:hidden">
              <div className="flex h-8 w-8 items-center justify-center">
                <CgClose
                  className="text-black-100 text-xl md:hidden"
                  onClick={() => setShowMenu(false)}
                />
              </div>
            </div>
          ) : (
            <HiMenuAlt3
              className="text-black-100 text-xl md:hidden"
              onClick={() => setShowMenu(true)}
            />
          )}

          <div className="text-black-400 hidden items-center gap-6 text-sm font-medium md:flex">
            <a
              className="hover:text-black-200 transition duration-200"
              href="/"
            >
              Home
            </a>
            <a
              className="hover:text-black-200 transition duration-200"
              href="#features"
            >
              Features
            </a>
            <a
              className="hover:text-black-200 transition duration-200"
              href="#templates"
            >
              Templates
            </a>
            <a
              className="hover:text-black-200 transition duration-200"
              href="#contact-us"
            >
              Contact Us
            </a>
            <a
              className="hover:text-black-200 transition duration-200"
              href="#sign-up"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
      {showMenu && (
        <div className="border-black-600 text-black-100 absolute z-10 flex w-full min-w-80 flex-col gap-2 border-b bg-black px-4 pb-4 md:hidden">
          <a href="/">Home</a>
          <a href="#features">Features</a>
          <a href="#templates">Templates</a>
          <a href="#contact-us">Contact Us</a>
          <a href="#sign-up">Sign Up</a>
        </div>
      )}
    </>
  );
};

export default Home_Navbar;
