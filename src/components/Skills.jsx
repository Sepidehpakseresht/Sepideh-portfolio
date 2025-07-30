import React from "react";
import RotatingSkillCircle from "./RotatingSkillCircle";
import { sectionCircleData } from "../data/sectionData";

const Skills = () => {
  const skillsData = sectionCircleData.skills;

  return (
    <section
      id="skills"
      className="relative min-h-screen flex items-center justify-center px-6 py-24 text-white bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="w-[600px] h-[600px] rounded-full bg-cyan-400/5 blur-[100px] animate-pulse" />
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white glow-text mb-4">My Skills</h2>
          <p className="text-cyan-400/80 text-lg max-w-2xl mx-auto">
            Explore my technical skills and tools. Hover over each skill to learn more about my expertise.
          </p>
        </div>

        {/* Main content area with rotating circle */}
        <div className="relative flex items-center justify-between min-h-[500px]">
          
          {/* Left side content */}
          <div className="flex-1 max-w-lg space-y-6">
            <div className="bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Frontend Technologies</h3>
              <p className="text-white/80 leading-relaxed">
                I specialize in modern frontend development with a focus on creating 
                interactive, responsive, and user-friendly web applications.
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Design & UX</h3>
              <p className="text-white/80 leading-relaxed">
                My background in UI/UX design helps me create not just functional, 
                but beautiful and intuitive user experiences.
              </p>
            </div>

            <div className="bg-gray-800/30 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-cyan-400 mb-4">Always Learning</h3>
              <p className="text-white/80 leading-relaxed">
                Technology evolves rapidly, and I'm committed to continuous learning 
                and staying up-to-date with the latest trends and best practices.
              </p>
            </div>
          </div>

          {/* Rotating Skills Circle */}
          <div className="flex-1 flex justify-center items-center relative">
            <RotatingSkillCircle
              skills={skillsData.skills}
              title={skillsData.title}
              size="large"
              position="center"
              autoRotate={true}
              rotationSpeed={30}
            />
          </div>
        </div>

        {/* Additional skills info */}
        <div className="mt-16 text-center">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="text-lg font-semibold text-white mb-2">Performance</h4>
              <p className="text-white/70 text-sm">Optimized, fast-loading applications</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6">
              <div className="text-3xl mb-3">📱</div>
              <h4 className="text-lg font-semibold text-white mb-2">Responsive</h4>
              <p className="text-white/70 text-sm">Mobile-first, cross-device compatibility</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/10 to-teal-500/10 backdrop-blur-sm border border-green-500/20 rounded-xl p-6">
              <div className="text-3xl mb-3">✨</div>
              <h4 className="text-lg font-semibold text-white mb-2">Interactive</h4>
              <p className="text-white/70 text-sm">Engaging animations and user interactions</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
