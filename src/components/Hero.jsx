import { motion as Motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Html, Box } from '@react-three/drei';
import { useRef } from 'react';

// 3D Terminal Component
function FloatingTerminal() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005;
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime) * 0.1;
    }
  });

  return (
    <Float
      speed={1.5}
      rotationIntensity={0.3}
      floatIntensity={1}
      floatingRange={[-0.3, 0.3]}
    >
      <group>
        {/* Terminal window */}
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <boxGeometry args={[3, 2, 0.1]} />
          <meshStandardMaterial
            color="#1a1a1a"
            transparent
            opacity={0.8}
            emissive="#00ffff"
            emissiveIntensity={0.1}
          />
        </mesh>
        
        {/* Terminal screen */}
        <mesh position={[0, 0, 0.06]}>
          <boxGeometry args={[2.8, 1.8, 0.02]} />
          <meshStandardMaterial
            color="#000000"
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Terminal content */}
        <Html
          position={[0, 0, 0.1]}
          transform
          occlude
          style={{
            width: '280px',
            height: '180px',
            pointerEvents: 'none',
          }}
        >
          <div className="w-full h-full bg-black p-3 font-mono text-xs text-green-400 rounded">
            <div className="mb-1 text-cyan-400">sepideh@dev:~$ whoami</div>
            <div className="mb-1">Front-End Developer</div>
            <div className="mb-1 text-cyan-400">sepideh@dev:~$ skills --list</div>
            <div className="mb-1">React, JavaScript, CSS, 3D</div>
            <div className="text-cyan-400">sepideh@dev:~$ create --magic</div>
            <div className="animate-pulse">█</div>
          </div>
        </Html>
      </group>
    </Float>
  );
}

// Floating Code Editor Component
function FloatingCodeEditor() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.008;
      meshRef.current.position.x += Math.sin(state.clock.elapsedTime * 0.5) * 0.05;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.4}
      floatIntensity={1.2}
      floatingRange={[-0.2, 0.2]}
    >
      <group position={[2, -1, -1]}>
        <mesh ref={meshRef}>
          <boxGeometry args={[2.5, 1.8, 0.1]} />
          <meshStandardMaterial
            color="#2d3748"
            transparent
            opacity={0.7}
            emissive="#8b5cf6"
            emissiveIntensity={0.2}
          />
        </mesh>

        <Html
          position={[0, 0, 0.1]}
          transform
          occlude
          style={{
            width: '240px',
            height: '170px',
            pointerEvents: 'none',
          }}
        >
          <div className="w-full h-full bg-gray-900 p-2 font-mono text-xs rounded">
            <div className="text-purple-400">const</div>
            <div className="text-blue-400 ml-2">Portfolio</div>
            <div className="text-white ml-2">= () => {</div>
            <div className="text-green-400 ml-4">return (</div>
            <div className="text-red-400 ml-6">&lt;div&gt;</div>
            <div className="text-yellow-400 ml-8">Magic!</div>
            <div className="text-red-400 ml-6">&lt;/div&gt;</div>
            <div className="text-green-400 ml-4">);</div>
            <div className="text-white ml-2">};</div>
          </div>
        </Html>
      </group>
    </Float>
  );
}

// Floating Programming Symbols
function FloatingSymbols() {
  const symbols = ['{ }', '< />', '[ ]', '( )', '=>', '&&'];
  
  return (
    <>
      {symbols.map((symbol, index) => (
        <Float
          key={symbol}
          speed={1.5 + index * 0.2}
          rotationIntensity={0.5}
          floatIntensity={1}
          floatingRange={[-0.15, 0.15]}
        >
          <Text
            position={[
              -3 + index * 1.2,
              1 + Math.sin(index) * 0.5,
              -2 + Math.cos(index) * 0.5
            ]}
            fontSize={0.4 + index * 0.1}
            color={['#00ffff', '#ff6b6b', '#4ecdc4', '#feca57', '#ff9ff3', '#54a0ff'][index]}
            anchorX="center"
            anchorY="middle"
            font="/fonts/FiraCode-Regular.woff"
          >
            {symbol}
          </Text>
        </Float>
      ))}
    </>
  );
}

// Creative Brush Component
function FloatingBrush() {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.01;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * 1.5) * 0.08;
    }
  });

  return (
    <Float
      speed={1.8}
      rotationIntensity={0.6}
      floatIntensity={1.3}
      floatingRange={[-0.2, 0.2]}
    >
      <group position={[-2, -0.5, 1]}>
        {/* Brush handle */}
        <mesh ref={meshRef}>
          <cylinderGeometry args={[0.05, 0.08, 1.5, 8]} />
          <meshStandardMaterial
            color="#8B4513"
            transparent
            opacity={0.8}
          />
        </mesh>
        
        {/* Brush tip */}
        <mesh position={[0, 0.8, 0]}>
          <coneGeometry args={[0.12, 0.3, 8]} />
          <meshStandardMaterial
            color="#ff6b6b"
            transparent
            opacity={0.7}
            emissive="#ff6b6b"
            emissiveIntensity={0.3}
          />
        </mesh>
        
        {/* Paint drops */}
        {[...Array(3)].map((_, i) => (
          <mesh key={i} position={[Math.random() * 0.4 - 0.2, 1.1, Math.random() * 0.4 - 0.2]}>
            <sphereGeometry args={[0.03, 8, 8]} />
            <meshStandardMaterial
              color={['#ff6b6b', '#4ecdc4', '#feca57'][i]}
              transparent
              opacity={0.8}
            />
          </mesh>
        ))}
      </group>
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

      {/* 3D Coding Scene Canvas */}
      <div className="absolute inset-0 z-5">
        <Canvas camera={{ position: [0, 0, 8], fov: 60 }}>
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />
          
          <FloatingTerminal />
          <FloatingCodeEditor />
          <FloatingSymbols />
          <FloatingBrush />
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
              'Creative Coder & Digital Artist 🎨',
              2000,
              'React Developer & 3D Enthusiast 🚀',
              2000,
              'Building Beautiful Experiences 💫',
              2000,
              'Code + Creativity = Magic ✨',
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
            <span className="relative z-10">View My Code</span>
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

        {/* Coding stats */}
        <Motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[
            { label: "Lines of Code", value: "10K+" },
            { label: "Projects Built", value: "15+" },
            { label: "Technologies", value: "8+" },
            { label: "Creative Ideas", value: "∞" }
          ].map((stat, index) => (
            <Motion.div
              key={stat.label}
              className="glass-morphism rounded-lg p-4 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div className="text-neon-cyan font-bold text-lg mb-1 font-futuristic">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs font-mono">
                {stat.label}
              </div>
            </Motion.div>
          ))}
        </Motion.div>

        {/* Futuristic scroll indicator */}
        <Motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <div className="flex flex-col items-center">
            <div className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center">
              <Motion.div
                className="w-1 h-3 bg-neon-cyan rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </div>
            <p className="text-neon-cyan text-sm mt-2 font-mono">Scroll to Explore</p>
          </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
