"use client";
import React from "react";
import { easeInOut, motion } from "framer-motion";

import DownloadResumeButton from "../DownloadResumeButton";

type BannerProps = {
  className?: string;
};

const containerVariants = {
  hidden: { opacity: 0, y: 50, transition: { duration: 0.8, easeInOut } },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, easeInOut },
  },
};

const Banner: React.FC<BannerProps> = ({ className }) => {
  return (
    <section className={`${className}`}>
      <motion.div
        className="px-4 md:px-40"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ amount: 0.4, once: false }}
      >
        <motion.h1
          className="text-6xl md:text-7xl font-Anton"
          variants={itemVariants}
        >
          <span className="text-primary">FRONTEND</span>
          <br />
          <span className="text-secondary ml-4">DEVELOPER</span>
        </motion.h1>

        <motion.h2
          className="text-lg text-gray-700 mt-6 max-w-[550px] leading-7"
          variants={itemVariants}
        >
          Hi! I&apos;m{" "}
          <span className="text-secondary">Mohammad Bozorgmehr</span>. A
          dedicated Frontend Developer with 2+ years of experience creating
          fast, scalable, and user-friendly web applications.
        </motion.h2>

        <motion.div variants={itemVariants}>
          <DownloadResumeButton className="mt-9" />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Banner;
