import React from 'react';
import { Linkedin, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 py-12 animate-fade-in">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-lg mb-6 text-gray-300 font-medium animate-slide-up">
            © 2025 Kamlesh Porwal. Built with passion and innovation.
          </p>
          <div className="flex justify-center gap-8 mb-4">
            <a
              href="https://www.linkedin.com/in/kamlesh-porwal-2b1a2a1a6/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-gray-200 transition-all duration-300 hover:scale-110 transform hover:shadow-lg hover:shadow-gray-500/20 animate-fade-in-delay-1"
            >
              <Linkedin size={24} />
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-gray-200 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                LinkedIn
              </span>
            </a>
            <a
              href="https://github.com/kamleshp214"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative p-3 rounded-full bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-gray-200 transition-all duration-300 hover:scale-110 transform hover:shadow-lg hover:shadow-gray-500/20 animate-fade-in-delay-2"
            >
              <Github size={24} />
              <span className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-gray-200 px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                GitHub
              </span>
            </a>
          </div>
          <div className="text-sm text-gray-500 animate-fade-in-delay-3">
            <p>Crafted with React & TypeScript</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;