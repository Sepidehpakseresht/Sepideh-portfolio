import { motion } from 'framer-motion';
import { FaCode, FaUsers, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
  const journeySteps = [
    {
      icon: FaUsers,
      title: "Customer Support Specialist",
      description: "Understanding user needs and interface impact",
      color: "#00D4FF"
    },
    {
      icon: FaLightbulb,
      title: "Product Management",
      description: "Balancing user needs with technical realities",
      color: "#FF0080"
    },
    {
      icon: FaCode,
      title: "Front-End Development",
      description: "Building immersive digital experiences",
      color: "#7B2CBF"
    },
    {
      icon: FaRocket,
      title: "Future Vision",
      description: "Always learning, always growing",
      color: "#00FF88"
    }
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center bg-gradient-futuristic px-6 py-24"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-72 h-72 bg-neon-blue/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-neon-purple/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-5xl lg:text-6xl font-futura font-bold text-white neon-text-blue mb-6"
              >
                About Me
              </motion.h2>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6 text-lg text-gray-300 leading-relaxed"
              >
                <p>
                  From answering customer calls to building user-friendly interfaces — my journey into tech has been anything but ordinary. I started working as a <span className="text-neon-blue font-semibold">Customer Support Specialist</span>, where I discovered the power of listening.
                </p>
                <p>
                  Understanding people's real problems and seeing how interface design shaped their experience sparked my early interest in UI/UX. Curious to go deeper, I moved into <span className="text-neon-pink font-semibold">Product Management</span>.
                </p>
                <p>
                  There, I learned how to prioritize, communicate with developers and designers, and find the balance between user needs and technical realities. Working with large companies and high-impact clients gave me invaluable insights.
                </p>
                <p>
                  But something kept pulling me closer to the building process itself. Watching developers bring ideas to life made me realize: I don't just want to manage the vision — I want to <span className="text-neon-purple font-semibold">code it into reality</span>.
                </p>
              </motion.div>
            </div>

            {/* Journey Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-2xl font-futura font-bold text-white neon-text-pink mb-6">
                My Journey
              </h3>
              <div className="space-y-4">
                {journeySteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 group"
                  >
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white text-xl transition-all duration-300 group-hover:scale-110"
                      style={{ 
                        backgroundColor: `${step.color}20`,
                        border: `2px solid ${step.color}40`
                      }}
                    >
                      <step.icon />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold text-lg">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-3xl p-8 backdrop-blur-xl border border-glass-border">
              <div className="text-center space-y-6">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-neon-blue to-neon-pink p-1"
                >
                  <div className="w-full h-full rounded-full bg-surface flex items-center justify-center">
                    <span className="text-4xl">🚀</span>
                  </div>
                </motion.div>
                
                <div className="space-y-4">
                  <h3 className="text-2xl font-futura font-bold text-white">
                    Always Learning
                  </h3>
                  <p className="text-gray-300">
                    This is my story of growth — and it's just getting started. Every challenge is an opportunity to learn, every project a chance to innovate.
                  </p>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-6 pt-6">
                  {[
                    { label: "Projects", value: "20+", color: "#00D4FF" },
                    { label: "Technologies", value: "15+", color: "#FF0080" },
                    { label: "Experience", value: "3+ Years", color: "#7B2CBF" },
                    { label: "Passion", value: "∞", color: "#00FF88" }
                  ].map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                      viewport={{ once: true }}
                      className="text-center"
                    >
                      <div 
                        className="text-2xl font-futura font-bold mb-1"
                        style={{ color: stat.color }}
                      >
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-400">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
