"use client";
import React, { useEffect } from "react";
import { useAnimate } from "framer-motion";
export interface SplashScreenProps {
  className?: string;
  onComplete?: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({
  className,
  onComplete,
}) => {
  const [textScope, animateText] = useAnimate();
  const [spanScope, animateSpans] = useAnimate();
  const firstName = "MOHAMMAD";

  useEffect(() => {
    const SplashAnimation = async () => {
      const chars = textScope.current?.querySelectorAll("p") || [];
      const spans = spanScope.current?.querySelectorAll("span") || [];

      for (let i = 0; i < chars.length; i++) {
        await animateText(
          chars[i],
          { opacity: 1, y: -10 },
          {
            duration: 0.08,
            ease: "easeInOut",
          }
        );
      }

      for (let i = 0; i < spans.length; i++) {
        animateSpans(
          spans[i],
          { opacity: 0, y: 1000 },
          {
            delay: i * 0.2,
            duration: 0.6,
            ease: "easeInOut",
          }
        );
      }

      for (let i = 0; i < chars.length; i++) {
        animateText(
          chars[i],
          { opacity: 0 },
          {
            duration: 2,
            ease: "easeInOut",
          }
        );
      }
      setTimeout(() => {
        onComplete?.();
      }, 2000);
    };

    SplashAnimation();
  }, []);

  return (
    <div
      className={`flex items-center justify-center w-full min-h-[100vh] h-full ${className}`}
    >
      {/* Text */}
      <div
        className="absolute top-[50%] flex text-5xl md:text-[100px] font-bold text-white"
        ref={textScope}
      >
        {firstName.split("").map((char) => (
          <p key={crypto.randomUUID()} className="opacity-0">
            {char}
          </p>
        ))}
      </div>

      {/* Background spans */}
      <div
        className="grid grid-cols-10 min-w-full min-h-full absolute -z-10"
        ref={spanScope}
      >
        {[...Array(10)].map((_) => (
          <span
            key={crypto.randomUUID()}
            className="w-full h-full bg-black"
          ></span>
        ))}
      </div>
    </div>
  );
};

export default SplashScreen;
