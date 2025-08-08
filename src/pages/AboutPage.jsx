import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profile from '../assets/profile.JPG';
import { FaLinkedin, FaGithub, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaAward, FaUserGraduate, FaBriefcase, FaProjectDiagram, FaTools } from 'react-icons/fa';

const AboutPage = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-in-out', once: true, mirror: false });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-amber-50 py-10 px-2">
      {/* Page Title */}
      <div className="max-w-4xl mx-auto mb-10 flex flex-col items-center" data-aos="fade-down">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-2 tracking-tight flex items-center gap-3">
          <span className="bg-gradient-to-r from-amber-400 to-blue-400 bg-clip-text text-transparent">About Me</span>
          <FaUserGraduate className="text-amber-400 text-3xl" />
        </h1>
        <nav className="text-gray-500 text-sm mb-4">
          <ol className="flex space-x-2">
            <li><a href="/" className="hover:text-amber-500">Home</a></li>
            <li>/</li>
            <li className="text-amber-500">About</li>
          </ol>
        </nav>
      </div>

      {/* Profile Card */}
      <section className="max-w-3xl mx-auto mb-14 relative z-10" data-aos="zoom-in">
        <div className="rounded-3xl bg-white/70 backdrop-blur-md shadow-2xl border border-amber-100 flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 relative overflow-visible">
          <div className="relative flex-shrink-0">
            <img src={profile} alt="Mohsin Qureshi" className="w-40 h-40 md:w-52 md:h-52 rounded-2xl object-cover shadow-lg border-4 border-amber-200 ring-4 ring-blue-100" />
            <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-amber-400 to-blue-400 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">MERN Stack Developer</span>
          </div>
          <div className="flex-1 flex flex-col gap-2">
            <h2 className="text-3xl font-bold text-gray-800 mb-1 flex items-center gap-2">Mohsin Qureshi <FaAward className="text-amber-400" /></h2>
            <div className="flex flex-wrap gap-3 text-gray-600 text-sm mb-2 items-center">
              <span className="flex items-center gap-1"><FaMapMarkerAlt className="text-blue-400" /> Barwani, India</span>
              <span className="flex items-center gap-1"><FaEnvelope className="text-amber-400" /> <a href="mailto:mq0062783@gmail.com" className="hover:underline">mq0062783@gmail.com</a></span>
              <span className="flex items-center gap-1"><FaPhoneAlt className="text-green-500" /> <a href="tel:9993597349" className="hover:underline">9993597349</a></span>
            </div>
            <div className="flex gap-4 mb-2">
              <a href="https://www.linkedin.com/in/mohsin-qureshi-16a779250" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-amber-500 text-2xl"><FaLinkedin /></a>
              <a href="https://github.com/mohsinqureshi11" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-amber-500 text-2xl"><FaGithub /></a>
            </div>
            <div className="flex flex-wrap gap-3 text-gray-600 text-xs">
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full font-semibold">DOB: 06-01-2003 (Age 22)</span>
              <span className="bg-amber-100 text-amber-700 px-3 py-1 rounded-full font-semibold">Fresher</span>
            </div>
            <p className="text-gray-700 mt-2 text-base md:text-lg">
              I am a <b>MERN stack developer</b> with hands-on experience through internships and personal projects. I’ve built real-world applications like <b>Event Master</b> and <b>SarDoc</b>, giving me solid practical experience with frontend and backend development.
            </p>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section className="max-w-5xl mx-auto mb-14" data-aos="fade-up">
        <div className="flex items-center gap-3 mb-8">
          <FaBriefcase className="text-amber-400 text-2xl" />
          <h2 className="text-2xl font-bold text-gray-800">Work Experience</h2>
        </div>
        <div className="bg-white/80 rounded-2xl shadow-lg border border-blue-100 flex flex-col md:flex-row gap-8 p-6">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-amber-500 mb-1">MERN Stack Intern</h3>
            <span className="text-gray-700 mb-1 block">Developer's Point, Barwani</span>
            <span className="text-gray-500 mb-2 block">Nov 2024 - May 2025 (6 months)</span>
            <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold mb-2">Live Project Work</span>
            <ul className="list-disc ml-6 text-gray-600 text-sm">
              <li>Developed and maintained full-stack web applications</li>
              <li>Worked on authentication, REST APIs, and responsive UI</li>
              <li>Collaborated with team using Git, GitHub, and Jira</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="max-w-5xl mx-auto mb-14" data-aos="fade-up">
        <div className="flex items-center gap-3 mb-8">
          <FaUserGraduate className="text-blue-400 text-2xl" />
          <h2 className="text-2xl font-bold text-gray-800">Education</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/90 rounded-2xl shadow-lg border border-amber-100 p-6 flex flex-col">
            <span className="text-amber-400 text-lg font-bold mb-1">B.Tech Computer Science Engineering</span>
            <span className="text-gray-700 mb-1">Chameli Devi Group of Institutions, Indore</span>
            <span className="text-gray-500 mb-1">2022 - 2026</span>
          </div>
          <div className="bg-white/90 rounded-2xl shadow-lg border border-blue-100 p-6 flex flex-col">
            <span className="text-blue-400 text-lg font-bold mb-1">MERN Stack Certification</span>
            <span className="text-gray-700 mb-1">Developer's Point, Barwani</span>
            <span className="text-gray-500 mb-1">2023</span>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="max-w-5xl mx-auto mb-12" data-aos="fade-up">
        <div className="flex items-center gap-3 mb-8">
          <FaTools className="text-amber-400 text-2xl" />
          <h2 className="text-2xl font-bold text-gray-800">Skills</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center border border-amber-100">
            <span className="text-amber-400 text-xl font-bold mb-2">MongoDB</span>
            <span className="text-gray-600 mb-1">Database</span>
          </div>
          <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center border border-blue-100">
            <span className="text-blue-400 text-xl font-bold mb-2">Express.js</span>
            <span className="text-gray-600 mb-1">Backend Framework</span>
          </div>
          <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center border border-blue-100">
            <span className="text-cyan-500 text-xl font-bold mb-2">React.js</span>
            <span className="text-gray-600 mb-1">Frontend Library</span>
          </div>
          <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center border border-green-100">
            <span className="text-green-500 text-xl font-bold mb-2">Node.js</span>
            <span className="text-gray-600 mb-1">Backend Runtime</span>
          </div>
          <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center border border-yellow-100">
            <span className="text-yellow-400 text-xl font-bold mb-2">JavaScript</span>
            <span className="text-gray-600 mb-1">Programming Language</span>
          </div>
          <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center border border-blue-100">
            <span className="text-blue-400 text-xl font-bold mb-2">RESTful APIs</span>
            <span className="text-gray-600 mb-1">API Design</span>
          </div>
          <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center border border-amber-100">
            <span className="text-amber-400 text-xl font-bold mb-2">JWT Auth</span>
            <span className="text-gray-600 mb-1">Authentication</span>
          </div>
          <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center border border-blue-100">
            <span className="text-blue-400 text-xl font-bold mb-2">Axios</span>
            <span className="text-gray-600 mb-1">HTTP Client</span>
          </div>
          <div className="bg-white/90 rounded-2xl shadow p-6 flex flex-col items-center border border-gray-200">
            <span className="text-gray-800 text-xl font-bold mb-2">Git, GitHub, Jira</span>
            <span className="text-gray-600 mb-1">Tools</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
