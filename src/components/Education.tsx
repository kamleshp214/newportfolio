import React, { useState, useEffect } from 'react';
import { GraduationCap, Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Education = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);

  const certifications = [
    {
      title: 'Fundamentals of UI/UX Design',
      issuer: 'Microsoft (Coursera)',
      date: 'May 2025',
      link: 'https://www.coursera.org/account/accomplishments/verify/4R15UBJA8OR8'
    },
    {
      title: 'Git and GitHub',
      issuer: 'Google (Coursera)',
      date: 'May 2025',
      link: 'https://www.coursera.org/account/accomplishments/verify/M89VXDEW9IWP'
    },
    {
      title: 'AWS Cloud Practitioner Essentials',
      issuer: 'Amazon Web Services (AWS)',
      date: 'May 2025',
      link: 'https://www.linkedin.com/in/kamlesh-porwal-2b1a2a1a6/details/certifications/1747826962954/single-media-viewer/?profileId=ACoAADA0vyUBgydslHZZBbHWHuFkBIC_d1AfT4c'
    }
  ];

  const achievements = [
    'AINCAT 2025: All India Rank 1777 (Engineering)',
    'Technical Project Lead, Mahakal Institute of Technology',
    'Scored 49/60 in AINCAT 2025, Naukri Campus'
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleItems(new Array(certifications.length + achievements.length).fill(true));
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="education" className="py-24 relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <div className="absolute top-32 right-20 w-64 h-64 bg-gradient-to-br from-gray-800/10 to-gray-700/5 rounded-full blur-3xl animate-float"></div>
      </div>
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-gray-800 border border-gray-700 rounded-full px-6 py-3 animate-glow">
              <GraduationCap className="w-5 h-5 text-gray-400" />
              <span className="font-mono text-sm text-gray-300">Education</span>
            </div>
          </div>
          
          <h2 className="text-5xl font-bold text-gray-100 mb-6 animate-slide-up font-mono">
            <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Education & Achievements
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-8">
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 hover:shadow-2xl hover:shadow-gray-900/50 transition-all duration-700 hover:scale-[1.02] group">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gray-700 border border-gray-600 rounded-full flex items-center justify-center text-gray-300 text-2xl group-hover:scale-110 transition-transform duration-500">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-100 font-mono">Bachelor of Technology</h3>
                  <p className="text-gray-400 font-mono">Computer Science & Engineering</p>
                </div>
              </div>
              
              <div className="space-y-3 text-sm">
                <p className="text-gray-400">
                  <span className="font-semibold text-gray-300">Institution:</span> Mahakal Institute of Technology, Ujjain
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold text-gray-300">Duration:</span> 2022 - 2026
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold text-gray-300">CGPA:</span> 7.00/10.0
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-100 mb-6 font-mono">Certifications</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className={`bg-gray-800 border border-gray-700 rounded-xl p-4 hover:bg-gray-700/50 transition-all duration-500 hover:scale-[1.02] group ${
                    visibleItems[index] ? 'animate-slide-in-right' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-gray-400 mt-1 group-hover:text-gray-300 transition-colors duration-300" />
                      <div>
                        <h4 className="font-semibold text-gray-100 text-sm font-mono">{cert.title}</h4>
                        <p className="text-gray-400 text-xs font-mono">{cert.issuer}</p>
                        <p className="text-gray-500 text-xs font-mono flex items-center gap-1 mt-1">
                          <Calendar className="w-3 h-3" />
                          {cert.date}
                        </p>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => window.open(cert.link, '_blank')}
                      className="text-gray-400 hover:text-gray-200 hover:bg-gray-700 transition-all duration-300 hover:scale-110"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <h3 className="text-xl font-bold text-gray-100 mt-8 mb-4 font-mono">Achievements</h3>
            <div className="space-y-3">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className={`bg-gray-800 border border-gray-700 rounded-lg p-3 hover:bg-gray-700/50 transition-all duration-500 group ${
                    visibleItems[certifications.length + index] ? 'animate-slide-in-left' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${(certifications.length + index) * 0.1}s` }}
                >
                  <p className="text-gray-300 text-sm font-mono">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;