import { Link } from "next-view-transitions";
import React from "react";

const Logo = () => {
  return (
    <Link
      href="/"
      className="logo p-2 w-fit font-heading text-2xl md:text-2xl lg:text-5xl font-bold transition-all duration-300 group flex items-center space-x-1"
    >
      {/* E + xplore */}
      <span className="inline-flex">
        <span>E</span>
        <span className="inline-flex overflow-hidden whitespace-nowrap max-w-0 transition-all duration-300 group-hover:max-w-[6ch]">
          xplore
        </span>
      </span>

      {/* I + ndia */}
      <span className="inline-flex">
        <span>I</span>
        <span className="inline-flex overflow-hidden whitespace-nowrap max-w-0 transition-all duration-300 group-hover:max-w-[4ch]">
          ndia
        </span>
      </span>

      {/* and */}
      <span className="inline-flex">
        <span>A</span>
        <span className="inline-flex overflow-hidden whitespace-nowrap max-w-0 transition-all duration-300 group-hover:max-w-[3ch]">
          nd
        </span>
      </span>

      {/* B + eyond */}
      <span className="inline-flex">
        <span>B</span>
        <span className="inline-flex overflow-hidden whitespace-nowrap max-w-0 transition-all duration-300 group-hover:max-w-[5ch]">
          eyond
        </span>
      </span>
    </Link>
  );
};

export default Logo;
