"use client";

import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import Link from "next/link";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="m-auto flex max-w-[1440px] flex-col">
        <div className="flex items-center justify-between p-4 md:px-24 lg:px-36">
          <Link
            className="text-lg font-bold text-black-100 md:text-2xl"
            href="/"
          >
            Glimmer
          </Link>

          {showMenu ? (
            <div className="flex items-center md:hidden">
              <div className="flex h-8 w-8 items-center justify-center">
                <CgClose
                  className="text-xl text-black-100 md:hidden"
                  onClick={() => setShowMenu(false)}
                />
              </div>
            </div>
          ) : (
            <HiMenuAlt3
              className="text-xl text-black-100 md:hidden"
              onClick={() => setShowMenu(true)}
            />
          )}

          <div className="hidden items-center gap-6 text-sm font-medium text-black-400 md:flex">
            <Link
              className="transition duration-200 hover:text-black-200"
              href="/"
            >
              Home
            </Link>
            <Link
              className="transition duration-200 hover:text-black-200"
              href="#features"
            >
              Features
            </Link>
            <Link
              className="transition duration-200 hover:text-black-200"
              href="#templates"
            >
              Templates
            </Link>
            <Link
              className="transition duration-200 hover:text-black-200"
              href="#contact-us"
            >
              Contact Us
            </Link>
            <Link
              className="transition duration-200 hover:text-black-200"
              href="#sign-up"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
      {showMenu && (
        <div className="absolute z-10 flex w-full min-w-80 flex-col gap-2 border-b border-black-600 bg-black px-4 pb-4 text-black-100 md:hidden">
          <Link href="/">Home</Link>
          <Link href="#features">Features</Link>
          <Link href="#templates">Templates</Link>
          <Link href="#contact-us">Contact Us</Link>
          <Link href="#sign-up">Sign Up</Link>
        </div>
      )}
    </>
  );
};

export default Navbar;
