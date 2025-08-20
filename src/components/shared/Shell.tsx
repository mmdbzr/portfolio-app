"use client";

import Navbar from "@/components/shared/Menu";
import StarfieldFramer from "./Starfield-animation";
import ScrollIndicator from "./ScrollIndicator";

export interface ShellProps {
  children: React.ReactNode;
  className?: string;
}

const Shell: React.FC<ShellProps> = ({ children, className }) => {
  return (
    <main className={className}>
      <StarfieldFramer />
      {/* <ScrollTracker /> */}
      {children}
    </main>
  );
};

export default Shell;
