import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section
      id="hero"
      className="h-screen flex flex-col justify-center items-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300"
    >
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl md:text-7xl font-bold text-indigo-600 dark:text-indigo-400 mb-6"
      >
        Hi, I’m Ibrahim 🚀
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="text-xl md:text-2xl text-gray-700 dark:text-gray-300"
      >
        Web Developer | React | Node.js | MongoDB
      </motion.p>

      <motion.a
        href="#projects"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="mt-8 bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition"
      >
        View My Work
      </motion.a>
    </section>
  );
}

export default Hero;