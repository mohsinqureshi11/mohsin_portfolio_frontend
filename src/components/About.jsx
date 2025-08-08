import React from 'react';
import profile from "../assets/profile.jpg";

export default function About() {
  return (
    <section id="about" className="w-full px-4 sm:px-10 py-20 bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#0f172a]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        {/* Profile Image with Glassmorphism Card */}
        <div data-aos="fade-left" className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-72 h-72 rounded-3xl overflow-hidden group shadow-2xl bg-white/10 backdrop-blur-md border-2 border-amber-400">
            <img
              src={profile}
              alt="Profile"
              className="w-full h-full object-cover group-hover:blur-[2px] transition duration-300"
            />
            {/* Overlay Text on Hover */}
            <div className="absolute inset-0 bg-black/60 text-white opacity-0 group-hover:opacity-100 transition duration-300 flex flex-col justify-center items-center p-4">
              <h1 className="text-2xl font-bold text-amber-300 mb-1">Mohsin Qureshi</h1>
              <p className="text-base text-center">Full Stack Developer</p>
            </div>
            {/* Amber Border on Hover */}
            <div className="absolute inset-0 rounded-3xl border-4 border-transparent group-hover:border-amber-400 transition duration-300"></div>
          </div>
        </div>
        {/* Text Section */}
        <div data-aos="fade-right" className="w-full md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4 drop-shadow-lg">
            About <span className="text-amber-400">Me</span>
          </h2>
          <p className="text-gray-200 leading-relaxed text-lg md:text-xl">
            Hi! I'm <span className="text-amber-300 font-bold">Mohsin Qureshi</span>, a passionate full-stack web developer with strong skills in React, Node.js, MongoDB, and Tailwind CSS. I love building clean, responsive, and user-friendly websites.
          </p>
          <p className="mt-4 text-gray-300 leading-relaxed text-lg md:text-xl">
            Whether it's a sleek portfolio, a scalable web app, or a powerful backend API — I focus on writing clean code and building meaningful experiences.
          </p>
          <div className="mt-8">
            <a
              href="#projects"
              className="bg-gradient-to-r from-amber-400 to-yellow-300 hover:from-blue-900 hover:to-blue-700 hover:text-amber-300 text-blue-900 font-bold px-8 py-3 rounded-xl shadow-xl transition-all text-lg border-2 border-amber-300 hover:border-blue-900"
            >
              View My Projects
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}