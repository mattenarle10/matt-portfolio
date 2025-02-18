"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head"; // Import Head for title

const AboutPage = () => {
  const workExperiences = [
    {
      icon: "👨",
      company: "Software Engineer Trainee",
      dates: ["February 2025", "Present"],
      location: {
        name: "Spring Valley Tech Corp, Bago City",
        icon: "🇵🇭",
      },
    },
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

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { staggerChildren: 0.6 } },
  };

  return (
    <>
      <Head>
        <title>About | Matthew Enarle</title> {/* Set the title */}
      </Head>
      <motion.div
        className="mx-auto w-full max-w-7xl px-7 md:px-12 py-10"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Image Section */}
        <motion.div
          className="w-full max-w-xs mx-auto mb-10"
          variants={fadeInUp}
        >
          <Image
            src="/imgs/Matt.png" // Replace with your actual image path
            alt="Matthew Ariel A. Enarle"
            width={300}
            height={300}
            className="rounded-full shadow-xl"
          />
        </motion.div>

        {/* Name & Contact Info */}
        <motion.h1
          className="text-4xl font-extrabold text-indigo-700 mb-3"
          variants={fadeInUp}
        >
          Matthew Ariel A. Enarle
        </motion.h1>
        <motion.p
          className="text-sm text-neutral-600 mb-6"
          variants={fadeInUp}
        >
          Bacolod, Negros Occidental | 09773189440 |{" "}
          <a href="mailto:enarlem10@gmail.com" className="text-indigo-600">
            enarlem10@gmail.com
          </a>
        </motion.p>

        {/* Social Links */}
        <motion.div className="flex gap-6 mb-10" variants={fadeInUp}>
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
        </motion.div>

        {/* Skills Section */}
        <motion.div className="mb-8" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            SKILLS
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-sm text-neutral-700">
            {["Android Development (Java)", "Dart", "Python", "JavaScript", "C++", "NodeJS", "NextJS", "Flutter", "Firebase", "Tensorflow"].map(
              (skill) => (
                <motion.div
                  key={skill}
                  className="flex flex-col items-center bg-indigo-100 text-indigo-600 py-1 px-3 rounded-full shadow-md hover:scale-105 transition-transform"
                  whileHover={{ scale: 1.1 }}
                >
                  <span>{skill}</span>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div className="mb-8" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            EXPERIENCE
          </h2>
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
                    <p className="font-medium text-neutral-800">
                      {experience.company}
                    </p>
                    <span className="text-sm text-neutral-500">
                      {experience.dates.join(" - ")}
                    </span>
                    <p className="text-sm text-neutral-600">
                      {experience.location.icon} {experience.location.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div className="mb-6" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4">
            EDUCATION
          </h2>
          <div className="space-y-3 text-sm text-neutral-700">
            <div>🎓 West Visayas State University (2021 - Present)</div>
            <div>💚 University of St. Lasalle (2008 - 2020)</div>
            <div>📜 BS in Computer Science (Major in AI)</div>
            <div>🏆 GWA: 1.37 (Magna Cum Laude Expected)</div>
            <div>📚 Thesis: NeuroWarn BCI</div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default AboutPage;