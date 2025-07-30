import { motion as Motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Canvas } from '@react-three/fiber';
import { Float, Text3D, Center } from '@react-three/drei';
import { useRef } from 'react';

// 3D Holographic Avatar Component
function HolographicAvatar() {
  const meshRef = useRef();

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1}
      floatingRange={[-0.2, 0.2]}
    >
      <mesh ref={meshRef} position={[0, 0, 0]}>
        <icosahedronGeometry args={[1.5, 1]} />
        <meshStandardMaterial
          color="#00ffff"
          transparent
          opacity={0.3}
          emissive="#00ffff"
          emissiveIntensity={0.3}
          wireframe={true}
        />
      </mesh>
      <mesh position={[0, 0, 0]} scale={0.8}>
        <dodecahedronGeometry args={[1.5, 0]} />
        <meshStandardMaterial
          color="#8b5cf6"
          transparent
          opacity={0.2}
          emissive="#8b5cf6"
          emissiveIntensity={0.2}
        />
      </mesh>
    </Float>
  );
}

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
      {/* Futuristic background layers */}
      <div className="absolute inset-0 bg-gradient-to-b from-space-black via-space-dark to-space-deep" />
      
      {/* Multiple glowing orbs */}
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-r from-neon-cyan/20 via-neon-purple/20 to-neon-pink/20 blur-[120px] animate-pulse" />
      </div>
      
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="w-[400px] h-[400px] rounded-full bg-neon-cyan/10 blur-[80px] animate-glow" />
      </div>

      {/* 3D Holographic rings */}
      <Motion.div
        className="absolute top-1/2 left-1/2 w-[320px] h-[320px] md:w-[400px] md:h-[400px] border-2 border-neon-cyan/30 rounded-full animate-rotate-slow blur-[1px] z-0"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, duration: 1.5 }}
      />
      
      <Motion.div
        className="absolute top-1/2 left-1/2 w-[280px] h-[280px] md:w-[350px] md:h-[350px] border border-neon-purple/20 rounded-full animate-spin z-0"
        initial={{ opacity: 0, scale: 0.3 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 1.5 }}
      />

      {/* 3D Avatar Canvas */}
      <div className="absolute right-8 top-1/2 transform -translate-y-1/2 w-48 h-48 md:w-64 md:h-64 z-5 hidden lg:block">
        <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
          <HolographicAvatar />
        </Canvas>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <Motion.h1
          className="text-white text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-bold mb-6 font-futuristic"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="holographic-text">Hi, I'm Sepideh</span> 
          <Motion.span 
            className="inline-block ml-4 text-6xl"
            animate={{ 
              rotate: [0, 20, -20, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            👋
          </Motion.span>
        </Motion.h1>

        <Motion.div
          className="text-neon-cyan text-xl sm:text-2xl md:text-3xl font-mono mb-8 glow-text"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <TypeAnimation
            sequence={[
              'Creative Front-End Dev 🌱',
              2000,
              'React + Tailwind Master 🌪️',
              2000,
              'Always learning. Always growing. 🌿',
              2000,
              'Building the Future 🚀',
              2000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </Motion.div>

        <Motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-12"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <Motion.a
            href="#works"
            className="futuristic-button px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 relative overflow-hidden"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10">View My Work</span>
          </Motion.a>

          <div className="flex gap-6 text-neon-cyan text-3xl">
            <Motion.a
              href="https://github.com/Sepidehpakseresht"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-purple transition-all duration-300 hover:scale-110"
              whileHover={{ y: -5 }}
            >
              <FaGithub className="neon-glow-cyan" />
            </Motion.a>

            <Motion.a
              href="https://www.linkedin.com/in/sepideh-pakseresht-1b3967239"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-purple transition-all duration-300 hover:scale-110"
              whileHover={{ y: -5 }}
            >
              <FaLinkedin className="neon-glow-cyan" />
            </Motion.a>

            <Motion.a
              href="mailto:sepiidehpakseresht@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-neon-purple transition-all duration-300 hover:scale-110"
              whileHover={{ y: -5 }}
            >
              <FaEnvelope className="neon-glow-cyan" />
            </Motion.a>
          </div>
        </Motion.div>

        {/* Futuristic scroll indicator */}
        <Motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="flex flex-col items-center">
            <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
              <Motion.div
                className="w-1 h-3 bg-neon-cyan rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            <p className="text-neon-cyan text-sm mt-2 font-mono">Scroll</p>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
