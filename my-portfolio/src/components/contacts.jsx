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
      className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white px-6 py-20"
    >
      <h2 className="text-4xl sm:text-5xl font-bold mb-10 text-center">
        Contact <span className="text-green-400">Me</span>
      </h2>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-gray-800/80 backdrop-blur-md p-8 rounded-xl shadow-2xl space-y-4 border border-gray-700"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-700/80 text-white outline-none focus:ring-2 focus:ring-green-400 focus:bg-gray-700 transition"
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-700/80 text-white outline-none focus:ring-2 focus:ring-green-400 focus:bg-gray-700 transition"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          required
          className="w-full px-4 py-3 rounded-lg bg-gray-700/80 text-white outline-none focus:ring-2 focus:ring-green-400 focus:bg-gray-700 transition"
          rows="5"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-green-400 text-black px-4 py-3 rounded-lg font-bold hover:bg-green-500 hover:scale-[1.02] transition-transform"
        >
          Send Message
        </button>

        {status && (
          <p className="mt-4 text-center text-green-400 animate-fadeIn">
            {status}
          </p>
        )}
      </form>
    </section>
  );
}
