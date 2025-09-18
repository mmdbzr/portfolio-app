"use client";

import React, { useRef } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import Stack from "@/lib/data/Stack.json";
import Image from "next/image";
import { cn } from "@/lib/utils";
import SkillCategory from "./SkillCategory";

export interface props {
  className?: string;
}

const Skills = ({ className }: props) => {
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
      className={cn(className, "px-4 md:px-40 md:mt-40")}
    >
      <div className="flex items-center gap-x-4">
        <Image
          src={"/Icons/flower.svg"}
          className="size-8 animate-spin [animation-duration:2s]"
          height={100}
          width={100}
          alt="flower Icon"
        />
        <p className="text-secondary text-4xl md:text-3xl">My Stack</p>
      </div>

      <div className="container mt-10">
        <div className="gap-y-40 md:gap-y-60 flex flex-col">
          {Object.entries(Stack).map(([category, items]) => (
            <SkillCategory
              key={crypto.randomUUID()}
              category={category}
              items={items}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
