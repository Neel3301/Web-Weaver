import React from "react";

const GradientButton = ({ text }: { text: string }) => {
  return (
    <button className="rounded-full bg-gradient-to-b from-blue-500 to-blue-600 px-4 py-1 text-sm text-white transition duration-200 hover:shadow-xl focus:ring-2 focus:ring-blue-400 sm:px-8 sm:py-2 sm:text-base">
      {text}
    </button>
  );
};

export default GradientButton;
