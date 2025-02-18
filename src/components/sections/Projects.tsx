"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaDatabase, FaPhp, FaHtml5, FaCss3Alt, FaJava, FaAndroid, FaPython, FaMapMarkerAlt } from "react-icons/fa";
import { JSX } from "react";
import { SiFlutter, SiFirebase, SiTensorflow } from "react-icons/si";

const iconMapping: Record<string, JSX.Element> = {
  MySQL: <FaDatabase className="text-blue-500" />,
  PHP: <FaPhp className="text-indigo-600" />,
  Flutter: <SiFlutter className="text-blue-400" />,
  HTML: <FaHtml5 className="text-orange-500" />,
  CSS: <FaCss3Alt className="text-blue-500" />,
  RNN: <SiTensorflow className="text-orange-400" />,
  AI: <FaPython className="text-green-600" />,
  EEG: <FaAndroid className="text-green-500" />,
  "Google Maps API": <FaMapMarkerAlt className="text-red-500" />,
  Firebase: <SiFirebase className="text-yellow-500" />,
  Java: <FaJava className="text-red-500" />,
};

const Projects = () => {
  const projects = [
    {
      title: "Reserba",
      date: "Oct - Dec 2024",
      description: "Platform for food stall reservation and management.",
      image: "/imgs/Projects_Reserba.png",
      path: "/projects/reserba",
      technologies: ["MySQL", "PHP", "Flutter", "HTML", "CSS"],
    },
    {
      title: "Elderly Digital Steps",
      date: "Oct - Dec 2024",
      description: "Learning platform with booking, modules, and quizzes.",
      image: "/imgs/Projects_EDS.png",
      path: "/projects/elderly-digital-steps",
      technologies: ["MySQL", "PHP", "Flutter", "HTML", "CSS"],
    },
    {
      title: "NeuroWarn BCI (Thesis)",
      date: "Jan - Dec 2024",
      description: "AI-powered safety system for smart wheelchairs.",
      image: "/imgs/Projects_Neurowarn.png",
      path: "/projects/neurowarn-bci",
      technologies: ["RNN", "AI", "EEG"],
    },
    {
      title: "Off the Grid",
      date: "Apr - Jul 2024",
      description: "Hike tracking app for mountaineers in Negros Occidental.",
      image: "/imgs/Projects_OTG.png",
      path: "/projects/off-the-grid",
      technologies: ["Google Maps API", "Firebase", "Java"],
    },
  ];

  return (
    <section >
      <div className="max-w-screen-xl mx-auto px-6">
        <h2 className="text-5xl font-extrabold text-center mb-12 text-indigo-800 tracking-tight">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-lg shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative w-full">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={400}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <h3 className="text-3xl font-bold text-gray-800 group-hover:text-indigo-700 transition duration-300 mb-2">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-500 mb-2">{project.date}</p>
                <p className="text-sm text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <div key={techIndex} className="flex items-center gap-1 text-xs px-2 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                      {iconMapping[tech]} {tech}
                    </div>
                  ))}
                </div>
                <a
                  href={project.path}
                  className="inline-flex items-center text-indigo-700 hover:text-indigo-900 font-semibold text-sm"
                >
                  View Project <span className="ml-2 text-lg">→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
