import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaArrowUp } from "react-icons/fa";

function Footer() {
  const [showButton, setShowButton] = useState(false);

  // Show button only when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200 py-6 mt-10 transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        
        {/* Left Side */}
        <p className="mb-4 md:mb-0 text-center md:text-left text-sm md:text-base">
          © {new Date().getFullYear()} Ibrahim. All rights reserved.
        </p>

        {/* Right Side Social Links */}
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://github.com/ibrahim-your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/ibrahim-your-username"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:ibrahim@email.com"
            aria-label="Email"
            className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-full shadow-lg animate-pulse transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-indigo-400"
          aria-label="Scroll to Top"
        >
          <FaArrowUp className="text-xl drop-shadow-glow" />
        </button>
      )}
    </footer>
  );
}

export default Footer;