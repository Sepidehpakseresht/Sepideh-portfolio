import React, { useState } from "react";
import { motion as Motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaCode } from "react-icons/fa";
import Modal from "./Modal"; 

const projects = [
  {
    title: "Tech Immigrants Landing Page",
    image: "/immigrant.png",
    live: "https://tech-immigrants.vercel.app/",
    github: "#",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Responsive Design"],
    description: "A compelling storytelling-based landing page designed to showcase immigrant tech professionals and their journeys. Features a clean, dark-futuristic UI with smooth scroll animations and immersive user experience.",
    highlights: ["Storytelling Design", "Dark Theme UI", "Smooth Animations", "Mobile-First Approach"]
  },
  {
    title: "Creative Agency Website",
    image: "/agancy.png",
    live: "https://agencylandingpage-theta.vercel.app/",
    github: "#",
    technologies: ["React", "CSS3", "JavaScript", "Responsive Design"],
    description: "A modern agency website showcasing creative services with emphasis on typography and layout precision. Built with responsive design principles and engaging micro-interactions.",
    highlights: ["Modern Typography", "Creative Layouts", "Micro-interactions", "Performance Optimized"]
  },
  {
    title: "Personal Portfolio",
    image: "/portfolio.png",
    live: "#", 
    github: "https://github.com/Sepidehpakseresht/Sepi-Portfolio",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vite"],
    description: "My personal portfolio featuring a unique tree-growth metaphor representing my development journey. Showcases technical skills, projects, and professional growth with beautiful animations.",
    highlights: ["Tree Growth Animation", "Interactive Design", "Performance First", "Modern Stack"]
  },
  {
    title: "E-Commerce Dashboard",
    image: "/portfolio.png", // Placeholder - you can add a real image later
    live: "#",
    github: "#",
    technologies: ["React", "TypeScript", "Chart.js", "Tailwind CSS"],
    description: "A comprehensive dashboard for e-commerce management featuring analytics, inventory tracking, and user management. Built with modern React patterns and TypeScript for type safety.",
    highlights: ["Data Visualization", "TypeScript", "Real-time Updates", "Admin Panel"],
    isPlaceholder: true
  }
];

export default function Works() {
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section
      id="works"
      className="min-h-screen px-6 py-24 text-white bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <Motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold glow-text mb-4">My Works</h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-8">
            A collection of projects that showcase my journey from concept to creation, 
            each telling a story of growth and technical excellence.
          </p>
          
          {/* Filter buttons */}
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'frontend', 'fullstack', 'design'].map((filterType) => (
              <Motion.button
                key={filterType}
                onClick={() => setFilter(filterType)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                  filter === filterType
                    ? 'bg-cyan-500 border-cyan-500 text-white'
                    : 'border-cyan-500/50 text-cyan-400 hover:border-cyan-500 hover:text-white'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
              </Motion.button>
            ))}
          </div>
        </Motion.div>

        {/* Projects Grid */}
        <Motion.div 
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project, index) => (
            <Motion.div
              key={index}
              className="group relative overflow-hidden rounded-xl border border-cyan-600/30 shadow-2xl bg-gray-800/50 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-500"
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-60" />
                
                {/* Overlay buttons */}
                <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {project.live !== "#" && (
                    <Motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-cyan-500 text-white rounded-full hover:bg-cyan-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaExternalLinkAlt className="w-4 h-4" />
                    </Motion.a>
                  )}
                  {project.github !== "#" && (
                    <Motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <FaGithub className="w-4 h-4" />
                    </Motion.a>
                  )}
                </div>

                {project.isPlaceholder && (
                  <div className="absolute top-4 left-4">
                    <span className="px-2 py-1 bg-purple-500/80 text-white text-xs rounded-full">
                      Coming Soon
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-cyan-400 mb-2 group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-gray-700/50 text-cyan-300 text-xs rounded-full border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-gray-400 text-xs">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>

                {/* View Details Button */}
                <Motion.button
                  onClick={() => setSelected(project)}
                  className="w-full py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/50 text-cyan-400 rounded-lg hover:from-cyan-500/30 hover:to-purple-500/30 hover:border-cyan-400 transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaCode className="w-4 h-4" />
                  View Details
                </Motion.button>
              </div>
            </Motion.div>
          ))}
        </Motion.div>
      </div>

      {/* Enhanced Modal */}
      <Modal isOpen={selected !== null} onClose={() => setSelected(null)}>
        {selected && (
          <div className="space-y-6">
            <img
              src={selected.image}
              alt={selected.title}
              className="w-full h-64 object-cover rounded-lg"
            />
            
            <div className="flex items-start justify-between">
              <h3 className="text-2xl text-cyan-400 font-bold">{selected.title}</h3>
              <div className="flex gap-3">
                {selected.live !== "#" && (
                  <Motion.a
                    href={selected.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-cyan-500 hover:bg-cyan-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt className="w-3 h-3" />
                    Live Demo
                  </Motion.a>
                )}
                {selected.github !== "#" && (
                  <Motion.a
                    href={selected.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white text-sm font-medium rounded-lg transition-colors flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub className="w-3 h-3" />
                    GitHub
                  </Motion.a>
                )}
              </div>
            </div>
            
            <p className="text-white/90 leading-relaxed">{selected.description}</p>
            
            {/* Key Highlights */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-300 mb-3">Key Highlights</h4>
              <div className="grid grid-cols-2 gap-2">
                {selected.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    {highlight}
                  </div>
                ))}
              </div>
            </div>
            
            {/* Technologies Used */}
            <div>
              <h4 className="text-lg font-semibold text-cyan-300 mb-3">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {selected.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-gray-700 text-cyan-300 text-sm rounded-full border border-cyan-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
