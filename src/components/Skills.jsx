import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ThreeScene from './ThreeJS/ThreeScene';
import RotatingSkills from './ThreeJS/RotatingSkills';

const skills = [
  {
    name: "React",
    icon: "⚛️",
    description: "Modern component-based UI development with hooks and context",
    level: "Advanced",
    color: "#00D4FF",
    details: [
      "Component Architecture",
      "Hooks & Context API",
      "Performance Optimization",
      "State Management"
    ]
  },
  {
    name: "Three.js",
    icon: "🎮",
    description: "3D graphics and interactive experiences for the web",
    level: "Intermediate",
    color: "#FF0080",
    details: [
      "3D Scene Creation",
      "Geometry & Materials",
      "Animation & Interactivity",
      "Performance Optimization"
    ]
  },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    description: "Utility-first CSS framework for rapid UI development",
    level: "Advanced",
    color: "#7B2CBF",
    details: [
      "Responsive Design",
      "Custom Components",
      "Animation & Transitions",
      "Design Systems"
    ]
  },
  {
    name: "JavaScript",
    icon: "⚡",
    description: "Modern ES6+ features and functional programming",
    level: "Advanced",
    color: "#00FF88",
    details: [
      "ES6+ Features",
      "Async/Await",
      "Functional Programming",
      "DOM Manipulation"
    ]
  },
  {
    name: "TypeScript",
    icon: "📘",
    description: "Type-safe JavaScript for scalable applications",
    level: "Intermediate",
    color: "#00FFFF",
    details: [
      "Type Safety",
      "Interfaces & Types",
      "Advanced Patterns",
      "Tooling Integration"
    ]
  },
  {
    name: "Node.js",
    icon: "🟢",
    description: "Server-side JavaScript and backend development",
    level: "Intermediate",
    color: "#FFFF00",
    details: [
      "Express.js Framework",
      "API Development",
      "Database Integration",
      "Authentication"
    ]
  }
];

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSkillSelect = (skill) => {
    setSelectedSkill(skill);
  };

  return (
    <section
      id="skills"
      className="relative min-h-screen px-6 py-24 bg-gradient-futuristic overflow-hidden"
    >
      {/* Background 3D Scene */}
      <div className="absolute inset-0 z-0">
        <ThreeScene>
          <RotatingSkills 
            skills={skills} 
            onSkillSelect={handleSkillSelect}
            selectedSkill={selectedSkill}
          />
        </ThreeScene>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl lg:text-6xl font-futura font-bold text-white neon-text-blue mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Interactive 3D visualization of my technical skills. Click on any skill to learn more.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-[400px] lg:h-[600px] flex items-center justify-center"
          >
            <div className="w-full h-full flex items-center justify-center">
              <ThreeScene className="w-full h-full">
                <RotatingSkills 
                  skills={skills} 
                  onSkillSelect={handleSkillSelect}
                  selectedSkill={selectedSkill}
                />
              </ThreeScene>
            </div>
          </motion.div>

          {/* Skill Details */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="space-y-8 flex flex-col justify-center h-full"
          >
            <AnimatePresence mode="wait">
              {selectedSkill ? (
                <motion.div
                  key={selectedSkill.name}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                  className="glass rounded-2xl p-8 backdrop-blur-xl w-full max-w-lg mx-auto"
                >
                  {/* Skill Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="text-4xl"
                      style={{ filter: `drop-shadow(0 0 10px ${selectedSkill.color})` }}
                    >
                      {selectedSkill.icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-futura font-bold text-white mb-2">
                        {selectedSkill.name}
                      </h3>
                      <span 
                        className="inline-block px-3 py-1 rounded-full text-sm font-semibold"
                        style={{ 
                          backgroundColor: `${selectedSkill.color}20`,
                          color: selectedSkill.color,
                          border: `1px solid ${selectedSkill.color}40`
                        }}
                      >
                        {selectedSkill.level}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {selectedSkill.description}
                  </p>

                  {/* Skill Details */}
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4 neon-text-blue">
                      Key Competencies
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedSkill.details.map((detail, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center gap-2 text-gray-300"
                        >
                          <div 
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: selectedSkill.color }}
                          />
                          <span>{detail}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="glass rounded-2xl p-8 backdrop-blur-xl w-full max-w-lg mx-auto text-center"
                >
                  <div className="text-6xl mb-4">🎯</div>
                  <h3 className="text-2xl font-futura font-bold text-white mb-4">
                    Select a Skill
                  </h3>
                  <p className="text-gray-300">
                    Click on any skill in the 3D visualization to see detailed information about my expertise and experience.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-futura font-bold text-white text-center mb-12 neon-text-pink">
            Additional Technologies
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 max-w-4xl mx-auto">
            {[
              { name: "HTML5", icon: "🌐" },
              { name: "CSS3", icon: "🎨" },
              { name: "Git", icon: "📚" },
              { name: "Figma", icon: "🎯" },
              { name: "Vite", icon: "⚡" },
              { name: "Vercel", icon: "🚀" }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-6 text-center backdrop-blur-xl hover:shadow-neon-blue transition-all duration-300"
              >
                <div className="text-3xl mb-3">{tech.icon}</div>
                <p className="text-sm text-gray-300 font-medium">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
