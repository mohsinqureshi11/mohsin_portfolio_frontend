import React, { useState, useEffect } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaTools } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiJira, SiGithub, SiRedux } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-4xl" />, level: 95, color: 'from-orange-400 to-orange-200' },
  { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-4xl" />, level: 90, color: 'from-blue-400 to-blue-200' },
  { name: 'JavaScript', icon: <FaJs className="text-yellow-400 text-4xl" />, level: 90, color: 'from-yellow-400 to-yellow-200' },
  { name: 'React.js', icon: <FaReact className="text-cyan-400 text-4xl" />, level: 90, color: 'from-cyan-400 to-cyan-200' },
  { name: 'Redux', icon: <SiRedux className="text-purple-500 text-4xl" />, level: 80, color: 'from-purple-400 to-purple-200' },
  { name: 'Node.js', icon: <FaNodeJs className="text-green-600 text-4xl" />, level: 85, color: 'from-green-400 to-green-200' },
  { name: 'Express.js', icon: <SiExpress className="text-gray-800 text-4xl" />, level: 85, color: 'from-gray-400 to-gray-200' },
  { name: 'MongoDB', icon: <SiMongodb className="text-green-500 text-4xl" />, level: 85, color: 'from-green-500 to-green-200' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400 text-4xl" />, level: 90, color: 'from-sky-400 to-sky-200' },
  { name: 'Git', icon: <SiGithub className="text-gray-900 text-4xl" />, level: 85, color: 'from-gray-400 to-gray-200' },
  { name: 'Jira', icon: <SiJira className="text-blue-600 text-4xl" />, level: 75, color: 'from-blue-600 to-blue-200' },
  { name: 'Database', icon: <FaDatabase className="text-amber-500 text-4xl" />, level: 80, color: 'from-amber-400 to-amber-200' },
];

const SkillCard = ({ icon, name, level, color }) => {
  const [hovered, setHovered] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    let frame;
    let startTime;
    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = time - startTime;
      const eased = Math.min((progress / 800) * level, level);
      setPercent(Math.floor(eased));
      if (eased < level) {
        frame = requestAnimationFrame(animate);
      }
    };
    if (hovered) {
      frame = requestAnimationFrame(animate);
    } else {
      setPercent(0);
    }
    return () => cancelAnimationFrame(frame);
  }, [hovered, level]);

  return (
    <div
      data-aos="zoom-in-up"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-72 h-48 bg-white/80 rounded-3xl overflow-hidden shadow-2xl p-6 flex flex-col justify-center items-center transition-all duration-300 hover:scale-105 group relative border border-amber-100 backdrop-blur-md"
    >
      {/* Icon */}
        <div className="mb-2">{icon}</div>
      <h2 className="font-bold text-gray-800 group-hover:text-amber-400 text-lg transition mb-2">{name}</h2>
      {/* Progress Bar */}
      <div className="w-full mt-2">
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <div
            className={`h-full bg-gradient-to-r ${color} rounded-full transition-all duration-[800ms] ease-out`}
            style={{ width: `${hovered ? percent : 0}%` }}
              />
            </div>
        <p className="text-right text-sm font-semibold text-gray-600 mt-2">
          {hovered ? `${percent}%` : ''}
            </p>
      </div>
    </div>
  );
};

export default function Experience() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="py-20 px-4 sm:px-10 bg-gradient-to-br from-white via-blue-50 to-amber-50" id="experience">
      <div className="flex items-center gap-3 mb-12 justify-center" data-aos="fade-up">
        <FaTools className="text-amber-400 text-3xl" />
        <h1 className="text-4xl md:text-5xl font-extrabold text-center text-gray-800 drop-shadow-lg tracking-tight">
          <span className="bg-gradient-to-r from-amber-400 to-blue-400 bg-clip-text text-transparent">My Skills</span>
      </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-10">
        {skills.map((skill, i) => (
          <SkillCard key={i} icon={skill.icon} name={skill.name} level={skill.level} color={skill.color} />
        ))}
      </div>
    </section>
  );
}
