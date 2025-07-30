import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import ThreeScene from './ThreeJS/ThreeScene';
import GlowingArc from './ThreeJS/GlowingArc';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-futuristic">
      {/* Three.js Background */}
      <div className="absolute inset-0 z-0">
        <ThreeScene>
          <GlowingArc position={[0, 0, 0]} scale={1.5} color="#00D4FF" />
          <GlowingArc position={[4, 2, 0]} scale={0.8} color="#FF0080" />
          <GlowingArc position={[-3, -1, 0]} scale={1.2} color="#7B2CBF" />
        </ThreeScene>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[600px]">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="space-y-10 flex flex-col justify-center h-full"
          >
            {/* Staggered Name */}
            <div className="space-y-2 text-left">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-6xl lg:text-7xl font-futura font-bold text-white neon-text-blue leading-tight"
              >
                Sepideh
              </motion.h1>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-6xl lg:text-7xl font-futura font-bold text-white neon-text-pink ml-8 leading-tight"
              >
                Pakseresht
              </motion.h1>
            </div>

            {/* Subtitle */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="space-y-4 text-left"
            >
              <p className="text-xl lg:text-2xl text-gray-300 font-light">
                Creative Front-End Developer
              </p>
              <div className="text-lg text-neon-blue font-mono">
                <TypeAnimation
                  sequence={[
                    'React + Tailwind Master',
                    2000,
                    'Three.js Enthusiast',
                    2000,
                    'UI/UX Designer',
                    2000,
                    'Always learning. Always growing.',
                    2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="neon-text-blue"
                />
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-gray-400 text-lg leading-relaxed max-w-xl text-left"
            >
              Crafting immersive digital experiences with cutting-edge technologies. 
              Specializing in modern web development with a focus on performance and user experience.
            </motion.p>

            {/* CTA Button & Socials */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-6 items-start"
            >
              <motion.a
                href="#works"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-pink rounded-full text-white font-semibold text-lg shadow-neon-blue hover:shadow-neon-pink transition-all duration-300"
              >
                <span>View My Work</span>
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 rounded-full bg-white/10 backdrop-blur-sm"></div>
              </motion.a>

              {/* Social Links */}
              <div className="flex gap-4">
                {[
                  { icon: FaGithub, href: "https://github.com/Sepidehpakseresht", label: "GitHub" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/sepideh-pakseresht-1b3967239", label: "LinkedIn" },
                  { icon: FaEnvelope, href: "mailto:sepiidehpakseresht@gmail.com", label: "Email" }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 + index * 0.1 }}
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 rounded-full glass flex items-center justify-center text-neon-blue hover:text-white hover:shadow-neon-blue transition-all duration-300"
                  >
                    <social.icon className="text-xl" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - 3D Element */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative h-[400px] lg:h-[500px] flex items-center justify-center"
          >
            <div className="relative w-full h-full flex items-center justify-center">
              <ThreeScene className="w-full h-full">
                <GlowingArc position={[0, 0, 0]} scale={2} color="#00D4FF" />
                <GlowingArc position={[2, 1, 0]} scale={1.2} color="#FF0080" />
                <GlowingArc position={[-1.5, -0.5, 0]} scale={1.5} color="#7B2CBF" />
              </ThreeScene>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-neon-blue rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
