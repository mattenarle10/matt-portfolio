"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaDownload, FaLinkedin } from "react-icons/fa";

const HelloSection = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure animations and dynamic content only run on the client
  }, []);

  if (!isClient) {
    return null; // Prevent rendering until client-side hydration
  }

  return (
    <motion.section
      className="flex justify-center items-center mt-0 bg-white py-8 sm:py-16 relative overflow-hidden"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Animated background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
      
        <div className="absolute top-0 left-0 w-full h-fullopacity-0">
          <motion.div
            className="absolute w-16 h-16 rounded-full bg-yellow-300 opacity-60"
            animate={{
              x: [100, 400, 700, 100],
              y: [50, 200, 300, 50],
              opacity: [0.5, 0.8, 1, 0.5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute w-12 h-12 rounded-full bg-yellow-300 opacity-60"
            animate={{
              x: [300, 500, 600, 300],
              y: [50, 150, 350, 50],
              opacity: [0.5, 0.9, 0.8, 0.5],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              repeatType: "loop",
              ease: "easeInOut",
            }}
          />
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-screen-xl mx-auto px-4 space-y-8 sm:space-y-0 sm:space-x-8 relative z-10">
        {/* Left Section */}
        <motion.div
          className="text-section max-w-xl"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <p className="text-lg text-gray-600 mb-2">Hello there, I am</p>
          <h1 className="text-5xl sm:text-8xl font-extrabold text-indigo-800 mb-4 flex items-center gap-2">
            Matthew Enarle
          </h1>
          <p className="text-base sm:text-xl text-gray-800 mb-6">
            An athlete, software engineer from the Philippines who&apos;s trying to balance everything in life.
            <span className="text-4xl">🏃‍♂️💻</span>
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            {/* Resume Button */}
            <a
              href="/MatthewEnarle-Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-indigo-800 text-white px-6 py-2 rounded-full shadow-lg hover:bg-indigo-700 transition-all"
            >
              <FaDownload className="mr-2" />
              View Resume
            </a>

            {/* LinkedIn Button */}
            <a
              href="https://www.linkedin.com/in/matthew-enarle/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-blue-600 text-white px-6 py-2 rounded-full shadow-lg hover:bg-blue-500 transition-all"
            >
              <FaLinkedin className="mr-2" />
              LinkedIn Profile
            </a>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div
          className="image-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <div className="image-container w-80 h-80 flex justify-center items-center bg-gradient-to-br from-transparent to-[#9cd1f7] rounded-full shadow-lg overflow-hidden">
            <Image
              src="/imgs/Matt.png"
              alt="Matthew Enarle"
              width={300}
              height={300}
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HelloSection;
