import React, { useState, useEffect } from 'react';
import { User, Code, Users, TrendingUp } from 'lucide-react';

const About = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleItems(new Array(4).fill(true));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const stats = [
    { value: '500+', label: 'Users Impacted', icon: Users },
    { value: '95%', label: 'Uptime Achieved', icon: TrendingUp },
    { value: '2+', label: 'Years Experience', icon: Code },
    { value: '10+', label: 'Projects Completed', icon: User }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-gray-800/10 to-gray-700/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-gray-700/10 to-gray-600/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-gray-800 border border-gray-700 rounded-full px-6 py-3 animate-glow">
              <User className="w-5 h-5 text-gray-400" />
              <span className="font-mono text-sm text-gray-300">About</span>
            </div>
          </div>
          
          <h2 className="text-5xl font-bold text-gray-100 mb-6 animate-slide-up font-mono">
            <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-gray-900/50 transition-all duration-700 hover:scale-[1.02] group animate-slide-in-left">
              <p className="text-lg text-gray-300 leading-relaxed font-mono">
                Dedicated Full Stack Developer with 2+ years of experience, specializing in React, TypeScript, and MERN stack. 
                Transformed user experiences for 500+ users by delivering seamless applications with 95% uptime. 
                Certified in UI/UX Design, I'm eager to craft innovative, user-focused solutions that leave a lasting impact.
              </p>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div
                    key={index}
                    className={`bg-gray-800 border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-700/50 transition-all duration-500 hover:scale-[1.05] group ${
                      visibleItems[index] ? 'animate-slide-in-up' : 'opacity-0'
                    }`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="flex justify-center mb-3">
                      <IconComponent className="w-6 h-6 text-gray-400 group-hover:text-gray-300 transition-colors duration-300" />
                    </div>
                    <div className="text-3xl font-bold text-gray-100 mb-2 font-mono">{stat.value}</div>
                    <div className="text-sm text-gray-400 font-mono">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="flex justify-center lg:justify-end animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 bg-gray-800 border border-gray-700 rounded-full flex items-center justify-center transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-gray-900/50 group">
                <div className="w-72 h-72 bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center group-hover:bg-gray-600 transition-colors duration-500">
                  <Code className="text-6xl text-gray-300 w-24 h-24 group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300">
                <span className="text-gray-300 text-2xl animate-pulse">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;