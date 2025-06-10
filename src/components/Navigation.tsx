import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Terminal, Code2, Github } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = navItems.map(item => item.id);
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-gray-900/98 backdrop-blur-xl border-b border-gray-700 shadow-2xl' : 'bg-gray-900/95 backdrop-blur-lg'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="flex items-center space-x-1 transition-transform duration-300 group-hover:scale-110">
              <Terminal className="w-5 h-5 md:w-6 md:h-6 text-gray-500 group-hover:text-gray-400 transition-colors duration-300" />
              <Code2 className="w-5 h-5 md:w-6 md:h-6 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" />
            </div>
            <span className="font-bold text-lg md:text-xl text-gray-200 font-mono group-hover:text-gray-100 transition-colors duration-300">DEV</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex space-x-1">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-3 py-2 text-sm font-medium transition-all duration-300 rounded-lg font-mono hover:scale-105 ${
                  activeSection === item.id 
                    ? 'text-gray-100 bg-gray-800 shadow-lg shadow-gray-500/20' 
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-800/50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop GitHub Button */}
          <div className="hidden lg:block">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open('https://github.com/kamleshp214', '_blank')}
              className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-gray-100 hover:border-gray-500 transition-all duration-300 hover:scale-105 bg-transparent"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => window.open('https://github.com/kamleshporwal', '_blank')}
              className="text-gray-400 hover:text-gray-200 hover:bg-gray-800 transition-all duration-300 hover:scale-105 p-2"
            >
              <Github className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-400 hover:text-gray-200 hover:bg-gray-800 transition-all duration-300 hover:scale-105 p-2"
            >
              {isOpen ? <X size={18} className="rotate-90 transition-transform duration-300" /> : <Menu size={18} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-500 overflow-hidden ${
          isOpen ? 'max-h-96 opacity-100 pb-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-gray-800/95 backdrop-blur-lg rounded-xl mt-2 border border-gray-700 shadow-2xl">
            {navItems.map((item, index) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left px-4 py-3 transition-all duration-300 font-mono hover:translate-x-2 first:rounded-t-xl last:rounded-b-xl ${
                  activeSection === item.id
                    ? 'text-gray-100 bg-gray-700'
                    : 'text-gray-400 hover:text-gray-200 hover:bg-gray-700/50'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;