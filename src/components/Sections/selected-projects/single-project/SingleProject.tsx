"use client";
import React, { useRef } from "react";
import TiltedCard from "../tilted-card/TiltedCard";
import { SingleProjectProps } from "./type";
import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import Link from "next/link";

const SingleProject = ({
  className,
  projectSrc,
  projectName,
  technologies,
  index,
}: SingleProjectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, {
    once: false,
    amount: 0.1,
    margin: "-50px 0px",
  });
  return (
    <motion.div
      className={cn(
        className,
        "flex flex-col gap-y-10 items-center md:gap-y-0 md:items-start md:flex-row md:justify-between w-full"
      )}
      ref={containerRef}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
        delay: 0.1,
      }}
    >
      <div className="flex items-start gap-x-6">
        <motion.h3
          className="text-[16px] text-gray-700 "
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
            delay: 0.05,
          }}
        >
          _0{index}.
        </motion.h3>
        <div className="flex flex-col justify-start">
          <motion.h1
            className="font-Anton font-normal text-5xl my-3.5 text-secondary"
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.05,
            }}
          >
            <Link href={projectSrc} target="_blank">
              {projectName}
            </Link>
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
            {technologies}
          </motion.h2>
        </div>
      </div>
      <TiltedCard projectSrc={projectSrc} />
    </motion.div>
  );
};

export default SingleProject;
