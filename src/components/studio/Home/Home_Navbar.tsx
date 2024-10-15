"use client";

import { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { CgClose } from "react-icons/cg";
import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Home_Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav className="m-auto flex w-screen max-w-[1440px] flex-col pt-[12px]">
        <div className="flex items-center justify-between p-4 md:px-24 lg:px-36">
          <Link
            className="text-lg font-bold text-gray-100 md:text-2xl"
            href="/"
          >
            Web Weaver
          </Link>

          {showMenu ? (
            <div className="flex items-center md:hidden">
              <div className="flex h-8 w-8 items-center justify-center">
                <CgClose
                  className="text-xl text-gray-100 md:hidden"
                  onClick={() => setShowMenu(false)}
                />
              </div>
            </div>
          ) : (
            <HiMenuAlt3
              className="text-xl text-gray-100 md:hidden"
              onClick={() => setShowMenu(true)}
            />
          )}

          <div className="hidden items-center gap-6 text-sm font-medium text-gray-400 md:flex">
            <Link
              className="transition duration-200 hover:text-gray-200"
              href="/"
            >
              Home
            </Link>
            <Link
              className="transition duration-200 hover:text-gray-200"
              href="#features"
            >
              Features
            </Link>
            <Link
              className="transition duration-200 hover:text-gray-200"
              href="#templates"
            >
              Templates
            </Link>
            <Link
              className="transition duration-200 hover:text-gray-200"
              href="#contact-us"
            >
              Contact Us
            </Link>
            <SignedOut>
              <SignInButton
                forceRedirectUrl={"/v2"}
                signUpForceRedirectUrl={"/v2"}
                mode="modal"
              />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>
        </div>
      </nav>
      {showMenu && (
        <div className="absolute z-10 flex w-full min-w-80 flex-col gap-2 border-b border-gray-600 bg-black px-4 pb-4 text-gray-100 md:hidden">
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

export default Home_Navbar;
