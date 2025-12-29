import { Award, FileText, CheckCircle } from 'lucide-react';

function Achievements() {
  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "Online Course Platform",
      year: "2024"
    },
    {
      title: "Java Programming Certification",
      issuer: "ShadowFox",
      year: "2024"
    },
    {
      title: "MongoDB Fundamentals",
      issuer: "MongoDB University",
      year: "2023"
    },
    {
      title: "React.js Advanced Concepts",
      issuer: "Online Course Platform",
      year: "2023"
    }
  ];

  const publications = [
    {
      title: "Building Scalable Web Applications with MERN Stack",
      type: "Technical Article",
      year: "2024"
    },
    {
      title: "AI Integration in Modern Web Development",
      type: "Research Paper",
      year: "2024"
    },
    {
      title: "Best Practices for Real-time Communication Systems",
      type: "Technical Blog",
      year: "2023"
    }
  ];

  return (
    <section id="achievements" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Award className="text-red-500" size={36} />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    <span className="text-red-500">Certifications</span>
                  </h2>
                </div>
                <div className="w-20 h-1 bg-red-500 mb-2"></div>
              </div>

              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className="flex items-start gap-3">
                      <CheckCircle className="text-red-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                          {cert.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{cert.issuer}</p>
                        <span className="text-red-500 text-sm font-medium">{cert.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="text-red-500" size={36} />
                  <h2 className="text-3xl md:text-4xl font-bold">
                    <span className="text-red-500">Publications</span>
                  </h2>
                </div>
                <div className="w-20 h-1 bg-red-500 mb-2"></div>
              </div>

              <div className="space-y-4">
                {publications.map((pub, idx) => (
                  <div
                    key={idx}
                    className="bg-gradient-to-r from-gray-900 to-black p-6 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 group"
                  >
                    <div className="flex items-start gap-3">
                      <FileText className="text-red-500 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" size={20} />
                      <div>
                        <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-500 transition-colors duration-300">
                          {pub.title}
                        </h3>
                        <p className="text-gray-400 text-sm">{pub.type}</p>
                        <span className="text-red-500 text-sm font-medium">{pub.year}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
