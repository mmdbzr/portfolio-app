"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

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
          <Link
            href="https://www.linkedin.com/in/mohammad-bozorgmehr"
            target="_blank"
          >
            <Image
              src="/Icons/linkedin.svg"
              height={24}
              width={24}
              className="object-cover"
              alt="linkedin"
            />
          </Link>
          <Link href="https://t.me/mmdbzr82" target="_blank">
            <Image
              src="/Icons/telegram.svg"
              height={24}
              width={24}
              className="object-cover"
              alt="telegram"
            />
          </Link>
          <Link href="https://github.com/mmdbzr" target="_blank">
            <Image
              src="/Icons/github-142-svgrepo-com.svg"
              height={24}
              width={24}
              className="object-cover"
              alt="telegram"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
