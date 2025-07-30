import React from "react";
import SkillSemiCircle from "./SkillSemiCircle";
import { sectionCircleData } from "../data/sectionData";

const Skills = () => {
  const skillsData = sectionCircleData.skills;

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 text-white bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
    >
      {/* Background effects matching the reference image */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="w-[800px] h-[800px] rounded-full bg-gradient-to-r from-cyan-400/5 via-purple-400/5 to-cyan-400/5 blur-[100px] animate-pulse" />
      </div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Main title */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white glow-text mb-4">My Skills</h2>
          <p className="text-cyan-400/80 text-lg max-w-2xl mx-auto">
            Explore my technical expertise through interactive skill visualization
          </p>
        </div>

        {/* Main content with semi-circle exactly like the reference */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left side content */}
          <div className="flex-1 max-w-lg space-y-8">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Frontend Development</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                I specialize in creating modern, responsive web applications using the latest frontend technologies.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">CSS3</span>
              </div>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-8 hover-lift">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Design & UX</h3>
              <p className="text-white/80 leading-relaxed mb-4">
                My background in UI/UX design ensures every application is both beautiful and user-friendly.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">UI/UX</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Responsive</span>
                <span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">Modern</span>
              </div>
            </div>
          </div>

          {/* Semi-circle exactly like the reference image */}
          <div className="flex-1 flex justify-center items-center">
            <SkillSemiCircle
              skills={skillsData.skills}
              title={skillsData.title}
              centerText="see more"
              size="large"
              canRotate={true}
              rotationSpeed={50}
            />
          </div>
        </div>

        {/* Bottom description matching the reference layout */}
        <div className="mt-20 text-center">
          <p className="text-white/60 text-lg max-w-4xl mx-auto leading-relaxed">
            From customer support to product management, and now frontend development — 
            my diverse background gives me a unique perspective on building user-centered applications. 
            Each skill in my toolkit contributes to creating exceptional digital experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
