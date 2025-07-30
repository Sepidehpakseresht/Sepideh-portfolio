import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight, FaDownload } from 'react-icons/fa';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';

function CodeEditor3D() {
  const group = useRef();
  const codeLines = useRef();
  
  useFrame((state) => {
    if (group.current) {
      // Gentle rotation
      group.current.rotation.y += 0.002;
    }
    if (codeLines.current) {
      // Animated code typing effect
      codeLines.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });
  
  return (
    <group ref={group}>
      {/* Main Code Editor Window */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[3, 2.5, 0.2]} />
        <meshPhysicalMaterial
          color="#1e1e1e"
          roughness={0.3}
          metalness={0.2}
          clearcoat={0.6}
          clearcoatRoughness={0.2}
        />
      </mesh>
      
      {/* Editor Screen */}
      <mesh position={[0, 0, 0.11]}>
        <planeGeometry args={[2.8, 2.3]} />
        <meshBasicMaterial color="#0d1117" />
      </mesh>
      
      {/* Code Lines */}
      <group ref={codeLines} position={[0, 0, 0.12]}>
        {/* Line numbers */}
        {[...Array(8)].map((_, i) => (
          <mesh key={`line-${i}`} position={[-1.2, 0.8 - i * 0.2, 0]}>
            <planeGeometry args={[0.3, 0.02]} />
            <meshBasicMaterial color="#6e7681" />
          </mesh>
        ))}
        
        {/* Code content */}
        {[
          { text: "function", color: "#ff7b72", pos: [-0.8, 0.8, 0] },
          { text: "createPortfolio", color: "#d2a8ff", pos: [-0.8, 0.6, 0] },
          { text: "() {", color: "#ff7b72", pos: [-0.8, 0.4, 0] },
          { text: "  return", color: "#79c0ff", pos: [-0.8, 0.2, 0] },
          { text: "    <div>", color: "#ffa657", pos: [-0.8, 0, 0] },
          { text: "      <h1>Hello World</h1>", color: "#a371f7", pos: [-0.8, -0.2, 0] },
          { text: "    </div>", color: "#ffa657", pos: [-0.8, -0.4, 0] },
          { text: "}", color: "#ff7b72", pos: [-0.8, -0.6, 0] }
        ].map((line, i) => (
          <mesh key={`code-${i}`} position={line.pos}>
            <planeGeometry args={[1.8, 0.02]} />
            <meshBasicMaterial color={line.color} />
          </mesh>
        ))}
        
        {/* Cursor */}
        <mesh position={[-0.2, 0.1, 0.01]}>
          <planeGeometry args={[0.02, 0.15]} />
          <meshBasicMaterial color="#f96902" />
        </mesh>
      </group>
      
      {/* Window Title Bar */}
      <mesh position={[0, 1.2, 0.11]}>
        <planeGeometry args={[2.8, 0.2]} />
        <meshBasicMaterial color="#30363d" />
      </mesh>
      
      {/* Window Controls */}
      {[
        { pos: [-1.1, 1.2, 0.12], color: "#ff5f56" },
        { pos: [-0.9, 1.2, 0.12], color: "#ffbd2e" },
        { pos: [-0.7, 1.2, 0.12], color: "#27ca3f" }
      ].map((control, i) => (
        <mesh key={i} position={control.pos}>
          <sphereGeometry args={[0.04, 8, 8]} />
          <meshBasicMaterial color={control.color} />
        </mesh>
      ))}
      
      {/* Floating Code Particles */}
      {[...Array(12)].map((_, i) => (
        <mesh
          key={i}
          position={[
            Math.cos(i * Math.PI / 6) * 2.5,
            Math.sin(i * Math.PI / 6) * 1.5,
            Math.sin(i * Math.PI / 6) * 1.5
          ]}
        >
          <boxGeometry args={[0.1, 0.1, 0.1]} />
          <meshPhysicalMaterial
            color="#f96902"
            roughness={0.2}
            metalness={0.6}
            clearcoat={0.8}
            clearcoatRoughness={0.1}
            transparent
            opacity={0.8}
          />
        </mesh>
      ))}
      
      {/* Subtle shadow */}
      <mesh position={[0, -1.5, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <circleGeometry args={[2, 32]} />
        <meshBasicMaterial color="#000" transparent opacity={0.2} />
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
      {/* Right: 3D Code Editor */}
      <div className="flex-1 flex items-center justify-center w-full h-72 lg:h-96">
        <Canvas camera={{ position: [0, 0, 4], fov: 60 }} style={{ width: '100%', height: '100%' }} shadows>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 4, 2]} intensity={0.8} color="#F96902" castShadow />
          <pointLight position={[-2, 2, 2]} intensity={0.4} color="#F96902" />
          <pointLight position={[0, -2, 2]} intensity={0.3} color="#F96902" />
          <pointLight position={[0, 0, 3]} intensity={0.2} color="#fff" />
          <CodeEditor3D />
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
