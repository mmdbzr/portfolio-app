"use client";

import React, { useRef } from "react";
import { motion, useInView, useTransform, useScroll } from "framer-motion";
import Stack from "@/lib/data/Stack.json";
import Image from "next/image";
import { cn } from "@/lib/utils";

export interface props {
  className?: string;
}

const Skills: React.FC<props> = ({ className }) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

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
      <p className=" text-secondary text-4xl md:text-3xl  ">My Stack </p>
      <div className="container mt-10">
        <div className="gap-y-60 flex flex-col ">
          {Object.entries(Stack).map(([category, items], index) => (
            <motion.div
              className="flex flex-col md:flex-row md:gap-x-40 relative"
              key={crypto.randomUUID()}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.1,
                ease: "easeOut",
                delay: index * 0.4,
              }}
            >
              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                }
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                }}
                className="text-5xl font-Anton leading-none  uppercase text-secondary"
              >
                {category}
              </motion.p>

              <div className="sm:col-span-7 flex gap-x-11 gap-y-9 flex-wrap absolute left-[42%] top-0 text-secondary !font-light">
                {Object.values(items).map((item, i) => (
                  <motion.div
                    key={crypto.randomUUID()}
                    initial={{ opacity: 0, y: 40 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
                    }
                    transition={{
                      duration: 0.5,
                      ease: "easeOut",
                      delay: i * 0.4,
                    }}
                    className="flex gap-3.5 items-center leading-none"
                  >
                    <Image
                      src={item.icon}
                      alt={item.name}
                      width={40}
                      height={40}
                      className="h-10"
                    />
                    <p className="text-2xl capitalize">{item.name}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
