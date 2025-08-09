// components/ScrollTracker.js
"use client";
import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function ScrollTracker() {
  const [scrollPercent, setScrollPercent] = useState(0);

  // Smooth animation for the scroll value
  const smoothScroll = useSpring(scrollPercent, {
    stiffness: 120,
    damping: 20,
    mass: 0.5,
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = (scrollTop / docHeight) * 100;
      setScrollPercent(scrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-1/2 right-[2%] -translate-y-1/2 w-1.5 h-[100px] rounded-full bg-gray-800 overflow-hidden">
      <motion.div
        className="w-full bg-green-400 rounded-full"
        style={{
          translateY: smoothScroll.to((v) => `-${100 - v}%`),
        }}
      />
    </div>
  );
}
