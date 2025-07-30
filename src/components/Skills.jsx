import React, { useRef, useState } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Html } from '@react-three/drei';
import { motion as Motion } from 'framer-motion';
import * as THREE from 'three';

// 3D Skill Orb Component
function SkillOrb({ position, skill, index, isHovered, onHover, onLeave }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.005;
      
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index) * 0.2;
      
      // Scale on hover
      const targetScale = hovered ? 1.3 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  const skillColors = {
    HTML: '#f97316',
    CSS: '#3b82f6',
    JavaScript: '#facc15',
    React: '#38bdf8',
    TailwindCSS: '#22d3ee',
    Bootstrap: '#c084fc',
    Git: '#f87171',
  };

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      floatingRange={[-0.1, 0.1]}
    >
      <mesh
        ref={meshRef}
        position={position}
        onPointerEnter={() => {
          setHovered(true);
          onHover(skill);
        }}
        onPointerLeave={() => {
          setHovered(false);
          onLeave();
        }}
      >
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial
          color={skillColors[skill.name] || '#00ffff'}
          transparent
          opacity={hovered ? 0.8 : 0.6}
          emissive={skillColors[skill.name] || '#00ffff'}
          emissiveIntensity={hovered ? 0.4 : 0.2}
          wireframe={false}
        />
      </mesh>
      
      {/* Skill name floating above */}
      {hovered && (
        <Html position={[position[0], position[1] + 1.5, position[2]]}>
          <div className="text-white text-center font-mono text-sm bg-space-dark/80 px-3 py-1 rounded-full backdrop-blur-sm border border-neon-cyan/30">
            {skill.name}
          </div>
        </Html>
      )}
    </Float>
  );
}

// 3D Skills Scene
function SkillsScene({ skills, hoveredSkill, setHoveredSkill }) {
  const positions = [
    [-3, 0, 0],
    [-1.5, 1, -1],
    [0, -0.5, 0.5],
    [1.5, 0.8, -0.5],
    [3, -0.3, 0],
    [-2, -1.5, 1],
    [2, -1.2, -1],
  ];

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
      
      {skills.map((skill, index) => (
        <SkillOrb
          key={skill.name}
          position={positions[index] || [0, 0, 0]}
          skill={skill}
          index={index}
          isHovered={hoveredSkill?.name === skill.name}
          onHover={setHoveredSkill}
          onLeave={() => setHoveredSkill(null)}
        />
      ))}
    </>
  );
}

const skills = [
  {
    name: "HTML",
    description: "Semantic markup and modern HTML5 features",
    level: 95,
    color: "#f97316"
  },
  {
    name: "CSS",
    description: "Advanced styling, animations, and responsive design",
    level: 90,
    color: "#3b82f6"
  },
  {
    name: "JavaScript",
    description: "ES6+, async programming, and modern JS features",
    level: 85,
    color: "#facc15"
  },
  {
    name: "React",
    description: "Hooks, context, and modern React patterns",
    level: 88,
    color: "#38bdf8"
  },
  {
    name: "TailwindCSS",
    description: "Utility-first CSS framework mastery",
    level: 92,
    color: "#22d3ee"
  },
  {
    name: "Bootstrap",
    description: "Responsive grid systems and components",
    level: 80,
    color: "#c084fc"
  },
  {
    name: "Git",
    description: "Version control and collaborative development",
    level: 85,
    color: "#f87171"
  },
];

const Skills = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section
      id="skills"
      className="min-h-screen px-6 py-24 text-white relative overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-deep via-space-medium to-space-deep" />
      
      {/* Glowing orbs background */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-neon-purple/10 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon-cyan/10 rounded-full blur-[120px] animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto">
        <Motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-futuristic">
            <span className="holographic-text">My Skills</span>
          </h2>
          <p className="text-xl text-neon-cyan font-mono glow-text">
            Interactive 3D skill showcase
          </p>
        </Motion.div>

        {/* 3D Skills Display */}
        <div className="h-[500px] w-full mb-12">
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
            <SkillsScene 
              skills={skills} 
              hoveredSkill={hoveredSkill} 
              setHoveredSkill={setHoveredSkill} 
            />
          </Canvas>
        </div>

        {/* Skill Details Panel */}
        <Motion.div
          className="glass-morphism rounded-2xl p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {hoveredSkill ? (
            <Motion.div
              key={hoveredSkill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="text-center"
            >
              <h3 className="text-3xl font-bold mb-4 font-futuristic" style={{ color: hoveredSkill.color }}>
                {hoveredSkill.name}
              </h3>
              <p className="text-lg text-gray-300 mb-6">
                {hoveredSkill.description}
              </p>
              
              {/* Skill Level Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm mb-2">
                  <span>Proficiency</span>
                  <span>{hoveredSkill.level}%</span>
                </div>
                <div className="w-full bg-space-dark rounded-full h-3 overflow-hidden">
                  <Motion.div
                    className="h-full rounded-full"
                    style={{ 
                      background: `linear-gradient(90deg, ${hoveredSkill.color}, ${hoveredSkill.color}80)`,
                      boxShadow: `0 0 20px ${hoveredSkill.color}40`
                    }}
                    initial={{ width: 0 }}
                    animate={{ width: `${hoveredSkill.level}%` }}
                    transition={{ duration: 1, delay: 0.2 }}
                  />
                </div>
              </div>
            </Motion.div>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-neon-cyan font-futuristic">
                Hover over a skill orb
              </h3>
              <p className="text-gray-400 font-mono">
                Explore my technical expertise in 3D
              </p>
            </div>
          )}
        </Motion.div>

        {/* Instructions */}
        <Motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-neon-cyan font-mono text-sm">
            🖱️ Hover over the floating orbs to explore my skills
          </p>
        </Motion.div>
      </div>
    </section>
  );
};

export default Skills;
