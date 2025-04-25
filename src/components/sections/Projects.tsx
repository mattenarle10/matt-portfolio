"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaDatabase, FaPhp, FaHtml5, FaCss3Alt, FaJava, FaAndroid, FaPython, FaMapMarkerAlt, FaArrowRight, FaReact, FaAws, FaCube } from "react-icons/fa";
import { JSX } from "react";
import { SiFlutter, SiFirebase, SiTensorflow } from "react-icons/si";

type TechKey = 'MySQL' | 'PHP' | 'Flutter' | 'HTML' | 'CSS' | 'RNN' | 'AI' | 'EEG' | 'Google Maps API' | 'Firebase' | 'Java' | 'Next.js' | 'AWS Amplify' | 'S3' | 'DynamoDB' | 'Three.js';

const iconMapping: Record<TechKey, JSX.Element> = {
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
  "Next.js": <FaReact className="text-black" />,
  "AWS Amplify": <FaAws className="text-orange-600" />,
  "S3": <FaAws className="text-yellow-700" />,
  "DynamoDB": <FaDatabase className="text-blue-700" />,
  "Three.js": <FaCube className="text-gray-800" />,
};

const Projects = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); // Ensure animations only run client-side
  }, []);

  interface Project {
    title: string;
    date: string;
    description: string;
    image: string;
    path: string;
    technologies: TechKey[];
  }

  const projects: Project[] = [
    {
      title: "Anik.3D",
      date: "Apr 2025",
      description:
        "A Cloud-Native App that serves as an ecommerce platform for purchasing high-quality 3D Aniks.",
      image: "/imgs/Projects_Anik.png",
      path: "/projects/anik3d",
      technologies: ["Next.js", "AWS Amplify", "S3", "DynamoDB", "Three.js"] as TechKey[],
    },
    {
      title: "Reserba",
      date: "Oct - Dec 2024",
      description: "Platform for food stall reservation and management.",
      image: "/imgs/Projects_Reserba.png",
      path: "/projects/reserba",
      technologies: ["MySQL", "PHP", "Flutter", "HTML", "CSS"] as TechKey[],
    },

    {
      title: "NeuroWarn BCI (Thesis)",
      date: "Jan - Dec 2024",
      description: "AI-powered safety system for smart wheelchairs.",
      image: "/imgs/Projects_Neurowarn.png",
      path: "/projects/neurowarn-bci",
      technologies: ["RNN", "AI", "EEG"] as TechKey[],
    },
    {
      title: "Off the Grid",
      date: "Apr - Jul 2024",
      description: "Hike tracking app for mountaineers in Negros Occidental.",
      image: "/imgs/Projects_OTG.png",
      path: "/projects/off-the-grid",
      technologies: ["Google Maps API", "Firebase", "Java"] as TechKey[],
    },
 
  ];

  // If not client-side yet, return a placeholder to prevent hydration errors
  if (!isClient) {
    return (
      <section id="projects" className="py-20">
        <div className="max-w-screen-xl mx-auto px-6">
          <h2 className="text-5xl font-extrabold text-center mb-12 text-indigo-800 tracking-tight">
            Featured Projects
          </h2>
        </div>
      </section>
    );
  }

  return (
    <section id="projects" className="py-20  w-full">
      <div className="max-w-screen-xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="text-5xl font-extrabold text-center mb-4 text-indigo-800 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-indigo-600 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Here are some of the projects I&apos;ve worked on recently. Each represents my passion for creating
            meaningful and user-friendly applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={700}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-700 transition duration-300">
                    {project.title}
                  </h3>
                  <span className="text-sm font-medium px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">
                    {project.date}
                  </span>
                </div>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.technologies.map((tech, techIndex) => (
                    <div 
                      key={techIndex} 
                      className="flex items-center gap-1 text-xs px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full hover:bg-indigo-100 hover:text-indigo-700 transition-colors duration-200"
                    >
                      {iconMapping[tech]} {tech}
                    </div>
                  ))}
                </div>
                <div className="pt-2 border-t border-gray-100">
                  <Link
                    href={project.path}
                    className="inline-flex items-center text-indigo-700 hover:text-indigo-900 font-semibold text-sm group/link"
                    prefetch={false}
                  >
                    View Project Details
                    <FaArrowRight className="ml-2 transform group-hover/link:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <Link 
            href="/projects" 
            className="inline-block px-8 py-3 bg-indigo-700 text-white font-medium rounded-full hover:bg-indigo-800 transition-colors duration-300 shadow-md hover:shadow-lg"
            prefetch={false}
          >
            View All Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
