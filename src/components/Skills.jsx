import React, { useRef, useState } from "react";
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Html } from '@react-three/drei';
import { motion as Motion } from 'framer-motion';
import * as THREE from 'three';

// 3D Code Block Component for each skill
function SkillCodeBlock({ position, skill, index, isHovered, onHover, onLeave }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.008;
      meshRef.current.rotation.y += 0.012;
      
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index * 1.5) * 0.15;
      
      // Scale on hover
      const targetScale = hovered ? 1.2 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.4}
      floatIntensity={0.8}
      floatingRange={[-0.2, 0.2]}
    >
      <group position={position}>
        {/* Code block container */}
        <mesh
          ref={meshRef}
          onPointerEnter={() => {
            setHovered(true);
            onHover(skill);
          }}
          onPointerLeave={() => {
            setHovered(false);
            onLeave();
          }}
        >
          <boxGeometry args={[2.2, 1.4, 0.15]} />
          <meshStandardMaterial
            color={skill.color}
            transparent
            opacity={hovered ? 0.8 : 0.6}
            emissive={skill.color}
            emissiveIntensity={hovered ? 0.4 : 0.2}
          />
        </mesh>
        
        {/* Code syntax overlay */}
        <Html
          position={[0, 0, 0.1]}
          transform
          occlude
          style={{
            width: '220px',
            height: '140px',
            pointerEvents: hovered ? 'auto' : 'none',
          }}
        >
          <div className={`w-full h-full p-3 rounded-lg transition-all duration-300 ${
            hovered ? 'glass-morphism backdrop-blur-md' : 'bg-transparent'
          }`}>
            {hovered && (
              <Motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-center h-full flex flex-col justify-center"
              >
                <div className="font-mono text-xs mb-2" style={{ color: skill.color }}>
                  {skill.codeSnippet}
                </div>
                <h3 className="text-sm font-bold mb-1 font-futuristic">
                  {skill.name}
                </h3>
                <div className="text-xs text-gray-300">
                  {skill.experience} experience
                </div>
              </Motion.div>
            )}
          </div>
        </Html>

        {/* Skill name floating above when hovered */}
        {hovered && (
          <Text
            position={[0, 1, 0]}
            fontSize={0.3}
            color={skill.color}
            anchorX="center"
            anchorY="middle"
            font="/fonts/FiraCode-Regular.woff"
          >
            {skill.name}
          </Text>
        )}

        {/* Glowing particles around the block */}
        {hovered && [...Array(6)].map((_, i) => (
          <mesh
            key={i}
            position={[
              (Math.random() - 0.5) * 3,
              (Math.random() - 0.5) * 2,
              (Math.random() - 0.5) * 0.5
            ]}
          >
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshStandardMaterial
              color={skill.color}
              transparent
              opacity={0.8}
              emissive={skill.color}
              emissiveIntensity={0.5}
            />
          </mesh>
        ))}
      </group>
    </Float>
  );
}

// IDE Window Component
function FloatingIDE({ position }) {
  const meshRef = useRef();
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 0.8) * 0.1;
    }
  });

  return (
    <Float
      speed={1.2}
      rotationIntensity={0.3}
      floatIntensity={0.6}
      floatingRange={[-0.15, 0.15]}
    >
      <group position={position}>
        <mesh ref={meshRef}>
          <boxGeometry args={[3, 2.2, 0.1]} />
          <meshStandardMaterial
            color="#1e1e1e"
            transparent
            opacity={0.8}
            emissive="#007acc"
            emissiveIntensity={0.2}
          />
        </mesh>

        <Html
          position={[0, 0, 0.1]}
          transform
          occlude
          style={{
            width: '300px',
            height: '220px',
            pointerEvents: 'none',
          }}
        >
          <div className="w-full h-full bg-gray-900 p-3 font-mono text-xs rounded">
            <div className="flex items-center mb-2 pb-1 border-b border-gray-700">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              </div>
              <div className="ml-3 text-gray-400">Portfolio.jsx</div>
            </div>
            <div className="text-blue-400">import React from 'react';</div>
            <div className="text-purple-400">const Portfolio = () =&gt; {'{'}</div>
            <div className="text-green-400 ml-2">return (</div>
            <div className="text-red-400 ml-4">&lt;div className=&quot;magic&quot;&gt;</div>
            <div className="text-yellow-400 ml-6">✨ Creating...</div>
            <div className="text-red-400 ml-4">&lt;/div&gt;</div>
            <div className="text-green-400 ml-2">);</div>
            <div className="text-purple-400">{'};'}</div>
          </div>
        </Html>
      </group>
    </Float>
  );
}

