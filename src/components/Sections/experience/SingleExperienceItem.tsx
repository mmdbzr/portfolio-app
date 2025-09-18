import React from "react";
import { SingleExperienceItemProps } from "./type";
import { cn } from "@/lib/utils";

const SingleExperienceItem = ({
  className,
  item,
}: SingleExperienceItemProps) => {
  return (
    <div className={cn(className, " text-secondary")}>
      <h3 className="text-lg font-light text-gray-700 ">{item.company}</h3>
      <h1 className="font-Anton font-normal text-5xl my-3.5">{item.role}</h1>
      <h2 className="text-lg font-light font-Roboto text-gray-700 ">
        {item.Date}
      </h2>
    </div>
  );
};

export default SingleExperienceItem;
