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
  ];

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center min-h-screen bg-gray-800 text-white px-6 py-20"
    >
      {/* Heading */}
      <h2 className="text-4xl sm:text-5xl font-bold mb-10">
        My <span className="text-green-400">Projects</span>
      </h2>

      {/* Projects Grid */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl w-full">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-green-400/40 transition-shadow duration-300"
          >
            <h3 className="text-2xl font-semibold mb-3">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <a
              href={project.link}
              className="text-green-400 hover:underline"
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
