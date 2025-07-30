import { useEffect, useRef, useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import RotatingSkillCircle from './RotatingSkillCircle';
import { sectionCircleData } from '../data/sectionData';

import leaves1 from '../assets/leaves-1.png';
import leaves2 from '../assets/leaves-2.png';
import leaves3 from '../assets/leaves-3.png';
import leaves4 from '../assets/leaves-4.png';

const About = () => {
  const [treeStage, setTreeStage] = useState(0);
  const sectionRef = useRef(null);
  const aboutData = sectionCircleData.about;

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
      ref={sectionRef}
      id="aboutme"
      className="relative min-h-screen flex items-center justify-between gap-10 flex-col md:flex-row bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 px-6 py-24 text-white"
    >
      <div className="max-w-2xl space-y-8 z-10">
        <h2 className="text-4xl font-bold text-white glow-text text-center">About Me</h2>
        <p className="text-white/80 leading-relaxed">
          From answering customer calls to building user-friendly interfaces — my journey into tech has been anything but ordinary. I started working as a <span className="text-white font-semibold">Customer Support Specialist</span>, where I discovered the power of listening. Understanding people’s real problems and seeing how interface design shaped their experience sparked my early interest in UI/UX.
        </p>
        <p className="text-white/80 leading-relaxed">
          Curious to go deeper, I moved into <span className="text-white font-semibold">Product Management</span>. There, I learned how to prioritize, communicate with developers and designers, and find the balance between user needs and technical realities. Working with large companies and high-impact clients gave me invaluable insights into how strong teams build great products.
        </p>
        <p className="text-white/80 leading-relaxed">
          But something kept pulling me closer to the building process itself. Watching developers bring ideas to life made me realize: I don’t just want to manage the vision — I want to code it into reality. That’s when I began my path into <span className="text-white font-semibold">Front-End Development</span>, and I’ve never looked back.
        </p>
        <p className="text-cyan-200 italic font-medium">This is my story of growth — and it's just getting started.</p>
      </div>

      <div className="hidden md:block relative w-full md:w-[800px] h-[300px] md:h-[500px]">
        <AnimatePresence mode="wait">
          {getCurrentImage() && (
            <Motion.img
              key={treeStage}
              src={getCurrentImage()}
              alt={`Tree stage ${treeStage}`}
              className={`${baseClass}`}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.6, ease: 'easeInOut' }}
            />
          )}
        </AnimatePresence>
        
        {/* Rotating Skills Circle for About section */}
        <div className="hidden lg:block">
          <RotatingSkillCircle
            skills={aboutData.skills}
            title={aboutData.title}
            size="small"
            position="right"
            autoRotate={true}
            rotationSpeed={35}
          />
        </div>
      </div>
    </section>
  );
};

export default About;
