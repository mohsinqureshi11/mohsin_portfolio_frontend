import React, { useEffect } from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Footer() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-10 px-6 mt-20">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6" data-aos="fade-up">
        
        {/* Left: Name and Copyright */}
        <div className="text-center md:text-left" data-aos="fade-right" data-aos-delay="100">
          <h2 className="text-xl font-bold text-amber-300 hover:text-amber-200 transition-colors duration-300">Mohsin Qureshi</h2>
          <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved.</p>
        </div>

        {/* Middle: Quick Links */}
        <div className="flex space-x-6 text-sm" data-aos="fade-up" data-aos-delay="200">
          <a href="#about" className="hover:text-amber-300 transition-all duration-300 hover:scale-110">About</a>
          <a href="#projects" className="hover:text-amber-300 transition-all duration-300 hover:scale-110">Projects</a>
          <a href="#contact" className="hover:text-amber-300 transition-all duration-300 hover:scale-110">Contact</a>
        </div>

        {/* Right: Social Icons */}
        <div className="flex space-x-5 text-xl" data-aos="fade-left" data-aos-delay="300">
          <a 
            href="https://github.com/mohsinqureshi11" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-amber-300 transition-all duration-300 hover:scale-125 hover:rotate-12"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <FaGithub />
          </a>
          <a 
            href="https://www.linkedin.com/in/mohsin-qureshi-16a779250" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-amber-300 transition-all duration-300 hover:scale-125 hover:rotate-12"
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <FaLinkedin />
          </a>
          <a 
            href="mailto:mq0062783@gmail.com" 
            className="hover:text-amber-300 transition-all duration-300 hover:scale-125 hover:rotate-12"
            data-aos="zoom-in"
            data-aos-delay="600"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
