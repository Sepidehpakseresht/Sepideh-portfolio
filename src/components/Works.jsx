import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import Modal from "./Modal";
import RotatingSkillCircle from "./RotatingSkillCircle";
import { sectionCircleData } from "../data/sectionData"; 
const projects = [
  {
    title: "Techimmigrants Landing Page",
    image: "/immigrant.png",
    live: "https://tech-immigrants.vercel.app/",
    description:
      "A storytelling-based landing page that introduces immigrant tech professionals. Designed with a clean, dark-futuristic UI and smooth scroll experience.",
  },
  {
    title: "Creative Agency",
    image: "/agancy.png",
    live: "https://agencylandingpage-theta.vercel.app/",
    description:
      "A fictional agency website built with responsive design, animations, and a modern aesthetic. Focused on typography and layout precision.",
  },
  {
    title: "Sepi Portfolio",
    image: "/portfolio.png",
    live: "#", 
    description:
      "My personal portfolio built with React, Tailwind CSS, and Framer Motion. Represents my growth as a front-end developer with a tree metaphor.",
  },
];

export default function Works() {
  const [selected, setSelected] = useState(null);
  const worksData = sectionCircleData.works;

  return (
    <section
      id="works"
      className="relative min-h-screen px-6 py-24 text-white bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
    >
      {/* Rotating Skills Circle for Works section */}
      <div className="hidden lg:block">
        <RotatingSkillCircle
          skills={worksData.skills}
          title={worksData.title}
          size="medium"
          position="left"
          autoRotate={true}
          rotationSpeed={25}
        />
      </div>
      
      <div className="max-w-6xl mx-auto text-center relative z-10">
        <h2 className="text-4xl font-bold glow-text mb-12">My Works</h2>
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 justify-center">
          {projects.map((project, index) => (
          <Motion.div
            key={index}
            className={`cursor-pointer group relative overflow-hidden rounded-lg border border-cyan-600 shadow-lg hover-lift modern-card
              ${index === 2 ? 'sm:col-span-2 sm:mx-auto sm:w-[80%] lg:col-span-1 lg:w-auto' : ''}
            `}
            onClick={() => setSelected(project)}
            whileHover={{ scale: 1.03, rotateY: 5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover opacity-90 group-hover:opacity-100 transition"
            />
            <div className="p-4 text-left">
              <h3 className="text-lg font-semibold text-cyan-400">{project.title}</h3>
              <p className="text-sm text-white/70 mt-1 line-clamp-2">
                {project.description}
              </p>
            </div>
          </Motion.div>
        ))}
        </div>
      </div>

      <Modal isOpen={selected !== null} onClose={() => setSelected(null)}>
        {selected && (
          <div className="space-y-4">
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-60 object-cover rounded-md"
            />
            <h3 className="text-xl text-cyan-400 font-bold">{selected.title}</h3>
            <p className="text-white/80 text-sm">{selected.description}</p>
            {selected.live !== "#" && (
              <a
                href={selected.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-cyan-600 hover:bg-cyan-500 text-white text-sm font-medium px-4 py-2 rounded mt-4 transition"
              >
                🔗 View Live
              </a>
            )}
          </div>
        )}
      </Modal>
    </section>
  );
}
