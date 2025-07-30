import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaDownload } from 'react-icons/fa';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function CodeBracket3D() {
  const group = useRef();
  
  useFrame(() => {
    if (group.current) {
      // Subtle automatic rotation
      group.current.rotation.x += 0.002;
      group.current.rotation.y += 0.003;
    }
  });
  
  return (
    <group ref={group}>
      {/* Main bracket - simplified for better rotation */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.8, 0.8, 0.2, 32, 1, true, 0, Math.PI]} />
        <meshPhysicalMaterial
          color="#F96902"
          roughness={0.18}
          metalness={0.6}
          clearcoat={0.7}
          clearcoatRoughness={0.1}
          transmission={0.7}
          thickness={0.4}
          ior={1.2}
          reflectivity={0.3}
          transparent
          opacity={0.95}
        />
      </mesh>
      
      {/* Additional bracket elements for more complex shape */}
      <mesh position={[0.4, 0, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.6, 0.6, 0.15, 32, 1, true, 0, Math.PI]} />
        <meshPhysicalMaterial
          color="#F96902"
          roughness={0.18}
          metalness={0.6}
          clearcoat={0.7}
          clearcoatRoughness={0.1}
          transmission={0.7}
          thickness={0.4}
          ior={1.2}
          reflectivity={0.3}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Subtle shadow under bracket */}
      <mesh position={[0.2, -1.2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[1.2, 32]} />
        <meshBasicMaterial color="#000" transparent opacity={0.15} />
      </mesh>
    </group>
  );
}

function FloatingCube() {
  const cubeRef = useRef();
  
  useFrame((state) => {
    if (cubeRef.current) {
      // More pronounced rotation
      cubeRef.current.rotation.x += 0.015;
      cubeRef.current.rotation.y += 0.015;
      cubeRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.15;
    }
  });

  return (
    <mesh ref={cubeRef} position={[-2, 0, 0]}>
      <boxGeometry args={[0.8, 0.8, 0.8]} />
      <meshPhysicalMaterial
        color="#F96902"
        roughness={0.2}
        metalness={0.8}
        clearcoat={0.9}
        clearcoatRoughness={0.1}
        transmission={0.6}
        thickness={0.5}
        transparent
        opacity={0.8}
      />
    </mesh>
  );
}

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full max-w-7xl mx-auto px-6 py-32 min-h-[70vh] flex flex-col lg:flex-row items-center justify-between"
      style={{ background: '#0B0E13' }}
    >
      {/* Left: Modern Intro */}
      <div className="flex-1 flex flex-col gap-8 items-start justify-center max-w-xl relative">
        {/* Floating 3D Cube with rotation controls */}
        <div className="absolute -left-20 top-10 w-32 h-32 opacity-60">
          <Canvas camera={{ position: [0, 0, 3], fov: 50 }}>
            <ambientLight intensity={0.3} />
            <directionalLight position={[1, 1, 1]} intensity={0.5} color="#F96902" />
            <FloatingCube />
            <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={2} />
          </Canvas>
        </div>
        
        <motion.h1
          className="text-5xl md:text-6xl font-display font-extrabold text-white mb-2 leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm <span className="text-primary">Sepideh Pakseresht</span>
        </motion.h1>
        <motion.h2
          className="text-2xl md:text-3xl font-semibold text-white/80 mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Front-End Developer & UI Engineer
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg mb-6 max-w-lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          I create modern, interactive, and visually stunning web experiences using React, Three.js, and the latest UI trends.
        </motion.p>
        <div className="flex flex-col sm:flex-row gap-4 w-full">
          <motion.a
            href="#works"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group flex-1 flex items-center justify-center gap-3 px-7 py-3 glass rounded-full text-white font-semibold text-lg shadow-orange hover:shadow-orange transition-all duration-300 bg-primary/90"
          >
            <span>View My Work</span>
            <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
          </motion.a>
          <motion.a
            href="/resume.pdf"
            download
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="group flex-1 flex items-center justify-center gap-3 px-7 py-3 glass rounded-full text-primary font-semibold text-lg border-2 border-primary bg-white/90 hover:bg-primary hover:text-white hover:shadow-orange transition-all duration-300"
          >
            <FaDownload className="text-xl" />
            <span>Download Resume</span>
          </motion.a>
        </div>
        <div className="flex gap-3 mt-6">
          {[
            { icon: FaGithub, href: "https://github.com/Sepidehpakseresht", label: "GitHub" },
            { icon: FaLinkedin, href: "https://www.linkedin.com/in/sepideh-pakseresht-1b3967239", label: "LinkedIn" },
            { icon: FaEnvelope, href: "mailto:sepiidehpakseresht@gmail.com", label: "Email" }
          ].map((social, i) => (
            <motion.a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.15, boxShadow: "0 0 8px #F96902" }}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-primary hover:text-white hover:shadow-orange transition-all duration-300"
            >
              <social.icon className="text-lg" />
            </motion.a>
          ))}
        </div>
      </div>
      {/* Right: Interactive 3D Code Bracket with full rotation controls */}
      <div className="flex-1 flex items-center justify-center w-full h-72 lg:h-96">
        <Canvas camera={{ position: [0, 0, 4], fov: 60 }} style={{ width: '100%', height: '100%' }} shadows>
          <ambientLight intensity={0.4} />
          <directionalLight position={[2, 4, 2]} intensity={0.7} color="#F96902" castShadow />
          <CodeBracket3D />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={1}
            enableDamping
            dampingFactor={0.05}
            rotateSpeed={0.5}
          />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
