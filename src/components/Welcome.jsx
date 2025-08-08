import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/mohsin.jpg"; // Profile image
import bgPattern from "../assets/welcomemid.png"; // Background pattern

export default function Welcome() {
  return (
    <section
      id="welcome"
      className="relative min-h-[80vh] bg-gradient-to-br from-blue-50 via-white to-amber-50 flex items-center justify-center overflow-hidden px-4 md:px-8 py-12"
    >
      {/* Background Pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.15 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${bgPattern})` }}
      />

      {/* Container */}
      <div className="relative z-10 w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Side - Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative">
            {/* Animated Border Glow */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
              className="absolute -inset-3 rounded-full bg-gradient-to-tr from-amber-400 via-pink-300 to-blue-300 blur-lg opacity-70"
            />
            {/* Profile Image */}
            <img
              src={profilePic}
              alt="Mohsin Qureshi"
              className="relative z-10 w-64 h-64 md:w-72 md:h-72 rounded-full border-4 border-white shadow-2xl object-cover"
            />
          </div>
        </motion.div>

        {/* Right Side - Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <motion.h1
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight"
          >
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-amber-500 to-pink-500 bg-clip-text text-transparent">
              Mohsin Qureshi
            </span>
          </motion.h1>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl text-gray-600 font-medium"
          >
            Full Stack Developer | React & Node.js Enthusiast
          </motion.p>

          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-amber-400 to-yellow-300 text-blue-900 font-bold rounded-xl shadow-lg border-2 border-amber-200 hover:from-blue-100 hover:to-blue-200 hover:text-amber-500 hover:border-blue-200 transition-all text-lg"
          >
            View Projects
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
