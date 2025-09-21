import { useState, useEffect } from "react";
import { Link } from "react-scroll";

function Navbar() {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme when toggled
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 shadow-md z-50 transition duration-300">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
          Ibrahim.dev
        </h1>

        {/* Links */}
        <ul className="flex space-x-6 text-gray-700 dark:text-gray-300 font-medium">
          <li>
            <Link
              to="hero"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 cursor-pointer"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 cursor-pointer"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="projects"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 cursor-pointer"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              to="skills"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 cursor-pointer"
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              offset={-70}
              className="hover:text-indigo-600 dark:hover:text-indigo-400 transition duration-300 cursor-pointer"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Dark/Light Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition duration-300"
        >
          {darkMode ? "🌙" : "☀️"}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;