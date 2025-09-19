"use client";

import StarfieldFramer from "./Starfield-animation";

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
