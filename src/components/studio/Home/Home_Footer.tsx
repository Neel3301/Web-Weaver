import Link from "next/link";
import React from "react";

const Home_Footer = () => {
  return (
    <footer className="flex flex-col gap-8 py-16 pb-4">
      <div className="flex flex-col items-start justify-between sm:flex-row">
        <div className="text-lg font-bold text-gray-100 md:text-2xl">
          <Link href="/">Web Weaver</Link>
        </div>
        <div className="flex w-full justify-between gap-4 text-gray-100 sm:w-[40%]">
          <div className="flex flex-col gap-4">
            <h4 className="text-gray">Navigate</h4>
            <ul className="flex flex-col gap-2">
              <li className="underline-offset-2 hover:underline">
                <Link href="/">Home</Link>
              </li>
              <li className="underline-offset-2 hover:underline">
                <Link href="#features">Features</Link>
              </li>
              <li className="underline-offset-2 hover:underline">
                <Link href="#templates">Templates</Link>
              </li>
              <li className="underline-offset-2 hover:underline">
                <Link href="#contact-us">Contact Us</Link>
              </li>
              <li className="underline-offset-2 hover:underline">
                <Link href="#sign-up">Sign Up</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-gray">About</h4>
            <ul className="flex flex-col gap-2">
              <li className="underline-offset-2 hover:underline">
                <Link href="#about-us">About Us</Link>
              </li>
              <li className="underline-offset-2 hover:underline">
                <Link href="#terms-n-conditions">Terms & Conditions</Link>
              </li>
              <li className="underline-offset-2 hover:underline">
                <Link href="#privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center pt-6">
        <p className="text-gray-100">Copyright © 2024 Web Weaver</p>
      </div>
    </footer>
  );
};

export default Home_Footer;
