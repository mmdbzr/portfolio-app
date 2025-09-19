"use client";
import { cn } from "@/lib/utils";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";
import Image from "next/image";
import { experience } from "@/lib/data/Experiences";
import SingleExperienceItem from "./SingleExperienceItem";

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["end end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      style={{ y, opacity }}
      className={cn("px-4 md:px-40 md:mt-40")}
    >
      <div className="flex items-center gap-x-4">
        <Image
          src={"/Icons/flower.svg"}
          className="size-8 animate-spin [animation-duration:2s]"
          height={100}
          width={100}
          alt="flower Icon"
        />
        <p className="text-secondary  text-xl md:text-3xl">MY EXPERIENCES</p>
      </div>

      <div className="container mt-10">
        <div className="gap-y-40 md:gap-y-12 flex flex-col">
          {experience.map((item) => (
            <SingleExperienceItem key={crypto.randomUUID()} item={item} />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;
