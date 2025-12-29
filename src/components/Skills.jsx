function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      skills: [
        { name: "Java", level: 85 },
        { name: "JavaScript", level: 90 },
        { name: "Python", level: 80 },
        { name: "C", level: 75 },
      ]
    },
    {
      title: "Frontend",
      skills: [
        { name: "React.js", level: 90 },
        { name: "Next.js", level: 85 },
        { name: "HTML/CSS", level: 95 },
        { name: "Tailwind CSS", level: 90 },
      ]
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Express.js", level: 85 },
        { name: "REST APIs", level: 88 },
      ]
    },
    {
      title: "Database",
      skills: [
        { name: "MongoDB", level: 85 },
        { name: "MySQL", level: 80 },
        { name: "Firebase", level: 82 },
      ]
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 88 },
        { name: "GitHub", level: 88 },
        { name: "VS Code", level: 95 },
        { name: "Gemini AI", level: 75 },
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-red-500">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Proficient in modern web technologies and frameworks for building robust applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <h3 className="text-xl font-semibold mb-6 text-red-500 flex items-center gap-2">
                <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <div key={skillIdx}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 text-sm">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full transition-all duration-1000 ease-out hover:from-red-500 hover:to-red-400"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
