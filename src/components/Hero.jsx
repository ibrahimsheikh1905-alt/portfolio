import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-12 bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold text-indigo-600 dark:text-indigo-400 mb-4 sm:mb-6"
      >
        Hi, I’m Ibrahim 🚀
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-base sm:text-lg md:text-2xl text-gray-700 dark:text-gray-300 max-w-2xl"
      >
        Web Developer | React | Node.js | MongoDB
      </motion.p>

      {/* Button */}
      <motion.a
        href="#projects"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-6 sm:mt-8 bg-indigo-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base md:text-lg hover:bg-indigo-700 transition"
      >
        View My Work
      </motion.a>
    </section>
  );
}

export default Hero;