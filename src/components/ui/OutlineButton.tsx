import React from "react";

const OutlineButton = ({ text }: { text: string }) => {
  return (
    <button className="ring-black-100 text-black-200 rounded-full px-4 py-1 text-sm font-semibold ring-1 sm:px-8 sm:py-2 sm:text-base">
      {text}
    </button>
  );
};

export default OutlineButton;
