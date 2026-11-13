"use client";
import React, { useEffect } from "react";
import { useAnimate, stagger } from "framer-motion";

export interface SplashScreenProps {
  className?: string;
  onComplete?: () => void;
}

const FIRST_NAME = "MOHAMMAD";
const BARS = 10;

const SplashScreen: React.FC<SplashScreenProps> = ({
  className = "",
  onComplete,
}) => {
  const [scope, animate] = useAnimate();

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      await animate(
        "p",
        { opacity: 1, y: -10 },
        { duration: 0.2, delay: stagger(0.05) },
      );

      await Promise.all([
        animate("p", { opacity: 0 }, { duration: 0.3 }),
        animate(
          "span",
          { y: "100%" },
          { duration: 0.5, ease: "easeInOut", delay: stagger(0.05) },
        ),
      ]);

      if (!cancelled) onComplete?.();
    };

    run();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <div
      ref={scope}
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex items-center justify-center ${className}`}
    >
      <div className="absolute top-[50%] flex text-5xl md:text-[100px] font-bold text-white">
        {FIRST_NAME.split("").map((char, i) => (
          <p key={i} className="opacity-0">
            {char}
          </p>
        ))}
      </div>

      <div className="grid grid-cols-10 w-full h-full absolute -z-10">
        {Array.from({ length: BARS }).map((_, i) => (
          <span key={i} className="w-full h-full bg-black" />
        ))}
      </div>
    </div>
  );
};

export default SplashScreen;
