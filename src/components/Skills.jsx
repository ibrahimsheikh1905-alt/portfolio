// import React, { useEffect, useState } from "react";

// const skills = [
//   { name: "HTML", level: "95%", color: "bg-orange-500" },
//   { name: "CSS / Tailwind", level: "90%", color: "bg-blue-500" },
//   { name: "JavaScript (ES6+)", level: "85%", color: "bg-yellow-500" },
//   { name: "React.js", level: "80%", color: "bg-cyan-500" },
//   { name: "Node.js", level: "75%", color: "bg-green-500" },
//   { name: "MongoDB", level: "70%", color: "bg-emerald-500" },
// ];

// function Skills() {
//   const [animated, setAnimated] = useState(false);

//   useEffect(() => {
//     setTimeout(() => setAnimated(true), 300);
//   }, []);

//   return (
//     <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//       <h2 className="text-4xl font-bold text-center mb-10 text-indigo-600 dark:text-indigo-400">
//         Skills
//       </h2>

//       <div className="max-w-3xl mx-auto space-y-6">
//         {skills.map((skill, index) => (
//           <div key={index} className="group">
//             <div className="flex justify-between mb-1">
//               <span className="text-lg font-medium text-gray-800 dark:text-gray-200 group-hover:text-indigo-500 transition-colors">
//                 {skill.name}
//               </span>
//               <span className="text-sm text-gray-600 dark:text-gray-400">
//                 {skill.level}
//               </span>
//             </div>
//             <div className="w-full bg-gray-300 dark:bg-gray-700 rounded-full h-3 overflow-hidden">
//               <div
//                 className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
//                 style={{
//                   width: animated ? skill.level : "0%",
//                 }}
//               ></div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Skills;

// ========================================================

import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
import { SiTailwindcss, SiMongodb } from "react-icons/si";

function Skills() {
  const skills = [
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-5xl" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-5xl" /> },
    { name: "JavaScript", icon: <FaJs className="text-yellow-400 text-5xl" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-5xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-5xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600 text-5xl" /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400 text-5xl" /> },
    { name: "Database", icon: <FaDatabase className="text-gray-500 text-5xl" /> },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Skills</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 text-center">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.3 }}
              className="flex flex-col items-center p-6 bg-white dark:bg-gray-800 rounded-2xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105"
            >
              {skill.icon}
              <p className="mt-4 text-lg font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;




// --------------------------------------------------------
// const skills = [
//   // 🔹 Frontend
//   { name: "React.js", icon: "⚛️" },
//   { name: "Tailwind CSS", icon: "🌊" },
//   { name: "JavaScript (ES6+)", icon: "✨" },
//   { name: "HTML5 & CSS3", icon: "🎨" },

//   // 🔹 Backend
//   { name: "Node.js", icon: "🟢" },
//   { name: "Express.js", icon: "🚀" },
//   { name: "MongoDB", icon: "🍃" },
//   { name: "Stripe API", icon: "💳" },

//   // 🔹 Tools
//   { name: "Git & GitHub", icon: "🔧" },
//   { name: "Postman (API Testing)", icon: "📮" },
//   { name: "VS Code", icon: "🖥️" },

//   // 🔹 Extras
//   { name: "JWT Authentication", icon: "🔐" },
//   { name: "Responsive Design", icon: "📱" },
// ]

// export default function Skills() {
//   return (
//     <section
//       id="skills"
//       className="min-h-screen px-6 py-20 bg-white dark:bg-black transition-colors duration-300"
//     >
//       <h2 className="text-4xl font-bold text-center text-indigo-600 dark:text-indigo-400 mb-12">
//         Skills
//       </h2>

//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-center">
//         {skills.map((skill, index) => (
//           <div
//             key={index}
//             className="p-6 rounded-xl shadow-md bg-gray-50 dark:bg-gray-800 hover:scale-105 transform transition-all"
//           >
//             <div className="text-4xl mb-3">{skill.icon}</div>
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
//               {skill.name}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </section>
//   )
// }