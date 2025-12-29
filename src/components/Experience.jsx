import { Briefcase, Calendar } from 'lucide-react';

function Experience() {
  const experiences = [
    {
      company: "ShadowFox",
      role: "Java Development Intern",
      period: "2024",
      description: [
        "Developed and maintained Java applications with focus on code quality and performance",
        "Collaborated with senior developers to implement new features and fix bugs",
        "Participated in code reviews and contributed to best practices documentation",
        "Gained hands-on experience with enterprise-level Java development"
      ],
      color: "red"
    },
    {
      company: "Cognifyz Technologies",
      role: "Software Development Intern",
      period: "2024",
      description: [
        "Focused on full-stack software development and performance optimization",
        "Implemented efficient algorithms to improve application response times",
        "Worked on database optimization and query performance tuning",
        "Contributed to the development of scalable web applications"
      ],
      color: "red"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-red-500">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional journey and key contributions
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative bg-black/50 backdrop-blur-sm rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-500 transform hover:scale-105 overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-red-600 to-red-900"></div>

              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div className="flex items-center gap-2 text-red-500 font-semibold text-lg">
                      <Briefcase size={20} />
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-gray-400 bg-gray-900/50 px-4 py-2 rounded-lg border border-gray-800">
                    <Calendar size={18} />
                    <span>{exp.period}</span>
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.description.map((item, itemIdx) => (
                    <li
                      key={itemIdx}
                      className="flex items-start gap-3 text-gray-300 leading-relaxed"
                    >
                      <span className="text-red-500 mt-1.5 flex-shrink-0">▹</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
