import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Code2, Terminal, Sparkles } from 'lucide-react';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = 'Building innovative solutions that make an impact.';
  
  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      setText(fullText.slice(0, i));
      i++;
      if (i > fullText.length) {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4 bg-gray-900">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-gray-800/20 to-gray-700/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-gray-700/20 to-gray-600/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-gray-800/10 to-gray-700/5 rounded-full blur-3xl animate-float" style={{animationDelay: '4s'}}></div>
      </div>
      
      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Logo/Icon */}
        <div className="flex justify-center mb-8 animate-scale-in">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-600/30 to-gray-500/20 rounded-2xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500"></div>
            <div className="relative bg-gray-800 border border-gray-700 rounded-2xl p-6 group-hover:scale-105 transition-transform duration-500">
              <div className="flex items-center space-x-2">
                <Terminal className="w-8 h-8 text-gray-500" />
                <Code2 className="w-8 h-8 text-gray-400" />
                <Sparkles className="w-8 h-8 text-gray-500" />
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="text-6xl md:text-8xl font-bold text-gray-100 mb-6 animate-slide-up font-mono">
          <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
            Kamlesh Porwal
          </span>
        </h1>
        
        <h2 className="text-xl md:text-3xl text-gray-400 mb-8 animate-slide-up font-medium" style={{animationDelay: '0.2s'}}>
          Full Stack Developer with UI/UX Expertise
        </h2>
        
        <div className="h-16 mb-8 flex items-center justify-center animate-slide-up" style={{animationDelay: '0.4s'}}>
          <p className="text-lg md:text-xl text-gray-400 font-mono">
            {text}<span className="animate-pulse text-gray-500">|</span>
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center animate-slide-up" style={{animationDelay: '0.6s'}}>
          <Button 
            onClick={() => scrollToSection('projects')}
            className="bg-gray-800 hover:bg-gray-700 text-gray-100 px-8 py-4 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gray-800/50 border border-gray-700 group"
          >
            <span className="mr-2">View My Work</span>
            <Code2 className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
          </Button>
          <Button 
            variant="outline"
            onClick={() => window.open('https://drive.google.com/file/d/1CIYetvcN9wWA8X4G2wSbaZq00NpxoUWJ/view?usp=sharing', '_blank')}
            className="border-gray-600 text-gray-300 hover:bg-gray-800 hover:text-gray-100 hover:border-gray-500 px-8 py-4 rounded-xl transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gray-700/30 group bg-transparent"
          >
            <span className="mr-2">Download Resume</span>
            <Terminal className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;