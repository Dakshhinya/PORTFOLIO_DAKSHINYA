import { Heart, ArrowUp } from 'lucide-react';

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black text-white border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="flex flex-col items-center justify-center space-y-6">
          <button
            onClick={scrollToTop}
            className="p-3 bg-red-600 hover:bg-red-700 rounded-full transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-red-500/50"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>

          <div className="text-center">
            <p className="text-gray-400 flex items-center gap-2 justify-center mb-2">
              Designed & Built with <Heart className="text-red-500 fill-red-500" size={18} /> by Dakshinya L
            </p>
            <p className="text-gray-500 text-sm">
              © {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
