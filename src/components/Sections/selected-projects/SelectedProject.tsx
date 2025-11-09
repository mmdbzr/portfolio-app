"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { selectedProjects } from "@/lib/data/SelectedProjects";
import SingleProject from "./single-project/SingleProject";
const SelectedProject = () => {
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
      className={cn("px-4 md:px-40 md:mt-40 w-full")}
      id="projects"
    >
      <div className="flex items-center gap-x-4 mb-10 text-[20px]">
        <Image
          src={"/Icons/flower.svg"}
          className="size-8 animate-spin [animation-duration:2s]"
          height={100}
          width={100}
          alt="flower Icon"
        />
        <p className="text-secondary text-xl md:text-3xl ">SELECTED PROJECTS</p>
      </div>

      {selectedProjects.map((project, index) => (
        <SingleProject
          key={crypto.randomUUID()}
          index={index}
          projectSrc={project.projectSrc}
          projectName={project.projectName}
          technologies={project.technologies}
        />
      ))}
    </motion.section>
  );
};

export default SelectedProject;
