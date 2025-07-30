import React, { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import { FaReact, FaJs, FaNodeJs, FaCss3Alt, FaHtml5, FaGitAlt, FaCube } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';

const skills = [
  {
    name: 'React',
    icon: FaReact,
    color: '#F96902',
    description: 'Building interactive UIs with modern React patterns',
    level: 'Advanced',
    projects: '15+ projects',
    snippet: `function App() {
  return (
    <div className="app">
      <Header />
      <Main />
    </div>
  );
}`,
    preview: (
      <div className="w-full h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold">React App</span>
      </div>
    )
  },
  {
    name: 'TypeScript',
    icon: SiTypescript,
    color: '#F96902',
    description: 'Type-safe JavaScript development',
    level: 'Advanced',
    projects: '12+ projects',
    snippet: `interface User {
  id: string;
  name: string;
  email: string;
}

const user: User = {
  id: "1",
  name: "John",
  email: "john@example.com"
};`,
    preview: (
      <div className="w-full h-24 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold">TypeScript</span>
      </div>
    )
  },
  {
    name: 'Three.js',
    icon: FaCube,
    color: '#F96902',
    description: '3D graphics and interactive experiences',
    level: 'Intermediate',
    projects: '8+ projects',
    snippet: `const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();`,
    preview: (
      <div className="w-full h-24 bg-gradient-to-br from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold">3D Scene</span>
      </div>
    )
  },
  {
    name: 'Tailwind CSS',
    icon: SiTailwindcss,
    color: '#F96902',
    description: 'Utility-first CSS framework',
    level: 'Advanced',
    projects: '20+ projects',
    snippet: `<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 to-purple-600">
  <div className="text-white text-center">
    <h1 className="text-4xl font-bold mb-4">Hello World</h1>
  </div>
</div>`,
    preview: (
      <div className="w-full h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold">Tailwind UI</span>
      </div>
    )
  },
  {
    name: 'JavaScript',
    icon: FaJs,
    color: '#F96902',
    description: 'Modern ES6+ JavaScript development',
    level: 'Advanced',
    projects: '25+ projects',
    snippet: `const fetchData = async () => {
  try {
    const response = await fetch('/api/data');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
};`,
    preview: (
      <div className="w-full h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold">JavaScript</span>
      </div>
    )
  },
  {
    name: 'Node.js',
    icon: FaNodeJs,
    color: '#F96902',
    description: 'Server-side JavaScript development',
    level: 'Intermediate',
    projects: '10+ projects',
    snippet: `const express = require('express');
const app = express();

app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});`,
    preview: (
      <div className="w-full h-24 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold">Node.js API</span>
      </div>
    )
  }
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
            Skills & <span className="bg-primary px-4 py-2 rounded-lg">Technologies</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Technologies I use to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredSkill(skill.name)}
              onHoverEnd={() => setHoveredSkill(null)}
              className="relative group"
            >
              {/* Main Skill Card */}
              <motion.div
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  transition: { duration: 0.3 }
                }}
                className="glass rounded-2xl p-6 border border-glass-border shadow-orange hover:shadow-orange/50 transition-all duration-300 cursor-pointer relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={false}
                />
                
                {/* Content */}
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <skill.icon className="text-2xl text-primary" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{skill.name}</h3>
                      <p className="text-sm text-gray-400">{skill.level}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {skill.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-xs text-gray-400">
                    <span>{skill.projects}</span>
                    <span className="text-primary font-semibold">Hover for details</span>
                  </div>
                </div>
              </motion.div>

              {/* Hover Details Overlay */}
              <AnimatePresence>
                {hoveredSkill === skill.name && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 20 }}
                    transition={{ duration: 0.3 }}
                    className="absolute inset-0 z-20"
                  >
                    <div className="glass rounded-2xl p-6 border border-glass-border shadow-orange h-full">
                      <div className="h-full flex flex-col">
                        {/* Header */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                            <skill.icon className="text-xl text-primary" />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-white">{skill.name}</h4>
                            <p className="text-xs text-gray-400">{skill.level} • {skill.projects}</p>
                          </div>
                        </div>

                        {/* Preview */}
                        <div className="mb-4">
                          {skill.preview}
                        </div>

                        {/* Code Snippet */}
                        <div className="flex-1">
                          <p className="text-xs text-gray-400 mb-2">Code Example:</p>
                          <pre className="text-xs bg-background text-primary p-3 rounded-lg overflow-auto max-h-24">
                            {skill.snippet}
                          </pre>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="glass rounded-2xl p-8 border border-glass-border max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Always Learning</h3>
            <p className="text-gray-300 mb-6">
              I'm constantly exploring new technologies and frameworks to stay at the forefront of web development.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {['Next.js', 'GraphQL', 'AWS', 'Docker', 'Testing', 'CI/CD'].map((tech, index) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium border border-primary/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