// 3D Skills Scene
function SkillsScene({ skills, hoveredSkill, setHoveredSkill }) {
  const positions = [
    [-3.5, 1, 0],
    [-1.5, -0.5, -1],
    [0, 1.2, 0.5],
    [1.5, -0.8, -0.5],
    [3.5, 0.5, 0],
    [-2.5, -1.8, 1],
    [2.5, -1.5, -1],
  ];

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.8} color="#ff6b6b" />
      <pointLight position={[0, 15, -5]} intensity={0.6} color="#4ecdc4" />
      
      {/* Floating IDE in the background */}
      <FloatingIDE position={[0, 0, -3]} />
      
      {skills.map((skill, index) => (
        <SkillCodeBlock
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
    color: "#e34c26",
    experience: "3+ years",
    codeSnippet: "<div class='hero'>\n  <h1>Hello World</h1>\n</div>"
  },
  {
    name: "CSS",
    description: "Advanced styling, animations, and responsive design",
    level: 90,
    color: "#1572b6",
    experience: "3+ years",
    codeSnippet: ".hero {\n  display: flex;\n  animation: glow 2s;\n}"
  },
  {
    name: "JavaScript",
    description: "ES6+, async programming, and modern JS features",
    level: 85,
    color: "#f7df1e",
    experience: "2+ years",
    codeSnippet: "const magic = () => {\n  return 'Amazing!';\n};"
  },
  {
    name: "React",
    description: "Hooks, context, and modern React patterns",
    level: 88,
    color: "#61dafb",
    experience: "2+ years",
    codeSnippet: "const App = () => {\n  return <Magic />;\n};"
  },
  {
    name: "Tailwind",
    description: "Utility-first CSS framework mastery",
    level: 92,
    color: "#06b6d4",
    experience: "2+ years",
    codeSnippet: "<div className=\n  'bg-gradient-to-r\n   from-cyan-500' />"
  },
  {
    name: "Three.js",
    description: "3D graphics and interactive experiences",
    level: 75,
    color: "#000000",
    experience: "1+ year",
    codeSnippet: "const scene = new\n  THREE.Scene();\nscene.add(mesh);"
  },
  {
    name: "Git",
    description: "Version control and collaborative development",
    level: 85,
    color: "#f05032",
    experience: "2+ years",
    codeSnippet: "git add .\ngit commit -m\n  'Add magic ✨'"
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
            <span className="holographic-text">My Tech Stack</span>
          </h2>
          <p className="text-xl text-neon-cyan font-mono glow-text">
            Interactive 3D code showcase
          </p>
        </Motion.div>

        {/* 3D Skills Display */}
        <div className="h-[600px] w-full mb-12">
          <Canvas camera={{ position: [0, 0, 10], fov: 60 }}>
            <SkillsScene 
              skills={skills} 
              hoveredSkill={hoveredSkill} 
              setHoveredSkill={setHoveredSkill} 
            />
          </Canvas>
        </div>

        {/* Skill Details Panel */}
        <Motion.div
          className="glass-morphism rounded-2xl p-8 max-w-3xl mx-auto"
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
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-3xl font-bold mb-4 font-futuristic" style={{ color: hoveredSkill.color }}>
                    {hoveredSkill.name}
                  </h3>
                  <p className="text-lg text-gray-300 mb-4">
                    {hoveredSkill.description}
                  </p>
                  <div className="text-neon-cyan font-mono text-sm mb-4">
                    Experience: {hoveredSkill.experience}
                  </div>
                </div>
                
                <div>
                  {/* Code snippet display */}
                  <div className="bg-gray-900 rounded-lg p-4 mb-4">
                    <div className="text-xs text-gray-400 mb-2">Code Example:</div>
                    <pre className="text-sm font-mono" style={{ color: hoveredSkill.color }}>
                      {hoveredSkill.codeSnippet}
                    </pre>
                  </div>
                  
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
                </div>
              </div>
            </Motion.div>
          ) : (
            <div className="text-center">
              <h3 className="text-2xl font-bold mb-4 text-neon-cyan font-futuristic">
                Hover over a code block
              </h3>
              <p className="text-gray-400 font-mono">
                Explore my coding skills in 3D interactive format
              </p>
              <div className="mt-6 flex justify-center">
                <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
                  <div className="text-green-400">// Welcome to my skills showcase</div>
                  <div className="text-blue-400">const skills = await loadSkills();</div>
                  <div className="text-yellow-400">console.log('Hover to explore!');</div>
                </div>
              </div>
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
          <p className="text-neon-cyan font-mono text-sm mb-4">
            🖱️ Hover over the floating code blocks to explore my technical skills
          </p>
          <div className="flex justify-center gap-4 text-xs text-gray-500">
            <span>• Interactive Code Blocks</span>
            <span>• Real Code Snippets</span>
            <span>• Live IDE Preview</span>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Skills;
