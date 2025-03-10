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
    <div className="max-w-6xl mx-auto px-4 pt-24 pb-16">
      <motion.h1
        className="text-3xl font-bold text-indigo-700 mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Projects
      </motion.h1>
      
      <motion.div 
        className="mb-8 max-w-2xl mx-auto text-center text-neutral-600 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Explore my recent work and projects. Each project represents a unique challenge and solution.
      </motion.div>

      <motion.div 
        className="space-y-4"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        initial="hidden"
        animate="show"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            onClick={() => router.push(`/projects/${project.slug}`)}
            className="relative flex flex-col md:flex-row items-center p-4 bg-white rounded-lg shadow-md cursor-pointer border border-neutral-200 group overflow-hidden hover:border-indigo-300"
            variants={{
              hidden: { opacity: 0, x: -20 },
              show: { opacity: 1, x: 0 }
            }}
            whileHover={{ 
              scale: 1.02, 
              boxShadow: '0 10px 25px -5px rgba(99, 102, 241, 0.1), 0 8px 10px -6px rgba(99, 102, 241, 0.1)' 
            }}
            whileTap={{ scale: 0.98 }}
          >
            {/* Left side - Image with overlay */}
            <div className="relative w-full md:w-1/4 md:mr-4 mb-3 md:mb-0 overflow-hidden rounded-md flex-shrink-0">
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/0 to-indigo-600/0 group-hover:from-indigo-600/10 group-hover:to-indigo-600/20 transition-colors duration-300 z-10"></div>
              <Image
                src={project.image}
                alt={project.title}
                width={200}
                height={150}
                className="w-full h-32 object-cover object-center rounded-md transition-all duration-500 group-hover:scale-110"
              />
            </div>
            
            {/* Right side - Content */}
            <div className="w-full md:w-3/4 flex flex-col">
              <div className="flex justify-between items-start">
                <motion.h2 
                  className="text-lg font-semibold text-indigo-700 group-hover:text-indigo-800 transition-colors"
                  whileHover={{ x: 3 }}
                >
                  {project.title}
                </motion.h2>
                <span className="text-xs px-2 py-1 bg-indigo-50 text-indigo-600 rounded-full">{project.date}</span>
              </div>
              <p className="text-neutral-600 text-xs mt-1 line-clamp-2">{project.description}</p>
              
              {/* View Details button */}
              <div className="mt-2 self-end">
                <motion.span 
                  className="text-xs font-medium text-indigo-600 flex items-center group-hover:text-indigo-800 transition-colors"
                  whileHover={{ x: 3 }}
                >
                  View Details
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.span>
              </div>
            </div>
            
            {/* Card edge accent */}
            <div className="absolute left-0 top-0 h-full w-1 bg-indigo-100 group-hover:bg-indigo-500 transition-colors duration-300"></div>
          </motion.div>
        ))}
      </motion.div>
      
      {/* Floating action button */}
      <motion.div 
        className="fixed bottom-8 right-8 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <motion.button 
          className="bg-indigo-600 text-white p-3 rounded-full shadow-lg flex items-center justify-center"
          whileHover={{ scale: 1.1, backgroundColor: "#4338ca" }}
          whileTap={{ scale: 0.9 }}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </motion.button>
      </motion.div>
    </div>
  );
};

export default ProjectsPage;
