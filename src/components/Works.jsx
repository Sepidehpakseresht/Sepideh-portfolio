import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "Modern React e-commerce with Redux, Stripe payments, and responsive design",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    technologies: ["React", "Redux", "Stripe", "Tailwind CSS"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://ecommerce-demo.com",
    preview: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop"
  },
  {
    title: "Task Management App",
    description: "Full-stack task manager with real-time updates and team collaboration",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&h=300&fit=crop",
    technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
    github: "https://github.com/yourusername/task-manager",
    live: "https://task-manager-demo.com",
    preview: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop"
  },
  {
    title: "Portfolio Website",
    description: "Interactive portfolio with Three.js animations and modern UI design",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop",
    technologies: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
    github: "https://github.com/yourusername/portfolio",
    live: "https://portfolio-demo.com",
    preview: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather app with beautiful charts and location tracking",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=500&h=300&fit=crop",
    technologies: ["React", "Chart.js", "OpenWeather API", "Geolocation"],
    github: "https://github.com/yourusername/weather-app",
    live: "https://weather-demo.com",
    preview: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=800&h=600&fit=crop"
  },
  {
    title: "Social Media Clone",
    description: "Instagram-inspired social platform with image sharing and user interactions",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=500&h=300&fit=crop",
    technologies: ["React", "Firebase", "Cloud Storage", "Authentication"],
    github: "https://github.com/yourusername/social-app",
    live: "https://social-demo.com",
    preview: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&h=600&fit=crop"
  },
  {
    title: "AI Chat Interface",
    description: "Modern chat interface with AI integration and real-time messaging",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop",
    technologies: ["React", "OpenAI API", "WebSocket", "Tailwind CSS"],
    github: "https://github.com/yourusername/ai-chat",
    live: "https://ai-chat-demo.com",
    preview: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop"
  }
];

const Works = () => {
  const [hovered, setHovered] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="works" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
            Featured <span className="bg-primary px-4 py-2 rounded-lg">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHovered(project.title)}
              onMouseLeave={() => setHovered(null)}
              className="relative group"
            >
              {/* Project Card */}
              <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                className="glass rounded-xl border-2 border-glass-border shadow-orange hover:shadow-orange/50 transition-all duration-300 overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Live Preview Overlay */}
                  <AnimatePresence>
                    {hovered === project.title && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/50 flex items-center justify-center"
                      >
                        <img
                          src={project.preview}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                          <span className="bg-primary/10 text-primary border border-primary/30 px-3 py-1 rounded-full text-sm font-medium">
                            Live Preview
                          </span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{project.description}</p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full border border-primary/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      <FaGithub className="text-lg" />
                      <span className="text-sm">Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-400 hover:text-primary transition-colors duration-300"
                    >
                      <FaExternalLinkAlt className="text-lg" />
                      <span className="text-sm">Live</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Project Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="glass rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="relative">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full glass flex items-center justify-center text-primary hover:text-white hover:shadow-orange transition-all duration-300"
                  >
                    <FaTimes className="text-lg" />
                  </button>
                  
                  <img
                    src={selectedProject.preview}
                    alt={selectedProject.title}
                    className="w-full h-64 object-cover rounded-t-2xl"
                  />
                  
                  <div className="p-8">
                    <h3 className="text-3xl font-bold text-white mb-4">{selectedProject.title}</h3>
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">{selectedProject.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:shadow-orange transition-all duration-300"
                      >
                        <FaGithub className="text-lg" />
                        View Code
                      </a>
                      <a
                        href={selectedProject.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 glass border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
                      >
                        <FaExternalLinkAlt className="text-lg" />
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Works;
