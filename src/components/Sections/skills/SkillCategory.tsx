"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const SkillCategory: React.FC<{
  category: string;
  items: any;
  index: number;
}> = ({ category, items, index }) => {
  const categoryRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(categoryRef, {
    once: false,
    amount: 0.1,
    margin: "-50px 0px",
  });

  return (
    <motion.div
      ref={categoryRef}
      className="flex flex-col md:flex-row md:gap-x-40 relative"
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{
        duration: 0.3,
        ease: "easeOut",
        delay: 0.1,
      }}
    >
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: 0.05,
        }}
        className="text-5xl font-Anton leading-none uppercase text-secondary"
      >
        {category}
      </motion.p>

      <div className="flex gap-x-5 gap-y-7 mt-10  md:mt-0 md:gap-x-11 md:gap-y-9 flex-wrap md:absolute md:left-[42%] md:top-0 text-secondary !font-light flex-row">
        {Object.values(items).map((item: any, i: number) => (
          <motion.div
            key={crypto.randomUUID()}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
            transition={{
              duration: 0.3,
              ease: "easeOut",
              delay: 0.15 + i * 0.3,
            }}
            className="flex gap-3.5 items-center leading-none"
          >
            <Image
              src={item.icon}
              alt={item.name}
              width={100}
              height={100}
              className="h-7 w-7 md:h-10 md:w-10"
            />
            <p className="text-xl md:text-2xl capitalize">{item.name}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default SkillCategory;
