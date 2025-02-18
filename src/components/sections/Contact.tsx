"use client";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"; // Import icons for GitHub, LinkedIn, Instagram

const Contact = () => {
 

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Animated Background */}
      <canvas id="particles-canvas" className="absolute inset-0 z-0"></canvas>

      {/* Main Content */}
      <div className="relative z-10 max-w-screen-xl mx-auto px-6 text-center text-gray-800">
        <p className="text-3xl md:text-5xl font-extrabold text-indigo-800 mb-6 animate__animated animate__fadeIn animate__delay-2s">
          Let’s Work Together!
        </p>
        <p className="text-lg md:text-xl mb-8 animate__animated animate__fadeIn animate__delay-3s">
          I’m always open to new opportunities and collaborations. Feel free to reach out!
        </p>

        {/* Social Links */}
        <div className="flex justify-center space-x-8 animate__animated animate__fadeIn animate__delay-4s">
          <a
            href="https://github.com/mattenarle10"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 transition duration-300"
          >
            <FaGithub className="text-4xl md:text-5xl" />
          </a>
          <a
            href="https://www.linkedin.com/in/matthew-enarle/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 transition duration-300"
          >
            <FaLinkedin className="text-4xl md:text-5xl" />
          </a>
          <a
            href="https://www.instagram.com/mattenarle"
            target="_blank"
            rel="noopener noreferrer"
            className="text-indigo-600 hover:text-indigo-800 transition duration-300"
          >
            <FaInstagram className="text-4xl md:text-5xl" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
