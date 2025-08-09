"use client";
import React from "react";

export interface ButtonProps {
  className?: string;
}

const DownloadResumeButton: React.FC<ButtonProps> = ({ className }) => {
  return (
    <a
      className={` cursor-pointer ${className}`}
      href="/resume.pdf"
      download
      onClick={() => {
        console.log("jklahsdf");
      }}
    >
      Download{" "}
    </a>
  );
};

export default DownloadResumeButton;
