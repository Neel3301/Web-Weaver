"use client";

import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="m-auto flex max-w-[1440px] flex-col">
        <div className="flex items-center justify-between p-4 md:px-24 lg:px-36">
          <a className="text-lg font-bold md:text-2xl" href="/">
            Glimmer
          </a>

          {showMenu ? (
            <div className="flex items-center md:hidden">
              <div className="flex h-8 w-8 items-center justify-center">
                <CgClose
                  className="text-xl md:hidden"
                  onClick={() => setShowMenu(false)}
                />
              </div>
            </div>
          ) : (
            <HiMenuAlt3
              className="text-xl md:hidden"
              onClick={() => setShowMenu(true)}
            />
          )}

          <div className="hidden items-center gap-6 text-sm font-medium text-black-400 md:flex">
            <a
              className="transition duration-200 hover:text-black-200"
              href="/"
            >
              Home
            </a>
            <a
              className="transition duration-200 hover:text-black-200"
              href="#features"
            >
              Features
            </a>
            <a
              className="transition duration-200 hover:text-black-200"
              href="#templates"
            >
              Templates
            </a>
            <a
              className="transition duration-200 hover:text-black-200"
              href="#contact-us"
            >
              Contact Us
            </a>
            <a
              className="transition duration-200 hover:text-black-200"
              href="#sign-up"
            >
              Sign Up
            </a>
          </div>
        </div>
      </nav>
      {showMenu && (
        <div className="absolute z-10 flex w-full min-w-80 flex-col gap-2 border-b border-black-600 bg-black px-4 pb-4 md:hidden">
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

export default Navbar;
