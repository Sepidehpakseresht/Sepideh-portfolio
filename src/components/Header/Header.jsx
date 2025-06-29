import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import FullScreenMenu from '../FullScreenMenu';
import './Header.css'; 

export default function Header() {
  return (
    <header>
      <div className="md:hidden">
        <FullScreenMenu />
      </div>

      <nav className="hidden md:flex absolute right-4 top-1/2 transform -translate-y-1/2 flex-col gap-10 pr-2 text-white text-xs tracking-widest uppercase z-50">
        <a href="#aboutme" className="rotate-180 origin-center [writing-mode:vertical-rl] hover:text-cyan-400 transition">About Me</a>
        <a href="#skills" className="rotate-180 origin-center [writing-mode:vertical-rl] hover:text-cyan-400 transition">Skills</a>
        <a href="#works" className="rotate-180 origin-center [writing-mode:vertical-rl] hover:text-cyan-400 transition">Works</a>
        <a href="#experience" className="rotate-180 origin-center [writing-mode:vertical-rl] hover:text-cyan-400 transition">Experiences</a>
        <a href="#contact" className="rotate-180 origin-center [writing-mode:vertical-rl] hover:text-cyan-400 transition">Contact</a>
      </nav>
    </header>
  );
}
