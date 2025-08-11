"use client";
import React, { useState } from "react";

export interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="z-30 absolute right-3 top-6">
      <button
        className=" w-9  h-5 flex flex-col space-y-5 "
        onMouseEnter={() => {
          setIsHover(true);
        }}
        onMouseLeave={() => {
          setIsHover(false);
        }}
        onClick={() => {
          setIsActive(!isActive);
        }}
      >
        <span
          className={`absolute w-7 h-[1.5px] bg-white rounded-2xl transition-all duration-300 ease-in-out ${
            isActive
              ? "rotate-[45deg] translate-y-0"
              : isHover
              ? "rotate-[25deg] translate-y-[-2px]"
              : "translate-y-[-2px]"
          }`}
        ></span>
        <span
          className={`absolute w-7 h-[1.5px] bg-white rounded-2xl transition-all duration-300 ease-in-out ${
            isActive
              ? "rotate-[-45deg] translate-y-0"
              : isHover
              ? "rotate-[-20deg] translate-y-[2px]"
              : "translate-y-[2px]"
          }`}
        />
      </button>
    </div>
  );
};

export default Navbar;
