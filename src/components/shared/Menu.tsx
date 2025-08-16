"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import { AnimatePresence } from "framer-motion";

export interface NavbarProps {
  className?: string;
}

const Menu: React.FC<NavbarProps> = ({ className }) => {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);

  return (
    <div className="z-30 absolute right-0 top-0 h-screen ">
      <button
        className=" w-9  h-5 flex flex-col space-y-7 fixed right-3 top-6 md:top-9 md:right-5 z-20"
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
      <AnimatePresence mode="wait">
        {isActive && (
          <div>
            <div
              className="w-full h-screen bg-black opacity-40 fixed top-0 left-0 "
              onClick={() => {
                setIsActive(false);
              }}
            />
            <Navbar />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;
