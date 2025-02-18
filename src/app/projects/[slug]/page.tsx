"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaGithub, FaLink, FaArrowLeft } from "react-icons/fa"; // Import icons
import Image from "next/image"; // Import Image from next/image

// Define the type for a project
interface Project {
  title: string;
  slug: string;
  date: string;
  description: string;
  image: string;
  github?: string | string[];
  demo?: string;
  pdf?: string;
}

// Assuming you have an array of projects
const projectData: Project[] = [
  {
    title: "SHEA-A (School Health Emergency Alert - Application)",
    slug: "shea-a",
    date: "January 2025 - Ongoing",
    description: "Developed a Flutter-based mobile app for school health emergencies with Firebase Authentication and Firestore for Real-time Database, equipped with Google Maps API for location tracking.",
    image: "/imgs/Projects_SHEA_A.png",
    github: "https://github.com/mattenarle10/SHEA-A",
  
  },
  {
    title: "Road Eye (AI-Driven Road Damage Detection)",
    slug: "roadeye",
    date: "December 2024",
    description: "Developed a machine learning system to detect road cracks using SSD models for automated analysis.",
    image: "/imgs/Projects_RoadEye.png",
    github: "https://github.com/mattenarle10/roadeye",
    demo: "https://colab.research.google.com/drive/1zdKmjmkxz1W3QuRaQCJV5rVl1WHJbVD2",
    pdf: "/roadeye.pdf", // PDF link for Road Eye project
  },
  {
    title: "Reserba",
    slug: "reserba",
    date: "October - December 2024",
    description: "A platform for food stall reservations with web, mobile, and admin interfaces using MySQL and Flutter.",
    image: "/imgs/Projects_Reserba.png",
    github: [
        "https://github.com/mattenarle10/reserba-web",
        "https://github.com/mattenarle10/reserba-mobile"
      ],
  },
  {
    title: "Elderly Digital Steps",
    slug: "elderly-digital-steps",
    date: "October - December 2024",
    description: "A learning platform for elderly learners and tutors with booking and quiz features.",
    image: "/imgs/Projects_EDS.png",
    github: [
        "https://github.com/mattenarle10/eds-admin",
        "https://github.com/mattenarle10/eds-mobile"
      ],
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
    github: "https://github.com/mattenarle10/offthegrid",
  },
  {
    title: "Senyas",
    slug: "senyas",
    date: "March - May 2024",
    description: "Centralized disaster response system integrating sensors, Wi-Fi modules, and mobile app notifications.",
    image: "/imgs/Projects_Senyas.png",
    github: "https://github.com/mattenarle10/senyas",
   
  },
  {
    title: "EzPark",
    slug: "ezpark",
    date: "April - May 2023",
    description: "Developed a Flutter-based parking reservation app for the Lasalle area, utilizing Hive as the database.",
    image: "/imgs/Projects_Ezpark.png",
    github: "https://github.com/mattenarle10/EzPark",
  },
  {
    title: "Dr. Rodolfo T. Blancia Infirmary",
    slug: "rodolfo-infirmary",
    date: "December 2022 - January 2023",
    description: "Designed a Google Sites website showcasing hospital information and services based in Kabankalan City.",
    image: "/imgs/Projects_Rodolfo.png",
    demo: "https://sites.google.com/view/drrodolfotblanciainfirmary/home",
  },
  {
    title: "Brgy. Mandalagan - Community Website",
    slug: "mandalagan-website",
    date: "March - July 2022",
    description: "Built a Google Sites-based community website integrated with Google My Maps for interactive features.",
    image: "/imgs/Projects_Mandalagan.png",
    demo: " https://sites.google.com/view/brgymandalaganmdrc/home",
  },
];

const ProjectPage = ({ params }: { params: Promise<{ slug: string }> }) => {
    const router = useRouter();
    const [slug, setSlug] = useState<string | undefined>(undefined);
    const [project, setProject] = useState<Project | null>(null);
  
    useEffect(() => {
      // Unwrap params using React.use() here
      const fetchParams = async () => {
        const resolvedParams = await params; // Wait for the Promise to resolve
        const { slug } = resolvedParams;
        setSlug(slug);
      };
  
      fetchParams();
    }, [params]);
  
    useEffect(() => {
      if (slug) {
        // Find the project by slug
        const currentProject = projectData.find((p) => p.slug === slug);
        setProject(currentProject || null); // If project not found, set null
      }
    }, [slug]);
  
    // Handle loading or missing project
    if (!slug) {
      return <p>Loading...</p>;
    }
    if (!project) {
      return <p>Project not found.</p>;
    }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back to Projects Button */}
      <button
        onClick={() => router.push('/projects')}
        className="text-white bg-transparent border-2 border-indigo-600 rounded-full hover:bg-indigo-600 hover:text-white mb-8 flex items-center justify-center w-16 h-16" // Increased space and button size
      >
        <FaArrowLeft className="text-indigo-600 text-4xl" />
      </button>

      {/* Project Title */}
      <h1 className="text-5xl font-bold text-indigo-700 mb-4">{project.title}</h1>

      {/* Project Date */}
      <p className="text-neutral-500 mb-6">{project.date}</p>

      {/* Links Section (GitHub, Demo, PDF) */}
      <div className="flex space-x-6 mb-6">
      {project.github && Array.isArray(project.github) ? (
  project.github.map((link, index) => (
    <a
      key={index}
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-indigo-600 hover:text-indigo-800"
    >
      <FaGithub className="mr-2" />
      GitHub {index + 1}
    </a>
  ))
) : (
  project.github && (
    <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center text-indigo-600 hover:text-indigo-800"
    >
      <FaGithub className="mr-2" />
      GitHub
    </a>
  )
)}

        {project.demo && (
          <a href={project.demo} target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 hover:text-indigo-800">
            <FaLink className="mr-2" />
            Demo
          </a>
        )}
        {project.pdf && (
          <a href={project.pdf} target="_blank" rel="noopener noreferrer" className="flex items-center text-indigo-600 hover:text-indigo-800">
            <FaLink className="mr-2" />
            PDF
          </a>
        )}
      </div>

      <Image
        src={project.image}
        alt={project.title}
        width={384} // Adjust width as needed
        height={256} // Adjust height as needed
        className="w-96 mx-auto rounded-lg shadow-lg mb-8"
      />
      

      {/* Description Section */}
      <section className="mt-12 mb-16"> {/* Adjusted margin-top and margin-bottom */}
        <h2 className="text-3xl font-semibold text-indigo-700 mb-6">Description</h2> {/* Added bottom margin to header */}
        <p className="text-neutral-700">{project.description}</p>
      </section>
    </div>
  );
};

export default ProjectPage;
