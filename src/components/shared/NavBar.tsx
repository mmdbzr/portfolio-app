import React from "react";

export interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className }) => {
  return (
    <nav className="border-blue-[#262626] border-2 text-white">Navbar</nav>
  );
};

export default Navbar;
