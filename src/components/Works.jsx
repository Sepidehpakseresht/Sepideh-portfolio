import React, { useState } from "react";
import { motion } from "framer-motion";
import Modal from "./Modal";

const projects = [
  {
    title: "Techimmigrants Landing Page",
    image: "/immigrant.png",
    live: "https://tech-immigrants.vercel.app/",
    description:
      "A storytelling-based landing page for immigrant tech professionals. Clean, modern UI and smooth scroll.",
    preview: "/immigrant.png"
  },
  {
    title: "Creative Agency",
    image: "/agancy.png",
    live: "https://agencylandingpage-theta.vercel.app/",
    description:
      "A fictional agency site with responsive design, bold typography, and modern layout.",
    preview: "/agancy.png"
  },
  {
    title: "Sepi Portfolio",
    image: "/portfolio.png",
    live: "#",
    description:
      "My personal portfolio built with React, Tailwind CSS, and Framer Motion. Showcases my growth as a front-end developer.",
    preview: "/portfolio.png"
  },
];

export default function Works() {
  const [hovered, setHovered] = useState(null);
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="works"
      className="relative w-full max-w-7xl mx-auto px-6 py-24 min-h-[60vh] flex flex-col items-center"
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl font-display font-extrabold text-white mb-2">Works</h2>
        <div className="w-16 h-1 mx-auto bg-primary rounded-full mb-2" />
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A selection of my recent projects. Hover for a live preview.
        </p>
      </div>
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3 w-full">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="glass rounded-xl border-2 border-glass-border shadow-orange cursor-pointer group flex flex-col h-full transition-all duration-300 relative overflow-hidden"
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            onClick={() => setSelected(project)}
            whileHover={{ y: -8, boxShadow: "0 0 24px #F96902" }}
          >
            <div className="relative w-full h-48 overflow-hidden rounded-t-xl flex items-center justify-center bg-background">
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top transition"
                animate={hovered === index ? { scale: 1.08 } : { scale: 1 }}
                transition={{ duration: 0.5 }}
              />
              {/* Live preview overlay */}
              {hovered === index && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm"
                >
                  <img src={project.preview} alt="preview" className="w-3/4 h-3/4 object-contain rounded-lg border-2 border-primary shadow-orange" />
                </motion.div>
              )}
            </div>
            <div className="p-6 flex-1 flex flex-col justify-between">
              <h3 className="text-lg font-display font-bold text-white mb-2">{project.title}</h3>
              <p className="text-sm text-gray-300 mb-4 line-clamp-3">{project.description}</p>
              <div className="flex items-center gap-2 mt-auto">
                {project.live !== "#" && (
                  <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary border border-primary/30">
                    Live
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <Modal isOpen={selected !== null} onClose={() => setSelected(null)}>
        {selected && (
          <div className="space-y-4">
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-60 object-cover rounded-md"
            />
            <h3 className="text-xl text-primary font-bold">{selected.title}</h3>
            <p className="text-gray-300 text-sm">{selected.description}</p>
            {selected.live !== "#" && (
              <a
                href={selected.live}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-primary text-white text-sm font-medium px-4 py-2 rounded-full mt-4 shadow-orange hover:shadow-orange transition"
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
