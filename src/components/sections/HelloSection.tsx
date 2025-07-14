"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaDownload, FaLinkedin } from "react-icons/fa";

const HelloSection = () => {
  // Use state to control visibility rather than conditional rendering
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Set a small delay to ensure CSS is fully loaded
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 150);
    
    // Add a class to the body to prevent flashing of other sections
    document.body.classList.add('hello-section-loading');
    
    return () => {
      clearTimeout(timer);
      document.body.classList.remove('hello-section-loading');
    };
  }, []);

  return (
    <motion.section
      className="flex justify-center items-center mt-4 sm:mt-8 md:mt-16 bg-white pt-8 pb-12 sm:pt-16 sm:pb-20 md:pt-20 md:pb-24 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Mobile-first design with improved layout */}
      <div className="w-full max-w-screen-xl mx-auto px-5 sm:px-6 relative z-10">
        {/* Mobile layout: Image on top, text below */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          {/* Image Section - Smaller on mobile, right side on desktop */}
          <motion.div
            className="order-1 md:order-2 md:w-2/5 flex justify-center md:justify-end mb-6 md:mb-0"
            initial={{ opacity: 0, y: 10, x: 20 }}
            animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 10, x: isLoaded ? 0 : 20 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-80 md:h-80">
              {/* Subtle shadow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-blue-400 rounded-full shadow-xl opacity-60 blur-sm transform -translate-x-1 translate-y-1"></div>
              
              {/* Main image container with border */}
              <div className="relative w-full h-full bg-gradient-to-br from-white via-indigo-50 to-[#9cd1f7] rounded-full shadow-lg border-2 border-white overflow-hidden flex justify-center items-center">
                <motion.div
                  initial={{ scale: 1.05 }}
                  animate={{ scale: isLoaded ? 1 : 1.05 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-full h-full relative overflow-hidden"
                >
                  <Image
                    src="/imgs/Matt.png"
                    alt="Matthew Enarle"
                    fill
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 224px, 320px"
                    className="object-cover object-center"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Text Section - Full width on mobile, left side on desktop */}
          <motion.div
            className="order-2 md:order-1 md:w-3/5 text-center md:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <motion.p 
              className="text-base sm:text-lg text-gray-600 mb-2 sm:mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Hello there! 👋, I am
            </motion.p>
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-indigo-800 mb-3 sm:mb-6 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Matthew Enarle
            </motion.h1>
            <motion.p 
              className="text-sm sm:text-base md:text-lg text-gray-800 mb-6 sm:mb-8 max-w-md mx-auto md:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: isLoaded ? 1 : 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              An athlete, software engineer from the Philippines who&apos;s trying
              to balance everything in life.
              <span className="text-xl sm:text-2xl ml-2">🏃‍♂️💻</span>
            </motion.p>

            {/* Buttons - Improved for mobile */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center md:justify-start mt-6 sm:mt-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isLoaded ? 1 : 0, y: isLoaded ? 0 : 20 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {/* Resume Button */}
              <a
                href="/MatthewEnarle-Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-indigo-800 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-lg hover:bg-indigo-700 hover:shadow-indigo-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg"
              >
                <FaDownload className="mr-2" />
                View Resume
              </a>

              {/* LinkedIn Button */}
              <a
                href="https://www.linkedin.com/in/matthew-enarle/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center bg-blue-600 text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full shadow-lg hover:bg-blue-500 hover:shadow-blue-200/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-base sm:text-lg"
              >
                <FaLinkedin className="mr-2" />
                LinkedIn Profile
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default HelloSection;
