import React, { useRef } from "react";
import { SingleExperienceItemProps } from "./type";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";

const SingleExperienceItem = ({
  className,
  item,
}: SingleExperienceItemProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.1,
    margin: "-50px 0px",
  });
  return (
    <motion.div
      className={cn(className, " text-secondary")}
      ref={containerRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
        delay: 0.1,
      }}
    >
      <motion.h3
        className="text-lg font-light text-gray-700 "
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.05,
        }}
      >
        {item.company}
      </motion.h3>
      <motion.h1
        className="font-Anton font-normal text-5xl my-3.5"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.05,
        }}
      >
        {item.role}
      </motion.h1>
      <motion.h2
        className="text-lg font-light font-Roboto text-gray-700 "
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.05,
        }}
      >
        {item.Date}
      </motion.h2>
    </motion.div>
  );
};

export default SingleExperienceItem;
