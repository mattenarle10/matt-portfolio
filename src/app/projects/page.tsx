"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ProjectsPage = () => {
  const router = useRouter();

  const projects = [
    {
      title: "SHEA-A (School Health Emergency Alert - Application)",
      slug: "shea-a",
      date: "January 2025 - Ongoing",
      description: "Developed a Flutter-based mobile app for school health emergencies with Firebase Authentication and Firestore for Real-time Database, equipped with Google Maps API for location tracking.",
      image: "/imgs/Projects_SHEA_A.png",
    
    },
    {
      title: "Road Eye (AI-Driven Road Damage Detection)",
      slug: "roadeye",
      date: "December 2024",
      description: "Developed a machine learning system to detect road cracks using SSD models for automated analysis.",
      image: "/imgs/Projects_RoadEye.png",
    },
    {
      title: "Reserba",
      slug: "reserba",
      date: "October - December 2024",
      description: "A platform for food stall reservations with web, mobile, and admin interfaces using MySQL and Flutter.",
      image: "/imgs/Projects_Reserba.png",
    },
    {
      title: "Elderly Digital Steps",
      slug: "elderly-digital-steps",
      date: "October - December 2024",
      description: "A learning platform for elderly learners and tutors with booking and quiz features.",
      image: "/imgs/Projects_EDS.png",
    },
    {
      title: "NeuroWarn BCI (Thesis)",
      slug: "neurowarn-bci",
      date: "January - December 2024",
      description: "Enhanced safety in EEG-controlled wheelchairs using RNN for smart warning systems.",
      image: "/imgs/Projects_Neurowarn.png",
    },
    {
      title: "Off the Grid",
      slug: "off-the-grid",
      date: "April - July 2024",
      description: "Hike tracking app for mountaineers, leveraging Google Maps API and Firebase.",
      image: "/imgs/Projects_OTG.png",
    },
    {
      title: "Senyas",
      slug: "senyas",
      date: "March - May 2024",
      description: "Centralized disaster response system integrating sensors, Wi-Fi modules, and mobile app notifications.",
      image: "/imgs/Projects_Senyas.png",
    },
    {
      title: "EzPark",
      slug: "ezpark",
      date: "April - May 2023",
      description: "Developed a Flutter-based parking reservation app for the Lasalle area, utilizing Hive as the database.",
      image: "/imgs/Projects_Ezpark.png",
    },
    {
      title: "Dr. Rodolfo T. Blancia Infirmary",
      slug: "rodolfo-infirmary",
      date: "December 2022 - January 2023",
      description: "Designed a Google Sites website showcasing hospital information and services based in Kabankalan City.",
      image: "/imgs/Projects_Rodolfo.png",
    },
    {
      title: "Brgy. Mandalagan - Community Website",
      slug: "mandalagan-website",
      date: "March - July 2022",
      description: "Built a Google Sites-based community website integrated with Google My Maps for interactive features.",
      image: "/imgs/Projects_Mandalagan.png",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <motion.h1
        className="text-4xl font-bold text-indigo-700 mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Projects
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            onClick={() => router.push(`/projects/${project.slug}`)}
            className="relative flex flex-col items-center p-4 bg-neutral-100 rounded-lg shadow-lg cursor-pointer transition-transform hover:scale-105 hover:shadow-[0_0_20px_rgba(99,102,241,0.7)] group"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 blur-lg opacity-0 group-hover:opacity-50 transition-opacity"></div>
            <Image
              src={project.image}
              alt={project.title}
              width={200}
              height={200}
              className="rounded-lg mb-4 z-10 object-cover"
            />
            <div className="z-10 text-center">
              <h2 className="text-lg font-semibold text-indigo-600">{project.title}</h2>
              <p className="text-sm text-neutral-500">{project.date}</p>
              <p className="mt-2 text-neutral-700">{project.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
