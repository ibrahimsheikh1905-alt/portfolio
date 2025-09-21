import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-black transition-colors duration-300"
    >
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-6"
        >
          About Me
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto"
        >
          I am a passionate web developer specializing in building modern, responsive
          applications with React, Node.js, and MongoDB. I love crafting elegant
          solutions and delivering high-quality projects.
        </motion.p>
      </div>
    </section>
  );
}

export default About;