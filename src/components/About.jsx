import { GraduationCap, Code, Sparkles } from 'lucide-react';

function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              About <span className="text-red-500">Me</span>
            </h2>
            <div className="w-24 h-1 bg-red-500 mx-auto"></div>
          </div>

          <div className="space-y-8">
            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-600/20 rounded-lg">
                  <GraduationCap className="text-red-500" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-red-500">Education</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Currently pursuing <span className="text-white font-semibold">B.Tech in Information Technology</span> (2022–2026) at
                    <span className="text-white font-semibold"> Sri Shakthi Institute of Engineering and Technology</span>,
                    affiliated with Anna University. 
                    Maintaining a strong academic record with a
                    <span className="text-red-500 font-semibold"> CGPA of 8.59</span>.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-600/20 rounded-lg">
                  <Code className="text-red-500" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-red-500">Passion & Expertise</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Enthusiastic MERN Stack developer with a deep passion for crafting
                    <span className="text-white font-semibold"> full-stack web applications</span>.
                    I thrive on solving complex problems and transforming innovative ideas into
                    functional, scalable solutions that make a real-world impact.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-black/50 backdrop-blur-sm p-8 rounded-2xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-600/20 rounded-lg">
                  <Sparkles className="text-red-500" size={32} />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-semibold mb-3 text-red-500">Innovation Focus</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Specializing in developing <span className="text-white font-semibold">AI-powered solutions</span> that
                    enhance user experiences. Committed to staying at the forefront of technology by
                    integrating cutting-edge tools and frameworks into modern web applications.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
