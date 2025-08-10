import { useState, useEffect } from "react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const formData = new FormData(e.target);

    const response = await fetch("https://formspree.io/f/xdkdykva", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("Thanks! Your message has been sent.");
      e.target.reset();
    } else {
      setStatus("Oops! Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-screen 
                 bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] text-white px-6 py-20"
    >
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center">
        Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">Me</span>
      </h2>

      {/* Contact Form */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg px-0 py-0 transition-all duration-300"
      >
  

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 mb-4 rounded-lg bg-[#1a1a1a]/70 text-white outline-none 
                     border border-gray-800 focus:ring-2 focus:ring-teal-400 
                     focus:bg-[#1a1a1a] transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 mb-4 rounded-lg bg-[#1a1a1a]/70 text-white outline-none 
                     border border-gray-800 focus:ring-2 focus:ring-teal-400 
                     focus:bg-[#1a1a1a] transition"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          rows="5"
          className="w-full px-4 py-3 mb-4 rounded-lg bg-[#1a1a1a]/70 text-white outline-none 
                     border border-gray-800 focus:ring-2 focus:ring-teal-400 
                     focus:bg-[#1a1a1a] transition"
        ></textarea>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-teal-400 to-cyan-400 text-black px-4 py-3 rounded-lg font-bold 
                     hover:bg-teal-300 hover:scale-[1.02] transition-transform"
        >
          Send Message
        </button>

        {/* Status Message */}
        {status && (
          <p className="mt-4 text-center text-teal-400 animate-fadeIn">{status}</p>
        )}
      </form>
    </section>
  );
}
