"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head"; // Import Head for title

const AboutPage = () => {
  const workExperiences = [
    {
      icon: "👨‍💻",
      company: "Research Programmer & Consultant",
      dates: ["May 2024", "Present"],
      location: {
        name: "Sagay National High School, Negros Occidental",
        icon: "🇵🇭",
      },
    },
    {
      icon: "💼",
      company: "Freelance Software Developer",
      dates: ["October 2022", "Present"],
      location: {
        name: "Various clients (Remote)",
        icon: "🌍",
      },
    },
  ];

  return (
    <>
      <Head>
        <title>About | Matthew Enarle</title> {/* Set the title */}
      </Head>
      <div className="mx-auto w-full max-w-7xl px-7 md:px-12 py-10">
        {/* Image Section */}
        <div className="w-full max-w-xs mx-auto mb-10">
          <Image
            src="/imgs/Matt.png" // Replace with your actual image path
            alt="Matthew Ariel A. Enarle"
            width={300}
            height={300}
            className="rounded-full shadow-xl"
          />
        </div>

        {/* Name & Contact Info */}
        <motion.h1
          className="text-4xl font-extrabold text-indigo-700 mb-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Matthew Ariel A. Enarle
        </motion.h1>
        <p className="text-sm text-neutral-600 mb-6">
          Bacolod, Negros Occidental | 09773189440 |{" "}
          <a href="mailto:enarlem10@gmail.com" className="text-indigo-600">
            enarlem10@gmail.com
          </a>
        </p>

        {/* Social Links */}
        <div className="flex gap-6 mb-10">
          <motion.a
            href="https://linkedin.com/in/matthew-enarle"
            className="text-2xl text-indigo-600 hover:text-indigo-800"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:enarlem10@gmail.com"
            className="text-2xl text-indigo-600 hover:text-indigo-800"
            whileHover={{ scale: 1.1 }}
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            href="https://github.com/username"
            className="text-2xl text-indigo-600 hover:text-indigo-800"
            whileHover={{ scale: 1.1 }}
          >
            <FaGithub />
          </motion.a>
        </div>

        {/* Skills Section */}
        <div className="mb-8">
          <motion.h2
            className="text-2xl font-semibold text-indigo-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            SKILLS
          </motion.h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-sm text-neutral-700">
            <motion.div
              className="flex flex-col items-center bg-indigo-100 text-indigo-600 py-1 px-3 rounded-full shadow-md hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
            >
              <span>Android Development (Java)</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center bg-indigo-100 text-indigo-600 py-1 px-3 rounded-full shadow-md hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
            >
              <span>Dart</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center bg-indigo-100 text-indigo-600 py-1 px-3 rounded-full shadow-md hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
            >
              <span>Python</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center bg-indigo-100 text-indigo-600 py-1 px-3 rounded-full shadow-md hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
            >
              <span>JavaScript</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center bg-indigo-100 text-indigo-600 py-1 px-3 rounded-full shadow-md hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
            >
              <span>C++</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center bg-indigo-100 text-indigo-600 py-1 px-3 rounded-full shadow-md hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
            >
              <span>NodeJS</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center bg-indigo-100 text-indigo-600 py-1 px-3 rounded-full shadow-md hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
            >
              <span>NextJS</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center bg-indigo-100 text-indigo-600 py-1 px-3 rounded-full shadow-md hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
            >
              <span>Flutter</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center bg-indigo-100 text-indigo-600 py-1 px-3 rounded-full shadow-md hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
            >
              <span>Firebase</span>
            </motion.div>
            <motion.div
              className="flex flex-col items-center bg-indigo-100 text-indigo-600 py-1 px-3 rounded-full shadow-md hover:scale-105 transition-transform"
              whileHover={{ scale: 1.1 }}
            >
              <span>Tensorflow</span>
            </motion.div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mb-8">
          <motion.h2
            className="text-2xl font-semibold text-indigo-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            EXPERIENCE
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {workExperiences.map((experience) => (
              <motion.div
                key={experience.company}
                className="p-4 bg-neutral-100 rounded-lg shadow-lg hover:scale-105 transition-all"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-4">
                  <div className="text-3xl">{experience.icon}</div>
                  <div>
                    <p className="font-medium text-neutral-800">{experience.company}</p>
                    <span className="text-sm text-neutral-500">{experience.dates.join(" - ")}</span>
                    <p className="text-sm text-neutral-600">{experience.location.icon} {experience.location.name}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div className="mb-8">
          <motion.h2
            className="text-2xl font-semibold text-indigo-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            PROJECTS & ORGANIZATIONS
          </motion.h2>
          <div className="space-y-3 text-sm text-neutral-700">
            <div className="flex items-center gap-x-2">
              <span>🛠️</span> Road Eye (AI-Driven Road Damage Detection) - December 2024
            </div>
            <div className="flex items-center gap-x-2">
              <span>🛠️</span> Reserba - October - December 2024
            </div>
            <div className="flex items-center gap-x-2">
              <span>🛠️</span> Elderly Digital Steps - October - December 2024
            </div>
            <div className="flex items-center gap-x-2">
              <span>🛠️</span> NeuroWarn BCI (Thesis) - January - December 2024
            </div>
            <div className="flex items-center gap-x-2">
              <span>🛠️</span> Off the Grid - April - July 2024
            </div>
            <div className="flex items-center gap-x-2">
              <span>🛠️</span> Senyas - March - May 2024
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-6">
          <motion.h2
            className="text-2xl font-semibold text-indigo-600 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            EDUCATION
          </motion.h2>
          <div className="space-y-3 text-sm text-neutral-700">
            <div>🎓 West Visayas State University (2021 - Present)</div>
            <div>📜 BS in Computer Science (Major in AI)</div>
            <div>🏆 GWA: 1.33 (Magna Cum Laude Expected)</div>
            <div>📚 Thesis: NeuroWarn BCI</div>
          </div>
        </div>

        {/* Space below the thesis section */}
        <div className="mb-10" />
      </div>
    </>
  );
};

export default AboutPage;
