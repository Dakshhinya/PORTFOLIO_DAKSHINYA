import { ExternalLink, Github } from 'lucide-react';

function Projects() {
  const projects = [
    {
      title: "EventHive – Gamify, Connect & Experience",
      description: "A comprehensive event management platform that gamifies user engagement through interactive features. Users can create, discover, and participate in events with AI-powered recommendations and seamless file management.",
      technologies: ["Next.js", "MongoDB", "UploadThing", "Gemini AI"],
      link: "https://event-hive-swart.vercel.app/",
      github: "#",
      gradient: "from-red-600 to-pink-600"
    },
    {
      title: "DebyHub – Online Debate Platform",
      description: "A real-time debate platform enabling users to engage in structured debates with live notifications and communication features. Implements robust authentication and real-time updates for seamless user experience.",
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Twilio"],
      link: "#",
      github: "#",
      gradient: "from-red-600 to-orange-600"
    },
    {
      title: "RoamRight – Personalized AI Trip Planner",
      description: "An intelligent travel planning application that leverages AI to create personalized itineraries. Features include budget management, destination recommendations, and real-time travel suggestions powered by Gemini AI.",
      technologies: ["React.js", "Node.js", "Express.js", "Firebase", "Gemini AI"],
      link: "#",
      github: "#",
      gradient: "from-red-600 to-red-800"
    },
    {
      title: "TaskFlow – Realtime to-do list with AI assistant",
      description: "A real-time task management application integrated with an AI assistant to streamline productivity, automate task prioritization, and provide smart recommendations.",
      technologies: ["React", "JavaScript", "Node.js", "Express.js", "PostgresSQL", "Gemini AI"],
      link: "task-flow-frontend-lovat-seven.vercel.app",
      github: "#",
      gradient: "from-red-600 to-purple-600"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-red-500">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Showcasing innovative solutions built with modern technologies
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20"
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 group-hover:text-red-500 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, techIdx) => (
                    <span
                      key={techIdx}
                      className="px-3 py-1 bg-red-600/20 text-red-400 text-sm rounded-full border border-red-600/30 hover:bg-red-600/30 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.link}
                    className="flex items-center gap-2 px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-300 transform hover:scale-105 text-sm font-semibold"
                  >
                    <ExternalLink size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center gap-2 px-6 py-2 border border-gray-700 hover:border-red-500 hover:text-red-500 rounded-lg transition-all duration-300 text-sm font-semibold"
                  >
                    <Github size={16} />
                    Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
