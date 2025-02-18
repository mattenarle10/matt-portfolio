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
    <section className="flex justify-center items-center mt-0 bg-white py-8 sm:py-16">
      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-screen-xl mx-auto px-4 space-y-8 sm:space-y-0 sm:space-x-8">
        {/* Left Section */}
        <motion.div
          className="text-section max-w-xl"
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
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
              href="/Resume_Enarle,Matthew.pdf"
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
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: "loop",
          }}
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
    </section>
  );
};

export default HelloSection;
