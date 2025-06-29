import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks = ['About Me', 'Skills', 'Works','Experience', 'Contact'];

const FullScreenMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <button
        onClick={toggleMenu}
        className="absolute top-5 right-6 z-50 text-white text-2xl focus:outline-none"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            className="fixed inset-0 bg-gray-900/80 backdrop-blur-xl z-40 flex flex-col items-center justify-center space-y-8 text-white text-3xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {navLinks.map((link) => {
                return (
                    <Motion.a
                        key={link}
                        href={`#${link.toLowerCase().replace(/\s/g, '')}`}
                        className="hover:text-cyan-400 transition"
                        whileHover={{ scale: 1.1 }}
                        onClick={() => setIsOpen(false)}
                    >
                        {link}
                    </Motion.a>
                );
            })}
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FullScreenMenu;
