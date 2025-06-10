import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Github, Play, ExternalLink, Code2 } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  demoUrl: string;
  imageUrl?: string;
  onWatchDemo: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  technologies,
  githubUrl,
  demoUrl,
  imageUrl,
  onWatchDemo
}) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden group relative transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-gray-900/50"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated border glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
      
      <div className="relative bg-gray-800 border border-gray-700 rounded-2xl overflow-hidden">
        {/* Project Image/Thumbnail */}
        <div 
          className="h-56 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden"
        >
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <div className="relative">
              <div className="text-8xl transition-all duration-700 group-hover:scale-110 group-hover:rotate-12">
                <Code2 className="w-20 h-20 text-gray-600 group-hover:text-gray-400 transition-colors duration-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-700/20 to-gray-600/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          )}
          
          {/* Image overlay */}
          <div className={`absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-all duration-500 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}></div>
        </div>
        
        <div className="p-6 space-y-4 bg-gray-800/50">
          <div className="space-y-2">
            <h3 className="text-xl font-bold text-gray-100 group-hover:text-gray-50 transition-colors duration-300 font-mono">
              {title}
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed line-clamp-3 group-hover:text-gray-300 transition-colors duration-300">
              {description}
            </p>
          </div>
          
          {/* Technologies */}
          <div className="flex flex-wrap gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-gray-700 text-gray-300 text-xs rounded-full border border-gray-600 transition-all duration-300 hover:bg-gray-600 hover:scale-105 font-mono"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          
          {/* Action Buttons */}
          <div className="flex justify-between items-center pt-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => window.open(githubUrl, '_blank')}
              className="flex items-center gap-1.5 border-gray-600 text-gray-300 hover:border-gray-500 hover:bg-gray-700 hover:text-gray-200 transition-all duration-300 hover:scale-105 group/btn bg-transparent"
            >
              <Github className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
              <span className="font-mono text-xs">View Code</span>
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onWatchDemo()}
              className="flex items-center gap-1.5 border-gray-600 text-gray-300 hover:bg-gray-700 hover:border-gray-500 hover:text-gray-200 transition-all duration-300 hover:scale-105 group/btn"
            >
              <Play className="w-4 h-4 group-hover/btn:rotate-12 transition-transform duration-300" />
              <span className="font-mono text-xs">Demo</span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;