import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaJs, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt, FaCode } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

const skills = [
  {
    name: "React",
    icon: <FaReact className="text-4xl text-primary" />,
    color: "#F96902",
    snippet: `function App() {\n  return <Component />;\n}`,
    preview: <div className="w-full h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">React UI</div>
  },
  {
    name: "Three.js",
    icon: <FaCode className="text-4xl text-primary" />,
    color: "#F96902",
    snippet: `const mesh = new THREE.Mesh(geo, mat);`,
    preview: <div className="w-full h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">3D Canvas</div>
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-4xl text-primary" />,
    color: "#F96902",
    snippet: `<div class=\"bg-primary text-white\">Tailwind</div>`,
    preview: <div className="w-full h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">Tailwind UI</div>
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-4xl text-primary" />,
    color: "#F96902",
    snippet: `const sum = (a, b) => a + b;`,
    preview: <div className="w-full h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">JS Logic</div>
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="text-4xl text-primary" />,
    color: "#F96902",
    snippet: `type User = { name: string; }`,
    preview: <div className="w-full h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">TS Types</div>
  },
  {
    name: "Node.js",
    icon: <FaNodeJs className="text-4xl text-primary" />,
    color: "#F96902",
    snippet: `app.get('/', (req, res) => res.send('OK'));`,
    preview: <div className="w-full h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">API Route</div>
  },
  {
    name: "HTML5",
    icon: <FaHtml5 className="text-4xl text-primary" />,
    color: "#F96902",
    snippet: `<main><h1>Hello</h1></main>`,
    preview: <div className="w-full h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">HTML5</div>
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt className="text-4xl text-primary" />,
    color: "#F96902",
    snippet: `.btn { background: #F96902; }`,
    preview: <div className="w-full h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">CSS3</div>
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-4xl text-primary" />,
    color: "#F96902",
    snippet: `git commit -m 'feat: add feature'`,
    preview: <div className="w-full h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary font-bold">Git</div>
  },
];

const Skills = () => {
  const [expanded, setExpanded] = useState(null);

  return (
    <section id="skills" className="relative w-full max-w-7xl mx-auto px-6 py-24 min-h-[60vh] flex flex-col items-center">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-display font-extrabold text-white mb-2">Skills</h2>
        <div className="w-16 h-1 mx-auto bg-primary rounded-full mb-2" />
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          My core technologies. Click a card to see a code or UI preview.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            layout
            onClick={() => setExpanded(expanded === i ? null : i)}
            whileHover={{ y: -8, boxShadow: `0 0 24px ${skill.color}` }}
            className={`glass rounded-xl border-2 cursor-pointer group transition-all duration-300 flex flex-col items-center p-6 relative ${expanded === i ? 'border-primary shadow-orange' : 'border-glass-border'}`}
            style={{ minHeight: 180 }}
          >
            <div className="mb-3">{skill.icon}</div>
            <div className="font-display font-bold text-lg mb-1 text-white">{skill.name}</div>
            <AnimatePresence initial={false}>
              {expanded === i ? (
                <motion.div
                  key="details"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="mt-4 w-full"
                >
                  <div className="mb-2">{skill.preview}</div>
                  <pre className="bg-background text-primary text-xs rounded-lg p-3 overflow-x-auto font-mono border border-primary/20">
                    {skill.snippet}
                  </pre>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
