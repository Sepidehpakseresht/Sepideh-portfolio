import { useEffect, useRef, useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';

import leaves1 from '../assets/leaves-1.png';
import leaves2 from '../assets/leaves-2.png';
import leaves3 from '../assets/leaves-3.png';
import leaves4 from '../assets/leaves-4.png';

const About = () => {
  const [treeStage, setTreeStage] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const section = sectionRef.current;
      if (!section) return;

      const rect = section.getBoundingClientRect();
      const inView = rect.top < window.innerHeight && rect.bottom > 0;

      if (inView && treeStage === 0) {
        let i = 1;
        const interval = setInterval(() => {
          setTreeStage(i);
          i++;
          if (i > 4) clearInterval(interval);
        }, 1500); 
      }

      if (!inView && treeStage !== 0) {
        setTreeStage(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [treeStage]);

  const baseClass = `
    absolute bottom-0 pointer-events-none 
    w-[200px] sm:w-[250px] md:w-[686px] 
    left-[25%] -translate-x-1/2 sm:left-[30%] sm:-translate-x-[60%] 
    md:left-[0%] md:-translate-x-[0%] md:top-40 md:my-[-20%]
    lg:left-[0%] lg:-translate-x-[75%]  xl:left-[20%] xl:-translate-x-[80%] xl:top-[30%] xl:w-[410px]
  `;

  const getCurrentImage = () => {
    switch (treeStage) {
      case 1:
        return leaves1;
      case 2:
        return leaves2;
      case 3:
        return leaves3;
      case 4:
        return leaves4;
      default:
        return null;
    }
  };

  return (
    <section
      id="aboutme"
      ref={sectionRef}
      className="min-h-screen px-6 py-24 text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-black via-space-deep to-space-medium" />
      
      {/* Animated background orbs */}
      <div className="absolute top-32 left-20 w-80 h-80 bg-neon-green/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[140px] animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center min-h-screen">
        
        {/* Left side - Content */}
        <Motion.div
          className="space-y-8"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div>
            <Motion.h2
              className="text-5xl md:text-6xl font-bold mb-6 font-futuristic"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <span className="holographic-text">About Me</span>
            </Motion.h2>
            
            <Motion.p
              className="text-xl text-neon-cyan font-mono glow-text mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              My journey of continuous growth
            </Motion.p>
          </div>

          <Motion.div
            className="glass-morphism rounded-2xl p-8 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-gray-300 leading-relaxed">
              I'm a passionate <span className="text-neon-cyan font-semibold">front-end developer</span> who 
              believes in the power of continuous learning and growth. Like a tree that starts as a small seed 
              and grows into something magnificent, my journey in tech has been one of constant evolution.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              I specialize in creating <span className="text-neon-purple font-semibold">modern, responsive web applications</span> using 
              React, Tailwind CSS, and cutting-edge technologies. Every project is an opportunity to push 
              boundaries and create something extraordinary.
            </p>
            
            <p className="text-lg text-gray-300 leading-relaxed">
              My approach combines <span className="text-neon-green font-semibold">technical excellence</span> with 
              creative problem-solving, always striving to deliver user experiences that are both beautiful 
              and functional.
            </p>
          </Motion.div>

          {/* Skills highlight */}
          <Motion.div
            className="grid grid-cols-2 md:grid-cols-3 gap-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            {[
              { label: "Frontend", value: "Expert" },
              { label: "UI/UX", value: "Advanced" },
              { label: "3D Web", value: "Learning" },
              { label: "React", value: "Expert" },
              { label: "Animation", value: "Advanced" },
              { label: "Innovation", value: "Always" }
            ].map((skill, index) => (
              <Motion.div
                key={skill.label}
                className="glass-morphism rounded-lg p-4 text-center hover:neon-glow-cyan transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="text-neon-cyan font-bold text-sm mb-1 font-mono">
                  {skill.label}
                </div>
                <div className="text-white text-xs">
                  {skill.value}
                </div>
              </Motion.div>
            ))}
          </Motion.div>
        </Motion.div>

        {/* Right side - Tree Animation */}
        <Motion.div
          className="relative h-[500px] lg:h-[600px]"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Holographic frame */}
          <div className="absolute inset-0 rounded-2xl border-2 border-neon-cyan/30 glass-morphism">
            <div className="absolute inset-2 rounded-xl border border-neon-purple/20"></div>
          </div>

          {/* Tree growth visualization */}
          <div className="relative h-full flex items-center justify-center">
            <AnimatePresence>
              {getCurrentImage() && (
                <Motion.img
                  key={treeStage}
                  src={getCurrentImage()}
                  alt={`Growth stage ${treeStage}`}
                  className="max-w-full max-h-full object-contain filter drop-shadow-lg"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  style={{
                    filter: 'drop-shadow(0 0 20px rgba(0, 255, 136, 0.3))'
                  }}
                />
              )}
            </AnimatePresence>

            {/* Growth stage indicator */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
              <div className="flex space-x-2">
                {[1, 2, 3, 4].map((stage) => (
                  <Motion.div
                    key={stage}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      stage <= treeStage 
                        ? 'bg-neon-green shadow-neon-green' 
                        : 'bg-gray-600'
                    }`}
                    animate={stage <= treeStage ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5, delay: stage * 0.1 }}
                  />
                ))}
              </div>
              <p className="text-neon-cyan text-xs font-mono text-center mt-2">
                Growth Stage: {treeStage}/4
              </p>
            </div>
          </div>

          {/* Floating particles around tree */}
          {treeStage > 0 && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <Motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-neon-green rounded-full opacity-60"
                  animate={{
                    x: [0, Math.random() * 100 - 50],
                    y: [0, Math.random() * 100 - 50],
                    opacity: [0.6, 0, 0.6],
                  }}
                  transition={{
                    duration: 3 + Math.random() * 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                />
              ))}
            </div>
          )}
        </Motion.div>
      </div>
    </section>
  );
};

export default About;
