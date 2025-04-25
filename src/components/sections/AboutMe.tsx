"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";


const AboutMe = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure animations only run client-side
  }, []);

  // If not client-side yet, return a placeholder to prevent hydration errors
  if (!isClient) {
    return (
      <section id="about" className="py-20 bg-white">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-6">About Me</h2>
        </div>
      </section>
    );
  }

  return (
    <section id="about" className="py-16 sm:py-20 bg-white">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-6">About Me </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          {/* Left side (Image) */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative w-full max-w-sm md:max-w-md shadow-lg overflow-hidden group border-4 border-white rounded-xl">
              <Image
                src="/imgs/Me-About.png"
                alt="Matthew Ariel A. Enarle"
                width={400}
                height={400}
                className="w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>

          {/* Right side (Text) */}
          <motion.div 
            className="text-gray-800 space-y-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
            >
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <span className="text-2xl mr-2">👋</span> Hi! I&apos;m <span className="font-semibold text-indigo-800">Matthew Ariel A. Enarle</span>, a Computer Science student specializing in Artificial Intelligence at West Visayas State University. With a deep passion for software development, mobile development, and machine learning, I aim to innovate and solve real-world problems.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0 mt-1">👨‍💻</span>
                  <p className="text-gray-700">
                    Proficient in <span className="font-semibold">Java, Dart, Python, JavaScript</span> and experienced with frameworks like <span className="font-semibold">NodeJS, NextJS, Flutter, MySQL, TensorFlow</span>. My focus is on <span className="font-semibold">Software Development, Mobile Development,</span> and <span className="font-semibold">AI</span>.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0 mt-1">💼</span>
                  <p className="text-gray-700">
                    As a <span className="font-semibold">Research Programmer</span> since May 2024, I&apos;ve been consulting on research projects at Sagay National High School. Additionally, as a <span className="font-semibold">Freelance Developer</span> since October 2022, I&apos;ve worked on web and mobile applications, including IoT solutions for various clients.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0 mt-1">🎓</span>
                  <p className="text-gray-700">
                    I&apos;m pursuing a <span className="font-semibold">BS in Computer Science</span> (AI major) at West Visayas State University with a projected GWA of <span className="font-semibold">1.33</span>. I graduated from <span className="font-semibold">Liceo de Lasalle</span> with High Honors in 2020.
                  </p>
                </div>
                
                <div className="flex items-start">
                  <span className="text-2xl mr-3 flex-shrink-0 mt-1">🏃‍♂️</span>
                  <div className="text-gray-700">
                    <p>Completed 3 marathons by age 21. Check out my progress on</p>
                    <a
                      href="https://www.strava.com/athletes/mattenarle"
                      className="inline-flex items-center text-indigo-600 hover:text-indigo-800 mt-1 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-1">🔗</span> Strava
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Call to Action */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="mt-8 flex justify-center md:justify-end"
            >
              <a
                href="/about"
                className="inline-flex items-center gap-2 bg-indigo-600 text-white py-3 px-8 rounded-full text-sm font-semibold hover:bg-indigo-700 transition-all duration-300 shadow-md hover:shadow-lg group"
              >
                <span>More About Me</span>
                <span className="text-lg group-hover:translate-x-1 transition-transform">👉</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
