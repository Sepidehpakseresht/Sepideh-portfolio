import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home', icon: '🏠' },
    { id: 'about', label: 'About', icon: '👤' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'works', label: 'Works', icon: '💼' },
    { id: 'experience', label: 'Experience', icon: '📈' },
    { id: 'contact', label: 'Contact', icon: '📧' }
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleNavClick = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 100 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block"
    >
      <div className="glass rounded-full p-2 backdrop-blur-xl">
        <div className="flex flex-col space-y-4">
          {navItems.map((item, index) => (
            <motion.button
              key={item.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: 1, 
                scale: 1,
                y: isVisible ? 0 : 50 
              }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.1,
                ease: 'easeOut'
              }}
              whileHover={{ 
                scale: 1.1,
                y: -2,
                transition: { duration: 0.2 }
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => handleNavClick(item.id)}
              className={`
                relative group w-12 h-12 rounded-full flex items-center justify-center
                transition-all duration-300 ease-out
                ${activeSection === item.id 
                  ? 'bg-gradient-to-r from-neon-blue to-neon-pink shadow-neon-blue' 
                  : 'bg-glass-dark hover:bg-glass'
                }
                ${activeSection === item.id 
                  ? 'text-white' 
                  : 'text-gray-300 hover:text-white'
                }
              `}
            >
              {/* Glow effect for active item */}
              {activeSection === item.id && (
                <motion.div
                  layoutId="activeNav"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-blue to-neon-pink opacity-20"
                  initial={false}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
              
              {/* Icon */}
              <span className="text-lg relative z-10">
                {item.icon}
              </span>
              
              {/* Tooltip */}
              <div className="absolute right-full mr-3 px-2 py-1 bg-glass-dark rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="text-xs text-white whitespace-nowrap">
                  {item.label}
                </span>
                <div className="absolute left-full top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-glass-dark border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navigation;