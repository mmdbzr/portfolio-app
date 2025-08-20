"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
export interface Props {
  className?: string;
}

const Aboutme: React.FC<Props> = ({ className }) => {
  const contaionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: contaionRef,
    offset: ["start 70%", "end 10%"],
  });

  const y = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [150, 0, 0, -150]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section className={`${className} px-4 md:px-40 md:mt-[270px]`}>
      {" "}
      <motion.div className="container text-secondary" ref={contaionRef}>
        <motion.h2
          className="text-4xl md:text-6xl font-thin mb-20 "
          style={{ y, opacity }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          As a front-end developer, I embrace a user-centric design approach,
          ensuring every interface I build is intuitive, responsive, and
          tailored to meet the unique needs of its users.
        </motion.h2>

        <motion.p
          className="pb-3 border-b  "
          style={{ y, opacity }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          This is me.
        </motion.p>

        <motion.div
          className="grid md:grid-cols-12 mt-9"
          style={{ y, opacity }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="md:col-span-5">
            <p className="text-5xl ">Hi, I&apos;m Mohammad.</p>
          </div>
          <div className="md:col-span-7">
            <div className="text-lg  max-w-[450px]">
              <p className="">
                I&apos;m a frontend web developer dedicated to turning ideas
                into creative solutions. I specialize in creating seamless and
                intuitive user experiences.
              </p>
              <p className="mt-3 ">
                My approach focuses on creating scalable, high-performing
                solutions tailored to both user needs and business objectives.
                By prioritizing performance, accessibility, and responsiveness,
                I strive to deliver experiences that not only engage users but
                also drive tangible results.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Aboutme;
