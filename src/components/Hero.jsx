import { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, OrbitControls } from '@react-three/drei';

function NeonOrb({ mouse }) {
  const ref = useRef();
  useFrame(() => {
    if (ref.current && mouse.current) {
      // Subtle parallax effect
      ref.current.position.x = mouse.current.x * 0.5;
      ref.current.position.y = mouse.current.y * 0.5;
    }
  });
  return (
    <Sphere ref={ref} args={[1, 32, 32]}>
      <meshPhysicalMaterial
        color="#00D4FF"
        emissive="#00D4FF"
        emissiveIntensity={0.7}
        roughness={0.2}
        metalness={0.8}
        clearcoat={1}
        transparent
        opacity={0.95}
      />
    </Sphere>
  );
}

const Hero = () => {
  const mouse = useRef({ x: 0, y: 0 });
  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouse.current = {
      x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
      y: -((e.clientY - rect.top) / rect.height - 0.5) * 2,
    };
  };

  return (
    <section
      id="home"
      className="relative w-full max-w-7xl mx-auto px-6 py-32 min-h-[70vh] flex flex-col lg:flex-row items-center justify-between"
      onMouseMove={handleMouseMove}
    >
      {/* Left: Minimal Intro */}
      <div className="flex-1 flex flex-col gap-8 items-start justify-center max-w-xl">
        <motion.h1
          className="text-5xl font-futura font-bold text-white mb-2"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="neon-text-blue">Sepideh Pakseresht</span>
        </motion.h1>
        <motion.h2
          className="text-xl text-gray-300 font-medium mb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Front-End Developer & UI Engineer
        </motion.h2>
        <motion.p
          className="text-gray-400 text-lg mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          I build minimal, interactive, and futuristic web experiences with React, Three.js, and Tailwind CSS.
        </motion.p>
        <motion.a
          href="#works"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.97 }}
          className="group relative inline-flex items-center gap-3 px-7 py-3 glass rounded-full text-white font-semibold text-lg shadow-neon-blue hover:shadow-neon-pink transition-all duration-300"
        >
          <span>View My Work</span>
          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </motion.a>
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
              whileHover={{ scale: 1.15, boxShadow: "0 0 8px #00D4FF" }}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-neon-blue hover:text-white hover:shadow-neon-blue transition-all duration-300"
            >
              <social.icon className="text-lg" />
            </motion.a>
          ))}
        </div>
      </div>
      {/* Right: Minimal 3D Orb */}
      <div className="flex-1 flex items-center justify-center w-full h-72 lg:h-96">
        <Canvas camera={{ position: [0, 0, 3.5], fov: 60 }} style={{ width: '100%', height: '100%' }}>
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={0.7} color="#00D4FF" />
          <NeonOrb mouse={mouse} />
          <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
