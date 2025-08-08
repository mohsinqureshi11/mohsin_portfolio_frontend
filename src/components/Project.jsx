import React from 'react';
import cat from "../assets/cat.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";

export default function Project() {
  const projects = [
    {
      img: cat,
      title: "Street Spices",
      desc1: "A food delivery project and booking",
      desc2: "tables with HTML, CSS, JavaScript.",
      aos: "fade-right",
      link: "https://streetspices.netlify.app"
    },
    {
      img: project3,
      title: "Landing Page",
      desc1: "A modern landing page for a food startup,",
      desc2: "built with React and Tailwind CSS.",
      aos: "fade-up",
      link: "https://your-site-name-link.netlify.app"
    },
    {
      img: project4,
      title: "Prazor",
      desc1: "A static page for a razor company",
      desc2: "using React.",
      aos: "fade-left",
      link: "https://prazor-page.netlify.app"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-10 bg-gradient-to-br from-white via-blue-50 to-amber-50">
      <h1 className="font-extrabold text-4xl md:text-5xl text-center text-gray-800 mb-14 drop-shadow-lg" data-aos="fade-down">
        <span className="text-amber-400">Featured</span> Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center">
        {projects.map((proj, index) => (
          <a
            key={index}
            href={proj.link}
            target="_blank"
            rel="noopener noreferrer"
            data-aos={proj.aos}
            data-aos-delay={index * 120}
            className="relative w-full max-w-xs group"
          >
            {/* Unique Card Layout */}
            <div className="rounded-3xl bg-white/80 shadow-2xl border border-amber-100 hover:scale-105 transition-all duration-300 overflow-hidden flex flex-col h-96">
              {/* Project Image */}
              <div className="h-48 w-full overflow-hidden relative">
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-amber-400 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  NEW
                </div>
              </div>
              {/* Project Info */}
              <div className="flex-1 flex flex-col justify-center items-center p-6">
                <h2 className="text-xl font-bold text-gray-800 mb-2 text-center group-hover:text-amber-500 transition">
                  {proj.title}
                </h2>
                <p className="text-gray-600 text-center mb-1">{proj.desc1}</p>
                <p className="text-gray-500 text-center">{proj.desc2}</p>
              </div>
              {/* Button */}
              <div className="p-4 flex justify-center">
                <span className="bg-gradient-to-r from-amber-400 to-yellow-300 text-white font-semibold px-6 py-2 rounded-xl shadow hover:from-blue-100 hover:to-blue-200 hover:text-amber-500 border-2 border-amber-200 hover:border-blue-200 transition-all cursor-pointer">
                  View Project
                </span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
} 