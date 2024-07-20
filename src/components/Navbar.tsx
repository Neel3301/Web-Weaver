"use client";

import React, { useState } from "react";
import ThemeSwitch from "./ThemeSwitch";
import { HiMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="m-auto flex min-w-80 max-w-[1440px] flex-col">
      <div className="flex items-center justify-between p-4 md:px-24 lg:px-36">
        <a className="text-lg font-bold md:text-2xl" href="/">
          Glimmer
        </a>

        {showMenu ? (
          <div className="flex items-center md:hidden">
            <ThemeSwitch />
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

        <div className="text-black-500 hidden items-center gap-6 text-sm font-medium md:flex">
          <a
            className="hover:text-black-700 dark:hover:text-black-200 transition duration-200"
            href="/"
          >
            Home
          </a>
          <a
            className="hover:text-black-700 dark:hover:text-black-200 transition duration-200"
            href="#features"
          >
            Features
          </a>
          <a
            className="hover:text-black-700 dark:hover:text-black-200 transition duration-200"
            href="#templates"
          >
            Templates
          </a>
          <a
            className="hover:text-black-700 dark:hover:text-black-200 transition duration-200"
            href="#contact-us"
          >
            Contact Us
          </a>
          <a
            className="hover:text-black-700 dark:hover:text-black-200 transition duration-200"
            href="#sign-up"
          >
            Sign Up
          </a>
          <div className="rounded transition duration-200 hover:bg-black/10 dark:hover:bg-white/10">
            <ThemeSwitch />
          </div>
        </div>
      </div>
      {showMenu && (
        <div className="flex flex-col gap-2 px-4 pb-4 md:hidden">
          <a href="/">Home</a>
          <a href="#features">Features</a>
          <a href="#templates">Templates</a>
          <a href="#contact-us">Contact Us</a>
          <a href="#sign-up">Sign Up</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
