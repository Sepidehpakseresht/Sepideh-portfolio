import React from "react";

const skills = [
  {
    name: "HTML",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    glow: "drop-shadow-[0_0_10px_#f97316]",
  },
  {
    name: "CSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    glow: "drop-shadow-[0_0_10px_#3b82f6]",
  },
  {
    name: "JavaScript",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    glow: "drop-shadow-[0_0_10px_#facc15]",
  },
  {
    name: "React",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    glow: "drop-shadow-[0_0_10px_#38bdf8]",
  },
  {
    name: "TailwindCSS",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    glow: "drop-shadow-[0_0_10px_#22d3ee]",
  },
  {
    name: "Bootstrap",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    glow: "drop-shadow-[0_0_10px_#c084fc]",
  },
  {
    name: "Git",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    glow: "drop-shadow-[0_0_10px_#f87171]",
  },
];

const Skills = () => {
  const duplicatedSkills = [...skills, ...skills]; 

  return (
    <section
      id="skills"
      className="min-h-screen px-9 py-24 text-white bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
    >
      <h2 className="text-4xl font-bold text-center mb-12 glow-text">My Skills</h2>

      <div className="relative w-full overflow-hidden">
        <div
          className="flex animate-slide gap-28 w-max px-4 py-20"
          style={{ minWidth: "200%" }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center min-w-[100px]"
            >
              <img
                src={skill.src}
                alt={skill.name}
                className={`w-[64px] h-[64px] object-contain hover:scale-110 transition-transform duration-300 ${skill.glow}`}
              />
              <p className="mt-2 text-sm text-muted">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
