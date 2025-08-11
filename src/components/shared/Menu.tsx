"use client";
import React, { useState } from "react";

export interface NavbarProps {
  className?: string;
}

const Menu: React.FC<NavbarProps> = ({ className }) => {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="z-30 absolute right-0 top-0 ">
      <button
        className=" w-9  h-5 flex flex-col space-y-7 fixed right-3 top-6 md:top-9 md:right-5"
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
          className={`absolute w-7 h-[1.5px] bg-white rounded-2xl transition-all duration-300 ease-in-out  ${
            isActive
              ? "rotate-[-45deg] translate-y-0"
              : isHover
              ? "rotate-[-20deg] translate-y-[2px]"
              : "translate-y-[2px]"
          }`}
        />
      </button>
      {isActive && (
        <div className="w-[332px] h-[100vh] bg-amber-500 inline-block"></div>
      )}
    </div>
  );
};

export default Menu;
