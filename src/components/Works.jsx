import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";

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

  return (
    <section
      id="works"
      className="relative w-full max-w-7xl mx-auto px-6 py-24 min-h-[80vh] flex items-center justify-center"
    >
      <div className="w-full">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-futura font-bold neon-text-blue mb-4">My Works</h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            A selection of my recent projects, each crafted with a focus on interactivity, performance, and futuristic design.
          </p>
        </div>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass rounded-2xl border border-glass-border shadow-neon-blue/30 backdrop-blur-xl cursor-pointer group relative overflow-hidden flex flex-col h-full transition-all duration-300"
              onClick={() => setSelected(project)}
              whileHover={{ scale: 1.04, boxShadow: "0 0 32px #00D4FF, 0 0 64px #FF0080" }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative w-full h-52 overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <h3 className="text-lg font-futura font-bold neon-text-blue mb-2">{project.title}</h3>
                <p className="text-sm text-gray-300 mb-4 line-clamp-3">{project.description}</p>
                <div className="flex items-center gap-2 mt-auto">
                  {project.live !== "#" && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-neon-blue/10 text-neon-blue border border-neon-blue/30">
                      Live
                    </span>
                  )}
                </div>
              </div>
              <div className="absolute inset-0 pointer-events-none group-hover:shadow-neon-blue group-hover:shadow-lg transition-all duration-300" />
            </motion.div>
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
            <h3 className="text-xl neon-text-blue font-bold">{selected.title}</h3>
            <p className="text-gray-300 text-sm">{selected.description}</p>
            {selected.live !== "#" && (
              <a
                href={selected.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-gradient-to-r from-neon-blue to-neon-pink text-white text-sm font-medium px-4 py-2 rounded-full mt-4 shadow-neon-blue hover:shadow-neon-pink transition"
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
