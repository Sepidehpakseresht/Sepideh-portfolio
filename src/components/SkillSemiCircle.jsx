import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';

const SkillSemiCircle = ({ 
  skills, 
  title, 
  centerText,
  size = 'large',
  canRotate = true,
  rotationSpeed = 30
}) => {
  const [rotation, setRotation] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  // Size configurations to match the reference image
  const sizeConfig = {
    small: {
      containerSize: 'w-80 h-40',
      radius: 140,
      skillSize: 'w-16 h-16',
      centerSize: 'w-24 h-24',
      titleSize: 'text-lg'
    },
    medium: {
      containerSize: 'w-96 h-48',
      radius: 170,
      skillSize: 'w-18 h-18',
      centerSize: 'w-28 h-28',
      titleSize: 'text-xl'
    },
    large: {
      containerSize: 'w-[500px] h-60',
      radius: 200,
      skillSize: 'w-20 h-20',
      centerSize: 'w-32 h-32',
      titleSize: 'text-2xl'
    }
  };

  const config = sizeConfig[size];

  // Auto rotation effect
  useEffect(() => {
    if (!canRotate || isHovered) return;
    
    const interval = setInterval(() => {
      setRotation(prev => prev + 0.5);
    }, rotationSpeed);

    return () => clearInterval(interval);
  }, [canRotate, rotationSpeed, isHovered]);

  // Calculate skill positions in semi-circle (180 degrees)
  const getSkillPosition = (index, total) => {
    const startAngle = 180; // Start from left (180 degrees)
    const endAngle = 0;     // End at right (0 degrees)
    const angleStep = (startAngle - endAngle) / (total - 1);
    const angle = startAngle - (angleStep * index);
    const radian = (angle * Math.PI) / 180;
    
    const x = Math.cos(radian) * config.radius;
    const y = Math.sin(radian) * config.radius;
    
    return { x, y, angle };
  };

  return (
    <div className="relative flex items-end justify-center">
      <Motion.div 
        className={`relative ${config.containerSize} flex items-end justify-center`}
        animate={{ rotate: rotation }}
        transition={{ duration: 0.1, ease: "linear" }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Semi-circle background glow */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full rounded-t-full bg-gradient-to-t from-cyan-500/5 to-transparent blur-xl" />
        </div>

        {/* Center circle with title */}
        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 ${config.centerSize} bg-gradient-to-br from-gray-800 to-gray-900 rounded-full border-2 border-cyan-500/30 flex flex-col items-center justify-center z-20 backdrop-blur-sm`}>
          <h3 className={`${config.titleSize} font-bold text-white glow-text text-center`}>
            {title}
          </h3>
          {centerText && (
            <p className="text-xs text-cyan-400 text-center mt-1">
              {centerText}
            </p>
          )}
        </div>

        {/* Skills positioned in semi-circle */}
        {skills.map((skill, index) => {
          const { x, y } = getSkillPosition(index, skills.length);
          
          return (
            <Motion.div
              key={index}
              className="absolute bottom-0 left-1/2 cursor-pointer group z-10"
              style={{
                transform: `translate(${x - 40}px, ${y - 40}px)`
              }}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Skill container */}
              <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-cyan-600/50 flex items-center justify-center transition-all duration-300 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-500/20 backdrop-blur-sm">
                
                {/* Skill icon or image */}
                {skill.src ? (
                  <img
                    src={skill.src}
                    alt={skill.name}
                    className="w-10 h-10 object-contain transition-all duration-300 group-hover:scale-110"
                    style={{ filter: skill.glow ? `drop-shadow(0 0 8px ${skill.color || '#22d3ee'})` : 'none' }}
                  />
                ) : skill.icon ? (
                  <div className="text-3xl transition-all duration-300 group-hover:scale-110">
                    {skill.icon}
                  </div>
                ) : (
                  <div className="text-sm font-bold text-white transition-all duration-300 group-hover:text-cyan-400">
                    {skill.name.substring(0, 2)}
                  </div>
                )}

                {/* Hover glow effect */}
                <div className="absolute inset-0 rounded-full bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />
              </div>

              {/* Skill name tooltip */}
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-900/90 text-white text-xs rounded whitespace-nowrap backdrop-blur-sm border border-cyan-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-30">
                {skill.name}
                <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900/90 rotate-45 border-l border-t border-cyan-500/30" />
              </div>
            </Motion.div>
          );
        })}

        {/* Connecting arc line */}
        <svg className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-full pointer-events-none z-0">
          <path
            d={`M 50 100 A ${config.radius/4} ${config.radius/4} 0 0 1 ${100-50} 100`}
            stroke="rgba(34, 211, 238, 0.2)"
            strokeWidth="1"
            fill="none"
            strokeDasharray="5,5"
            className="animate-pulse"
          />
        </svg>

        {/* Rotation indicator */}
        {canRotate && (
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-cyan-400/60">
            {isHovered ? '⏸️ Paused' : '🔄 Rotating'}
          </div>
        )}
      </Motion.div>
    </div>
  );
};

export default SkillSemiCircle;