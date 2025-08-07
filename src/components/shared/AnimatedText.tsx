"use client";

import React, { useEffect } from "react";
import { motion, useAnimate } from "framer-motion";

export interface AnimatedTextProps {
  className?: string;
  children?: string;
  isActive?: any;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({
  className,
  children,
  isActive,
}) => {
  const [scope, animate] = useAnimate();
  const setIsActive = isActive;

  useEffect(() => {
    const spanChildrens = scope.current?.querySelectorAll("span") || [];

    spanChildrens.forEach((span, i) => {
      span.style.opacity = "0";
      span.style.transform = "translateY(20px)";
      animate(
        span,
        { opacity: 1, y: 0 },
        {
          delay: i * 0.2,
          duration: 0.8,
        }
      );
    });
  });

  return (
    <span className={`text-white ${className}`} ref={scope}>
      {children?.split("").map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </span>
  );
};

export default AnimatedText;
