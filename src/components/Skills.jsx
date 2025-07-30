import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaJs, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiThreejs } from 'react-icons/si';

const skills = [
  {
    name: "React",
    icon: <FaReact className="text-4xl text-neon-blue" />,
    color: "#00D4FF",
    short: "Modern UI library for building interactive apps.",
    details: [
      "Hooks, Context, and State Management",
      "Performance Optimization",
      "Component Architecture"
    ]
  },
  {
    name: "Three.js",
    icon: <SiThreejs className="text-4xl text-neon-pink" />,
    color: "#FF0080",
    short: "3D graphics and interactive web experiences.",
    details: [
      "3D Scene Creation",
      "Geometry & Materials",
      "Animation & Interactivity"
    ]
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-4xl text-neon-purple" />,
    color: "#7B2CBF",
    short: "Utility-first CSS for rapid UI development.",
    details: [
      "Responsive Design",
      "Custom Components",
      "Design Systems"
    ]
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-4xl text-neon-green" />,
    color: "#00FF88",
    short: "Modern ES6+ features and async programming.",
    details: [
      "ES6+ Features",
      "Async/Await",
      "Functional Programming"
    ]
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-4xl text-neon-blue" />,
    color: "#00D4FF",
    short: "Type-safe JavaScript for scalable apps.",
    details: [
      "Type Safety",
      "Interfaces & Types",
      "Advanced Patterns"
    ]
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-4xl text-neon-green" />,
    color: "#00FF88",
    short: "Server-side JavaScript and APIs.",
    details: [
      "Express.js Framework",
      "API Development",
      "Database Integration"
    ]
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-4xl text-neon-pink" />,
    color: "#FF0080",
    short: "Semantic, accessible markup.",
    details: [
      "Semantic HTML",
      "Accessibility",
      "SEO Best Practices"
    ]
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-4xl text-neon-blue" />,
    color: "#00D4FF",
    short: "Modern layouts and animations.",
    details: [
      "Flexbox & Grid",
      "Animations",
      "Responsive Design"
    ]
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-4xl text-neon-orange" />,
    color: "#FF9900",
    short: "Version control and collaboration.",
    details: [
      "Branching & Merging",
      "Collaboration",
      "CI/CD Workflows"
    ]
  },
];

const Skills = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="skills" className="relative w-full max-w-7xl mx-auto px-6 py-24 min-h-[60vh] flex flex-col items-center">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-futura font-bold neon-text-blue mb-2">Skills</h2>
        <div className="w-16 h-1 mx-auto bg-gradient-to-r from-neon-blue to-neon-pink rounded-full mb-2" />
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          My core technologies. Hover for a quick summary, click for details.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            layout
            onClick={() => setExpanded(expanded === i ? null : i)}
            whileHover={{ y: -6, boxShadow: `0 0 16px ${skill.color}` }}
            className={`glass rounded-2xl border-2 cursor-pointer group transition-all duration-300 flex flex-col items-center p-6 relative ${expanded === i ? 'border-neon-pink shadow-neon-pink' : 'border-glass-border'}`}
            style={{ minHeight: 180 }}
          >
            <div className="mb-3">{skill.icon}</div>
            <div className="font-futura font-bold text-lg mb-1" style={{ color: skill.color }}>{skill.name}</div>
            <AnimatePresence initial={false}>
              {expanded === i ? (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-2 w-full"
                >
                  <ul className="text-gray-300 text-sm list-disc list-inside space-y-1">
                    {skill.details.map((d, idx) => (
                      <li key={idx}>{d}</li>
                    ))}
                  </ul>
                </motion.div>
              ) : (
                <motion.div
                  key="short"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="text-gray-400 text-sm mt-2 text-center"
                >
                  {skill.short}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
