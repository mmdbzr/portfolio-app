"use client";
import React from "react";
import Image from "next/image";
import PixelBlast from "../PixelBlast";
import { relative } from "path";

export const Footer = () => {
  return (
    <div className=" p-24 mt-6 md:mt-28">
      <div className="flex flex-col items-center justify-center z-10  text-secondary gap-y-6">
        <p className="text-lg font-Anton">Have a project in mind?</p>
        <a
          href="mailto:mohammad.bzr82@gmail.com"
          className="font-Anton text-xl underline cursor-pointer md:text-4xl"
        >
          mohammad.bzr82@gmail.com
        </a>
        <div className="flex gap-x-4 items-center">
          <a href="https://www.linkedin.com/in/mohammad-bozorgmehr">
            <Image
              src="/Icons/linkedin.svg"
              height={24}
              width={24}
              className="object-cover"
              alt="linkedin"
            />
          </a>
          <a href="https://t.me/mmdbzr82">
            <Image
              src="/Icons/telegram.svg"
              height={24}
              width={24}
              className="object-cover"
              alt="telegram"
            />
          </a>
        </div>
      </div>
    </div>
  );
};
