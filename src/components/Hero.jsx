import { Github, Linkedin, Mail, Code2 } from 'lucide-react';

function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/10 via-black to-black"></div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="flex-1 space-y-6">
            <div className="space-y-2">
              <h2 className="text-red-500 text-lg font-semibold tracking-wider uppercase animate-fade-in">
                Hello, I'm
              </h2>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent animate-slide-up">
                Dakshinya L
              </h1>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl md:text-3xl text-gray-300 font-light">
                Software Developer <span className="text-red-500">/</span> Full Stack Developer
              </h3>
              <p className="text-gray-400 text-lg max-w-2xl leading-relaxed">
                Passionate about building scalable and user-centric web applications.
                Specializing in MERN stack development with a focus on creating
                innovative solutions that merge functionality with exceptional user experience.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#contact"
                className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50"
              >
                Get In Touch
              </a>
              <a
                href="#projects"
                className="px-8 py-3 border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white font-semibold rounded-lg transition-all duration-300"
              >
                View Projects
              </a>
            </div>

            <div className="flex gap-4 pt-6">
              <a
                href="https://github.com/dakshinya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-700 rounded-lg hover:border-red-500 hover:text-red-500 transition-all duration-300 transform hover:scale-110"
              >
                <Github size={24} />
              </a>
              <a
                href="https://linkedin.com/in/dakshinya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-700 rounded-lg hover:border-red-500 hover:text-red-500 transition-all duration-300 transform hover:scale-110"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="mailto:dakshinya@example.com"
                className="p-3 border border-gray-700 rounded-lg hover:border-red-500 hover:text-red-500 transition-all duration-300 transform hover:scale-110"
              >
                <Mail size={24} />
              </a>
              <a
                href="https://leetcode.com/dakshinya"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 border border-gray-700 rounded-lg hover:border-red-500 hover:text-red-500 transition-all duration-300 transform hover:scale-110"
              >
                <Code2 size={24} />
              </a>
            </div>
          </div>

          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-red-600 rounded-2xl blur-3xl opacity-20 animate-pulse"></div>
              <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden border-4 border-red-600 shadow-2xl shadow-red-500/50 transform hover:scale-105 transition-transform duration-500">
                <img
                  src="/dak.jpeg"
                  alt="Dakshinya L"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-600 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-red-500 rounded-full"></div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
