import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-6 mt-10 transition-colors duration-300">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Left Side */}
        <p className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Ibrahim. All rights reserved.
        </p>

        {/* Right Side Social Links */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:your@email.com"
            className="hover:text-indigo-600 dark:hover:text-indigo-400"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;