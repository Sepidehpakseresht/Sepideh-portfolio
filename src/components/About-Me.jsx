import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  const journeySteps = [
    {
      icon: FaUsers,
      title: "Customer Support",
      description: "Learned empathy, user needs, and interface impact.",
      color: "#00D4FF"
    },
    {
      icon: FaLightbulb,
      title: "Product Management",
      description: "Balanced user needs with technical realities.",
      color: "#FF0080"
    },
    {
      icon: FaCode,
      title: "Front-End Dev",
      description: "Building immersive, performant web experiences.",
      color: "#7B2CBF"
    },
    {
      icon: FaRocket,
      title: "Future Vision",
      description: "Always learning, always growing.",
      color: "#00FF88"
    }
  ];

  return (
    <section id="about" className="relative w-full max-w-7xl mx-auto px-6 py-24 flex items-center justify-center min-h-[80vh]">
      <div className="w-full grid lg:grid-cols-2 gap-16 items-center">
        {/* Glassmorphism Card */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-10 md:p-16 border border-glass-border shadow-neon-blue/30 backdrop-blur-xl flex flex-col gap-8"
        >
          <h2 className="text-5xl font-futura font-bold neon-text-blue mb-4">About Me</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-2">
            I’m a <span className="text-neon-blue font-semibold">front-end developer</span> with a passion for futuristic, interactive web experiences. My journey started in customer support, moved through product management, and landed in the world of code—where I bring ideas to life with React, Three.js, and modern UI.
          </p>
          <div className="grid grid-cols-2 gap-6 mt-4">
            <div className="flex flex-col items-center">
              <span className="text-3xl font-futura font-bold text-neon-blue">20+</span>
              <span className="text-xs text-gray-400 mt-1">Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-futura font-bold text-neon-pink">15+</span>
              <span className="text-xs text-gray-400 mt-1">Technologies</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-futura font-bold text-neon-purple">3+ yrs</span>
              <span className="text-xs text-gray-400 mt-1">Experience</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl font-futura font-bold text-neon-green">∞</span>
              <span className="text-xs text-gray-400 mt-1">Passion</span>
            </div>
          </div>
        </motion.div>
        {/* Timeline/Panel */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="glass rounded-3xl p-10 md:p-16 border border-glass-border shadow-neon-pink/30 backdrop-blur-xl flex flex-col gap-8"
        >
          <h3 className="text-2xl font-futura font-bold neon-text-pink mb-4">My Journey</h3>
          <div className="flex flex-col gap-6">
            {journeySteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-5"
              >
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl shadow-neon-blue/30"
                  style={{ backgroundColor: `${step.color}22`, border: `2px solid ${step.color}66` }}>
                  <step.icon />
                </div>
                <div>
                  <div className="font-futura font-bold text-white text-lg mb-1" style={{ color: step.color }}>{step.title}</div>
                  <div className="text-gray-400 text-sm">{step.description}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
