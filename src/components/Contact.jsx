import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

function Contact() {
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    emailjs.sendForm(
             "service_9tns71a",   // EmailJS service ID
        "template_imnb76c",  // EmailJS template ID
        e.target,            // form reference
        "kqsoC5HJP0yRdy6ca"    // EmailJS public key
    )
    .then(() => {
      setLoading(false);
      toast.success("Message sent successfully! 🚀");
      e.target.reset();
    }, (error) => {
      setLoading(false);
      toast.error("Something went wrong. Please try again.");
      console.error(error.text);
    });
  };

  return (
    <section className="py-16 px-6 bg-gray-100 dark:bg-gray-800 transition-colors duration-300">
      <Toaster position="top-center" />
      <h2 className="text-4xl font-bold text-center mb-10 text-indigo-600 dark:text-indigo-400">
        Contact Me
      </h2>
      <form
        onSubmit={sendEmail}
        className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl shadow-lg space-y-6"
      >
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Email
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
          />
        </div>
        <div>
          <label className="block text-gray-700 dark:text-gray-300 mb-2">
            Message
          </label>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 outline-none"
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading} // Disabled when loading
          className={`w-full py-3 rounded-lg font-semibold transition duration-300 text-white ${
            loading ? "bg-indigo-400 cursor-not-allowed" : "bg-indigo-600 hover:bg-indigo-700"
          }`}
        >
          {loading ? "Loading..." : "Send Message 🚀"}
        </button>
      </form>
    </section>
  );

  
}

export default Contact;