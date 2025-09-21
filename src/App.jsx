import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-sans bg-white dark:bg-black text-gray-900 dark:text-white transition-colors duration-300">
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;