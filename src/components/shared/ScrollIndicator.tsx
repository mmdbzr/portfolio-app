"use client";
import { useScroll, motion } from "framer-motion";
export interface Props {
  className?: string;
}

const ScrollIndicator: React.FC<Props> = ({ className }) => {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      className={` h-16 w-1  ${className} `}
      style={{ scaleY: scrollYProgress }}
    />
  );
};

export default ScrollIndicator;
