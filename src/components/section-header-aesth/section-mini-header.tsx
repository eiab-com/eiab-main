import React from "react";

interface SectionMiniHeaderProps {
  title: string;
}

const SectionMiniHeader = ({ title }: SectionMiniHeaderProps) => {
  return (
    <div className="w-full absolute top-0 -left-5 p-4 sm:p-8 z-50">
      <p className="text-xs sm:text-sm md:text-base  font-mono">/ {title}</p>
    </div>
  );
};

export default SectionMiniHeader;
