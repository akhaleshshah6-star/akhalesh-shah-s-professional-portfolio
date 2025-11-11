
import React from 'react';
import { GitHub, ExternalLink } from './Icons';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl: string;
  repoUrl: string;
}

const SectionTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-3xl font-bold text-white mb-8 relative inline-block">
    {children}
    <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-accent rounded-full"></span>
  </h2>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, imageUrl, tags, liveUrl, repoUrl }) => {
  return (
    <div className="bg-secondary border border-border-color rounded-lg overflow-hidden flex flex-col group transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent/10">
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-text-secondary mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag) => (
            <span key={tag} className="text-xs font-semibold bg-blue-500/20 text-accent px-2.5 py-1 rounded-full">{tag}</span>
          ))}
        </div>
        <div className="mt-auto flex items-center space-x-4">
          <a href={repoUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-text-secondary hover:text-accent transition-colors">
            <GitHub className="w-5 h-5 mr-2" />
            Source Code
          </a>
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center text-text-secondary hover:text-accent transition-colors">
            <ExternalLink className="w-5 h-5 mr-2" />
            Live Demo
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const projectsData: ProjectCardProps[] = [
    {
      title: 'E-Commerce Platform',
      description: 'A full-featured online store with product listings, cart functionality, and a secure checkout process.',
      imageUrl: 'https://picsum.photos/seed/project1/600/400',
      tags: ['React', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Project Management Tool',
      description: 'A collaborative tool for teams to manage tasks, track progress, and communicate effectively.',
      imageUrl: 'https://picsum.photos/seed/project2/600/400',
      tags: ['Next.js', 'TypeScript', 'GraphQL', 'MongoDB'],
      liveUrl: '#',
      repoUrl: '#',
    },
    {
      title: 'Personal Blog Engine',
      description: 'A lightweight and fast blog built with a static site generator, featuring markdown support and SEO optimization.',
      imageUrl: 'https://picsum.photos/seed/project3/600/400',
      tags: ['Python', 'Django', 'React', 'Docker'],
      liveUrl: '#',
      repoUrl: '#',
    },
  ];

  return (
    <section id="projects" className="py-16">
      <SectionTitle>My Projects</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
   