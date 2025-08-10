"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
export interface ButtonProps {
  className?: string;
}

const DownloadResumeButton: React.FC<ButtonProps> = ({ className }) => {
  const [isHover, setIsHover] = useState<boolean>(false);
  console.log(isHover);

  return (
    <a
      className={` cursor-pointer h-12 px-8 bg-primary flex w-32 justify-center items-center font-Anton relative overflow-clip  ${className}`}
      href="https://drive.google.com/uc?export=download&id=1Nk5xei92MNnXgsgLAoTTJrXemZLv99OJ"
      download
      onMouseEnter={(e) => setIsHover(true)}
      onMouseLeave={(e) => setIsHover(false)}
    >
      <motion.div
        animate={{
          scale: isHover ? 45 : 0,
        }}
        className="w-1 h-1 rounded-full bg-white absolute z-10 bottom-0"
      ></motion.div>
      <motion.div className=" absolute z-10">
        {" "}
        <span>Resume</span>
      </motion.div>
      <motion.div className="w-5 h-5 absolute right-3 z-10 top-[12px]">
        {/* <Image
          src={"./Icons/DownlodIcon.svg"}
          width={100}
          height={100}
          alt="downloadIcon"
        /> */}
        <ArrowDownTrayIcon className=" stroke-1 stroke-black" />
      </motion.div>
    </a>
  );
};

export default DownloadResumeButton;
