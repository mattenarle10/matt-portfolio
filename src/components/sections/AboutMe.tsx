"use client";

import Image from "next/image";
import { FaRunning, FaLink, FaArrowRight } from "react-icons/fa"; // Icons for marathon, link, LinkedIn, and email

const AboutMe = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Left side (Image) */}
        <div className="flex justify-center items-center animate__animated animate__fadeIn animate__delay-1s">
          <div className="w-72 h-72 md:w-96 md:h-96 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-500">
            <Image
              src="/imgs/me.jpg" // Your image path here
              alt="Matthew Ariel A. Enarle"
              width={384}
              height={384}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right side (Text) */}
        <div className="text-gray-800">
          <h2 className="text-4xl font-extrabold text-indigo-800 mb-6 animate__animated animate__fadeIn animate__delay-1s">About Me</h2>
          <p className="text-sm mb-4 animate__animated animate__fadeIn animate__delay-2s">
            Hi! I’m Matthew Ariel A. Enarle, a Computer Science student specializing in Artificial Intelligence at West Visayas State University. With a deep passion for software development, mobile development, and machine learning, I aim to innovate and solve real-world problems.
          </p>

          <div className="space-y-6">
            {/* Skills */}
            <div className="animate__animated animate__fadeIn animate__delay-3s">
              <p className="text-sm">
                <span className="mr-2">💻</span> Proficient in <strong>Java, Dart, Python, JavaScript</strong> and experienced with frameworks like <strong>NodeJS, NextJS, Flutter, MySQL, TensorFlow</strong>. My focus is on <strong>Software Development, Mobile Development,</strong> and <strong>AI</strong>.
              </p>
            </div>

            {/* Experience */}
            <div className="animate__animated animate__fadeIn animate__delay-4s">
              <p className="text-sm">
                <span className="mr-2">👨‍💻</span> As a <strong>Research Programmer</strong> since May 2024, I’ve been consulting on research projects at Sagay National High School. Additionally, as a <strong>Freelance Developer</strong> since October 2022, I’ve worked on web and mobile applications, including IoT solutions for various clients.
              </p>
            </div>

            {/* Education */}
            <div className="animate__animated animate__fadeIn animate__delay-5s">
              <p className="text-sm">
                <span className="mr-2">🎓</span> I’m pursuing a <strong>BS in Computer Science</strong> (AI major) at West Visayas State University with a projected GWA of <strong>1.33</strong>. I graduated from <strong>Liceo de Lasalle</strong> with High Honors in 2020.
              </p>
            </div>

        {/* Achievements */}
<div className="animate__animated animate__fadeIn animate__delay-6s">
  <div className="flex items-center space-x-2">
    <FaRunning className="text-indigo-600" />
    <p className="text-sm">
      <span className="mr-2">🏅</span> Completed 3 marathons by age 21. Check out my progress on 
      <a
        href="https://www.strava.com/athletes/mattenarle"
        className="text-indigo-600 flex items-center"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLink className="mr-1" /> Strava
      </a>.
    </p>
  </div>
</div>


          
           {/* Call to Action */}
<div className="mt-6 flex justify-end">
  <a
    href="/about"
    className="inline-block border-2 border-indigo-600 text-indigo-600 py-3 px-8 rounded-lg text-sm font-semibold hover:bg-indigo-600 hover:text-white transition-all duration-300 flex items-center space-x-2"
  >
    <span>More About Me</span>
    <FaArrowRight className="text-lg" />
  </a>
</div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
