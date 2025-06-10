import React, { useState, useEffect } from 'react';
import { Briefcase, Globe } from 'lucide-react';

const Experience = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);

  const experiences = [
    {
      company: 'Infosys Springboard',
      role: 'Software Development Intern (Virtual)',
      period: 'Jun 2024 - Jul 2024',
      description: 'Created Expense Tracker and Exchange Rate Calculator in Java, handling 1000+ daily requests with 95% code coverage. Ensured reliability through unit testing and debugging.',
      achievements: ['1000+ daily requests handled', '95% code coverage', 'Java development'],
      icon: Briefcase
    },
    {
      company: 'Jobsense Institute',
      role: 'Frontend Development Intern',
      period: 'Aug 2023 - Sep 2023',
      location: 'Ujjain, India',
      description: 'Developed a responsive E-commerce website achieving 98% cross-browser compatibility. Built a Task Manager app with JavaScript ES6+, improving efficiency by 40%.',
      achievements: ['98% cross-browser compatibility', '40% efficiency improvement', 'JavaScript ES6+'],
      icon: Globe
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleItems(new Array(experiences.length).fill(true));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-gray-800/10 to-gray-700/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-32 left-20 w-48 h-48 bg-gradient-to-br from-gray-700/10 to-gray-600/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-gray-800 border border-gray-700 rounded-full px-6 py-3 animate-glow">
              <Briefcase className="w-5 h-5 text-gray-400" />
              <span className="font-mono text-sm text-gray-300">Experience</span>
            </div>
          </div>
          
          <h2 className="text-5xl font-bold text-gray-100 mb-6 animate-slide-up font-mono">
            <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Professional Experience
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 font-mono animate-slide-up" style={{animationDelay: '0.2s'}}>
            Building expertise through hands-on development and real-world projects.
          </p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-700"></div>
          
          <div className="space-y-12">
            {experiences.map((exp, index) => {
              const IconComponent = exp.icon;
              return (
                <div
                  key={index}
                  className={`relative flex items-start gap-8 group ${
                    visibleItems[index] ? 'animate-slide-in-right' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  <div className="flex-shrink-0 w-16 h-16 bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-500 hover:bg-gray-600">
                    <IconComponent className="w-8 h-8 text-gray-300 group-hover:text-gray-200 transition-colors duration-300" />
                  </div>
                  
                  <div className="flex-1 bg-gray-800 border border-gray-700 rounded-2xl p-6 hover:shadow-2xl hover:shadow-gray-900/50 transition-all duration-700 hover:scale-[1.02] group">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-100 font-mono">{exp.role}</h3>
                        <h4 className="text-lg text-gray-300 font-semibold font-mono">{exp.company}</h4>
                        {exp.location && (
                          <p className="text-sm text-gray-400 font-mono">{exp.location}</p>
                        )}
                      </div>
                      <div className="text-sm text-gray-400 bg-gray-700 border border-gray-600 px-3 py-1 rounded-full mt-2 sm:mt-0 font-mono">
                        {exp.period}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 font-mono text-sm leading-relaxed">{exp.description}</p>
                    
                    <div className="flex flex-wrap gap-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <span
                          key={achIndex}
                          className="px-3 py-1 bg-gray-700 border border-gray-600 text-gray-300 text-sm rounded-full hover:bg-gray-600 transition-colors duration-300 font-mono"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;