"use client";

import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head"; // Import Head for title

const AboutPage = () => {
  const workExperiences = [
    {
      icon: "☁️",
      company: "AWS Cloud Trainee",
      dates: ["April 2025", "Present"],
      location: {
        name: "eCloudvalley Philippines, Remote",
        icon: "🇵🇭",
      },
    },
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
        className="mx-auto w-full max-w-7xl px-7 md:px-12 pt-24 pb-16 sm:pt-28 sm:pb-20"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Image Section */}
        <motion.div
          className="w-full max-w-xs mx-auto mb-10"
          variants={fadeInUp}
        >
          <div className="relative w-64 h-64 mx-auto rounded-full shadow-xl overflow-hidden border-4 border-white">
            <Image
              src="/imgs/Matt.png"
              alt="Matthew Ariel A. Enarle"
              width={256}
              height={256}
              className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Name & Contact Info */}
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold text-indigo-700 mb-3 text-center"
          variants={fadeInUp}
        >
          Matthew Ariel A. Enarle
        </motion.h1>
        <motion.p
          className="text-sm md:text-base text-neutral-600 mb-6 text-center"
          variants={fadeInUp}
        >
          Bacolod, Negros Occidental | 09773189440 |{" "}
          <a href="mailto:enarlem10@gmail.com" className="text-indigo-600">
            enarlem10@gmail.com
          </a>
        </motion.p>

        {/* Social Links */}
        <motion.div className="flex justify-center gap-8 mb-12" variants={fadeInUp}>
          <motion.a
            href="https://linkedin.com/in/matthew-enarle"
            className="text-2xl md:text-3xl text-indigo-600 hover:text-indigo-800 p-2 hover:bg-indigo-100 rounded-full transition-all"
            whileHover={{ scale: 1.1 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="mailto:enarlem10@gmail.com"
            className="text-2xl md:text-3xl text-indigo-600 hover:text-indigo-800 p-2 hover:bg-indigo-100 rounded-full transition-all"
            whileHover={{ scale: 1.1 }}
          >
            <FaEnvelope />
          </motion.a>
          <motion.a
            href="https://github.com/mattenarle10"
            className="text-2xl md:text-3xl text-indigo-600 hover:text-indigo-800 p-2 hover:bg-indigo-100 rounded-full transition-all"
            whileHover={{ scale: 1.1 }}
          >
            <FaGithub />
          </motion.a>
        </motion.div>

        {/* Skills Section */}
        <motion.div className="mb-10" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4 text-center">
            SKILLS
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 text-sm text-neutral-700">
            {["Android Development (Java)", "Dart", "Python", "JavaScript", "C++", "ReactJS", "NextJS", "Flutter", "Firebase", "Tensorflow", "AWS", "Serverless"].map(
              (skill) => (
                <motion.div
                  key={skill}
                  className="flex flex-col items-center bg-indigo-50 text-indigo-600 py-2 px-4 rounded-full shadow-sm border border-indigo-100 hover:bg-indigo-100 hover:scale-105 transition-all"
                  whileHover={{ scale: 1.1 }}
                >
                  <span>{skill}</span>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Experience Section */}
        <motion.div className="mb-10" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4 text-center">
            EXPERIENCE
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {workExperiences.map((experience) => (
              <motion.div
                key={experience.company}
                className="p-5 bg-neutral-50 rounded-lg shadow-md border border-neutral-100 hover:shadow-lg hover:scale-105 transition-all"
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
                    <p className="text-sm font-bold text-neutral-500">
                      {experience.location.icon} {experience.location.name}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div className="mb-10" variants={fadeInUp}>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-4 text-center">
            EDUCATION
          </h2>
          <div className="space-y-4 text-sm md:text-base text-neutral-700 bg-neutral-50 p-5 rounded-xl shadow-sm border border-neutral-100">
            <div className="flex items-center gap-3"><span className="text-xl">🎓</span> <span className="font-medium">West Visayas State University</span> (2021 - Present)</div>
            <div className="flex items-center gap-3"><span className="text-xl">💚</span> <span className="font-medium">University of St. Lasalle</span> (2008 - 2020)</div>
            <div className="flex items-center gap-3"><span className="text-xl">📜</span> <span className="font-medium">BS in Computer Science</span> (Major in AI)</div>
            <div className="flex items-center gap-3"><span className="text-xl">🏆</span> <span className="font-medium">GWA: 1.34</span> (Magna Cum Laude Expected)</div>
            <div className="flex items-center gap-3"><span className="text-xl">📚</span> <span className="font-medium">Thesis:</span> NeuroWarn BCI</div>
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default AboutPage;