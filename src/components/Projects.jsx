import React from "react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Event Booking System",
      description:
        "Full-stack app with Stripe payments, QR code tickets, and admin dashboard.",
      image: "/event.png",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "Responsive portfolio built with React, Tailwind, and dark mode.",
      image: "/portfolio.png",
      link: "#",
    },
    {
      title: "E-commerce Store",
      description:
        "React + Node.js e-commerce app with cart and checkout.",
      image: "/ecommerce.png",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl sm:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-12"
        >
          My Projects
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden cursor-pointer flex flex-col"
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 sm:h-48 object-cover"
              />

              {/* Content */}
              <div className="p-4 sm:p-6 flex flex-col flex-grow text-left">
                <h3 className="text-lg sm:text-2xl font-semibold mb-2 text-gray-900 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-700 dark:text-gray-300 mb-4 flex-grow">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 dark:text-indigo-400 font-medium hover:underline"
                >
                  View Project →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;