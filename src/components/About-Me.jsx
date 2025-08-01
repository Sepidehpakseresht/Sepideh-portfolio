import React from 'react';
import { motion } from 'framer-motion';
import { FaCode, FaPalette, FaRocket, FaHeart, FaAward, FaUsers } from 'react-icons/fa';

const AboutMe = () => {
  const highlights = [
    {
      icon: FaCode,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time",
      color: "#F96902"
    },
    {
      icon: FaPalette,
      title: "UI/UX Design",
      description: "Creating intuitive and beautiful user experiences that users love to interact with",
      color: "#F96902"
    },
    {
      icon: FaRocket,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and modern web standards",
      color: "#F96902"
    }
  ];

  const stats = [
    { number: "3+", label: "Years Experience", icon: FaAward },
    { number: "50+", label: "Projects Completed", icon: FaCode },
    { number: "100%", label: "Client Satisfaction", icon: FaHeart },
    { number: "24/7", label: "Always Learning", icon: FaUsers }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-extrabold text-white mb-4">
            About <span className="bg-primary px-4 py-2 rounded-lg">Me</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Passionate front-end developer crafting digital experiences that blend creativity with technical excellence
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-3 gap-12 items-center">
          {/* Left: Avatar & Stats */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              {/* 3D Cube Avatar */}
              <div className="relative mb-8">
                <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-br from-background to-surface flex items-center justify-center border-4 border-primary/20 shadow-orange relative overflow-hidden">
                  {/* 3D Cube Container */}
                  <div className="relative w-20 h-20 flex items-center justify-center" style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}>
                    <motion.div
                      animate={{ rotateX: 360, rotateY: 360 }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      className="relative w-16 h-16"
                      style={{ transformStyle: 'preserve-3d' }}
                    >
                      {/* Cube faces */}
                      <div className="absolute w-16 h-16 bg-primary/30 border border-primary/50" style={{ transform: 'rotateY(0deg) translateZ(8px)' }}></div>
                      <div className="absolute w-16 h-16 bg-primary/20 border border-primary/40" style={{ transform: 'rotateY(90deg) translateZ(8px)' }}></div>
                      <div className="absolute w-16 h-16 bg-primary/40 border border-primary/60" style={{ transform: 'rotateY(180deg) translateZ(8px)' }}></div>
                      <div className="absolute w-16 h-16 bg-primary/25 border border-primary/45" style={{ transform: 'rotateY(-90deg) translateZ(8px)' }}></div>
                      <div className="absolute w-16 h-16 bg-primary/35 border border-primary/55" style={{ transform: 'rotateX(90deg) translateZ(8px)' }}></div>
                      <div className="absolute w-16 h-16 bg-primary/15 border border-primary/35" style={{ transform: 'rotateX(-90deg) translateZ(8px)' }}></div>
                    </motion.div>
                  </div>
                </div>
                {/* Floating elements around avatar */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-full"
                />
              </div>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="glass rounded-xl p-4 text-center border border-glass-border"
                  >
                    <stat.icon className="text-2xl text-primary mx-auto mb-2" />
                    <div className="text-xl font-bold text-white">{stat.number}</div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Main Intro */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-3xl font-display font-bold text-white">
                Turning Ideas Into <span className="text-primary">Digital Reality</span>
              </h3>
              
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  I'm a passionate front-end developer with a love for creating beautiful, functional, and user-centered digital experiences. 
                  With expertise in React, TypeScript, and modern web technologies, I bring ideas to life through clean code and intuitive design.
                </p>
                <p>
                  My approach combines technical precision with creative problem-solving, ensuring every project not only meets but exceeds expectations. 
                  I believe in writing code that's not just functional, but elegant and maintainable.
                </p>
                <p>
                  When I'm not coding, you'll find me exploring the latest design trends, contributing to open-source projects, 
                  or sharing knowledge with the developer community.
                </p>
              </div>
            </motion.div>

            {/* Highlight Cards */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid md:grid-cols-3 gap-6"
            >
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="glass rounded-xl p-6 border border-glass-border shadow-orange hover:shadow-orange/50 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors duration-300">
                      <highlight.icon className="text-2xl text-primary" />
                    </div>
                    <h4 className="text-lg font-bold text-white">{highlight.title}</h4>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {highlight.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-6"
            >
              <motion.a
                href="#works"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 bg-primary text-white px-6 py-3 rounded-lg font-semibold text-center hover:shadow-orange transition-all duration-300"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex-1 glass border-2 border-primary text-primary px-6 py-3 rounded-lg font-semibold text-center hover:bg-primary hover:text-white transition-all duration-300"
              >
                Let's Connect
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
