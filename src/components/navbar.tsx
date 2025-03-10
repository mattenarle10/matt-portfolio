"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-md py-2" : "bg-white/90 py-4"}`}>
      <div className="flex justify-between items-center px-4 max-w-screen-xl mx-auto">
        {/* Left: Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <Image
              src="/imgs/M.png"
              alt="Logo"
              width={70}
              height={70}
              className="object-contain"
            />
          </Link>
        </div>

        {/* Right: Navigation Links */}
        <div className="hidden md:flex gap-8">
          <Link
            href="/projects"
            className="relative text-black font-semibold text-lg hover:text-indigo-700 hover:translate-y-[-2px] transition-all duration-300"
          >
            Projects
            <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-indigo-700 transform scale-x-0 transition-transform duration-300 origin-bottom-right hover:scale-x-100 hover:origin-bottom-left"></span>
          </Link>
          <Link
            href="/about"
            className="relative text-black font-semibold text-lg hover:text-indigo-700 hover:translate-y-[-2px] transition-all duration-300"
          >
            About
            <span className="absolute bottom-[-5px] left-0 w-full h-[2px] bg-indigo-700 transform scale-x-0 transition-transform duration-300 origin-bottom-right hover:scale-x-100 hover:origin-bottom-left"></span>
          </Link>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={toggleMenu} 
            className="text-2xl p-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded-md"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Fixed overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"} md:hidden`}
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-200">
          <Link href="/" className="flex items-center" onClick={toggleMenu}>
            <Image
              src="/imgs/M.png"
              alt="Logo"
              width={60}
              height={60}
              className="object-contain"
            />
          </Link>
          <button 
            onClick={toggleMenu} 
            className="text-2xl p-2 focus:outline-none"
            aria-label="Close menu"
          >
            <FaTimes />
          </button>
        </div>
        <div className="flex flex-col items-center py-12 space-y-6">
          <Link
            href="/projects"
            className="text-black font-semibold text-xl hover:text-indigo-700 transition-all"
            onClick={toggleMenu}
          >
            Projects
          </Link>
          <Link
            href="/about"
            className="text-black font-semibold text-xl hover:text-indigo-700 transition-all"
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
