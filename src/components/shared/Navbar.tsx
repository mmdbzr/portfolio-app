import React from "react";
import { motion } from "framer-motion";
import Curve from "./Curve";

export interface NavbarProps {
  className?: string;
}

export const menuSlide = {
  initial: { x: "calc(100% + 100px)" },
  enter: { x: "0", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } },
  exit: {
    x: "calc(100% + 100px)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
  },
};

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <motion.div
      className={`${className} fixed top-0 right-0 h-screen  flex flex-col items-center justify-center bg-[#212121] `}
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <div className={`p-[200px] h-full bg-inherit`}>
        {" "}
        Navbar
        <div></div>
      </div>
      <Curve />
    </motion.div>
  );
};

export default Navbar;
