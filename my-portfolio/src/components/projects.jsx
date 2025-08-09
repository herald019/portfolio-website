export default function Projects() {
  const projects = [
    {
      title: "Bug Bounty Scanner",
      description:
        "A web app integrating OWASP ZAP with a local LLM for automated vulnerability detection and fix suggestions.",
      link: "#",
    },
    {
      title: "E-Prescription Platform",
      description:
        "A SaaS for doctors and patients with smart reminders, pharmacy integration, and prescription history tracking.",
      link: "#",
    },
    {
      title: "Self-Driving Car Simulation",
      description:
        "A simulation using pretrained ML models for near real-world autonomous driving scenarios.",
      link: "#",
    },
    {
      title: "Bug Bounty Scanner",
      description:
        "A web app integrating OWASP ZAP with a local LLM for automated vulnerability detection and fix suggestions.",
      link: "#",
    },
    {
      title: "Bug Bounty Scanner",
      description:
        "A web app integrating OWASP ZAP with a local LLM for automated vulnerability detection and fix suggestions.",
      link: "#",
    },
    
  ];

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center min-h-screen 
                 bg-gradient-to-b from-[#0f0f0f] to-[#1a1a1a] text-white px-6 py-20"
    >
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold mb-10">
        My <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">Projects</span>
      </h2>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#111] rounded-xl p-6 shadow-lg transition-all duration-300 
                       hover:scale-[1.03] hover:shadow-[0_0_25px_rgba(45,212,191,0.5)] cursor-pointer"
          >
            {/* Project Title */}
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>

            {/* Project Description */}
            <p className="text-gray-300 mb-4">{project.description}</p>

            {/* Project Link */}
            <a
              href={project.link}
              className="text-teal-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project →
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}
