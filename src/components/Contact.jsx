import { Mail, Phone, Linkedin, Github, Code2, ExternalLink } from 'lucide-react';

function Contact() {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+91 XXXXX XXXXX",
      href: "tel:+919600574976"
    },
    {
      icon: Mail,
      label: "Email",
      value: "dakshh89@gmail.com",
      href: "mailto:dakshh89@gmail.com"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/dakshinya",
      href: "https://www.linkedin.com/in/dakshinya-loganathan-7512b5279/"
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/dakshinya",
      href: "https://github.com/Dakshhinya"
    },
    {
      icon: Code2,
      label: "LeetCode",
      value: "leetcode.com/dakshinya",
      href: "https://leetcode.com/u/Dakshinyaa/"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-red-500">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out for collaborations, opportunities, or just a friendly chat
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, idx) => (
              <a
                key={idx}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group bg-black/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/20"
              >
                <div className="flex items-center gap-4">
                  <div className="p-4 bg-red-600/20 rounded-lg group-hover:bg-red-600/30 transition-colors duration-300">
                    <contact.icon className="text-red-500" size={28} />
                  </div>
                  <div className="flex-1">
                    <p className="text-gray-400 text-sm mb-1">{contact.label}</p>
                    <p className="text-white font-medium group-hover:text-red-500 transition-colors duration-300">
                      {contact.value}
                    </p>
                  </div>
                  <ExternalLink className="text-gray-600 group-hover:text-red-500 transition-colors duration-300" size={20} />
                </div>
              </a>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-gradient-to-r from-red-600/20 via-red-500/20 to-red-600/20 p-8 rounded-2xl border border-red-500/30">
              <h3 className="text-2xl font-bold mb-4 text-white">
                Let's Build Something Amazing Together
              </h3>
              <p className="text-gray-300 mb-6 max-w-xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="mailto:dakshh89@gmail.com"
                  className="px-8 py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/50"
                >
                  Send Message
                </a>
                <a
                  href="#"
                  className="px-8 py-3 border-2 border-red-600 text-red-500 hover:bg-red-600 hover:text-white font-semibold rounded-lg transition-all duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
