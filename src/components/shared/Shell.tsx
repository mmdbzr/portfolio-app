"use client";

import Navbar from "@/components/shared/NavBar";
import StarfieldFramer from "../Starfield-animation";

export interface ShellProps {
  children: React.ReactNode;
  className?: string;
}

const Shell: React.FC<ShellProps> = ({ children, className }) => {
  return (
    <main className={className}>
      <Navbar />
      <StarfieldFramer />
      {children}
    </main>
  );
};

export default Shell;
