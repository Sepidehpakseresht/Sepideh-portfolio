import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';

const RotatingSkillCircle = ({ 
  skills, 
  title, 
  centerContent, 
  size = 'large', 
  position = 'right',
  autoRotate = true,
  rotationSpeed = 20 
}) => {
  const [rotation, setRotation] = useState(0);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  // Size configurations
  const sizeConfig = {
    small: {
      containerSize: 'w-64 h-64',
      radius: 100,
      skillSize: 'w-12 h-12',
      fontSize: 'text-xs'
    },
    medium: {
      containerSize: 'w-80 h-80',
      radius: 130,
      skillSize: 'w-14 h-14',
      fontSize: 'text-sm'
    },
    large: {
      containerSize: 'w-96 h-96',
      radius: 160,
      skillSize: 'w-16 h-16',
      fontSize: 'text-base'
    }
  };

  const config = sizeConfig[size];

  // Auto rotation effect
  useEffect(() => {
    if (!autoRotate || isHovered) return;
    
    const interval = setInterval(() => {
      setRotation(prev => prev + 1);
    }, rotationSpeed);

    return () => clearInterval(interval);
  }, [autoRotate, rotationSpeed, isHovered]);

  // Calculate skill positions on the circle
  const getSkillPosition = (index, total) => {
    const angle = (index * 180) / (total - 1) - 90; // Semi-circle from -90 to 90 degrees
    const radian = (angle * Math.PI) / 180;
    const x = Math.cos(radian) * config.radius;
    const y = Math.sin(radian) * config.radius;
    return { x, y, angle };
  };

  const positionClasses = {
    left: 'left-0',
    right: 'right-0',
    center: 'left-1/2 -translate-x-1/2'
  };

  return (
    <div className={`absolute ${positionClasses[position]} top-1/2 -translate-y-1/2 z-10`}>
      <div 
        className={`relative ${config.containerSize} flex items-center justify-center`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredSkill(null);
        }}
      >
        {/* Background glow effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 blur-xl animate-pulse" />
        
        {/* Rotating border */}
        <Motion.div
          className="absolute inset-4 rounded-full border-2 border-cyan-500/30"
          animate={{ rotate: rotation }}
          transition={{ duration: 0.1, ease: "linear" }}
        />

        {/* Center content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-20">
          {centerContent ? (
            centerContent
          ) : (
            <>
              <h3 className="text-white font-bold text-lg mb-2 glow-text">{title}</h3>
              <p className="text-cyan-400 text-sm">Hover to explore</p>
            </>
          )}
        </div>

        {/* Skills positioned on the circle */}
        {skills.map((skill, index) => {
          const { x, y, angle } = getSkillPosition(index, skills.length);
          const isHoveredSkill = hoveredSkill === index;
          
          return (
            <Motion.div
              key={index}
              className={`absolute ${config.skillSize} cursor-pointer group`}
              style={{
                left: '50%',
                top: '50%',
                transform: `translate(${x - (config.skillSize === 'w-16 h-16' ? 32 : config.skillSize === 'w-14 h-14' ? 28 : 24)}px, ${y - (config.skillSize === 'w-16 h-16' ? 32 : config.skillSize === 'w-14 h-14' ? 28 : 24)}px)`
              }}
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Skill icon container */}
              <div className={`relative w-full h-full rounded-full border-2 ${
                isHoveredSkill 
                  ? 'border-cyan-400 bg-cyan-500/20' 
                  : 'border-cyan-600/50 bg-gray-800/80'
              } backdrop-blur-sm flex items-center justify-center transition-all duration-300`}>
                
                {/* Skill icon or image */}
                {skill.src ? (
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className={`w-8 h-8 object-contain transition-all duration-300 ${
                      isHoveredSkill ? skill.glow || 'drop-shadow-[0_0_8px_#22d3ee]' : ''
                    }`}
                  />
                ) : skill.icon ? (
                  <div className={`text-2xl ${isHoveredSkill ? 'text-cyan-400' : 'text-white'} transition-colors duration-300`}>
                    {skill.icon}
                  </div>
                ) : (
                  <div className={`text-xs font-bold ${isHoveredSkill ? 'text-cyan-400' : 'text-white'} transition-colors duration-300`}>
                    {skill.name.substring(0, 2)}
                  </div>
                )}

                {/* Glow effect on hover */}
                {isHoveredSkill && (
                  <div className="absolute inset-0 rounded-full bg-cyan-500/20 animate-pulse" />
                )}
              </div>

              {/* Skill name tooltip */}
              <Motion.div
                className={`absolute top-full mt-2 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/90 text-white text-xs rounded whitespace-nowrap backdrop-blur-sm border border-cyan-500/30 ${
                  isHoveredSkill ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-300 pointer-events-none z-30`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ 
                  opacity: isHoveredSkill ? 1 : 0, 
                  y: isHoveredSkill ? 0 : -10 
                }}
                transition={{ duration: 0.2 }}
              >
                {skill.name}
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900/90 rotate-45 border-l border-t border-cyan-500/30" />
              </Motion.div>
            </Motion.div>
          );
        })}

        {/* Interactive elements */}
        <div className="absolute inset-0 rounded-full border border-cyan-500/20 animate-pulse" />
        
        {/* Click to pause indicator */}
        {autoRotate && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-cyan-400/60 animate-pulse">
            {isHovered ? 'Paused' : 'Auto-rotating'}
          </div>
        )}
      </div>
    </div>
  );
};

export default RotatingSkillCircle;