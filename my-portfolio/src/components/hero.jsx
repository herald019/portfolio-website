export default function Hero() {
  return (
    <section
      id="hero"
      className="relative flex flex-col justify-center items-center text-center h-screen text-white px-6"
    >
      {/* Headline */}
      <h1 className="text-5xl sm:text-6xl font-bold mb-4 animate-fadeIn animation-delay-100">
        Hi, I’m <span className="text-green-400">Harry Herald</span>
      </h1>

      {/* Tagline */}
      <p className="text-lg sm:text-xl max-w-xl mb-8 text-gray-300 animate-fadeIn animation-delay-100">
        A passionate <span className="text-green-400">AI/ML Engineer</span> crafting intelligent solutions.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 animate-fadeIn animation-delay-100">
        <a
          href="#projects"
          className="bg-green-500 hover:bg-green-600 text-black px-6 py-3 rounded-full font-medium transition duration-300"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="border border-green-500 hover:bg-green-600 hover:text-black px-6 py-3 rounded-full font-medium transition duration-300"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}
