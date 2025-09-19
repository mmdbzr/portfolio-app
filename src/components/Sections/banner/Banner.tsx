"use client";
import React from "react";
import { easeInOut, motion } from "framer-motion";
import DownloadResumeButton from "../../shared/DownloadResumeButton";
import PixelBlast from "../../shared/PixelBlast";
import BlurText from "../../shared/BlurText";

interface BannerProps {
  className?: string;
}

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

const Banner = ({ className }: BannerProps) => {
  return (
    <section className={`${className} relative w-full h-screen`}>
      <div className="absolute inset-0 z-0 w-full h-full">
        <PixelBlast
          variant="circle"
          pixelSize={6}
          color="#00ef50"
          patternScale={3}
          patternDensity={1.2}
          pixelSizeJitter={0.5}
          enableRipples
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          speed={0.6}
          edgeFade={0.25}
          transparent
        />
      </div>
      <div className="flex flex-col items-center justify-center absolute inset-0 z-10 pointer-events-none">
        <motion.div
          className="px-4 md:px-40 pointer-events-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: false }}
        >
          <motion.h1
            className="text-6xl md:text-7xl font-Anton md:bg-background/90 "
            variants={itemVariants}
          >
            <span className="text-primary">FRONTEND</span>
            <br className="block md:hidden" />
            <span className="text-secondary ml-4">DEVELOPER</span>
          </motion.h1>

          <motion.h2
            className="text-lg text-gray-700 mt-6 max-w-[550px] leading-7 md:text-center bg-background/80! rounded-2xl p-2 "
            variants={itemVariants}
          >
            <BlurText
              text={` Hi! Im Mohammad Bozorgmehr. A dedicated Frontend Developer with 2+ years of experience creating fast, scalable, and user-friendly web applications.`}
              className=" md:justify-center! flex! "
            />
          </motion.h2>

          <motion.div variants={itemVariants} className="flex justify-center">
            <DownloadResumeButton className="mt-9" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
