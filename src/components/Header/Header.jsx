import React, { useState, useEffect } from 'react';
import { motion as Motion } from 'framer-motion';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import FullScreenMenu from '../FullScreenMenu';
import './Header.css'; 

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: "#aboutme", label: "About Me" },
    { href: "#skills", label: "Skills" },
    { href: "#works", label: "Works" },
    { href: "#experience", label: "Experiences" },
    { href: "#contact", label: "Contact" }
  ];

  return (
    <Motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-morphism backdrop-blur-xl' : ''
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Logo/Brand */}
      <Motion.div 
        className="absolute left-6 top-6 z-50"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
      >
        <div className="font-futuristic text-2xl font-bold">
          <span className="holographic-text">SP</span>
        </div>
      </Motion.div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <FullScreenMenu />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex absolute right-6 top-1/2 transform -translate-y-1/2 flex-col gap-8 pr-2 text-white text-xs tracking-widest uppercase z-50">
        {navItems.map((item, index) => (
          <Motion.a
            key={item.href}
            href={item.href}
            className="group relative rotate-180 origin-center [writing-mode:vertical-rl] hover:text-neon-cyan transition-all duration-300 font-mono"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.6 }}
            whileHover={{ x: -5 }}
          >
            <span className="relative z-10">{item.label}</span>
            
            {/* Hover effect line */}
            <Motion.div
              className="absolute right-0 top-0 w-0 h-full bg-gradient-to-b from-neon-cyan to-neon-purple opacity-30"
              whileHover={{ width: "2px" }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Glow effect on hover */}
            <Motion.div
              className="absolute -right-2 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-neon-cyan rounded-full opacity-0 blur-sm"
              whileHover={{ opacity: 1, scale: 1.2 }}
              transition={{ duration: 0.3 }}
            />
          </Motion.a>
        ))}
      </nav>

      {/* Social Links - Desktop */}
      <Motion.div 
        className="hidden md:flex absolute left-6 bottom-6 flex-col gap-4 text-neon-cyan text-xl z-50"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <Motion.a
          href="https://github.com/Sepidehpakseresht"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neon-purple transition-all duration-300 neon-glow-cyan p-2 rounded-full glass-morphism"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub />
        </Motion.a>

        <Motion.a
          href="https://www.linkedin.com/in/sepideh-pakseresht-1b3967239"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neon-purple transition-all duration-300 neon-glow-cyan p-2 rounded-full glass-morphism"
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaLinkedin />
        </Motion.a>

        {/* Vertical line */}
        <Motion.div
          className="w-px h-16 bg-gradient-to-b from-neon-cyan to-transparent mx-auto mt-4"
          initial={{ height: 0 }}
          animate={{ height: 64 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        />
      </Motion.div>

      {/* Futuristic border effect */}
      {scrolled && (
        <Motion.div
          className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan to-transparent"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6 }}
        />
      )}
    </Motion.header>
  );
}
