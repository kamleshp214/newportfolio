import React, { useState, useEffect } from 'react';
import ProjectCard from './ProjectCard';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X, Code2, Sparkles } from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([]);

  const projects = [
    {
      title: 'ResumeAssist',
      description: 'An AI-powered resume analysis tool that provides ATS compatibility scores and actionable feedback to optimize job applications.',
      technologies: ['Flask', 'JavaScript', 'Gemini API'],
      githubUrl: 'https://github.com/kamleshp214/resumeassist',
      demoUrl: 'https://example.com/demo1',
      imageUrl: '/placeholder.svg'
    },
    {
      title: 'DONNA',
      description: 'A Python CLI assistant inspired by Suits\' Donna Paulsen, featuring task tracking and witty notifications.',
      technologies: ['Python'],
      githubUrl: 'https://github.com/kamleshp214/donna',
      demoUrl: 'https://example.com/demo2',
      imageUrl: '/placeholder.svg'
    },
    {
      title: 'Aptify',
      description: 'A simple platform for students to practice aptitude questions with instant feedback and performance tracking, built for ease of use.',
      technologies: ['JavaScript', 'Flask', 'Gemini API'],
      githubUrl: 'https://github.com/kamleshp214/aptify',
      demoUrl: 'https://example.com/demo3',
      imageUrl: '/placeholder.svg'
    },
    {
      title: 'SynapShare',
      description: 'A full-stack collaborative content hub with secure user authentication and optimized performance for 300+ users.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Google Auth'],
      githubUrl: 'https://github.com/kamleshp214/synapshare',
      demoUrl: 'https://example.com/demo4',
      imageUrl: '/placeholder.svg'
    },
    {
      title: 'Second Brain',
      description: 'An AI-powered learning platform for B.Tech students with offline access and productivity tools like a Pomodoro timer.',
      technologies: ['React', 'TypeScript', 'Express.js', 'Dexie.js', 'TailwindCSS', 'Recharts'],
      githubUrl: 'https://github.com/kamleshp214/secondbrain',
      demoUrl: 'https://example.com/demo5',
      imageUrl: '/placeholder.svg'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectElements = document.querySelectorAll('.project-card');
    projectElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleWatchDemo = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gray-900">
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-gray-800/10 to-gray-700/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-l from-gray-700/10 to-gray-600/5 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="flex items-center space-x-2 bg-gray-800 border border-gray-700 rounded-full px-6 py-3 animate-glow">
              <Code2 className="w-5 h-5 text-gray-400" />
              <span className="font-mono text-sm text-gray-300">Featured Work</span>
              <Sparkles className="w-5 h-5 text-gray-400" />
            </div>
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-100 mb-6 animate-slide-up font-mono">
            <span className="bg-gradient-to-r from-gray-200 via-gray-300 to-gray-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed animate-slide-up font-mono" style={{animationDelay: '0.2s'}}>
            A showcase of my recent work, demonstrating expertise in full-stack development and innovative problem-solving.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-card transition-all duration-1000 ${
                visibleProjects[index] 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              data-index={index}
              style={{
                transitionDelay: `${index * 0.2}s`
              }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                demoUrl={project.demoUrl}
                imageUrl={project.imageUrl}
                onWatchDemo={() => handleWatchDemo(project)}
              />
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="max-w-5xl w-full bg-gray-800 border border-gray-700 text-gray-100">
          <DialogHeader>
            <DialogTitle className="flex items-center justify-between font-mono text-xl">
              <span className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-gray-400" />
                {selectedProject?.title} Demo
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsModalOpen(false)}
                className="hover:bg-gray-700 text-gray-400 hover:text-gray-200 transition-all duration-300 hover:rotate-90"
              >
                <X size={20} />
              </Button>
            </DialogTitle>
          </DialogHeader>
          <div className="aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl flex items-center justify-center border border-gray-700 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 to-gray-700/20 animate-pulse"></div>
            <div className="text-center text-gray-300 relative z-10">
              <div className="text-8xl mb-6 animate-float">
                <Code2 className="w-20 h-20 mx-auto text-gray-500" />
              </div>
              <p className="text-xl font-mono mb-2">Demo Video</p>
              <p className="text-sm text-gray-500 font-mono">{selectedProject?.demoUrl}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;