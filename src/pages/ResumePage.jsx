import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import profile from '../assets/profile.JPG';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaUserTie, FaBriefcase, FaGraduationCap, FaProjectDiagram, FaLanguage, FaTools, FaDownload, FaHome } from 'react-icons/fa';

export default function ResumePage() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-amber-50">
      {/* Floating Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <a href="/" className="bg-white/80 backdrop-blur-md rounded-full p-3 shadow-lg hover:bg-amber-400 hover:text-white transition-all duration-300">
          <FaHome className="text-xl" />
        </a>
      </div>

      {/* Main Container */}
      <div className="flex min-h-screen">
        {/* Sidebar */}
        <div className="w-80 bg-white/80 backdrop-blur-md shadow-2xl border-r border-amber-100 p-8 fixed h-screen overflow-y-auto">
          {/* Profile Section */}
          <div className="text-center mb-8" data-aos="fade-right">
            <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-amber-400 to-blue-400 p-1">
              <img 
                src={profile} 
                alt="Mohsin Qureshi" 
                className="w-full h-full rounded-full object-cover border-4 border-white"
              />
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-1">Mohsin Qureshi</h1>
            <p className="text-amber-500 font-semibold mb-4">Full Stack MERN Developer</p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-green-500" />
                <span>+91 9993597349</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-amber-400" />
                <span>mq0062783@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-blue-400" />
                <span>Indore, Madhya Pradesh</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-4">
              <a href="https://github.com/mohsinqureshi11" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-amber-500 text-xl transition-colors">
                <FaGithub />
              </a>
              <a href="https://www.linkedin.com/in/mohsin-qureshi-16a779250" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-amber-500 text-xl transition-colors">
                <FaLinkedin />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2">
            {[
              { id: 'about', label: 'About', icon: FaUserTie },
              { id: 'experience', label: 'Experience', icon: FaBriefcase },
              { id: 'skills', label: 'Skills', icon: FaTools },
              { id: 'education', label: 'Education', icon: FaGraduationCap },
              { id: 'projects', label: 'Projects', icon: FaProjectDiagram },
              { id: 'languages', label: 'Languages', icon: FaLanguage }
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 ${
                  activeSection === item.id
                    ? 'bg-gradient-to-r from-amber-400 to-blue-400 text-white shadow-lg'
                    : 'text-gray-700 hover:bg-amber-50 hover:text-amber-600'
                }`}
              >
                <item.icon className="text-lg" />
                <span className="font-semibold">{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Download Button */}
          <div className="mt-8">
            <button className="w-full bg-gradient-to-r from-green-400 to-blue-500 text-white py-3 px-4 rounded-xl font-semibold hover:from-green-500 hover:to-blue-600 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg">
              <FaDownload />
              Download Resume
            </button>
          </div>
        </div>

        {/* Main Content */}
        <div className="ml-80 flex-1 p-8">
          {/* About Section */}
          <section id="about" className="mb-12" data-aos="fade-up">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-amber-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaUserTie className="text-amber-400" />
                About Me
              </h2>
              <p className="text-gray-700 text-lg leading-relaxed">
                Passionate Junior Full Stack Developer Intern with 6 months of hands-on experience building responsive web applications using the MERN stack. Skilled in front-end and back-end development, API integration, and many other tools. Eager to contribute and grow in a dynamic development team.
              </p>
            </div>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-12" data-aos="fade-up">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-blue-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaBriefcase className="text-blue-400" />
                Professional Experience
              </h2>
              <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-6 border border-blue-200">
                <h3 className="text-xl font-bold text-blue-600 mb-2">Junior Full Stack Developer Intern</h3>
                <p className="text-gray-700 mb-2 italic">Developer's Point | Jan 2025 - Present</p>
                <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold mb-4">Live Project Work</span>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Developed and maintained full-stack web applications using React, Node.js, Express and MongoDB.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Implemented responsive UI components with React.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Created RESTful APIs for various features (CRUD operations, Authentication).</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Optimized application performance and enhanced user experience.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                    <span>Worked with Git/GitHub for version control.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-12" data-aos="fade-up">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-green-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaTools className="text-green-400" />
                Skills & Competencies
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                  <h3 className="font-bold text-blue-700 mb-4 text-lg">Front-End</h3>
                  <div className="space-y-2">
                    {['HTML/CSS/Javascript-DOM Manipulation', 'React Framework (Vite), React Router', 'Bootstrap / Tailwind CSS / Material UI', 'React JS, JSON, Redux / Redux Toolkit', 'RESTful APIs (Fetch, Axios)', 'Payment Integration (RazorPay)'].map((skill, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full"></span>
                        <span className="text-gray-700 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                  <h3 className="font-bold text-green-700 mb-4 text-lg">Back-End</h3>
                  <div className="space-y-2">
                    {['Node.js, Express.js', 'Package Managers: NPM', 'Database: NoSQL - MongoDB (Mongoose)', 'JWT, Authentication, Authorization', 'CORS, HTTPS, bcrypt - Web Security', 'Web Sockets, NodeMailer, Node-schedule, Cron'].map((skill, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                        <span className="text-gray-700 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="mt-6 bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-6 border border-amber-200">
                <h3 className="font-bold text-amber-700 mb-4 text-lg">Other Skills</h3>
                <div className="space-y-2">
                  {['Focused, Problem Solving, Clean Code', 'Time Management, Git & GitHub, Jira', 'Vercel, Netlify Deployment'].map((skill, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                      <span className="text-gray-700 text-sm">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section id="education" className="mb-12" data-aos="fade-up">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-purple-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaGraduationCap className="text-purple-400" />
                Education
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-6 border border-purple-200">
                  <h3 className="font-bold text-purple-700 mb-2">Chameli Devi Group of Institute Indore</h3>
                  <p className="text-gray-600">B-Tech (CSE)</p>
                  <span className="text-sm text-gray-500">2022 - 2026</span>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-2xl p-6 border border-indigo-200">
                  <h3 className="font-bold text-indigo-700 mb-2">Rajkumar Khandelwal HSS</h3>
                  <p className="text-gray-600">PCM</p>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-12" data-aos="fade-up">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-orange-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaProjectDiagram className="text-orange-400" />
                Projects
              </h2>
              <div className="space-y-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
                  <h3 className="text-xl font-bold text-blue-600 mb-3">Event Master</h3>
                  <p className="text-gray-700 mb-4">An advanced event management web application that allows users to explore and book event tickets, while providing organisers and admins with powerful management features.</p>
                  <div className="space-y-2">
                    {['User Signup/Login with JWT Authentication', 'Admin Panel to manage events, users, tickets, and earnings', 'Organiser Dashboard to create, edit, and manage events', 'Ticket Booking System for users', 'Live Statistics: Total Events, Users, Tickets Sold, Revenue', 'Image Upload for events and profile pictures', 'Secure APIs, Role-based Access, Protected Routes'].map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
                  <h3 className="text-xl font-bold text-green-600 mb-3">Patient / Doctor Appointment Booking Platform</h3>
                  <p className="text-gray-700 mb-4">A comprehensive healthcare web application connecting patients with doctors for appointments and online consultations.</p>
                  <div className="space-y-2">
                    {['User & Doctor Signup/Login with secure JWT authentication', 'Doctor Profiles showcasing specialization, experience, availability', 'Appointment Booking System with calendar integration and notifications', 'Chat-based Consultation & Prescription Upload', 'Admin Panel to approve doctors, manage users, and view appointments', 'Payment Integration for booking fees', 'Role-based Access Control (Patient, Doctor, Admin)', 'Image/Profile File Uploads', 'Protected Routes and Secure REST APIs'].map((feature, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <span className="w-2 h-2 bg-green-400 rounded-full mt-2 flex-shrink-0"></span>
                        <span className="text-gray-700 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Languages Section */}
          <section id="languages" className="mb-12" data-aos="fade-up">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 border border-pink-100">
              <h2 className="text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <FaLanguage className="text-pink-400" />
                Languages
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-6 border border-pink-200 text-center">
                  <h3 className="font-bold text-pink-700 mb-2">English</h3>
                  <p className="text-gray-600">Proficient</p>
                </div>
                <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-2xl p-6 border border-rose-200 text-center">
                  <h3 className="font-bold text-rose-700 mb-2">Hindi</h3>
                  <p className="text-gray-600">Native</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
