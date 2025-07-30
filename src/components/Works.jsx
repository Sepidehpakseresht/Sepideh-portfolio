import React, { useState, useRef } from "react";
import { motion as Motion } from "framer-motion";
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Html, useTexture } from '@react-three/drei';
import Modal from "./Modal";
import * as THREE from 'three';

// 3D Project Card Component
function ProjectCard3D({ position, project, index, onClick, isSelected }) {
  const meshRef = useRef();
  const [hovered, setHovered] = useState(false);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.005;
      
      // Floating animation
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + index * 2) * 0.1;
      
      // Scale and glow on hover
      const targetScale = hovered ? 1.1 : 1;
      meshRef.current.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
    }
  });

  const cardColors = ['#00ffff', '#8b5cf6', '#ff00ff'];

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.3}
      floatIntensity={0.3}
      floatingRange={[-0.1, 0.1]}
    >
      <group position={position}>
        {/* Main card mesh */}
        <mesh
          ref={meshRef}
          onPointerEnter={() => setHovered(true)}
          onPointerLeave={() => setHovered(false)}
          onClick={() => onClick(project)}
        >
          <boxGeometry args={[2.5, 1.5, 0.1]} />
          <meshStandardMaterial
            color={cardColors[index] || '#00ffff'}
            transparent
            opacity={hovered ? 0.8 : 0.6}
            emissive={cardColors[index] || '#00ffff'}
            emissiveIntensity={hovered ? 0.3 : 0.1}
          />
        </mesh>
        
        {/* Holographic border */}
        <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[2.6, 1.6, 0.02]} />
          <meshStandardMaterial
            color={cardColors[index] || '#00ffff'}
            transparent
            opacity={0.2}
            wireframe={true}
          />
        </mesh>

        {/* Project info overlay */}
        <Html
          position={[0, 0, 0.1]}
          transform
          occlude
          style={{
            width: '240px',
            height: '144px',
            pointerEvents: hovered ? 'auto' : 'none',
          }}
        >
          <div className={`w-full h-full p-4 rounded-lg transition-all duration-300 ${
            hovered ? 'glass-morphism backdrop-blur-md' : 'bg-transparent'
          }`}>
            {hovered && (
              <Motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-white text-center h-full flex flex-col justify-center"
              >
                <h3 className="text-lg font-bold mb-2 font-futuristic">
                  {project.title}
                </h3>
                <p className="text-xs text-gray-300 mb-3 line-clamp-2">
                  {project.description}
                </p>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onClick(project);
                  }}
                  className="futuristic-button px-3 py-1 text-xs rounded-full"
                >
                  View Details
                </button>
              </Motion.div>
            )}
          </div>
        </Html>
      </group>
    </Float>
  );
}

// 3D Works Scene
function WorksScene({ projects, onProjectClick }) {
  const positions = [
    [-3, 0, 0],
    [0, 0.5, -1],
    [3, -0.3, 0.5],
  ];

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#00ffff" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#8b5cf6" />
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#ff00ff"
      />
      
      {projects.map((project, index) => (
        <ProjectCard3D
          key={project.title}
          position={positions[index]}
          project={project}
          index={index}
          onClick={onProjectClick}
        />
      ))}
    </>
  );
}

const projects = [
  {
    title: "Techimmigrants Landing Page",
    image: "/immigrant.png",
    live: "https://tech-immigrants.vercel.app/",
    description:
      "A storytelling-based landing page that introduces immigrant tech professionals. Designed with a clean, dark-futuristic UI and smooth scroll experience.",
    tech: ["React", "Tailwind CSS", "Framer Motion"],
    category: "Landing Page"
  },
  {
    title: "Creative Agency",
    image: "/agancy.png",
    live: "https://agencylandingpage-theta.vercel.app/",
    description:
      "A fictional agency website built with responsive design, animations, and a modern aesthetic. Focused on typography and layout precision.",
    tech: ["HTML", "CSS", "JavaScript"],
    category: "Website"
  },
  {
    title: "Sepi Portfolio",
    image: "/portfolio.png",
    live: "#", 
    description:
      "My personal portfolio built with React, Tailwind CSS, and Framer Motion. Represents my growth as a front-end developer with a tree metaphor.",
    tech: ["React", "Tailwind CSS", "Three.js"],
    category: "Portfolio"
  },
];

export default function Works() {
  const [selected, setSelected] = useState(null);

  return (
    <section
      id="works"
      className="min-h-screen px-6 py-24 text-white relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-deep via-space-black to-space-medium" />
      
      {/* Animated background orbs */}
      <div className="absolute top-32 right-20 w-72 h-72 bg-neon-purple/10 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-neon-cyan/10 rounded-full blur-[140px] animate-pulse" />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <Motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 font-futuristic">
            <span className="holographic-text">My Works</span>
          </h2>
          <p className="text-xl text-neon-cyan font-mono glow-text">
            Interactive 3D project showcase
          </p>
        </Motion.div>

        {/* 3D Project Display */}
        <div className="h-[600px] w-full mb-12">
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
            <WorksScene projects={projects} onProjectClick={setSelected} />
          </Canvas>
        </div>

        {/* Project Stats */}
        <Motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, staggerChildren: 0.1 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Projects Completed", value: "15+" },
            { label: "Technologies Used", value: "8+" },
            { label: "Lines of Code", value: "10K+" }
          ].map((stat, index) => (
            <Motion.div
              key={stat.label}
              className="glass-morphism rounded-xl p-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-3xl font-bold text-neon-cyan mb-2 font-futuristic">
                {stat.value}
              </div>
              <div className="text-gray-400 font-mono text-sm">
                {stat.label}
              </div>
            </Motion.div>
          ))}
        </Motion.div>

        {/* Instructions */}
        <Motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-neon-cyan font-mono text-sm mb-4">
            🖱️ Hover over the floating cards to explore my projects
          </p>
          <div className="flex justify-center gap-4 text-xs text-gray-500">
            <span>• Interactive 3D Cards</span>
            <span>• Holographic Previews</span>
            <span>• Click for Details</span>
          </div>
        </Motion.div>
      </div>

      {/* Enhanced Modal */}
      <Modal isOpen={selected !== null} onClose={() => setSelected(null)}>
        {selected && (
          <Motion.div
            className="space-y-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative rounded-xl overflow-hidden">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-60 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-space-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="glass-morphism px-3 py-1 rounded-full text-xs text-neon-cyan">
                  {selected.category}
                </span>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-3 font-futuristic holographic-text">
                {selected.title}
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                {selected.description}
              </p>
              
              {/* Tech Stack */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-neon-cyan mb-2">Tech Stack:</h4>
                <div className="flex flex-wrap gap-2">
                  {selected.tech?.map((tech, index) => (
                    <span
                      key={index}
                      className="glass-morphism px-2 py-1 rounded text-xs text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {selected.live !== "#" && (
                <Motion.a
                  href={selected.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="futuristic-button inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  🔗 View Live Project
                </Motion.a>
              )}
            </div>
          </Motion.div>
        )}
      </Modal>
    </section>
  );
}
