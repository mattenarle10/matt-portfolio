"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons for hamburger menu

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle the menu visibility on mobile
  };

  return (
    <nav className="flex justify-between items-center p-4 max-w-screen-xl mx-auto bg-white">
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/imgs/M.png"
            alt="Logo"
            width={80}
            height={80}
            className="object-contain"
          />
        </Link>
      </div>

      {/* Right: Navigation Links */}
      <div className="hidden md:flex gap-6">
        <Link
          href="/projects"
          className="relative text-black font-semibold text-lg hover:text-royalblue hover:translate-y-[-2px] transition-all"
        >
          Projects
          <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-royalblue transform scale-x-0 transition-transform origin-bottom-right hover:scale-x-100 hover:origin-bottom-left"></span>
        </Link>
        <Link
          href="/about"
          className="relative text-black font-semibold text-lg hover:text-royalblue hover:translate-y-[-2px] transition-all"
        >
          About
          <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-royalblue transform scale-x-0 transition-transform origin-bottom-right hover:scale-x-100 hover:origin-bottom-left"></span>
        </Link>
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } absolute top-0 left-0 w-full bg-white z-10 md:hidden`}
      >
        <div className="flex flex-col items-center py-6 space-y-4">
          <Link
            href="/projects"
            className="text-black font-semibold text-lg hover:text-royalblue transition-all"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-black font-semibold text-lg hover:text-royalblue transition-all"
            onClick={toggleMenu}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
