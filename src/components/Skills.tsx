import React, { useState, useEffect } from 'react';
import { Palette, Settings, Code, Wrench } from 'lucide-react';

const Skills = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);

  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React.js', 'TypeScript', 'Next.js', 'HTML5', 'CSS3', 'TailwindCSS'],
      icon: Palette
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'RESTful APIs'],
      icon: Settings
    },
    {
      title: 'Languages',
      skills: ['C++', 'Java', 'Python'],
      icon: Code
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'AWS', 'VS Code', 'Chrome DevTools'],
      icon: Wrench
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleItems(new Array(skillCategories.length).fill(true));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <div className="absolute top-32 left-20 w-64 h-64 bg-gradient-to-br from-gray-800/10 to-gray-700/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-gradient-to-br from-gray-700/10 to-gray-600/5 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-gray-800 border border-gray-700 rounded-full px-6 py-3 animate-glow">
              <Code className="w-5 h-5 text-gray-400" />
              <span className="font-mono text-sm text-gray-300">Skills</span>
            </div>
          </div>
          
          <h2 className="text-5xl font-bold text-gray-100 mb-6 animate-slide-up font-mono">
            <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Technical Skills
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-2xl mx-auto font-mono animate-slide-up" style={{animationDelay: '0.2s'}}>
            A comprehensive toolkit for building modern, scalable applications from concept to deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={index}
                className={`bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:shadow-2xl hover:shadow-gray-900/50 transition-all duration-700 hover:scale-[1.05] group ${
                  visibleItems[index] ? 'animate-slide-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-center mb-6">
                  <div className="flex justify-center mb-4">
                    <div className="w-16 h-16 bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <IconComponent className="w-8 h-8 text-gray-300 group-hover:text-gray-200 transition-colors duration-300" />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-100 font-mono">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="bg-gray-700 border border-gray-600 px-4 py-2 rounded-lg text-center text-gray-300 hover:text-gray-100 hover:bg-gray-600 transition-all duration-300 hover:scale-105 font-mono text-sm"
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 bg-gray-800 border border-gray-700 px-8 py-4 rounded-full hover:bg-gray-700/50 transition-all duration-500 hover:scale-105 group">
            <span className="text-2xl animate-pulse group-hover:scale-110 transition-transform duration-300"></span>
            <span className="text-lg font-medium text-gray-300 font-mono">
              Always learning and adapting to new technologies
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;