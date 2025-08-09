export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#0f0f0f] text-white flex items-center justify-center px-8 py-16"
    >
      <div className="max-w-4xl w-full space-y-8">
        
        {/* Heading */}
        <h2 className="text-4xl sm:text-5xl font-bold drop-shadow-lg">
          About{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-green-400">
            Me
          </span>
        </h2>

        {/* Body Text */}
        <div className="space-y-6">
          <p className="text-lg text-gray-300 leading-relaxed">
            I’m a passionate{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
              AI/ML Engineer
            </span>{" "}
            who thrives on solving complex challenges through creative, data-driven
            solutions. My approach blends technical precision with an eye for design,
            ensuring every project is both functional and visually engaging.
          </p>

          <p className="text-lg text-gray-300 leading-relaxed">
            Outside of coding, I enjoy exploring emerging tech trends, contributing
            to open-source projects, and experimenting with AI-powered art tools.
          </p>
        </div>

        {/* Divider for minimalist flair */}
        <div className="w-24 h-1 bg-gradient-to-r from-green-400 to-teal-400 rounded-full"></div>

      </div>
    </section>
  );
}
