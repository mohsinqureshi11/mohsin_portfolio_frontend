import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaUniversity, FaLaptopCode } from 'react-icons/fa';

export default function Education() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const timeline = [
    {
      title: "B.Tech Computer Science Engineering",
      subtitle: "Chameli Devi Group's of Institutions",
      duration: "2021 - Present",
      icon: <FaUniversity className="text-4xl text-blue-600 group-hover:text-white transition-all" />,
      aos: "fade-right",
      aosDelay: 0,
    },
    {
      title: "6 Month Internship - Developer",
      subtitle: "Developer's Point, Barwani",
      duration: "Completed",
      icon: <FaLaptopCode className="text-4xl text-green-600 group-hover:text-white transition-all" />,
      aos: "fade-left",
      aosDelay: 200,
    },
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-8 bg-gradient-to-br from-white via-blue-50 to-blue-100">
      <h1
        className="text-4xl font-extrabold text-center mb-12 text-gray-800 drop-shadow-lg"
        data-aos="fade-up"
      >
        <span className="text-blue-500">Education</span> & Internship
      </h1>

      <div className="max-w-3xl mx-auto flex flex-col gap-10">
        {timeline.map((item, index) => (
          <div
            key={index}
            data-aos={item.aos}
            data-aos-delay={item.aosDelay}
            className="group bg-white/80 text-gray-800 border border-blue-200 rounded-2xl shadow-lg p-8 flex flex-col sm:flex-row items-center gap-6 transition-all duration-300 hover:bg-gradient-to-tr hover:from-blue-400 hover:to-blue-200 hover:text-white hover:shadow-2xl hover:scale-[1.03]"
          >
            <div className="flex-shrink-0 flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 group-hover:bg-white/30 shadow-md">
              {item.icon}
            </div>
            <div className="flex-1 text-center sm:text-left">
              <h2 className="text-2xl font-bold group-hover:text-white transition mb-1">{item.title}</h2>
              <p className="text-base group-hover:text-white transition mb-2">{item.subtitle}</p>
              <p className="text-sm text-gray-500 group-hover:text-gray-200 transition">{item.duration}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
