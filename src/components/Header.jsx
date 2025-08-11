import React, { useState } from 'react';
import logo from "../assets/letter-t.webp";
import { BiMenu, BiX } from 'react-icons/bi';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header data-aos="fade-down" className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-lg w-full">
      <nav className="px-6 py-3 flex justify-between items-center w-full">
        
        {/* Logo & Brand */}
        <div className="flex items-center space-x-3">
          <img src={logo} alt="logo" className="w-12 h-12 rounded-full border-2 border-amber-400 shadow-md bg-white" />
          <span className="text-2xl font-extrabold text-gray-800 tracking-wide drop-shadow select-none">
            Mohsin'Portfolio
          </span>
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 font-semibold text-lg items-center">
          <li><a href="#welcome" className="text-gray-700 hover:text-amber-400 transition">Home</a></li>
          <li><a href="#projects" className="text-gray-700 hover:text-amber-400 transition">Projects</a></li>
          <li><a href="/about" className="text-gray-700 hover:text-amber-400 transition">About</a></li>
          <li><a href="#experience" className="text-gray-700 hover:text-amber-400 transition">Skills</a></li>
          <li><a href="#contact" className="text-gray-700 hover:text-amber-400 transition">Contact</a></li>
          <li>
            <a
              href="/resume"
              className="ml-2 bg-gradient-to-r from-amber-400 to-blue-400 text-white px-6 py-2 rounded-2xl font-bold shadow hover:from-blue-400 hover:to-amber-400 hover:text-amber-900 border-2 border-amber-400 hover:border-blue-400 transition-all cursor-pointer flex items-center gap-2 animate-pulse"
              style={{ minWidth: '110px' }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75A2.25 2.25 0 0014.25 4.5h-4.5A2.25 2.25 0 007.5 6.75v13.5A2.25 2.25 0 009.75 22.5h4.5A2.25 2.25 0 0016.5 20.25V16.5m0 0l3-3m-3 3l-3-3m3 3V4.5" />
              </svg>
              Resume
            </a>
          </li>
        </ul>

        {/* Mobile Nav Button */}
        <button
          className="md:hidden text-3xl text-gray-700 hover:text-amber-400 transition focus:outline-none"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <BiMenu />
        </button>

        {/* Mobile Slide-out Menu */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-black/30 flex justify-end">
            <div className="w-72 bg-white/90 h-full p-8 flex flex-col gap-8 shadow-2xl animate-slideInRight rounded-l-3xl">
              <button
                className="self-end text-3xl text-gray-700 hover:text-amber-400 mb-6"
                onClick={() => setIsOpen(false)}
                aria-label="Close menu"
              >
                <BiX />
              </button>
              <a href="#welcome" className="text-gray-800 text-xl font-semibold hover:text-amber-400 transition" onClick={() => setIsOpen(false)}>Home</a>
              <a href="#projects" className="text-gray-800 text-xl font-semibold hover:text-amber-400 transition" onClick={() => setIsOpen(false)}>Projects</a>
              <a href="#about" className="text-gray-800 text-xl font-semibold hover:text-amber-400 transition" onClick={() => setIsOpen(false)}>About</a>
              <a href="#experience" className="text-gray-800 text-xl font-semibold hover:text-amber-400 transition" onClick={() => setIsOpen(false)}>Skills</a>
              <a href="#contact" className="text-gray-800 text-xl font-semibold hover:text-amber-400 transition" onClick={() => setIsOpen(false)}>Contact</a>
              <a
                href="/resume"
                className="mt-2 bg-gradient-to-r from-amber-400 to-blue-400 text-white px-6 py-2 rounded-2xl font-bold shadow hover:from-blue-400 hover:to-amber-400 hover:text-amber-900 border-2 border-amber-400 hover:border-blue-400 transition-all cursor-pointer flex items-center gap-2 animate-pulse"
                style={{ minWidth: '110px' }}
                onClick={() => setIsOpen(false)}
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75A2.25 2.25 0 0014.25 4.5h-4.5A2.25 2.25 0 007.5 6.75v13.5A2.25 2.25 0 009.75 22.5h4.5A2.25 2.25 0 0016.5 20.25V16.5m0 0l3-3m-3 3l-3-3m3 3V4.5" />
                </svg>
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Slide-in animation keyframes */}
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        .animate-slideInRight {
          animation: slideInRight 0.4s cubic-bezier(0.4,0,0.2,1);
        }
      `}</style>
    </header>
  );
}
