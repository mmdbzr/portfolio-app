"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { easeInOut, motion } from "framer-motion";
import DownloadResumeButton from "../../shared/DownloadResumeButton";
import BlurText from "../../shared/BlurText";

// WebGL فقط روی کلاینت و بعد از لود محتوای اصلی
const PixelBlast = dynamic(() => import("../../shared/PixelBlast"), {
  ssr: false,
});

interface BannerProps {
  className?: string;
}

// کانتینر opacity ندارد
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

// h1 فقط جابه‌جایی دارد و opacity ندارد، پس از اول دیده می‌شود
const headingVariants = {
  hidden: { y: 30 },
  visible: { y: 0, transition: { duration: 0.5, ease: easeInOut } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: easeInOut },
  },
};

const Banner = ({ className }: BannerProps) => {
  const [showBackground, setShowBackground] = useState(false);

  // بک‌گراند سنگین را بعد از idle لود کن
  useEffect(() => {
    const start = () => setShowBackground(true);
    if ("requestIdleCallback" in window) {
      const id = window.requestIdleCallback(start, { timeout: 2000 });
      return () => window.cancelIdleCallback(id);
    }
    const id = setTimeout(start, 1200);
    return () => clearTimeout(id);
  }, []);

  return (
    <section
      className={`${className ?? ""} relative w-full h-screen`}
      id="home"
    >
      <div className="absolute inset-0 z-0 w-full h-full" aria-hidden="true">
        {showBackground && (
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
        )}
      </div>

      <div className="flex flex-col items-center justify-center absolute inset-0 z-10 pointer-events-none">
        <motion.div
          className="px-4 md:px-40 pointer-events-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.4, once: true }}
        >
          <motion.h1
            className="text-6xl md:text-7xl font-Anton md:bg-background/90"
            variants={headingVariants}
          >
            <span className="text-primary">FRONTEND</span>
            <br className="block md:hidden" />
            <span className="text-secondary ml-4">DEVELOPER</span>
          </motion.h1>

          <motion.div
            className="text-lg text-gray-700 mt-6 max-w-[550px] leading-7 md:text-center bg-background/80! rounded-2xl p-2"
            variants={itemVariants}
          >
            <BlurText
              text="Hi! Im Mohammad Bozorgmehr. A dedicated Frontend Developer with 2+ years of experience creating fast, scalable, and user-friendly web applications."
              className="md:justify-center! flex!"
            />
          </motion.div>

          <motion.div variants={itemVariants} className="flex justify-center">
            <DownloadResumeButton className="mt-9" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;
