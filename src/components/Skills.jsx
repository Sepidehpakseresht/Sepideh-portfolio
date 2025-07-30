import React from "react";
import { motion as Motion } from "framer-motion";

const skills = [
  {
    name: "HTML5",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    glow: "drop-shadow-[0_0_10px_#f97316]",
    category: "Frontend"
  },
  {
    name: "CSS3",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    glow: "drop-shadow-[0_0_10px_#3b82f6]",
    category: "Frontend"
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    glow: "drop-shadow-[0_0_10px_#facc15]",
    category: "Frontend"
  },
  {
    name: "TypeScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    glow: "drop-shadow-[0_0_10px_#3178c6]",
    category: "Frontend"
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    glow: "drop-shadow-[0_0_10px_#38bdf8]",
    category: "Frontend"
  },
  {
    name: "Next.js",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    glow: "drop-shadow-[0_0_10px_#ffffff]",
    category: "Frontend"
  },
  {
    name: "TailwindCSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    glow: "drop-shadow-[0_0_10px_#22d3ee]",
    category: "Styling"
  },
  {
    name: "SASS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    glow: "drop-shadow-[0_0_10px_#cd6799]",
    category: "Styling"
  },
  {
    name: "Bootstrap",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    glow: "drop-shadow-[0_0_10px_#c084fc]",
    category: "Styling"
  },
  {
    name: "Framer Motion",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/framermotion/framermotion-original.svg",
    glow: "drop-shadow-[0_0_10px_#bb88fc]",
    category: "Animation"
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    glow: "drop-shadow-[0_0_10px_#f87171]",
    category: "Tools"
  },
  {
    name: "GitHub",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    glow: "drop-shadow-[0_0_10px_#ffffff]",
    category: "Tools"
  },
  {
    name: "Vite",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    glow: "drop-shadow-[0_0_10px_#fbbf24]",
    category: "Tools"
  },
  {
    name: "Figma",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
    glow: "drop-shadow-[0_0_10px_#f24e1e]",
    category: "Design"
  }
];

const Skills = () => {
  const duplicatedSkills = [...skills, ...skills]; 

  return (
    <section
      id="skills"
      className="min-h-screen px-9 py-24 text-white bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
    >
      <Motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold glow-text mb-4">My Skills</h2>
        <p className="text-gray-300 text-lg max-w-2xl mx-auto">
          A comprehensive toolkit of modern technologies and frameworks I use to bring ideas to life
        </p>
      </Motion.div>

      {/* Skills categories */}
      <Motion.div 
        className="flex flex-wrap justify-center gap-4 mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {['Frontend', 'Styling', 'Animation', 'Tools', 'Design'].map((category, index) => (
          <Motion.span
            key={category}
            className="px-4 py-2 bg-gray-800/50 border border-cyan-500/30 rounded-full text-cyan-300 text-sm font-medium backdrop-blur-sm"
            whileHover={{ scale: 1.05, borderColor: '#22d3ee' }}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
          >
            {category}
          </Motion.span>
        ))}
      </Motion.div>

      {/* Animated skills carousel */}
      <div className="relative w-full overflow-hidden">
        <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-gray-950 to-transparent z-10" />
        <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-gray-950 to-transparent z-10" />
        
        <Motion.div
          className="flex animate-slide gap-28 w-max px-4 py-20"
          style={{ minWidth: "200%" }}
        >
          {duplicatedSkills.map((skill, index) => (
            <Motion.div
              key={`${skill.name}-${index}`}
              className="flex flex-col items-center min-w-[120px] group"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative mb-4">
                <img
                  src={skill.src}
                  alt={skill.name}
                  className={`w-[80px] h-[80px] object-contain transition-all duration-300 ${skill.glow} group-hover:scale-110`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
              <p className="text-white font-medium text-center group-hover:text-cyan-400 transition-colors duration-300">
                {skill.name}
              </p>
              <p className="text-xs text-gray-400 mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {skill.category}
              </p>
            </Motion.div>
          ))}
        </Motion.div>
      </div>

      {/* Skill proficiency indicators */}
      <Motion.div 
        className="mt-16 max-w-4xl mx-auto"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400">Core Competencies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { skill: "React Development", level: 90 },
            { skill: "Modern CSS & Tailwind", level: 95 },
            { skill: "JavaScript/TypeScript", level: 85 },
            { skill: "UI/UX Implementation", level: 88 }
          ].map((item, index) => (
            <Motion.div
              key={item.skill}
              className="bg-gray-800/50 backdrop-blur-sm border border-cyan-500/20 rounded-lg p-4"
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
            >
              <div className="flex justify-between items-center mb-2">
                <span className="text-white font-medium">{item.skill}</span>
                <span className="text-cyan-400 text-sm">{item.level}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <Motion.div
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 h-2 rounded-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.8 + index * 0.1 }}
                />
              </div>
            </Motion.div>
          ))}
        </div>
      </Motion.div>
    </section>
  );
};

export default Skills;
