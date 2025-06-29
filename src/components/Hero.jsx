import { motion as Motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="absolute inset-0 flex justify-center items-center z-0">
        <div className="w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-cyan-400/10 blur-[100px] animate-pulse" />
      </div>
      <Motion.div
        className="absolute top-1/2 left-1/2 w-[320px] h-[320px] md:w-[400px] md:h-[400px] border-2 border-cyan-500/30 rounded-full animate-spin-slow blur-[1px] z-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1.5 }}
      />
      <div className="relative z-10">
        <Motion.h1
          className="text-white text-5xl sm:text-5xl md:text-6xl xl:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Sepideh 👋
        </Motion.h1>
        <Motion.div
          className="text-cyan-400 text-lg sm:text-xl font-mono mb-6"
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
          ]}
          wrapper="span"
          speed={40}
          repeat={Infinity}
        />
        </Motion.div>
        <Motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
        <a
          href="#works"
          className="bg-cyan-500 text-white px-6 py-2 rounded-full hover:bg-cyan-600 transition duration-300 font-semibold"
        >
          View My Work
        </a>
        <div className="flex gap-5 text-cyan-400 text-2xl">
        <a
          href="https://github.com/Sepidehpakseresht"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="hover:text-white transition" />
        </a>

        <a
          href="https://www.linkedin.com/in/sepideh-pakseresht-1b3967239"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="hover:text-white transition" />
        </a>

        <a
          href="mailto:sepiidehpakseresht@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaEnvelope className="hover:text-white transition" />
        </a>
      </div>
        </Motion.div>
      </div>
    </section>
  );
};

export default Hero;
