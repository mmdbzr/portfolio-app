import React from "react";
import { motion, cubicBezier } from "framer-motion";
import Curve from "./Curve";

export interface NavbarProps {
  className?: string;
  onClick?: () => void;
}

const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: {
    x: "0",
    transition: { duration: 0.8, ease: cubicBezier(0.76, 0, 0.24, 1) },
  },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: cubicBezier(0.76, 0, 0.24, 1) },
  },
};

const Navbar: React.FC<NavbarProps> = ({ className, onClick }) => {
  return (
    <motion.div
      className={`${className} fixed top-0 right-0 h-screen flex flex-col items-center justify-center bg-[#212121] `}
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className="p-[50px] md:p-[200px] h-full bg-inherit flex flex-col items-start text-4xl md:text-6xl font-Anton text-gray-700 gap-y-4">
        <a href="#home" onClick={onClick}>
          Home
        </a>
        <a href="#about" onClick={onClick}>
          About Me
        </a>
        <a href="#skills" onClick={onClick}>
          Skills
        </a>
        <a href="#experience" onClick={onClick}>
          Experience
        </a>
        <a href="#projects" onClick={onClick}>
          Projects
        </a>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Navbar;
