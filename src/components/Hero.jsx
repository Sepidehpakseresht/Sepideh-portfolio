import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaDownload } from 'react-icons/fa';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function Natural3DElement() {
  const group = useRef();
  const innerGroup = useRef();
  
  useFrame((state) => {
    if (group.current) {
      // Smooth, natural rotation
      group.current.rotation.y += 0.002;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
    if (innerGroup.current) {
      // Subtle inner movement
      innerGroup.current.rotation.z += 0.003;
      innerGroup.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });
  
  return (
    <group ref={group}>
      {/* Main outer ring - organic shape */}
      <mesh>
        <torusGeometry args={[1.5, 0.3, 16, 32]} />
        <meshPhysicalMaterial
          color="#F96902"
          roughness={0.4}
          metalness={0.6}
          clearcoat={0.8}
          clearcoatRoughness={0.2}
          transmission={0.3}
          thickness={0.5}
          transparent
          opacity={0.9}
        />
      </mesh>
      
      {/* Inner floating elements */}
      <group ref={innerGroup}>
        {/* Central sphere */}
        <mesh position={[0, 0, 0]}>
          <sphereGeometry args={[0.4, 32, 32]} />
          <meshPhysicalMaterial
            color="#fff"
            roughness={0.2}
            metalness={0.8}
            clearcoat={0.9}
            clearcoatRoughness={0.1}
            transmission={0.4}
            thickness={0.3}
            transparent
            opacity={0.95}
          />
        </mesh>
        
        {/* Orbiting spheres */}
        {[...Array(6)].map((_, i) => (
          <mesh
            key={i}
            position={[
              Math.cos(i * Math.PI / 3) * 0.8,
              Math.sin(i * Math.PI / 3) * 0.8,
              0
            ]}
          >
            <sphereGeometry args={[0.15, 16, 16]} />
            <meshPhysicalMaterial
              color="#F96902"
              roughness={0.3}
              metalness={0.7}
              clearcoat={0.8}
              clearcoatRoughness={0.15}
              transmission={0.2}
              thickness={0.2}
              transparent
              opacity={0.9}
            />
          </mesh>
        ))}
      </group>
      
      {/* Floating particles - more natural distribution */}
      {[...Array(20)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(i * Math.PI / 10) * (2 + Math.sin(i * 0.5) * 0.5),
            Math.sin(i * Math.PI / 10) * (1.5 + Math.cos(i * 0.3) * 0.3),
            Math.sin(i * Math.PI / 10) * (1 + Math.cos(i * 0.7) * 0.5)
          ]}
        >
          <sphereGeometry args={[0.03 + Math.sin(i) * 0.02, 8, 8]} />
          <meshPhysicalMaterial
            color="#F96902"
            roughness={0.2}
            metalness={0.6}
            clearcoat={0.8}
            clearcoatRoughness={0.1}
            transmission={0.3}
            transparent
            opacity={0.7 + Math.sin(i * 0.5) * 0.2}
          />
        </mesh>
      ))}
      
      {/* Subtle glow effect */}
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[2.2, 16, 16]} />
        <meshBasicMaterial
          color="#F96902"
          transparent
          opacity={0.05}
        />
      </mesh>
      
      {/* Natural shadow */}
      <mesh position={[0, -2, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2.5, 32]} />
        <meshBasicMaterial color="#000" transparent opacity={0.15} />
      </mesh>
    </group>
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
      <div className="flex-1 flex flex-col gap-8 items-start justify-center max-w-xl">
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
      {/* Right: Natural 3D Element */}
      <div className="flex-1 flex items-center justify-center w-full h-72 lg:h-96">
        <Canvas camera={{ position: [0, 0, 4], fov: 60 }} style={{ width: '100%', height: '100%' }} shadows>
          <ambientLight intensity={0.4} />
          <directionalLight position={[2, 4, 2]} intensity={0.8} color="#F96902" castShadow />
          <pointLight position={[-2, 2, 2]} intensity={0.5} color="#F96902" />
          <pointLight position={[0, -2, 2]} intensity={0.4} color="#F96902" />
          <pointLight position={[0, 0, 3]} intensity={0.3} color="#fff" />
          <Natural3DElement />
          <OrbitControls 
            enableZoom={false} 
            enablePan={false} 
            autoRotate 
            autoRotateSpeed={0.3}
            enableDamping
            dampingFactor={0.05}
            rotateSpeed={0.2}
          />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
