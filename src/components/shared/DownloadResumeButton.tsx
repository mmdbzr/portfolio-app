"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";

export interface ButtonProps {
  className?: string;
}

const DownloadResumeButton = ({ className }: ButtonProps) => {
  const [isHover, setIsHover] = useState<boolean>(false);

  return (
    <a
      className={` cursor-pointer h-12 px-8 bg-white flex w-32 justify-center items-center font-Roboto font-bold relative overflow-clip rounded-3xl  ${className}`}
      href="https://drive.google.com/uc?export=download&id=1Nk5xei92MNnXgsgLAoTTJrXemZLv99OJ"
      download
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <motion.div
        animate={{
          scale: isHover ? 45 : 0,
        }}
        className="w-1 h-1 rounded-full bg-primary absolute z-10 bottom-0"
      ></motion.div>
      <motion.div className="z-10">
        <span>Resume</span>
      </motion.div>
    </a>
  );
};

export default DownloadResumeButton;
