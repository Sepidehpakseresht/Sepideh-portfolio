import { motion as Motion } from "framer-motion";

function Footer() {
  return (
    <Motion.footer
      className="relative bg-gradient-to-b from-space-deep to-space-black text-center py-12 text-white overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-t from-space-black via-space-deep/50 to-transparent" />
      
      {/* Glowing line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Main content */}
        <Motion.div
          className="glass-morphism rounded-2xl p-8 mb-8"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <Motion.div
            className="text-2xl font-bold mb-4 font-futuristic"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <span className="holographic-text">Sepideh Pakseresht</span>
          </Motion.div>
          
          <Motion.p
            className="text-neon-cyan font-mono mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            Front-End Developer • UI/UX Enthusiast • 3D Web Explorer
          </Motion.p>
          
          <Motion.div
            className="text-gray-400 text-sm"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.1 }}
          >
            Version 2.0 — <span className="text-neon-purple font-medium">Built with React, Three.js & Future Vision ✨</span>
          </Motion.div>
        </Motion.div>

        {/* Tech stack showcase */}
        <Motion.div
          className="flex flex-wrap justify-center gap-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3, staggerChildren: 0.1 }}
        >
          {['React', 'Three.js', 'Tailwind CSS', 'Framer Motion', 'Vite'].map((tech, index) => (
            <Motion.span
              key={tech}
              className="glass-morphism px-4 py-2 rounded-full text-xs font-mono text-neon-cyan hover:neon-glow-cyan transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 1.3 + index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {tech}
            </Motion.span>
          ))}
        </Motion.div>

        {/* Copyright and year */}
        <Motion.div
          className="text-gray-500 text-xs font-mono"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.8 }}
        >
          © {new Date().getFullYear()} • Crafted with passion and pixels • Always evolving
        </Motion.div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <Motion.div
              key={i}
              className="absolute w-1 h-1 bg-neon-cyan rounded-full opacity-40"
              animate={{
                x: [0, Math.random() * 200 - 100],
                y: [0, Math.random() * 100 - 50],
                opacity: [0.4, 0, 0.4],
              }}
              transition={{
                duration: 4 + Math.random() * 3,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
            />
          ))}
        </div>
      </div>
    </Motion.footer>
  );
}

export default Footer;
