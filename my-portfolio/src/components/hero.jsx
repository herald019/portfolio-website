export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center text-center h-screen px-6 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white"
    >
      {/* Headline */}
      <h1 className="text-5xl sm:text-6xl font-bold mb-4 drop-shadow-lg">
        Hi, I’m{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400">
          Harry Herald
        </span>
      </h1>

      {/* Tagline */}
      <p className="text-lg sm:text-xl max-w-xl mx-auto mb-8 text-gray-300 drop-shadow">
        A passionate{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-400">
          AI/ML Engineer
        </span>{" "}
        crafting intelligent solutions.
      </p>

      {/* Buttons with subtle glass effect */}
      <div className="flex flex-wrap justify-center gap-4">
        <a
          href="#projects"
          className="px-6 py-3 rounded-full font-medium text-black bg-gradient-to-r from-teal-400 to-cyan-400 hover:opacity-90 transition backdrop-blur-lg bg-opacity-80"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="px-6 py-3 rounded-full font-medium border border-teal-500 text-teal-400 hover:bg-teal-500 hover:text-black transition backdrop-blur-lg bg-white/5"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
