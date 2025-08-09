export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white px-6 py-20"
    >
      {/* Decorative Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900 to-gray-900 pointer-events-none"></div>

      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold mb-4 relative z-10">
        About <span className="text-green-400">Me</span>
      </h2>

      {/* Accent line */}
      <div className="w-16 h-1 bg-green-400 rounded-full mb-8 relative z-10"></div>

      {/* Paragraph */}
      <div className="max-w-3xl text-center relative z-10 space-y-6">
        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          I’m <span className="font-semibold text-white">Harry Herald</span>, an AI/ML engineer
          passionate about crafting intelligent, scalable, and impactful solutions.
          My mission is to merge cutting-edge technology with practical, real-world
          applications — making complex systems both accessible and transformative.
        </p>

        <p className="text-lg sm:text-xl text-gray-300 leading-relaxed">
          From predictive modeling to building interactive applications and
          optimizing algorithms, I thrive where <span className="text-green-400 font-medium">
          innovation meets problem-solving
          </span>. I’m constantly exploring new technologies, driven by the belief that
          thoughtful engineering can shape a better future.
        </p>
      </div>

      {/* Subtle Scroll Indicator */}
      <div className="absolute bottom-6 animate-bounce text-gray-500">
        ↓
      </div>
    </section>
  );
}
