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
      demoUrl: 'https://www.linkedin.com/posts/kamlesh-porwal-2b1a2a1a6_resumeassist-ai-jobsearch-activity-7333767612369125376-503Z?utm_source=share&utm_medium=member_desktop&rcm=ACoAADA0vyUBgydslHZZBbHWHuFkBIC_d1AfT4c',
      imageUrl: '/screenshots/resumeassist.jpg'
    },
    
    {
      title: 'SynapShare',
      description: 'A full-stack collaborative content hub with secure user authentication and optimized performance for 300+ users.',
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JWT', 'Google Auth'],
      githubUrl: 'https://github.com/kamleshp214/synapshare',
      demoUrl: 'https://www.linkedin.com/posts/kamlesh-porwal-2b1a2a1a6_built-something-cool-synapshare-a-collaboration-activity-7324105451992743936-KUua?utm_source=share&utm_medium=member_desktop&rcm=ACoAADA0vyUBgydslHZZBbHWHuFkBIC_d1AfT4c',
      imageUrl: '/screenshots/synapshare.jpg'
    },
    {
      title: 'Second Brain',
      description: 'An AI-powered learning platform for B.Tech students with offline access and productivity tools like a Pomodoro timer.',
      technologies: ['React', 'TypeScript', 'Express.js', 'Dexie.js', 'TailwindCSS', 'Recharts'],
      githubUrl: 'https://github.com/kamleshp214/secondbrain',
      demoUrl: 'https://www.linkedin.com/posts/kamlesh-porwal-2b1a2a1a6_secondbrain-reactjs-studyapp-activity-7327338646561271809-2eyZ?utm_source=share&utm_medium=member_desktop&rcm=ACoAADA0vyUBgydslHZZBbHWHuFkBIC_d1AfT4c',
      imageUrl: '/screenshots/secondbrain.jpg'
    },
    {
      title: 'Aptify',
      description: 'A simple platform for students to practice aptitude questions with instant feedback and performance tracking, built for ease of use.',
      technologies: ['JavaScript', 'Flask', 'Gemini API'],
      githubUrl: 'https://github.com/kamleshp214/aptify',
      demoUrl: 'https://www.linkedin.com/posts/kamlesh-porwal-2b1a2a1a6_aptitude-students-webdev-activity-7330153543904952321-RVM4?utm_source=share&utm_medium=member_desktop&rcm=ACoAADA0vyUBgydslHZZBbHWHuFkBIC_d1AfT4c',
      imageUrl: '/screenshots/aptify.jpg'
    },
    {
      title: 'DONNA',
      description: 'A Python CLI assistant inspired by Suits\' Donna Paulsen, featuring task tracking and witty notifications.',
      technologies: ['Python'],
      githubUrl: 'https://github.com/kamleshp214/donna',
      demoUrl: 'https://www.linkedin.com/posts/kamlesh-porwal-2b1a2a1a6_python-coding-activity-7330611815745232898-XxWj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADA0vyUBgydslHZZBbHWHuFkBIC_d1AfT4c',
      imageUrl: '/screenshots/donna.jpg'
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
        <DialogContent className="max-w-5xl w-full bg-gray-800 border border-gray-700 text-gray-100 p-0 overflow-hidden">
          <DialogHeader className="border-b border-gray-700 p-4">
            <DialogTitle className="flex items-center justify-between font-mono text-xl">
              <span className="flex items-center gap-2">
                <Code2 className="w-5 h-5 text-gray-400" />
                {selectedProject?.title} Demo
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsModalOpen(false)}
                className="hover:bg-gray-700 text-gray-400 hover:text-gray-200 transition-all duration-300 hover:rotate-90 m-0 h-8 w-8 p-0"
              >
                <X size={18} />
              </Button>
            </DialogTitle>
          </DialogHeader>
          <div className="w-full aspect-video bg-black">
            {selectedProject?.demoUrl?.includes('linkedin.com') ? (
              <div className="w-full h-full flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 animate-pulse flex items-center justify-center">
                  <div className="animate-pulse flex flex-col items-center">
                    <Code2 className="w-12 h-12 text-gray-600 mb-2 animate-bounce" />
                    <p className="text-gray-500 font-mono text-sm">Loading video...</p>
                  </div>
                </div>
                <iframe
                  src={`https://www.linkedin.com/embed/feed/update/${selectedProject?.demoUrl.split('activity-')[1].split('-')[0]}`}
                  className="w-full h-full relative z-10"
                  frameBorder="0"
                  allowFullScreen
                  title={`${selectedProject?.title} Demo`}
                  onLoad={(e) => {
                    // Hide the loading state when iframe loads
                    const loadingElement = e.currentTarget.previousSibling as HTMLElement;
                    if (loadingElement) {
                      loadingElement.style.display = 'none';
                    }
                  }}
                ></iframe>
              </div>
            ) : selectedProject?.demoUrl ? (
              <div className="w-full h-full flex items-center justify-center">
                <a
                  href={selectedProject.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 hover:from-gray-800 hover:to-gray-900 transition-all duration-300 rounded-b-xl"
                >
                  <div className="text-center p-6 max-w-md">
                    <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                      <Code2 className="w-16 h-16 mx-auto text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <p className="text-xl font-mono text-gray-200 mb-4">View Demo</p>
                    <p className="text-sm text-gray-400 font-mono group-hover:text-blue-300 transition-colors">
                      Click to open in a new tab
                    </p>
                  </div>
                </a>
              </div>
            ) : (
              <div className="aspect-video bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-b-xl flex items-center justify-center">
                <div className="text-center text-gray-400 p-6 max-w-md">
                  <div className="text-6xl mb-6">
                    <Code2 className="w-16 h-16 mx-auto" />
                  </div>
                  <p className="text-xl font-mono mb-2">Demo Coming Soon</p>
                  <p className="text-sm">Check back later for updates</p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;